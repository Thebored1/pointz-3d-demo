import AfterHoursDispatchPage from '../../../components/AfterHoursDispatchPage';
import { AFTER_HOURS_FAQS } from '../../../components/afterHoursFaqs';

const SITE_URL = 'https://pointzeroroadlines.com';
const PAGE_PATH = '/services/24-7-after-hours-weekend-dispatch';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = '24/7 Dispatch & Weekend Freight Delivery GTA | Point Zero Road Lines';
const DESCRIPTION =
  'Round-the-clock live dispatch and weekend delivery across the GTA & Ontario — a real dispatcher, not a voicemail box. Overnight linehauls, holiday runs and after-hours load rescue.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    '24/7 dispatch trucking',
    'weekend freight delivery GTA',
    'after hours trucking Ontario',
    'overnight linehaul GTA',
    'holiday freight delivery',
    'night delivery Toronto',
    'live dispatch trucking',
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
        url: `${SITE_URL}/images/dedicated-fleet-highway.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines transport truck operating at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Round-the-clock live dispatch and weekend delivery across the GTA & Ontario — a real dispatcher, not a voicemail box.',
    images: [`${SITE_URL}/images/dedicated-fleet-highway.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: '24/7 Dispatch & Weekend Delivery',
      serviceType: 'After-hours and weekend freight dispatch',
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
        { '@type': 'ListItem', position: 3, name: '24/7 Dispatch & Weekend Delivery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: AFTER_HOURS_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function AfterHoursWeekendDispatchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AfterHoursDispatchPage />
    </>
  );
}
