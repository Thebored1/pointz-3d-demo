"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Fleet.css';

const reasons = [
  { label: 'Moffett-Equipped Delivery', value: 'Truck-mounted forklifts for job-site and residential deliveries standard carriers turn away.' },
  { label: 'Dedicated Capacity', value: 'Assigned trucks, Moffett units, and drivers — never competing for shared spot-market space.' },
  { label: 'Integrated Warehousing', value: 'Warehouse and cross-dock access in Mississauga under the same operation as our fleet.' },
  { label: '24/7 Dispatch & Weekends', value: 'Round-the-clock live dispatch and weekend delivery as standard, not an afterthought.' },
  { label: 'Licensed & Insured Carrier', value: 'Operating since 2006 under CVOR 158-303-152 · MC 1492151 for domestic and cross-border freight.' },
  { label: 'Strict Safety & Compliance', value: 'Drivers held to Hours of Service, MTO, and HTA compliance standards on every single load.' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-container">
        <div className="fleet-header">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>04</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Why Point Zero</motion.span>
          </div>
          <motion.h2 className="fleet-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>The Point Zero Difference</motion.h2>
        </div>
        <div className="fleet-specs" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {reasons.map((s, i) => (
            <motion.div key={i} className="fleet-spec" style={{ flexDirection: 'column', alignItems: 'flex-start' }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span className="fleet-spec-label">{s.label}</span>
              <span className="fleet-spec-value" style={{ fontSize: 'var(--fs-small)', lineHeight: 1.5, color: 'var(--text-muted)', textAlign: 'left', textTransform: 'none' }}>{s.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
