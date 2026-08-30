import ManufacturingPage from '../../../components/ManufacturingPage';
import { MANUFACTURING_FAQS } from '../../../components/manufacturingFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/manufacturing-consumer-goods-freight';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Manufacturing & Retail Freight GTA | Point Zero Road Lines';
const DESCRIPTION =
  'FTL & scheduled LTL freight for manufacturers and CPG brands across Ontario — JIT plant delivery, cross-dock staging and cross-border lanes. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'manufacturing freight GTA',
    'consumer goods freight Ontario',
    'JIT plant delivery',
    'FTL LTL trucking Ontario',
    'CPG distribution freight',
    'automotive parts trucking',
    'cross-border manufacturing freight',
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
        url: `${SITE_URL}/images/warehouse-crossdock-facility.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines logistics facility serving manufacturers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'FTL and scheduled LTL freight for manufacturers, distributors and CPG brands across the GTA & Ontario.',
    images: [`${SITE_URL}/images/warehouse-crossdock-facility.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Manufacturing & Consumer-Goods Freight',
      serviceType: 'Manufacturing and CPG freight (FTL/LTL)',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'City', name: 'Mississauga' },
        { '@type': 'City', name: 'Brampton' },
        { '@type': 'City', name: 'Toronto' },
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
        { '@type': 'ListItem', position: 3, name: 'Manufacturing & Consumer Goods', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: MANUFACTURING_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function ManufacturingConsumerGoodsFreightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ManufacturingPage />
    </>
  );
}
