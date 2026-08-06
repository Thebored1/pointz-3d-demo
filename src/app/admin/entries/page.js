import Link from 'next/link';
import { requireAdmin } from '../../../lib/admin';
import { getSupabaseAdmin } from '../../../lib/supabase';
import { adminLogout } from '../actions';
import '../admin.css';

// Read-only by design: this page and its helpers only ever SELECT. There is no
// edit, delete, or export action anywhere in the admin panel.
const FIELDS = [
  { key: 'created_at', label: 'Received' },
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone' },
  { key: 'email', label: 'Email' },
  { key: 'company', label: 'Company' },
  { key: 'service', label: 'Service' },
  { key: 'pickup_location', label: 'Pickup' },
  { key: 'delivery_location', label: 'Delivery' },
  { key: 'freight_type', label: 'Freight' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'details', label: 'Details' },
];

function formatCell(row, { key }) {
  const value = row[key];
  if (value === null || value === undefined || value === '') return '—';
  if (key === 'created_at') {
    return new Date(value).toLocaleString('en-CA', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  }
  return value;
}

export default async function AdminEntriesPage() {
  await requireAdmin();

  const { data: rows, error } = await getSupabaseAdmin()
    .from('quote_requests')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-brand">
          Point Zero Road Lines
          <small>Admin · Read-only</small>
        </div>
        <div className="admin-header-actions">
          <Link href="/">View site</Link>
          <form action={adminLogout}>
            <button type="submit">Log out</button>
          </form>
        </div>
      </header>

      <main className="admin-main">
        <h1 className="admin-title">Quote &amp; contact requests</h1>
        <p className="admin-sub">
          Submissions from the get-a-quote and contact forms land in the same
          table — contact messages are tagged with &ldquo;Contact:&rdquo; in the Service column.
        </p>

        <div className="admin-stats">
          <div className="admin-stat">
            <div className="admin-stat-value">
              {error ? '—' : rows.length}
            </div>
            <div className="admin-stat-label">Showing</div>
          </div>
          {error ? (
            <div className="admin-stat">
              <div className="admin-stat-value" style={{ color: '#8a1f1f' }}>
                Error
              </div>
              <div className="admin-stat-label">Loading failed</div>
            </div>
          ) : null}
        </div>

        <p className="admin-notice">
          This panel is read-only. Entries can only be viewed here — to update or
          remove records, use the Supabase dashboard.
        </p>

        {error ? (
          <div className="admin-error">
            Could not load entries ({error.message}). Check the Supabase
            connection and try again.
          </div>
        ) : rows.length === 0 ? (
          <div className="admin-table-wrap">
            <div className="admin-empty">
              <strong>No submissions yet</strong>
              Quote and contact requests will appear here as they come in.
            </div>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  {FIELDS.map((f) => (
                    <th key={f.key}>{f.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    {FIELDS.map((f) => (
                      <td
                        key={f.key}
                        className={f.key === 'details' ? 'cell-details' : undefined}
                      >
                        {formatCell(row, f)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
