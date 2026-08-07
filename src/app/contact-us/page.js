"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditorialHero from '../../components/EditorialHero';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { fadeUp, fadeUpSoft, slideLeft, slideRight, viewportOnce } from '../../lib/motion';
import { submitContact } from '../actions/submit-contact';
import './ContactPage.css';

const locations = [
  {
    label: 'Headquarters & Terminal',
    title: 'Mississauga Facility',
    desc: <>1566 Bonhill Road<br />Mississauga, ON L5T 1C7<br />HQ, Terminal & Cross-Dock Facility</>,
    icon: MapPin,
  },
  {
    label: 'Live Dispatch',
    title: '24/7 Operations',
    desc: 'Round-the-clock live dispatch, overnight linehaul coordination, and emergency hot shot support.',
    icon: Phone,
  },
  {
    label: 'Registered Authorities',
    title: 'Domestic & Cross-Border',
    desc: 'USDOT 3983391 · MC 1492151 · CVOR Licensed & Fully Commercially Insured.',
    icon: MapPin,
  },
  {
    label: 'Direct Contact',
    title: '(905) 291-0325',
    desc: (
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        <Mail size={16} strokeWidth={1.5} /> info@pzrls.com
      </p>
    ),
    icon: Phone,
    highlight: true,
  },
];

const formFields = [
  { type: 'row', fields: [
    { label: 'First Name', type: 'text', name: 'first_name', placeholder: 'John' },
    { label: 'Last Name', type: 'text', name: 'last_name', placeholder: 'Doe' },
  ]},
  { type: 'row', fields: [
    { label: 'Email Address', type: 'email', name: 'email', placeholder: 'john@company.com' },
    { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: '(905) 555-0123' },
  ]},
  { type: 'select', label: 'Subject / Department', name: 'subject', options: ['General Inquiry', 'Request a Quote', 'Billing & Support', 'Sales / Dedicated Fleet'] },
  { type: 'textarea', label: 'Message', name: 'message', placeholder: 'How can we assist you?' },
];

export default function ContactUsPage() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');
    const result = await submitContact(formData);
    if (result.ok) {
      setStatus('sent');
      return;
    }
    setStatus('idle');
    setError(result.error);
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px' }}>
        <EditorialHero
          sectionClass="contact-hero-new"
          containerClass="contact-container"
          topClass="contact-hero-top"
          badgeClass="contact-badge"
          titleClass="contact-hero-title"
          badge="CONTACT US"
          badgeAlt="24/7 SUPPORT"
          titleLine1="TALK TO"
          titleAccent="DISPATCH."
          showImage={false}
        />

        <section className="contact-container contact-body">
          <div className="contact-layout">
            <motion.div
              className="contact-locations-col"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                className="contact-locations-header"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.h2 variants={fadeUp} custom={1}>Direct Lines</motion.h2>
                <motion.p variants={fadeUp} custom={2}>
                  Call or email us anytime. Our dispatch and support teams are available 24/7 to handle your logistics needs.
                </motion.p>
              </motion.div>

              <div className="contact-cards-wrap">
                {locations.map((loc, i) => {
                  const Icon = loc.icon;
                  return (
                    <motion.div
                      key={loc.title}
                      className="contact-location-card"
                      style={loc.highlight ? { backgroundColor: 'var(--c-blue-dim)' } : undefined}
                      variants={fadeUpSoft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      custom={i}
                    >
                      <div className="loc-top">
                        <span className="loc-label">{loc.label}</span>
                        <Icon size={18} strokeWidth={1.5} className="loc-icon" />
                      </div>
                      <h3>{loc.title}</h3>
                      {typeof loc.desc === 'string' ? <p>{loc.desc}</p> : loc.desc}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-col"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
            >
              <motion.h2
                className="contact-form-title"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                Send a message
              </motion.h2>
              {status === 'sent' ? (
                <motion.p className="contact-form-sent" variants={fadeUp} initial="hidden" animate="visible">
                  Thanks — your message is with our team and we&rsquo;ll be in touch shortly.
                  If it&rsquo;s urgent, call <a href="tel:+19052910325">(905) 291-0325</a> — dispatch is staffed 24/7.
                </motion.p>
              ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formFields.map((field, i) => {
                  if (field.type === 'row') {
                    return (
                      <motion.div
                        key={field.fields[0].label}
                        className="contact-form-row"
                        variants={fadeUpSoft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        custom={i}
                      >
                        {field.fields.map((f) => (
                          <div key={f.label} className="contact-input-group">
                            <label>{f.label}</label>
                            <input type={f.type} name={f.name} required className="contact-input" placeholder={f.placeholder} />
                          </div>
                        ))}
                      </motion.div>
                    );
                  }

                  if (field.type === 'select') {
                    return (
                      <motion.div
                        key={field.label}
                        className="contact-input-group"
                        variants={fadeUpSoft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        custom={i}
                      >
                        <label>{field.label}</label>
                        <select name={field.name} className="contact-input" style={{ appearance: 'none', background: 'transparent' }}>
                          {field.options.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      </motion.div>
                    );
                  }

                  if (field.type === 'textarea') {
                    return (
                      <motion.div
                        key={field.label}
                        className="contact-input-group"
                        variants={fadeUpSoft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        custom={i}
                      >
                        <label>{field.label}</label>
                        <textarea name={field.name} required className="contact-input contact-textarea" placeholder={field.placeholder} />
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={field.label}
                      className="contact-input-group"
                      variants={fadeUpSoft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      custom={i}
                    >
                      <label>{field.label}</label>
                      <input type={field.inputType} name={field.name} required className="contact-input" placeholder={field.placeholder} />
                    </motion.div>
                  );
                })}

                {error ? <p className="contact-form-error" role="alert">{error}</p> : null}

                <motion.button
                  type="submit"
                  className="contact-submit"
                  disabled={status === 'sending'}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={formFields.length}
                  whileHover={status === 'sending' ? undefined : { scale: 1.02 }}
                  whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Request'}
                </motion.button>
              </form>
              )}
            </motion.div>
          </div>
        </section>

        <section className="contact-container contact-map-wrap">
          <motion.div
            className="contact-map"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <iframe
              title="Point Zero Road Lines — 1566 Bonhill Road, Mississauga, ON L5T 1C7"
              src="https://www.google.com/maps?q=1566+Bonhill+Road,+Mississauga,+ON+L5T+1C7&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
