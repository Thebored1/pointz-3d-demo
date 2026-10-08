import ServiceEditorialPage from '@/components/ServiceEditorialPage';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const PAGE_PATH = '/services/cross-border-freight';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = 'Cross-Border Freight Ontario to USA | Point Zero';
const DESCRIPTION =
  'Cross-border trucking from Ontario to the U.S. — FTL, flatbed, Moffett and dedicated lanes under USDOT 3983391 / MC 1492151, with customs coordination. Get a quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'cross border freight Ontario',
    'cross border trucking Mississauga',
    'Ontario to USA freight',
    'Canada US cross border carrier',
    'cross border FTL',
    'bonded freight Ontario',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: 'website',
    url: PAGE_PATH,
    siteName: SITE_NAME,
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/images/dedicated-fleet-highway.webp`, width: 1200, height: 630, alt: 'Point Zero Road Lines cross-border freight on the highway' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/dedicated-fleet-highway.webp`],
  },
};

const faqs = [
  { title: 'Do you have U.S. operating authority?', desc: 'Yes. Point Zero Road Lines operates under USDOT 3983391 and MC 1492151, so we can run freight across the Canada–U.S. border, not just domestically within Ontario.' },
  { title: 'Which border crossings do you use?', desc: 'Primarily the Ontario gateways: Detroit–Windsor (Ambassador Bridge / Gordie Howe), Port Huron–Sarnia (Blue Water Bridge) and Buffalo–Fort Erie (Peace Bridge), chosen by lane and destination.' },
  { title: 'What U.S. destinations do you cover?', desc: 'We run lanes from the GTA into the nearby industrial states — Michigan, New York, Ohio and Pennsylvania — with other destinations by arrangement. Share your pickup and delivery points for a lane-specific quote.' },
  { title: 'Do you handle customs paperwork?', desc: 'We coordinate the carrier side of the crossing (PARS/PAPS and the documentation the border needs). Brokerage and duties are arranged with your customs broker; we make sure the freight and paperwork line up so the truck clears cleanly.' },
  { title: 'What can you move cross-border?', desc: 'Full-truckload and dedicated freight on flatbed, dry van or Moffett-equipped trailers — manufacturing inputs, building products, machinery and general commercial freight. Time-sensitive loads can run expedited.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Cross-Border Freight (Ontario to USA)',
      description: DESCRIPTION,
      serviceType: 'Cross-border trucking and freight',
      provider: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
      ],
      offers: { '@type': 'Offer', priceCurrency: 'CAD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/get-a-quote` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Cross-Border Freight', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.title, acceptedAnswer: { '@type': 'Answer', text: f.desc } })),
    },
  ],
};

export default function CrossBorderFreightPage() {
  return (
    <ServiceEditorialPage
      relatedKey="cross-border-freight"
      schema={schema}
      badge="SERVICE"
      badgeAlt="CROSS-BORDER FREIGHT"
      titleLine1="CROSS-BORDER FREIGHT,"
      titleAccent="ONTARIO TO THE U.S."
      description="Point Zero Road Lines carries freight across the Canada–U.S. border, not just within Ontario. Under USDOT 3983391 and MC 1492151 authority, we run full-truckload, flatbed, Moffett and dedicated lanes from the GTA into Michigan, New York, Ohio and Pennsylvania — with the carrier-side customs coordination to clear the border cleanly."
      stats={[
        { value: 'USDOT / MC', label: '3983391 · 1492151 authority' },
        { value: '3 gateways', label: 'Windsor · Sarnia · Fort Erie' },
        { value: 'FTL + Flatbed', label: 'Dry van & Moffett too' },
        { value: '24/7', label: 'Live dispatch' },
      ]}
      primarySection={{
        num: '01',
        label: 'Cross-border services',
        title: 'How we run the border',
        desc: 'The equipment and modes we take stateside, each tied to our domestic service pages.',
        columns: 4,
        items: [
          { icon: 'Route', title: 'Full Truckload (FTL)', href: '/services/full-truckload-ftl', desc: 'Dedicated trailers point-to-point across the border for time- and security-sensitive freight.' },
          { icon: 'Forklift', title: 'Flatbed & Moffett', href: '/services/flatbed-moffett-transport', desc: 'Open-deck and self-unloading freight for machinery and building products delivered U.S.-side.' },
          { icon: 'Users', title: 'Dedicated Lanes', href: '/services/dedicated-fleet-services', desc: 'Scheduled cross-border capacity assigned to shippers running regular U.S. lanes.' },
          { icon: 'Timer', title: 'Expedited', href: '/services/expedited-same-day-freight', desc: 'Priority cross-border runs when a shipment can’t wait on a standard schedule.' },
        ],
      }}
      darkSection={{
        num: '02',
        label: 'Corridors & crossings',
        title: 'The lanes we run',
        desc: 'Ontario gateways and the U.S. industrial states on the other side of them.',
        items: [
          { icon: 'Globe', title: 'Detroit–Windsor', desc: 'Ambassador Bridge and the Gordie Howe crossing into Michigan and the U.S. Midwest.' },
          { icon: 'Navigation', title: 'Port Huron–Sarnia', desc: 'Blue Water Bridge via the 402 for Michigan and westbound lanes.' },
          { icon: 'MapPin', title: 'Buffalo–Fort Erie', desc: 'Peace Bridge down the QEW for New York and the U.S. Northeast.' },
          { icon: 'Factory', title: 'Michigan & Ohio', desc: 'Automotive and manufacturing lanes into the Great Lakes industrial belt.' },
          { icon: 'Route', title: 'New York & Pennsylvania', desc: 'Northeast distribution and building-product destinations.' },
          { icon: 'CheckCircle', title: 'Customs coordination', desc: 'PARS/PAPS and carrier-side documentation lined up with your broker so the truck clears.' },
        ],
      }}
      faqSection={{ num: '04', label: 'FAQ', title: 'Cross-border freight questions', items: faqs }}
      cta={{
        titleLine1: 'SHIPPING ACROSS',
        titleAccent: 'THE BORDER?',
        desc: 'Tell us the lane and the freight — dispatch will quote the crossing and the equipment.',
      }}
    />
  );
}
