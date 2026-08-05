import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Cross-Border Canada-USA Freight | Point Zero Road Lines',
  description: 'Registered cross-border freight transportation between Ontario and the United States. USDOT 3983391 · MC 1492151. Flatbeds, Moffett units, and dry vans.',
};

const capabilities = [
  { icon: 'Globe', title: 'Ontario to U.S. Corridors', desc: 'Direct southbound and northbound linehauls connecting Ontario industrial centres with Great Lakes and Eastern US markets.' },
  { icon: 'Shield', title: 'Registered Carrier Authority', desc: 'Operating directly under our own registered authorities: USDOT 3983391 and MC 1492151.' },
  { icon: 'Truck', title: 'Full Equipment Flexibility', desc: 'Flatbeds, step-decks, Moffett-equipped trailers, and 53ft dry vans on cross-border routes.' },
  { icon: 'Navigation', title: 'Continuous Satellite Tracking', desc: 'Real-time GPS visibility across both sides of the international border.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Licensed & Commercially Insured', desc: 'Full commercial liability and cargo protection across Canada and the United States.' },
  { icon: 'CheckCircle', title: 'Manufacturing Supply Chains', desc: 'Just-in-time automotive parts and raw materials that cross borders without customs friction.' },
  { icon: 'CheckCircle', title: 'Building & Construction Products', desc: 'Lumber, structural components, and architectural products moving between cross-border markets.' },
  { icon: 'CheckCircle', title: 'Single Carrier Accountability', desc: 'Your domestic staging, customs clearance coordination, and U.S. delivery handled by one team.' },
];

export default function CrossBorderFreightPage() {
  return (
    <ServiceEditorialPage
      relatedKey="cross-border-freight"
      badge="SERVICES · CROSS-BORDER"
      badgeAlt="USDOT 3983391 · MC 1492151"
      titleLine1="CANADA & USA FREIGHT."
      titleAccent="SEAMLESS CROSS-BORDER LANES."
      description="For clients whose supply chains extend across North America, Point Zero Road Lines operates licensed, insured cross-border transportation between Ontario and the United States under our own USDOT 3983391 and MC 1492151 authorities."
      heroImage="/images/dedicated-fleet-highway.webp"
      heroAlt="Point Zero Road Lines cross-border freight carrier"
      stats={[
        { value: '2006', label: 'Operating Since' },
        { value: 'USDOT', label: '3983391 Authority' },
        { value: 'MC', label: '1492151 Authority' },
        { value: '24/7', label: 'Border Dispatch' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Cross-border transport built on reliability',
        desc: 'The same professional drivers, specialized equipment, and dedicated dispatch team that run our Ontario lanes, operating seamlessly into U.S. markets.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/flatbed-highway-ad.webp', alt: 'Cross-border freight transport', span: 'main' },
        { src: '/images/warehouse-crossdock-facility.webp', alt: 'Terminal cross-dock facility' },
        { src: '/images/flatbed-construction-haul.webp', alt: 'Heavy freight transport' },
      ]}
      darkSection={{
        num: '02',
        label: 'Industries Hauled',
        title: 'Cross-border freight categories',
        desc: 'From industrial machinery and automotive components to building materials and consumer goods.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'SHIPPING ACROSS',
        titleAccent: 'THE CANADA-U.S. BORDER?',
        desc: 'Send us the origin, destination, and commodity. We will quote the complete move with transparent, all-inclusive rates.',
      }}
    />
  );
}
