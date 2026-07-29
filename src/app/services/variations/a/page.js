"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import PreviewBar from '../PreviewBar';
import { services, capabilities, steps, stats } from '../data';
import { ServiceIcon } from '../icons';
import '../../../about/AboutPage.css';
import '../variations.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const trustBadges = [
  'CVOR Excellent',
  'Company-owned fleet',
  'Moffett-certified',
  '24/7 dispatch',
  'FAST / PARS ready',
];

const gallery = [
  { src: '/images/gallery-3.webp', alt: 'Fleet lineup', span: 'main' },
  { src: '/images/fleet-1.webp', alt: 'On the road' },
  { src: '/images/truck-dock.webp', alt: 'Dock delivery' },
];

function SectionHeader({ num, label, title, desc, dark }) {
  return (
    <motion.div className={`sv-var-a-header${dark ? ' sv-var-a-header-dark' : ''}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="sv-var-a-header-top">
        <span className="sv-var-a-section-num">{num}</span>
        <span className="sv-var-a-section-label">{label}</span>
      </div>
      <h2>{title}</h2>
      {desc ? <p className="sv-var-a-header-desc">{desc}</p> : null}
    </motion.div>
  );
}

export default function ServicesVariationA() {
  return (
    <div className="pz-about sv-var-a">
      <PreviewBar active="a" />

      <section className="pz-hero" style={{ paddingTop: 'clamp(3rem, 6vw, 60px)' }}>
        <div className="pz-container">
          <motion.div className="pz-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="pz-badge">SERVICES · OVERVIEW</span>
            <span className="pz-badge">EST. 2012 · MISSISSAUGA</span>
          </motion.div>

          <motion.h1 className="pz-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            BUILT FOR THE LOADS<br />
            <span className="text-cyan italic">OTHERS TURN DOWN.</span>
          </motion.h1>

          <motion.div className="pz-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="pz-hero-desc">
              Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario.
              We handle the loads others walk away from — lean, safe and on schedule.
            </p>
            <div className="pz-scroll-indicator">
              <span>SCROLL THE SERVICES</span>
              <div className="pz-scroll-icon"><ArrowDown size={14} /></div>
            </div>
          </motion.div>

          <motion.div className="pz-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Image
              src="/images/fleet-hero.webp"
              alt="Point Zero fleet"
              className="pz-hero-img"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      <div className="sv-var-a-actions-bar">
        <div className="pz-container sv-var-a-actions-inner">
          <Link href="/need-a-truck" className="sv-var-btn-dark">Request a quote →</Link>
          <Link href="/contact-us" className="sv-var-btn-line">Contact us</Link>
        </div>
      </div>

      <section className="sv-var-a-stats">
        <div className="pz-container sv-var-a-stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="sv-var-a-stat"
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
      </section>

      <main className="sv-var-a-main">
        <section className="sv-var-a-services">
          <SectionHeader
            num="01"
            label="What we offer"
            title="Six ways we move your freight"
            desc="Flatbed, Moffett, cross-dock, dedicated fleet and round-the-clock dispatch — every service runs on the same standard."
          />
          <div className="sv-var-a-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={s.href} className="sv-var-a-card">
                  <div className="sv-var-a-card-top">
                    <ServiceIcon name={s.icon} size={22} strokeWidth={1.5} />
                    <span className="sv-var-num">{s.id}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="sv-var-a-card-link">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="sv-var-a-gallery">
          <div className="sv-var-a-gallery-grid">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                className={img.span === 'main' ? 'sv-var-a-g-main' : 'sv-var-a-g-cell'}
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <section className="sv-var-a-caps">
        <div className="sv-var-a-caps-inner">
          <SectionHeader
            num="02"
            label="Capabilities"
            title="Fleet at a glance"
            desc="From oversized flatbed loads to precision Moffett deliveries — maintained company equipment, CVOR-excellent."
            dark
          />
          <div className="sv-var-a-caps-grid">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.label}
                className="sv-var-a-cap-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ServiceIcon name={c.icon} size={20} strokeWidth={1.5} />
                <span className="sv-var-cap-label">{c.label}</span>
                <span className="sv-var-cap-desc">{c.value}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="sv-var-a-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {trustBadges.map((badge) => (
              <span key={badge} className="sv-var-a-badge">
                <span className="sv-var-a-check">✓</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="sv-var-a-main">
        <section className="sv-var-a-process">
          <SectionHeader
            num="03"
            label="How it works"
            title="One call to delivered"
            desc="Quote, dispatch, track and confirm — one desk owns your load end to end."
          />
          <div className="sv-var-a-steps">
            {steps.map((step, i) => (
              <motion.article
                key={step.num}
                className="sv-var-a-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="sv-var-a-step-top">
                  <span className="sv-var-a-step-num">{step.num}</span>
                  <ServiceIcon name={step.icon} size={20} strokeWidth={1.5} className="sv-var-a-step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>

      <section className="pz-cta sv-var-a-cta">
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
            <span className="pz-badge-dark">READY WHEN YOU ARE</span>
            <h2 className="pz-cta-title">
              NEED A<br />
              <span className="text-cyan italic">TRUCK?</span>
            </h2>
            <p className="pz-cta-desc">
              Tell us your lane and load. We&apos;ll get back to you<br />
              with a straight answer — fast.
            </p>
          </motion.div>
          <motion.div className="pz-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <Link href="/need-a-truck" className="pz-btn pz-btn-primary">
              Request a quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact-us" className="pz-btn pz-btn-outline">
              Contact dispatch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
