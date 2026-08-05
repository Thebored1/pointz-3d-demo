import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Healthcare Linen & Textile Transport Ontario | Point Zero',
  description: 'Dedicated linen and textile transport for healthcare and hospitality across the GTA & Southern Ontario, built around tight turnaround windows.',
};

const capabilities = [
  { icon: 'HeartPulse', title: 'Scheduled Turnaround Windows', desc: 'Strict adherence to daily morning and evening delivery cycles between laundry processing plants and facilities.' },
  { icon: 'Shield', title: 'Sanitary Handling Protocols', desc: 'Clean, enclosed transport trailers and strict cart handling procedures preventing cross-contamination.' },
  { icon: 'Package', title: 'Rolling Cart & Sling Gear', desc: 'Trailers equipped with e-track systems, heavy-duty load bars, and secure strapping for rolling laundry cages.' },
  { icon: 'Clock', title: '24/7 & Weekend Exchange Runs', desc: 'Continuous facility coverage seven days a week, including early morning and holiday delivery schedules.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Hospital & Acute Care Loops', desc: 'Scheduled clean and soiled linen exchanges serving medical institutions across Southern Ontario.' },
  { icon: 'CheckCircle', title: 'Long-Term Care & Senior Living', desc: 'Dependable, timed deliveries ensuring resident bedding and care textiles are always stocked.' },
  { icon: 'CheckCircle', title: 'Commercial Laundry Processing', desc: 'High-volume inter-facility hauling between processing plants and regional distribution hubs.' },
  { icon: 'CheckCircle', title: 'Hospitality & Luxury Hotels', desc: 'Bulk hotel textile rotations and scheduled guest linen replenishment across the Greater Toronto Area.' },
  { icon: 'CheckCircle', title: 'Industrial Workwear & Uniforms', desc: 'Scheduled pickup and drop routes for specialized manufacturing and trade garment processors.' },
  { icon: 'CheckCircle', title: 'Emergency Expedited Linen Drops', desc: 'Immediate hot shot runs when hospital or facility surges exceed planned linen inventory.' },
];

export default function HealthcareLinenLogisticsPage() {
  return (
    <ServiceEditorialPage
      relatedKey="healthcare-linen-logistics"
      badge="SERVICES · HEALTHCARE LINEN"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="HEALTHCARE LINEN & TEXTILE LOGISTICS."
      titleAccent="BUILT ON TIME-CRITICAL PRECISION."
      description="Hospitals, long-term care facilities, hospitality providers, and commercial laundries run on strict turnaround cycles. Point Zero Road Lines provides dedicated cart and sling transport, strict sanitary protocols, and tight schedule adherence so clean textiles are never delayed."
      heroImage="/images/dedicated-fleet-blue.webp"
      heroAlt="Point Zero Road Lines specialized healthcare textile fleet"
      stats={[
        { value: '100%', label: 'On-Time Schedule' },
        { value: 'Sanitary', label: 'Clean Transport Specs' },
        { value: '24/7', label: 'Dispatch & Weekend Runs' },
        { value: 'Dedicated', label: 'Cart Transport Gear' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Engineered for commercial laundry & healthcare operations',
        desc: 'When healthcare providers and processors need predictable exchange schedules, Point Zero provides dedicated drivers, purpose-equipped trailers, and 24/7 dispatch oversight.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/dedicated-fleet-terminal.webp', alt: 'Point Zero dedicated fleet terminal', span: 'main' },
        { src: '/images/warehouse-crossdock-staging.webp', alt: 'Clean staging area for textile carts' },
        { src: '/images/home-fleet-manager.webp', alt: 'Fleet manager overseeing logistics' },
      ]}
      darkSection={{
        num: '02',
        label: 'Sectors Served',
        title: 'Textile and linen operations we support',
        desc: 'From daily hospital rotations to commercial processing facilities across Ontario.',
        items: applications,
      }}
      cta={{
        titleLine1: 'NEED A DEPENDABLE CARRIER FOR',
        titleAccent: 'HEALTHCARE LINEN RUNS?',
        desc: 'Contact our logistics team to discuss exchange schedules, cart counts, and dedicated fleet capacity.',
      }}
    />
  );
}
