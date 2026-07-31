import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FaqList from './FaqList';
import { faqs } from './faqData';
import './FaqPage.css';

export const metadata = {
  title: { absolute: 'Frequently Asked Questions | Point Zero Road Lines' },
  description:
    "Answers to common questions about Point Zero Road Lines' trucking services, service area, equipment, live tracking and how to request a quote.",
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ',
    description:
      "Answers to common questions about Point Zero Road Lines' trucking services, service area, equipment, live tracking and how to request a quote.",
    url: '/faq',
  },
};

// FAQPage structured data — lets Google surface these answers directly in
// search results. Generated from the same array the page renders, so the
// markup can never describe questions the page does not show.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="faq-main">
        <div className="pz-container">
          <header className="faq-header">
            <p className="faq-label">FAQ</p>
            <h1 className="faq-title">
              Questions, <span className="text-cyan italic">answered.</span>
            </h1>
            <p className="faq-intro">
              The things shippers ask us most — about Moffett delivery, coverage,
              tracking and how we run. If yours is not here, ask us directly.
            </p>
          </header>

          <FaqList />

          <div className="faq-footer">
            <p>Still have questions?</p>
            <div className="faq-footer-actions">
              <Link href="/contact-us" className="faq-btn faq-btn-primary">Contact us</Link>
              <Link href="/get-a-quote" className="faq-btn faq-btn-line">Get a quote</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
