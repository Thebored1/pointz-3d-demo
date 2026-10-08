import ServiceEditorialPage from '@/components/ServiceEditorialPage';
import { SITE_URL, SITE_NAME, CONTACT_INFO } from '@/lib/site';

const PAGE_PATH = '/careers';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata = {
  title: { absolute: `Careers & Driver Jobs | ${SITE_NAME}` },
  description:
    'Drive with Point Zero Road Lines — AZ/DZ company drivers, owner-operators, Moffett operators, dispatch and warehouse roles across the GTA. Based in Mississauga since 2006.',
  keywords: [
    'trucking jobs GTA',
    'AZ driver jobs Mississauga',
    'owner operator Ontario',
    'Moffett operator jobs',
    'driving jobs Mississauga',
    'dispatch jobs Ontario',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: 'website',
    url: PAGE_PATH,
    siteName: SITE_NAME,
    locale: 'en_CA',
    title: `Careers & Driver Jobs | ${SITE_NAME}`,
    description:
      'AZ/DZ company drivers, owner-operators, Moffett operators, dispatch and warehouse roles across the GTA. Apply to Point Zero Road Lines.',
    images: [
      { url: `${SITE_URL}/images/home-driver-cabin.webp`, width: 1200, height: 630, alt: 'A Point Zero Road Lines driver in the cab' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Careers & Driver Jobs | ${SITE_NAME}`,
    description: 'AZ/DZ drivers, owner-operators, Moffett operators, dispatch and warehouse roles across the GTA.',
    images: [`${SITE_URL}/images/home-driver-cabin.webp`],
  },
};

const faqs = [
  { title: 'What licence do I need to drive for Point Zero?', desc: 'Most of our highway and flatbed work requires a valid Ontario AZ licence with a clean abstract; some local and straight-truck routes suit DZ drivers. Moffett work needs rough-terrain forklift certification, which we help arrange for the right candidate.' },
  { title: 'Do you hire owner-operators?', desc: 'Yes. We run dedicated lanes and specialized freight that suit owner-operators looking for steady, scheduled work out of the GTA. Reach out with your equipment details and the lanes you prefer.' },
  { title: 'Where are you based and where would I run?', desc: 'Our terminal is at 1566 Bonhill Road, Mississauga, with daily work across the Greater Toronto Area and Ontario, plus cross-border lanes into the U.S. for the right drivers.' },
  { title: 'How do I apply?', desc: `Email your resume and licence class to ${CONTACT_INFO.email} or call dispatch at ${CONTACT_INFO.phone}. Tell us the role you want and your availability, and we'll follow up.` },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      name: 'Careers & Driver Jobs',
      description: metadata.description,
      url: PAGE_URL,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.title,
        acceptedAnswer: { '@type': 'Answer', text: f.desc },
      })),
    },
  ],
};

export default function CareersPage() {
  return (
    <ServiceEditorialPage
      badge="CAREERS"
      badgeAlt="DRIVER & OPERATIONS JOBS"
      titleLine1="DRIVE WITH POINT ZERO —"
      titleAccent="GTA DRIVER & OPERATOR JOBS."
      description="We've run dedicated fleet, flatbed and Moffett work across the GTA since 2006 — and we're always looking for drivers and operators who take the job seriously. Company drivers, owner-operators and operations staff, all dispatched from our Mississauga terminal."
      imageKey="safety-compliance"
      schema={schema}
      stats={[
        { value: 'AZ / DZ', label: 'Company driver roles' },
        { value: 'O/O', label: 'Owner-operators welcome' },
        { value: 'GTA', label: 'Mississauga HQ + Ontario lanes' },
        { value: '24/7', label: 'Live dispatch support' },
      ]}
      primarySection={{
        num: '01',
        label: 'Open role types',
        title: 'Who we hire',
        desc: 'Point Zero runs a company-owned fleet with specialized equipment, so there is a range of work beyond standard highway driving.',
        columns: 4,
        items: [
          { icon: 'Truck', title: 'AZ / DZ Company Drivers', desc: 'Dedicated lanes and specialized freight across the GTA and Ontario, with consistent, scheduled work.' },
          { icon: 'Forklift', title: 'Moffett Operators', desc: 'Flatbed delivery with a truck-mounted forklift — rough-terrain certification supported for the right candidate.' },
          { icon: 'Users', title: 'Owner-Operators', desc: 'Steady dedicated runs out of the GTA for operators who bring their own equipment.' },
          { icon: 'Clock', title: 'Dispatch & Warehouse', desc: 'Operations roles at our Mississauga terminal — dispatch, cross-dock and yard positions.' },
        ],
      }}
      darkSection={{
        num: '02',
        label: 'Why drive with us',
        title: 'What the account looks like',
        desc: 'A company-owned fleet, specialized work, and a dispatch desk that actually answers.',
        items: [
          { icon: 'MapPin', title: 'GTA-based lanes', desc: 'Most work runs out of our Mississauga terminal across the Greater Toronto Area and Ontario.' },
          { icon: 'Layers', title: 'Specialized equipment', desc: 'Flatbed, Moffett, dry van, roll-tite and dedicated units — not just one kind of trailer.' },
          { icon: 'Clock', title: '24/7 live dispatch', desc: 'A real dispatcher on the line nights and weekends, not a voicemail box.' },
          { icon: 'Shield', title: 'Licensed & insured carrier', desc: 'USDOT 3983391 · MC 1492151, operating since 2006.' },
          { icon: 'Route', title: 'Dedicated, scheduled work', desc: 'Repeatable lanes and accounts rather than chasing one-off loads.' },
          { icon: 'Globe', title: 'Cross-border options', desc: 'U.S. lanes available for drivers with the right credentials.' },
        ],
      }}
      faqSection={{ num: '04', label: 'FAQ', title: 'Careers questions', items: faqs }}
      cta={{
        badge: 'NOW HIRING',
        titleLine1: 'READY TO JOIN',
        titleAccent: 'THE FLEET?',
        desc: `Email your resume and licence class to ${CONTACT_INFO.email}, or call dispatch at ${CONTACT_INFO.phone}.`,
      }}
      related={[
        { title: 'About Point Zero', href: '/about', desc: 'Who we are, our terminal, and how we run freight across the GTA since 2006.' },
        { title: 'Fleet & Equipment', href: '/fleet-and-equipment', desc: 'The trucks, trailers and Moffett units you would be running.' },
        { title: 'Contact dispatch', href: '/contact', desc: 'Reach our Mississauga operations desk to apply or ask about roles.' },
      ]}
    />
  );
}
