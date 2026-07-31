"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Forklift', title: 'Truck-mounted forklift', desc: 'The Moffett rides on the back of the trailer and comes off at the delivery point.' },
  { icon: 'MapPin', title: 'No dock required', desc: 'Construction site, commercial address or residential street — we bring the equipment.' },
  { icon: 'Package', title: 'Placed, not dropped', desc: 'Material lands close to the work area instead of at the nearest accessible curb.' },
  { icon: 'Clock', title: 'No waiting on site', desc: 'Nobody stands around for a forklift that was booked by someone else.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Building materials', desc: 'Lumber, drywall, roofing, windows, doors and steel delivered to the site.' },
  { icon: 'CheckCircle', title: 'White glove placement', desc: 'Material set exactly where the crew needs it, not left at the property line.' },
  { icon: 'CheckCircle', title: 'Residential delivery', desc: 'Driveways and narrow residential access where a dry van cannot unload.' },
  { icon: 'CheckCircle', title: 'Palletized freight', desc: 'Any palletized load headed somewhere without unloading equipment.' },
];

export default function MoffettDeliveryPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="MOFFETT DELIVERY"
      titleLine1="NO DOCK."
      titleAccent="NO PROBLEM."
      description="Our truck-mounted Moffett forklifts travel with the load and unload on arrival — so freight reaches construction sites, commercial projects and residential addresses that have no loading dock and no forklift waiting."
      heroImage="/images/heavy_haul_truck.webp"
      heroAlt="Moffett-equipped flatbed on site"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '0', label: 'Site equipment needed' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Why Moffett delivery matters',
        desc: 'Construction sites and commercial projects need more than transportation — they need precision. A Moffett turns a delivery that would stall into one that unloads itself.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/truck-loaded.webp', alt: 'Loaded flatbed ready for site delivery', span: 'main' },
        { src: '/images/gallery-3.webp', alt: 'Moffett-equipped fleet' },
        { src: '/images/truck-dock.webp', alt: 'Unloading on site' },
      ]}
      darkSection={{
        num: '02',
        label: 'Where it works',
        title: 'What we place on site',
        desc: 'Investing in truck-mounted forklifts is what lets us reduce unloading delays, cut labour requirements and keep projects moving.',
        items: applications,
      }}
      cta={{
        titleLine1: 'FREIGHT WITH',
        titleAccent: 'NOWHERE TO LAND?',
        desc: 'Tell us the site and the load. If there is no dock and no forklift, that is exactly what we built this fleet for.',
      }}
    />
  );
}
