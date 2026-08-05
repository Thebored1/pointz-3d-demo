import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Flatbed Transportation Services in Ontario | Point Zero Road Lines',
  description: '48ft & 53ft flatbed and step-deck transportation across Ontario. Tarping, Moffett offloading, and dedicated open-deck freight capacity.',
};

const capabilities = [
  { icon: 'Truck', title: 'Open-Deck & Step-Deck Fleet', desc: '48ft and 53ft flatbeds, step-decks, and roll-tite trailers for oversized, high-cube, and heavy industrial freight.' },
  { icon: 'Forklift', title: 'Moffett-Equipped Capability', desc: 'Flatbeds carrying truck-mounted forklifts so your freight unloads immediately upon job-site arrival.' },
  { icon: 'Shield', title: 'Certified Load Securement', desc: 'All shipments secured with heavy-duty chains, ratchet straps, corner protectors, and 8ft drop tarps.' },
  { icon: 'MapPin', title: 'Site-Ready Deliveries', desc: 'Direct delivery into active construction zones, industrial yards, and restricted access facilities.' },
];

const freight = [
  { icon: 'CheckCircle', title: 'Structural Steel & Rebar', desc: 'Beams, plates, pipe, rebar bundles, and fabricated metal on open deck.' },
  { icon: 'CheckCircle', title: 'Lumber & Building Supplies', desc: 'Framing timber, trusses, drywall, and roofing materials bound for job sites.' },
  { icon: 'CheckCircle', title: 'Heavy Machinery & Equipment', desc: 'Plant machinery, transformers, and industrial equipment requiring crane or ramp offload.' },
  { icon: 'CheckCircle', title: 'Oversized & Dimensional Freight', desc: 'Cargo requiring specialized permits, pilot vehicles, and dedicated routing.' },
];

export default function FlatbedTransportationPage() {
  return (
    <ServiceEditorialPage
      relatedKey="flatbed-transportation"
      badge="SERVICES · FLATBED"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="OPEN DECK."
      titleAccent="LOADED & SECURED RIGHT."
      description="Flatbed capacity in multiple configurations paired with truck-mounted Moffetts — allowing us to take on complex loads that standard dry van carriers cannot accommodate."
      heroImage="/images/flatbed-highway-ad.webp"
      heroAlt="Point Zero Road Lines flatbed trailer on highway"
      stats={[
        { value: '2006', label: 'Operating Since' },
        { value: '48-53ft', label: 'Deck Lengths' },
        { value: '24/7', label: 'Live Dispatch' },
        { value: 'All-Terrain', label: 'Moffett Offload' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What our flatbed fleet delivers',
        desc: 'Open-deck transport across the GTA and Southern Ontario, tailored to your exact load specifications and safety requirements.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/flatbed-construction-haul.webp', alt: 'Heavy freight transport on flatbed', span: 'main' },
        { src: '/images/flatbed-blue-transport.webp', alt: 'Commercial flatbed transport' },
        { src: '/images/moffett-yard-rear.webp', alt: 'Moffett flatbed in yard' },
      ]}
      darkSection={{
        num: '02',
        label: 'What We Haul',
        title: 'Freight engineered for open deck',
        desc: 'If it will not fit through a dry van door or needs to come off without a loading dock, it belongs on a Point Zero flatbed.',
        items: freight,
      }}
      cta={{
        titleLine1: 'GOT AN OVERSIZED OR',
        titleAccent: 'OPEN-DECK SHIPMENT?',
        desc: 'Send us the dimensions, weight, and destination. We will dispatch the right deck and securement configuration.',
      }}
    />
  );
}
