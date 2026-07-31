import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Package', title: 'Enclosed and dry', desc: 'Freight protected from weather and road spray from pickup to delivery.' },
  { icon: 'Layers', title: 'FTL and LTL', desc: 'Full loads, or shared space when the shipment does not fill a trailer.' },
  { icon: 'Route', title: 'Scheduled runs', desc: 'Recurring plant, warehouse and distribution centre routes.' },
  { icon: 'Navigation', title: 'Tracked in transit', desc: 'Live truck location, so you know where the load is without calling.' },
];

const freight = [
  { icon: 'CheckCircle', title: 'Palletized goods', desc: 'Standard skids moving between plants, warehouses and distribution points.' },
  { icon: 'CheckCircle', title: 'Consumer goods', desc: 'Packaged product bound for retail distribution and store networks.' },
  { icon: 'CheckCircle', title: 'Textiles and linen', desc: 'Enclosed transport for hygiene-sensitive and textile freight.' },
  { icon: 'CheckCircle', title: 'General freight', desc: 'Anything that needs to stay dry, secure and on schedule.' },
];

export default function DryVanTransportationPage() {
  return (
    <ServiceEditorialPage
      relatedKey="dry-van-transportation"
      badge="SERVICES"
      badgeAlt="DRY VAN TRANSPORTATION"
      titleLine1="ENCLOSED."
      titleAccent="ON SCHEDULE."
      description="Dry van capacity for palletized and general freight that needs to arrive dry, secure and on time — full truckload or shared space, across the GTA and Southern Ontario."
      heroImage="/images/fleet-1.webp"
      heroAlt="Dry van trailer on the road"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: 'FTL', label: 'and LTL capacity' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What dry van covers',
        desc: 'Enclosed trailers running the same lanes as the rest of our fleet, with the same dispatch team behind them.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/fleet-hero.webp', alt: 'Fleet lineup', span: 'main' },
        { src: '/images/truck-dock.webp', alt: 'Loading at the dock' },
        { src: '/images/truck-cab.webp', alt: 'Tractor unit' },
      ]}
      darkSection={{
        num: '02',
        label: 'What we carry',
        title: 'Freight for enclosed transport',
        desc: 'When the load does not need a Moffett or an open deck, it moves in a van — same schedule discipline either way.',
        items: freight,
      }}
      cta={{
        titleLine1: 'NEED VAN',
        titleAccent: 'CAPACITY?',
        desc: 'Tell us the lane and the volume. We will quote full truckload or LTL, whichever fits the shipment.',
      }}
    />
  );
}
