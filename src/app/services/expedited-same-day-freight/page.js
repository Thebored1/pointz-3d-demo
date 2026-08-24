import ExpeditedFreightPage from '../../../components/ExpeditedFreightPage';
import { EXPEDITED_FAQS } from '../../../components/expeditedFaqs';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services/expedited-same-day-freight';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Hot Shot & Expedited Trucking Ontario | Point Zero Road Lines';
const DESCRIPTION =
  "Same-day and next-day hot shot freight across Ontario and the GTA when a shipment can't wait — direct-drive transit, 24/7 live dispatch and live GPS. Request an urgent quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'hot shot trucking Ontario',
    'expedited freight GTA',
    'same-day delivery Toronto',
    'emergency freight Ontario',
    'direct drive trucking',
    'urgent freight GTA',
    'expedited cross-border freight',
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
        url: `${SITE_URL}/images/flatbed-highway-ad.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines expedited freight transport on the highway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: "Same-day and next-day hot shot freight across Ontario and the GTA when a shipment can't wait.",
    images: [`${SITE_URL}/images/flatbed-highway-ad.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Expedited & Same-Day Freight',
      serviceType: 'Hot shot / expedited freight',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'AdministrativeArea', name: 'Golden Horseshoe' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
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
        { '@type': 'ListItem', position: 3, name: 'Expedited & Same-Day Freight', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: EXPEDITED_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function ExpeditedSameDayFreightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ExpeditedFreightPage />
    </>
  );
}
