"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { overviewServices } from './serviceEditorialData';
import { CITIES } from '@/lib/cities';
import { GUIDES } from '@/lib/guides';
import './Breadcrumbs.css';

// Visible breadcrumb trail. Rendered once inside EditorialHero so every service,
// service-area and city page gets a trail with no per-page wiring. The matching
// machine-readable BreadcrumbList JSON-LD is emitted separately by each page.

const STATIC_LABELS = {
  services: 'Services',
  'service-areas': 'Service Areas',
  resources: 'Resources',
  careers: 'Careers',
  'cross-docking-mississauga': 'Cross-Docking Mississauga',
  'construction-material-delivery-toronto': 'Construction Delivery Toronto',
  'cross-docking-toronto': 'Cross-Dock & Last-Mile Toronto',
  'healthcare-linen-logistics-toronto': 'Healthcare Linen Toronto',
  about: 'About',
  contact: 'Contact',
  faq: 'FAQ',
  'fleet-and-equipment': 'Fleet & Equipment',
  'safety-compliance': 'Safety & Compliance',
  'get-a-quote': 'Get a Quote',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
};

const SERVICE_LABELS = Object.fromEntries(
  overviewServices.map((s) => [s.href.replace('/services/', ''), s.title]),
);

function labelFor(segment, parent) {
  if (parent === 'services' && SERVICE_LABELS[segment]) return SERVICE_LABELS[segment];
  if (parent === 'service-areas' && CITIES[segment]) return CITIES[segment].name;
  if (parent === 'resources' && GUIDES[segment]) return GUIDES[segment].shortTitle;
  if (STATIC_LABELS[segment]) return STATIC_LABELS[segment];
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname() || '/';
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'Home', href: '/' }];
  let acc = '';
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    crumbs.push({ label: labelFor(seg, segments[i - 1]), href: acc });
  });

  return (
    <nav className="pz-breadcrumbs" aria-label="Breadcrumb">
      <ol className="pz-breadcrumbs-list">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="pz-breadcrumbs-item">
              {last ? (
                <span aria-current="page">{c.label}</span>
              ) : (
                <>
                  <Link href={c.href}>{c.label}</Link>
                  <span className="pz-breadcrumbs-sep" aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
