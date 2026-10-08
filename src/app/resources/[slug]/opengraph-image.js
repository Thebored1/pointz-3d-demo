import { ImageResponse } from 'next/og';
import { getGuide, GUIDE_SLUGS } from '@/lib/guides';

// Branded, dynamically generated Open Graph card per guide.
export const alt = 'Point Zero Road Lines — freight & logistics guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  const title = g ? g.shortTitle : 'Freight & Logistics Guides';
  const category = g ? g.category : 'Resources';

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
          <div style={{ color: '#00b9f2', fontSize: '28px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '18px' }}>
            {`${category} · Guide`}
          </div>
          <div style={{ color: '#fafaf8', fontSize: '72px', fontWeight: 800, lineHeight: 1.08 }}>{title}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b6b6b', fontSize: '24px' }}>
          <div style={{ display: 'flex' }}>www.pointzeroroadlines.com/resources</div>
          <div style={{ display: 'flex' }}>USDOT 3983391 · MC 1492151</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
