import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Manufacturing & Retail Freight GTA | Point Zero Road Lines',
  description: 'LTL and FTL freight for manufacturers, distributors, and retailers across the GTA & Ontario, planned around your production schedule.',
};

const capabilities = [
  { icon: 'Factory', title: 'Just-In-Time (JIT) Plant Delivery', desc: 'Raw material replenishment, packaging, and parts delivered precisely to match production shift windows.' },
  { icon: 'Route', title: 'Distribution Centre Linehauls', desc: 'Scheduled full-truckload transfers connecting manufacturing plants to tier-1 retail DCs across Ontario.' },
  { icon: 'Warehouse', title: 'Mississauga Buffer Staging', desc: 'Pre-stage finished goods and overflow stock at our 1566 Bonhill facility for rapid on-demand dispatch.' },
  { icon: 'Truck', title: 'Multi-Trailer Versatility', desc: 'Dry vans for palletized CPG freight and flatbeds for heavy machinery, structural components, and tooling.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Automotive Parts & Assemblies', desc: 'Time-critical plant runs feeding Tier-1 and Tier-2 automotive manufacturing corridors in Ontario.' },
  { icon: 'CheckCircle', title: 'Packaging Materials & Cartons', desc: 'High-cube dry van freight hauling corrugated cartons, film, bottles, and commercial packaging.' },
  { icon: 'CheckCircle', title: 'Industrial Machinery & Tooling', desc: 'Open-deck and roll-tite flatbed hauling for heavy production machinery and equipment.' },
  { icon: 'CheckCircle', title: 'Consumer Packaged Goods (CPG)', desc: 'Consistent palletized freight delivery to retail distribution hubs and fulfillment centres.' },
  { icon: 'CheckCircle', title: 'Plastics, Resins & Metal Goods', desc: 'Safe transport of raw raw materials and finished fabrications between plants and processors.' },
  { icon: 'CheckCircle', title: 'Cross-Border Supply Chain Lanes', desc: 'Seamless transport connecting Ontario industrial hubs to Great Lakes manufacturing corridors.' },
];

export default function ManufacturingConsumerGoodsFreightPage() {
  return (
    <ServiceEditorialPage
      relatedKey="manufacturing-consumer-goods-freight"
      badge="SERVICES · MANUFACTURING & CPG"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="MANUFACTURING & CONSUMER GOODS."
      titleAccent="CAPACITY THAT KEEPS PRODUCTION MOVING."
      description="Ontario manufacturers and CPG brands cannot afford production halts or delayed retail distribution. Point Zero Road Lines delivers dedicated Full Truckload (FTL) and scheduled Less-Than-Truckload (LTL) capacity, raw material plant deliveries, and warehouse cross-dock support."
      heroImage="/images/warehouse-crossdock-facility.webp"
      heroAlt="Point Zero Road Lines modern logistics facility"
      stats={[
        { value: 'FTL & LTL', label: 'Flexible Capacity' },
        { value: '2006', label: 'Operating Since' },
        { value: '24/7', label: 'Production Dispatch' },
        { value: 'ON & Cross-Border', label: 'Lanes Covered' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Built for the rhythm of modern manufacturing',
        desc: 'Production lines wait for no one. We provide dedicated tractors, dry vans, flatbeds, and 24/7 dispatchers who communicate in real time so your plant never stalls.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/warehouse-crossdock-docks.webp', alt: 'Warehouse loading docks', span: 'main' },
        { src: '/images/warehouse-crossdock-fleet1.webp', alt: 'Stationed freight trucks' },
        { src: '/images/flatbed-construction-haul.webp', alt: 'Heavy freight transport' },
      ]}
      darkSection={{
        num: '02',
        label: 'Freight Categories',
        title: 'Manufactured goods we transport daily',
        desc: 'From high-volume packaging and automotive parts to heavy machinery and consumer products.',
        items: applications,
      }}
      cta={{
        titleLine1: 'NEED DEDICATED CAPACITY FOR',
        titleAccent: 'YOUR PRODUCTION SCHEDULE?',
        desc: 'Talk to our dispatch team about recurring plant lanes, JIT delivery, and warehouse staging options.',
      }}
    />
  );
}
