// Single source of truth for site-wide SEO and contact values.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pointzeroroadlines.com';

export const SITE_NAME = 'Point Zero Road Lines';
export const SITE_LEGAL_NAME = 'Point Zero Road Lines';

export const SITE_TAGLINE = "Ontario's Moffett Delivery & Specialized Transportation Experts";

export const SITE_DESCRIPTION =
  'Dedicated fleet, flatbed & Moffett delivery, warehousing, and 24/7 dispatch across the GTA & Ontario since 2006. Get a free quote.';

export const CONTACT_INFO = {
  address: '1566 Bonhill Road, Mississauga, ON L5T 1C7',
  streetAddress: '1566 Bonhill Road',
  city: 'Mississauga',
  province: 'ON',
  postalCode: 'L5T 1C7',
  country: 'CA',
  // Primary line — shown in the header. (647) is the additional number.
  phone: '(905) 291-0325',
  phoneRaw: '+19052910325',
  phoneAlt: '(647) 680-1300',
  phoneAltRaw: '+16476801300',
  whatsapp: '+1 (647) 680-1300',
  whatsappRaw: '16476801300',
  email: 'info@pzrls.com',
  hours: '24/7 dispatch • Weekend pick-up & delivery available',
  usdot: 'USDOT 3983391',
  mc: 'MC 1492151',
  trustLine: 'Licensed & Insured',
  operatingSince: '2006',
  servedAreas: [
    'Mississauga',
    'Brampton',
    'Toronto',
    'Vaughan',
    'Caledon',
    'Bolton',
    'Burlington',
    'Richmond Hill',
    'Markham',
    'Greater Toronto Area',
    'Ontario',
  ],
};

// Canonical crawlable routes for sitemap.js (all legacy/alias routes redirect via next.config.mjs)
export const ROUTES = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.9 },
  // Core Service Slugs
  { path: '/services/flatbed-moffett-transport', priority: 0.95 },
  { path: '/services/dedicated-fleet-services', priority: 0.9 },
  { path: '/services/warehouse-cross-dock-storage', priority: 0.9 },
  { path: '/services/healthcare-linen-logistics', priority: 0.85 },
  { path: '/services/manufacturing-consumer-goods-freight', priority: 0.85 },
  { path: '/services/construction-material-hauling', priority: 0.9 },
  { path: '/services/expedited-same-day-freight', priority: 0.85 },
  { path: '/services/last-mile-delivery', priority: 0.85 },
  { path: '/services/24-7-after-hours-weekend-dispatch', priority: 0.85 },
  // Supporting Core Pages
  { path: '/fleet-and-equipment', priority: 0.8 },
  { path: '/service-areas', priority: 0.8 },
  { path: '/safety-compliance', priority: 0.75 },
  { path: '/faq', priority: 0.75 },
  { path: '/contact', priority: 0.85 },
  { path: '/get-a-quote', priority: 0.9 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-of-service', priority: 0.3 },
];

