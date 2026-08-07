import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Moffett Delivery Services in Ontario | Point Zero Road Lines',
  description: 'Truck-mounted Moffett delivery across the GTA and Ontario. No dock or site forklift required. Professional drivers and 24/7 dispatch.',
};

const capabilities = [
  { icon: 'Forklift', title: 'Truck-Mounted Forklift', desc: 'The Moffett travels on the rear of the trailer and unloads the moment it touches down.' },
  { icon: 'MapPin', title: 'No Dock Required', desc: 'Construction site, commercial yard, or residential street — our equipment handles the offload.' },
  { icon: 'Package', title: 'Placed, Not Dropped', desc: 'Material lands safely right at the work area instead of being stranded at the curb.' },
  { icon: 'Clock', title: 'Zero Site Delay', desc: 'No waiting for a subcontractor forklift or shared machinery on active sites.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Building Materials', desc: 'Lumber, drywall, roofing, windows, doors, and steel delivered on schedule.' },
  { icon: 'CheckCircle', title: 'Job-Site Spotting', desc: 'Material staged precisely where the crew is working to save trade labor.' },
  { icon: 'CheckCircle', title: 'Residential Delivery', desc: 'Narrow driveways and restricted access points where standard dry vans cannot deliver.' },
  { icon: 'CheckCircle', title: 'Palletized Freight', desc: 'Any palletized load bound for a receiver without a dock or forklift.' },
];

export default function MoffettDeliveryPage() {
  return (
    <ServiceEditorialPage
      relatedKey="moffett-delivery"
      badge="SERVICES · MOFFETT DELIVERY"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="TRUCK-MOUNTED MOFFETT."
      titleAccent="NO DOCK. NO PROBLEM."
      description="Our truck-mounted Moffett forklifts travel with the load and unload on arrival — so freight reaches construction sites, commercial projects, and residential addresses that have no loading dock and no forklift waiting."
      heroImage="/images/warehouse-crossdock-fleet2.webp"
      heroAlt="Point Zero Road Lines Moffett flatbed truck ready for delivery"
      stats={[
        { value: '2006', label: 'Operating Since' },
        { value: '100%', label: 'Self-Unloading Fleet' },
        { value: '24/7', label: 'Live Dispatch' },
        { value: 'GTA & ON', label: 'Core Coverage' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Why Moffett delivery matters',
        desc: 'Construction sites and commercial projects need more than transportation — they need precision placement. A Moffett turns a delivery that would stall into one that unloads itself.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/moffett-yard-rear.webp', alt: 'Moffett-equipped flatbed in yard', span: 'main' },
        { src: '/images/moffett-unloading-forklift.webp', alt: 'Forklift unloading freight' },
        { src: '/images/moffett-construction-unload.webp', alt: 'Moffett at construction site' },
      ]}
      darkSection={{
        num: '02',
        label: 'Where it works',
        title: 'Freight we place on site',
        desc: 'Investing in truck-mounted forklifts is what lets us reduce unloading delays, cut labor requirements, and keep project schedules intact.',
        items: applications,
      }}
      cta={{
        titleLine1: 'FREIGHT WITH',
        titleAccent: 'NOWHERE TO LAND?',
        desc: 'Tell us the site and the load. If there is no dock and no forklift, that is exactly what we built this fleet for.',
      }}
    />
  );
}
