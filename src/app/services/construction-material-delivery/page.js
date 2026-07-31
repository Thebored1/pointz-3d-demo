"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Forklift', title: 'Moffett on every site', desc: 'Truck-mounted forklifts unload on uneven ground and in tight access areas.' },
  { icon: 'MapPin', title: 'Direct to site', desc: 'Material placed where the crew is working, not at the nearest accessible point.' },
  { icon: 'Clock', title: 'Job site timelines', desc: 'Scheduling built around access windows, including weekends and after hours.' },
  { icon: 'Shield', title: 'Site-safe drivers', desc: 'Drivers who know job site protocols and work to them without being told.' },
];

const materials = [
  { icon: 'CheckCircle', title: 'Lumber and drywall', desc: 'Banded lumber, panels, drywall and sheet goods delivered to the floor.' },
  { icon: 'CheckCircle', title: 'Roofing and steel', desc: 'Roofing material, structural steel and fabricated components.' },
  { icon: 'CheckCircle', title: 'Windows and doors', desc: 'Fragile and awkward units that need careful placement, not a drop.' },
  { icon: 'CheckCircle', title: 'Brick, precast and interlock', desc: 'Heavy landscape and masonry product, including precast and HVAC equipment.' },
];

export default function ConstructionMaterialDeliveryPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="CONSTRUCTION MATERIAL DELIVERY"
      titleLine1="ON SITE."
      titleAccent="ON SCHEDULE."
      description="Few delays cost a job site more than materials that do not show up. We haul building materials on the timelines job sites actually run on — and with a Moffett on the truck, deliver them where they are needed rather than the nearest accessible point."
      heroImage="/images/truck-loaded.webp"
      heroAlt="Building materials loaded for site delivery"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '0', label: 'Site equipment needed' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '7', label: 'Days a week' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Built for job sites',
        desc: 'Job sites rarely offer a loading dock or a forklift standing by. Our flatbed and Moffett equipment handles that directly.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/heavy_haul_truck.webp', alt: 'Material delivery on route', span: 'main' },
        { src: '/images/truck-dock.webp', alt: 'Unloading building material' },
        { src: '/images/gallery-3.webp', alt: 'Flatbed fleet' },
      ]}
      darkSection={{
        num: '02',
        label: 'What we deliver',
        title: 'Material we handle',
        desc: 'Commercial job sites and residential projects alike — if it goes into a build, we have hauled it.',
        items: materials,
      }}
      cta={{
        titleLine1: 'KEEP YOUR',
        titleAccent: 'SITE MOVING.',
        desc: 'Send us the site address, the material and the window. We will get it there and place it where the crew needs it.',
      }}
    />
  );
}
