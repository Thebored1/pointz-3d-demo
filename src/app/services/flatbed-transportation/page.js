import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Truck', title: 'Open-deck fleet', desc: '48ft and 53ft flatbeds, step-decks and drop-decks for oversized and overweight freight.' },
  { icon: 'Forklift', title: 'Moffett-equipped', desc: 'Flatbeds that carry their own forklift, so the load unloads itself on arrival.' },
  { icon: 'Shield', title: 'Secured and tarped', desc: 'Loads strapped, chained and tarped to spec before the truck leaves the yard.' },
  { icon: 'MapPin', title: 'Site-ready delivery', desc: 'Construction, commercial and residential drops, including tight access.' },
];

const freight = [
  { icon: 'CheckCircle', title: 'Steel and structural', desc: 'Beams, rebar, plate and fabricated steel on open deck.' },
  { icon: 'CheckCircle', title: 'Lumber and building material', desc: 'Banded lumber, panels and packaged material bound for job sites.' },
  { icon: 'CheckCircle', title: 'Machinery and equipment', desc: 'Plant equipment and machinery that will not fit a dry van.' },
  { icon: 'CheckCircle', title: 'Awkward and oversized', desc: 'Freight that is too long, too wide or shaped wrong for enclosed transport.' },
];

export default function FlatbedTransportationPage() {
  return (
    <ServiceEditorialPage
      relatedKey="flatbed-transportation"
      badge="SERVICES"
      badgeAlt="FLATBED TRANSPORTATION"
      titleLine1="OPEN DECK."
      titleAccent="LOADED RIGHT."
      description="Flatbed capacity in a range of sizes and configurations, paired with truck-mounted Moffetts — which lets us take on loads a standard dry van carrier has to turn away."
      heroImage="/images/truck-loaded.webp"
      heroAlt="Loaded flatbed trailer"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '48-53ft', label: 'Deck lengths' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'What our flatbeds do',
        desc: 'Open-deck transport across the GTA and Southern Ontario, configured for the load rather than the other way round.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/heavy_haul_truck.webp', alt: 'Flatbed on the highway', span: 'main' },
        { src: '/images/truck-side.webp', alt: 'Flatbed trailer profile' },
        { src: '/images/gallery-2.webp', alt: 'Fleet at the yard' },
      ]}
      darkSection={{
        num: '02',
        label: 'What we haul',
        title: 'Freight built for open deck',
        desc: 'If it will not fit through a dry van door or needs to come off without a dock, it belongs on a flatbed.',
        items: freight,
      }}
      cta={{
        titleLine1: 'GOT AN',
        titleAccent: 'OVERSIZED LOAD?',
        desc: 'Send the dimensions and the destination. We will tell you the right deck and how it gets secured.',
      }}
    />
  );
}
