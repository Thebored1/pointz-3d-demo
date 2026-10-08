import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { overviewServices } from '@/components/serviceEditorialData';
import { CITIES } from '@/lib/cities';
import './not-found.css';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

const topServices = [
  'flatbed-moffett-transport',
  'dedicated-fleet-services',
  'warehouse-cross-dock-storage',
  'construction-material-hauling',
  'expedited-same-day-freight',
  'last-mile-delivery',
]
  .map((slug) => overviewServices.find((s) => s.href === `/services/${slug}`))
  .filter(Boolean);

const cities = Object.values(CITIES);

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pz-404">
        <div className="pz-container pz-404-inner">
          <span className="pz-404-code">404</span>
          <h1>Page not found</h1>
          <p className="pz-404-lead">
            The page you’re looking for moved or never existed. Here’s where most people head next —
            or call dispatch any time at{' '}
            <a href="tel:+16476801300">(647) 680-1300</a>.
          </p>

          <div className="pz-404-actions">
            <Link href="/" className="pz-btn pz-btn-primary">Back to home</Link>
            <Link href="/get-a-quote" className="pz-btn pz-btn-secondary">Get a quote</Link>
            <Link href="/contact" className="pz-btn pz-btn-secondary">Contact dispatch</Link>
          </div>

          <div className="pz-404-cols">
            <div>
              <h2>Popular services</h2>
              <ul>
                {topServices.map((s) => (
                  <li key={s.href}><Link href={s.href}>{s.title}</Link></li>
                ))}
                <li><Link href="/services">All services →</Link></li>
              </ul>
            </div>
            <div>
              <h2>Service areas</h2>
              <ul>
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/service-areas/${c.slug}`}>
                      {c.slug === 'ontario' ? 'Ontario (province-wide)' : c.name}
                    </Link>
                  </li>
                ))}
                <li><Link href="/service-areas">All service areas →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
