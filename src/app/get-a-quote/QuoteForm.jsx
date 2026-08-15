"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeUpSoft, viewportOnce } from '../../lib/motion';
import { submitQuote } from '../actions/submit-quote';
import { trackLeadFormConversion } from '../../lib/analytics';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const SERVICES = [
  'Flatbed & Moffett Transport',
  'Dedicated Fleet Services',
  'Warehouse & Cross-Dock Storage',
  'Healthcare Linen & Textile Logistics',
  'Manufacturing & Consumer Goods Freight',
  'Construction Material Hauling',
  'Expedited & Same-Day Freight',
  'Last Mile Delivery',
  '24/7 After-Hours & Weekend Dispatch',
  'Not sure — need guidance',
];

export default function QuoteForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus('sending');
    setError('');

    try {
      const result = await submitQuote(formData);

      if (result?.ok) {
        // Fired only after the lead is actually saved, so the GA4 lead event
        // and Ads conversion count real, followable leads.
        trackLeadFormConversion('quote');
        setStatus('sent');
        return;
      }

      setStatus('idle');
      setError(result?.error || 'Failed to submit quote request. Please try again or call dispatch.');
    } catch (err) {
      setStatus('idle');
      setError('An unexpected error occurred. Please call (905) 291-0325.');
    }
  }

  if (status === 'sent') {
    return (
      <motion.div
        className="quote-success-box"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="quote-success-icon">
          <CheckCircle size={36} />
        </div>
        <h2 className="quote-success-title">Quote Request Received</h2>
        <p className="quote-success-desc">
          Thank you. Your freight specifications are with our 24/7 dispatch desk. A representative will return your custom rate and equipment confirmation shortly.
        </p>
        <div className="quote-success-urgent">
          <span>Need immediate confirmation?</span>
          <a href="tel:+19052910325" className="quote-success-phone">Call (905) 291-0325</a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="quote-form-wrapper">
      <div className="quote-form-header">
        <span className="quote-col-label">02 / LOAD DETAILS</span>
        <h2 className="quote-form-title">Request Freight Estimate</h2>
        <p className="quote-form-sub">
          Fill in the details below and our operations team will evaluate lane availability and equipment specifications.
        </p>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="quote-form-row">
          <div className="quote-input-group">
            <label htmlFor="q-name">Your Name <span className="req">*</span></label>
            <input id="q-name" name="name" type="text" required className="quote-input" placeholder="e.g. John Doe" />
          </div>
          <div className="quote-input-group">
            <label htmlFor="q-company">Company Name</label>
            <input id="q-company" name="company" type="text" className="quote-input" placeholder="e.g. Acme Corp" />
          </div>
        </div>

        <div className="quote-form-row">
          <div className="quote-input-group">
            <label htmlFor="q-phone">Phone Number <span className="req">*</span></label>
            <input id="q-phone" name="phone" type="tel" required className="quote-input" placeholder="(905) 555-0123" />
          </div>
          <div className="quote-input-group">
            <label htmlFor="q-email">Email Address <span className="req">*</span></label>
            <input id="q-email" name="email" type="email" required className="quote-input" placeholder="john@company.com" />
          </div>
        </div>

        <div className="quote-form-row">
          <div className="quote-input-group">
            <label htmlFor="q-pickup">Pickup Location <span className="req">*</span></label>
            <input id="q-pickup" name="pickup_location" type="text" required className="quote-input" placeholder="City, postal code or site" />
          </div>
          <div className="quote-input-group">
            <label htmlFor="q-delivery">Delivery Destination <span className="req">*</span></label>
            <input id="q-delivery" name="delivery_location" type="text" required className="quote-input" placeholder="City, postal code or site" />
          </div>
        </div>

        <div className="quote-input-group">
          <label htmlFor="q-service">Service / Equipment Type</label>
          <div className="quote-select-wrapper">
            <select id="q-service" name="service" className="quote-input quote-select" defaultValue="">
              <option value="">Select equipment or service type</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="quote-form-row">
          <div className="quote-input-group">
            <label htmlFor="q-freight">Freight Type / Commodity</label>
            <input id="q-freight" name="freight_type" type="text" className="quote-input" placeholder="e.g. Palletized, lumber, machinery" />
          </div>
          <div className="quote-input-group">
            <label htmlFor="q-timeline">Required Date / Timeline</label>
            <input id="q-timeline" name="timeline" type="text" className="quote-input" placeholder="e.g. Same-day, next week, recurring" />
          </div>
        </div>

        <div className="quote-input-group">
          <label htmlFor="q-details">Additional Load Specs & Special Instructions</label>
          <textarea 
            id="q-details" 
            name="details" 
            rows={4}
            className="quote-input quote-textarea" 
            placeholder="Weight, dimensions, dock requirements, Moffett unloading access, or after-hours delivery instructions…" 
          />
        </div>

        {error ? (
          <div className="quote-error-banner" role="alert">
            <AlertCircle size={18} className="quote-error-icon" />
            <span>{error}</span>
          </div>
        ) : null}

        <button
          type="submit"
          className="quote-submit-btn"
          disabled={status === 'sending'}
        >
          <span>{status === 'sending' ? 'Submitting Quote Request…' : 'Submit Quote Request'}</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
