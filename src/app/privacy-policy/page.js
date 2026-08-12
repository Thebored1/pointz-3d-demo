import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { SITE_NAME, CONTACT_INFO } from '@/lib/site';

export const metadata = {
  title: { absolute: `Privacy Policy | ${SITE_NAME}` },
  description: `Privacy policy and data handling practices for ${SITE_NAME}. Learn how we protect your information.`,
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en-CA': '/privacy-policy',
      'en-US': '/privacy-policy',
      'x-default': '/privacy-policy',
    },
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy policy and data handling practices for ${SITE_NAME}. Learn how we protect your information.`,
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pz-about">
      <Navbar />
      <main style={{ padding: '8rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-main, #0a0a0a)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '0.95rem' }}>Last updated: August 12, 2026</p>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>1. Introduction</h2>
          <p>
            {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or request freight services.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>
            We collect information that you provide directly to us when requesting a freight quote, contacting dispatch, or submitting an inquiry:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Contact details (name, company name, email address, phone number).</li>
            <li>Shipment origin, destination, freight specifications, and scheduling dates.</li>
            <li>Communications and correspondence sent to our team.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>3. How We Use Your Information</h2>
          <p>
            We use your information strictly for commercial transportation operations, including preparing rate quotes, dispatching drivers and Moffett equipment, managing active shipments, and responding to your customer service inquiries.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>4. Data Protection & Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal or business data to third parties. We may share necessary shipment details with regulatory authorities (such as MTO, DOT, or customs officers) solely for legal compliance and border crossing verification.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact our dispatch headquarters:
          </p>
          <div style={{ marginTop: '1rem', padding: '1.25rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
            <p><strong>{SITE_NAME}</strong></p>
            <p>{CONTACT_INFO.address}</p>
            <p>Phone: {CONTACT_INFO.phone}</p>
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
