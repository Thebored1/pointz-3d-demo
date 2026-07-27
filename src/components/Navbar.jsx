"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-brand">
            <img src="/assets/logo.png?v=3" alt="Point Zero Road Lines" style={{ height: '38px', objectFit: 'contain' }} />
          </Link>
          
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/career" className="nav-link">Career</Link>
            <Link href="/contact-us" className="nav-link">Contact</Link>
          </div>
          
          <div className="nav-actions">
            <a href="tel:+19052910325" className="nav-phone">
              <Phone size={14} />
              +1-905-291-0325
            </a>
            <Link href="/need-a-truck" className="btn-primary-nav">Need a Truck</Link>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-inner">
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="/career" onClick={() => setMobileOpen(false)}>Career</Link>
              <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</Link>
              <div className="mobile-menu-actions">
                <a href="tel:+19052910325" className="btn-ghost">+1-905-291-0325</a>
                <Link href="/need-a-truck" className="btn-primary-nav" onClick={() => setMobileOpen(false)}>Need a Truck</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
