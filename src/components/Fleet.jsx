"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Fleet.css';

const specs = [
  { label: 'Chassis', value: 'PTZ-9X HEAVY' },
  { label: 'Drive', value: 'DUAL-EV' },
  { label: 'Payload', value: '45,000 LBS' },
  { label: 'Range', value: '1,200 MI' }
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-container">
        <div className="fleet-header">
          <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>05</motion.span>
          <motion.h2 className="fleet-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Specs</motion.h2>
        </div>
        <div className="fleet-specs">
          {specs.map((s, i) => (
            <motion.div key={i} className="fleet-spec" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span className="fleet-spec-label">{s.label}</span>
              <span className="fleet-spec-value">{s.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
