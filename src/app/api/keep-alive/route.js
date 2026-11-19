import { getSupabaseAdmin } from '@/lib/supabase';
import { sendKeepAliveReport } from '@/lib/email';

// Daily keep-alive, hit by the Vercel Cron in vercel.json. Supabase pauses
// free-tier projects after a week with no activity; one tiny read a day keeps
// the database awake even when no forms are submitted.
//
// Every 7th day (the day the project would otherwise be paused) it also emails
// a reminder to check Supabase by hand; any failed read is emailed right away.
export const dynamic = 'force-dynamic';

const DAY_MS = 24 * 60 * 60 * 1000;

async function ping() {
  try {
    const { error } = await getSupabaseAdmin()
      .from('quote_requests')
      .select('id')
      .limit(1);
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

  const now = new Date();
  const at = now.toISOString();
  const result = await ping();
  if (!result.ok) console.error('[keep-alive] Supabase query failed:', result.error);

  // Fixed 7-day cycle on UTC day numbers, so it fires on the same weekday
  // regardless of deploys. `?report=weekly` forces it (still needs the secret).
  const weeklyDay = Math.floor(now.getTime() / DAY_MS) % 7 === 0;
  const forced = request.nextUrl.searchParams.get('report') === 'weekly';

  let email = null;
  if (!result.ok) {
    email = await sendKeepAliveReport({ kind: 'failure', ok: false, error: result.error, at });
  } else if (weeklyDay || forced) {
    email = await sendKeepAliveReport({ kind: 'weekly', ok: true, at });
  }

  return Response.json(
    { ...result, at, emailed: email ? email.ok : false },
    { status: result.ok ? 200 : 500 },
  );
}
