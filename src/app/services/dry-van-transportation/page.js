import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Dry Van Transportation in Ontario | Point Zero Road Lines',
  description: 'Clean, enclosed 53ft dry van transportation across Ontario and cross-border. FTL & scheduled LTL freight with 24/7 dispatch and real-time tracking.',
};

const capabilities = [
  { icon: 'Package', title: 'Enclosed & Weather-Tight', desc: 'Freight protected from weather, moisture, and road spray from pickup to delivery.' },
  { icon: 'Layers', title: 'FTL & Scheduled LTL', desc: 'Full truckloads, or scheduled space when your shipment does not fill a 53ft trailer.' },
  { icon: 'Route', title: 'Scheduled Plant Runs', desc: 'Recurring plant, warehouse, and retail distribution centre routes.' },
  { icon: 'Navigation', title: 'Real-Time Telematics', desc: 'Live GPS tracking and milestone notifications from departure to touchdown.' },
];

const freight = [
  { icon: 'CheckCircle', title: 'Palletized Goods', desc: 'Standard skids moving between manufacturing plants, warehouses, and distribution points.' },
  { icon: 'CheckCircle', title: 'Consumer Packaged Goods', desc: 'Packaged product bound for tier-1 retail distribution and store networks.' },
  { icon: 'CheckCircle', title: 'Healthcare Textiles & Linen', desc: 'Clean, sanitized enclosed transport for hygiene-sensitive freight and laundry carts.' },
  { icon: 'CheckCircle', title: 'General Commercial Freight', desc: 'Secure, temperature-neutral cargo moving across the GTA and Southern Ontario.' },
];

export default function DryVanTransportationPage() {
  return (
    <ServiceEditorialPage
      relatedKey="dry-van-transportation"
      badge="SERVICES · DRY VAN"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="ENCLOSED."
      titleAccent="ON SCHEDULE."
      description="Dry van capacity for palletized and general freight that needs to arrive clean, secure, and on time — full truckload or scheduled LTL, across the GTA and Southern Ontario."
      heroImage="/images/dedicated-fleet-rows.webp"
      heroAlt="Point Zero Road Lines dry van transport fleet"
      stats={[
        { value: '2006', label: 'Operating Since' },
        { value: '53ft', label: 'High-Cube Dry Vans' },
        { value: '24/7', label: 'Live Dispatch' },
        { value: 'GTA & ON', label: 'Core Coverage' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What dry van freight covers',
        desc: 'Clean 53ft air-ride trailers running daily lanes across Ontario, backed by 24/7 dispatchers in Mississauga.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/dedicated-fleet-highway.webp', alt: 'Dry van on highway', span: 'main' },
        { src: '/images/warehouse-crossdock-facility.webp', alt: 'Warehouse cross-dock facility' },
        { src: '/images/dedicated-fleet-terminal.webp', alt: 'Terminal yard' },
      ]}
      darkSection={{
        num: '02',
        label: 'What We Carry',
        title: 'Freight suited for enclosed transport',
        desc: 'When cargo does not require flatbed or Moffett equipment, it moves in our dry vans with the same rigorous schedule discipline.',
        items: freight,
      }}
      cta={{
        titleLine1: 'NEED ENCLOSED DRY VAN',
        titleAccent: 'CAPACITY?',
        desc: 'Tell us the lane, weight, and volume. We will quote full truckload or LTL with fast same-day response.',
      }}
    />
  );
}
