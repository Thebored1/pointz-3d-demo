"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import PreviewBar from '../PreviewBar';
import { services, stats, marqueeItems } from '../data';
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

const rules = services.map((s) => ({
  num: s.id,
  title: s.title,
  desc: s.desc,
  href: s.href,
}));

const badges = [
  'Company-owned fleet',
  'CVOR excellent',
  'Moffett-certified operators',
  '24/7 dispatch',
  'Three Ontario hubs',
];

export default function ServicesVariationD() {
  const marquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="pz-about">
      <PreviewBar active="d" />

      <section className="pz-hero" style={{ paddingTop: 'clamp(3rem, 6vw, 60px)' }}>
        <div className="pz-container">
          <motion.div className="pz-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="pz-badge">SERVICES · OVERVIEW</span>
            <span className="pz-badge">POINT ZERO ROAD LINES</span>
          </motion.div>

          <motion.h1 className="pz-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            BUILT FOR THE LOADS<br />
            <span className="text-cyan italic">OTHERS TURN DOWN.</span>
          </motion.h1>

          <motion.div className="pz-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="pz-hero-desc">
              Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario.
              Company-owned equipment and dispatch that owns every load end to end.
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

      <div className="pz-marquee-container">
        <div className="pz-marquee">
          {marquee.map((item, i) => (
            <React.Fragment key={i}>
              <span className="pz-marquee-item">{item}</span>
              <span className="pz-marquee-dot">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="pz-operate">
        <div className="pz-container">
          <motion.div className="pz-section-header-dark" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label-dark">WHAT WE OFFER</p>
            <div className="pz-operate-top">
              <h2 className="pz-section-title-dark">
                SIX WAYS WE MOVE<br />
                <span className="text-cyan italic">YOUR FREIGHT.</span>
              </h2>
              <p className="pz-operate-desc">
                From flatbed and Moffett to cross-dock, dedicated fleet and 24/7 dispatch —
                every service runs on the same standard.
              </p>
            </div>
          </motion.div>

          <div className="pz-rules-list">
            {rules.map((rule, i) => (
              <motion.div key={rule.num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} custom={i}>
                <Link href={rule.href} className="pz-rule-row sv-var-d-rule">
                  <div className="pz-rule-num">{rule.num}</div>
                  <h3 className="pz-rule-title">{rule.title}</h3>
                  <p className="pz-rule-desc">{rule.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pz-crew">
        <div className="pz-container">
          <motion.div className="pz-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label">THE NUMBERS</p>
            <h2 className="pz-section-title">
              CAPACITY YOU CAN<br />
              <span className="text-cyan italic">PLAN AROUND.</span>
            </h2>
            <p className="pz-crew-desc">
              Mississauga headquarters with sites in Bolton and Brampton.
              Flatbed, Moffett and specialty configs on company-maintained equipment.
            </p>
          </motion.div>

          <motion.div
            className="pz-stats-grid"
            style={{ margin: '4rem 0 2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '3rem 0' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {stats.map((stat, i) => (
              <div key={i} className="pz-stat-card">
                <div className="pz-stat-num">0{i + 1}</div>
                <h3 className="pz-stat-value">{stat.value}</h3>
                <p className="pz-stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div className="pz-crew-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            {badges.map((badge, i) => (
              <span key={i} className="pz-crew-badge">
                <span className="pz-check">✓</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pz-cta">
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
              with a quote fast.
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
