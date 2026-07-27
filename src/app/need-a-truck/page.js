"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './NeedATruck.css'; 

export default function NeedATruckPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Banner - outside page-wrapper for full width */}
      <motion.div className="nat-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.06%20(2).jpeg" alt="Need a Truck Hero" />
        <div className="nat-hero-overlay"></div>
        <h1>Need A Truck?</h1>
      </motion.div>

      <main className="page-wrapper">

        <motion.section 
          className="nat-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="nat-form-header">
            <h2 className="nat-form-title">Request a Quote</h2>
            <p className="nat-form-sub">
              Point Zero Roadlines offers a variety of services to meet the special requirements of our clients. Fill out the form below and our 24/7 dispatch team will get back to you immediately.
            </p>
          </div>

          <form className="nat-form" onSubmit={(e) => e.preventDefault()}>
            <div className="nat-form-row">
              <div className="nat-input-group">
                <label>First Name</label>
                <input type="text" className="nat-input" placeholder="John" />
              </div>
              <div className="nat-input-group">
                <label>Last Name</label>
                <input type="text" className="nat-input" placeholder="Doe" />
              </div>
            </div>

            <div className="nat-form-row">
              <div className="nat-input-group">
                <label>Email Address</label>
                <input type="email" className="nat-input" placeholder="john@company.com" />
              </div>
              <div className="nat-input-group">
                <label>Phone Number</label>
                <input type="tel" className="nat-input" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="nat-input-group">
              <label>Service Type Required</label>
              <select className="nat-input">
                <option>Flatbed Hauling</option>
                <option>Moffett & Piggyback</option>
                <option>Cross-dock & Warehousing</option>
                <option>Specialty & Linen Equipment</option>
                <option>Dedicated Fleet</option>
                <option>Other</option>
              </select>
            </div>

            <div className="nat-input-group">
              <label>Origin</label>
              <input type="text" className="nat-input" placeholder="Pickup City, Postal Code" />
            </div>

            <div className="nat-input-group">
              <label>Destination</label>
              <input type="text" className="nat-input" placeholder="Delivery City, Postal Code" />
            </div>

            <div className="nat-input-group">
              <label>Additional Details</label>
              <textarea className="nat-input nat-textarea" placeholder="Dimensions, weight, special handling requirements..."></textarea>
            </div>

            <button type="submit" className="nat-submit">Submit Request</button>
          </form>

        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
