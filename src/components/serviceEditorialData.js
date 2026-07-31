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
