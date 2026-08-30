import ConstructionMaterialPage from '../../../components/ConstructionMaterialPage';
import { CONSTRUCTION_FAQS } from '../../../components/constructionFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/construction-material-hauling';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Construction Material Delivery Toronto & GTA | Point Zero Road Lines';
const DESCRIPTION =
  'Lumber, drywall, roofing, brick, steel & precast delivered and spotted on GTA job sites — Moffett-equipped for sites with no dock. Request a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'construction material delivery',
    'building material delivery GTA',
    'job site material delivery Toronto',
    'Moffett construction delivery',
    'lumber delivery GTA',
    'flatbed construction hauling',
    'construction site delivery Ontario',
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
        url: `${SITE_URL}/images/construction-blue-hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines delivering building materials on a construction site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Lumber, drywall, roofing, brick, steel & precast delivered and spotted on GTA job sites — Moffett-equipped for dock-free sites.',
    images: [`${SITE_URL}/images/construction-blue-hero.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Construction Material Hauling & Delivery',
      serviceType: 'Construction material delivery',
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
        { '@type': 'City', name: 'Vaughan' },
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
        { '@type': 'ListItem', position: 3, name: 'Construction Material Hauling', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: CONSTRUCTION_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function ConstructionMaterialHaulingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ConstructionMaterialPage />
    </>
  );
}
