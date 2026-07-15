"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>03</motion.span>
          <motion.h2 className="about-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>About Us</motion.h2>
        </div>
        <div className="about-content">
          <motion.div className="about-image" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <img src="/images/driver-cabin.jpg" alt="Point Zero driver in cabin" />
          </motion.div>
          <motion.div className="about-text" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p>We are a dedicated transportation company headquartered in Mississauga, Ontario with additional sites in Bolton and Brampton. We are a dedicated team focused on quality, safety, and integrity.</p>
            <p>We partner with our clients to bring the best value and strategic partnership in the areas of transportation.</p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">Mississauga</span>
                <span className="about-stat-label">HQ</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">3 Sites</span>
                <span className="about-stat-label">Ontario</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="about-footer">
          <motion.div className="about-footer-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <img src="/images/safety-vest.jpg" alt="Safety vest" />
          </motion.div>
          <motion.div className="about-footer-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <img src="/images/truck-side.jpg" alt="Truck operations" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
