import { createClient } from '@supabase/supabase-js';

// Server-only client. The service_role key bypasses RLS, which is how inserts
// reach a table that has RLS enabled and no policies — never import this from
// a client component, or the key ends up in the browser bundle.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set. Copy .env.example to .env.local and fill them in.',
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
