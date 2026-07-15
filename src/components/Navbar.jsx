"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-name">POINT ZERO</span>
            <span className="brand-tag">ROAD LINES</span>
          </div>
          
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#fleet" className="nav-link">Fleet</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <div className="nav-actions">
            <a href="tel:+19052910325" className="nav-phone">
              <Phone size={14} />
              +1-905-291-0325
            </a>
            <button className="btn-primary-nav">Need a Truck</button>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

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
              <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#fleet" onClick={() => setMobileOpen(false)}>Fleet</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              <div className="mobile-menu-actions">
                <a href="tel:+19052910325" className="btn-ghost">+1-905-291-0325</a>
                <button className="btn-primary-nav">Need a Truck</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
