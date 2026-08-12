"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <motion.div 
            className="cta-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number section-number--light">06</span>
            <h2 className="cta-title">
              Get a carrier that plans around your schedule, not the other way around.
            </h2>
            <p className="cta-desc">
              Request a free freight quote or reach our dispatch team directly. Operating since 2006 · CVOR 158-303-152 · MC 1492151.
            </p>
          </motion.div>

          <motion.div 
            className="cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/get-a-quote" className="cta-btn-primary">
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+19052910325" className="cta-btn-secondary">
              Call (905) 291-0325
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="cta-contact"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="contact-item">
            <Phone size={18} strokeWidth={1.5} />
            <div className="contact-info">
              <span className="contact-label">24/7 Dispatch</span>
              <span className="contact-value">(905) 291-0325</span>
            </div>
          </div>
          <div className="contact-item">
            <Mail size={18} strokeWidth={1.5} />
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">info@pzrls.com</span>
            </div>
          </div>
          <div className="contact-item">
            <MapPin size={18} strokeWidth={1.5} />
            <div className="contact-info">
              <span className="contact-label">Mississauga HQ</span>
              <span className="contact-value">1566 Bonhill Rd, Mississauga</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
