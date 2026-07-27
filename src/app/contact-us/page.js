"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './ContactPage.css'; 

export default function ContactUsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Banner - outside page-wrapper for full width */}
      <motion.div className="contact-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/assets/truck-side.jpg" alt="Contact Hero" />
        <div className="contact-hero-overlay"></div>
        <h1>Contact Us</h1>
      </motion.div>

      <main className="page-wrapper">

        <section className="contact-layout">
          
          <motion.div className="contact-info-col" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="contact-info-block">
              <span className="contact-info-label">Get In Touch</span>
              <h3>We're here to help.</h3>
              <p>Whether you need a quote, want to join our fleet, or have a general inquiry, our team is ready to assist you 24/7.</p>
              <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Phone: 905-291-0325</p>
              <p>Email: dispatch@pointzeroroadlines.com</p>
            </div>

            <div className="contact-locations">
              <span className="contact-info-label">Our Sites</span>
              <div className="contact-location-card">
                <h4>Mississauga HQ</h4>
                <p>Our primary headquarters serving the Greater Toronto Area (GTA) and orchestrating our 24/7 dispatch.</p>
              </div>
              <div className="contact-location-card">
                <h4>Bolton Facility</h4>
                <p>Strategic warehouse and storage site for cross-docking and specialized freight handling.</p>
              </div>
              <div className="contact-location-card">
                <h4>Brampton Facility</h4>
                <p>Additional dedicated fleet services hub supporting Southern Ontario routes.</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="contact-form-title">Send us a message</h2>
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
                <label>Subject</label>
                <select className="contact-input">
                  <option>General Inquiry</option>
                  <option>Request a Quote</option>
                  <option>Careers</option>
                  <option>Billing & Support</option>
                </select>
              </div>

              <div className="contact-input-group">
                <label>Message</label>
                <textarea className="contact-input contact-textarea" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          </motion.div>

        </section>

      </main>
      <Footer />
    </div>
  );
}
