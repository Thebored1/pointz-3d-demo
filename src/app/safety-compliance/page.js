"use client";
import ServiceEditorialPage from '../../components/ServiceEditorialPage';

const standards = [
  { icon: 'Shield', title: 'Regulatory compliance', desc: 'Every driver operates under Hours of Service, MTO and Highway Traffic Act requirements.' },
  { icon: 'Globe', title: 'DOT-registered carrier', desc: 'Active motor carrier under our own USDOT and MC authority, domestic and cross-border.' },
  { icon: 'CheckCircle', title: 'Bonded and insured', desc: 'Covered to move freight across Canada and into the United States.' },
  { icon: 'Wrench', title: 'Equipment standards', desc: 'Trucks, trailers, flatbeds and Moffett units on a regular inspection and service schedule.' },
];

const drivers = [
  { icon: 'CheckCircle', title: 'Verified licensing', desc: 'Valid, verified licensing for every driver on the road.' },
  { icon: 'CheckCircle', title: 'Hours of Service monitoring', desc: 'Ongoing monitoring of HOS compliance, not an annual audit.' },
  { icon: 'CheckCircle', title: 'Moffett training', desc: 'Training specific to specialized equipment, including Moffett operation.' },
  { icon: 'CheckCircle', title: 'Tracking and visibility', desc: 'Live truck location supports both safety oversight and delivery accuracy.' },
];

export default function SafetyCompliancePage() {
  return (
    <ServiceEditorialPage
      badge="SAFETY & COMPLIANCE"
      badgeAlt="EVERY LOAD, EVERY TIME"
      titleLine1="NOT A POLICY BINDER."
      titleAccent="A STANDARD."
      description="Safety is the standard every driver, dispatcher and piece of equipment is measured against before a load ever leaves the yard — because equipment failure and cut corners are the most preventable causes of delay."
      scrollLabel="SCROLL FOR STANDARDS"
      heroImage="/images/safety-vest.webp"
      heroAlt="Safety equipment and compliance"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '100%', label: 'HOS compliance' },
        { value: '24/7', label: 'Dispatch oversight' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Compliance',
        title: 'What we operate under',
        desc: 'The regulatory footing behind every load we move, in Ontario and across the border.',
        columns: 4,
        items: standards,
      }}
      gallery={[
        { src: '/images/driver-cabin.webp', alt: 'Driver in cab', span: 'main' },
        { src: '/images/truck-cab.webp', alt: 'Tractor unit' },
        { src: '/images/gallery-2.webp', alt: 'Fleet maintenance' },
      ]}
      darkSection={{
        num: '02',
        label: 'Driver standards',
        title: 'Who is behind the wheel',
        desc: 'A safety-first culture reinforced from dispatch through delivery, on every load.',
        items: drivers,
      }}
      cta={{
        titleLine1: 'QUESTIONS ON',
        titleAccent: 'COMPLIANCE?',
        desc: 'Ask us directly. We will give you a straight answer on authority, insurance and how we run our equipment.',
      }}
    />
  );
}
