"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../app/career/CareerPage.css';
import '../app/services/ServicesPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="faq-item">
      <button type="button" className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown size={18} className={open ? 'faq-chevron open' : 'faq-chevron'} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetailPage({
  badge,
  badgeAlt,
  titleLine1,
  titleAccent,
  description,
  stats,
  heroImage,
  heroAlt,
  marqueeItems,
  specEyebrow,
  specTitle,
  specBody,
  specImage,
  specImageAlt,
  highlights,
  capabilities,
  gallery,
  faqs,
  ctaTitle,
  ctaAccent,
  ctaDesc,
}) {
  const [openFaq, setOpenFaq] = useState(0);
  const marquee = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px' }}>
        {/* HERO */}
        <section className="career-hero">
          <div className="career-container">
            <motion.div className="career-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="career-badge">{badge}</span>
              {badgeAlt ? <span className="career-badge">{badgeAlt}</span> : null}
            </motion.div>

            <motion.h1 className="career-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              {titleLine1}
              <br />
              <span className="text-cyan italic">{titleAccent}</span>
            </motion.h1>

            <motion.div className="career-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <div className="career-hero-desc">
                <p>{description}</p>
                <div className="svp-detail-actions" style={{ marginTop: '1.5rem', marginBottom: 0 }}>
                  <Link href="/need-a-truck" className="btn-track">Request a quote</Link>
                  <Link href="/contact-us" className="btn-track-outline">Contact dispatch</Link>
                </div>
              </div>

              <div className="career-hero-stats">
                {stats.map((s, i) => (
                  <div key={i} className={`career-stat-box${s.highlight ? ' stat-highlight' : ''}`}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="career-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Image
                src={heroImage}
                alt={heroAlt}
                className="career-hero-img"
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                priority
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="career-pg-marquee-container">
          <div className="career-pg-marquee">
            {marquee.map((item, i) => (
              <React.Fragment key={i}>
                <span className="career-pg-marquee-item">{item}</span>
                <span className="career-pg-marquee-dot">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* SPEC SHEET */}
        <section className="svp-spec">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>01</motion.span>
                <motion.span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>{specEyebrow}</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>{specTitle}</motion.h2>
            </div>

            <div className="svp-spec-grid">
              <motion.div className="svp-spec-media" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Image src={specImage} alt={specImageAlt} fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
              </motion.div>
              <motion.div className="svp-spec-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                <p>{specBody}</p>
                <ul className="svp-spec-list">
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="career-section">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>02</motion.span>
                <motion.span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Capabilities</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>What we run</motion.h2>
            </div>

            <div className="career-steps">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={i} className="career-step" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} custom={i}>
                    <div className="step-top">
                      <span className="step-num">0{i + 1}</span>
                      <Icon size={18} strokeWidth={1.5} className="step-icon" />
                    </div>
                    <h3>{c.title}</h3>
                    <p className="step-desc">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery-section">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>03</motion.span>
                <motion.span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>In the yard</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>On the road</motion.h2>
            </div>
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

        {/* FAQ */}
        <section className="faq-section">
          <div className="career-container">
            <div className="career-header" style={{ paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>04</motion.span>
                <motion.span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>FAQ</motion.span>
              </div>
              <motion.h2 className="career-title" style={{ margin: 0 }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>Common questions</motion.h2>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="career-badge" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>READY WHEN YOU ARE</span>
              <h2 className="svp-cta-title">
                {ctaTitle} <span className="text-cyan italic">{ctaAccent}</span>
              </h2>
              <p className="svp-cta-desc">{ctaDesc}</p>
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
