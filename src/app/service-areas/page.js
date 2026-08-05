import ServiceEditorialPage from '../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Freight & Trucking Service Areas | GTA & Southern Ontario',
  description: 'Point Zero Road Lines serves Mississauga, Brampton, Toronto, Vaughan, Caledon, Burlington & across Southern Ontario, with cross-border trucking to the U.S.',
};

const serviceRegions = [
  { icon: 'MapPin', title: 'Greater Toronto Area (GTA)', desc: 'Mississauga (HQ), Brampton, Bolton, Toronto, Vaughan, Markham, Oakville, Burlington, and Milton. Daily Moffett delivery, dedicated fleet loops, and cross-docking.' },
  { icon: 'Route', title: 'Golden Horseshoe & SW Ontario', desc: 'Hamilton, Kitchener-Waterloo, Cambridge, Guelph, Brantford, London, and Windsor. Manufacturing JIT supply, automotive corridors, and building supplies.' },
  { icon: 'Navigation', title: 'Eastern Ontario & Ottawa', desc: 'Oshawa, Belleville, Kingston, Cornwall, and Ottawa. Dedicated linehauls, retail distribution, and scheduled commercial linen routes.' },
  { icon: 'Globe', title: 'Cross-Border USA Freight', desc: 'USDOT 3983391 · MC 1492151 authority connecting Ontario manufacturing hubs to Michigan, New York, Ohio, and Pennsylvania.' },
];

const corridorDetails = [
  { icon: 'CheckCircle', title: 'Mississauga Hub & Terminal', desc: 'Located at 1566 Bonhill Road with immediate access to Highways 401, 410, 407, and 427 for rapid GTA dispatch.' },
  { icon: 'CheckCircle', title: '401 Industrial Corridor', desc: 'Daily linehauls moving freight between Windsor, London, Kitchener-Waterloo, Toronto, and Montreal connector routes.' },
  { icon: 'CheckCircle', title: 'QEW / Niagara Corridor', desc: 'Heavy flatbed, Moffett, and dedicated freight serving Hamilton, Niagara Peninsula, and Buffalo border crossings.' },
  { icon: 'CheckCircle', title: 'Hwy 400 Northern Gateway', desc: 'Hauling construction materials, trusses, and equipment north through Barrie, Orillia, and cottage country.' },
  { icon: 'CheckCircle', title: 'Hwy 417 Ottawa Capital Route', desc: 'Consistent scheduled freight runs connecting GTA manufacturing and distribution to Eastern Ontario.' },
  { icon: 'CheckCircle', title: 'Customs & Border Crossings', desc: 'Seamless operations through Detroit-Windsor (Ambassador/Gordie Howe), Port Huron-Sarnia, and Buffalo-Fort Erie.' },
];

export default function ServiceAreasPage() {
  return (
    <ServiceEditorialPage
      relatedKey="service-areas"
      badge="SERVICE REGIONS"
      badgeAlt="ONTARIO & CROSS-BORDER"
      titleLine1="CORE FREIGHT CORRIDORS"
      titleAccent="AND SERVICE AREAS."
      description="From our central headquarters terminal at 1566 Bonhill Road, Mississauga, Point Zero Road Lines delivers freight across the Greater Toronto Area, Southwestern Ontario, Eastern Ontario, and registered cross-border corridors into the United States."
      heroImage="/images/dedicated-fleet-highway.webp"
      heroAlt="Point Zero Road Lines truck operating across Ontario freight corridors"
      stats={[
        { value: 'GTA HQ', label: '1566 Bonhill Rd, Mississauga' },
        { value: 'All ON', label: 'Southern & Eastern Ontario' },
        { value: 'Cross-Border', label: 'USDOT 3983391 · MC 1492151' },
        { value: '24/7', label: 'Continuous Dispatch' },
      ]}
      primarySection={{
        num: '01',
        label: 'Primary Coverage',
        title: 'Where we operate daily',
        desc: 'Our fleet moves freight throughout the most vital manufacturing, commercial, and construction corridors across Ontario and the Great Lakes region.',
        columns: 4,
        items: serviceRegions,
      }}
      gallery={[
        { src: '/images/about-fleet-lineup.webp', alt: 'Fleet ready for regional dispatch', span: 'main' },
        { src: '/images/moffett-yard-front.webp', alt: 'Moffett flatbed preparing for trip' },
        { src: '/images/warehouse-crossdock-docks.webp', alt: 'Mississauga central freight terminal' },
      ]}
      darkSection={{
        num: '02',
        label: 'Transport Corridors',
        title: 'Key highway routes we navigate daily',
        desc: 'Direct routes designed to minimize transit time and optimize delivery windows.',
        items: corridorDetails,
      }}
      cta={{
        titleLine1: 'HAVE FREIGHT MOVING',
        titleAccent: 'IN THESE CORRIDORS?',
        desc: 'Contact our dispatch desk for lane rates, dedicated fleet options, and same-day availability.',
      }}
    />
  );
}
