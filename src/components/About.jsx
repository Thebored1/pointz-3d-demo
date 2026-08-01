"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>05</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Who We Are</motion.span>
          </div>
          <motion.h2 className="about-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>A dedicated team,<br/>not a broker.</motion.h2>
        </div>
        <div className="about-content">
          <motion.div className="about-image" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Image src="/images/driver-cabin.webp" alt="Point Zero Road Lines driver in the cab" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: 'cover', objectPosition: 'left center' }} />
          </motion.div>
          <motion.div className="about-text" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p>Point Zero Road Lines is a dedicated transportation company headquartered in Mississauga, Ontario, with sites in Bolton and Brampton. We&apos;re a tight team focused on quality, safety and integrity.</p>
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
            <Image src="/images/fleet-hero.webp" alt="Point Zero Road Lines fleet lineup" fill sizes="(max-width: 768px) 100vw, 900px" style={{ objectFit: 'cover', objectPosition: 'left center' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
