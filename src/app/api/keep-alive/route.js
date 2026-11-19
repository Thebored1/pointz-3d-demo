import { getSupabaseAdmin } from '@/lib/supabase';

// Daily keep-alive, hit by the Vercel Cron in vercel.json. Supabase pauses
// free-tier projects after a week with no activity; one tiny read a day keeps
// the database awake even when no forms are submitted.
export const dynamic = 'force-dynamic';

export async function GET(request) {
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>` when that env var
  // is set, so with it configured only the cron can trigger this route.
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { error } = await getSupabaseAdmin()
      .from('quote_requests')
      .select('id')
      .limit(1);

    if (error) {
      console.error('[keep-alive] Supabase query failed:', error.message);
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true, at: new Date().toISOString() });
  } catch (err) {
    console.error('[keep-alive] Failed:', err.message);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
