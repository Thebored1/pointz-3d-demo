"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Timer', title: 'Same day dispatch', desc: 'A truck assigned and rolling the same day the call comes in.' },
  { icon: 'Route', title: 'Direct runs', desc: 'Straight from pickup to delivery — no consolidation, no extra stops.' },
  { icon: 'Clock', title: 'After hours and weekends', desc: 'Nights, weekends and holidays, because urgent freight does not keep office hours.' },
  { icon: 'Navigation', title: 'Live tracking', desc: 'Watch the truck move, rather than calling to ask where it is.' },
];

const scenarios = [
  { icon: 'CheckCircle', title: 'Production down', desc: 'A part or material a plant is waiting on to restart a line.' },
  { icon: 'CheckCircle', title: 'Site shortfall', desc: 'A job site short of material with a crew standing by.' },
  { icon: 'CheckCircle', title: 'Facility emergency', desc: 'Healthcare and hospitality runs that cannot wait for the next cycle.' },
  { icon: 'CheckCircle', title: 'Missed delivery recovery', desc: 'Freight another carrier failed to deliver, moved before it costs you the account.' },
];

export default function ExpeditedSameDayPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="EXPEDITED & SAME DAY"
      titleLine1="TODAY."
      titleAccent="NOT TOMORROW."
      description="A freight problem at 9 p.m. should not have to wait until 9 a.m. to get solved. Direct, time-critical runs with a dispatcher reachable after hours, on weekends and around whatever the situation turns out to be."
      heroImage="/images/heavy_haul_truck.webp"
      heroAlt="Truck dispatched for an expedited run"
      stats={[
        { value: '24/7', label: 'Dispatch coverage' },
        { value: 'Same', label: 'Day capability' },
        { value: '2006', label: 'Moving freight since' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'How urgent gets handled',
        desc: 'Dispatch can assign equipment, reroute drivers and coordinate pickups outside standard business hours without waiting for the next business day.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/fleet-hero.webp', alt: 'Fleet ready to dispatch', span: 'main' },
        { src: '/images/truck-cab-left.webp', alt: 'Tractor unit' },
        { src: '/images/gallery-3.webp', alt: 'Trucks at the yard' },
      ]}
      darkSection={{
        num: '02',
        label: 'When it is needed',
        title: 'What we get called for',
        desc: 'Expedited work runs underneath every other service line — dedicated routes, Moffett deliveries and warehouse freight alike.',
        items: scenarios,
      }}
      cta={{
        titleLine1: 'CANNOT WAIT',
        titleAccent: 'FOR MONDAY?',
        desc: 'Call dispatch. Someone picks up nights, weekends and holidays — not a voicemail box.',
      }}
    />
  );
}
