import ServiceEditorialPage from '../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Transportation & Logistics Insights | Point Zero Road Lines Blog',
  description: 'Expert insights on Moffett delivery, dedicated fleet management, flatbed transportation, and Ontario freight logistics from Point Zero Road Lines.',
};

const blogPosts = [
  { icon: 'Forklift', title: 'What Is a Moffett Truck — and When Do You Need One?', desc: 'A complete breakdown of truck-mounted forklifts, how they eliminate job-site delays, and when choosing one saves time and equipment rental costs.' },
  { icon: 'Layers', title: 'No Dock, No Forklift: How Moffett Delivery Actually Works', desc: 'How drivers dismount, offload, and spot pallets on residential drives, gravel, and unpaved sites without receiving machinery.' },
  { icon: 'Forklift', title: 'Moffett vs. Crane vs. Standard Forklift Delivery', desc: 'A cost, speed, and maneuverability comparison across three common delivery and unloading methods on GTA work sites.' },
  { icon: 'Timer', title: 'Hot Shot vs. Expedited vs. Same-Day Freight — The Difference', desc: 'Understand the distinctions in equipment, transit windows, and direct door-to-door urgency across emergency freight modes.' },
  { icon: 'Truck', title: 'Dedicated Fleet vs. Spot Market: Cost, Capacity, Reliability', desc: 'When does dedicated capacity deliver lower total landed cost and operational stability compared to volatile spot freight brokerage?' },
  { icon: 'Warehouse', title: 'Cross-Dock vs. Warehousing: Which Does Your Freight Need?', desc: 'Comparing short-term consolidation and direct trailer transfers to long-term storage and buffer inventory in Mississauga.' },
  { icon: 'Package', title: 'LTL vs. FTL: How to Choose for Your Shipment', desc: 'Key volume thresholds, pricing structures, and schedule considerations when deciding between less-than-truckload and full truckload.' },
  { icon: 'Route', title: 'How to Prepare a Job Site for a Flatbed / Moffett Delivery', desc: 'A practical site preparation checklist for contractors: clear access paths, overhead hazards, ground firmness, and staging spots.' },
  { icon: 'Hammer', title: 'Delivering Construction Materials on a Job-Site Schedule', desc: 'Strategies for sequencing lumber, drywall, roofing, and steel drops to align with trade schedules and eliminate crew downtime.' },
  { icon: 'HeartPulse', title: 'Healthcare Linen Logistics: Why Turnaround Windows Rule Everything', desc: 'A deep dive into scheduled cart loops, hygiene protocols, and 24/7 replenishment cycles for hospital and healthcare laundry.' },
  { icon: 'Globe', title: 'Cross-Border Trucking Ontario → U.S.: What Shippers Should Know', desc: 'Essential guidance on USDOT/MC authorities, customs documentation, and seamless linehaul transit between Canada and the United States.' },
  { icon: 'CheckCircle', title: 'How to Choose a Freight Carrier in the GTA (Checklist)', desc: '10 critical questions to ask before selecting a transportation partner for your dedicated routes, flatbed hauling, and distribution.' },
];

export default function BlogPage() {
  return (
    <ServiceEditorialPage
      relatedKey="blog"
      badge="RESOURCES & ARTICLES"
      badgeAlt="INDUSTRY INSIGHTS"
      titleLine1="FREIGHT INSIGHTS."
      titleAccent="PRACTICAL LOGISTICS GUIDES."
      description="Read actionable articles, operational best practices, and equipment guides written by our transportation specialists in Mississauga."
      heroImage="/images/about-fleet-lineup.webp"
      heroAlt="Point Zero Road Lines fleet ready for transport"
      stats={[
        { value: '2006', label: 'Industry Experience Since' },
        { value: 'Moffett', label: 'Specialized Expertise' },
        { value: 'Ontario', label: 'Regional Focus' },
        { value: '24/7', label: 'Operational Knowledge' },
      ]}
      primarySection={{
        num: '01',
        label: 'Latest Guides & Articles',
        title: 'Featured transportation insights',
        desc: 'Practical operational advice to optimize your supply chain, reduce delivery friction, and secure dedicated carrier capacity.',
        columns: 2,
        items: blogPosts,
      }}
      gallery={[
        { src: '/images/dedicated-fleet-highway.webp', alt: 'Commercial transport on highway', span: 'main' },
        { src: '/images/moffett-unloading-forklift.webp', alt: 'Moffett forklift offloading' },
        { src: '/images/warehouse-crossdock-docks.webp', alt: 'Warehouse cross-docking' },
      ]}
      cta={{
        titleLine1: 'WANT TO DISCUSS A SPECIFIC',
        titleAccent: 'LOGISTICS CHALLENGE?',
        desc: 'Our freight specialists can analyze your lanes, volume, and equipment needs to recommend the most cost-effective solution.',
      }}
    />
  );
}
