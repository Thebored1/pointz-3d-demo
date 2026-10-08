import { ImageResponse } from 'next/og';
import { getCity, CITY_SLUGS } from '@/lib/cities';

// Branded, dynamically generated Open Graph card per city — replaces a static
// photo with an on-brand template (wordmark + city name + service line + authority).
export const alt = 'Point Zero Road Lines — freight, Moffett & flatbed delivery';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export default async function Image({ params }) {
  const { city } = await params;
  const c = getCity(city);
  const name = c ? c.name : 'Ontario';
  const region = c ? c.region : 'Province of Ontario';
  const lead = c && c.slug === 'ontario' ? 'Freight & Moffett delivery across' : 'Freight & Moffett delivery in';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ width: '48px', height: '8px', background: '#00b9f2' }} />
          <div style={{ color: '#fafaf8', fontSize: '30px', fontWeight: 700, letterSpacing: '2px' }}>
            POINT ZERO ROAD LINES
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#a0a0a0', fontSize: '32px', marginBottom: '12px' }}>{lead}</div>
          <div style={{ color: '#fafaf8', fontSize: '104px', fontWeight: 800, lineHeight: 1 }}>{name}</div>
          <div style={{ color: '#00b9f2', fontSize: '34px', marginTop: '28px' }}>
            Moffett · Flatbed · Dedicated Fleet · Cross-Dock
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b6b6b', fontSize: '24px' }}>
          <div style={{ display: 'flex' }}>{region}</div>
          <div style={{ display: 'flex' }}>USDOT 3983391 · MC 1492151 · Since 2006</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
