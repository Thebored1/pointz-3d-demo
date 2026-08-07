import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Moffett & Flatbed Truck Delivery Ontario & GTA | Point Zero',
  description: 'Moffett-equipped flatbed trucking across Toronto, Mississauga & the GTA. Self-unloading delivery — no dock, no forklift required. Get a free quote.',
};

const capabilities = [
  { icon: 'Forklift', title: 'Truck-Mounted Forklift', desc: 'Moffett unit rides on the rear of the trailer and dismounts in under two minutes to unload on arrival.' },
  { icon: 'MapPin', title: 'Rough-Terrain Capability', desc: 'Navigates unpaved ground, gravel, grass, mud, and active construction surfaces with all-wheel drive stability.' },
  { icon: 'Package', title: 'Precise Point Placement', desc: 'Freight placed directly at the work area, storage pad, or installation point — not dumped at the curb.' },
  { icon: 'Clock', title: 'Zero Site Delay', desc: 'Delivery proceeds immediately without waiting for a site crane, shared forklift, or ground crew.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Lumber & Framing Packages', desc: 'Dimensional lumber, trusses, engineered wood, and plywood placed right next to framing crews.' },
  { icon: 'CheckCircle', title: 'Drywall, Sheathing & Insulation', desc: 'Weather-protected and staged at access points ready for interior trade installation.' },
  { icon: 'CheckCircle', title: 'Roofing Materials & Shingles', desc: 'Skids of shingles, underlayment, and metal roofing staged for immediate hoisting.' },
  { icon: 'CheckCircle', title: 'HVAC Units & Heavy Equipment', desc: 'Commercial RTUs, chillers, and mechanical equipment unloaded smoothly.' },
  { icon: 'CheckCircle', title: 'Brick, Block & Precast Concrete', desc: 'Heavy masonry pallets spotted directly along foundation and masonry lines.' },
  { icon: 'CheckCircle', title: 'Structural Steel, Rebar & Pipe', desc: 'Open-deck hauling secured and placed safely on cribbing at the job site.' },
];

export default function FlatbedMoffettTransportPage() {
  return (
    <ServiceEditorialPage
      relatedKey="flatbed-moffett-transport"
      badge="SERVICES · FLATBED & MOFFETT"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="TRUCK-MOUNTED MOFFETT DELIVERY."
      titleAccent="NO DOCK. NO FORKLIFT. NO PROBLEM."
      description="Point Zero Road Lines pairs 48ft and 53ft flatbeds, step decks, and roll-tite trailers with truck-mounted Moffett forklifts that ride on the rear and unload directly at the job site, yard, or residential address. No waiting for on-site equipment, no offloading delays."
      heroImage="/images/warehouse-crossdock-fleet2.webp"
      heroAlt="Point Zero Road Lines Moffett flatbed truck ready for delivery"
      stats={[
        { value: '100%', label: 'Self-Unloading Fleet' },
        { value: '2006', label: 'Operating Since' },
        { value: '24/7', label: 'Live Dispatch' },
        { value: '48-53ft', label: 'Flatbed & Step-Deck' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Why Moffett-equipped flatbed transport matters',
        desc: 'Construction sites and commercial developments need self-sufficient delivery. Our Moffetts eliminate dependency on rental machinery, site cranes, or customer labour.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/moffett-yard-rear.webp', alt: 'Moffett-equipped flatbed in logistics yard', span: 'main' },
        { src: '/images/moffett-unloading-forklift.webp', alt: 'Truck-mounted forklift unloading palletized freight on site' },
        { src: '/images/moffett-construction-unload.webp', alt: 'Point Zero Moffett delivery at construction site' },
      ]}
      darkSection={{
        num: '02',
        label: 'Where it works',
        title: 'Freight we transport and place on site',
        desc: 'From high-density residential subdivisions to active civil infrastructure projects across Ontario and cross-border lanes.',
        items: applications,
      }}
      faqSection={{
        num: '03',
        label: 'FAQ',
        title: 'Moffett delivery questions, answered',
        desc: 'The two most common questions shippers ask before their first Moffett delivery.',
        items: [
          { title: "What's the maximum weight your Moffett units can lift?", desc: 'Capacity depends on load dimensions — share your freight details when requesting a quote and we\u2019ll confirm.' },
          { title: 'Can you deliver to a site with no paved access?', desc: 'Yes — this is one of the most common reasons clients choose Moffett delivery over a standard carrier.' },
        ],
      }}
      cta={{
        titleLine1: 'HAVE A DELIVERY SITE',
        titleAccent: 'WITH NO UNLOADING GEAR?',
        desc: 'Tell us the drop point, schedule, and freight specs. We will dispatch the right flatbed and Moffett combination.',
      }}
    />
  );
}
