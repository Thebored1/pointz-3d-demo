"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditorialHero from '../../components/EditorialHero';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, viewportOnce } from '../../lib/motion';
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
    desc: 'Moffett truck-mounted forklifts, 48-53ft flatbeds, step-decks, and dry vans ready to roll.',
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

      <EditorialHero
        badge="FREIGHT ESTIMATES"
        badgeAlt="EST. 2006 • 24/7 DISPATCH"
        titleLine1="GET A FREIGHT QUOTE."
        titleAccent="DIRECT, TRANSPARENT RATES."
        description="Tell us your lane, freight type, and schedule. Our Mississauga dispatch team provides direct, transparent rates across Ontario with zero hidden fees and no spot-broker runarounds."
        scrollLabel="SCROLL TO QUOTE FORM"
        heroImage="/images/fleet-hero.webp"
        heroAlt="Point Zero Road Lines fleet lineup in Ontario"
        heroPosition="center"
      />

      <main className="quote-main-section">
        <div className="quote-container">
          <div className="quote-editorial-layout">
            
            {/* Left Column: Direct Info & Highlights */}
            <motion.aside
              className="quote-info-col"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="quote-info-header">
                <span className="quote-col-label">01 / DIRECT DISPATCH</span>
                <h2 className="quote-info-title">Fast answers from experienced dispatchers.</h2>
                <p className="quote-info-desc">
                  Whether you need a dedicated Moffett for site deliveries or recurring van capacity, we tailor equipment and routing directly to your timeline.
                </p>
              </div>

              <div className="quote-highlights-list">
                {quoteHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="quote-highlight-card">
                      <div className="quote-highlight-icon">
                        <Icon size={20} />
                      </div>
                      <div className="quote-highlight-content">
                        <h3 className="quote-highlight-title">{item.title}</h3>
                        <p className="quote-highlight-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Direct Urgent Contact Box */}
              <div className="quote-urgent-box">
                <span className="quote-urgent-badge">TIME SENSITIVE?</span>
                <h3 className="quote-urgent-title">Need immediate or hot-shot dispatch?</h3>
                <p className="quote-urgent-desc">
                  Call our live 24/7 dispatch desk directly for instant lane capacity and emergency bookings.
                </p>
                <div className="quote-urgent-links">
                  <a href="tel:+19052910325" className="quote-phone-btn">
                    <Phone size={16} />
                    <span>(905) 291-0325</span>
                    <ArrowUpRight size={14} className="quote-phone-arrow" />
                  </a>
                  <a href="mailto:info@pzrls.com" className="quote-email-link">
                    <Mail size={15} />
                    <span>info@pzrls.com</span>
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Right Column: Interactive Responsive Form */}
            <motion.section
              className="quote-form-col"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <QuoteForm />
            </motion.section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
