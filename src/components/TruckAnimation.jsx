"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TruckAnimation() {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 }
      }
    }
  };

  const truckVariants = {
    hidden: { x: "-10vw" },
    visible: {
      x: "10vw",
      transition: {
        x: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    }
  };

  return (
    <div className="truck-animation-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center', opacity: 0.8 }}>
      <motion.svg 
        width="100%" 
        height="100" 
        viewBox="0 0 500 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        variants={truckVariants}
      >
        <motion.g 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Ground Line */}
          <motion.line x1="0" y1="135" x2="500" y2="135" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          
          {/* Trailer */}
          <motion.rect x="50" y="30" width="220" height="90" rx="4" stroke="#111111" strokeWidth="2" variants={drawVariants} />
          
          {/* Trailer details */}
          <motion.line x1="50" y1="50" x2="270" y2="50" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          <motion.line x1="50" y1="100" x2="270" y2="100" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          
          {/* Cab */}
          <motion.path d="M280 50 h30 l25 35 v35 h-55 v-70 z" stroke="#111111" strokeWidth="2" strokeLinejoin="round" variants={drawVariants} />
          
          {/* Window */}
          <motion.path d="M285 55 h20 l15 25 h-35 v-25 z" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" variants={drawVariants} />
          
          {/* Exhaust */}
          <motion.path d="M275 30 v60" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" variants={drawVariants} />
          
          {/* Back Wheels */}
          <motion.circle cx="90" cy="120" r="14" stroke="#111111" strokeWidth="2" fill="#ffffff" variants={drawVariants} />
          <motion.circle cx="90" cy="120" r="4" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          
          <motion.circle cx="130" cy="120" r="14" stroke="#111111" strokeWidth="2" fill="#ffffff" variants={drawVariants} />
          <motion.circle cx="130" cy="120" r="4" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          
          {/* Front Wheel */}
          <motion.circle cx="310" cy="120" r="14" stroke="#111111" strokeWidth="2" fill="#ffffff" variants={drawVariants} />
          <motion.circle cx="310" cy="120" r="4" stroke="#111111" strokeWidth="1" variants={drawVariants} />
          
          {/* Speed Lines */}
          <motion.line x1="10" y1="60" x2="30" y2="60" stroke="#111111" strokeWidth="1" strokeLinecap="round" variants={drawVariants} />
          <motion.line x1="20" y1="80" x2="35" y2="80" stroke="#111111" strokeWidth="1" strokeLinecap="round" variants={drawVariants} />
          <motion.line x1="5" y1="100" x2="25" y2="100" stroke="#111111" strokeWidth="1" strokeLinecap="round" variants={drawVariants} />
        </motion.g>
      </motion.svg>
    </div>
  );
}
