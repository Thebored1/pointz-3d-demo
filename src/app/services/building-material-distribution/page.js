"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Layers', title: 'Yard to site', desc: 'Distribution programs moving product from supplier yards out to job sites.' },
  { icon: 'Forklift', title: 'Moffett unloading', desc: 'Every drop unloads itself, whether the destination is a yard or a build.' },
  { icon: 'Warehouse', title: 'Staged inventory', desc: 'Product held in our warehouse and released against the delivery schedule.' },
  { icon: 'Route', title: 'Recurring programs', desc: 'Standing routes for suppliers with predictable weekly volume.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Commercial construction logistics', desc: 'Coordinated material flow for larger commercial builds.' },
  { icon: 'CheckCircle', title: 'Supplier distribution', desc: 'Building material suppliers extending their delivery reach without buying trucks.' },
  { icon: 'CheckCircle', title: 'Consolidated loads', desc: 'Multiple orders combined into a single run to control delivery cost.' },
  { icon: 'CheckCircle', title: 'Residential and commercial', desc: 'The same program serving home builds and commercial job sites.' },
];

export default function BuildingMaterialDistributionPage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="BUILDING MATERIAL DISTRIBUTION"
      titleLine1="FROM THE YARD."
      titleAccent="TO THE BUILD."
      description="Distribution programs for building material suppliers — warehousing, consolidation and Moffett-equipped delivery that extends your reach without you having to run a fleet of your own."
      heroImage="/images/warehouse-driver.webp"
      heroAlt="Building material distribution"
      stats={[
        { value: '2006', label: 'Moving freight since' },
        { value: '3', label: 'Ontario hubs' },
        { value: '24/7', label: 'Dispatch support' },
        { value: '0', label: 'Site equipment needed' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'How distribution runs',
        desc: 'Warehousing and transportation under one operation, so product can be staged, consolidated and delivered without a hand-off in the middle.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/truck-loaded.webp', alt: 'Material loaded for distribution', span: 'main' },
        { src: '/images/truck-dock.webp', alt: 'Loading at the yard' },
        { src: '/images/gallery-2.webp', alt: 'Distribution operations' },
      ]}
      darkSection={{
        num: '02',
        label: 'Who it serves',
        title: 'Distribution programs',
        desc: 'Suppliers and contractors who need material moved to sites and yards on a repeatable schedule.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'EXTEND YOUR',
        titleAccent: 'DELIVERY REACH.',
        desc: 'Tell us your volumes and delivery area. We will build the distribution program around them.',
      }}
    />
  );
}
