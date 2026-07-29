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

const rows = [
  { n: '01', t: 'Assigned crews', d: 'Vetted drivers locked to your account so every run feels familiar.' },
  { n: '02', t: 'Company equipment', d: 'Maintained flatbeds and Moffetts — not whoever shows up from a board.' },
  { n: '03', t: 'Fixed lanes', d: 'Repeat GTA and Ontario corridors with capacity you can plan around.' },
  { n: '04', t: '24/7 ownership', d: 'One dispatcher stays on your freight from quote to delivery.' },
];

export default function PreviewB() {
  return (
    <div>
      <PreviewBar active="b" />
      <div className="sv-b">
        <aside className="sv-b-rail">
          <div>
            <div className="sv-b-rail-brand">Point Zero<br />Road Lines</div>
            <p className="sv-b-rail-service" style={{ marginTop: '1.25rem' }}>Dedicated fleet</p>
          </div>
          <nav>
            <a href="#overview">Overview</a>
            <a href="#shot">Fleet</a>
            <a href="#caps">Capabilities</a>
            <a href="#sites">Sites</a>
            <a href="#faq">FAQ</a>
            <Link href="/need-a-truck">Get a quote</Link>
          </nav>
        </aside>

        <div className="sv-b-main">
          {/* HERO */}
          <motion.h1 className="sv-b-title" id="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Dedicated capacity.<br /><em>On your terms.</em>
          </motion.h1>
          <p className="sv-b-lede">
            Company-owned trucks and vetted drivers assigned to your lanes. Predictable capacity across the GTA and Ontario.
          </p>
          <div className="sv-b-cta-row">
            <Link href="/need-a-truck" className="sv-b-btn sv-b-btn-fill">Request a quote</Link>
            <Link href="/contact-us" className="sv-b-btn sv-b-btn-line">Talk to dispatch</Link>
          </div>

          {/* STATS */}
          <div className="sv-b-stats">
            <div><strong>100%</strong><span>Dedicated lanes</span></div>
            <div><strong>24/7</strong><span>Dispatch</span></div>
            <div><strong>3</strong><span>Ontario hubs</span></div>
            <div><strong>2012</strong><span>On the road</span></div>
          </div>

          {/* IMAGE */}
          <div className="sv-b-shot" id="shot">
            <Image src="/images/fleet.webp" alt="Fleet" fill sizes="(max-width: 900px) 100vw, 70vw" style={{ objectFit: 'cover' }} priority />
          </div>

          {/* SPEC BLOCK */}
          <section className="sv-b-spec">
            <div className="sv-b-spec-copy">
              <p className="sv-b-eyebrow">Spec</p>
              <h2>Same iron. Same desk.</h2>
              <p>Dedicated means reserved capacity — not shopping every load on a board. Flatbed, Moffett and specialty configs available on the same program.</p>
            </div>
            <ul>
              <li>Assigned company trucks and drivers</li>
              <li>Stable lanes with predictable capacity</li>
              <li>Direct dispatch ownership end to end</li>
              <li>Flatbed, Moffett and specialty configs</li>
            </ul>
          </section>

          {/* CAPABILITIES */}
          <section id="caps">
            <p className="sv-b-eyebrow">Capabilities</p>
            <h2 className="sv-b-section-title">What we run</h2>
            <div className="sv-b-stack">
              {rows.map((r) => (
                <div className="sv-b-row" key={r.n}>
                  <span className="sv-b-num">{r.n}</span>
                  <div>
                    <h3>{r.t}</h3>
                    <p>{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SITES */}
          <section className="sv-b-sites" id="sites">
            <p className="sv-b-eyebrow">Footprint</p>
            <h2 className="sv-b-section-title">Three Ontario hubs</h2>
            <div className="sv-b-sites-grid">
              <article>
                <Image src="/images/truck-dock.webp" alt="Mississauga" fill sizes="33vw" style={{ objectFit: 'cover' }} />
                <div><h3>Mississauga</h3><p>HQ &amp; core dispatch</p></div>
              </article>
              <article>
                <Image src="/images/network.webp" alt="Bolton" fill sizes="33vw" style={{ objectFit: 'cover' }} />
                <div><h3>Bolton</h3><p>Cross-dock &amp; overflow</p></div>
              </article>
              <article>
                <Image src="/images/safety-vest.webp" alt="Brampton" fill sizes="33vw" style={{ objectFit: 'cover' }} />
                <div><h3>Brampton</h3><p>Regional distribution</p></div>
              </article>
            </div>
          </section>

          {/* FAQ */}
          <section className="sv-b-faq" id="faq">
            <p className="sv-b-eyebrow">FAQ</p>
            <h2 className="sv-b-section-title">Common questions</h2>
            <details open>
              <summary>What does dedicated include?</summary>
              <p>Company trucks and drivers assigned to your lanes, with a dispatcher who owns the account.</p>
            </details>
            <details>
              <summary>Is there a minimum volume?</summary>
              <p>Dedicated works best with recurring freight. Dispatch will tell you straight if spot is a better fit.</p>
            </details>
            <details>
              <summary>How fast can we start?</summary>
              <p>Once lanes and equipment are locked, we assign assets and set the dispatch cadence — often within days.</p>
            </details>
          </section>

          {/* CTA */}
          <section className="sv-b-end">
            <h2>Ready to lock capacity?</h2>
            <p>Tell us your lanes and volume. We&apos;ll put the right trucks and drivers on them.</p>
            <Link href="/need-a-truck" className="sv-b-btn sv-b-btn-fill">Get a quote</Link>
          </section>
        </div>
      </div>
    </div>
  );
}
