// Single source of truth for site-wide SEO and contact values.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pointzeroroadlines.com';

export const SITE_NAME = 'Point Zero Road Lines';
export const SITE_LEGAL_NAME = 'Point Zero Road Lines';

export const SITE_TAGLINE = "Ontario's Moffett Delivery & Specialized Transportation Experts";

export const SITE_DESCRIPTION =
  'Dedicated fleet, flatbed & Moffett delivery, warehousing, and 24/7 dispatch across the GTA & Southern Ontario since 2006. Get a free quote.';

export const CONTACT_INFO = {
  address: '1566 Bonhill Road, Mississauga, ON L5T 1C7',
  streetAddress: '1566 Bonhill Road',
  city: 'Mississauga',
  province: 'ON',
  postalCode: 'L5T 1C7',
  country: 'CA',
  phone: '(905) 291-0325',
  phoneRaw: '+19052910325',
  email: 'info@pointzeroroadlines.com',
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
    'Southern Ontario',
  ],
};

// Full list of crawlable routes for sitemap.js
export const ROUTES = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.9 },
  // Final Service Slugs
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
  { path: '/blog', priority: 0.75 },
  { path: '/contact', priority: 0.85 },
  { path: '/get-a-quote', priority: 0.9 },
  // Legacy / Alias Routes
  { path: '/services/moffett-delivery', priority: 0.8 },
  { path: '/services/dedicated-fleet', priority: 0.8 },
  { path: '/services/flatbed-transportation', priority: 0.8 },
  { path: '/services/dry-van-transportation', priority: 0.7 },
  { path: '/services/warehouse-cross-dock', priority: 0.8 },
  { path: '/services/construction-material-delivery', priority: 0.8 },
  { path: '/services/healthcare-logistics', priority: 0.7 },
  { path: '/services/manufacturing-consumer-goods', priority: 0.7 },
  { path: '/services/last-mile-retail-delivery', priority: 0.7 },
  { path: '/services/expedited-same-day', priority: 0.7 },
  { path: '/services/cross-border-freight', priority: 0.7 },
  { path: '/services/building-material-distribution', priority: 0.7 },
  { path: '/contact-us', priority: 0.7 },
];
