import React from 'react';
import ServiceEditorialPage from './ServiceEditorialPage';
import { LANDING_PAGES, buildSchema } from '@/lib/landingPages';

// Renders a service+city landing page from /lib/landingPages.js data.
export default function LandingPage({ slug }) {
  const d = LANDING_PAGES[slug];
  if (!d) return null;
  return (
    <ServiceEditorialPage
      schema={buildSchema(slug)}
      imageKey={d.imageKey}
      related={d.related}
      badge={d.badge}
      badgeAlt={d.badgeAlt}
      titleLine1={d.titleLine1}
      titleAccent={d.titleAccent}
      description={d.description}
      stats={d.stats}
      primarySection={d.primary}
      darkSection={d.dark}
      faqSection={{ num: '05', label: 'FAQ', title: `${d.city} — common questions`, items: d.faqs.map((f) => ({ title: f.q, desc: f.a })) }}
      cta={d.cta}
    />
  );
}
