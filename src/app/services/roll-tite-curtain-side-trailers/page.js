import RollTiteCurtainSidePage from '../../../components/RollTiteCurtainSidePage';
import { ROLL_TITE_FAQS } from '../../../components/rollTiteFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/roll-tite-curtain-side-trailers';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Roll-Tite & Curtain-Side Trailer Transport | Point Zero';
const DESCRIPTION =
  'Roll-tite & curtain-side trailer transport across the GTA & Ontario — side and overhead loading with weather-tight protection for building materials. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['roll-tite trailer','curtain-side trailer','roll tite transport Ontario','curtain side trucking GTA','weather-protected flatbed','side-loading trailer'],
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
        url: `${SITE_URL}/images/flatbed-blue-transport.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines curtain-side flatbed transport on route',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Roll-tite & curtain-side trailers across the GTA & Ontario — side-loading with weather-tight protection.',
    images: [`${SITE_URL}/images/flatbed-blue-transport.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Roll-Tite & Curtain-Side Trailer Transport',
      serviceType: 'Roll-tite / curtain-side trailer freight',
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
        { '@type': 'ListItem', position: 3, name: 'Roll-Tite & Curtain-Side Trailers', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: ROLL_TITE_FAQS.map(([question, answer]) => ({
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
      <RollTiteCurtainSidePage />
    </>
  );
}
