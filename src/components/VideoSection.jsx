"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './VideoSection.css';

export default function VideoSection() {
  // Click-to-play facade: the 16 MB <video> element only mounts when the viewer
  // clicks play, so it never downloads on page load (not even metadata).
  const [playing, setPlaying] = useState(false);

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
          {playing ? (
            <video
              src="/point-zero-promo.mp4"
              poster="/images/about-fleet-yard.webp"
              controls
              autoPlay
              playsInline
              preload="auto"
              className="promo-video"
            >
              <source src="/point-zero-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <button
              type="button"
              className="video-facade"
              onClick={() => setPlaying(true)}
              aria-label="Play the Point Zero Road Lines promo video"
            >
              <Image
                src="/images/about-fleet-yard.webp"
                alt="Point Zero Road Lines fleet at the Mississauga terminal"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: 'cover' }}
                className="video-facade-img"
              />
              <span className="video-facade-play" aria-hidden="true">
                <Play size={30} fill="currentColor" strokeWidth={0} />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
