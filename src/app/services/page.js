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
      relatedKey="services"
      badge="SERVICES · OVERVIEW"
      badgeAlt="EST. 2006 · MISSISSAUGA"
      titleLine1="MOFFETT DELIVERY"
      titleAccent="AND EVERYTHING AROUND IT."
      description="Since 2006, Point Zero Road Lines has built its service line around one principle: fewer vendors, more accountability. Moffett delivery, dedicated fleet capacity, flatbed, warehousing and dispatch that runs on your clock — one operation, not contractors stitched together."
      scrollLabel="SCROLL THE SERVICES"
      heroImage="/images/services-hero.webp"
      heroAlt="Point Zero Road Lines fleet"
      stats={overviewStats}
      primarySection={{
        num: '01',
        label: 'What we offer',
        title: 'Twelve ways we move your freight',
        desc: 'Every service line runs on the same standard — and wherever a Moffett makes the delivery work better, it is already on the truck.',
        items: overviewServices,
      }}
      gallery={overviewGallery}
      darkSection={{
        num: '02',
        label: 'Capabilities',
        title: 'Fleet at a glance',
        desc: 'Modern tractors, trailers, flatbeds and truck-mounted Moffett units, maintained on a regular inspection and service schedule.',
        items: overviewCapabilities.map((c) => ({
          icon: c.icon,
          title: c.label,
          desc: c.value,
        })),
      }}
      cta={{
        titleLine1: 'NOT SURE WHICH',
        titleAccent: 'SERVICE FITS?',
        desc: "Tell us your lane and load. We'll help you work out which service fits — and get back to you with a straight answer, fast.",
      }}
    />
  );
}
