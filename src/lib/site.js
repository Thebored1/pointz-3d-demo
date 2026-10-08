// Single source of truth for site-wide SEO and contact values.
// Canonical host is www (the bare domain 301-redirects to www in production), so
// the default matches what actually serves. Override via NEXT_PUBLIC_SITE_URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pointzeroroadlines.com';

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
  phone: '(647) 680-1300',
  phoneRaw: '+16476801300',
  phoneAlt: '(905) 291-0325',
  phoneAltRaw: '+19052910325',
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

// Canonical crawlable routes for sitemap.js (all legacy/alias routes redirect via next.config.mjs).
// `image` mirrors each page's primary OG/hero asset so sitemap.js can emit an
// <image:image> entry (helps Google Images discover and attribute the photo).
export const ROUTES = [
  { path: '/', priority: 1.0, image: '/images/fleet-lineup.webp' },
  { path: '/about', priority: 0.8, image: '/images/about-hero.webp' },
  { path: '/services', priority: 0.9, image: '/images/fleet-lineup.webp' },
  // Core Service Slugs
  { path: '/services/flatbed-moffett-transport', priority: 0.95, image: '/images/moffett-construction-unload.webp' },
  { path: '/services/dedicated-fleet-services', priority: 0.9, image: '/images/dedicated-fleet-rows.webp' },
  { path: '/services/warehouse-cross-dock-storage', priority: 0.9, image: '/images/warehouse-crossdock-docks.webp' },
  { path: '/services/healthcare-linen-logistics', priority: 0.85, image: '/images/dedicated-fleet-blue.webp' },
  { path: '/services/manufacturing-consumer-goods-freight', priority: 0.85, image: '/images/warehouse-crossdock-facility.webp' },
  { path: '/services/construction-material-hauling', priority: 0.9, image: '/images/construction-blue-hero.webp' },
  { path: '/services/equipment-machinery-delivery', priority: 0.85, image: '/images/moffett-unloading-forklift.webp' },
  { path: '/services/expedited-same-day-freight', priority: 0.85, image: '/images/flatbed-highway-ad.webp' },
  { path: '/services/last-mile-delivery', priority: 0.85, image: '/images/moffett-yard-rear.webp' },
  { path: '/services/24-7-after-hours-weekend-dispatch', priority: 0.85, image: '/images/dedicated-fleet-highway.webp' },
  // Equipment & mode sub-pillars
  { path: '/services/dry-van-transportation', priority: 0.8, image: '/images/highway-trailer.webp' },
  { path: '/services/roll-tite-curtain-side-trailers', priority: 0.8, image: '/images/flatbed-blue-transport.webp' },
  { path: '/services/full-truckload-ftl', priority: 0.8, image: '/images/dedicated-fleet-highway.webp' },
  { path: '/services/less-than-truckload-ltl', priority: 0.8, image: '/images/warehouse-crossdock-docks.webp' },
  { path: '/services/cross-border-freight', priority: 0.85, image: '/images/dedicated-fleet-highway.webp' },
  // Supporting Core Pages
  { path: '/fleet-and-equipment', priority: 0.8, image: '/images/fleet-lineup.webp' },
  { path: '/service-areas', priority: 0.8, image: '/images/dedicated-fleet-highway.webp' },
  { path: '/careers', priority: 0.7, image: '/images/home-driver-cabin.webp' },
  { path: '/safety-compliance', priority: 0.75, image: '/images/home-driver-cabin.webp' },
  { path: '/faq', priority: 0.75, image: '/images/fleet-lineup.webp' },
  { path: '/contact', priority: 0.85 },
  { path: '/get-a-quote', priority: 0.9, image: '/images/fleet-lineup.webp' },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-of-service', priority: 0.3 },
];

