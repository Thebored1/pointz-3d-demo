import {
  Truck,
  Navigation,
  Warehouse,
  Wrench,
  Users,
  Clock,
  Package,
  Route,
  BarChart3,
  CheckCircle,
  MapPin,
  Shield,
  Hammer,
  HeartPulse,
  Factory,
  Store,
  Timer,
  Globe,
  Layers,
  Forklift,
  Briefcase,
  Zap,
} from 'lucide-react';

export const serviceIconMap = {
  Truck,
  Navigation,
  Warehouse,
  Wrench,
  Users,
  Clock,
  Package,
  Route,
  BarChart3,
  CheckCircle,
  MapPin,
  Shield,
  Hammer,
  HeartPulse,
  Factory,
  Store,
  Timer,
  Globe,
  Layers,
  Forklift,
  Briefcase,
  Zap,
};

export function ServiceIcon({ name, ...props }) {
  const Icon = serviceIconMap[name];
  return Icon ? <Icon {...props} /> : null;
}

export const defaultSteps = [
  { num: '01', icon: 'Package', title: 'Quote', desc: 'Send us your lane and load. We respond fast with a straight answer.' },
  { num: '02', icon: 'Route', title: 'Dispatch', desc: 'The right equipment and driver are assigned and routed for your job.' },
  { num: '03', icon: 'BarChart3', title: 'In Transit', desc: 'Secured, tarped and tracked — watch your truck move in real time.' },
  { num: '04', icon: 'CheckCircle', title: 'Delivered', desc: 'Placed where you need it — dock, curbside or job site — with confirmation.' },
];

// Capability & authority claims matching August 2026 plan.
export const defaultTrustBadges = [
  'Moffett-equipped fleet',
  'Company-owned trucks',
  'Licensed & Insured',
  'USDOT 3983391 · MC 1492151',
  '24/7 live dispatch',
];

export const overviewServices = [
  { id: '01', icon: 'Forklift', title: 'Flatbed & Moffett Transport', href: '/services/flatbed-moffett-transport', desc: 'Truck-mounted forklifts that unload on arrival — no dock, no on-site equipment required.' },
  { id: '02', icon: 'Users', title: 'Dedicated Fleet Services', href: '/services/dedicated-fleet-services', desc: 'Trucks, trailers, Moffett units, and drivers assigned to your account, planned around your schedule.' },
  { id: '03', icon: 'Warehouse', title: 'Warehouse & Cross-Dock Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Secure, centrally located space to stage, consolidate, or store freight between transportation legs.' },
  { id: '04', icon: 'HeartPulse', title: 'Healthcare Linen & Textile Logistics', href: '/services/healthcare-linen-logistics', desc: 'Scheduling and handling built around the turnaround windows healthcare and linen operations run on.' },
  { id: '05', icon: 'Factory', title: 'Manufacturing & Consumer Goods', href: '/services/manufacturing-consumer-goods-freight', desc: 'LTL and FTL capacity that moves with your production and distribution schedule.' },
  { id: '06', icon: 'Hammer', title: 'Construction Material Hauling', href: '/services/construction-material-hauling', desc: 'Materials delivered where a job site actually needs them, dock or no dock.' },
  { id: '07', icon: 'Timer', title: 'Expedited & Same-Day Freight', href: '/services/expedited-same-day-freight', desc: 'Hot shot delivery when a shipment can’t wait for a standard schedule.' },
  { id: '08', icon: 'Store', title: 'Last Mile Delivery', href: '/services/last-mile-delivery', desc: 'Final-leg delivery to the exact point of need — construction sites, retail and residential.' },
  { id: '09', icon: 'Clock', title: '24/7 Dispatch & Weekend Delivery', href: '/services/24-7-after-hours-weekend-dispatch', desc: 'A live dispatcher on the line nights, weekends, and holidays — not a voicemail box.' },
];

