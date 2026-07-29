"use client";
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function SpecialtyEquipmentPage() {
  return (
    <ServiceDetailPage
      badge="SPECIALTY EQUIPMENT"
      badgeAlt="MOFFETT · LINEN · CUSTOM"
      title="EQUIPMENT BUILT"
      titleAccent="FOR THE ODD LOAD."
      description="Dedicated equipment for the linen industry and specialty freight in all sizes and configurations. Moffett piggyback, custom setups, and job-site delivery without a dock."
      heroImage="/images/services-hero.webp"
      heroAlt="Specialty equipment"
      highlights={[
        'Truck-mounted Moffett forklifts for curbside and job-site offloads',
        'Linen and specialty freight configurations on request',
        'Flatbed, step-deck and custom trailer setups',
        'Secured, tarped and delivered to your exact drop point',
      ]}
      gallery={[
        { src: '/images/fleet-1.webp', alt: 'Point Zero fleet' },
        { src: '/images/gallery-2.webp', alt: 'Flatbed with forklift', objectPosition: 'left' },
        { src: '/images/gallery-3.webp', alt: 'Fleet lineup' },
      ]}
      ctaTitle="NEED SPECIALTY"
      ctaAccent="GEAR?"
      ctaDesc="Tell us the load and site. We'll match the right equipment and get a quote back fast."
    />
  );
}
