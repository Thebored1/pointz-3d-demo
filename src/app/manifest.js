import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/site';

// Web App Manifest. Next automatically emits <link rel="manifest"> in <head>.
// Icons reference the existing app-icon assets (icon.png 512x512, apple-icon.png 180x180).
// Colors mirror the site chrome (--c-black) so the mobile address bar / splash match.
export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: 'Point Zero',
    description: SITE_DESCRIPTION,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    lang: 'en-CA',
    dir: 'ltr',
    categories: ['business', 'logistics', 'transportation'],
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
