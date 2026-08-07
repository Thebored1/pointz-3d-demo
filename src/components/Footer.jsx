"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Tier: CTA */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h2 className="footer-cta-title">Ready to move your freight?</h2>
            <p className="footer-cta-desc">Get a rate back the same business day.</p>
          </div>
          <Link href="/get-a-quote" className="footer-cta-btn">
            Get a Quote <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Middle Tier: Navigation */}
        <div className="footer-main">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand">
              <Image 
                src="/assets/logo.webp" 
                alt="Point Zero Road Lines" 
                width={180} 
                height={60} 
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-desc">
              A dedicated transportation company headquartered in Mississauga, Ontario, serving the GTA and Southern Ontario since 2006. CVOR 158-303-152 · MC 1492151 · Licensed &amp; Insured.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/pointzeroroadlines/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/pointzeroroadline/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@PointZeroRoadlines" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/the-point-zero-road-lines/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <div className="link-group">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/flatbed-moffett-transport">Flatbed &amp; Moffett Transport</Link></li>
                <li><Link href="/services/dedicated-fleet-services">Dedicated Fleet Services</Link></li>
                <li><Link href="/services/warehouse-cross-dock-storage">Warehouse &amp; Cross-Dock</Link></li>
                <li><Link href="/services/construction-material-hauling">Construction Material Hauling</Link></li>
                <li><Link href="/services/expedited-same-day-freight">Expedited &amp; Same-Day Freight</Link></li>
                <li><Link href="/services/healthcare-linen-logistics">Healthcare Linen Logistics</Link></li>
                <li><Link href="/services">All Services</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/fleet-and-equipment">Fleet &amp; Equipment</Link></li>
                <li><Link href="/service-areas">Service Areas</Link></li>
                <li><Link href="/safety-compliance">Safety &amp; Compliance</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact-col">
            <h4>Mississauga HQ</h4>
            <div className="footer-contact-list">
              <a href="tel:+19052910325" className="contact-link">(905) 291-0325</a>
              <a href="mailto:info@pointzeroroadlines.com" className="contact-link">info@pointzeroroadlines.com</a>
              <span>1566 Bonhill Road, Mississauga, ON L5T 1C7</span>
              <span style={{ fontSize: '0.8125rem', opacity: 0.8, marginTop: '0.25rem' }}>
                24/7 Dispatch • Weekend Pick-up &amp; Delivery
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.65, marginTop: '0.5rem', lineHeight: '1.4' }}>
                Serving Mississauga, Brampton, Toronto, Vaughan, Caledon, Bolton, Burlington, Richmond Hill, Markham &amp; Ontario
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Tier: Legal */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; {new Date().getFullYear()} Point Zero Road Lines</span>
            <span className="footer-divider">|</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-bottom-right">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
