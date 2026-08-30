// Admin auth for /admin — stateless HMAC-signed session cookie, no new deps.
// Node's crypto only; never import this file from a client component.
//
// Credentials come from ADMIN_USERNAME / ADMIN_PASSWORD. They fall back to
// admin / admin so a local checkout runs without setup, but that fallback is
// refused in production — shipping it would leave every lead's name, phone and
// email readable by anyone who finds /admin.
// The session is signed with ADMIN_SESSION_SECRET, or a hash derived from
// SUPABASE_SERVICE_ROLE_KEY when it is not set.

import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_COOKIE = 'pz_admin_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

// Resolved per call rather than at import, so the production check runs where
// it can be reported instead of crashing the module graph on load.
function adminCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (username && password) return { username, password };

  // Same posture as sessionSecret() below: refuse to fall back in production.
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'ADMIN_USERNAME and ADMIN_PASSWORD must both be set in production; refusing to fall back to the admin/admin default',
    );
  }

  return { username: username || 'admin', password: password || 'admin' };
}

function sessionSecret() {
  if (process.env.ADMIN_SESSION_SECRET) return process.env.ADMIN_SESSION_SECRET;
  const base = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (base) return createHash('sha256').update(`pz-admin-session:${base}`).digest('hex');
  if (process.env.NODE_ENV === 'production') {
    throw new Error('ADMIN_SESSION_SECRET or SUPABASE_SERVICE_ROLE_KEY must be set to sign admin sessions');
  }
  return 'insecure-dev-only-session-secret';
}

// Hash both sides so timingSafeEqual gets equal-length buffers and the
// comparison never leaks the length of the real password.
function safeEqual(provided, expected) {
  const a = createHash('sha256').update(String(provided)).digest();
  const b = createHash('sha256').update(String(expected)).digest();
  return timingSafeEqual(a, b);
}

export function checkAdminCredentials(username, password) {
  const expected = adminCredentials();
  // Both comparisons always run — && would short-circuit on a wrong username
  // and return faster than a wrong password, which is a timing signal.
  const userOk = safeEqual(username, expected.username);
  const passOk = safeEqual(password, expected.password);
  return userOk && passOk;
}

function sign(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = createHmac('sha256', sessionSecret()).update(body).digest('base64url');
  return `${body}.${sig}`;
}

function verify(token) {
  const parts = String(token || '').split('.');
  if (parts.length !== 2) return false;
  const [body, sig] = parts;
  const expected = createHmac('sha256', sessionSecret()).update(body).digest('base64url');
  if (expected.length !== sig.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) {
    return false;
  }
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    return payload?.sub === 'admin' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export async function createAdminSession() {
  const token = sign({ sub: 'admin', exp: Date.now() + SESSION_TTL_MS });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdmin() {
  const cookieStore = await cookies();
  return verify(cookieStore.get(SESSION_COOKIE)?.value);
}

// Guard for server components and data fetches. `redirect` throws, so this is
// a terminal check: any code after it only runs when the session is valid.
export async function requireAdmin() {
  if (!(await isAdmin())) {
    redirect('/admin/login');
  }
}
