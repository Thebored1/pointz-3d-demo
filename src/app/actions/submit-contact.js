'use server';

import { getSupabaseAdmin } from '../../lib/supabase';
import { sendLeadNotification } from '../../lib/email';
import { enforceRateLimit } from '../../lib/rate-limit';

/**
 * Contact-form submissions land in the same public.quote_requests table as
 * quotes, tagged via `service` so they're distinguishable. Plain insert, no
 * email/rate-limiting — matching the quote pipeline.
 */
export async function submitContact(formData) {
  const name = `${String(formData.get('first_name') ?? '').trim()} ${String(formData.get('last_name') ?? '').trim()}`.trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (name.length < 2) return { ok: false, error: 'Please enter your name.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if ((phone.match(/\d/g) ?? []).length < 10) {
    return { ok: false, error: 'Please enter a valid phone number.' };
  }
  if (!message) return { ok: false, error: 'Please enter a message.' };

  // Validated first, then limited — see submit-quote for the rationale.
  const limit = await enforceRateLimit('contact');
  if (!limit.ok) return limit;

  const row = {
    name,
    email,
    phone,
    service: subject ? `Contact: ${subject}` : 'Contact form',
    details: message.slice(0, 4000),
  };

  try {
    const { error } = await getSupabaseAdmin().from('quote_requests').insert(row);
    if (error) throw new Error(error.message);
  } catch (cause) {
    console.error('[submit-contact] insert failed:', cause);
    return {
      ok: false,
      error: 'Something went wrong sending your message. Please call (647) 680-1300 and we will take your details directly.',
    };
  }

  // Best-effort notification — see submit-quote for the rationale.
  await sendLeadNotification('contact', row);

  return { ok: true };
}
