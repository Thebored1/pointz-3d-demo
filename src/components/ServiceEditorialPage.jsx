"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { ServiceIcon, defaultSteps, defaultTrustBadges, getRelated } from './serviceEditorialData';
import {
  fadeUp,
  fadeUpSoft,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
  viewportOnce,
} from '../lib/motion';
import '../app/about/AboutPage.css';
import './ServiceEditorial.css';

// The site standardizes on the two real company photos everywhere: the fleet
// lineup for heroes, and the fleet + driver for the gallery. Per-page heroImage
// and gallery props are intentionally ignored so every page stays consistent.
const HERO_IMAGE = '/images/fleet-hero.webp';
const HERO_ALT = 'Point Zero Road Lines fleet lined up in the yard';
const PAGE_GALLERY = [
  { src: '/images/driver-cabin.webp', alt: 'Point Zero Road Lines driver in the cab', span: 'main' },
  { src: '/images/fleet-hero.webp', alt: 'Point Zero Road Lines fleet' },
  { src: '/images/driver-cabin.webp', alt: 'Point Zero Road Lines driver' },
];

function SectionHeader({ num, label, title, desc, dark }) {
  return (
    <div className={`sv-ed-header${dark ? ' sv-ed-header-dark' : ''}`}>
      <div className="sv-ed-header-top">
        <motion.span
          className="sv-ed-section-num"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {num}
        </motion.span>
        <motion.span
          className="sv-ed-section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={1}
        >
          {label}
        </motion.span>
      </div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        custom={2}
      >
        {title}
      </motion.h2>
      {desc ? (
        <motion.p
          className="sv-ed-header-desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={3}
        >
          {desc}
        </motion.p>
      ) : null}
    </div>
  );
}

export default function ServiceEditorialPage({
  badge,
  badgeAlt,
  titleLine1,
  titleAccent,
  description,
  scrollLabel = 'SCROLL FOR DETAILS',
  stats,
  primarySection,
  darkSection,
  processSection,
  steps = defaultSteps,
  cta,
  relatedKey,
}) {
  const trustBadges = darkSection.badges ?? defaultTrustBadges;
  const related = relatedKey ? getRelated(relatedKey) : [];
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

      <EditorialHero
        badge={badge}
        badgeAlt={badgeAlt}
        titleLine1={titleLine1}
        titleAccent={titleAccent}
        description={description}
        scrollLabel={scrollLabel}
        heroImage={HERO_IMAGE}
        heroAlt={HERO_ALT}
      />

      <motion.div
        className="sv-ed-actions-bar"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="pz-container sv-ed-actions-inner">
          <Link href="/get-a-quote" className="sv-ed-btn-dark">Request a quote →</Link>
          <Link href="/contact-us" className="sv-ed-btn-line">Contact us</Link>
        </div>
      </motion.div>

      <section className="sv-ed-stats">
        <div className="pz-container">
          <div className="sv-ed-stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="sv-ed-stat"
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
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
                  variants={fadeUpSoft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={i}
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

        {PAGE_GALLERY.length ? (
          <section className="sv-ed-gallery">
            <div className="sv-ed-gallery-grid">
              {PAGE_GALLERY.map((img, i) => (
                <motion.div
                  key={img.src}
                  className={img.span === 'main' ? 'sv-ed-g-main' : 'sv-ed-g-cell'}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={i}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: img.objectPosition || 'left center' }}
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
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i}
              >
                <ServiceIcon name={item.icon} size={20} strokeWidth={1.5} />
                <span className="sv-ed-cap-label">{item.title}</span>
                <span className="sv-ed-cap-desc">{item.desc}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="sv-ed-badges"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {trustBadges.map((badgeLabel, i) => (
              <motion.span
                key={badgeLabel}
                className="sv-ed-badge"
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i}
              >
                <span className="sv-ed-check">✓</span> {badgeLabel}
              </motion.span>
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
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i}
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

      {related.length ? (
        <section className="sv-ed-related">
          <div className="pz-container">
            <SectionHeader
              num="04"
              label="Related services"
              title="You might also need"
            />
            <div className="sv-ed-related-grid">
              {related.map((r, i) => (
                <motion.div
                  key={r.href}
                  variants={fadeUpSoft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={i}
                >
                  <Link href={r.href} className="sv-ed-related-card">
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    <span className="sv-ed-card-link">Explore <ArrowUpRight size={14} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pz-cta sv-ed-cta">
        <div className="pz-cta-bg">
          <Image
            src="/images/fleet-hero.webp"
            alt="Point Zero Road Lines fleet"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
          />
          <div className="pz-cta-overlay" />
        </div>
        <div className="pz-container pz-cta-inner">
          <motion.div
            className="pz-cta-content"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="pz-badge-dark">{cta.badge ?? 'READY WHEN YOU ARE'}</span>
            <h2 className="pz-cta-title">
              {cta.titleLine1}
              <br />
              <span className="text-cyan italic">{cta.titleAccent}</span>
            </h2>
            <p className="pz-cta-desc">{cta.desc}</p>
          </motion.div>
          <motion.div
            className="pz-cta-actions"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={1}
          >
            <Link href="/get-a-quote" className="pz-btn pz-btn-primary">
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
