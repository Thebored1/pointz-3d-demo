"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeUpSoft, viewportOnce } from '../../lib/motion';
import { submitQuote } from '../actions/submit-quote';

const SERVICES = [
  'Moffett Delivery',
  'Dedicated Fleet',
  'Flatbed Transportation',
  'Dry Van Transportation',
  'Warehouse & Cross-Dock',
  'Construction Material Delivery',
  'Healthcare Logistics',
  'Manufacturing & Consumer Goods',
  'Last Mile & Retail Delivery',
  'Expedited & Same Day',
  'Cross-Border Freight',
  'Building Material Distribution',
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

    const result = await submitQuote(formData);

    if (result.ok) {
      setStatus('sent');
      return;
    }

    setStatus('idle');
    setError(result.error);
  }

  if (status === 'sent') {
    return (
      <motion.div
        className="nat-form-header"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="nat-form-title">Request received.</h2>
        <p className="nat-form-sub">
          Thanks — your request is with our dispatch team and we&rsquo;ll get back to you
          shortly. If it&rsquo;s urgent, call{' '}
          <a href="tel:+19052910325">(905) 291-0325</a> — dispatch is staffed 24/7.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div className="nat-form-header" initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <motion.h2 className="nat-form-title" variants={fadeUp} custom={0}>
          Get a Quote
        </motion.h2>
        <motion.p className="nat-form-sub" variants={fadeUp} custom={1}>
          Tell us the lane and the load. Our 24/7 dispatch team will get back to you
          with a straight answer — fast.
        </motion.p>
      </motion.div>

      <form className="nat-form" onSubmit={handleSubmit}>
        <motion.div className="nat-form-row" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
          <div className="nat-input-group">
            <label htmlFor="q-name">Name *</label>
            <input id="q-name" name="name" type="text" required className="nat-input" placeholder="John Doe" />
          </div>
          <div className="nat-input-group">
            <label htmlFor="q-company">Company</label>
            <input id="q-company" name="company" type="text" className="nat-input" placeholder="Company name" />
          </div>
        </motion.div>

        <motion.div className="nat-form-row" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
          <div className="nat-input-group">
            <label htmlFor="q-phone">Phone *</label>
            <input id="q-phone" name="phone" type="tel" required className="nat-input" placeholder="(905) 555-0123" />
          </div>
          <div className="nat-input-group">
            <label htmlFor="q-email">Email *</label>
            <input id="q-email" name="email" type="email" required className="nat-input" placeholder="john@company.com" />
          </div>
        </motion.div>

        <motion.div className="nat-form-row" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
          <div className="nat-input-group">
            <label htmlFor="q-pickup">Pickup location</label>
            <input id="q-pickup" name="pickup_location" type="text" className="nat-input" placeholder="City, postal code" />
          </div>
          <div className="nat-input-group">
            <label htmlFor="q-delivery">Delivery location</label>
            <input id="q-delivery" name="delivery_location" type="text" className="nat-input" placeholder="City, postal code" />
          </div>
        </motion.div>

        <motion.div className="nat-input-group" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={3}>
          <label htmlFor="q-service">Service needed</label>
          <select id="q-service" name="service" className="nat-input" defaultValue="">
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </motion.div>

        <motion.div className="nat-input-group" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={4}>
          <label htmlFor="q-freight">Freight type / description</label>
          <input id="q-freight" name="freight_type" type="text" className="nat-input" placeholder="Lumber, steel, palletized goods…" />
        </motion.div>

        <motion.div className="nat-input-group" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={5}>
          <label htmlFor="q-timeline">Preferred timeline</label>
          <input id="q-timeline" name="timeline" type="text" className="nat-input" placeholder="Same day, next week, recurring…" />
        </motion.div>

        <motion.div className="nat-input-group" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={6}>
          <label htmlFor="q-details">Additional details</label>
          <textarea id="q-details" name="details" className="nat-input nat-textarea" placeholder="Dimensions, weight, site access, special handling…" />
        </motion.div>

        {error ? (
          <p className="nat-form-error" role="alert">{error}</p>
        ) : null}

        <motion.button
          type="submit"
          className="nat-submit"
          disabled={status === 'sending'}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={7}
          whileHover={status === 'sending' ? undefined : { scale: 1.02 }}
          whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
        >
          {status === 'sending' ? 'Sending…' : 'Submit Request'}
        </motion.button>
      </form>
    </>
  );
}
