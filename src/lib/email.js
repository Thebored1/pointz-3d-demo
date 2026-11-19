import { Resend } from 'resend';
import { CONTACT_INFO, SITE_NAME } from './site';

// Transactional email via Resend. Server-only — never import from a client
// component, or RESEND_API_KEY ends up in the browser bundle.
//
// Every function here is BEST-EFFORT: the Supabase insert is the source of
// truth for a lead. Email is a convenience notification, so a send failure
// (or missing config) must never bubble up and fail the form submission.

// Where lead notifications are delivered. Comma-separate LEAD_NOTIFICATION_EMAIL
// to notify several people; defaults to the public-facing inbox plus the shared
// operations address.
const NOTIFY_TO = (
  process.env.LEAD_NOTIFICATION_EMAIL ||
  `${CONTACT_INFO.email},deepak.sharma@virtualxcellence.com`
)
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);

// The "from" address. Resend requires this to be on a domain you've verified
// in the Resend dashboard. Until a real domain is verified, Resend's shared
// sandbox sender (onboarding@resend.dev) works for testing.
const FROM = process.env.RESEND_FROM_EMAIL || `${SITE_NAME} <onboarding@resend.dev>`;

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Brand palette (mirrors globals.css). Inlined because email clients don't
// honour CSS variables or <style> reliably.
const C = {
  navy: '#0d1b2a',
  navy2: '#13293f',
  cyan: '#00b9f2',
  cyanTint: '#e8f8fe',
  ink: '#1a1a1a',
  gray: '#6b7785',
  line: '#e6ebf0',
  cream: '#f5f3ef',
  white: '#ffffff',
  font: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif",
};

// Remaining detail fields (name/company/phone/email/route are rendered in their
// own dedicated blocks), in display order. Only those present are shown.
const DETAIL_FIELDS = [
  ['service', 'Service'],
  ['freight_type', 'Freight'],
  ['timeline', 'Timeline'],
  ['details', 'Details / Notes'],
];

function detailRow(label, value, isLast) {
  const border = isLast ? '' : `border-bottom:1px solid ${C.line};`;
  return `
      <tr>
        <td style="padding:12px 0;${border}font:600 11px/1.4 ${C.font};color:${C.gray};letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;vertical-align:top;width:120px">${esc(label)}</td>
        <td style="padding:12px 0 12px 16px;${border}font:400 15px/1.55 ${C.font};color:${C.ink};vertical-align:top">${esc(value)}</td>
      </tr>`;
}

