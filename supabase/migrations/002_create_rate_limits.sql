-- Point Zero Road Lines — per-IP rate limiting for the public forms.
-- Safe to run more than once.
--
-- Why a table and not an in-memory counter: the site runs on Vercel's serverless
-- runtime, where each request may land on a fresh instance with its own empty
-- memory. A process-local Map would reset constantly and stop almost nothing.
--
-- Only ALLOWED submissions are recorded. If blocked attempts extended the
-- window, someone hammering the form would lock themselves out permanently
-- instead of simply being held at the cap.

create table if not exists public.rate_limit_hits (
  id         bigserial primary key,
  -- Scope + identity, e.g. 'quote:203.0.113.5'. Scoping per form means the
  -- contact form cannot exhaust the quote form's budget.
  key        text not null,
  created_at timestamptz not null default now()
);

-- Every read is "recent rows for one key", so key must lead the index.
create index if not exists rate_limit_hits_key_created_idx
  on public.rate_limit_hits (key, created_at desc);

-- Same posture as quote_requests: RLS on with no policies, so anon and
-- authenticated clients get nothing. Writes go through service_role.
alter table public.rate_limit_hits enable row level security;

-- Check and record in ONE round trip. The Hobby plan gives functions a ~10s
-- budget, and a lead submission should not spend it on limiter bookkeeping.
create or replace function public.check_rate_limit(
  p_key      text,
  p_hour_max int default 5,
  p_day_max  int default 15
)
returns table (allowed boolean, retry_after_seconds int)
language plpgsql
as $$
declare
  v_hour_count  int;
  v_day_count   int;
  v_oldest_hour timestamptz;
  v_oldest_day  timestamptz;
begin
  -- Serialize concurrent checks for this key. Without it two parallel
  -- submissions can both read the same stale count and both slip past the cap.
  -- The lock is per-key and released when the transaction ends.
  perform pg_advisory_xact_lock(hashtext(p_key));

  -- Opportunistic prune, keyed so it stays cheap. Hobby-tier cron is capped at
  -- roughly one run a day, which is too coarse to keep this table small on a
  -- free Supabase project — so each call cleans up after itself.
  delete from public.rate_limit_hits
   where key = p_key
     and created_at < now() - interval '1 day';

  select count(*), min(created_at)
    into v_hour_count, v_oldest_hour
    from public.rate_limit_hits
   where key = p_key
     and created_at > now() - interval '1 hour';

  -- Everything older than a day is already gone, so this is the daily window.
  select count(*), min(created_at)
    into v_day_count, v_oldest_day
    from public.rate_limit_hits
   where key = p_key;

  if v_hour_count >= p_hour_max then
    return query
      select false,
             greatest(1, extract(epoch from (v_oldest_hour + interval '1 hour' - now()))::int);
    return;
  end if;

  if v_day_count >= p_day_max then
    return query
      select false,
             greatest(1, extract(epoch from (v_oldest_day + interval '1 day' - now()))::int);
    return;
  end if;

  insert into public.rate_limit_hits (key) values (p_key);

  return query select true, 0;
end;
$$;
