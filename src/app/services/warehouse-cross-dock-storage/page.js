import WarehouseCrossDockPage from '../../../components/WarehouseCrossDockPage';
import { WAREHOUSE_FAQS } from '../../../components/warehouseFaqs';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services/warehouse-cross-dock-storage';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Warehouse & Cross-Dock Mississauga | Point Zero Road Lines';
const DESCRIPTION =
  'Cross-docking, warehousing and freight consolidation at our Mississauga terminal (1566 Bonhill Rd) — one operation with the fleet, not a separate storage vendor. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'cross-dock Mississauga',
    'warehousing Mississauga',
    'freight consolidation GTA',
    'cross-docking services Ontario',
    'pallet storage Mississauga',
    'LTL to FTL consolidation',
    'GTA distribution terminal',
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
        url: `${SITE_URL}/images/warehouse-crossdock-docks.webp`,
        width: 1200,
        height: 630,
        alt: 'Loading-bay docks at the Point Zero Road Lines cross-dock terminal in Mississauga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Cross-docking, warehousing and freight consolidation at our Mississauga terminal — one operation with the fleet.',
    images: [`${SITE_URL}/images/warehouse-crossdock-docks.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Warehouse & Cross-Dock Services',
      serviceType: 'Cross-docking, warehousing and freight consolidation',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'City', name: 'Mississauga' },
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'City', name: 'Brampton' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/get-a-quote`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Warehouse & Cross-Dock', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: WAREHOUSE_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function WarehouseCrossDockStoragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WarehouseCrossDockPage />
    </>
  );
}
