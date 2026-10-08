import DryVanPage from '../../../components/DryVanPage';
import { DRY_VAN_FAQS } from '../../../components/dryVanFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/dry-van-transportation';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Dry Van Transportation Ontario | Point Zero Road Lines';
const DESCRIPTION =
  'Enclosed dry van freight across the GTA, Ontario & cross-border — company-owned trailers, FTL or scheduled LTL, weather-protected. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['dry van transportation','dry van trucking Ontario','enclosed trailer freight GTA','dry van carrier Toronto','FTL LTL dry van','cross-border dry van'],
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
        url: `${SITE_URL}/images/highway-trailer.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines dry van trailer on the highway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Enclosed dry van freight across the GTA & Ontario — company-owned trailers, FTL or scheduled LTL, weather-protected.',
    images: [`${SITE_URL}/images/highway-trailer.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Dry Van Transportation',
      serviceType: 'Dry van / enclosed trailer freight',
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
        { '@type': 'ListItem', position: 3, name: 'Dry Van Transportation', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: DRY_VAN_FAQS.map(([question, answer]) => ({
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
      <DryVanPage />
    </>
  );
}
