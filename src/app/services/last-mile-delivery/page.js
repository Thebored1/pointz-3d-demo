import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: { absolute: 'Last Mile Delivery GTA & Ontario | Point Zero Road Lines' },
  description: 'Final-leg delivery to construction sites, retail locations, and residential addresses across the GTA & Ontario. Get a free quote.',
  alternates: {
    canonical: '/services/last-mile-delivery',
    languages: {
      'en-CA': '/services/last-mile-delivery',
      'en-US': '/services/last-mile-delivery',
      'x-default': '/services/last-mile-delivery',
    },
  },
  openGraph: {
    title: 'Last Mile Delivery GTA & Ontario | Point Zero Road Lines',
    description: 'Final-leg delivery to construction sites, retail locations, and residential addresses across the GTA & Ontario. Get a free quote.',
    url: '/services/last-mile-delivery',
    siteName: 'Point Zero Road Lines',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Mile Delivery GTA & Ontario | Point Zero Road Lines',
    description: 'Final-leg delivery to construction sites, retail locations, and residential addresses across Ontario.',
  },
};

const capabilities = [
  { icon: 'Forklift', title: 'Truck-Mounted Moffett Offload', desc: 'Direct offloading on gravel, pavement, or dirt with all-terrain forklifts — zero receiver equipment needed.' },
  { icon: 'Route', title: 'Restricted-Access Maneuvering', desc: 'Equipment configured to navigate tight urban corridors, suburban residential subdivisions, and restricted construction gates.' },
  { icon: 'Package', title: 'Point-of-Use Placement', desc: 'Freight spotted inside garage bays, staging pads, or job-site perimeters rather than dumped at the curb.' },
  { icon: 'Clock', title: 'Appointment & ETA Precision', desc: 'Precise delivery windows, call-ahead driver contact, and real-time dispatch updates for receiving crews.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Residential Building Supplies', desc: 'Delivery of decking packages, fencing, sod, interlock pavers, and turf directly onto homeowner driveways.' },
  { icon: 'CheckCircle', title: 'Retail Fixtures & Store Displays', desc: 'Scheduled mall and retail plaza store deliveries with inside placement and liftgate support.' },
  { icon: 'CheckCircle', title: 'Subdivisions & Townhouse Sites', desc: 'Navigating active, high-density residential construction sites without blocking other trade vehicles.' },
  { icon: 'CheckCircle', title: 'Commercial HVAC & Mechanicals', desc: 'Large crated rooftop units and mechanical skids placed safely on grade.' },
  { icon: 'CheckCircle', title: 'Solar & Renewable Infrastructure', desc: 'Pallets of solar panels, racking systems, and inverters delivered to rural or commercial installation sites.' },
  { icon: 'CheckCircle', title: 'Architectural Windows & Doors', desc: 'Careful transport and placement of high-value crated fenestration packages.' },
];

export default function LastMileDeliveryPage() {
  return (
    <ServiceEditorialPage
      relatedKey="last-mile-delivery"
      badge="SERVICES · LAST MILE"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="LAST MILE FREIGHT DELIVERY."
      titleAccent="SOLVING THE HARDEST LEG OF THE JOURNEY."
      description="The final mile is where most supply chain breakdowns happen — tight residential streets, narrow job-site access, absence of unloading equipment, and strict delivery appointment windows. Point Zero Road Lines operates Moffett-equipped flatbeds, straight trucks, and liftgates designed specifically to master the last mile."
      heroImage="/images/moffett-yard-rear.webp"
      heroAlt="Point Zero Road Lines last mile delivery truck ready for dispatch"
      stats={[
        { value: 'Final-Leg', label: 'Specialized Delivery' },
        { value: 'Moffett', label: 'All-Terrain Offload' },
        { value: 'Direct', label: 'Point-of-Use Placement' },
        { value: '24/7', label: 'Dispatch Tracking' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Mastering the complexities of final-mile freight',
        desc: 'Whether dropping building supplies at a new subdivision or delivering equipment to a busy commercial retail plaza, our drivers and Moffett forklifts handle every obstacle.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/moffett-unloading-forklift.webp', alt: 'Moffett forklift offloading freight', span: 'main' },
        { src: '/images/warehouse-crossdock-docks.webp', alt: 'Pre-staged cross-dock freight' },
        { src: '/images/moffett-construction-unload.webp', alt: 'Precision drop at job site' },
      ]}
      darkSection={{
        num: '02',
        label: 'Delivery Types',
        title: 'Final-mile freight we handle across Ontario',
        desc: 'From residential homeowner deliveries to commercial job sites and retail store rollouts.',
        items: applications,
      }}
      cta={{
        titleLine1: 'NEED A CARRIER TO MASTER',
        titleAccent: 'YOUR FINAL-MILE DELIVERIES?',
        desc: 'Talk to our dispatch team about route programs, Moffett deliveries, and residential delivery coordination.',
      }}
    />
  );
}
