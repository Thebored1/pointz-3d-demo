// Analytics IDs — public, mirrored from the point-zero-roadlines main project so
// GTM, GA4 and Google Ads all report into the same properties.
export const GTM_ID = 'GTM-52CGB9JP';
export const GA_ID = 'G-BS27ETEHXB';

/**
 * Google Ads account. Public, like the GTM and GA4 IDs above. Configuring it
 * unconditionally means remarketing audiences start building immediately, even
 * before a conversion action exists.
 */
export const ADS_ID = 'AW-780615979';

/**
 * Google Ads conversion event name.
 *
 * Google Ads identifies a conversion action by a named event rather than a
 * send_to label, so this must match the event name on the conversion action in
 * the Ads UI exactly. Overridable via env for staging accounts.
 */
export const ADS_CONVERSION_EVENT =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_EVENT ||
  'conversion_event_request_quote';

/** Safe gtag wrapper — no-ops on the server or before gtag.js loads. */
function gtag(...args) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag(...args);
}

/**
 * Fires a lead conversion from a genuinely successful form submission.
 *
 * Records both the GA4 `generate_lead` event (for reporting) and the Google Ads
 * conversion (for campaign optimisation). Call this only on real success — the
 * point of firing from JS is that it counts leads dispatch can follow up on, so
 * an invalid or rejected submit must not reach it.
 *
 * @param {'quote'|'contact'} formType
 */
export function trackLeadFormConversion(formType = 'quote') {
  gtag('event', 'generate_lead', { form_type: formType });
  gtag('event', ADS_CONVERSION_EVENT, { form_type: formType });
}

/** Fires when a visitor taps a `tel:` link. */
export function trackPhoneClick(phone) {
  gtag('event', 'phone_click', { phone_number: phone });
}

/** Fires when a visitor taps the WhatsApp launcher or any wa.me link. */
export function trackWhatsAppClick() {
  gtag('event', 'whatsapp_click');
}
