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
            Next-Generation Logistics
          </motion.div>
          <motion.div className="hero-version" variants={fadeUpVariants}>
            v4.2.0
          </motion.div>
        </div>

        <h1 className="hero-title">
          <div className="mask-container">
            <motion.div variants={textRevealVariants}>Precision</motion.div>
          </div>
          <div className="mask-container">
            <motion.div variants={textRevealVariants} className="hero-title-accent">in Motion.</motion.div>
          </div>
        </h1>
        
        <motion.div className="hero-divider" variants={lineVariants}></motion.div>

        <motion.p className="hero-subtitle" variants={fadeUpVariants}>
          Elevating global supply chain management through meticulous execution 
          and elegant logistics solutions.
        </motion.p>
        
        <motion.div className="hero-actions" variants={fadeUpVariants}>
          <div className="tracking-input-wrapper">
            <span className="tracking-prefix">{'>'}</span>
            <input 
              type="text" 
              placeholder="Enter tracking reference..." 
              className="tracking-input" 
            />
            <button className="btn-track">
              Track
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUpVariants}>
          <div className="hero-stat">
            <span className="stat-value">42</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Operations</span>
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
