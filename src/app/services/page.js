import ServiceEditorialPage from '../../components/ServiceEditorialPage';
import {
  overviewServices,
  overviewCapabilities,
  overviewStats,
  overviewGallery,
} from '../../components/serviceEditorialData';

export const metadata = {
  title: { absolute: "Trucking, Moffett Delivery & Logistics | Point Zero Road Lines" },
  description: "Dedicated fleet, flatbed & Moffett transport, warehousing, expedited freight, and last mile delivery across the GTA & Ontario.",
  alternates: {
    canonical: "/services",
    languages: {
      'en-CA': '/services',
      'en-US': '/services',
      'x-default': '/services',
    },
  },
  openGraph: {
    title: "Trucking, Moffett Delivery & Logistics | Point Zero Road Lines",
    description: "Dedicated fleet, flatbed & Moffett transport, warehousing, expedited freight, and last mile delivery across the GTA & Ontario.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <ServiceEditorialPage
      relatedKey="services"
      badge="SERVICES · OVERVIEW"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="SPECIALIZED FREIGHT SERVICES"
      titleAccent="BUILT AROUND YOUR OPERATION."
      description="Point Zero Road Lines provides dedicated transportation, specialized flatbed and Moffett delivery, warehousing, and logistics services across the Greater Toronto Area and Ontario. Every service is backed by company-owned equipment, professional drivers, and 24/7 live dispatch."
      scrollLabel="SCROLL THE SERVICES"
      heroImage="/images/fleet-lineup.webp"
      heroAlt="Point Zero Road Lines fleet"
      stats={overviewStats}
      primarySection={{
        num: '01',
        label: 'What we offer',
        title: 'Our Specialized Service Lines',
        desc: 'From job sites with zero unloading equipment to time-sensitive manufacturing and healthcare routes, we provide dedicated capacity and specialized gear.',
        items: overviewServices,
      }}
      gallery={overviewGallery}
      darkSection={{
        num: '02',
        label: 'Capabilities',
        title: 'Fleet & Equipment at a glance',
        desc: 'Modern tractors, 36ft, 40ft, 48ft and 53ft flatbeds, roll-tite trailers, dry vans, and truck-mounted Moffett units maintained to the highest safety standards.',
        items: overviewCapabilities.map((c) => ({
          icon: c.icon,
          title: c.label,
          desc: c.value,
        })),
      }}
      cta={{
        titleLine1: 'NOT SURE WHICH',
        titleAccent: 'SERVICE FITS?',
        desc: "Tell us your lane and load. We'll help you work out which service fits — and get back to you with a straight answer and fast quote.",
      }}
    />
  );
}
