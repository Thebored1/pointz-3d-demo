"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import '../app/career/CareerPage.css';
import '../app/services/ServicesPage.css';

export default function ServiceDetailPage({
  badge,
  badgeAlt,
  title,
  titleAccent,
  description,
  heroImage,
  heroAlt,
  highlights,
  gallery,
  ctaTitle,
  ctaAccent,
  ctaDesc,
}) {
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
        <section className="career-hero">
          <div className="career-container">
            <motion.div className="career-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="career-badge">{badge}</span>
              {badgeAlt ? <span className="career-badge">{badgeAlt}</span> : null}
            </motion.div>

            <motion.h1 className="career-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              {title}
              <br />
              <span className="text-cyan italic">{titleAccent}</span>
            </motion.h1>

            <motion.div className="career-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <div className="career-hero-desc">
                <p>{description}</p>
              </div>
              <div className="svp-intro-actions" style={{ marginTop: '1.5rem' }}>
                <Link href="/need-a-truck" className="btn-track-career">Request a quote</Link>
                <Link href="/contact-us" className="btn-track-career" style={{ background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-strong)', marginLeft: '0.75rem' }}>Contact us</Link>
              </div>
            </motion.div>

            <motion.div className="career-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Image src={heroImage} alt={heroAlt} className="career-hero-img" fill sizes="(max-width: 768px) 100vw, 1400px" priority style={{ objectFit: 'cover' }} />
            </motion.div>
          </div>
        </section>

        <section className="career-section">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>01</motion.span>
                <motion.span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Highlights</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>What you get</motion.h2>
            </div>

            <div className="requirements-list">
              {highlights.map((item, i) => (
                <motion.div key={i} className="req-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} custom={i}>
                  <CheckCircle size={18} strokeWidth={1.5} className="req-icon" />
                  <span className="req-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {gallery?.length ? (
          <section className="gallery-section">
            <div className="career-container">
              <div className="gallery-grid">
                {gallery.map((img, i) => (
                  <div key={i} className={i === 0 ? 'gallery-item-1' : undefined}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className="gallery-img"
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{ objectFit: 'cover', objectPosition: img.objectPosition || 'center' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="svp-cta">
          <div className="svp-cta-bg">
            <Image
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
              alt="Truck on highway"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="svp-cta-overlay" />
          </div>
          <div className="career-container svp-cta-inner">
            <motion.div className="svp-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="career-badge" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>READY WHEN YOU ARE</span>
              <h2 className="svp-cta-title">
                {ctaTitle} <span className="text-cyan italic">{ctaAccent}</span>
              </h2>
              <p className="svp-cta-desc">{ctaDesc}</p>
            </motion.div>
            <motion.div className="svp-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <Link href="/need-a-truck" className="btn-track" style={{ background: '#fff', color: '#000' }}>
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
