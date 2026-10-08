import { notFound } from 'next/navigation';
import ServiceEditorialPage from '@/components/ServiceEditorialPage';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import { getCity, getCityRelated, CITY_SLUGS } from '@/lib/cities';

// Statically prerender one page per known city; 404 anything else.
export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};

  const path = `/service-areas/${c.slug}`;

  // og:image / twitter:image are supplied by the branded opengraph-image.js in
  // this segment, so no `images` are set here (avoids a duplicate og:image).
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: path,
      languages: { 'en-CA': path, 'en-US': path, 'x-default': path },
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_CA',
      url: path,
      title: c.metaTitle,
      description: c.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function CityServiceAreaPage({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const pageUrl = `${SITE_URL}/service-areas/${c.slug}`;
  const serviceName = `Moffett, Flatbed & Freight Delivery in ${c.name}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: serviceName,
        description: c.metaDescription,
        serviceType: 'Freight transportation and Moffett delivery',
        provider: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
        areaServed: [
          { '@type': 'City', name: c.name },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
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
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
          { '@type': 'ListItem', position: 3, name: c.name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.title,
          acceptedAnswer: { '@type': 'Answer', text: f.desc },
        })),
      },
    ],
  };

  return (
    <ServiceEditorialPage
      badge={c.badge}
      badgeAlt={c.badgeAlt}
      titleLine1={c.titleLine1}
      titleAccent={c.titleAccent}
      description={c.description}
      stats={c.stats}
      primarySection={c.primary}
      darkSection={c.dark}
      faqSection={{
        num: '05',
        label: 'FAQ',
        title: `${c.name} delivery questions`,
        items: c.faqs,
      }}
      cta={c.cta}
      schema={schema}
      related={getCityRelated(c.slug)}
      imageKey={c.imageKey}
    />
  );
}
