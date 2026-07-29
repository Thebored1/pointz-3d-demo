"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Navigation', title: 'Moffett piggyback', desc: 'Truck-mounted forklifts for curbside and job-site offloads with zero dock.' },
  { icon: 'Package', title: 'Linen specialty', desc: 'Dedicated equipment for linen freight in the sizes and configs you need.' },
  { icon: 'Truck', title: 'Open deck', desc: 'Flatbed and step-deck for steel, lumber, machinery and oversized pieces.' },
  { icon: 'Wrench', title: 'Custom setups', desc: 'Tarps, chains and configurations built around the load — not the other way around.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Dock-free delivery', desc: 'Moffett / piggyback for sites with no dock access.' },
  { icon: 'CheckCircle', title: 'Linen industry', desc: 'Dedicated linen configurations with the same care as steel and machinery.' },
  { icon: 'CheckCircle', title: 'Open-deck options', desc: 'Flatbed, step-deck and drop-deck for oversized freight.' },
  { icon: 'CheckCircle', title: 'Custom configs', desc: 'Tarps, chains and setups built around your load on request.' },
];

export default function SpecialtyEquipmentPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="SPECIALTY EQUIPMENT"
      titleLine1="THE ODD LOADS."
      titleAccent="HANDLED."
      description="Moffett piggyback, linen equipment and custom configs for freight that doesn't fit a standard dry van — secured, tarped and delivered to the exact drop."
      heroImage="/images/services-hero.webp"
      heroAlt="Specialty equipment"
      stats={[
        { value: 'MOFFETT', label: 'Piggyback ready' },
        { value: 'LINEN', label: 'Industry gear' },
        { value: 'CUSTOM', label: 'Configs on request' },
        { value: 'GTA+', label: 'Ontario coverage' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What we run',
        desc: 'From truck-mounted forklifts to linen and custom hauling setups — we run the gear others leave in the yard.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/fleet-1.webp', alt: 'Point Zero fleet', span: 'main' },
        { src: '/images/gallery-2.webp', alt: 'Flatbed with forklift', objectPosition: 'left' },
        { src: '/images/gallery-3.webp', alt: 'Fleet lineup' },
      ]}
      darkSection={{
        num: '02',
        label: 'Spec sheet',
        title: 'Equipment that fits the job',
        desc: 'Every odd load gets the right iron, the right securement and a dispatcher who owns it end to end.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'GOT AN',
        titleAccent: 'ODD LOAD?',
        desc: "Send the dimensions and site details. We'll match the right equipment.",
      }}
    />
  );
}