// Curated cross-links for SEO and navigation. Keyed by service slug.
export const relatedServices = {
  'flatbed-moffett-transport': ['construction-material-hauling', 'dedicated-fleet-services', 'last-mile-delivery'],
  'moffett-delivery': ['construction-material-hauling', 'flatbed-moffett-transport', 'last-mile-delivery'],
  'dedicated-fleet-services': ['manufacturing-consumer-goods-freight', 'flatbed-moffett-transport', 'warehouse-cross-dock-storage'],
  'dedicated-fleet': ['manufacturing-consumer-goods-freight', 'flatbed-moffett-transport', 'warehouse-cross-dock-storage'],
  'warehouse-cross-dock-storage': ['dedicated-fleet-services', 'last-mile-delivery', 'manufacturing-consumer-goods-freight'],
  'warehouse-cross-dock': ['dedicated-fleet-services', 'last-mile-delivery', 'manufacturing-consumer-goods-freight'],
  'healthcare-linen-logistics': ['dedicated-fleet-services', 'expedited-same-day-freight', '24-7-after-hours-weekend-dispatch'],
  'healthcare-logistics': ['dedicated-fleet-services', 'expedited-same-day-freight', '24-7-after-hours-weekend-dispatch'],
  'manufacturing-consumer-goods-freight': ['dedicated-fleet-services', 'warehouse-cross-dock-storage', 'flatbed-moffett-transport'],
  'manufacturing-consumer-goods': ['dedicated-fleet-services', 'warehouse-cross-dock-storage', 'flatbed-moffett-transport'],
  'construction-material-hauling': ['flatbed-moffett-transport', 'dedicated-fleet-services', 'last-mile-delivery'],
  'construction-material-delivery': ['flatbed-moffett-transport', 'dedicated-fleet-services', 'last-mile-delivery'],
  'expedited-same-day-freight': ['dedicated-fleet-services', 'healthcare-linen-logistics', '24-7-after-hours-weekend-dispatch'],
  'expedited-same-day': ['dedicated-fleet-services', 'healthcare-linen-logistics', '24-7-after-hours-weekend-dispatch'],
  'last-mile-delivery': ['warehouse-cross-dock-storage', 'flatbed-moffett-transport', 'expedited-same-day-freight'],
  'last-mile-retail-delivery': ['warehouse-cross-dock-storage', 'flatbed-moffett-transport', 'expedited-same-day-freight'],
  '24-7-after-hours-weekend-dispatch': ['expedited-same-day-freight', 'dedicated-fleet-services', 'healthcare-linen-logistics'],
  'flatbed-transportation': ['flatbed-moffett-transport', 'construction-material-hauling', 'dedicated-fleet-services'],
  'dry-van-transportation': ['manufacturing-consumer-goods-freight', 'dedicated-fleet-services', 'warehouse-cross-dock-storage'],
  'building-material-distribution': ['construction-material-hauling', 'flatbed-moffett-transport', 'warehouse-cross-dock-storage'],
  'cross-border-freight': ['flatbed-moffett-transport', 'dedicated-fleet-services', 'expedited-same-day-freight'],
};

export function getRelated(slug) {
  const bySlug = Object.fromEntries(
    overviewServices.map((s) => [s.href.replace('/services/', ''), s]),
  );
  return (relatedServices[slug] || [])
    .map((k) => bySlug[k])
    .filter(Boolean)
    .map((s) => ({ title: s.title, href: s.href, desc: s.desc }));
}

