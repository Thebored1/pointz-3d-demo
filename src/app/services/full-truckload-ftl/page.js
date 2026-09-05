import FullTruckloadPage from '../../../components/FullTruckloadPage';
import { FTL_FAQS } from '../../../components/fullTruckloadFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/full-truckload-ftl';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Full Truckload (FTL) Shipping Ontario | Point Zero Road Lines';
const DESCRIPTION =
  'Full-truckload (FTL) freight across the GTA, Ontario & cross-border — a dedicated trailer point-to-point on flatbed, dry van or Moffett. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['full truckload','FTL shipping Ontario','full truckload carrier GTA','FTL trucking Toronto','dedicated truckload','cross-border FTL'],
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
        alt: 'Point Zero Road Lines truck on the open highway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Full-truckload (FTL) freight across the GTA, Ontario & cross-border — a dedicated trailer, direct point-to-point.',
    images: [`${SITE_URL}/images/dedicated-fleet-highway.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Full Truckload (FTL) Shipping',
      serviceType: 'Full truckload / FTL freight',
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
        { '@type': 'ListItem', position: 3, name: 'Full Truckload (FTL) Shipping', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: FTL_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FullTruckloadPage />
    </>
  );
}
