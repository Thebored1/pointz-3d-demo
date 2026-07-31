"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Clock', title: 'Turnaround windows', desc: 'Scheduling built around facility requirements, not general freight timing.' },
  { icon: 'Route', title: 'Repeatable routes', desc: 'Reliable runs between facilities, processing plants and distribution points.' },
  { icon: 'Shield', title: 'Hygiene-sensitive handling', desc: 'Drivers who understand the handling expectations this freight carries.' },
  { icon: 'Timer', title: 'After-hours capability', desc: 'Weekend and overnight runs when a facility cannot wait for Monday.' },
];

const segments = [
  { icon: 'CheckCircle', title: 'Scheduled deliveries', desc: 'Recurring, high-frequency runs on a fixed facility schedule.' },
  { icon: 'CheckCircle', title: 'Textile distribution', desc: 'Linen and textiles between facilities, laundries and processing plants.' },
  { icon: 'CheckCircle', title: 'Emergency deliveries', desc: 'Time-critical runs when a facility is short and cannot wait.' },
  { icon: 'CheckCircle', title: 'Moffett where required', desc: 'Truck-mounted forklift capability on sites that need it.' },
];

export default function HealthcareLogisticsPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="HEALTHCARE LOGISTICS"
      titleLine1="TIGHT WINDOWS."
      titleAccent="NO SLIPPAGE."
      description="A hospital or long-term care facility cannot wait for the next available truck. Linen and textile logistics runs on non-negotiable turnaround windows — and it is one of the industries we have built our scheduling around."
      heroImage="/images/warehouse-driver.webp"
      heroAlt="Healthcare and linen logistics"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '7', label: 'Days a week' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Built for facility schedules',
        desc: 'Because this is recurring work for us, drivers and dispatch already understand the pressure a delayed run puts on a facility — it does not get explained each time.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/fleet-1.webp', alt: 'Scheduled delivery route', span: 'main' },
        { src: '/images/truck-dock.webp', alt: 'Facility delivery' },
        { src: '/images/network.webp', alt: 'Ontario service network' },
      ]}
      darkSection={{
        num: '02',
        label: 'What we move',
        title: 'Healthcare and hospitality',
        desc: 'Hospitals, long-term care, hospitality and the commercial laundries that serve them.',
        items: segments,
      }}
      cta={{
        titleLine1: 'RUNNING A',
        titleAccent: 'TIGHT SCHEDULE?',
        desc: 'Tell us your turnaround windows. We will build the route around them rather than the other way round.',
      }}
    />
  );
}
