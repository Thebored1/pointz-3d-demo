import ServicesHubPage from '../../components/ServicesHubPage';
import { overviewServices } from '../../components/serviceEditorialData';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Trucking, Moffett Delivery & Logistics Services | Point Zero Road Lines';
const DESCRIPTION =
  'Dedicated fleet, flatbed & Moffett transport, warehousing & cross-dock, expedited freight, last-mile, and industry logistics across the GTA & Ontario — one company-owned carrier.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'trucking services GTA',
    'Moffett delivery Ontario',
    'freight services Toronto',
    'logistics company Mississauga',
    'dedicated fleet Ontario',
    'warehousing cross-dock GTA',
    'flatbed transport Ontario',
  ],
  alternates: {
    canonical: PAGE_PATH,
    languages: {
      'en-CA': PAGE_PATH,
      'en-US': PAGE_PATH,
      'x-default': PAGE_PATH,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    siteName: 'Point Zero Road Lines',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/fleet-lineup.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines fleet lined up in the yard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Dedicated fleet, flatbed & Moffett transport, warehousing, expedited freight and last-mile across the GTA & Ontario.',
    images: [`${SITE_URL}/images/fleet-lineup.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#webpage`,
      name: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: PAGE_URL },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${PAGE_URL}#servicelist`,
      name: 'Point Zero Road Lines Services',
      itemListElement: overviewServices.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `${SITE_URL}${s.href}`,
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicesHubPage />
    </>
  );
}
