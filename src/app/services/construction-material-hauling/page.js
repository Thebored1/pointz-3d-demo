import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Construction Material Delivery Toronto & GTA | Point Zero',
  description: 'Lumber, brick, roofing, drywall, steel & precast delivery to GTA job sites — Moffett-equipped for sites without a dock. Get a quote.',
};

const capabilities = [
  { icon: 'Hammer', title: 'Direct Job-Site Spotting', desc: 'Materials spotted along foundation lines, framing bays, or garage pads to eliminate hours of trade re-handling.' },
  { icon: 'Forklift', title: 'Rough-Terrain Offloading', desc: 'All-wheel-drive Moffett forklifts navigate unpaved ground, mud, gravel, and active subdivision work zones.' },
  { icon: 'Shield', title: 'Tarping & Weather Protection', desc: 'Heavy-duty 8ft drop tarps and roll-tite flatbeds keep drywall, insulation, and finished timber completely dry.' },
  { icon: 'Clock', title: 'Early Morning Site Drops', desc: 'Staged out of our Mississauga terminal to arrive at 6:30 AM before construction access gates become congested.' },
];

const applications = [
  { icon: 'CheckCircle', title: 'Lumber & Engineered Wood', desc: 'Framing packages, trusses, studs, and plywood delivered and spotted right next to carpenters.' },
  { icon: 'CheckCircle', title: 'Drywall, Sheathing & Insulation', desc: 'Weather-protected skids placed at direct entryways for efficient interior boarding.' },
  { icon: 'CheckCircle', title: 'Roofing Materials & Shingles', desc: 'Bundles of asphalt shingles, modified bitumen rolls, and metal roofing staged for hoisting.' },
  { icon: 'CheckCircle', title: 'Precast Concrete & Masonry', desc: 'Pallets of brick, stone, concrete steps, and block placed safely along building perimeter lines.' },
  { icon: 'CheckCircle', title: 'Structural Steel & Rebar', desc: 'Heavy open-deck transport secured to MTO/DOT standards and unloaded with precision.' },
  { icon: 'CheckCircle', title: 'Commercial Glazing & Windows', desc: 'Crated glass units and architectural metal delivered with cushioned, stable transport.' },
  { icon: 'CheckCircle', title: 'Landscape Products & Interlock', desc: 'Sod, aggregate, pavers, and interlock blocks delivered and spotted on site, dock or no dock.' },
  { icon: 'CheckCircle', title: 'HVAC Equipment', desc: 'RTUs, chillers, and mechanical equipment delivered on schedule with Moffett offloading.' },
];

export default function ConstructionMaterialHaulingPage() {
  return (
    <ServiceEditorialPage
      relatedKey="construction-material-hauling"
      badge="SERVICES · CONSTRUCTION HAULING"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="CONSTRUCTION MATERIAL HAULING."
      titleAccent="DELIVERED EXACTLY WHERE THE CREW IS WORKING."
      description="Construction schedules depend on materials arriving on time and placed where installation happens — not dumped on the road or blocked at the gate. Point Zero Road Lines delivers building supplies across Ontario with flatbeds and truck-mounted Moffetts that navigate rough terrain and tight access."
      heroImage="/images/construction-blue-hero.webp"
      heroAlt="Point Zero Road Lines delivering building materials on site"
      stats={[
        { value: '100%', label: 'Self-Unloading Delivery' },
        { value: '2006', label: 'Operating Since' },
        { value: '48-53ft', label: 'Flatbed & Step-Deck' },
        { value: 'All-Terrain', label: 'Moffett Offloading' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Engineered for the reality of active job sites',
        desc: 'No dock, no crane, no finished road? That is our daily standard. Our drivers and Moffett equipment are trained to navigate active jobsites safely and drop materials right where trades need them.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/construction-delivery-site.webp', alt: 'Delivering building materials on site', span: 'main' },
        { src: '/images/construction-materials-crane.webp', alt: 'Loading construction materials' },
        { src: '/images/construction-site-unload.webp', alt: 'Flatbed unloading on construction site' },
      ]}
      darkSection={{
        num: '02',
        label: 'Materials Hauled',
        title: 'Building supplies we transport and place',
        desc: 'From residential subdivision framing to major industrial, commercial, and institutional (ICI) projects.',
        items: applications,
      }}
      cta={{
        titleLine1: 'HAVE A CONSTRUCTION SITE',
        titleAccent: 'THAT NEEDS MATERIAL DELIVERED?',
        desc: 'Send us the delivery coordinates, material specs, and access notes for a fast job-site quote.',
      }}
    />
  );
}
