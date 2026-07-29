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
};

export function ServiceIcon({ name, ...props }) {
  const Icon = serviceIconMap[name];
  return Icon ? <Icon {...props} /> : null;
}

export const defaultSteps = [
  { num: '01', icon: 'Package', title: 'Quote', desc: 'Send us your lane and load. We respond fast with a straight answer.' },
  { num: '02', icon: 'Route', title: 'Dispatch', desc: 'The right equipment and driver are assigned and routed for your job.' },
  { num: '03', icon: 'BarChart3', title: 'In Transit', desc: 'Secured, tarped and tracked. Our dispatcher stays on your load end to end.' },
  { num: '04', icon: 'CheckCircle', title: 'Delivered', desc: 'Offloaded where you need it — dock or curbside — with confirmation.' },
];

export const defaultTrustBadges = [
  'CVOR Excellent',
  'Company-owned fleet',
  'Moffett-certified',
  '24/7 dispatch',
  'FAST / PARS ready',
];

export const overviewServices = [
  { id: '01', icon: 'Truck', title: 'Flatbed Hauling', href: '/services/specialty-equipment', desc: 'Open-deck transport for steel, lumber, machinery and oversized freight — secured and tarped to spec.' },
  { id: '02', icon: 'Navigation', title: 'Moffett & Piggyback', href: '/services/specialty-equipment', desc: 'Truck-mounted forklift delivery to any site — no dock, no problem.' },
  { id: '03', icon: 'Warehouse', title: 'Cross-Dock & Warehousing', href: '/services/warehouse-and-storage', desc: 'Transload, consolidate and store between our three Ontario sites.' },
  { id: '04', icon: 'Wrench', title: 'Specialty & Linen Equipment', href: '/services/specialty-equipment', desc: 'Dedicated equipment for the linen industry and specialty freight.' },
  { id: '05', icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet', desc: 'Company-owned trucks and vetted drivers assigned to your lanes.' },
  { id: '06', icon: 'Clock', title: '24/7 Dispatch', href: '/contact-us', desc: 'Live coordination around the clock. One dispatcher owns your load.' },
];

export const overviewCapabilities = [
  { icon: 'Truck', label: 'Flatbed', value: '48ft, 53ft, step-decks and drop-decks. Ready for oversized and overweight loads.' },
  { icon: 'Navigation', label: 'Moffett', value: 'Truck-mounted forklifts for job-site deliveries with zero dock requirements.' },
  { icon: 'Warehouse', label: 'Cross-dock', value: 'Seamless transfers between trailers to keep your freight moving without delay.' },
  { icon: 'Wrench', label: 'Specialty', value: 'Linen and custom hauling configurations available upon request.' },
];

export const overviewStats = [
  { value: '26', label: 'Trucks in fleet' },
  { value: '24/7', label: 'Dispatch coverage' },
  { value: '3', label: 'Ontario hubs' },
  { value: '2012', label: 'On the road' },
];

export const overviewGallery = [
  { src: '/images/gallery-3.webp', alt: 'Fleet lineup', span: 'main' },
  { src: '/images/fleet-1.webp', alt: 'On the road' },
  { src: '/images/truck-dock.webp', alt: 'Dock delivery' },
];
