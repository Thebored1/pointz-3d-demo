import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Layers', title: 'FTL and LTL', desc: 'Full truckload runs, or shared space when the shipment does not fill a trailer.' },
  { icon: 'Factory', title: 'Production-aligned', desc: 'Scheduling planned around production runs and distribution windows.' },
  { icon: 'Package', title: 'Load consolidation', desc: 'Smaller shipments combined into full loads to control cost.' },
  { icon: 'Navigation', title: 'In-transit visibility', desc: 'Live tracking, so a plant knows where its inbound freight actually is.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Plant to warehouse', desc: 'Recurring runs between production sites and distribution centres.' },
  { icon: 'CheckCircle', title: 'Warehouse to retail', desc: 'Consumer goods moving out to distribution and retail points.' },
  { icon: 'CheckCircle', title: 'Dedicated capacity', desc: 'The same program available as a dedicated fleet where volumes justify it.' },
  { icon: 'CheckCircle', title: 'Cross-border reach', desc: 'Supply chains that extend into the United States, under our own authority.' },
];

export default function ManufacturingConsumerGoodsPage() {
  return (
    <ServiceEditorialPage
      relatedKey="manufacturing-consumer-goods"
      badge="SERVICES"
      badgeAlt="MANUFACTURING & CONSUMER GOODS"
      titleLine1="PRODUCTION"
      titleAccent="KEEPS PACE."
      description="A production schedule only holds if the freight around it does too. We move full truckload and LTL freight for manufacturers, distributors and retailers — planned around your schedule rather than ours."
      heroImage="/images/network.webp"
      heroAlt="Manufacturing and distribution freight"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: 'FTL', label: 'and LTL capacity' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Freight that fits the plan',
        desc: 'Planning starts from your schedule — route planning, consolidation where it makes sense, and visibility into where freight stands at any point.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/fleet-hero.webp', alt: 'Fleet ready for dispatch', span: 'main' },
        { src: '/images/truck-dock.webp', alt: 'Loading at the distribution centre' },
        { src: '/images/gallery-2.webp', alt: 'Yard operations' },
      ]}
      darkSection={{
        num: '02',
        label: 'Where it runs',
        title: 'Lanes we cover',
        desc: 'Manufacturers, distributors and retailers across the GTA and Southern Ontario.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'FREIGHT THAT',
        titleAccent: 'KEEPS UP?',
        desc: 'Send us your lanes and volumes. We will build capacity that moves with your production schedule.',
      }}
    />
  );
}
