import MoffettFlatbedPage from '../../../components/MoffettFlatbedPage';
import { MOFFETT_FAQS } from '../../../components/moffettFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/flatbed-moffett-transport';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Moffett Truck Delivery & Flatbed Service in the GTA | Point Zero Road Lines';
const DESCRIPTION =
  'Moffett-equipped flatbed delivery across the GTA — up to 5,500 lb lift, 2-way & 4-way units, and onsite unloading with no dock or forklift. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'Moffett truck delivery',
    'Moffett forklift delivery',
    'flatbed Moffett service',
    'Moffett delivery GTA',
    'flatbed delivery Toronto',
    'construction material delivery',
    'truck-mounted forklift delivery',
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
        url: `${SITE_URL}/images/moffett-construction-unload.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines Moffett-equipped flatbed delivery in the GTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Moffett-equipped flatbed delivery across the GTA — 5,500 lb capacity, 2-way & 4-way units, onsite unloading with no dock or forklift required.',
    images: [`${SITE_URL}/images/moffett-construction-unload.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Moffett Truck Delivery & Flatbed Service',
      serviceType: 'Moffett-equipped flatbed delivery',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'City', name: 'Mississauga' },
        { '@type': 'City', name: 'Brampton' },
        { '@type': 'City', name: 'Vaughan' },
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
        { '@type': 'ListItem', position: 3, name: 'Moffett Truck Delivery & Flatbed Service', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: MOFFETT_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function FlatbedMoffettTransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MoffettFlatbedPage />
    </>
  );
}
