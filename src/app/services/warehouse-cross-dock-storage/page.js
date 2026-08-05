import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Cross-Dock & Warehousing Mississauga & GTA | Point Zero',
  description: 'Cross-dock, warehousing, and freight consolidation in Mississauga & the GTA — one coordinated operation, not a separate storage vendor.',
};

const capabilities = [
  { icon: 'Warehouse', title: 'Rapid Cross-Dock Transfers', desc: 'Direct inbound-to-outbound trailer transfers that eliminate storage dwell time and keep freight moving immediately.' },
  { icon: 'Package', title: 'Short & Long-Term Storage', desc: 'Secure racked and floor storage for overflow inventory, seasonal stock, and staged regional distribution.' },
  { icon: 'Layers', title: 'Freight Consolidation', desc: 'Combine LTL shipments into full truckloads or break down inbound bulk loads into local Moffett delivery runs.' },
  { icon: 'Truck', title: 'Integrated Fleet Dispatch', desc: 'Because our trucks and warehouse share the same terminal, freight transitions seamlessly onto local routes.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'GTA Freight Cross-Docking', desc: 'Trailer-to-trailer transfers for cross-border and long-haul carriers needing efficient local distribution.' },
  { icon: 'CheckCircle', title: 'Construction Material Staging', desc: 'Materials staged indoors and loaded onto Moffett flatbeds for early morning job-site drops.' },
  { icon: 'CheckCircle', title: 'Healthcare Linen Staging', desc: 'Cart staging, sorting, and turnaround management in a clean, controlled environment.' },
  { icon: 'CheckCircle', title: 'Retail & Consumer Overflow', desc: 'Buffer inventory and seasonal stock holding close to major GTA 400-series transport corridors.' },
  { icon: 'CheckCircle', title: 'Emergency Load Rework', desc: 'Re-palletizing, shrink-wrapping, and load shifting corrections for shifted or rejected freight.' },
  { icon: 'CheckCircle', title: 'LTL to FTL Consolidation', desc: 'Staging smaller vendor consignments into unified truckloads for regional delivery.' },
];

export default function WarehouseCrossDockStoragePage() {
  return (
    <ServiceEditorialPage
      relatedKey="warehouse-cross-dock-storage"
      badge="SERVICES · WAREHOUSE & CROSS-DOCK"
      badgeAlt="1566 BONHILL RD · MISSISSAUGA HQ"
      titleLine1="CENTRAL WAREHOUSE & CROSS-DOCK FACILITY."
      titleAccent="RIGHT IN THE HEART OF MISSISSAUGA."
      description="Located at 1566 Bonhill Road, Mississauga, Point Zero Road Lines provides secure, modern warehousing, cross-docking, freight consolidation, and short- or long-term pallet storage. Operating under the same roof as our trucking fleet, we eliminate transfer friction and reduce demurrage costs."
      heroImage="/images/warehouse-crossdock-docks.webp"
      heroAlt="Loading bay docks at Point Zero Road Lines cross-dock terminal"
      stats={[
        { value: '1566', label: 'Bonhill Rd, Mississauga' },
        { value: '24/7', label: 'Terminal & Dock Access' },
        { value: 'Fast', label: 'Cross-Dock Turns' },
        { value: 'Secure', label: 'Monitored Storage' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Why our Mississauga facility delivers value',
        desc: 'Centrally located with immediate access to Highways 401, 410, and 407, our terminal gives shippers and carriers the ultimate staging and cross-dock hub in the Greater Toronto Area.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/warehouse-crossdock-facility.webp', alt: 'Modern warehouse and cross-dock facility', span: 'main' },
        { src: '/images/warehouse-crossdock-staging.webp', alt: 'Staging area and cross-dock storage' },
        { src: '/images/warehouse-crossdock-fleet1.webp', alt: 'Transport trucks stationed at loading docks' },
      ]}
      darkSection={{
        num: '02',
        label: 'Services Offered',
        title: 'How shippers utilize our warehouse',
        desc: 'From high-speed cross-docking to emergency load rework and pre-staged construction deliveries.',
        items: applications,
      }}
      cta={{
        titleLine1: 'NEED DOCK SPACE OR',
        titleAccent: 'STORAGE IN MISSISSAUGA?',
        desc: 'Contact our warehouse operations team for space availability, cross-dock rates, or emergency load transfers.',
      }}
    />
  );
}
