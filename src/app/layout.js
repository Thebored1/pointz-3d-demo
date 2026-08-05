import "./globals.css";
import { Syne, Manrope, Space_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, SITE_DESCRIPTION } from "@/lib/site";

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_CA",
    url: "/",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Organization & LocalBusiness schema (single location at Mississauga HQ, Section 23)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
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
    },
    {
      "@type": "MovingCompany",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      legalName: SITE_LEGAL_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: "+1-905-291-0325",
      email: "info@pointzeroroadlines.com",
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
        { "@type": "AdministrativeArea", name: "Southern Ontario" },
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
      </body>
    </html>
  );
}
