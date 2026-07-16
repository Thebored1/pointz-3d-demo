"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Fleet.css';

const capabilities = [
  { label: 'Flatbed', value: '48ft, 53ft, step-decks and drop-decks. Ready for oversized and overweight.' },
  { label: 'Moffett', value: 'Truck-mounted forklifts for job-site deliveries with zero dock requirements.' },
  { label: 'Cross-dock', value: 'Seamless transfers between trailers to keep your freight moving without delay.' },
  { label: 'Specialty', value: 'Linen and custom hauling configurations available upon request.' }
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-container">
        <div className="fleet-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>04</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Capability Spotlights</motion.span>
          </div>
          <motion.h2 className="fleet-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>What we run</motion.h2>
        </div>
        <div className="fleet-specs">
          {capabilities.map((s, i) => (
            <motion.div key={i} className="fleet-spec" style={{ flexDirection: 'column', alignItems: 'flex-start' }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span className="fleet-spec-label">{s.label}</span>
              <span className="fleet-spec-value" style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--text-muted)', textAlign: 'left', textTransform: 'none' }}>{s.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
