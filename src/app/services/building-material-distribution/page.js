import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Building Material Distribution & Job Site Delivery | Point Zero Road Lines',
  description: 'Supplier-to-site building material distribution across Ontario. Moffett offload, lumber staging, cross-docking, and scheduled builder routes.',
};

const capabilities = [
  { icon: 'Layers', title: 'Supplier Yard to Job Site', desc: 'Seamless distribution programs moving lumber, drywall, and structural supplies from mills to active builds.' },
  { icon: 'Forklift', title: 'Moffett Rough-Terrain Offloading', desc: 'Every drop unloads itself onto mud, gravel, or unfinished driveways with zero site equipment needed.' },
  { icon: 'Warehouse', title: 'Staged Cross-Dock Inventory', desc: 'Materials staged at our Mississauga terminal and released strictly against subcontractor schedules.' },
  { icon: 'Route', title: 'Dedicated Builder Programs', desc: 'Predictable scheduled runs for manufacturers and distributors expanding delivery reach without buying trucks.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Commercial Construction Logistics', desc: 'Coordinated delivery sequences for multi-phase commercial and institutional developments.' },
  { icon: 'CheckCircle', title: 'Supplier & Distributor Expansion', desc: 'Building supply dealers scaling regional sales with our turnkey dedicated fleet.' },
  { icon: 'CheckCircle', title: 'Consolidated Site Drops', desc: 'Multiple customer orders combined into one optimized route to minimize freight costs.' },
  { icon: 'CheckCircle', title: 'Residential Subdivision Drops', desc: 'Precision delivery of roof trusses, insulation, and framing packages into tight residential lots.' },
];

export default function BuildingMaterialDistributionPage() {
  return (
    <ServiceEditorialPage
      relatedKey="building-material-distribution"
      badge="SERVICES · DISTRIBUTION"
      badgeAlt="EST. 2006 · MISSISSAUGA HQ"
      titleLine1="FROM THE YARD."
      titleAccent="TO THE ACTIVE BUILD."
      description="Distribution programs for building material manufacturers and suppliers — warehousing, consolidation, and Moffett-equipped delivery that extends your customer reach without having to manage a private fleet."
      heroImage="/images/construction-blue-hero.webp"
      heroAlt="Point Zero Road Lines building material distribution transport"
      stats={[
        { value: '2006', label: 'Operating Since' },
        { value: '100%', label: 'Self-Unloading' },
        { value: '24/7', label: 'Dispatch Support' },
        { value: 'GTA & ON', label: 'Daily Builder Routes' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'How our distribution program runs',
        desc: 'Warehousing, cross-docking, and Moffett transportation managed under one roof at 1566 Bonhill Rd in Mississauga.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/construction-delivery-site.webp', alt: 'Material delivered to job site', span: 'main' },
        { src: '/images/construction-materials-crane.webp', alt: 'Crane loading building materials' },
        { src: '/images/flatbed-construction-haul.webp', alt: 'Flatbed hauling construction goods' },
      ]}
      darkSection={{
        num: '02',
        label: 'Who We Serve',
        title: 'Distribution programs tailored to your supply chain',
        desc: 'Suppliers, distributors, and general contractors who need materials moved to job sites on a dependable, repeatable schedule.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'EXTEND YOUR MATERIAL',
        titleAccent: 'DELIVERY REACH ACROSS ONTARIO.',
        desc: 'Tell us your volume, lane requirements, and customer drop points. We will engineer a dedicated distribution program.',
      }}
    />
  );
}
