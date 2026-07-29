"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PreviewBar from '../PreviewBar';
import { services, capabilities, stats } from '../data';
import { ServiceIcon } from '../icons';
import '../variations.css';

export default function ServicesVariationB() {
  return (
    <div className="sv-var-b-wrap">
      <PreviewBar active="b" />
      <div className="sv-var-b">
        <aside className="sv-var-b-rail">
          <div>
            <div className="sv-var-b-brand">Point Zero<br />Road Lines</div>
            <p className="sv-var-b-service">Services</p>
          </div>
          <nav>
            <a href="#overview">Overview</a>
            <a href="#services">Services</a>
            <a href="#caps">Capabilities</a>
            <a href="#cta">Quote</a>
            <Link href="/need-a-truck">Get a quote</Link>
          </nav>
        </aside>

        <div className="sv-var-b-main">
          <motion.h1
            id="overview"
            className="sv-var-b-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Built for the loads<br /><em>others turn down.</em>
          </motion.h1>
          <p className="sv-var-b-lede">
            Flatbed, Moffett piggyback, cross-dock and dedicated fleet across the GTA and Ontario.
            Company-owned equipment and dispatch that owns every load end to end.
          </p>
          <div className="sv-var-b-cta-row">
            <Link href="/need-a-truck" className="sv-var-btn-dark">Request a quote</Link>
            <Link href="/contact-us" className="sv-var-btn-line">Talk to dispatch</Link>
          </div>

          <div className="sv-var-b-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="sv-var-b-shot">
            <Image
              src="/images/fleet.webp"
              alt="Point Zero fleet"
              fill
              sizes="(max-width: 900px) 100vw, 70vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <section id="services">
            <p className="sv-var-kicker">What we offer</p>
            <h2 className="sv-var-b-section-title">Six ways we move freight</h2>
            <div className="sv-var-b-stack">
              {services.map((s) => (
                <Link key={s.id} href={s.href} className="sv-var-b-row">
                  <span className="sv-var-num">{s.id}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <ServiceIcon name={s.icon} size={20} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </section>

          <section id="caps" className="sv-var-b-caps">
            <p className="sv-var-kicker">Capabilities</p>
            <h2 className="sv-var-b-section-title">Fleet at a glance</h2>
            <div className="sv-var-b-caps-grid">
              {capabilities.map((c) => (
                <article key={c.label}>
                  <ServiceIcon name={c.icon} size={20} strokeWidth={1.5} />
                  <h3>{c.label}</h3>
                  <p>{c.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="cta" className="sv-var-b-end">
            <h2>Need a truck?</h2>
            <p>Tell us your lane and load. We&apos;ll get back to you with a straight answer.</p>
            <Link href="/need-a-truck" className="sv-var-btn-cyan">Get a quote</Link>
          </section>
        </div>
      </div>
    </div>
  );
}
