"use client";
import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: "110%", rotateX: -20 },
    visible: { 
      y: 0, 
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-label-row">
          <motion.div className="hero-label" variants={fadeUpVariants}>
            <span className="label-dot"></span>
            MISSISSAUGA · BOLTON · BRAMPTON
          </motion.div>
          <motion.div className="hero-version" variants={fadeUpVariants}>
            EST. 2012
          </motion.div>
        </div>

        <h1 className="hero-title">
          <div className="mask-container">
            <motion.div variants={textRevealVariants}>Flatbed & Moffett freight,</motion.div>
          </div>
          <div className="mask-container">
            <motion.div variants={textRevealVariants} className="hero-title-accent">moved with precision.</motion.div>
          </div>
        </h1>
        
        <motion.div className="hero-divider" variants={lineVariants}></motion.div>

        <motion.p className="hero-subtitle" variants={fadeUpVariants}>
          Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario. Lean, safe and on schedule — that's what we do.
        </motion.p>
        
        <motion.div className="hero-actions" variants={fadeUpVariants}>
          <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-track" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a quote
              <ArrowRight size={16} strokeWidth={2} />
            </button>
            <button 
              style={{ background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-strong)', padding: '0 1.5rem', height: '52px', fontWeight: 500, fontSize: '0.875rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore services
            </button>
          </div>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUpVariants}>
          <div className="hero-stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Ontario Hubs</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Live Dispatch</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Dedicated Fleet</span>
          </div>
        </motion.div>

        <motion.div className="hero-scroll-indicator" variants={fadeUpVariants}>
          <span>Scroll to explore</span>
          <ArrowDownRight size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
