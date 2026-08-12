import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { SITE_NAME, CONTACT_INFO } from '@/lib/site';

export const metadata = {
  title: { absolute: `Terms of Service | ${SITE_NAME}` },
  description: `Standard carrier terms of service and transportation conditions for ${SITE_NAME}.`,
  alternates: {
    canonical: '/terms-of-service',
    languages: {
      'en-CA': '/terms-of-service',
      'en-US': '/terms-of-service',
      'x-default': '/terms-of-service',
    },
  },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Standard carrier terms of service and transportation conditions for ${SITE_NAME}.`,
    url: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pz-about">
      <Navbar />
      <main style={{ padding: '8rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-main, #0a0a0a)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Terms of Service</h1>
        <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '0.95rem' }}>Last updated: August 12, 2026</p>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>1. Agreement to Terms</h2>
          <p>
            By accessing our website or contracting freight services with {SITE_NAME}, you agree to be bound by these Terms of Service, applicable carrier authorities ({CONTACT_INFO.usdot}, {CONTACT_INFO.mc}), and standard commercial transport laws in Ontario and North America.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>2. Freight Transportation Services</h2>
          <p>
            {SITE_NAME} operates dedicated fleet, flatbed, step-deck, Moffett delivery, dry van, and cross-dock warehousing operations. All load acceptances, transit schedules, and specialized job-site deliveries are subject to vehicle availability, site access clearance, safety compliance, and legal weight thresholds.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>3. Rates & Payment</h2>
          <p>
            Freight rate quotes provided by our dispatch team are valid based on the specific load dimensions, lane specifications, and timeframe detailed at the time of quotation. Additional charges may apply for extended detention, job-site access delays beyond standard terms, or unauthorized oversized weight adjustments.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>4. Safety & Job-Site Access</h2>
          <p>
            For Moffett offloading and delivery, shippers and receivers are responsible for providing clear, safe overhead clearance and ground access for all-wheel-drive rough-terrain forklifts and heavy flatbeds.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>5. Contact Operations</h2>
          <p>
            For operations or terms inquiries, contact our dispatch team:
          </p>
          <div style={{ marginTop: '1rem', padding: '1.25rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
            <p><strong>{SITE_NAME} Operations</strong></p>
            <p>{CONTACT_INFO.address}</p>
            <p>Direct: {CONTACT_INFO.phone}</p>
            <p>Email: {CONTACT_INFO.email}</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <Link href="/" style={{ textDecoration: 'none', fontWeight: 600, color: 'inherit' }}>← Return to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
