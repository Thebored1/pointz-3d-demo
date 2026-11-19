import { getSupabaseAdmin } from '@/lib/supabase';
import { sendKeepAliveReport } from '@/lib/email';

// Daily keep-alive, hit by the Vercel Cron in vercel.json. Supabase pauses
// free-tier projects after a week with no activity; one tiny read a day keeps
// the database awake even when no forms are submitted.
//
// The read doubles as a health check: if Supabase is paused, down, erroring or
// hangs past 10s, an alert email goes out. Healthy days send nothing.
export const dynamic = 'force-dynamic';

async function ping() {
  try {
    const { error } = await getSupabaseAdmin()
      .from('quote_requests')
      .select('id')
      .limit(1)
      .abortSignal(AbortSignal.timeout(10_000));
    return error ? { ok: false, error: error.message } : { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export async function GET(request) {
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>` when that env var
  // is set, so with it configured only the cron can trigger this route.
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const at = new Date().toISOString();
  const result = await ping();
  if (!result.ok) console.error('[keep-alive] Supabase query failed:', result.error);

  // Email only when something is wrong. `?report=test` sends a sample alert
  // (still requires the cron secret) to confirm email delivery works.
  const forced = request.nextUrl.searchParams.get('report') === 'test';
  let email = null;
  if (!result.ok || forced) {
    email = await sendKeepAliveReport({
      ok: result.ok,
      error: result.ok ? 'Test alert — Supabase is actually healthy.' : result.error,
      at,
    });
  }

  return Response.json(
    { ...result, at, emailed: email ? email.ok : false },
    { status: result.ok ? 200 : 500 },
  );
}
