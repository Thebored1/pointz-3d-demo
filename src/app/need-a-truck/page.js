"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  heroContainer,
  fadeUp,
  fadeUpSoft,
  textReveal,
  imageReveal,
  viewportOnce,
} from '../../lib/motion';
import '../../components/motion.css';
import './NeedATruck.css';

const formSections = [
  { type: 'row', fields: [
    { label: 'First Name', type: 'text', placeholder: 'John' },
    { label: 'Last Name', type: 'text', placeholder: 'Doe' },
  ]},
  { type: 'row', fields: [
    { label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
    { label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
  ]},
  { type: 'select', label: 'Service Type Required', options: [
    'Flatbed Hauling', 'Moffett & Piggyback', 'Cross-dock & Warehousing',
    'Specialty & Linen Equipment', 'Dedicated Fleet', 'Other',
  ]},
  { type: 'single', label: 'Origin', inputType: 'text', placeholder: 'Pickup City, Postal Code' },
  { type: 'single', label: 'Destination', inputType: 'text', placeholder: 'Delivery City, Postal Code' },
  { type: 'textarea', label: 'Additional Details', placeholder: 'Dimensions, weight, special handling requirements...' },
];

export default function NeedATruckPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <motion.div
        className="nat-hero"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={imageReveal} style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/need-truck-hero.webp" alt="Need a Truck Hero" fill sizes="100vw" priority style={{ objectFit: 'cover' }} />
        </motion.div>
        <div className="nat-hero-overlay" />
        <h1>
          <div className="pz-mask-container">
            <motion.div variants={textReveal}>Need A</motion.div>
          </div>
          <div className="pz-mask-container">
            <motion.div variants={textReveal}>Truck?</motion.div>
          </div>
        </h1>
      </motion.div>

      <main className="page-wrapper">
        <motion.section
          className="nat-form-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            className="nat-form-header"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2 className="nat-form-title" variants={fadeUp} custom={0}>
              Request a Quote
            </motion.h2>
            <motion.p className="nat-form-sub" variants={fadeUp} custom={1}>
              Point Zero Roadlines offers a variety of services to meet the special requirements of our clients. Fill out the form below and our 24/7 dispatch team will get back to you immediately.
            </motion.p>
          </motion.div>

          <form className="nat-form" onSubmit={(e) => e.preventDefault()}>
            {formSections.map((section, i) => {
              if (section.type === 'row') {
                return (
                  <motion.div
                    key={section.fields[0].label}
                    className="nat-form-row"
                    variants={fadeUpSoft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={i}
                  >
                    {section.fields.map((field) => (
                      <div key={field.label} className="nat-input-group">
                        <label>{field.label}</label>
                        <input type={field.type} className="nat-input" placeholder={field.placeholder} />
                      </div>
                    ))}
                  </motion.div>
                );
              }

              if (section.type === 'select') {
                return (
                  <motion.div
                    key={section.label}
                    className="nat-input-group"
                    variants={fadeUpSoft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={i}
                  >
                    <label>{section.label}</label>
                    <select className="nat-input">
                      {section.options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </motion.div>
                );
              }

              if (section.type === 'textarea') {
                return (
                  <motion.div
                    key={section.label}
                    className="nat-input-group"
                    variants={fadeUpSoft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={i}
                  >
                    <label>{section.label}</label>
                    <textarea className="nat-input nat-textarea" placeholder={section.placeholder} />
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={section.label}
                  className="nat-input-group"
                  variants={fadeUpSoft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={i}
                >
                  <label>{section.label}</label>
                  <input type={section.inputType} className="nat-input" placeholder={section.placeholder} />
                </motion.div>
              );
            })}

            <motion.button
              type="submit"
              className="nat-submit"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={formSections.length}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </form>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
