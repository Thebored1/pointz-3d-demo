import LastMilePage from '../../../components/LastMilePage';
import { LAST_MILE_FAQS } from '../../../components/lastMileFaqs';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services/last-mile-delivery';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Last Mile Delivery GTA & Ontario | Point Zero Road Lines';
const DESCRIPTION =
  'Final-mile delivery to construction sites, retail locations and residential addresses across the GTA & Ontario — Moffett self-unloading and liftgate, with appointment precision. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'last mile delivery GTA',
    'final mile delivery Ontario',
    'residential freight delivery',
    'Moffett last mile delivery',
    'liftgate delivery Toronto',
    'retail delivery GTA',
    'job site last mile delivery',
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
        url: `${SITE_URL}/images/moffett-yard-rear.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines last-mile delivery truck ready for dispatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Final-mile delivery to construction sites, retail locations and residential addresses across the GTA & Ontario.',
    images: [`${SITE_URL}/images/moffett-yard-rear.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Last Mile Delivery',
      serviceType: 'Final-mile freight delivery',
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
        { '@type': 'ListItem', position: 3, name: 'Last Mile Delivery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: LAST_MILE_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function LastMileDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LastMilePage />
    </>
  );
}
