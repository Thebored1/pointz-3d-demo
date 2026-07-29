"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PreviewBar from '../PreviewBar';
import { services, capabilities, steps } from '../data';
import '../variations.css';

export default function ServicesVariationC() {
  return (
    <div className="sv-var-c">
      <PreviewBar active="c" />

      <section className="sv-var-c-top">
        <motion.div
          className="sv-var-c-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/services-hero.webp"
            alt="Point Zero services"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        <div className="sv-var-c-panel">
          <p className="sv-var-c-brand">Point Zero Road Lines</p>
          <p className="sv-var-c-meta">Services overview</p>
          <h1 className="sv-var-c-title">
            Built for the loads<br /><em>others turn down.</em>
          </h1>
          <p className="sv-var-c-copy">
            Flatbed, Moffett, cross-dock and dedicated fleet across the GTA and Ontario — lean, safe and on schedule.
          </p>
          <Link href="/need-a-truck" className="sv-var-btn-cyan">Request a quote</Link>

          <nav className="sv-var-c-links">
            {services.map((s) => (
              <Link key={s.id} href={s.href}>
                <span>{s.id}</span>
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="sv-var-c-strip">
        {capabilities.map((c) => (
          <article key={c.label}>
            <h3>{c.label}</h3>
            <p>{c.value}</p>
          </article>
        ))}
      </section>

      <section className="sv-var-c-blocks">
        {services.slice(0, 4).map((s, i) => (
          <article key={s.id} className={i % 2 === 1 ? 'sv-var-c-block-reverse' : ''}>
            <div className="sv-var-c-block-media">
              <Image
                src={i % 2 === 0 ? '/images/fleet-1.webp' : '/images/truck-dock.webp'}
                alt={s.title}
                fill
                sizes="50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="sv-var-c-block-copy">
              <p className="sv-var-c-meta">Service {s.id}</p>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <Link href={s.href}>Learn more →</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="sv-var-c-process">
        <p className="sv-var-c-meta">How it works</p>
        <h2>One call to delivered</h2>
        <ol>
          {steps.map((step) => (
            <li key={step.num}>
              <strong>{step.title}</strong> — {step.desc}
            </li>
          ))}
        </ol>
      </section>

      <section className="sv-var-c-end">
        <div>
          <h2>Need a truck?</h2>
          <p>Tell us your lane and load. We&apos;ll come back with a quote fast.</p>
        </div>
        <Link href="/need-a-truck" className="sv-var-btn-cyan">Get a quote</Link>
      </section>
    </div>
  );
}
