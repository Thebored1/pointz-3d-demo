"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import '../../career/CareerPage.css';
import '../ServicesPage.css';

export default function DedicatedFleetPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '100px' }}>
        <section className="svp-detail-hero">
          <div className="career-container">
            <motion.div className="career-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="career-badge">SERVICES</span>
              <span className="career-badge">DEDICATED FLEET</span>
            </motion.div>
            <motion.h1 className="svp-detail-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              Your lanes.<br />
              <span className="text-cyan italic">Your trucks.</span>
            </motion.h1>
            <motion.p className="svp-detail-lede" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              Company-owned trucks and vetted drivers assigned to your freight for consistent, accountable service across the GTA and Ontario.
            </motion.p>
            <motion.div className="svp-detail-actions" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Link href="/need-a-truck" className="btn-track">Request a quote</Link>
              <Link href="/contact-us" className="btn-track-outline">Contact dispatch</Link>
            </motion.div>
          </div>
        </section>

        <section className="svp-spec">
          <div className="career-container svp-spec-grid">
            <motion.div className="svp-spec-media" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Image src="/images/fleet.webp" alt="Point Zero dedicated fleet" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
            </motion.div>
            <motion.div className="svp-spec-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2>Built for consistency</h2>
              <p>Dedicated fleet means the same equipment and drivers on your lanes — not a revolving door of brokers and strangers.</p>
              <ul className="svp-spec-list">
                <li>Assigned company trucks and drivers</li>
                <li>Stable lanes with predictable capacity</li>
                <li>Direct dispatch ownership end to end</li>
                <li>Flatbed, Moffett and specialty configs available</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="career-container">
            <div className="gallery-grid">
              <div className="gallery-item-1">
                <Image src="/images/gallery-3.webp" alt="Dedicated fleet lineup" className="gallery-img" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="gallery-item-2">
                <Image src="/images/fleet-1.webp" alt="Truck on the road" className="gallery-img" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="gallery-item-3">
                <Image src="/images/driver-cabin.webp" alt="Driver cabin" className="gallery-img" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="svp-cta">
          <div className="svp-cta-bg">
            <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" alt="Truck on highway" fill sizes="100vw" style={{ objectFit: 'cover' }} />
            <div className="svp-cta-overlay" />
          </div>
          <div className="career-container svp-cta-inner">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="career-badge" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>READY WHEN YOU ARE</span>
              <h2 className="svp-cta-title">Need a <span className="text-cyan italic">dedicated</span> team?</h2>
              <p className="svp-cta-desc">Tell us your lanes and volume. We&apos;ll put the right trucks and drivers on them.</p>
            </motion.div>
            <motion.div className="svp-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <Link href="/need-a-truck" className="btn-track">Get a quote</Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
