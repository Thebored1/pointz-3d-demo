import LtlFreightPage from '../../../components/LtlFreightPage';
import { LTL_FAQS } from '../../../components/ltlFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/less-than-truckload-ltl';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Less-Than-Truckload (LTL) Freight Ontario | Point Zero';
const DESCRIPTION =
  'Less-than-truckload (LTL) freight across the GTA & Ontario — partial loads consolidated through our Mississauga cross-dock on scheduled lanes. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['less-than-truckload','LTL freight Ontario','LTL shipping GTA','LTL carrier Toronto','freight consolidation','scheduled LTL'],
  alternates: {
    canonical: PAGE_PATH,
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
        alt: 'Point Zero Road Lines cross-dock loading docks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Less-than-truckload (LTL) freight across the GTA & Ontario — partial loads consolidated on scheduled lanes.',
    images: [`${SITE_URL}/images/warehouse-crossdock-docks.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Less-Than-Truckload (LTL) Freight',
      serviceType: 'Less-than-truckload / LTL freight',
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
        { '@type': 'ListItem', position: 3, name: 'Less-Than-Truckload (LTL) Freight', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: LTL_FAQS.map(([question, answer]) => ({
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
      <LtlFreightPage />
    </>
  );
}
