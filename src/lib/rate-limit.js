// Per-IP rate limiting for the public forms. Server-only — this reaches the
// database with the service_role client, so never import it from a client
// component.
//
// The whole thing FAILS OPEN. A real customer being told "no" is a lost job;
// abuse getting through is a few junk rows dispatch can delete. So every
// failure path here — no IP, database unreachable, malformed response — lets
// the submission proceed. That mirrors how email is treated in submit-quote:
// the lead is what matters, everything around it is best-effort.

import { headers } from 'next/headers';
import { getSupabaseAdmin } from './supabase';

// Chosen to sit well clear of real behaviour: a customer who fills in the quote
// form, mistypes an email, and resubmits twice is nowhere near five.
const HOUR_MAX = 5;
const DAY_MAX = 15;

/**
 * The visitor's IP, or null when it cannot be determined.
 *
 * `request.ip` was removed after Next 14, so this reads the forwarding headers
 * directly. On Vercel the proxy overwrites `x-forwarded-for` with the real
 * client address, so the leftmost entry can be trusted; behind a different
 * proxy it could be spoofed, which is the usual caveat for IP-based limits.
 */
async function clientIp() {
  const h = await headers();

  const forwarded = h.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0].trim();
    if (first) return first;
  }

  return h.get('x-real-ip')?.trim() || null;
}

function waitMessage(seconds) {
  const minutes = Math.ceil(Math.max(seconds, 60) / 60);
  const when =
    minutes >= 120 ? `in about ${Math.round(minutes / 60)} hours` :
    minutes >= 60 ? 'in about an hour' :
    `in about ${minutes} minutes`;

  return `We have already received several requests from your connection. Please try again ${when}, or call (647) 680-1300 and dispatch will take your details directly.`;
}

/**
 * Records a submission attempt and reports whether it may proceed.
 *
 * @param {'quote'|'contact'} scope Separate budget per form, so a burst on one
 *   cannot lock a visitor out of the other.
 * @returns {Promise<{ok: true} | {ok: false, error: string}>}
 */
export async function enforceRateLimit(scope) {
  let ip;
  try {
    ip = await clientIp();
  } catch (cause) {
    console.error('[rate-limit] could not read request headers:', cause);
    return { ok: true };
  }

  // No IP means no way to tell visitors apart. Bucketing them under a shared
  // key would let one script lock out every genuine customer at once, so the
  // safe move is to not limit at all.
  if (!ip) return { ok: true };

  try {
    const { data, error } = await getSupabaseAdmin().rpc('check_rate_limit', {
      p_key: `${scope}:${ip}`,
      p_hour_max: HOUR_MAX,
      p_day_max: DAY_MAX,
    });
    if (error) throw new Error(error.message);

    // The function returns a single row; supabase-js hands back an array.
    const row = Array.isArray(data) ? data[0] : data;
    if (!row) throw new Error('check_rate_limit returned no row');

    if (row.allowed) return { ok: true };

    return { ok: false, error: waitMessage(Number(row.retry_after_seconds) || 0) };
  } catch (cause) {
    // Limiter is down. Let the lead through and make the failure visible in the
    // logs rather than silently turning away customers.
    console.error('[rate-limit] check failed, allowing submission:', cause);
    return { ok: true };
  }
}