// Real Point Zero photos, assigned per page so each service has its own
// imagery instead of repeating one shot. Keyed by page slug; ServiceEditorialPage
// looks up the set and falls back to DEFAULT_IMAGE_SET for anything unlisted.
const ALT = {
  'fleet-hero': 'Point Zero Road Lines fleet lined up in the yard',
  'fleet-side': 'Point Zero Road Lines day cab and trailers',
  'fleet-trailers': 'Point Zero Road Lines tractors and trailers',
  'fleet-yard': 'Point Zero Road Lines fleet parked in the yard',
  'fleet-lineup2': 'Point Zero Road Lines fleet lineup',
  'fleet-lineup3': 'Point Zero Road Lines trucks lined up',
  'driver-cabin': 'A Point Zero Road Lines driver in the cab',
  'flatbed-loaded': 'A loaded Point Zero Road Lines flatbed in the yard',
  'flatbed-lumber': 'A Point Zero Road Lines flatbed loaded with lumber',
  'flatbed-lumber2': 'Building materials on a Point Zero Road Lines flatbed',
  'flatbed-lumber3': 'Lumber loaded on a Point Zero Road Lines flatbed',
  'flatbed-street': 'A loaded Point Zero Road Lines flatbed on the road',
  'flatbed-road': 'A Point Zero Road Lines flatbed on the highway',
  'moffett-flatbed': 'A Point Zero Road Lines flatbed with a truck-mounted Moffett',
  'crane-load': 'Loading a Point Zero Road Lines truck on site',
  'night-flatbed': 'A Point Zero Road Lines flatbed loaded for a night run',
  'highway-trailer': 'A Point Zero Road Lines trailer on the highway',
  'urban-cab': 'A Point Zero Road Lines truck in downtown Toronto',
  'urban-winter': 'A Point Zero Road Lines truck downtown in winter',
  'urban-flatbed': 'A Point Zero Road Lines flatbed on a city street',
  'truck-loaded': 'A loaded Point Zero Road Lines flatbed truck in the yard',
  'specialty-kenworth': 'A Point Zero Road Lines specialty flatbed tractor',
  // New page-wise photography
  'fleet-lineup': 'Point Zero Road Lines fleet lined up under a clear blue sky',
  'services-hero': 'Point Zero Road Lines fleet lined up under a clear blue sky',
  'about-fleet-lineup': 'Point Zero Road Lines fleet lined up under a clear blue sky',
  'about-fleet-yard': 'Point Zero Road Lines fleet parked at the terminal yard',
  'home-fleet-manager': 'Point Zero Road Lines fleet manager inspecting transport trucks',
  'home-driver-cabin': 'Point Zero Road Lines professional driver behind the wheel',
  'moffett-yard-rear': 'Point Zero Road Lines Moffett-equipped flatbed in the logistics yard',
  'moffett-yard-front': 'Point Zero Road Lines Moffett flatbed truck ready for delivery',
  'moffett-unloading-forklift': 'Truck-mounted forklift unloading palletized freight on site',
  'moffett-construction-unload': 'Point Zero Road Lines Moffett delivery at construction site',
  'moffett-logistics-yard': 'Point Zero Road Lines Moffett-equipped truck in the logistics yard',
  'truck-side': 'Point Zero Road Lines truck side profile on the road',
  'dedicated-fleet-rows': 'Point Zero Road Lines dedicated fleet lined up in parallel rows',
  'dedicated-fleet-terminal': 'Point Zero Road Lines dedicated carrier fleet at terminal',
  'dedicated-fleet-highway': 'Point Zero Road Lines truck traveling on open highway',
  'dedicated-fleet-blue': 'Point Zero Road Lines commercial fleet in blue light',
  'construction-blue-hero': 'Point Zero Road Lines truck delivering construction materials',
  'construction-delivery-site': 'Point Zero Road Lines delivering building materials on site',
  'construction-materials-crane': 'Point Zero Road Lines truck loading construction materials',
  'construction-site-unload': 'Point Zero Road Lines flatbed unloading on construction site',
  'flatbed-blue-transport': 'Point Zero Road Lines flatbed transport truck on route',
  'flatbed-construction-haul': 'Point Zero Road Lines flatbed hauling heavy construction materials',
  'flatbed-highway-ad': 'Point Zero Road Lines flatbed truck on highway delivery',
  'warehouse-crossdock-facility': 'Point Zero Road Lines modern warehouse and cross-dock facility',
  'warehouse-crossdock-docks': 'Loading bay docks at Point Zero Road Lines cross-dock terminal',
  'warehouse-crossdock-staging': 'Staging area and cross-dock storage at Point Zero facility',
  'warehouse-crossdock-fleet1': 'Point Zero Road Lines trucks stationed at warehouse loading docks',
  'warehouse-crossdock-fleet2': 'Point Zero Road Lines freight transport at logistics terminal',
};
// Per-image focal point (object-position). Tuned to each photo's subject so it
// stays in frame across the different slot aspect ratios (hero ~2:1, gallery
// main ~1.4:1, gallery cell ~2:1, CTA ~2.26:1). Most shots have sky on top, so
// the truck sits below centre — hence the y values above 50%.
const POS = {
  'fleet-hero': '50% 58%',
  'fleet-side': '38% 48%',
  'fleet-trailers': '55% 64%',
  'fleet-yard': '32% 48%',
  'fleet-lineup2': '50% 54%',
  'fleet-lineup3': '50% 54%',
  'driver-cabin': '30% 42%',
  'truck-loaded': '50% 52%',
  'flatbed-loaded': '48% 60%',
  'flatbed-lumber': '38% 52%',
  'flatbed-lumber2': '52% 46%',
  'flatbed-lumber3': '45% 50%',
  'flatbed-street': '40% 54%',
  'flatbed-road': '38% 52%',
  'moffett-flatbed': '42% 56%',
  'crane-load': '44% 56%',
  'night-flatbed': '42% 52%',
  'highway-trailer': '45% 54%',
  'urban-cab': '30% 48%',
  'urban-winter': '46% 56%',
  'urban-flatbed': '40% 56%',
  // New page-wise focal points
  'fleet-lineup': '50% 55%',
  'services-hero': '50% 55%',
  'about-fleet-lineup': '50% 55%',
  'about-fleet-yard': '50% 50%',
  'home-fleet-manager': '50% 52%',
  'home-driver-cabin': '50% 40%',
  'moffett-yard-rear': '50% 55%',
  'moffett-yard-front': '50% 52%',
  'moffett-logistics-yard': '50% 55%',
  'truck-side': '50% 50%',
  'moffett-unloading-forklift': '50% 50%',
  'moffett-construction-unload': '50% 50%',
  'dedicated-fleet-rows': '50% 54%',
  'dedicated-fleet-terminal': '50% 50%',
  'dedicated-fleet-highway': '50% 52%',
  'dedicated-fleet-blue': '50% 52%',
  'construction-blue-hero': '50% 54%',
  'construction-delivery-site': '50% 52%',
  'construction-materials-crane': '50% 52%',
  'construction-site-unload': '50% 52%',
  'flatbed-blue-transport': '50% 52%',
  'flatbed-construction-haul': '50% 52%',
  'flatbed-highway-ad': '50% 50%',
  'warehouse-crossdock-facility': '50% 52%',
  'warehouse-crossdock-docks': '50% 50%',
  'warehouse-crossdock-staging': '50% 50%',
  'warehouse-crossdock-fleet1': '50% 52%',
  'warehouse-crossdock-fleet2': '50% 52%',
};
const img = (slug, span) => ({
  src: `/images/${slug}.webp`,
  alt: ALT[slug] || 'Point Zero Road Lines',
  pos: POS[slug] || 'center',
  ...(span ? { span } : {}),
});

