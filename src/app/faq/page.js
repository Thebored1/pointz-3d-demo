import ServiceEditorialPage from '../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Frequently Asked Questions | Point Zero Road Lines',
  description: 'Common questions about Moffett delivery, dedicated fleet services, flatbed transport, warehousing, rates, and 24/7 dispatch in Ontario.',
};

const faqItems = [
  { icon: 'Forklift', title: 'What is Moffett delivery and how does it work?', desc: 'A Moffett is an all-wheel-drive forklift that mounts to the rear of our flatbed trailers. When the truck arrives at your delivery point, the driver dismounts the Moffett in under two minutes and unloads your cargo directly to the job site, driveway, or work area — no loading dock or site crane required.' },
  { icon: 'MapPin', title: 'What areas in Ontario and North America do you serve?', desc: 'Our core service area covers the Greater Toronto Area (Mississauga, Brampton, Bolton, Toronto, Vaughan, Markham, Oakville, Burlington, Milton, Caledon, Richmond Hill) and across Ontario (Hamilton, Kitchener-Waterloo, London, Ottawa). We also operate registered cross-border lanes into the U.S. under USDOT 3983391 and MC 1492151.' },
  { icon: 'Shield', title: 'How does dedicated fleet service work?', desc: 'We assign dedicated company-owned tractors, flatbeds, dry vans, or Moffett units along with professional drivers exclusively to your account. You get the reliable capacity and custom scheduling of a private fleet without the capital expenditure, maintenance, or driver hiring overhead.' },
  { icon: 'Clock', title: 'Do you offer after-hours and weekend delivery?', desc: 'Yes. Our live dispatch operates 24/7/365, and our fleet delivers freight on Saturdays, Sundays, and overnight shifts to keep continuous manufacturing lines and early morning construction sites on schedule.' },
  { icon: 'Warehouse', title: 'Where is your warehouse located and what services are offered?', desc: 'Our central facility is at 1566 Bonhill Road, Mississauga. We offer rapid trailer-to-trailer cross-docking, short and long-term pallet storage, freight consolidation, and integrated local fleet dispatch under one roof.' },
  { icon: 'Briefcase', title: 'What industries do you specialize in?', desc: 'Healthcare and linen operations, manufacturing, consumer goods, and construction, alongside general freight for the GTA and Southern Ontario.' },
  { icon: 'Shield', title: 'Is Point Zero Road Lines licensed and insured?', desc: 'Yes — we operate under USDOT 3983391 and MC 1492151 authority, and are licensed and insured for both domestic and cross-border freight.' },
  { icon: 'Package', title: 'Do you handle oversized or non-standard freight?', desc: 'Yes — our flatbed and Moffett-equipped fleet is built for exactly this kind of freight.' },
  { icon: 'Timer', title: 'How quickly can I get a freight quote?', desc: 'Submit your lane and load specs through our online quote form or call dispatch at (905) 291-0325. We provide transparent quotes the same business day — usually within two hours.' },
  { icon: 'Zap', title: 'How quickly can you respond to a same-day or urgent delivery request?', desc: 'Through our Expedited & Same-Day Freight service, we can often accommodate urgent GTA routes with enough lead time — call or request a quote with your timeline for a direct answer.' },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: { '@type': 'Answer', text: item.desc },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceEditorialPage
        relatedKey="faq"
        badge="KNOWLEDGE BASE"
        badgeAlt="FREQUENTLY ASKED QUESTIONS"
        titleLine1="COMMON QUESTIONS."
        titleAccent="STRAIGHT ANSWERS."
        description="Learn how Point Zero Road Lines handles specialized Moffett delivery, dedicated fleet operations, warehousing, expedited transport, and 24/7 dispatch across Ontario."
        heroImage="/images/about-fleet-lineup.webp"
        heroAlt="Point Zero Road Lines fleet lined up"
        stats={[
          { value: '2006', label: 'Operating Since' },
          { value: '24/7', label: 'Live Support' },
          { value: '2 hrs', label: 'Average Quote Turn' },
          { value: '100%', label: 'Dedicated Focus' },
        ]}
        primarySection={{
          num: '01',
          label: 'Frequently Asked Questions',
          title: 'Everything you need to know about our service',
          desc: 'Clear, straightforward answers to the most common questions our shippers and logistics partners ask.',
          columns: 2,
          items: faqItems,
        }}
        gallery={[
          { src: '/images/warehouse-crossdock-fleet2.webp', alt: 'Moffett flatbed truck', span: 'main' },
          { src: '/images/warehouse-crossdock-facility.webp', alt: 'Mississauga terminal facility' },
          { src: '/images/dedicated-fleet-highway.webp', alt: 'Highway freight transport' },
        ]}
        cta={{
          titleLine1: 'HAVE A QUESTION THAT',
          titleAccent: 'IS NOT LISTED HERE?',
          desc: 'Reach out to our dispatch team directly at (905) 291-0325 or send an online inquiry — we are happy to assist.',
        }}
      />
    </>
  );
}
