'use client';

import { usePathname } from 'next/navigation';
import { AnalyticsScripts, AnalyticsNoScript } from './Analytics';

/**
 * Gates all analytics off the /admin section so internal lead-checking doesn't
 * fire GTM, GA4 or Google Ads — otherwise staff visits show up as site traffic
 * and feed remarketing audiences. Public routes get the full stack.
 */
export default function SiteAnalytics() {
  const pathname = usePathname();
  if (pathname && pathname.startsWith('/admin')) return null;

  return (
    <>
      <AnalyticsNoScript />
      <AnalyticsScripts />
    </>
  );
}
