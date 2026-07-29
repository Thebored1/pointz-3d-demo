"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ServiceIcon, defaultSteps, defaultTrustBadges } from './serviceEditorialData';
import '../app/about/AboutPage.css';
import './ServiceEditorial.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SectionHeader({ num, label, title, desc, dark }) {
  return (
    <motion.div
      className={`sv-ed-header${dark ? ' sv-ed-header-dark' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="sv-ed-header-top">
        <span className="sv-ed-section-num">{num}</span>
        <span className="sv-ed-section-label">{label}</span>
      </div>
      <h2>{title}</h2>
      {desc ? <p className="sv-ed-header-desc">{desc}</p> : null}
    </motion.div>
  );
}

export default function ServiceEditorialPage({
  badge,
  badgeAlt,
  titleLine1,
  titleAccent,
  description,
  scrollLabel = 'SCROLL FOR DETAILS',
  heroImage,
  heroAlt,
  stats,
  primarySection,
  gallery,
  darkSection,
  processSection,
  steps = defaultSteps,
  cta,
}) {
  const trustBadges = darkSection.badges ?? defaultTrustBadges;
  const process = {
    num: '03',
    label: 'How it works',
    title: 'One call to delivered',
    desc: 'Quote, dispatch, track and confirm — one desk owns your load end to end.',
    ...processSection,
  };

  return (
    <div className="pz-about sv-ed">
      <Navbar />

      <section className="pz-hero">
        <div className="pz-container">
          <motion.div className="pz-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="pz-badge">{badge}</span>
            {badgeAlt ? <span className="pz-badge">{badgeAlt}</span> : null}
          </motion.div>

          <motion.h1 className="pz-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            {titleLine1}
            <br />
            <span className="text-cyan italic">{titleAccent}</span>
          </motion.h1>

          <motion.div className="pz-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="pz-hero-desc">{description}</p>
            <div className="pz-scroll-indicator">
              <span>{scrollLabel}</span>
              <div className="pz-scroll-icon"><ArrowDown size={14} /></div>
            </div>
          </motion.div>

          <motion.div className="pz-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Image
              src={heroImage}
              alt={heroAlt}
              className="pz-hero-img"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      <div className="sv-ed-actions-bar">
        <div className="pz-container sv-ed-actions-inner">
          <Link href="/need-a-truck" className="sv-ed-btn-dark">Request a quote →</Link>
          <Link href="/contact-us" className="sv-ed-btn-line">Contact us</Link>
        </div>
      </div>

      <section className="sv-ed-stats">
        <div className="pz-container">
          <div className="sv-ed-stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="sv-ed-stat"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="sv-ed-main">
        <section className="sv-ed-primary">
          <SectionHeader
            num={primarySection.num}
            label={primarySection.label}
            title={primarySection.title}
            desc={primarySection.desc}
          />
          <div className={`sv-ed-grid${primarySection.columns === 4 ? ' sv-ed-grid-4' : ''}`}>
            {primarySection.items.map((item, i) => {
              const content = (
                <>
                  <div className="sv-ed-card-top">
                    <ServiceIcon name={item.icon} size={22} strokeWidth={1.5} />
                    {item.id ? <span className="sv-ed-num">{item.id}</span> : null}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.href ? (
                    <span className="sv-ed-card-link">
                      Explore <ArrowUpRight size={14} />
                    </span>
                  ) : null}
                </>
              );

              return (
                <motion.div
                  key={item.id ?? item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  {item.href ? (
                    <Link href={item.href} className="sv-ed-card">{content}</Link>
                  ) : (
                    <div className="sv-ed-card sv-ed-card-static">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {gallery?.length ? (
          <section className="sv-ed-gallery">
            <div className="sv-ed-gallery-grid">
              {gallery.map((img, i) => (
                <motion.div
                  key={img.src}
                  className={img.span === 'main' ? 'sv-ed-g-main' : 'sv-ed-g-cell'}
                  initial={{ opacity: 0, scale: 1.02 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: img.objectPosition || 'center' }}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <section className="sv-ed-caps">
        <div className="sv-ed-caps-inner">
          <SectionHeader
            num={darkSection.num}
            label={darkSection.label}
            title={darkSection.title}
            desc={darkSection.desc}
            dark
          />
          <div className="sv-ed-caps-grid">
            {darkSection.items.map((item, i) => (
              <motion.div
                key={item.title}
                className="sv-ed-cap-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ServiceIcon name={item.icon} size={20} strokeWidth={1.5} />
                <span className="sv-ed-cap-label">{item.title}</span>
                <span className="sv-ed-cap-desc">{item.desc}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="sv-ed-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {trustBadges.map((badgeLabel) => (
              <span key={badgeLabel} className="sv-ed-badge">
                <span className="sv-ed-check">✓</span> {badgeLabel}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="sv-ed-main">
        <section className="sv-ed-process">
          <SectionHeader
            num={process.num}
            label={process.label}
            title={process.title}
            desc={process.desc}
          />
          <div className="sv-ed-steps">
            {steps.map((step, i) => (
              <motion.article
                key={step.num}
                className="sv-ed-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="sv-ed-step-top">
                  <span className="sv-ed-step-num">{step.num}</span>
                  <ServiceIcon name={step.icon} size={20} strokeWidth={1.5} className="sv-ed-step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>

      <section className="pz-cta sv-ed-cta">
        <div className="pz-cta-bg">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
            alt="Truck on highway"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="pz-cta-overlay" />
        </div>
        <div className="pz-container pz-cta-inner">
          <motion.div className="pz-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="pz-badge-dark">{cta.badge ?? 'READY WHEN YOU ARE'}</span>
            <h2 className="pz-cta-title">
              {cta.titleLine1}
              <br />
              <span className="text-cyan italic">{cta.titleAccent}</span>
            </h2>
            <p className="pz-cta-desc">{cta.desc}</p>
          </motion.div>
          <motion.div className="pz-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <Link href="/need-a-truck" className="pz-btn pz-btn-primary">
              Request a quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact-us" className="pz-btn pz-btn-secondary">
              Contact dispatch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
