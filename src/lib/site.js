// Single source of truth for site-wide SEO values.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment to the real domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pointzlogistics.ca';

export const SITE_NAME = 'Pointz Logistics';

export const SITE_DESCRIPTION =
  'Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario. Lean, safe and on schedule.';

// Every crawlable route. Used by sitemap.js.
export const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/services/dedicated-fleet', priority: 0.8 },
  { path: '/services/specialty-equipment', priority: 0.8 },
  { path: '/services/warehouse-and-storage', priority: 0.8 },
  { path: '/need-a-truck', priority: 0.8 },
  { path: '/about', priority: 0.6 },
  { path: '/career', priority: 0.5 },
  { path: '/contact-us', priority: 0.7 },
];
