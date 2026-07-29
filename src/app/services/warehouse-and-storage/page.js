"use client";
import ServiceEditorialPage from '../../../components/ServiceEditorialPage';

const capabilities = [
  { icon: 'Warehouse', title: 'Cross-dock', desc: 'Trailer-to-trailer transfers so freight never sits longer than it has to.' },
  { icon: 'Package', title: 'Consolidate', desc: 'Combine or break loads across Mississauga, Bolton and Brampton.' },
  { icon: 'MapPin', title: 'Three hubs', desc: 'Ontario footprint positioned for GTA and regional distribution.' },
  { icon: 'Shield', title: 'Custody', desc: 'Documented handoffs from inbound to outbound — no mystery freight.' },
];

const highlights = [
  { icon: 'CheckCircle', title: 'Cross-dock transfers', desc: 'Trailer-to-trailer moves when your dock is full.' },
  { icon: 'CheckCircle', title: 'Consolidation', desc: 'Combine or break freight across three Ontario sites.' },
  { icon: 'CheckCircle', title: 'Overflow storage', desc: 'Short- and mid-term holding with clear chain-of-custody.' },
  { icon: 'CheckCircle', title: 'Logged handoffs', desc: 'Every transfer documented from drop to pickup.' },
];

export default function WarehouseAndStoragePage() {
  return (
    <ServiceEditorialPage
      badge="SERVICES"
      badgeAlt="WAREHOUSE & STORAGE"
      titleLine1="CROSS-DOCK."
      titleAccent="CONSOLIDATE."
      description="Transload, consolidate and store across Mississauga, Bolton and Brampton with full chain-of-custody — so freight keeps moving when your dock can't."
      heroImage="/images/truck-dock.webp"
      heroAlt="Warehouse dock"
      stats={[
        { value: '3', label: 'Ontario sites' },
        { value: 'X-DOCK', label: 'Transfers' },
        { value: 'HOLD', label: 'Overflow storage' },
        { value: '24/7', label: 'Coordination' },
      ]}
      primarySection={{
        num: '01',
        label: 'Capabilities',
        title: 'Space that works with the truck',
        desc: 'Our Ontario sites support cross-dock transfers, consolidation and overflow when your dock is full.',
        columns: 4,
        items: capabilities,
      }}
      gallery={[
        { src: '/images/network.webp', alt: 'Warehouse operations', span: 'main' },
        { src: '/images/truck-loaded.webp', alt: 'Loaded truck' },
        { src: '/images/safety-vest.webp', alt: 'Warehouse staff' },
      ]}
      darkSection={{
        num: '02',
        label: 'Spec sheet',
        title: 'What we hold and move',
        desc: 'Clear custody from inbound drop to outbound pickup — no mystery freight sitting in the yard.',
        items: highlights,
      }}
      cta={{
        titleLine1: 'NEED',
        titleAccent: 'SPACE?',
        desc: "Tell us timing and volume. We'll hold, transfer or consolidate at the right site.",
      }}
    />
  );
}
