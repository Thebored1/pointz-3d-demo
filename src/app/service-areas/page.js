"use client";
import ServiceEditorialPage from '../../components/ServiceEditorialPage';

const areas = [
  { icon: 'MapPin', title: 'Mississauga', desc: 'Head office and dispatch at 1566 Bonhill Road.' },
  { icon: 'MapPin', title: 'Brampton', desc: 'Second location serving the northwest GTA.' },
  { icon: 'MapPin', title: 'Bolton (Caledon)', desc: 'Third location covering Caledon and the corridor north.' },
  { icon: 'MapPin', title: 'Toronto', desc: 'Downtown and tight-access commercial and residential sites.' },
  { icon: 'MapPin', title: 'Vaughan', desc: 'Industrial and distribution freight across York Region.' },
  { icon: 'MapPin', title: 'Hamilton', desc: 'Steel, industrial and building material lanes.' },
  { icon: 'MapPin', title: 'Milton & Halton', desc: 'Distribution centres and construction sites across the region.' },
  { icon: 'MapPin', title: 'Oakville', desc: 'Commercial, retail and residential delivery.' },
  { icon: 'MapPin', title: 'Guelph & Kitchener-Waterloo', desc: 'Manufacturing and consumer goods lanes west of the GTA.' },
  { icon: 'MapPin', title: 'Barrie & north', desc: 'Routes north of the GTA and surrounding areas.' },
];

const reach = [
  { icon: 'Globe', title: 'Cross-border', desc: 'Ontario into the United States under our own USDOT and MC authority.' },
  { icon: 'Route', title: 'Beyond the core area', desc: 'Routes outside these regions taken on case by case — ask us.' },
  { icon: 'Forklift', title: 'Moffett everywhere', desc: 'Every service area is covered by Moffett-equipped trucks.' },
  { icon: 'Clock', title: 'Weekend coverage', desc: 'Weekend and after-hours pickup and delivery across the region.' },
];

export default function ServiceAreasPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICE AREAS"
      badgeAlt="GTA · SOUTHERN ONTARIO"
      titleLine1="CLOSE TO THE LANES"
      titleAccent="THAT MATTER."
      description="Headquartered in Mississauga with additional locations in Bolton and Brampton, we serve the Greater Toronto Area and Southern Ontario — with cross-border service available into the United States."
      scrollLabel="SCROLL THE MAP"
      heroImage="/images/network.webp"
      heroAlt="Ontario service area network"
      stats={[
        { value: '3', label: 'Ontario hubs' },
        { value: '10+', label: 'Regions served' },
        { value: '24/7', label: 'Dispatch coverage' },
        { value: '2', label: 'Countries served' },
      ]}
      primarySection={{
        num: '01',
        label: 'Primary service area',
        title: 'Where we run',
        desc: 'Moffett delivery, dedicated fleet, flatbed, warehousing and specialized freight throughout the GTA and Southern Ontario.',
        columns: 4,
        items: areas,
      }}
      gallery={[
        { src: '/images/fleet-hero.webp', alt: 'Fleet across Ontario', span: 'main' },
        { src: '/images/heavy_haul_truck.webp', alt: 'On the highway' },
        { src: '/images/truck-dock.webp', alt: 'Delivery in the GTA' },
      ]}
      darkSection={{
        num: '02',
        label: 'Wider reach',
        title: 'Do not see your location?',
        desc: 'Our dedicated fleet and Moffett capability let us take on routes and destinations beyond the core service area.',
        items: reach,
      }}
      cta={{
        titleLine1: 'CHECK YOUR',
        titleAccent: 'ROUTE.',
        desc: 'Send us the pickup and delivery points. If we can run it, we will tell you straight away.',
      }}
    />
  );
}