export const DEFAULT_IMAGE_SET = {
  hero: img('fleet-lineup'),
  gallery: [img('truck-loaded', 'main'), img('warehouse-crossdock-fleet2'), img('home-driver-cabin')],
  cta: img('about-fleet-yard'),
};

export const IMAGE_SETS = {
  about: {
    hero: img('about-hero'),
    gallery: [img('about-fleet-yard', 'main'), img('home-driver-cabin'), img('home-fleet-manager')],
    cta: img('about-fleet-yard'),
  },
  services: {
    hero: img('services-hero'),
    gallery: [img('truck-loaded', 'main'), img('warehouse-crossdock-fleet2'), img('home-driver-cabin')],
    cta: img('about-fleet-yard'),
  },
  'flatbed-moffett-transport': {
    hero: img('moffett-logistics-yard'),
    gallery: [img('construction-site-unload', 'main'), img('flatbed-road'), img('truck-side')],
    cta: img('moffett-logistics-yard'),
  },
  'moffett-delivery': {
    hero: img('moffett-construction-unload'),
    gallery: [img('moffett-yard-rear', 'main'), img('moffett-unloading-forklift'), img('warehouse-crossdock-fleet2')],
    cta: img('flatbed-highway-ad'),
  },
  'dedicated-fleet-services': {
    hero: img('dedicated-fleet-rows'),
    gallery: [img('dedicated-fleet-terminal', 'main'), img('dedicated-fleet-highway'), img('dedicated-fleet-blue')],
    cta: img('about-fleet-yard'),
  },
  'dedicated-fleet': {
    hero: img('dedicated-fleet-rows'),
    gallery: [img('dedicated-fleet-terminal', 'main'), img('dedicated-fleet-highway'), img('dedicated-fleet-blue')],
    cta: img('about-fleet-yard'),
  },
  'flatbed-transportation': {
    hero: img('flatbed-highway-ad'),
    gallery: [img('flatbed-construction-haul', 'main'), img('flatbed-blue-transport'), img('flatbed-road')],
    cta: img('about-fleet-yard'),
  },
  'dry-van-transportation': {
    hero: img('dedicated-fleet-rows'),
    gallery: [img('dedicated-fleet-highway', 'main'), img('warehouse-crossdock-facility'), img('highway-trailer')],
    cta: img('dedicated-fleet-terminal'),
  },
  'warehouse-cross-dock-storage': {
    hero: img('warehouse-crossdock-docks'),
    gallery: [img('warehouse-crossdock-facility', 'main'), img('warehouse-crossdock-staging'), img('warehouse-crossdock-fleet1')],
    cta: img('warehouse-crossdock-fleet2'),
  },
  'warehouse-cross-dock': {
    hero: img('warehouse-crossdock-docks'),
    gallery: [img('warehouse-crossdock-facility', 'main'), img('warehouse-crossdock-staging'), img('warehouse-crossdock-fleet1')],
    cta: img('warehouse-crossdock-fleet2'),
  },
  'construction-material-hauling': {
    hero: img('construction-blue-hero'),
    gallery: [img('construction-delivery-site', 'main'), img('construction-materials-crane'), img('construction-site-unload')],
    cta: img('about-fleet-yard'),
  },
  'construction-material-delivery': {
    hero: img('construction-blue-hero'),
    gallery: [img('construction-delivery-site', 'main'), img('construction-materials-crane'), img('construction-site-unload')],
    cta: img('about-fleet-yard'),
  },
  'building-material-distribution': {
    hero: img('construction-delivery-site'),
    gallery: [img('construction-site-unload', 'main'), img('construction-materials-crane'), img('flatbed-construction-haul')],
    cta: img('construction-blue-hero'),
  },
  'healthcare-linen-logistics': {
    hero: img('warehouse-crossdock-fleet2'),
    gallery: [img('dedicated-fleet-terminal', 'main'), img('warehouse-crossdock-staging'), img('home-fleet-manager')],
    cta: img('dedicated-fleet-rows'),
  },
  'healthcare-logistics': {
    hero: img('dedicated-fleet-blue'),
    gallery: [img('dedicated-fleet-terminal', 'main'), img('warehouse-crossdock-staging'), img('home-fleet-manager')],
    cta: img('dedicated-fleet-rows'),
  },
  'manufacturing-consumer-goods-freight': {
    hero: img('warehouse-crossdock-facility'),
    gallery: [img('warehouse-crossdock-docks', 'main'), img('warehouse-crossdock-fleet1'), img('flatbed-construction-haul')],
    cta: img('dedicated-fleet-rows'),
  },
  'manufacturing-consumer-goods': {
    hero: img('warehouse-crossdock-facility'),
    gallery: [img('warehouse-crossdock-docks', 'main'), img('warehouse-crossdock-fleet1'), img('flatbed-construction-haul')],
    cta: img('dedicated-fleet-rows'),
  },
  'last-mile-delivery': {
    hero: img('flatbed-construction-haul'),
    gallery: [img('moffett-unloading-forklift', 'main'), img('warehouse-crossdock-docks'), img('moffett-construction-unload')],
    cta: img('warehouse-crossdock-fleet2'),
  },
  'last-mile-retail-delivery': {
    hero: img('moffett-yard-rear'),
    gallery: [img('moffett-unloading-forklift', 'main'), img('warehouse-crossdock-docks'), img('moffett-construction-unload')],
    cta: img('warehouse-crossdock-fleet2'),
  },
  'expedited-same-day-freight': {
    hero: img('flatbed-highway-ad'),
    gallery: [img('dedicated-fleet-highway', 'main'), img('warehouse-crossdock-fleet2'), img('warehouse-crossdock-docks')],
    cta: img('dedicated-fleet-rows'),
  },
  'expedited-same-day': {
    hero: img('flatbed-highway-ad'),
    gallery: [img('dedicated-fleet-highway', 'main'), img('warehouse-crossdock-fleet2'), img('warehouse-crossdock-docks')],
    cta: img('dedicated-fleet-rows'),
  },
  '24-7-after-hours-weekend-dispatch': {
    hero: img('dedicated-fleet-highway'),
    gallery: [img('home-fleet-manager', 'main'), img('home-driver-cabin'), img('dedicated-fleet-rows')],
    cta: img('about-fleet-yard'),
  },
  'fleet-and-equipment': {
    hero: img('fleet-hero'),
    gallery: [img('moffett-yard-rear', 'main'), img('flatbed-highway-ad'), img('warehouse-crossdock-facility')],
    cta: img('about-fleet-yard'),
  },
  'cross-border-freight': {
    hero: img('dedicated-fleet-highway'),
    gallery: [img('flatbed-highway-ad', 'main'), img('warehouse-crossdock-facility'), img('flatbed-construction-haul')],
    cta: img('dedicated-fleet-rows'),
  },
  'service-areas': {
    hero: img('fleet-hero'),
    gallery: [img('about-fleet-yard', 'main'), img('dedicated-fleet-highway'), img('flatbed-highway-ad')],
    cta: img('dedicated-fleet-rows'),
  },
  'safety-compliance': {
    hero: img('home-fleet-manager'),
    gallery: [img('home-driver-cabin', 'main'), img('warehouse-crossdock-fleet2'), img('dedicated-fleet-rows')],
    cta: img('about-fleet-yard'),
  },
};

