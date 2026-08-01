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

// Capability claims only. Certification badges were removed at the client's
// request; do not add CVOR, FAST, PARS, C-TPAT or similar back without written
// confirmation that the credential is current.
export const defaultTrustBadges = [
  'Moffett-equipped fleet',
  'Company-owned trucks',
  'Bonded and insured',
  '24/7 dispatch',
  'Live truck tracking',
];

export const overviewServices = [
  { id: '01', icon: 'Forklift', title: 'Moffett Delivery', href: '/services/moffett-delivery', desc: 'Truck-mounted forklift delivery to any site — no dock, no on-site forklift, no waiting.' },
  { id: '02', icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet', desc: 'Trucks, trailers and drivers assigned to your account and planned around your schedule.' },
  { id: '03', icon: 'Truck', title: 'Flatbed Transportation', href: '/services/flatbed-transportation', desc: 'Open-deck capacity for steel, lumber, machinery and oversized freight — secured and tarped to spec.' },
  { id: '04', icon: 'Package', title: 'Dry Van Transportation', href: '/services/dry-van-transportation', desc: 'Enclosed, weather-protected capacity for palletized and general freight.' },
  { id: '05', icon: 'Warehouse', title: 'Warehouse & Cross-Dock', href: '/services/warehouse-cross-dock', desc: 'Staging, consolidation and storage under the same roof as the trucks.' },
  { id: '06', icon: 'Hammer', title: 'Construction Material Delivery', href: '/services/construction-material-delivery', desc: 'Lumber, drywall, roofing, steel and precast placed where the job site actually needs it.' },
  { id: '07', icon: 'HeartPulse', title: 'Healthcare Logistics', href: '/services/healthcare-logistics', desc: 'Scheduled linen and textile runs built around facility turnaround windows.' },
  { id: '08', icon: 'Factory', title: 'Manufacturing & Consumer Goods', href: '/services/manufacturing-consumer-goods', desc: 'FTL and LTL capacity that moves with your production and distribution schedule.' },
  { id: '09', icon: 'Store', title: 'Last Mile & Retail Delivery', href: '/services/last-mile-retail-delivery', desc: 'Scheduled route and store-level delivery, including white glove placement.' },
  { id: '10', icon: 'Timer', title: 'Expedited & Same Day', href: '/services/expedited-same-day', desc: 'Direct, time-critical runs when the load has to be there today.' },
  { id: '11', icon: 'Globe', title: 'Cross-Border Freight', href: '/services/cross-border-freight', desc: 'Ontario to the United States under our own USDOT and MC authority.' },
  { id: '12', icon: 'Layers', title: 'Building Material Distribution', href: '/services/building-material-distribution', desc: 'Distribution programs for suppliers moving material to sites and yards.' },
];

// Curated cross-links for SEO and navigation. Keyed by service slug; each
// lists closely related services. Resolved to {title, href} via getRelated().
export const relatedServices = {
  'moffett-delivery': ['construction-material-delivery', 'flatbed-transportation', 'last-mile-retail-delivery'],
  'dedicated-fleet': ['manufacturing-consumer-goods', 'flatbed-transportation', 'warehouse-cross-dock'],
  'flatbed-transportation': ['moffett-delivery', 'construction-material-delivery', 'dry-van-transportation'],
  'dry-van-transportation': ['manufacturing-consumer-goods', 'flatbed-transportation', 'warehouse-cross-dock'],
  'warehouse-cross-dock': ['dedicated-fleet', 'last-mile-retail-delivery', 'manufacturing-consumer-goods'],
  'construction-material-delivery': ['moffett-delivery', 'flatbed-transportation', 'building-material-distribution'],
  'healthcare-logistics': ['dry-van-transportation', 'dedicated-fleet', 'expedited-same-day'],
  'manufacturing-consumer-goods': ['dry-van-transportation', 'dedicated-fleet', 'warehouse-cross-dock'],
  'last-mile-retail-delivery': ['warehouse-cross-dock', 'moffett-delivery', 'expedited-same-day'],
  'expedited-same-day': ['dedicated-fleet', 'healthcare-logistics', 'last-mile-retail-delivery'],
  'cross-border-freight': ['flatbed-transportation', 'dry-van-transportation', 'manufacturing-consumer-goods'],
  'building-material-distribution': ['construction-material-delivery', 'moffett-delivery', 'warehouse-cross-dock'],
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
  'warehouse-interior': 'Point Zero Road Lines flatbeds inside the warehouse',
  'night-flatbed': 'A Point Zero Road Lines flatbed loaded for a night run',
  'highway-trailer': 'A Point Zero Road Lines trailer on the highway',
  'urban-cab': 'A Point Zero Road Lines truck in downtown Toronto',
  'urban-winter': 'A Point Zero Road Lines truck downtown in winter',
  'urban-flatbed': 'A Point Zero Road Lines flatbed on a city street',
  'specialty-kenworth': 'A Point Zero Road Lines specialty flatbed tractor',
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
  'flatbed-loaded': '48% 60%',
  'flatbed-lumber': '38% 52%',
  'flatbed-lumber2': '52% 46%',
  'flatbed-lumber3': '45% 50%',
  'flatbed-street': '40% 54%',
  'flatbed-road': '38% 52%',
  'moffett-flatbed': '42% 56%',
  'crane-load': '44% 56%',
  'warehouse-interior': '60% 56%',
  'night-flatbed': '42% 52%',
  'highway-trailer': '45% 54%',
  'urban-cab': '30% 48%',
  'urban-winter': '46% 56%',
  'urban-flatbed': '40% 56%',
};
const img = (slug, span) => ({
  src: `/images/${slug}.webp`,
  alt: ALT[slug] || 'Point Zero Road Lines',
  pos: POS[slug] || 'center',
  ...(span ? { span } : {}),
});

export const DEFAULT_IMAGE_SET = {
  hero: img('fleet-hero'),
  gallery: [img('fleet-lineup2', 'main'), img('driver-cabin'), img('flatbed-loaded')],
  cta: img('fleet-hero'),
};

export const IMAGE_SETS = {
  services: { hero: img('fleet-hero'), gallery: [img('fleet-lineup2', 'main'), img('warehouse-interior'), img('flatbed-loaded')], cta: img('fleet-lineup3') },
  'moffett-delivery': { hero: img('moffett-flatbed'), gallery: [img('flatbed-loaded', 'main'), img('crane-load'), img('driver-cabin')], cta: img('fleet-hero') },
  'dedicated-fleet': { hero: img('fleet-hero'), gallery: [img('fleet-side', 'main'), img('fleet-trailers'), img('fleet-lineup2')], cta: img('fleet-lineup3') },
  'flatbed-transportation': { hero: img('flatbed-loaded'), gallery: [img('flatbed-street', 'main'), img('flatbed-lumber'), img('highway-trailer')], cta: img('flatbed-road') },
  'dry-van-transportation': { hero: img('fleet-trailers'), gallery: [img('fleet-yard', 'main'), img('fleet-side'), img('highway-trailer')], cta: img('fleet-lineup2') },
  'warehouse-cross-dock': { hero: img('warehouse-interior'), gallery: [img('flatbed-loaded', 'main'), img('fleet-yard'), img('night-flatbed')], cta: img('fleet-hero') },
  'construction-material-delivery': { hero: img('flatbed-lumber'), gallery: [img('flatbed-loaded', 'main'), img('flatbed-lumber2'), img('flatbed-lumber3')], cta: img('crane-load') },
  'healthcare-logistics': { hero: img('fleet-side'), gallery: [img('fleet-trailers', 'main'), img('fleet-yard'), img('urban-cab')], cta: img('fleet-hero') },
  'manufacturing-consumer-goods': { hero: img('fleet-lineup2'), gallery: [img('fleet-trailers', 'main'), img('fleet-yard'), img('highway-trailer')], cta: img('fleet-hero') },
  'last-mile-retail-delivery': { hero: img('urban-flatbed'), gallery: [img('urban-cab', 'main'), img('urban-winter'), img('flatbed-street')], cta: img('fleet-hero') },
  'expedited-same-day': { hero: img('night-flatbed'), gallery: [img('highway-trailer', 'main'), img('moffett-flatbed'), img('fleet-lineup3')], cta: img('fleet-hero') },
  'cross-border-freight': { hero: img('highway-trailer'), gallery: [img('urban-winter', 'main'), img('fleet-side'), img('flatbed-road')], cta: img('fleet-hero') },
  'building-material-distribution': { hero: img('flatbed-lumber2'), gallery: [img('flatbed-lumber', 'main'), img('flatbed-loaded'), img('flatbed-lumber3')], cta: img('crane-load') },
  'service-areas': { hero: img('fleet-lineup3'), gallery: [img('fleet-yard', 'main'), img('urban-cab'), img('highway-trailer')], cta: img('fleet-hero') },
  'safety-compliance': { hero: img('fleet-side'), gallery: [img('driver-cabin', 'main'), img('fleet-lineup2'), img('warehouse-interior')], cta: img('fleet-hero') },
};

export function getImageSet(key) {
  return IMAGE_SETS[key] || DEFAULT_IMAGE_SET;
}

export const overviewCapabilities = [
  { icon: 'Forklift', label: 'Moffett', value: 'Truck-mounted forklifts that travel with the load and unload without site equipment.' },
  { icon: 'Truck', label: 'Flatbed', value: '48ft, 53ft, step-decks and drop-decks. Ready for oversized and overweight loads.' },
  { icon: 'Warehouse', label: 'Cross-dock', value: 'Inbound to outbound transfers that keep freight moving instead of sitting.' },
  { icon: 'Navigation', label: 'Tracking', value: 'Live truck location, so you know where the load is without calling to ask.' },
];

export const overviewStats = [
  { value: '2006', label: 'Moving freight since' },
  { value: '24/7', label: 'Dispatch coverage' },
  { value: '3', label: 'Ontario hubs' },
  { value: '12', label: 'Service lines' },
];

export const overviewGallery = [
  { src: '/images/gallery-3.webp', alt: 'Fleet lineup', span: 'main' },
  { src: '/images/fleet-1.webp', alt: 'On the road' },
  { src: '/images/truck-dock.webp', alt: 'Dock delivery' },
];
