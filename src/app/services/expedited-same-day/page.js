import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Expedited & Same-Day Freight in Ontario | Point Zero Road Lines',
  description: 'Emergency hot shot and same-day freight delivery across the GTA and Ontario. Immediate truck dispatch, live tracking, and direct door-to-door transit.',
};

const capabilities = [
  { icon: 'Timer', title: 'Direct-Drive Dedicated Transit', desc: 'Your freight is the sole cargo on the truck — zero terminal stops, zero consolidation delays, direct door-to-door transit.' },
  { icon: 'Truck', title: 'Rapid Equipment Mobilization', desc: 'Tractors, dry vans, flatbeds, or Moffett units dispatched from our Mississauga yard within minutes of call.' },
  { icon: 'Clock', title: '24/7 Live Emergency Dispatch', desc: 'Direct connection to experienced dispatchers nights, weekends, and holidays — never an automated answering service.' },
  { icon: 'Navigation', title: 'Real-Time Milestones & GPS', desc: 'Live truck tracking, automatic departure alerts, and immediate digital Proof of Delivery (POD) upon touchdown.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Plant-Down & Production Stops', desc: 'Immediate hot shot hauling of tooling, raw materials, or critical replacement parts to restart halted plants.' },
  { icon: 'CheckCircle', title: 'Job-Site Material Shortages', desc: 'Emergency same-day delivery of trusses, steel, fasteners, or drywall preventing construction crew downtime.' },
  { icon: 'CheckCircle', title: 'Healthcare & Hospital Surges', desc: 'Urgent linen, laundry cart, and medical supply replenishment during unforeseen healthcare demand spikes.' },
  { icon: 'CheckCircle', title: 'Commercial Equipment Breakdowns', desc: 'Direct transit for heavy replacement motors, pumps, electrical gear, and mechanical components.' },
];

export default function ExpeditedSameDayPage() {
  return (
    <ServiceEditorialPage
      relatedKey="expedited-same-day"
      badge="SERVICES · EXPEDITED FREIGHT"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="EXPEDITED & SAME-DAY FREIGHT."
      titleAccent="WHEN TOMORROW IS TWENTY-FOUR HOURS TOO LATE."
      description="Production line down? Emergency job-site shortage? Urgent medical linen surge? Point Zero Road Lines provides immediate direct-drive hot shot and same-day freight transportation across the Greater Toronto Area, Golden Horseshoe, and cross-border lanes."
      heroImage="/images/flatbed-highway-ad.webp"
      heroAlt="Point Zero Road Lines expedited freight transport on highway"
      stats={[
        { value: 'Immediate', label: 'Dispatch Response' },
        { value: 'Direct', label: 'Door-to-Door Transit' },
        { value: '24/7', label: 'Live Emergency Line' },
        { value: 'Live GPS', label: 'Continuous Tracking' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Built for high-stakes, time-critical logistics',
        desc: 'When minutes mean thousands of dollars in downtime, you need a carrier with immediate wheels rolling and proactive communication from wheels-up to drop-off.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/dedicated-fleet-highway.webp', alt: 'Expedited transport truck on highway', span: 'main' },
        { src: '/images/warehouse-crossdock-fleet2.webp', alt: 'Fast yard staging' },
        { src: '/images/warehouse-crossdock-docks.webp', alt: 'Immediate dock transfers' },
      ]}
      darkSection={{
        num: '02',
        label: 'Emergency Scenarios',
        title: 'When shippers call Point Zero hot shot',
        desc: 'From industrial machinery emergencies to healthcare surges across Southern Ontario.',
        items: applications,
      }}
      cta={{
        titleLine1: 'HAVE AN URGENT FREIGHT EMERGENCY',
        titleAccent: 'RIGHT NOW?',
        desc: 'Call our 24/7 emergency dispatch line directly at (905) 291-0325 for immediate truck assignment.',
      }}
    />
  );
}