export function getImageSet(key) {
  return IMAGE_SETS[key] || DEFAULT_IMAGE_SET;
}

export const overviewCapabilities = [
  { icon: 'Forklift', label: 'Moffett', value: 'Truck-mounted forklifts that travel with the load and unload without site equipment.' },
  { icon: 'Truck', label: 'Flatbed', value: '36ft, 40ft, 48ft, 53ft, step-decks and drop-decks. Ready for oversized and overweight loads.' },
  { icon: 'Warehouse', label: 'Cross-dock', value: 'Inbound to outbound transfers that keep freight moving instead of sitting.' },
  { icon: 'Navigation', label: 'Tracking', value: 'Live truck location, so you know where the load is without calling to ask.' },
];

export const overviewStats = [
  { value: '2006', label: 'Operating Since' },
  { value: '24/7', label: 'Live Dispatch Coverage' },
  { value: '1566', label: 'Bonhill Rd, Mississauga HQ' },
  { value: 'USDOT/MC', label: 'Registered Carrier Authority' },
];

export const overviewGallery = [
  { src: '/images/moffett-yard-rear.webp', alt: 'Moffett-equipped flatbed in logistics yard', span: 'main' },
  { src: '/images/dedicated-fleet-highway.webp', alt: 'Commercial transport truck on highway' },
  { src: '/images/warehouse-crossdock-docks.webp', alt: 'Mississauga central cross-dock terminal' },
];
