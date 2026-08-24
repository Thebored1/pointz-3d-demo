/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Legacy service slugs -> Canonical service routes
      {
        source: '/services/moffett-delivery',
        destination: '/services/flatbed-moffett-transport',
        permanent: true,
      },
      {
        source: '/services/flatbed-transportation',
        destination: '/services/flatbed-moffett-transport',
        permanent: true,
      },
      {
        source: '/services/flatbed-trucking',
        destination: '/services/flatbed-moffett-transport',
        permanent: true,
      },
      {
        source: '/services/moffett',
        destination: '/services/flatbed-moffett-transport',
        permanent: true,
      },
      {
        source: '/services/equipment-delivery',
        destination: '/services/equipment-machinery-delivery',
        permanent: true,
      },
      {
        source: '/services/machinery-delivery',
        destination: '/services/equipment-machinery-delivery',
        permanent: true,
      },
      {
        source: '/services/equipment-transport',
        destination: '/services/equipment-machinery-delivery',
        permanent: true,
      },
      {
        source: '/services/dedicated-fleet',
        destination: '/services/dedicated-fleet-services',
        permanent: true,
      },
      {
        source: '/services/cross-border-freight',
        destination: '/services/dedicated-fleet-services',
        permanent: true,
      },
      {
        source: '/services/dry-van-transportation',
        destination: '/services/dedicated-fleet-services',
        permanent: true,
      },
      {
        source: '/services/warehouse-cross-dock',
        destination: '/services/warehouse-cross-dock-storage',
        permanent: true,
      },
      {
        source: '/services/cross-dock',
        destination: '/services/warehouse-cross-dock-storage',
        permanent: true,
      },
      {
        source: '/services/warehousing',
        destination: '/services/warehouse-cross-dock-storage',
        permanent: true,
      },
      {
        source: '/services/construction-material-delivery',
        destination: '/services/construction-material-hauling',
        permanent: true,
      },
      {
        source: '/services/building-material-distribution',
        destination: '/services/construction-material-hauling',
        permanent: true,
      },
      {
        source: '/services/expedited-same-day',
        destination: '/services/expedited-same-day-freight',
        permanent: true,
      },
      {
        source: '/services/expedited',
        destination: '/services/expedited-same-day-freight',
        permanent: true,
      },
      {
        source: '/services/same-day',
        destination: '/services/expedited-same-day-freight',
        permanent: true,
      },
      {
        source: '/services/healthcare-logistics',
        destination: '/services/healthcare-linen-logistics',
        permanent: true,
      },
      {
        source: '/services/healthcare-linen',
        destination: '/services/healthcare-linen-logistics',
        permanent: true,
      },
      {
        source: '/services/manufacturing-consumer-goods',
        destination: '/services/manufacturing-consumer-goods-freight',
        permanent: true,
      },
      {
        source: '/services/manufacturing',
        destination: '/services/manufacturing-consumer-goods-freight',
        permanent: true,
      },
      {
        source: '/services/last-mile-retail-delivery',
        destination: '/services/last-mile-delivery',
        permanent: true,
      },
      {
        source: '/services/last-mile',
        destination: '/services/last-mile-delivery',
        permanent: true,
      },
      {
        source: '/services/24-7-dispatch',
        destination: '/services/24-7-after-hours-weekend-dispatch',
        permanent: true,
      },
      {
        source: '/services/weekend-delivery',
        destination: '/services/24-7-after-hours-weekend-dispatch',
        permanent: true,
      },

      // Removed pages (old site) -> Closest relevant canonical route
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/career',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/need-a-truck',
        destination: '/get-a-quote',
        permanent: true,
      },
      {
        source: '/services/specialty-equipment',
        destination: '/fleet-and-equipment',
        permanent: true,
      },
      {
        source: '/services/warehouse-and-storage',
        destination: '/services/warehouse-cross-dock-storage',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/',
        permanent: true,
      },
      // Deleted design-experiment / preview / variation routes -> Canonical
      {
        source: '/about/dark-tech',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about/editorial',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about/industrial',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/preview',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/preview/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/variations',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/variations/:path*',
        destination: '/services',
        permanent: true,
      },

      // Core page aliases -> Canonical routes
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/fleet',
        destination: '/fleet-and-equipment',
        permanent: true,
      },
      {
        source: '/equipment',
        destination: '/fleet-and-equipment',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/get-a-quote',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/get-a-quote',
        permanent: true,
      },
      {
        source: '/get-quote',
        destination: '/get-a-quote',
        permanent: true,
      },
      {
        source: '/safety',
        destination: '/safety-compliance',
        permanent: true,
      },
      {
        source: '/compliance',
        destination: '/safety-compliance',
        permanent: true,
      },
      {
        source: '/areas-served',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/service-areas',
        permanent: true,
      },

      // Legacy static extensions (.html, .php)
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services.php',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fleet.html',
        destination: '/fleet-and-equipment',
        permanent: true,
      },
      {
        source: '/fleet.php',
        destination: '/fleet-and-equipment',
        permanent: true,
      },
      {
        source: '/quote.html',
        destination: '/get-a-quote',
        permanent: true,
      },
      {
        source: '/quote.php',
        destination: '/get-a-quote',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
