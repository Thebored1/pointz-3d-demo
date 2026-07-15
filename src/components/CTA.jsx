"use client";
import React from 'react';
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
              Need a Truck?
            </h2>
            <p className="cta-desc">
              Let us help you find ways to be lean and efficient. 
              This is what we do.
            </p>
          </motion.div>

          <motion.div 
            className="cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="cta-btn-primary">
              Get a Quote
              <ArrowRight size={18} />
            </button>
            <button className="cta-btn-secondary">
              View Services
            </button>
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
              <span className="contact-label">Call Us</span>
              <span className="contact-value">+1-905-291-0325</span>
            </div>
          </div>
          <div className="contact-item">
            <Mail size={18} strokeWidth={1.5} />
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">info@pointzeroroadlines.com</span>
            </div>
          </div>
          <div className="contact-item">
            <MapPin size={18} strokeWidth={1.5} />
            <div className="contact-info">
              <span className="contact-label">Headquarters</span>
              <span className="contact-value">Mississauga, ON</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
