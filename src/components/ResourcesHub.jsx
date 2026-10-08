import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { GUIDE_LIST } from '@/lib/guides';
import { SITE_URL } from '@/lib/site';
import './ResourceArticle.css';

export default function ResourcesHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/resources#collection`,
        name: 'Freight & Logistics Resources',
        description:
          'Plain-language guides to Moffett delivery, flatbed and trailer types, LTL vs FTL, cross-docking, load securement and more.',
        url: `${SITE_URL}/resources`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        hasPart: GUIDE_LIST.map((g) => ({
          '@type': 'Article',
          headline: g.title,
          url: `${SITE_URL}/resources/${g.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/resources#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
        ],
      },
    ],
  };

  return (
    <div className="rsc">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <header className="rsc-head">
        <div className="pz-container">
          <Breadcrumbs />
          <div className="rsc-meta">
            <span className="rsc-cat">Resources &amp; Guides</span>
          </div>
          <h1 className="rsc-title">Freight &amp; logistics, explained</h1>
          <p className="rsc-dek">
            Straight-talking guides to how freight actually moves — Moffett and flatbed delivery,
            trailer types, LTL vs FTL, cross-docking and load securement in Ontario.
          </p>
        </div>
      </header>

      <main className="pz-container rsc-hub">
        <div className="rsc-hub-grid">
          {GUIDE_LIST.map((g) => (
            <Link key={g.slug} href={`/resources/${g.slug}`} className="rsc-hub-card">
              <span className="rsc-cat">{g.category}</span>
              <h2>{g.shortTitle}</h2>
              <p>{g.excerpt}</p>
              <span className="rsc-hub-foot">
                <span className="rsc-card-link">Read guide <ArrowUpRight size={14} /></span>
                <span className="rsc-readtime">{g.readTime}</span>
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
