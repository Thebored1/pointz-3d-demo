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
            MISSISSAUGA HQ · SERVING GTA &amp; SOUTHERN ONTARIO
          </motion.div>
          <motion.div className="hero-version" variants={fadeUpVariants}>
            EST. 2006
          </motion.div>
        </div>

        <h1 className="hero-title">
          <div className="mask-container">
            <motion.div variants={textRevealVariants}>Ontario&rsquo;s Moffett delivery &amp;</motion.div>
          </div>
          <div className="mask-container">
            <motion.div variants={textRevealVariants} className="hero-title-accent">specialized transportation experts.</motion.div>
          </div>
        </h1>

        <motion.div className="hero-divider" variants={lineVariants}></motion.div>

        <motion.p className="hero-subtitle" variants={fadeUpVariants}>
          Since 2006, Point Zero Road Lines has run dedicated fleet, flatbed &amp; Moffett delivery, and warehousing for businesses across the Greater Toronto Area and Southern Ontario. Healthcare, manufacturing, consumer goods, construction — when a site has no loading dock and no forklift, or the schedule simply can’t slip, we’re the carrier on the account.
        </motion.p>
        
        <motion.div className="hero-actions" variants={fadeUpVariants}>
          <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/get-a-quote" className="btn-track">
              Get a Quote
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a href="/services" className="btn-track-outline">
              View Our Services
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUpVariants}>
          <div className="hero-stat">
            <span className="stat-value">2006</span>
            <span className="stat-label">Operating Since</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Live Dispatch</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Dedicated Capacity</span>
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
