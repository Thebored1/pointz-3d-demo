import HealthcareLinenPage from '../../../components/HealthcareLinenPage';
import { HEALTHCARE_FAQS } from '../../../components/healthcareFaqs';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services/healthcare-linen-logistics';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Healthcare Linen & Textile Transport Ontario | Point Zero Road Lines';
const DESCRIPTION =
  'Dedicated linen and textile transport for healthcare, care and hospitality across the GTA & Ontario — sanitary handling, cart & sling gear, and 24/7 scheduled exchange runs. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'healthcare linen transport Ontario',
    'medical linen delivery GTA',
    'commercial laundry transport',
    'hospital linen logistics',
    'linen cart transport',
    'hospitality linen delivery',
    'textile transport Ontario',
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
        url: `${SITE_URL}/images/dedicated-fleet-blue.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines specialized healthcare textile fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Dedicated linen and textile transport for healthcare, care and hospitality across the GTA & Ontario.',
    images: [`${SITE_URL}/images/dedicated-fleet-blue.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Healthcare Linen & Textile Logistics',
      serviceType: 'Linen and textile transport',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'City', name: 'Mississauga' },
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
        { '@type': 'ListItem', position: 3, name: 'Healthcare Linen Logistics', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: HEALTHCARE_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function HealthcareLinenLogisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HealthcareLinenPage />
    </>
  );
}
