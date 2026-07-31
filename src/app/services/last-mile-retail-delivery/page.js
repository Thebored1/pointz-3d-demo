import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Store', title: 'Store-level delivery', desc: 'Retail deliveries on the schedule stores can actually receive them.' },
  { icon: 'Route', title: 'Scheduled routes', desc: 'Fixed route delivery programs that run the same way every cycle.' },
  { icon: 'Forklift', title: 'White glove placement', desc: 'Material set exactly where it goes, not left at the door.' },
  { icon: 'MapPin', title: 'Residential capable', desc: 'Driveways and narrow access, with a Moffett when the site needs one.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Final leg from our dock', desc: 'Freight staged in our warehouse goes straight onto the last mile run.' },
  { icon: 'CheckCircle', title: 'Retail store deliveries', desc: 'Multi-stop routes across store networks in the GTA and Ontario.' },
  { icon: 'CheckCircle', title: 'Residential material delivery', desc: 'Building material and bulky goods to home addresses.' },
  { icon: 'CheckCircle', title: 'Proof on delivery', desc: 'Confirmation on every drop, with live tracking through the run.' },
];

export default function LastMileRetailDeliveryPage() {
  return (
    <ServiceEditorialPage
      relatedKey="last-mile-retail-delivery"
      badge="SERVICES"
      badgeAlt="LAST MILE & RETAIL DELIVERY"
      titleLine1="THE LAST MILE."
      titleAccent="DONE PROPERLY."
      description="The final leg is where most delivery promises break. Scheduled route and store-level delivery across the GTA and Southern Ontario — including white glove placement, with a Moffett on the truck when the address has no dock."
      heroImage="/images/fleet-1.webp"
      heroAlt="Last mile delivery vehicle"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '7', label: 'Days a week' },
        { value: '3', label: 'Ontario hubs' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'How the last leg runs',
        desc: 'Routes planned around receiving windows, with the equipment to unload wherever the stop turns out to be.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/truck-dock.webp', alt: 'Delivery at the receiving door', span: 'main' },
        { src: '/images/truck-side.webp', alt: 'Delivery vehicle' },
        { src: '/images/network.webp', alt: 'Route network' },
      ]}
      darkSection={{
        num: '02',
        label: 'What it covers',
        title: 'Delivery programs',
        desc: 'Retail networks, distributors and suppliers who need the final leg handled by the same carrier that ran the first one.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'NEED THE',
        titleAccent: 'FINAL LEG?',
        desc: 'Tell us the stops and the receiving windows. We will build the route and run it on schedule.',
      }}
    />
  );
}
