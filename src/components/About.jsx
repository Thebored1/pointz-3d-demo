"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>05</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Who We Are</motion.span>
          </div>
          <motion.h2 className="about-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>A dedicated team,<br/>not a broker.</motion.h2>
        </div>
        <div className="about-content">
          <motion.div className="about-image" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <img src="/assets/truck-side.jpg" alt="Point Zero driver" />
          </motion.div>
          <motion.div className="about-text" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p>Point Zero Road Lines is a dedicated transportation company headquartered in Mississauga, Ontario, with sites in Bolton and Brampton. We're a tight team focused on quality, safety and integrity.</p>
            <p>We partner with our clients to bring the best value and a real strategic partnership across every load we move.</p>
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
            <img src="/assets/w4.jpg" alt="Operations" />
          </motion.div>
          <motion.div className="about-footer-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <img src="/assets/w1.jpg" alt="Truck operations" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
