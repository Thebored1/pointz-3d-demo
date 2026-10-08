import { execFileSync } from 'node:child_process';
import { SITE_URL, ROUTES } from '@/lib/site';
import { CITIES } from '@/lib/cities';
import { GUIDE_LIST } from '@/lib/guides';

// Last commit date (ISO) that touched a file, or null. Runs at build time when
// the sitemap is prerendered; git history is available there. Falls back to null
// on a shallow clone with no record for the file, or if git isn't available.
function gitLastModified(relFile) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relFile], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

// Map a route path to the source file whose git date best represents its content.
function sourceFileFor(path) {
  if (path.startsWith('/service-areas/')) return 'src/lib/cities.js';
  if (path.startsWith('/resources/')) return 'src/lib/guides.js';
  if (path === '/') return 'src/app/page.js';
  return `src/app${path}/page.js`;
}

export default function sitemap() {
  const buildDate = new Date();

  // City service-area pages live in /lib/cities.js so adding a city needs only
  // one edit; they're appended here with their hero image.
  const cityRoutes = Object.values(CITIES).map((c) => ({
    path: `/service-areas/${c.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
    image: c.ogImage,
  }));

  // Resources hub + evergreen guide articles (content lives in /lib/guides.js).
  const guideRoutes = [
    { path: '/resources', priority: 0.7, changeFrequency: 'monthly' },
    ...GUIDE_LIST.map((g) => ({
      path: `/resources/${g.slug}`,
      priority: 0.6,
      changeFrequency: 'yearly',
      image: g.heroImage,
    })),
  ];

  return [...ROUTES, ...cityRoutes, ...guideRoutes].map(({ path, priority, lastModified, changeFrequency, image }) => {
    let resolvedDate = lastModified
      ? new Date(lastModified)
      : gitLastModified(sourceFileFor(path)) || buildDate;
    let resolvedFreq = changeFrequency || (path === '/' ? 'weekly' : path.startsWith('/services') ? 'weekly' : 'monthly');

    return {
      url: `${SITE_URL}${path}`,
      lastModified: resolvedDate,
      changeFrequency: resolvedFreq,
      priority,
      ...(image ? { images: [`${SITE_URL}${image}`] } : {}),
    };
  });
}

