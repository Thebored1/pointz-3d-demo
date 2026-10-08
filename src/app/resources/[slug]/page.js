import { notFound } from 'next/navigation';
import ResourceArticle from '@/components/ResourceArticle';
import { SITE_NAME } from '@/lib/site';
import { getGuide, GUIDE_SLUGS } from '@/lib/guides';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};

  const path = `/resources/${g.slug}`;

  // og:image / twitter:image come from the branded opengraph-image.js in this
  // segment, so no `images` are set here.
  return {
    title: { absolute: `${g.metaTitle} | ${SITE_NAME}` },
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: g.metaTitle,
      description: g.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: g.metaTitle,
      description: g.metaDescription,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  return <ResourceArticle guide={g} />;
}
