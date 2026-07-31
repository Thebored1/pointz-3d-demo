import { SITE_URL, ROUTES } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
