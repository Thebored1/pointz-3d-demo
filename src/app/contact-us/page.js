"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './ContactPage.css'; 

export default function ContactUsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px' }}>
        
        {/* HERO SECTION */}
        <section className="contact-hero-new">
          <div className="contact-container">
            <motion.div className="contact-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="contact-badge">CONTACT US</span>
              <span className="contact-badge">24/7 SUPPORT</span>
            </motion.div>
            
            <motion.h1 className="contact-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              TALK TO<br />
              <span className="text-cyan italic">DISPATCH.</span>
            </motion.h1>
          </div>
        </section>

        {/* LAYOUT SECTION */}
        <section className="contact-container contact-body">
          <div className="contact-layout">
            
            {/* LEFT COLUMN: LOCATIONS & DIRECT CONTACT */}
            <div className="contact-locations-col">
              
              <div className="contact-locations-header">
                <h2>Direct Lines</h2>
                <p>Call or email us anytime. Our dispatch and support teams are available 24/7 to handle your logistics needs.</p>
              </div>

              <div className="contact-cards-wrap">
                <div className="contact-location-card">
                  <div className="loc-top">
                    <span className="loc-label">Primary HQ</span>
                    <MapPin size={18} strokeWidth={1.5} className="loc-icon" />
                  </div>
                  <h3>Mississauga Hub</h3>
                  <p>1566 Bonhill Rd<br />Mississauga, ON<br />Headquarters & Core Dispatch</p>
                </div>

                <div className="contact-location-card">
                  <div className="loc-top">
                    <span className="loc-label">Storage Facility</span>
                    <MapPin size={18} strokeWidth={1.5} className="loc-icon" />
                  </div>
                  <h3>Bolton Warehouse</h3>
                  <p>Cross-docking, consolidation, and mid-to-long term storage overflow operations.</p>
                </div>

                <div className="contact-location-card">
                  <div className="loc-top">
                    <span className="loc-label">Dedicated Hub</span>
                    <MapPin size={18} strokeWidth={1.5} className="loc-icon" />
                  </div>
                  <h3>Brampton Depot</h3>
                  <p>Secondary terminal supporting regional distribution and dedicated fleet deployments.</p>
                </div>

                <div className="contact-location-card" style={{ backgroundColor: 'var(--c-blue-dim)' }}>
                  <div className="loc-top">
                    <span className="loc-label">Reach Out</span>
                    <Phone size={18} strokeWidth={1.5} className="loc-icon" />
                  </div>
                  <h3>+1-905-291-0325</h3>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <Mail size={16} strokeWidth={1.5} /> dispatch@pointzeroroadlines.com
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="contact-form-col">
              <h2 className="contact-form-title">Send a message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-row">
                  <div className="contact-input-group">
                    <label>First Name</label>
                    <input type="text" className="contact-input" placeholder="John" />
                  </div>
                  <div className="contact-input-group">
                    <label>Last Name</label>
                    <input type="text" className="contact-input" placeholder="Doe" />
                  </div>
                </div>

                <div className="contact-input-group">
                  <label>Email Address</label>
                  <input type="email" className="contact-input" placeholder="john@company.com" />
                </div>

                <div className="contact-input-group">
                  <label>Subject / Department</label>
                  <select className="contact-input" style={{ appearance: 'none', background: 'transparent' }}>
                    <option>General Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Careers & Recruiting</option>
                    <option>Billing & Support</option>
                    <option>Sales / Dedicated Fleet</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <label>Message</label>
                  <textarea className="contact-input contact-textarea" placeholder="How can we assist you?"></textarea>
                </div>

                <button type="submit" className="contact-submit">Submit Request</button>
              </form>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