// Bulletproof, table-based button (renders in Outlook too).
function button(label, href, { solid } = {}) {
  const bg = solid ? C.navy : C.white;
  const fg = solid ? C.white : C.navy;
  const border = solid ? C.navy : C.line;
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;margin:0 8px 0 0">
    <tr><td style="border-radius:8px;background:${bg};border:1px solid ${border}">
      <a href="${esc(href)}" style="display:inline-block;padding:11px 22px;font:600 14px/1 ${C.font};color:${fg};text-decoration:none">${esc(label)}</a>
    </td></tr>
  </table>`;
}

function toHtml(kind, title, row) {
  const isQuote = kind === 'quote';
  const badge = isQuote ? 'NEW QUOTE REQUEST' : 'NEW CONTACT MESSAGE';
  const name = row.name || 'Website visitor';

  // Tappable phone/email chips.
  const contactChips = [];
  if (row.phone) {
    contactChips.push(
      `<a href="tel:${esc(String(row.phone).replace(/[^\d+]/g, ''))}" style="font:600 14px/1 ${C.font};color:${C.navy};text-decoration:none">&#128222;&nbsp;${esc(row.phone)}</a>`,
    );
  }
  if (row.email) {
    contactChips.push(
      `<a href="mailto:${esc(row.email)}" style="font:600 14px/1 ${C.font};color:${C.navy};text-decoration:none">&#9993;&nbsp;${esc(row.email)}</a>`,
    );
  }
  const contactRow = contactChips.length
    ? `<tr><td style="padding:0 32px 20px">${contactChips.join('<span style="color:' + C.line + '">&nbsp;&nbsp;|&nbsp;&nbsp;</span>')}</td></tr>`
    : '';

  // Route band — only when both ends exist (quotes).
  const routeBand =
    row.pickup_location || row.delivery_location
      ? `<tr><td style="padding:0 32px 22px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.cyanTint};border-radius:10px">
            <tr><td style="padding:16px 20px">
              <div style="font:700 10px/1 ${C.font};color:${C.navy};letter-spacing:.1em;opacity:.55;margin-bottom:8px">ROUTE</div>
              <span style="font:600 16px/1.4 ${C.font};color:${C.navy}">${esc(row.pickup_location || '—')}</span>
              <span style="color:${C.cyan};font-weight:700;padding:0 10px">&rarr;</span>
              <span style="font:600 16px/1.4 ${C.font};color:${C.navy}">${esc(row.delivery_location || '—')}</span>
            </td></tr>
          </table>
        </td></tr>`
      : '';

  const present = DETAIL_FIELDS.filter(([k]) => row[k]);
  const detailCells = present
    .map(([k, label], i) => detailRow(label, row[k], i === present.length - 1))
    .join('');
  const detailBlock = detailCells
    ? `<tr><td style="padding:4px 32px 8px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailCells}</table>
      </td></tr>`
    : '';

  const actions = [];
  if (row.email) actions.push(button(`Reply to ${name.split(' ')[0]}`, `mailto:${row.email}`, { solid: true }));
  if (row.phone) actions.push(button('Call', `tel:${String(row.phone).replace(/[^\d+]/g, '')}`));
  const actionRow = actions.length
    ? `<tr><td style="padding:14px 32px 28px">${actions.join('')}</td></tr>`
    : '';

  return `<!doctype html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:${C.cream};-webkit-font-smoothing:antialiased">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(title)} from ${esc(name)} &mdash; reply or call directly.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.cream}">
    <tr><td align="center" style="padding:28px 16px">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:${C.white};border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(13,27,42,.08)">

        <!-- Header -->
        <tr><td align="center" style="background:${C.navy};padding:24px 32px">
          <div style="font:800 19px/1.2 ${C.font};color:${C.white};letter-spacing:-.01em">Point Zero <span style="color:${C.cyan}">Road Lines</span></div>
          <table role="presentation" align="center" cellpadding="0" cellspacing="0" style="margin:12px auto 0">
            <tr><td style="background:${C.cyan};border-radius:20px;padding:6px 16px;font:700 10px/1 ${C.font};color:${C.navy};white-space:nowrap;letter-spacing:.08em">${badge}</td></tr>
          </table>
        </td></tr>

        <!-- Name / company -->
        <tr><td style="padding:28px 32px 6px">
          <div style="font:800 24px/1.2 ${C.font};color:${C.navy};letter-spacing:-.02em">${esc(name)}</div>
          ${row.company ? `<div style="font:500 15px/1.4 ${C.font};color:${C.gray};margin-top:4px">${esc(row.company)}</div>` : ''}
        </td></tr>

        ${contactRow}
        ${routeBand}
        ${detailBlock}
        ${actionRow}

        <!-- Footer -->
        <tr><td style="padding:18px 32px;background:${C.cream};border-top:1px solid ${C.line}">
          <div style="font:400 12px/1.6 ${C.font};color:${C.gray}">
            Sent automatically from the ${esc(SITE_NAME)} website when a form was submitted.
            <br>Hit <b style="color:${C.navy}">Reply</b> to respond directly to the customer.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

function toText(kind, title, row) {
  const order = [
    ['name', 'Name'],
    ['company', 'Company'],
    ['phone', 'Phone'],
    ['email', 'Email'],
    ['service', 'Service'],
    ['pickup_location', 'Pickup'],
    ['delivery_location', 'Delivery'],
    ['freight_type', 'Freight'],
    ['timeline', 'Timeline'],
    ['details', 'Details'],
  ];
  return (
    `${SITE_NAME} — ${title}\n\n` +
    order
      .filter(([k]) => row[k])
      .map(([k, label]) => `${label}: ${row[k]}`)
      .join('\n')
  );
}

/**
 * Emails the team when a quote or contact form is submitted.
 *
 * @param {'quote'|'contact'} type
 * @param {Record<string, any>} row  the row written to quote_requests
 * @returns {Promise<{ok: boolean, skipped?: boolean, error?: string}>}
 */
export async function sendLeadNotification(type, row) {
  const resend = getClient();
  if (!resend) {
    // No API key configured — silently skip so local/dev submissions still work.
    return { ok: false, skipped: true };
  }

  const title =
    type === 'contact' ? 'New contact message' : 'New quote request';
  const who = row.name || row.email || 'a website visitor';
  const subject = `${title}: ${who}`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      // Lets the team hit "Reply" and reach the customer directly.
      replyTo: row.email || undefined,
      subject,
      html: toHtml(type, title, row),
      text: toText(type, title, row),
    });
    if (error) throw new Error(error.message || 'Resend returned an error');
    return { ok: true };
  } catch (cause) {
    console.error('[email] lead notification failed:', cause);
    return { ok: false, error: String(cause?.message || cause) };
  }
}

/**
 * Renders the notification email without sending it. Useful for previews and
 * tests. Returns the same html/text that sendLeadNotification would dispatch.
 *
 * @param {'quote'|'contact'} type
 * @param {Record<string, any>} row
 * @returns {{ subject: string, html: string, text: string }}
 */
export function renderLeadEmail(type, row) {
  const title =
    type === 'contact' ? 'New contact message' : 'New quote request';
  const who = row.name || row.email || 'a website visitor';
  return {
    subject: `${title}: ${who}`,
    html: toHtml(type, title, row),
    text: toText(type, title, row),
  };
}

// Who gets the Supabase keep-alive reports (weekly reminder + failure alerts).
const KEEPALIVE_TO = (
  process.env.KEEPALIVE_NOTIFY_EMAIL || 'nitesh.sharma@virtualxcellence.com'
)
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);

// Status email from the daily keep-alive cron. `kind` is 'weekly' (the day a
// free Supabase project would otherwise hit its 7-day inactivity pause — a
// prompt to check manually) or 'failure' (the keep-alive read itself failed).
export async function sendKeepAliveReport({ kind, ok, error, at }) {
  const resend = getClient();
  if (!resend) return { ok: false, skipped: true };

  const ref = (process.env.SUPABASE_URL || '').match(/https?:\/\/([^.]+)\./)?.[1];
  const dashboard = ref
    ? `https://supabase.com/dashboard/project/${ref}`
    : 'https://supabase.com/dashboard/projects';

  const subject =
    kind === 'failure'
      ? `[Action needed] Supabase keep-alive FAILED — ${SITE_NAME}`
      : `Weekly Supabase check — ${SITE_NAME} (keep-alive ${ok ? 'OK' : 'FAILED'})`;

  const status = ok ? 'Keep-alive read succeeded' : `Keep-alive read FAILED: ${error}`;
  const intro =
    kind === 'failure'
      ? 'Today’s automatic keep-alive could not reach the database. If this keeps failing, Supabase may pause the project after 7 days without activity — please check now.'
      : 'This is the 7th day — the point a free Supabase project would be paused for inactivity. The site pings the database daily, but please confirm by hand.';

  const steps = [
    'Open the Supabase dashboard and confirm the project status is Active (not Paused).',
    'If it shows Paused, click Restore project.',
    'Optional: open Table Editor → quote_requests to confirm recent leads are saving.',
  ];

  const html = `<div style="font:15px/1.55 ${C.font};color:${C.ink};max-width:560px">
  <h2 style="font:700 18px/1.3 ${C.font};color:${C.navy};margin:0 0 12px">${esc(subject)}</h2>
  <p style="margin:0 0 12px">${esc(intro)}</p>
  <p style="margin:0 0 12px;padding:10px 14px;border-radius:8px;background:${ok ? C.cyanTint : '#fdecec'};color:${ok ? C.navy : '#b42318'};font-weight:600">${esc(status)}<br><span style="font-weight:400;color:${C.gray};font-size:13px">Checked ${esc(at)}</span></p>
  <ol style="margin:0 0 16px;padding-left:20px">${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
  ${button('Open Supabase dashboard', dashboard, { solid: true })}
</div>`;

  const text = [subject, '', intro, '', `${status} (checked ${at})`, '', ...steps.map((s, i) => `${i + 1}. ${s}`), '', dashboard].join('\n');

  try {
    const { error: sendError } = await resend.emails.send({
      from: FROM,
      to: KEEPALIVE_TO,
      subject,
      html,
      text,
    });
    if (sendError) throw new Error(sendError.message || 'Resend returned an error');
    return { ok: true };
  } catch (cause) {
    console.error('[email] keep-alive report failed:', cause);
    return { ok: false, error: String(cause?.message || cause) };
  }
}
