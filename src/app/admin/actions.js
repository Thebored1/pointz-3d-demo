'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  checkAdminCredentials,
  clearAdminSession,
  createAdminSession,
} from '../../lib/admin';

// Best-effort brute-force guard. Keyed in memory, so it resets on redeploy or
// when the process restarts — good enough to slow down a script, not a real
// distributed attack. Real deployments should move this to the edge/DB.
const failures = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

async function clientIp() {
  const headerStore = await headers();
  const forwarded = headerStore.get('x-forwarded-for');
  return String(forwarded || 'local').split(',')[0].trim();
}

function recordFailure(ip) {
  const entry = failures.get(ip) || { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= MAX_ATTEMPTS) entry.lockedUntil = Date.now() + LOCKOUT_MS;
  failures.set(ip, entry);
}

export async function adminLogin(prevState, formData) {
  const ip = await clientIp();
  const entry = failures.get(ip);
  if (entry && entry.lockedUntil > Date.now()) {
    const mins = Math.ceil((entry.lockedUntil - Date.now()) / 60000);
    return { error: `Too many attempts. Try again in ${mins} min.` };
  }

  const username = String(formData.get('username') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!username || !password) {
    return { error: 'Enter both username and password.' };
  }

  if (!checkAdminCredentials(username, password)) {
    recordFailure(ip);
    return { error: 'Invalid username or password.' };
  }

  failures.delete(ip);
  await createAdminSession();
  redirect('/admin/entries');
}

export async function adminLogout() {
  await clearAdminSession();
  redirect('/admin/login');
}
