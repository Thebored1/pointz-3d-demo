"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { fadeUp, slideRight } from '../../lib/motion';
import { Phone, Mail, Clock, ShieldCheck, Truck, ArrowUpRight } from 'lucide-react';
import QuoteForm from './QuoteForm';
import './QuotePage.css';

const quoteHighlights = [
  {
    icon: Clock,
    title: '24/7 Live Dispatch',
    desc: 'Quotes reviewed around the clock with rapid turnaround across all Ontario freight corridors.',
  },
  {
    icon: Truck,
    title: 'Company-Owned Fleet',
    desc: 'Moffett truck-mounted forklifts, 36ft, 40ft, 48ft and 53ft flatbeds, step-decks, and dry vans ready to roll.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Registered',
    desc: 'CVOR compliant, USDOT 3983391 · MC 1492151, and fully commercially insured.',
  },
];

export default function GetAQuotePage() {
  return (
    <div className="quote-page-root">
      <Navbar />

      {/* Banner section with the quote form placed directly inside, above the fold */}
      <section className="quote-hero">
        <div className="quote-hero-bg" aria-hidden="true">
          <Image
            src="/images/fleet-lineup.webp"
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="quote-hero-overlay" aria-hidden="true" />

        <div className="quote-hero-inner">
          {/* Headline block — stays at the top of the banner */}
          <motion.div
            className="quote-hero-head"
            variants={fadeUp}
            initial="visible"
            animate="visible"
          >
            <div className="quote-hero-crumbs">
              <Breadcrumbs />
            </div>

            <div className="quote-hero-badges">
              <span className="quote-hero-badge">FREIGHT ESTIMATES</span>
              <span className="quote-hero-badge quote-hero-badge-alt">EST. 2006 • 24/7 DISPATCH</span>
            </div>

            <h1 className="quote-hero-title">
              Get a Freight Quote.{' '}
              <span className="quote-hero-accent">Fast GTA &amp; Ontario Rates.</span>
            </h1>

            <p className="quote-hero-desc">
              Tell us your lane, freight type, and schedule. Our Mississauga dispatch team
              provides direct, transparent rates across Ontario with zero hidden fees and no
              spot-broker runarounds.
            </p>
          </motion.div>

          {/* The quote form, placed directly in the banner (right on desktop,
              immediately below the headline on mobile) */}
          <motion.section
            className="quote-hero-form"
            variants={slideRight}
            initial="visible"
            animate="visible"
          >
            <QuoteForm />
          </motion.section>

          {/* Trust points + direct contact — below the headline on desktop,
              below the form on mobile */}
          <div className="quote-hero-support">
            <ul className="quote-hero-trust">
              {quoteHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="quote-hero-trust-item">
                    <span className="quote-hero-trust-icon">
                      <Icon size={18} />
                    </span>
                    <span className="quote-hero-trust-text">
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="quote-hero-contact">
              <span className="quote-hero-contact-label">Time-sensitive or hot-shot dispatch?</span>
              <div className="quote-hero-contact-links">
                <a href="tel:+16476801300" className="quote-phone-btn">
                  <Phone size={16} />
                  <span>(647) 680-1300</span>
                  <ArrowUpRight size={14} className="quote-phone-arrow" />
                </a>
                <a href="mailto:info@pzrls.com" className="quote-hero-email">
                  <Mail size={15} />
                  <span>info@pzrls.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
