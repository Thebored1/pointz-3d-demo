"use client";
import Link from 'next/link';
import './variations.css';

const options = [
  {
    href: '/services/variations/a',
    label: 'A — Editorial',
    desc: 'About-style hero → stats → service grid → gallery → dark capabilities → process → cinematic CTA.',
  },
  {
    href: '/services/variations/b',
    label: 'B — Industrial',
    desc: 'Sticky navy rail → bold hero → stats strip → full-bleed image → numbered service rows → dark CTA.',
  },
  {
    href: '/services/variations/c',
    label: 'C — Catalog',
    desc: 'Split hero with service links → value strip → alternating spec blocks → process list → bottom CTA bar.',
  },
  {
    href: '/services/variations/d',
    label: 'D — About-style',
    desc: 'Badges + hero image, marquee, dark rules block, stats grid, cinematic CTA — mirrors the About page.',
  },
];

export default function ServicesVariationsIndex() {
  return (
    <div className="sv-var-index">
      <p className="sv-var-index-kicker">Layout picker · services overview page</p>
      <h1>Pick a services page layout</h1>
      <p>
        Open each variation, then reply with <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong>.
        That layout will replace the current <Link href="/services">/services</Link> page.
      </p>
      <p className="sv-var-index-note">
        Looking for individual service detail layouts? See{' '}
        <Link href="/services/preview">service detail previews</Link>.
      </p>
      <div className="sv-var-index-grid">
        {options.map((o) => (
          <Link key={o.href} href={o.href} className="sv-var-index-card">
            <strong>{o.label}</strong>
            <span>{o.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
