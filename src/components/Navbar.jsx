"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="nav-container"
          animate={{
            padding: scrolled ? "0.5rem 0.5rem 0.5rem 1.5rem" : "0.75rem 0.75rem 0.75rem 2rem",
            maxWidth: scrolled ? "1200px" : "1400px",
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(250, 250, 248, 0.9)",
            backdropFilter: "blur(20px)",
            borderColor: scrolled ? "rgba(10, 10, 10, 0.08)" : "rgba(10, 10, 10, 0.05)",
            boxShadow: scrolled ? "0 12px 32px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.05)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="nav-brand">
            <Link href="/" className="nav-logo-link">
              <Image
                src="/assets/logo.webp"
                alt="Point Zero Road Lines"
                className={`nav-logo ${scrolled ? 'scrolled-logo' : ''}`}
                width={160}
                height={32}
                priority
              />
            </Link>
            <span className="nav-divider" style={{ opacity: scrolled ? 1 : 0.5 }}></span>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/career" className="nav-link">Career</Link>
              <Link href="/contact-us" className="nav-link">Contact</Link>
            </div>
          </div>
          
          <div className="nav-actions">
            <a href="tel:+19052910325" className="nav-phone">
              <Phone size={14} className="phone-icon" />
              <span>+1-905-291-0325</span>
            </a>
            <Link href="/need-a-truck" className="btn-primary-nav">
              Need a Truck
              <ArrowRight size={16} />
            </Link>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="mobile-menu-inner"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="mobile-nav-link">Home</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="mobile-nav-link">About</Link>
              <Link href="/career" onClick={() => setMobileOpen(false)} className="mobile-nav-link">Career</Link>
              <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="mobile-nav-link">Contact</Link>
              <div className="mobile-menu-actions">
                <a href="tel:+19052910325" className="btn-ghost-mobile">
                  <Phone size={18} />
                  +1-905-291-0325
                </a>
                <Link href="/need-a-truck" className="btn-primary-mobile" onClick={() => setMobileOpen(false)}>
                  Need a Truck
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
