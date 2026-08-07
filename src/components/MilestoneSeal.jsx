"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './MilestoneSeal.css';

export default function MilestoneSeal({ variant = 'seal', className = '', size = 'md' }) {
  if (variant === 'badge') {
    return (
      <div className={`milestone-badge-pill milestone-${size} ${className}`} aria-label="Established 2006 - 20 Years">
        <span className="badge-pulse-dot"></span>
        <span className="badge-bold">EST. 2006</span>
        <span className="badge-sep">/</span>
        <span className="badge-sub">20 YEARS OF SERVICE</span>
      </div>
    );
  }

  if (variant === 'emblem') {
    return (
      <div className={`milestone-clean-card milestone-${size} ${className}`} aria-label="Point Zero Road Lines Established 2006">
        <div className="clean-card-left">
          <span className="clean-card-est">ESTABLISHED</span>
          <span className="clean-card-year">2006</span>
        </div>
        <div className="clean-card-divider"></div>
        <div className="clean-card-right">
          <span className="clean-card-title">20 YEARS</span>
          <span className="clean-card-sub">Ontario Transportation</span>
        </div>
      </div>
    );
  }

  // Default: Clean Minimalist Circular Seal with plain fonts & crisp geometry
  return (
    <motion.div 
      className={`milestone-clean-seal milestone-${size} ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      title="Point Zero Road Lines · Established 2006 (20 Years of Reliable Service)"
    >
      <div className="clean-seal-ring">
        {/* Crisp Rotating Perimeter Text SVG */}
        <svg viewBox="0 0 160 160" className="clean-seal-svg" aria-hidden="true">
          <defs>
            <path
              id="sealCirclePath"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              fill="none"
            />
          </defs>

          {/* Clean outer rings */}
          <circle cx="80" cy="80" r="76" fill="none" stroke="rgba(13, 27, 42, 0.12)" strokeWidth="1" />
          <circle cx="80" cy="80" r="73" fill="none" stroke="rgba(0, 185, 242, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="47" fill="none" stroke="rgba(13, 27, 42, 0.1)" strokeWidth="1" />

          {/* Clean perimeter text */}
          <text className="clean-seal-text">
            <textPath href="#sealCirclePath" startOffset="0%">
              • ESTABLISHED 2006 • POINT ZERO ROAD LINES • 20 YEARS •
            </textPath>
          </text>
        </svg>

        {/* Clean Center Core */}
        <div className="clean-seal-center">
          <span className="clean-seal-est">EST.</span>
          <span className="clean-seal-year">2006</span>
          <span className="clean-seal-years">20 YEARS</span>
        </div>
      </div>
    </motion.div>
  );
}
