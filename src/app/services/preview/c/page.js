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

export default function PreviewC() {
  return (
    <div className="sv-c">
      <PreviewBar active="c" />

      {/* 1 SPLIT HERO */}
      <section className="sv-c-top">
        <motion.div className="sv-c-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Image src="/images/fleet-1.webp" alt="Dedicated truck" fill sizes="(max-width: 900px) 100vw, 55vw" priority style={{ objectFit: 'cover' }} />
        </motion.div>
        <div className="sv-c-panel">
          <p className="sv-c-brand">Point Zero Road Lines</p>
          <p className="sv-c-meta">Service 02 · Dedicated fleet</p>
          <h1 className="sv-c-title">Assigned trucks.<br /><em>Accountable crews.</em></h1>
          <p className="sv-c-copy">
            Recurring lanes with company equipment and drivers who know your freight — not a broker roulette every morning.
          </p>
          <Link href="/need-a-truck" className="sv-c-cta">Request a quote</Link>
        </div>
      </section>

      {/* 2 VALUE STRIP */}
      <section className="sv-c-strip">
        <article>
          <h3>Same drivers</h3>
          <p>Familiar faces on your docks. Less briefing, fewer surprises.</p>
        </article>
        <article>
          <h3>Same iron</h3>
          <p>Company flatbeds and Moffetts maintained to CVOR-excellent standards.</p>
        </article>
        <article>
          <h3>Same desk</h3>
          <p>One dispatcher owns the account from quote through delivery.</p>
        </article>
      </section>

      {/* 3 SPEC + IMAGE */}
      <section className="sv-c-spec">
        <div className="sv-c-spec-media">
          <Image src="/images/fleet.webp" alt="Fleet" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="sv-c-spec-copy">
          <p className="sv-c-meta">Equipment</p>
          <h2>What sits on your program</h2>
          <ul>
            <li>48ft / 53ft flatbed and step-deck</li>
            <li>Moffett piggyback for dock-free sites</li>
            <li>Specialty and linen configs on request</li>
            <li>Company maintenance, CVOR-excellent</li>
          </ul>
        </div>
      </section>

      {/* 4 PROCESS */}
      <section className="sv-c-process">
        <p className="sv-c-meta">Engagement</p>
        <h2>How a dedicated lane starts</h2>
        <ol>
          <li><strong>Brief</strong> — Lanes, volume, equipment, service windows.</li>
          <li><strong>Plan</strong> — Capacity reserved against your cadence.</li>
          <li><strong>Assign</strong> — Trucks and drivers locked to the account.</li>
          <li><strong>Operate</strong> — Dispatch owns every load end to end.</li>
        </ol>
      </section>

      {/* 5 GALLERY */}
      <section className="sv-c-gallery">
        <div>
          <Image src="/images/gallery-3.webp" alt="Lineup" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <Image src="/images/driver-cabin.webp" alt="Cabin" fill sizes="25vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <Image src="/images/truck-loaded.webp" alt="Loaded" fill sizes="25vw" style={{ objectFit: 'cover' }} />
        </div>
      </section>

      {/* 6 FAQ */}
      <section className="sv-c-bottom">
        <h2>Questions</h2>
        <div className="sv-c-faq">
          <details open>
            <summary>What does dedicated include?</summary>
            <p>Company trucks and drivers assigned to your lanes, with a dispatcher who owns the account.</p>
          </details>
          <details>
            <summary>Can we mix flatbed and Moffett?</summary>
            <p>Yes — dedicated programs can include flatbed, step-deck, Moffett and specialty configs.</p>
          </details>
          <details>
            <summary>How do we start?</summary>
            <p>Share volume, lanes and equipment needs. We build a capacity plan and assign assets.</p>
          </details>
          <details>
            <summary>Where do you operate?</summary>
            <p>Mississauga HQ with sites in Bolton and Brampton — GTA and Ontario coverage.</p>
          </details>
        </div>
      </section>

      {/* 7 CTA */}
      <section className="sv-c-end">
        <div>
          <h2>Lock the lane</h2>
          <p>Tell us volume and corridors. We&apos;ll come back with a dedicated plan.</p>
        </div>
        <Link href="/need-a-truck" className="sv-c-cta">Get a quote</Link>
      </section>
    </div>
  );
}
