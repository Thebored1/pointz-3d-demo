-- Point Zero Road Lines — quote requests for this site.
-- Safe to run more than once.
--
-- Its own table, not the existing public.leads. That table belongs to the
-- marketing site on the other domain; keeping them separate means neither
-- site's schema changes can break the other, and the two sets of submissions
-- never have to be told apart after the fact.

create table if not exists public.quote_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- Required: without a way to reach the customer the row is worthless.
  name        text not null,
  phone       text not null,
  email       text not null,

  -- Everything else is optional. A customer who does not yet know their
  -- delivery date or freight type should still be able to send the form.
  company           text,
  pickup_location   text,
  delivery_location text,
  freight_type      text,
  service           text,
  timeline          text,
  details           text
);

-- Newest first is the only way this gets read.
create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);

-- RLS on with NO policies: anon and authenticated clients can neither read nor
-- write this table. Writes go through the service_role key, which bypasses RLS.
-- Without this, anyone reading the site's JavaScript could read every customer
-- enquiry you have ever received.
alter table public.quote_requests enable row level security;
