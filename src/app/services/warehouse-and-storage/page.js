"use client";
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function WarehouseAndStoragePage() {
  return (
    <ServiceDetailPage
      badge="WAREHOUSE & STORAGE"
      badgeAlt="CROSS-DOCK · OVERFLOW"
      title="SPACE WHEN YOU"
      titleAccent="NEED IT."
      description="Transload, consolidate and store between our Mississauga, Bolton and Brampton sites with full chain-of-custody. Keep freight moving without delay."
      heroImage="/images/truck-dock.webp"
      heroAlt="Warehouse dock"
      highlights={[
        'Cross-docking and trailer-to-trailer transfers',
        'Short and mid-term overflow storage',
        'Three Ontario sites — Mississauga, Bolton, Brampton',
        'Full chain-of-custody from inbound to outbound',
      ]}
      gallery={[
        { src: '/images/network.webp', alt: 'Warehouse operations' },
        { src: '/images/truck-loaded.webp', alt: 'Loaded truck' },
        { src: '/images/safety-vest.webp', alt: 'Warehouse staff' },
      ]}
      ctaTitle="NEED DOCK OR"
      ctaAccent="STORAGE?"
      ctaDesc="Tell us inbound timing and dwell. We'll stage capacity across our Ontario hubs."
    />
  );
}
