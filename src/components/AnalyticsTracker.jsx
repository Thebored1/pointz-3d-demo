'use client';

import { useEffect } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

/**
 * A single document-level click listener that catches every phone (`tel:`) and
 * WhatsApp (`wa.me`) link on the site, so we don't have to wire an onClick onto
 * each anchor scattered across the navbar, footer, CTAs, service pages and form
 * success screens. Anchors added later are covered automatically.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    function onClick(event) {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        trackPhoneClick(href.replace('tel:', ''));
      } else if (/wa\.me|api\.whatsapp\.com|wa\.link/.test(href)) {
        trackWhatsAppClick();
      }
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
