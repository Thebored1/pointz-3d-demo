import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: '24/7 Dispatch & Weekend Freight Delivery GTA | Point Zero',
  description: 'Round-the-clock dispatch and weekend delivery across the GTA & Ontario. A live dispatcher, not a voicemail box.',
};

const capabilities = [
  { icon: 'Clock', title: 'Live Human Dispatch 24/7/365', desc: 'When you call (905) 291-0325 after hours, an experienced dispatcher answers — never an automated recording.' },
  { icon: 'Truck', title: 'Weekend & Holiday Fleet Operations', desc: 'Full fleet service across Saturday, Sunday, and statutory holidays for continuous supply chain reliability.' },
  { icon: 'Route', title: 'Overnight Linehauls & Plant Transfers', desc: 'Move freight across GTA corridors overnight for immediate 6:00 AM dock readiness the next morning.' },
  { icon: 'Shield', title: 'Real-Time Load Rescue & Problem Solving', desc: 'Immediate rerouting, backup equipment mobilization, and rapid intervention when unexpected events occur.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Continuous 3-Shift Manufacturing', desc: 'Plant replenishment for automotive, packaging, and industrial facilities running 24/7 production.' },
  { icon: 'CheckCircle', title: 'Weekend Job-Site Deliveries', desc: 'Deliveries staged Saturday and Sunday mornings when city traffic is light and access roads are open.' },
  { icon: 'CheckCircle', title: 'Hospital Weekend Linen Cycles', desc: 'Regular Saturday and Sunday laundry cart rotations for healthcare and acute care facilities.' },
  { icon: 'CheckCircle', title: 'Retail Restocking Before Opening', desc: 'Night and early morning mall deliveries completed before customers and foot traffic arrive.' },
  { icon: 'CheckCircle', title: 'Emergency Plant Breakdown Hauling', desc: 'Midnight hot shots for replacement tooling, electrical components, and heavy mechanicals.' },
  { icon: 'CheckCircle', title: 'Sunday Cross-Dock Pre-Staging', desc: 'Inbound trailers unloaded and staged Sunday afternoon for rapid Monday morning dispatch.' },
];

export default function AfterHoursDispatchPage() {
  return (
    <ServiceEditorialPage
      relatedKey="24-7-after-hours-weekend-dispatch"
      badge="SERVICES · 24/7 DISPATCH"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="24/7 LIVE DISPATCH & WEEKEND DELIVERY."
      titleAccent="BECAUSE FREIGHT DOES NOT STOP AT 5 PM."
      description="Your manufacturing lines run three shifts, construction pours happen at dawn on Saturday, and healthcare linens cycle over long weekends. Point Zero Road Lines provides around-the-clock live dispatch, overnight linehauls, and full weekend delivery operations."
      heroImage="/images/dedicated-fleet-highway.webp"
      heroAlt="Point Zero Road Lines transport truck operating at night"
      stats={[
        { value: '24/7/365', label: 'Live Human Dispatch' },
        { value: '100%', label: 'Live Human Answer' },
        { value: 'Weekend', label: 'Full Fleet Operations' },
        { value: 'Overnight', label: 'Linehaul Coverage' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Real 24/7 capability, not just an on-call phone',
        desc: 'Our dispatch and maintenance teams operate continuously out of our Mississauga terminal, giving shippers immediate answers and equipment mobilization whenever duty calls.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/home-fleet-manager.webp', alt: 'Fleet manager coordinating dispatch', span: 'main' },
        { src: '/images/home-driver-cabin.webp', alt: 'Professional driver behind the wheel' },
        { src: '/images/dedicated-fleet-rows.webp', alt: 'Point Zero transport fleet' },
      ]}
      darkSection={{
        num: '02',
        label: 'After-Hours Scenarios',
        title: 'Operations running on our 24/7 clock',
        desc: 'From overnight inter-plant transfers to weekend construction drops and holiday hospital runs.',
        items: applications,
      }}
      cta={{
        titleLine1: 'NEED DISPATCH OR DELIVERY',
        titleAccent: 'OUTSIDE NORMAL BUSINESS HOURS?',
        desc: 'Call our 24/7 dispatch desk directly at (905) 291-0325 — we are on the line right now.',
      }}
    />
  );
}
