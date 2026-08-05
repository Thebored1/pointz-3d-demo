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
            <Image src="/images/home-driver-cabin.webp" alt="Point Zero Road Lines driver in the cab" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: 'cover', objectPosition: '50% 40%' }} />
          </motion.div>
          <motion.div className="about-text" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p>Point Zero Road Lines is a DOT-registered carrier headquartered in Mississauga, serving the GTA and Southern Ontario. Since 2006, we’ve built our business around dedicated capacity rather than spot-market trucking — your freight isn’t sharing a truck with five other shippers’ priorities.</p>
            <p>Our truck-mounted Moffett forklifts let us deliver directly to construction sites, commercial projects, and residential addresses with no loading dock and no forklift waiting. That’s paired with a flatbed fleet, warehouse and cross-dock space, and a dispatch team reachable 24/7.</p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">Mississauga</span>
                <span className="about-stat-label">Headquarters</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">Since 2006</span>
                <span className="about-stat-label">DOT-Registered</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="about-footer">
          <motion.div className="about-footer-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Image src="/images/home-fleet-manager.webp" alt="Point Zero Road Lines fleet manager inspecting trucks" fill sizes="(max-width: 768px) 100vw, 900px" style={{ objectFit: 'cover', objectPosition: '50% 52%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
