import DedicatedFleetPage from '../../../components/DedicatedFleetPage';
import { DEDICATED_FLEET_FAQS } from '../../../components/dedicatedFleetFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/dedicated-fleet-services';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Dedicated Fleet Services Ontario | Point Zero Road Lines';
const DESCRIPTION =
  'Company-owned trucks, Moffett units and drivers dedicated to your account across Ontario — predictable capacity without the overhead of owning a fleet.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'dedicated fleet services',
    'dedicated trucking Ontario',
    'dedicated carrier GTA',
    'contract carriage Ontario',
    'dedicated capacity trucking',
    'private fleet outsourcing',
    'dedicated lanes Ontario',
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
        url: `${SITE_URL}/images/dedicated-fleet-rows.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines dedicated fleet lined up in parallel rows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Company-owned trucks, Moffett units and drivers dedicated to your account across Ontario & the GTA.',
    images: [`${SITE_URL}/images/dedicated-fleet-rows.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Dedicated Fleet Services',
      serviceType: 'Dedicated fleet / contract carriage',
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
        { '@type': 'ListItem', position: 3, name: 'Dedicated Fleet Services', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: DEDICATED_FLEET_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function DedicatedFleetServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DedicatedFleetPage />
    </>
  );
}
