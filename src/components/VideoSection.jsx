"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-header">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>02</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>In Action</motion.span>
          </div>
          <motion.h2 className="video-title" style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-heading)', fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Ready to Roll</motion.h2>
        </div>
        
        <motion.div 
          className="video-player-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <video 
            src="/point-zero-promo.mp4" 
            poster="/images/moffett-yard-front.webp"
            controls
            playsInline
            preload="metadata"
            className="promo-video"
          >
            <source src="/point-zero-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
