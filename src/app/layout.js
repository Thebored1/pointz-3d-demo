import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// Home title tag. The PDF is the source of truth on positioning and calls to
// drop "Dedicated Trucking" for the Moffett-forward tagline, so the title uses
// the PDF wording; the base-doc "Mississauga ON" keyword tail is kept for SEO.
const HOME_TITLE = `${SITE_NAME} | Moffett Delivery & Specialized Transportation, Mississauga ON`;

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

// LocalBusiness schema (base-doc technical-SEO note). Strengthens local search
// and Google Business Profile relevance. Kept in sync with the footer's
// address, phone and social links.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+1-905-291-0325",
  email: "info@pointzeroroadlines.com",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1566 Bonhill Road",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5T 1C7",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    { "@type": "AdministrativeArea", name: "Southern Ontario" },
  ],
  sameAs: [
    "https://www.instagram.com/pointzeroroadlines/",
    "https://www.facebook.com/pointzeroroadline/",
    "https://www.youtube.com/@PointZeroRoadlines",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
