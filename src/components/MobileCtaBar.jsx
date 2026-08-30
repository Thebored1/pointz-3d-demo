import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/site';
import './MobileCtaBar.css';

/**
 * Fixed call / quote bar for the home page on mobile.
 *
 * Below 1200px the navbar collapses to a hamburger and takes the phone number
 * and quote button with it, so the two actions that actually generate leads are
 * two taps away. This puts them back, permanently, in thumb reach.
 *
 * Deliberately a server component: `tel:` clicks are already picked up by the
 * document-level listener in AnalyticsTracker, so no onClick is needed and the
 * bar works before hydration.
 */
export default function MobileCtaBar() {
  return (
    <>
      {/* Keeps the fixed bar from covering the end of the footer. */}
      <div className="mcta-spacer" aria-hidden="true" />

      <nav className="mcta-bar" aria-label="Contact actions">
        <a className="mcta-call" href={`tel:${CONTACT_INFO.phoneRaw}`}>
          <Phone size={18} strokeWidth={2.25} aria-hidden="true" />
          <span>{CONTACT_INFO.phone}</span>
        </a>

        <Link className="mcta-quote" href="/get-a-quote">
          <span>Get a Quote</span>
          <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </nav>
    </>
  );
}
