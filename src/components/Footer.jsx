"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-main">
          <div className="footer-brand-col">
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="footer-logo">POINT ZERO</h2>
              <span className="footer-logo-tag">ROAD LINES</span>
            </motion.div>
            <motion.p 
              className="footer-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Dedicated transportation company headquartered in Mississauga, Ontario. 
              Quality, safety, and integrity.
            </motion.p>
          </div>
          
          <motion.div 
            className="footer-links-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Dedicated Fleet</a></li>
                <li><a href="#">Warehouse &amp; Cross-dock</a></li>
                <li><a href="#">Specialty Equipment</a></li>
                <li><a href="#">24/7 Dispatch</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Need a Truck</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-contact-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <span>+1-905-291-0325</span>
              <span>info@pointzeroroadlines.com</span>
              <span>Mississauga, ON</span>
            </div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; {new Date().getFullYear()} Point Zero Road Lines</span>
            <span className="footer-divider">|</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-bottom-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
