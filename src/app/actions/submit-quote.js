'use server';

import { getSupabaseAdmin } from '../../lib/supabase';
import { sendLeadNotification } from '../../lib/email';

const MAX = {
  name: 120,
  phone: 40,
  email: 200,
  company: 200,
  pickup_location: 200,
  delivery_location: 200,
  freight_type: 200,
  service: 120,
  timeline: 120,
  details: 4000,
};

function clean(value, field) {
  return String(value ?? '').trim().slice(0, MAX[field]);
}

/**
 * Writes a quote request to public.quote_requests.
 *
 * Validation runs here rather than only in the browser: the `required`
 * attributes on the form are a UX affordance, and anything can call a server
 * action directly.
 */
export async function submitQuote(formData) {
  const row = {
    name: clean(formData.get('name'), 'name'),
    phone: clean(formData.get('phone'), 'phone'),
    email: clean(formData.get('email'), 'email'),
    company: clean(formData.get('company'), 'company'),
    pickup_location: clean(formData.get('pickup_location'), 'pickup_location'),
    delivery_location: clean(formData.get('delivery_location'), 'delivery_location'),
    freight_type: clean(formData.get('freight_type'), 'freight_type'),
    service: clean(formData.get('service'), 'service'),
    timeline: clean(formData.get('timeline'), 'timeline'),
    details: clean(formData.get('details'), 'details'),
  };

  if (row.name.length < 2) {
    return { ok: false, error: 'Please enter your name.' };
  }
  // Deliberately loose: North American numbers get written a dozen ways and a
  // strict pattern rejects real customers. Just require enough digits.
  if ((row.phone.match(/\d/g) ?? []).length < 10) {
    return { ok: false, error: 'Please enter a valid phone number.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  try {
    const { error } = await getSupabaseAdmin().from('quote_requests').insert(row);
    if (error) throw new Error(error.message);
  } catch (cause) {
    // Log the real reason server-side; the visitor gets the phone number rather
    // than a database error they can do nothing with.
    console.error('[submit-quote] insert failed:', cause);
    return {
      ok: false,
      error: 'Something went wrong saving your request. Please call (647) 680-1300 and we will take the details directly.',
    };
  }

  // Best-effort notification. The lead is already saved; a mail failure here
  // must not turn a successful submission into an error for the visitor.
  await sendLeadNotification('quote', row);

  return { ok: true };
}
