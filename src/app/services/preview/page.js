"use client";
import Link from 'next/link';
import './preview.css';

const options = [
  {
    href: '/services/preview/a',
    label: 'A — Cinematic',
    desc: 'Full page: hero → full-bleed image → overview list → gallery → process → FAQ → CTA.',
  },
  {
    href: '/services/preview/b',
    label: 'B — Industrial rail',
    desc: 'Full page: sticky navy rail → hero → stats → image → spec → capabilities → sites → FAQ → CTA.',
  },
  {
    href: '/services/preview/c',
    label: 'C — Spec catalog',
    desc: 'Full page: split hero → value strip → equipment spec → process → gallery → FAQ → CTA.',
  },
  {
    href: '/services/preview/d',
    label: 'D — About-style',
    desc: 'Mirrors the About page: badges + hero image, timeline, dark rules block, stats/badges, cinematic CTA.',
  },
];

export default function ServicePreviewIndex() {
  return (
    <div className="sv-index">
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-gray)', marginBottom: '1rem' }}>
        Layout picker · sample content = Dedicated Fleet
      </p>
      <h1>Pick a service layout</h1>
      <p>
        Open each variation, then reply with <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong>.
        That layout will be applied to Specialty Equipment, Dedicated Fleet, and Warehouse &amp; Storage.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--c-gray)', maxWidth: '36rem', lineHeight: 1.6, margin: '0 0 2rem' }}>
        For the main services overview page, see{' '}
        <Link href="/services/variations" style={{ color: 'var(--c-navy)', fontWeight: 600 }}>services page variations</Link>.
      </p>
      <div className="sv-index-grid">
        {options.map((o) => (
          <Link key={o.href} href={o.href} className="sv-index-card">
            <strong>{o.label}</strong>
            <span>{o.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
