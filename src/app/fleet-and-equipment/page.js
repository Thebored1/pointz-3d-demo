import ServiceEditorialPage from '../../components/ServiceEditorialPage';

export const metadata = {
  title: { absolute: 'Fleet & Equipment | Point Zero Road Lines' },
  description: "See the Moffett units, flatbeds, and dry vans behind Point Zero Road Lines' Ontario freight services.",
  alternates: {
    canonical: '/fleet-and-equipment',
    languages: {
      'en-CA': '/fleet-and-equipment',
      'en-US': '/fleet-and-equipment',
      'x-default': '/fleet-and-equipment',
    },
  },
  openGraph: {
    title: 'Fleet & Equipment | Point Zero Road Lines',
    description: "See the Moffett units, flatbeds, and dry vans behind Point Zero Road Lines' Ontario freight services.",
    url: '/fleet-and-equipment',
  },
};

const fleetSpecs = [
  { icon: 'Forklift', title: 'Truck-Mounted Moffett Forklifts', desc: 'All-wheel drive rough-terrain capability. Mounts to trailer rear in under 2 minutes to unload heavy materials independently.' },
  { icon: 'Truck', title: '36ft, 40ft, 48ft & 53ft Flatbeds and Step-Decks', desc: 'Open-deck capacity with step-deck options for tall machinery, construction framing, structural steel, and oversized loads.' },
  { icon: 'Layers', title: 'Roll-Tite & Curtain-Side Trailers', desc: 'Retractable tarp systems offering quick side-loading with 100% weather-tight protection for sensitive cargo.' },
  { icon: 'Package', title: '53ft Air-Ride Dry Vans', desc: 'Clean, high-cube enclosed trailers equipped with e-track systems for secure CPG, industrial freight, and linen carts.' },
];

const safetyStandards = [
  { icon: 'CheckCircle', title: 'In-House Preventive Maintenance', desc: 'Regular scheduled mechanical service, brake inspections, and tire maintenance at our Mississauga terminal.' },
  { icon: 'CheckCircle', title: 'Daily Pre & Post-Trip Inspections', desc: 'Rigorous electronic driver vehicle inspection reports (DVIR) completed before wheels roll.' },
  { icon: 'CheckCircle', title: 'Real-Time Telematics & GPS Tracking', desc: 'Continuous satellite positioning, speed monitoring, and engine diagnostics on every tractor.' },
  { icon: 'CheckCircle', title: 'MTO, HTA & U.S. DOT Compliance', desc: 'Strict adherence to Hours of Service, weight limits, and cross-border commercial transport standards.' },
  { icon: 'CheckCircle', title: 'Experienced Commercial Drivers', desc: 'Professional, fully licensed operators trained in Moffett safety, load securement, and job-site protocols.' },
  { icon: 'CheckCircle', title: 'Heavy-Duty Securement Gear', desc: 'Certified chains, binders, ratchet straps, corner protectors, and 8ft drop tarps standard on all flatbeds.' },
];

export default function FleetAndEquipmentPage() {
  return (
    <ServiceEditorialPage
      relatedKey="fleet-and-equipment"
      badge="FLEET & EQUIPMENT"
      badgeAlt="COMPANY-OWNED · EST. 2006"
      titleLine1="COMPANY-OWNED EQUIPMENT."
      titleAccent="BUILT FOR SPECIALIZED LOGISTICS."
      description="At Point Zero Road Lines, equipment reliability is non-negotiable. Our fleet of modern tractors, flatbeds, dry vans, and truck-mounted Moffett forklifts is company-owned and maintained to the highest safety and mechanical standards in our Mississauga facility."
      heroImage="/images/fleet-lineup.webp"
      heroAlt="Point Zero Road Lines fleet lined up"
      stats={[
        { value: '100%', label: 'Company-Owned Fleet' },
        { value: 'Moffett', label: 'All-Terrain Forklifts' },
        { value: '36-53ft', label: 'Flatbed & Step-Deck' },
        { value: '24/7', label: 'Fleet Dispatch' },
      ]}
      primarySection={{
        num: '01',
        label: 'Equipment Inventory',
        title: 'Modern equipment configured for performance',
        desc: 'Every piece of machinery in our fleet is selected for versatility, driver safety, and cargo protection across Ontario highways and active job sites.',
        columns: 4,
        items: fleetSpecs,
      }}
      gallery={[
        { src: '/images/moffett-yard-rear.webp', alt: 'Moffett mounted on flatbed', span: 'main' },
        { src: '/images/flatbed-highway-ad.webp', alt: 'Flatbed in transit' },
        { src: '/images/warehouse-crossdock-facility.webp', alt: 'Mississauga fleet facility' },
      ]}
      darkSection={{
        num: '02',
        label: 'Safety & Compliance',
        title: 'Maintenance and inspection protocols',
        desc: 'Our commitment to zero downtime begins with rigorous preventative maintenance and strict regulatory compliance.',
        items: safetyStandards,
      }}
      cta={{
        titleLine1: 'NEED SPECIALIZED EQUIPMENT',
        titleAccent: 'FOR YOUR NEXT SHIPMENT?',
        desc: 'Contact our dispatch team to match the exact tractor, trailer, and Moffett forklift configuration to your freight.',
      }}
    />
  );
}
