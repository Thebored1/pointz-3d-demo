import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Dedicated Fleet Trucking Ontario & GTA | Point Zero Road Lines',
  description: 'Dedicated trucks, Moffett units, and drivers assigned to your account across Ontario & the GTA — predictable capacity, planned around your schedule.',
};

const capabilities = [
  { icon: 'Users', title: 'Assigned Drivers & Equipment', desc: 'Consistent, vetted drivers and equipment who know your facilities, dock staff, and delivery expectations.' },
  { icon: 'Shield', title: 'Guaranteed Capacity', desc: 'Locked-in trucks and trailers dedicated solely to your freight, eliminating spot-market volatility and capacity pinches.' },
  { icon: 'Route', title: 'Custom Routes & Schedules', desc: 'Multi-stop daily routes, scheduled inter-plant transfers, and distribution planned around your plant hours.' },
  { icon: 'Wrench', title: 'Complete Fleet Administration', desc: 'We handle maintenance, fuel, insurance, regulatory compliance (MTO/DOT), and safety oversight from Mississauga.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Healthcare & Commercial Linen', desc: 'Scheduled clean/soiled linen facility loops running on precise turnaround windows.' },
  { icon: 'CheckCircle', title: 'Manufacturing & Industrial Goods', desc: 'Daily raw material replenishment and finished goods distribution between plants and warehouses.' },
  { icon: 'CheckCircle', title: 'Building Material Distribution', desc: 'Dedicated flatbeds and Moffett units staged daily at supply yards for job-site drops.' },
  { icon: 'CheckCircle', title: 'Retail Distribution & Restocking', desc: 'Predictable scheduled store deliveries with liftgate and offloading support.' },
  { icon: 'CheckCircle', title: 'Consumer Packaged Goods', desc: 'Dry van runs serving distribution centres and retail hubs throughout Ontario.' },
  { icon: 'CheckCircle', title: 'Cross-Border Supply Chains', desc: 'Dedicated lanes connecting Ontario manufacturing hubs with Michigan, New York, Ohio, and beyond.' },
];

export default function DedicatedFleetServicesPage() {
  return (
    <ServiceEditorialPage
      relatedKey="dedicated-fleet-services"
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
        desc: 'From daily medical linen exchanges to high-volume manufacturing lines and distributor yards across Southern Ontario.',
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
