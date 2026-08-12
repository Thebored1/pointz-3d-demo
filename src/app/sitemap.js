import { SITE_URL, ROUTES } from '@/lib/site';

export default function sitemap() {
  const buildDate = new Date();
  
  return ROUTES.map(({ path, priority, lastModified, changeFrequency }) => {
    let resolvedDate = lastModified ? new Date(lastModified) : buildDate;
    let resolvedFreq = changeFrequency || (path === '/' ? 'weekly' : path.startsWith('/services') ? 'weekly' : 'monthly');

    return {
      url: `${SITE_URL}${path}`,
      lastModified: resolvedDate,
      changeFrequency: resolvedFreq,
      priority,
    };
  });
}

