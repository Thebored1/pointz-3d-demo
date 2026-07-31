import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Warehouse', title: 'Warehouse storage', desc: 'Secure, centrally located GTA space for freight that needs to sit longer.' },
  { icon: 'Layers', title: 'Cross-dock transfers', desc: 'Inbound to outbound with minimal handling and minimal dwell time.' },
  { icon: 'BarChart3', title: 'Inventory management', desc: 'Know what is on the floor and what is moving out, without a separate vendor.' },
  { icon: 'Forklift', title: 'Moffett distribution', desc: 'Freight leaves the dock on a truck that can unload itself at the other end.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'One operation', desc: 'Storage and transport planned together — no waiting on a third party to confirm a slot.' },
  { icon: 'CheckCircle', title: 'Freight consolidation', desc: 'Multiple smaller shipments combined into full loads to control cost.' },
  { icon: 'CheckCircle', title: 'Short-term staging', desc: 'Flexible staging for consolidation or route timing between legs.' },
  { icon: 'CheckCircle', title: 'Last mile handoff', desc: 'Stored freight going straight onto a last mile or site delivery run.' },
];

export default function WarehouseCrossDockPage() {
  return (
    <ServiceEditorialPage
      relatedKey="warehouse-cross-dock"
      badge="SERVICES"
      badgeAlt="WAREHOUSE & CROSS-DOCK"
      titleLine1="STAGED HERE."
      titleAccent="MOVED FAST."
      description="Coordinating a separate storage vendor between transportation legs adds a hand-off, and every hand-off is a place a schedule slips. Our warehouse and cross-dock space sits under the same operation as our trucks."
      heroImage="/images/warehouse-driver.webp"
      heroAlt="Warehouse and cross-dock operations"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '3', label: 'Ontario hubs' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '1', label: 'Partner, not two' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What the space does',
        desc: 'Cross-dock moves freight through with minimal handling; warehousing covers it when freight needs to sit. Both are coordinated internally.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/truck-dock.webp', alt: 'Cross-dock transfer', span: 'main' },
        { src: '/images/network.webp', alt: 'Ontario distribution network' },
        { src: '/images/gallery-2.webp', alt: 'Yard operations' },
      ]}
      darkSection={{
        num: '02',
        label: 'Why it matters',
        title: 'Fewer hand-offs, fewer delays',
        desc: 'Storage under the same roof as transportation means one plan instead of two calendars trying to sync.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'NEED A',
        titleAccent: 'STAGING POINT?',
        desc: 'Tell us the volume and how long it needs to sit. We will handle the storage and the legs either side of it.',
      }}
    />
  );
}
