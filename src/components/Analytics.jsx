import Script from 'next/script';
import { ADS_ID, GA_ID, GTM_ID } from '@/lib/analytics';
import AnalyticsTracker from './AnalyticsTracker';

/**
 * Google Tag Manager container plus the gtag.js base tag.
 *
 * gtag.js is loaded alongside GTM because form conversions and phone/WhatsApp
 * click events are fired directly from JS (see lib/analytics.js) rather than
 * through GTM triggers.
 *
 * One gtag.js loader serves both GA4 and Google Ads — the extra account is
 * registered with a second gtag('config', ...) rather than a second <script
 * src>, which is why the Ads snippet's own loader tag is not repeated here.
 */
export function AnalyticsScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Google tag (gtag.js) */}
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');
gtag('config', '${ADS_ID}');`}
      </Script>

      {/* Sitewide delegated tracking for phone + WhatsApp clicks. */}
      <AnalyticsTracker />
    </>
  );
}

/** GTM's <noscript> fallback. Must be the first thing inside <body>. */
export function AnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
