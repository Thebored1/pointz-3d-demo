import "./globals.css";
import { Syne, Manrope, Space_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, SITE_DESCRIPTION } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";

// Self-hosted, preloaded, font-display: swap. Weights limited to what the CSS
// actually uses. Inter was dropped — it was imported but never referenced.
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-space-mono", display: "swap" });

// Home title tag matching Section 3: "Moffett & Flatbed Delivery Ontario | Point Zero Road Lines"
const HOME_TITLE = `Moffett & Flatbed Delivery Ontario | ${SITE_NAME}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_CA",
    url: "/",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/fleet-lineup.webp`,
        width: 1200,
        height: 630,
        alt: "Point Zero Road Lines Dedicated Fleet & Moffett Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/fleet-lineup.webp`],
  },
};

// Organization & LocalBusiness schema (single location at Mississauga HQ)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: SITE_LEGAL_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo.webp`,
      foundingDate: "2006",
      identifier: [
        {
          "@type": "PropertyValue",
          name: "USDOT",
          value: "3983391",
        },
        {
          "@type": "PropertyValue",
          name: "MC",
          value: "1492151",
        },
      ],
      sameAs: [
        "https://www.instagram.com/pointzeroroadlines/",
        "https://www.facebook.com/pointzeroroadline/",
        "https://www.youtube.com/@PointZeroRoadlines",
        "https://www.linkedin.com/company/the-point-zero-road-lines/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-647-680-1300",
          contactType: "dispatch",
          areaServed: "CA",
          availableLanguage: "en",
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-905-291-0325",
          contactType: "customer service",
          areaServed: "CA",
          availableLanguage: "en",
        },
      ],
    },
    {
      "@type": ["LocalBusiness", "LogisticsService"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      legalName: SITE_LEGAL_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: "+1-647-680-1300",
      email: "info@pzrls.com",
      priceRange: "$$",
      currenciesAccepted: "CAD, USD",
      paymentAccepted: "Invoice, Credit Card, Direct Deposit, Electronic Transfer",
      knowsAbout: [
        "Moffett Delivery Services",
        "Flatbed Freight Transportation",
        "Dedicated Fleet Logistics",
        "Cross-Dock Warehousing",
        "Healthcare Linen Logistics",
        "Construction Material Hauling",
        "Expedited Same-Day Freight"
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6493,
        longitude: -79.6482,
      },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1566 Bonhill Road",
        addressLocality: "Mississauga",
        addressRegion: "ON",
        postalCode: "L5T 1C7",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Mississauga" },
        { "@type": "City", name: "Brampton" },
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Vaughan" },
        { "@type": "City", name: "Caledon" },
        { "@type": "City", name: "Bolton" },
        { "@type": "City", name: "Burlington" },
        { "@type": "City", name: "Richmond Hill" },
        { "@type": "City", name: "Markham" },
        { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
        { "@type": "AdministrativeArea", name: "Ontario" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Logistics and Freight Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flatbed & Moffett Transport",
              description: "Truck-mounted forklift delivery — no loading dock or site crane required."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dedicated Fleet Services",
              description: "Customized dedicated capacity and routing for commercial accounts."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Warehouse & Cross-Dock Storage",
              description: "Trailer-to-trailer cross-docking and pallet staging in Mississauga."
            }
          }
        ]
      }
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
