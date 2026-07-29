import Link from 'next/link';

export default function PreviewBar({ active }) {
  return (
    <div className="sv-var-bar">
      <span>Preview · Services overview</span>
      <div className="sv-var-links">
        <Link href="/services/variations">All</Link>
        <Link href="/services/variations/a" className={active === 'a' ? 'active' : ''}>A Editorial</Link>
        <Link href="/services/variations/b" className={active === 'b' ? 'active' : ''}>B Industrial</Link>
        <Link href="/services/variations/c" className={active === 'c' ? 'active' : ''}>C Catalog</Link>
        <Link href="/services/variations/d" className={active === 'd' ? 'active' : ''}>D About-style</Link>
      </div>
    </div>
  );
}
