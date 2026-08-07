import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Dedicated Fleet Services in Ontario | Point Zero Road Lines',
  description: 'Dedicated trucks, trailers, and drivers assigned to your account. Predictable capacity and custom scheduling across Ontario and cross-border.',
};

const capabilities = [
  { icon: 'Users', title: 'Assigned Drivers & Equipment', desc: 'Consistent, vetted drivers and company-owned equipment assigned directly to your lanes.' },
  { icon: 'Shield', title: 'Guaranteed Capacity', desc: 'Locked-in trucks and trailers dedicated solely to your freight, eliminating spot-market volatility.' },
  { icon: 'Route', title: 'Custom Routes & Schedules', desc: 'Multi-stop daily routes and scheduled distribution planned around your operation.' },
  { icon: 'Wrench', title: 'Complete Fleet Administration', desc: 'We handle maintenance, fuel, insurance, regulatory compliance (MTO/DOT), and safety oversight.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Healthcare & Commercial Linen', desc: 'Scheduled clean/soiled linen facility loops running on precise turnaround windows.' },
  { icon: 'CheckCircle', title: 'Manufacturing & Industrial Goods', desc: 'Daily raw material replenishment and finished goods distribution.' },
  { icon: 'CheckCircle', title: 'Building Material Distribution', desc: 'Dedicated flatbeds and Moffett units staged daily at supply yards.' },
  { icon: 'CheckCircle', title: 'Retail Distribution & Restocking', desc: 'Predictable scheduled store deliveries with offloading support.' },
];

export default function DedicatedFleetPage() {
  return (
    <ServiceEditorialPage
      relatedKey="dedicated-fleet"
      badge="SERVICES · DEDICATED FLEET"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="YOUR DEDICATED FLEET."
      titleAccent="WITHOUT THE OVERHEAD OF OWNING ONE."
      description="Point Zero Road Lines assigns company-owned tractors, trailers, Moffett units, and dedicated professional drivers directly to your business. Gain predictable capacity, fixed scheduling, and custom brand representation without the capital expenditure, maintenance, or driver recruiting burden."
      heroImage="/images/dedicated-fleet-rows.webp"
      heroAlt="Point Zero Road Lines dedicated fleet lined up in parallel rows"
      stats={[
        { value: '100%', label: 'Dedicated Capacity' },
        { value: '2006', label: 'Operating Since' },
        { value: '24/7', label: 'Account Dispatch' },
        { value: 'Custom', label: 'Equipment Specs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Why a dedicated carrier program wins',
        desc: 'Private fleet benefits without private fleet headaches. We integrate seamlessly into your supply chain with dedicated drivers, branded equipment, and continuous dispatch support.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/dedicated-fleet-terminal.webp', alt: 'Point Zero dedicated carrier fleet at terminal', span: 'main' },
        { src: '/images/dedicated-fleet-highway.webp', alt: 'Dedicated transport truck on highway' },
        { src: '/images/dedicated-fleet-blue.webp', alt: 'Point Zero commercial fleet' },
      ]}
      darkSection={{
        num: '02',
        label: 'Industries Served',
        title: 'Who relies on Point Zero dedicated fleet',
        desc: 'From daily medical linen exchanges to high-volume manufacturing lines and distributor yards across Ontario.',
        items: applications,
      }}
      cta={{
        titleLine1: 'READY FOR DEDICATED FLEET',
        titleAccent: 'CAPACITY ON YOUR LANES?',
        desc: 'Talk to our logistics specialists about building a dedicated program tailored to your volume, routes, and equipment needs.',
      }}
    />
  );
}
