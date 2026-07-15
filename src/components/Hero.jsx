"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TruckAnimation from './TruckAnimation';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: "120%" },
    visible: { 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="hero">
      <div className="hero-truck-container" style={{ position: 'absolute', top: '15%', left: 0, right: 0, opacity: 0.15, pointerEvents: 'none', zIndex: 0 }}>
        <TruckAnimation />
      </div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 1 }}
      >
        <h1 className="hero-title">
          <div className="mask-container">
            <motion.div variants={textRevealVariants}>Precision in</motion.div>
          </div>
          <div className="mask-container">
            <motion.div variants={textRevealVariants} className="text-accent">Motion.</motion.div>
          </div>
        </h1>
        
        <motion.div 
          className="hero-divider"
          variants={{
            hidden: { scaleY: 0 },
            visible: { scaleY: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          style={{ transformOrigin: "top" }}
        ></motion.div>

        <motion.p className="hero-subtitle" variants={fadeUpVariants}>
          Elevating global supply chain management through meticulous execution and elegant logistics solutions.
        </motion.p>
        
        <motion.div className="hero-actions" variants={fadeUpVariants}>
          <div className="tracking-input-wrapper">
            <input type="text" placeholder="Enter Tracking Reference" className="tracking-input" />
            <button className="btn-track">
              Track <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
