"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../preview.css';

function PreviewBar({ active }) {
  return (
    <div className="sv-preview-bar">
      <span>Preview · Dedicated Fleet · full page</span>
      <div className="sv-preview-links">
        <Link href="/services/preview">All</Link>
        <Link href="/services/preview/a" className={active === 'a' ? 'active' : ''}>A Cinematic</Link>
        <Link href="/services/preview/b" className={active === 'b' ? 'active' : ''}>B Industrial</Link>
        <Link href="/services/preview/c" className={active === 'c' ? 'active' : ''}>C Catalog</Link>
        <Link href="/services/preview/d" className={active === 'd' ? 'active' : ''}>D About-style</Link>
      </div>
    </div>
  );
}

const points = [
  { n: '01', t: 'Assigned crews', d: 'Vetted drivers locked to your account so every run feels familiar.' },
  { n: '02', t: 'Company equipment', d: 'Maintained flatbeds and Moffetts — not whoever shows up from a board.' },
  { n: '03', t: 'Fixed lanes', d: 'Repeat GTA and Ontario corridors with capacity you can plan around.' },
  { n: '04', t: '24/7 ownership', d: 'One dispatcher stays on your freight from quote to delivery.' },
];

const faqs = [
  { q: 'What does dedicated fleet include?', a: 'Company trucks and drivers assigned to your lanes, with a dispatcher who owns the account.' },
  { q: 'Can we mix flatbed and Moffett?', a: 'Yes. Dedicated programs can include flatbed, step-deck, Moffett piggyback and specialty configs.' },
  { q: 'How do we start?', a: 'Share volume, lanes and equipment needs. We build a capacity plan and assign assets.' },
];

export default function PreviewA() {
  return (
    <div className="sv-a">
      <PreviewBar active="a" />

      {/* 1 HERO */}
      <section className="sv-a-hero">
        <motion.p className="sv-a-brand" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Point Zero Road Lines</motion.p>
        <motion.p className="sv-a-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>Dedicated fleet</motion.p>
        <motion.h1 className="sv-a-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Your lanes.<br /><em>Your trucks.</em>
        </motion.h1>
        <motion.p className="sv-a-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Company trucks and drivers assigned to your freight — consistent, accountable service across the GTA and Ontario.
        </motion.p>
        <motion.a className="sv-a-cta" href="/need-a-truck" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
          Request a quote →
        </motion.a>
      </section>

      {/* 2 FULL BLEED */}
      <div className="sv-a-media">
        <Image src="/images/fleet-hero.webp" alt="Dedicated fleet" fill sizes="100vw" priority style={{ objectFit: 'cover' }} />
      </div>

      {/* 3 OVERVIEW */}
      <section className="sv-a-body">
        <div>
          <p className="sv-a-kicker">01 — Overview</p>
          <h2>Built for consistency</h2>
          <p>Same equipment. Same drivers. A dispatcher who owns the load end to end — not a revolving door of brokers.</p>
        </div>
        <ul className="sv-a-lines">
          {points.map((p) => (
            <li key={p.n}>
              <span>{p.n}</span>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>{p.t}</strong>
                {p.d}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 GALLERY STRIP */}
      <section className="sv-a-gallery">
        <div className="sv-a-gallery-grid">
          <div className="sv-a-g-main">
            <Image src="/images/gallery-3.webp" alt="Fleet lineup" fill sizes="60vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="sv-a-g-side">
            <div className="sv-a-g-cell">
              <Image src="/images/fleet-1.webp" alt="On the road" fill sizes="40vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="sv-a-g-cell">
              <Image src="/images/driver-cabin.webp" alt="Cabin" fill sizes="40vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 HOW IT WORKS */}
      <section className="sv-a-process">
        <p className="sv-a-kicker">02 — How it works</p>
        <h2 className="sv-a-process-title">Quote to dedicated in four steps</h2>
        <div className="sv-a-steps">
          {[
            ['Quote', 'Share lanes, volume and equipment. We answer straight.'],
            ['Plan', 'We reserve trucks and drivers against your cadence.'],
            ['Assign', 'Same crew and iron lock to your account.'],
            ['Run', 'Dispatch owns every load until it is delivered.'],
          ].map(([t, d], i) => (
            <article key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6 FAQ */}
      <section className="sv-a-faq">
        <p className="sv-a-kicker">03 — FAQ</p>
        <h2>Common questions</h2>
        <div className="sv-a-faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7 CTA */}
      <section className="sv-a-end">
        <div className="sv-a-end-bg">
          <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="sv-a-end-inner">
          <h2>Need a <em>dedicated</em> team?</h2>
          <p>Tell us your lanes and volume. We&apos;ll put the right trucks and drivers on them.</p>
          <Link href="/need-a-truck" className="sv-a-cta" style={{ marginBottom: 0 }}>Get a quote →</Link>
        </div>
      </section>
    </div>
  );
}
