import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { overviewServices } from './serviceEditorialData';
import { getRelatedGuides, GUIDE_PUBLISHED } from '@/lib/guides';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import './ResourceArticle.css';

const SERVICE_BY_HREF = Object.fromEntries(overviewServices.map((s) => [s.href, s]));

function Block({ b }) {
  if (b.h2) return <h2>{b.h2}</h2>;
  if (b.h3) return <h3>{b.h3}</h3>;
  if (b.p) return <p>{b.p}</p>;
  if (b.ul) return <ul>{b.ul.map((x, i) => <li key={i}>{x}</li>)}</ul>;
  if (b.ol) return <ol>{b.ol.map((x, i) => <li key={i}>{x}</li>)}</ol>;
  if (b.callout) return <aside className="rsc-callout">{b.callout}</aside>;
  return null;
}

export default function ResourceArticle({ guide }) {
  const pageUrl = `${SITE_URL}/resources/${guide.slug}`;
  const relatedGuides = getRelatedGuides(guide.slug);
  const relatedServices = (guide.related || [])
    .map((href) => SERVICE_BY_HREF[href])
    .filter(Boolean);

  const graph = [
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: guide.title,
      description: guide.metaDescription,
      image: `${SITE_URL}${guide.heroImage}`,
      datePublished: GUIDE_PUBLISHED,
      dateModified: guide.updated,
      articleSection: guide.category,
      inLanguage: 'en-CA',
      author: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
        { '@type': 'ListItem', position: 3, name: guide.shortTitle, item: pageUrl },
      ],
    },
  ];

  if (guide.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: guide.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph };

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
            <span className="rsc-cat">{guide.category}</span>
            <span className="rsc-dot">·</span>
            <span>{guide.readTime}</span>
          </div>
          <h1 className="rsc-title">{guide.title}</h1>
          <p className="rsc-dek">{guide.dek}</p>
        </div>
      </header>

      <div className="pz-container">
        <div className="rsc-hero-img">
          <Image
            src={guide.heroImage}
            alt={guide.heroAlt}
            fill
            sizes="(max-width: 900px) 100vw, 1000px"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <main className="pz-container rsc-body">
        {guide.body.map((b, i) => <Block key={i} b={b} />)}

        {guide.faqs?.length ? (
          <section className="rsc-faq">
            <h2>Frequently asked questions</h2>
            {guide.faqs.map((f) => (
              <div key={f.q} className="rsc-faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        ) : null}

        {relatedServices.length ? (
          <section className="rsc-related-services">
            <h2>Related services</h2>
            <div className="rsc-rs-grid">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="rsc-rs-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="rsc-card-link">Explore <ArrowUpRight size={14} /></span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rsc-cta">
          <div>
            <h2>Have freight that fits this?</h2>
            <p>Talk to dispatch for a straight answer on equipment, timing and rates.</p>
          </div>
          <div className="rsc-cta-actions">
            <Link href="/get-a-quote" className="pz-btn pz-btn-primary">Request a quote <ArrowUpRight size={18} /></Link>
            <Link href="/contact" className="pz-btn pz-btn-secondary">Contact dispatch</Link>
          </div>
        </section>
      </main>

      {relatedGuides.length ? (
        <section className="rsc-more">
          <div className="pz-container">
            <h2>More guides</h2>
            <div className="rsc-more-grid">
              {relatedGuides.map((g) => (
                <Link key={g.slug} href={`/resources/${g.slug}`} className="rsc-more-card">
                  <span className="rsc-cat">{g.category}</span>
                  <h3>{g.shortTitle}</h3>
                  <p>{g.excerpt}</p>
                  <span className="rsc-card-link">Read <ArrowUpRight size={14} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </div>
  );
}
