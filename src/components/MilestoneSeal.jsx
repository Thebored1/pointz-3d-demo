"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './MilestoneSeal.css';

export default function MilestoneSeal({ variant = 'seal', className = '', size = 'md' }) {
  if (variant === 'emblem') {
    return (
      <div className={`milestone-emblem milestone-${size} ${className}`} aria-label="Celebrating 20 Years since 2006">
        <div className="emblem-logo-group">
          {/* 3D-styled '20' with swoosh and circular ring */}
          <div className="emblem-number-wrapper">
            <svg viewBox="0 0 200 120" className="emblem-svg" aria-hidden="true">
              <defs>
                <linearGradient id="emblemBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="40%" stopColor="#00b9f2" />
                  <stop offset="100%" stopColor="#004e92" />
                </linearGradient>
                <linearGradient id="emblemDarkBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d1b2a" />
                  <stop offset="100%" stopColor="#002b49" />
                </linearGradient>
                <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00b9f2" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Outer circular ring */}
              <circle cx="120" cy="58" r="46" fill="none" stroke="url(#emblemBlueGrad)" strokeWidth="7" strokeDasharray="260 30" />
              
              {/* Inner circle fill for contrast */}
              <circle cx="120" cy="58" r="39" fill="rgba(255, 255, 255, 0.95)" />

              {/* '2' digit with sleek bevel curvature */}
              <path
                d="M 28,42 C 28,18 48,6 74,6 C 98,6 112,18 112,35 C 112,50 96,66 74,84 L 46,104 L 108,104 L 108,114 L 24,114 L 24,101 L 62,68 C 82,51 92,39 92,32 C 92,23 83,16 72,16 C 58,16 48,24 46,38 Z"
                fill="url(#emblemBlueGrad)"
                filter="url(#emblemGlow)"
              />

              {/* Inner 'POINT ZERO / 20 YRS' text */}
              <text x="120" y="52" textAnchor="middle" className="emblem-svg-brand" fill="#0d1b2a">
                POINT ZERO
              </text>
              <line x1="96" y1="58" x2="144" y2="58" stroke="#00b9f2" strokeWidth="2" />
              <text x="120" y="74" textAnchor="middle" className="emblem-svg-sub" fill="#0077b6">
                EST. 2006
              </text>

              {/* Dynamic lower ribbon swoosh */}
              <path
                d="M 18,100 Q 70,82 120,86 Q 165,90 178,74 Q 170,102 118,100 Q 64,98 18,100 Z"
                fill="url(#emblemBlueGrad)"
                opacity="0.9"
              />
            </svg>
          </div>

          <div className="emblem-divider"></div>

          <div className="emblem-text-group">
            <div className="emblem-headline">
              <span className="emblem-num">20</span>
              <span className="emblem-label">YEARS</span>
            </div>
            <span className="emblem-script">of reliable freight</span>
            <span className="emblem-tagline">EST. 2006 · ONTARIO</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Prestigious Rotating 2006 Seal / Crest
  return (
    <motion.div 
      className={`milestone-seal-container milestone-${size} ${className}`}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      title="Point Zero Road Lines — Established 2006 (20 Years of Reliable Freight)"
    >
      <div className="milestone-seal-glow"></div>
      <div className="milestone-seal-body">
        {/* Rotating Circular Text SVG */}
        <svg viewBox="0 0 160 160" className="seal-rotating-svg" aria-hidden="true">
          <defs>
            <path
              id="sealTextPath"
              d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
            />
            <linearGradient id="sealGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#0088cc" />
              <stop offset="100%" stopColor="#004e92" />
            </linearGradient>
          </defs>

          {/* Precision outer tick circle */}
          <circle cx="80" cy="80" r="74" fill="none" stroke="rgba(0, 185, 242, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(13, 27, 42, 0.12)" strokeWidth="1" />

          {/* Rotating Text around the perimeter */}
          <text className="seal-text-perimeter">
            <textPath href="#sealTextPath" startOffset="0%">
              ★ ESTABLISHED 2006 ★ 20 YEARS OF EXCELLENCE ★ POINT ZERO ROAD LINES ★
            </textPath>
          </text>
        </svg>

        {/* Center Static Crest & 2006 / 20 Years Display */}
        <div className="seal-core">
          <div className="seal-core-bg"></div>
          <div className="seal-center-content">
            <span className="seal-established">EST.</span>
            <span className="seal-year">2006</span>
            <div className="seal-pill-badge">
              <span className="seal-pill-text">20 YRS</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
