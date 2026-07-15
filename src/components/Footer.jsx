import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-name">POINTZ</span>
            <p className="brand-desc">
              Precision logistics. Elevating the standard of global supply chain management.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Air Freight</a></li>
              <li><a href="#">Ocean Logistics</a></li>
              <li><a href="#">Ground Transport</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-input-wrapper">
              <input type="email" placeholder="Email Address" />
              <button className="btn-submit">Submit</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pointz Logistics.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
