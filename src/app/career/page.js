"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditorialHero from '../../components/EditorialHero';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Route, Truck } from 'lucide-react';
import { fadeUp, fadeUpSoft, fadeIn, viewportOnce } from '../../lib/motion';
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

const heroStats = [
  { value: '$100K+', label: 'Earning Potential' },
  { value: '100%', label: 'Dedicated Lanes' },
  { value: '24/7', label: 'Dispatch Support' },
  { value: 'HIRING', label: 'Immediate AZ Openings', highlight: true },
];

export default function CareerPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px' }}>
        
        <EditorialHero
          sectionClass="career-hero"
          containerClass="career-container"
          topClass="career-hero-top"
          badgeClass="career-badge"
          titleClass="career-hero-title"
          bottomClass="career-hero-bottom"
          imgWrapperClass="career-hero-img-wrapper"
          imgClass="career-hero-img"
          badge="CAREERS AT POINT ZERO"
          badgeAlt="HIRING AZ DRIVERS"
          titleLine1="THE HARD MILES,"
          titleAccent="REWARDED."
          heroImage="/images/career-hero.webp"
          heroAlt="Point Zero fleet"
          bottom={(
            <>
              <div className="career-hero-desc">
                <p>We are always looking for dedicated and experienced professionals to join our fleet. At Point Zero Road Lines, we understand that our drivers are the absolute backbone of our operation.</p>
                <p style={{ marginTop: '1rem' }}>We are a dedicated team focused on quality, safety, and integrity. We treat our staff with the same respect and dignity that we offer our clients, ensuring a supportive and rewarding work environment.</p>
              </div>
              <div className="career-hero-stats">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className={`career-stat-box${stat.highlight ? ' stat-highlight' : ''}`}
                    variants={fadeUpSoft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={i}
                  >
                    <span className="stat-value">
                      {stat.highlight ? <><span className="pulse-dot" />{stat.value}</> : stat.value}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        />

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
                <motion.span className="section-number" variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>07</motion.span>
                <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Benefits</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>Why drive with us?</motion.h2>
            </div>
            
            <div className="career-steps">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={i} className="career-step" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
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
                  <motion.span className="section-number" variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>08</motion.span>
                  <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Requirements</motion.span>
                </div>
                <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>What it takes.</motion.h2>
              </div>
              
              <div className="requirements-list">
                {requirements.map((req, i) => (
                  <motion.div key={i} className="req-item" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
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
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
              <span className="career-badge" style={{ color: 'var(--c-cream)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>JOIN THE FLEET</span>
            </motion.div>
            
            <motion.h2 className="career-title" style={{ color: 'var(--c-cream)', marginBottom: '1.5rem' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
              READY TO <span className="text-cyan italic">DRIVE?</span>
            </motion.h2>
            
            <motion.p style={{ color: 'var(--c-silver)', fontSize: 'var(--fs-body)', marginBottom: '3rem', lineHeight: 1.6 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Join a fleet that values your time, prioritizes your safety, and rewards your hard work. We offer top industry pay, modern equipment, and dedicated routes.
            </motion.p>
            
            <motion.div variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={3}>
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
