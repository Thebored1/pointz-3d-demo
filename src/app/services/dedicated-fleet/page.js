"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Users', title: 'Assigned crews', desc: 'Vetted drivers locked to your account so every run feels familiar.' },
  { icon: 'Truck', title: 'Company equipment', desc: 'Maintained flatbeds and Moffetts — not whoever shows up from a board.' },
  { icon: 'Route', title: 'Fixed lanes', desc: 'Repeat GTA and Ontario corridors with capacity you can plan around.' },
  { icon: 'Clock', title: '24/7 ownership', desc: 'One dispatcher stays on your freight from quote to delivery.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Assigned assets', desc: 'Company trucks and drivers reserved for your lanes.' },
  { icon: 'CheckCircle', title: 'Predictable capacity', desc: 'Stable lanes with capacity you can plan around.' },
  { icon: 'CheckCircle', title: 'Direct dispatch', desc: 'One desk owns the account from quote through delivery.' },
  { icon: 'CheckCircle', title: 'Flexible equipment', desc: 'Flatbed, Moffett and specialty configs on the same program.' },
];

export default function DedicatedFleetPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="DEDICATED FLEET"
      titleLine1="YOUR LANES."
      titleAccent="YOUR TRUCKS."
      description="Company-owned trucks and vetted drivers assigned to your freight for consistent, accountable service across the GTA and Ontario — not a revolving door of brokers."
      heroImage="/images/fleet-hero.webp"
      heroAlt="Point Zero dedicated fleet"
      stats={[
        { value: '100%', label: 'Dedicated lanes' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
        { value: '2012', label: 'On the road' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What dedicated includes',
        desc: 'Same equipment, same drivers, and a dispatcher who owns the load end to end — not a revolving door of brokers.',
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
        desc: "Tell us your lanes and volume. We'll put the right trucks and drivers on them.",
      }}
    />
  );
}
