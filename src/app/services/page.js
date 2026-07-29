"use client";
import ServiceEditorialPage from '../../components/ServiceEditorialPage';
import {
  overviewServices,
  overviewCapabilities,
  overviewStats,
  overviewGallery,
} from '../../components/serviceEditorialData';

export default function ServicesPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES · OVERVIEW"
      badgeAlt="EST. 2012 · MISSISSAUGA"
      titleLine1="BUILT FOR THE LOADS"
      titleAccent="OTHERS TURN DOWN."
      description="Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario. We handle the loads others walk away from — lean, safe and on schedule."
      scrollLabel="SCROLL THE SERVICES"
      heroImage="/images/fleet-hero.webp"
      heroAlt="Point Zero fleet"
      stats={overviewStats}
      primarySection={{
        num: '01',
        label: 'What we offer',
        title: 'Six ways we move your freight',
        desc: 'Flatbed, Moffett, cross-dock, dedicated fleet and round-the-clock dispatch — every service runs on the same standard.',
        items: overviewServices,
      }}
      gallery={overviewGallery}
      darkSection={{
        num: '02',
        label: 'Capabilities',
        title: 'Fleet at a glance',
        desc: 'From oversized flatbed loads to precision Moffett deliveries — maintained company equipment, CVOR-excellent.',
        items: overviewCapabilities.map((c) => ({
          icon: c.icon,
          title: c.label,
          desc: c.value,
        })),
      }}
      cta={{
        titleLine1: 'NEED A',
        titleAccent: 'TRUCK?',
        desc: "Tell us your lane and load. We'll get back to you with a straight answer — fast.",
      }}
    />
  );
}
