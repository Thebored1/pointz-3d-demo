"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronDown, Phone } from 'lucide-react';
import { fadeUp, fadeUpSoft, viewportOnce } from '../../lib/motion';
import './servicePillar.css';

/*
 * Reusable building blocks for long-form service pillar pages. Compose them per
 * page — the block set and order are chosen by the page, not fixed here (see
 * SERVICE_PILLAR_PLAN.md §5). The Moffett page is the reference consumer.
 *
 * Shared contact defaults (Point Zero). Override per call where needed.
 */
export const QUOTE_HREF = '/get-a-quote';
export const TEL_HREF = 'tel:+16476801300';
export const MAIL_HREF = 'mailto:info@pzrls.com';

/* Scroll-reveal wrapper. */
export function Reveal({ children, className, custom }) {
  return (
    <motion.div
      className={className}
      variants={fadeUpSoft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}

/* Numbered section header (num · label + H2 + optional description). */
export function SectionHead({ num, label, title, desc, dark }) {
  return (
    <div className={`mf-head${dark ? ' mf-head--dark' : ''}`}>
      <div className="mf-head-top">
        <span className="mf-head-num">{num}</span>
        <span className="mf-head-label">{label}</span>
      </div>
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {title}
      </motion.h2>
      {desc ? <p className="mf-head-desc">{desc}</p> : null}
    </div>
  );
}

/* Primary + secondary (call) button pair. */
export function CtaButtons({
  quoteHref = QUOTE_HREF,
  quoteLabel = 'Request a Quote',
  telHref = TEL_HREF,
  callLabel = 'Call Point Zero',
}) {
  return (
    <div className="mf-cta-row">
      <Link href={quoteHref} className="mf-btn mf-btn--primary">
        {quoteLabel} <ArrowUpRight size={16} />
      </Link>
      <a href={telHref} className="mf-btn mf-btn--line">
        <Phone size={15} /> {callLabel}
      </a>
    </div>
  );
}

/* Centered single primary CTA (used to close a section). */
export function CenterCta({ href = QUOTE_HREF, label }) {
  return (
    <div className="mf-center">
      <Link href={href} className="mf-btn mf-btn--primary">
        {label} <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}

/* Icon feature cards. items: [{ icon, title, desc }]. */
export function FeatureGrid({ cols = 4, items }) {
  return (
    <div className={`mf-grid mf-grid-${cols}`}>
      {items.map((c, i) => {
        const Icon = c.icon;
        return (
          <Reveal key={c.title} className="mf-card" custom={i}>
            {Icon ? (
              <div className="mf-card-icon"><Icon size={22} strokeWidth={1.5} /></div>
            ) : null}
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

/* Left-bordered mini blocks. items: [[title, desc], ...]. */
export function MiniGrid({ items, cols = 2, tight = true }) {
  return (
    <div className={`mf-grid mf-grid-${cols}${tight ? ' mf-grid--tight' : ''}`}>
      {items.map(([t, d], i) => (
        <Reveal key={t} className="mf-mini" custom={i}>
          <h3>{t}</h3>
          <p>{d}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* Bulleted check list. items: [string, ...]. */
export function CheckList({ items, cols = false }) {
  return (
    <ul className={`mf-check-list${cols ? ' mf-check-list--cols' : ''}`}>
      {items.map((x) => (
        <li key={x}><Check size={15} /> {x}</li>
      ))}
    </ul>
  );
}

/* Numbered process steps. steps: [[num, title, desc], ...]. */
export function StepGrid({ steps }) {
  return (
    <div className="mf-steps">
      {steps.map(([n, t, d], i) => (
        <Reveal key={n} className="mf-step" custom={i}>
          <span className="mf-step-num">{n}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* Two-column comparison table. heads: [left, right]. rows: [[a, b], ...]. */
export function ComparisonTable({ heads, rows }) {
  return (
    <div className="mf-table-wrap">
      <table className="mf-table">
        <thead>
          <tr>
            <th>{heads[0]}</th>
            <th>{heads[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Accordion FAQ. items: [[question, answer], ...]. */
export function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="mf-faq-list">
      {items.map(([q, a], i) => (
        <div key={q} className={`mf-faq-item${open === i ? ' mf-faq-item--open' : ''}`}>
          <button
            className="mf-faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <h3>{q}</h3>
            <ChevronDown className="mf-faq-chevron" size={20} />
          </button>
          <div className="mf-faq-answer">
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Related-service link cards. items: [{ title, href, desc }, ...]. */
export function RelatedServices({ items }) {
  return (
    <div className="mf-grid mf-grid-3">
      {items.map((r, i) => (
        <Reveal key={r.href} custom={i}>
          <Link href={r.href} className="mf-related-card">
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <span className="mf-related-link">Explore <ArrowUpRight size={14} /></span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/*
 * Closing navy CTA band. actions: [{ href, label, variant, external, icon }].
 * Internal links render label then icon; external (tel/mailto) render icon then
 * label — matching the original layout.
 */
export function FinalCta({ badge, title, paragraphs = [], actions = [] }) {
  return (
    <section className="mf-final">
      <div className="pz-container mf-final-inner">
        <div className="mf-final-text">
          {badge ? <span className="mf-final-badge">{badge}</span> : null}
          <h2>{title}</h2>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mf-final-actions">
          {actions.map((a) => {
            const cls = `mf-btn mf-btn--${a.variant || 'line'} mf-btn--block`;
            return a.external ? (
              <a key={a.label} href={a.href} className={cls}>{a.icon} {a.label}</a>
            ) : (
              <Link key={a.label} href={a.href} className={cls}>{a.label} {a.icon}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
