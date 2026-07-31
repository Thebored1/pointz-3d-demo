"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Users', title: 'Assigned crews', desc: 'The same drivers on your account long enough to know the sites and contacts.' },
  { icon: 'Truck', title: 'Assigned equipment', desc: 'Company trucks, trailers and Moffetts reserved for you — not whoever is free.' },
  { icon: 'Route', title: 'Your routes, planned in', desc: 'Volumes and service windows built into our planning up front.' },
  { icon: 'Clock', title: 'Direct dispatch', desc: 'A dispatcher and account manager who own your freight — not a call centre.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Dedicated capacity', desc: 'Your freight is the priority on the account, not one of several competing for space.' },
  { icon: 'CheckCircle', title: 'Moffett on the program', desc: 'Dedicated fleet with Moffett trucks, so site deliveries need no outside equipment.' },
  { icon: 'CheckCircle', title: 'Scales with volume', desc: 'Capacity moves with you as volumes grow or shift seasonally.' },
  { icon: 'CheckCircle', title: 'Building material runs', desc: 'Dedicated construction supply and building material delivery programs.' },
];

export default function DedicatedFleetPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="DEDICATED FLEET"
      titleLine1="YOUR LANES."
      titleAccent="YOUR TRUCKS."
      description="Spot-market trucking means your freight competes for space every time you book. A dedicated fleet removes that variable — trucks, trailers, Moffetts and drivers assigned to your business and planned around your schedule."
      heroImage="/images/fleet-hero.webp"
      heroAlt="Point Zero dedicated fleet"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '100%', label: 'Dedicated lanes' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What dedicated includes',
        desc: 'Dedicated fleet work has been the core of what we do since 2006. Same equipment, same drivers, and a dispatcher who owns the load end to end.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/gallery-3.webp', alt: 'Dedicated fleet lineup', span: 'main' },
        { src: '/images/truck-loaded.webp', alt: 'Loaded flatbed on site' },
        { src: '/images/heavy_haul_truck.webp', alt: 'Heavy haul on the road' },
      ]}
      darkSection={{
        num: '02',
        label: 'The program',
        title: 'Built for consistency',
        desc: 'Dedicated only works if the promise is real. These are the commitments on every assigned lane.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'NEED A',
        titleAccent: 'DEDICATED TEAM?',
        desc: "Tell us your lanes and volume. We'll put the right trucks, Moffetts and drivers on them.",
      }}
    />
  );
}
