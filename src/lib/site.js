// Single source of truth for site-wide SEO values.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment to the real domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pointzeroroadlines.com';

export const SITE_NAME = 'Point Zero Road Lines';

export const SITE_TAGLINE = "Ontario's Moffett Delivery & Specialized Transportation Experts";

export const SITE_DESCRIPTION =
  'Point Zero Road Lines provides Moffett delivery, dedicated fleet, flatbed and warehousing with 24/7 dispatch across the GTA and Southern Ontario. Request a quote today.';

// Every crawlable route. Used by sitemap.js.
// Service pages carry the highest priority after the hub: they are the pages
// the SEO terms are targeted at.
export const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/services/moffett-delivery', priority: 0.9 },
  { path: '/services/dedicated-fleet', priority: 0.8 },
  { path: '/services/flatbed-transportation', priority: 0.8 },
  { path: '/services/dry-van-transportation', priority: 0.7 },
  { path: '/services/warehouse-cross-dock', priority: 0.8 },
  { path: '/services/construction-material-delivery', priority: 0.9 },
  { path: '/services/healthcare-logistics', priority: 0.7 },
  { path: '/services/manufacturing-consumer-goods', priority: 0.7 },
  { path: '/services/last-mile-retail-delivery', priority: 0.8 },
  { path: '/services/expedited-same-day', priority: 0.7 },
  { path: '/services/cross-border-freight', priority: 0.7 },
  { path: '/services/building-material-distribution', priority: 0.8 },
  { path: '/service-areas', priority: 0.7 },
  { path: '/safety-compliance', priority: 0.6 },
  { path: '/faq', priority: 0.6 },
  { path: '/about', priority: 0.6 },
  { path: '/get-a-quote', priority: 0.9 },
  { path: '/contact-us', priority: 0.7 },
];
