"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './FleetGallery.css';

const trucks = [
  { src: '/images/truck-loaded.jpg', label: 'Flatbed Hauling' },
  { src: '/images/truck-cab.jpg', label: 'Fleet Ready' },
  { src: '/images/truck-side.jpg', label: 'Last Mile' },
  { src: '/images/truck-dock.jpg', label: 'Loading Dock' }
];

export default function FleetGallery() {
  return (
    <section className="fleetgallery-section">
      <div className="fleetgallery-container">
        <div className="fleetgallery-header">
          <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>03</motion.span>
          <motion.h2 className="fleetgallery-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Our Fleet</motion.h2>
        </div>
        <div className="fleetgallery-grid">
          {trucks.map((t, i) => (
            <motion.div key={i} className="fleetgallery-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <img src={t.src} alt={t.label} />
              <span className="fleetgallery-label">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
