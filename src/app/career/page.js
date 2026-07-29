"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Route, Truck } from 'lucide-react';
import './CareerPage.css';
import Link from 'next/link';

const requirements = [
  "Valid AZ Commercial Driver's License",
  "Clean abstract and CVOR",
  "Minimum 2 years of verifiable driving experience",
  "Strong commitment to safety and compliance",
  "Excellent communication and customer service skills"
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Pay', desc: 'Industry-leading compensation packages that reflect your experience.' },
  { icon: Route, title: 'Dedicated Routes', desc: 'Enjoy the stability of dedicated fleet services with consistent lanes.' },
  { icon: Truck, title: 'Quality Equipment', desc: 'Drive with confidence using our meticulously maintained fleet.' }
];

const marqueeItems = [
  "NOW HIRING AZ DRIVERS", "DEDICATED ROUTES", "TOP INDUSTRY PAY", "SAFETY FIRST"
];

export default function CareerPage() {
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
        
        {/* HERO / INTRO SECTION */}
        <section className="career-hero">
          <div className="career-container">
            <motion.div className="career-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="career-badge">CAREERS AT POINT ZERO</span>
              <span className="career-badge">HIRING AZ DRIVERS</span>
            </motion.div>
            
            <motion.h1 className="career-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              THE HARD MILES,<br />
              <span className="text-cyan italic">REWARDED.</span>
            </motion.h1>

            <motion.div className="career-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <div className="career-hero-desc">
                <p>We are always looking for dedicated and experienced professionals to join our fleet. At Point Zero Road Lines, we understand that our drivers are the absolute backbone of our operation.</p>
                <p style={{ marginTop: '1rem' }}>We are a dedicated team focused on quality, safety, and integrity. We treat our staff with the same respect and dignity that we offer our clients, ensuring a supportive and rewarding work environment.</p>
              </div>

              {/* 2x2 STATS GRID */}
              <div className="career-hero-stats">
                <div className="career-stat-box">
                  <span className="stat-value">$100K+</span>
                  <span className="stat-label">Earning Potential</span>
                </div>
                <div className="career-stat-box">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Dedicated Lanes</span>
                </div>
                <div className="career-stat-box">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Dispatch Support</span>
                </div>
                <div className="career-stat-box stat-highlight">
                  <span className="stat-value"><span className="pulse-dot"></span>HIRING</span>
                  <span className="stat-label">Immediate AZ Openings</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="career-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Image src="/images/career-hero.webp" alt="Point Zero fleet" className="career-hero-img" fill sizes="(max-width: 768px) 100vw, 1400px" priority style={{ objectFit: 'cover' }} />
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="career-pg-marquee-container">
          <div className="career-pg-marquee">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <React.Fragment key={i}>
                <span className="career-pg-marquee-item">{item}</span>
                <span className="career-pg-marquee-dot">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US (Process style grid) */}
        <section className="career-section">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>07</motion.span>
                <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Benefits</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>Why drive with us?</motion.h2>
            </div>
            
            <div className="career-steps">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={i} className="career-step" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
                    <div className="step-top">
                      <span className="step-num">0{i+1}</span>
                      <Icon size={18} strokeWidth={1.5} className="step-icon" />
                    </div>
                    <h3>{benefit.title}</h3>
                    <p className="step-desc">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="career-section" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
          
          <div className="career-watermark">JOIN US</div>

          <div className="career-container">
            <div className="career-requirements-content" style={{ position: 'relative', zIndex: 1 }}>
              <div className="career-header">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>08</motion.span>
                  <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Requirements</motion.span>
                </div>
                <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>What it takes.</motion.h2>
              </div>
              
              <div className="requirements-list">
                {requirements.map((req, i) => (
                  <motion.div key={i} className="req-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
                    <CheckCircle size={18} strokeWidth={1.5} className="req-icon" />
                    <span className="req-text">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="career-cta" style={{ margin: '4rem 2.5rem 6rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--c-charcoal)', padding: '6rem 2rem', textAlign: 'center' }}>
          
          {/* Subtle background decoration */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, backgroundImage: 'radial-gradient(circle at 50% -20%, var(--c-blue) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <span className="career-badge" style={{ color: 'var(--c-cream)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>JOIN THE FLEET</span>
            </motion.div>
            
            <motion.h2 className="career-title" style={{ color: 'var(--c-cream)', marginBottom: '1.5rem' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              READY TO <span className="text-cyan italic">DRIVE?</span>
            </motion.h2>
            
            <motion.p style={{ color: 'var(--c-silver)', fontSize: 'var(--fs-body)', marginBottom: '3rem', lineHeight: 1.6 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              Join a fleet that values your time, prioritizes your safety, and rewards your hard work. We offer top industry pay, modern equipment, and dedicated routes.
            </motion.p>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <Link href="/contact-us">
                <button className="btn-track-career" style={{ background: 'var(--c-cream)', color: 'var(--c-charcoal)', padding: '0 3rem', fontSize: 'var(--fs-body)' }}>
                  Submit Application
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
