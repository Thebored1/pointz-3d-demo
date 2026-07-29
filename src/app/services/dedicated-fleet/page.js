"use client";
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function DedicatedFleetPage() {
  return (
    <ServiceDetailPage
      badge="DEDICATED FLEET"
      badgeAlt="YOUR LANES · YOUR TEAM"
      title="YOUR FREIGHT,"
      titleAccent="YOUR DRIVERS."
      description="Company-owned trucks and vetted drivers assigned to your lanes for consistent, accountable service. Same team, same equipment, every run."
      heroImage="/images/fleet.webp"
      heroAlt="Point Zero dedicated fleet"
      highlights={[
        'Dedicated trucks and drivers assigned to your account',
        'Consistent lanes across the GTA and Ontario',
        'Direct dispatcher ownership — no call-center runaround',
        'Company fleet maintained to CVOR-excellent standards',
      ]}
      gallery={[
        { src: '/images/gallery-3.webp', alt: 'Dedicated fleet lineup' },
        { src: '/images/fleet-1.webp', alt: 'Truck on the road' },
        { src: '/images/driver-cabin.webp', alt: 'Driver cabin' },
      ]}
      ctaTitle="NEED A DEDICATED"
      ctaAccent="LANE?"
      ctaDesc="Share your volume and lanes. We'll build a dedicated plan around your freight."
    />
  );
}
