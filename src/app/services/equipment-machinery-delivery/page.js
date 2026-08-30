import EquipmentMachineryPage from '../../../components/EquipmentMachineryPage';
import { EQUIPMENT_FAQS } from '../../../components/equipmentFaqs';
import { SITE_URL } from '@/lib/site';

const PAGE_PATH = '/services/equipment-machinery-delivery';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = 'Equipment & Machinery Delivery GTA | Point Zero Road Lines';
const DESCRIPTION =
  'Equipment and machinery delivery across the GTA — flatbed transport with truck-mounted Moffett unloading (up to 5,500 lb), so eligible loads unload onsite. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'equipment delivery GTA',
    'machinery delivery GTA',
    'equipment transport Toronto',
    'Moffett equipment unloading',
    'commercial equipment delivery',
    'HVAC equipment delivery',
    'equipment delivery Mississauga',
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
        url: `${SITE_URL}/images/moffett-unloading-forklift.webp`,
        width: 1200,
        height: 630,
        alt: 'Point Zero Road Lines truck-mounted Moffett unloading freight onsite in the GTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Equipment and machinery delivery across the GTA — flatbed transport with truck-mounted Moffett unloading.',
    images: [`${SITE_URL}/images/moffett-unloading-forklift.webp`],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Equipment & Machinery Delivery',
      serviceType: 'Equipment and machinery delivery (flatbed + Moffett unloading)',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        '@id': `${SITE_URL}/#organization`,
        name: 'Point Zero Road Lines',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
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
        { '@type': 'ListItem', position: 3, name: 'Equipment & Machinery Delivery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: EQUIPMENT_FAQS.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function EquipmentMachineryDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EquipmentMachineryPage />
    </>
  );
}
