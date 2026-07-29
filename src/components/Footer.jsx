"use client";
import React from 'react';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-main">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Image src="/assets/logo.webp" alt="Point Zero Road Lines" width={180} height={60} style={{ objectFit: 'contain', marginBottom: '1rem', background: '#fff', padding: '10px', borderRadius: '4px' }} />
            </div>
            <p className="footer-desc">
              A dedicated transportation company headquartered in Mississauga, Ontario, with additional sites in Bolton and Brampton. Quality, safety, and integrity in every load.
            </p>
          </div>
          
          <div className="footer-links-col">
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/need-a-truck">Need a Truck</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/contact-us">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <span>+1-905-291-0325</span>
              <span>info@pointzeroroadlines.com</span>
              <span>1566 Bonhill Rd, Mississauga</span>
            </div>
          </div>
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
