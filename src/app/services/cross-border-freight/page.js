import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Globe', title: 'Ontario to the U.S.', desc: 'Southbound and northbound runs for supply chains that cross the border.' },
  { icon: 'Shield', title: 'Our own authority', desc: 'A registered carrier operating under USDOT and MC authority.' },
  { icon: 'Truck', title: 'Any equipment type', desc: 'Flatbed, Moffett-equipped and dry van capacity on cross-border lanes.' },
  { icon: 'Navigation', title: 'Tracked end to end', desc: 'Live location on both sides of the border, not just to the crossing.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Bonded and insured', desc: 'Coverage in place to move freight across Canada and into the United States.' },
  { icon: 'CheckCircle', title: 'Manufacturing supply chains', desc: 'Plant and distribution freight that does not stop at the border.' },
  { icon: 'CheckCircle', title: 'Building material', desc: 'Construction and building product moving between the two markets.' },
  { icon: 'CheckCircle', title: 'One carrier, both legs', desc: 'The domestic leg and the cross-border leg handled by the same operation.' },
];

export default function CrossBorderFreightPage() {
  return (
    <ServiceEditorialPage
      relatedKey="cross-border-freight"
      badge="SERVICES"
      badgeAlt="CROSS-BORDER FREIGHT"
      titleLine1="ONTARIO."
      titleAccent="AND BEYOND."
      description="For clients whose supply chains extend past Canada, we run cross-border freight between Ontario and the United States as a bonded, insured carrier operating under our own USDOT and MC authority."
      heroImage="/images/network.webp"
      heroAlt="Cross-border freight network"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: 'USDOT', label: 'and MC authority' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '2', label: 'Countries served' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Across the border',
        desc: 'The same equipment and the same dispatch team that run our Ontario lanes, carrying on into the United States.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/heavy_haul_truck.webp', alt: 'Long haul on the highway', span: 'main' },
        { src: '/images/fleet-1.webp', alt: 'Fleet on route' },
        { src: '/images/truck-side.webp', alt: 'Trailer profile' },
      ]}
      darkSection={{
        num: '02',
        label: 'What moves',
        title: 'Freight that crosses',
        desc: 'Cross-border capacity available across our service lines, not as a separate arrangement.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'SHIPPING',
        titleAccent: 'ACROSS THE LINE?',
        desc: 'Send us the origin, destination and commodity. We will quote the whole move, both sides of the border.',
      }}
    />
  );
}
