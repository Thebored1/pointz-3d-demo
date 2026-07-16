"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>02</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>In Action</motion.span>
          </div>
          <motion.h2 className="video-title" style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Ready to Roll</motion.h2>
        </div>
        
        <motion.div 
          className="video-player-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <iframe 
            src="https://www.youtube.com/embed/4aWGrLXJcCU" 
            title="Pointz Promo Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="promo-video"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
