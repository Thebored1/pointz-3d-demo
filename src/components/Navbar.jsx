"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

const serviceLinks = [
  {
    href: '/services/specialty-equipment',
    num: '01',
    title: 'Specialty Equipment',
    desc: 'Moffett, linen & custom configs',
  },
  {
    href: '/services/dedicated-fleet',
    num: '02',
    title: 'Dedicated Fleet',
    desc: 'Assigned trucks & drivers',
  },
  {
    href: '/services/warehouse-and-storage',
    num: '03',
    title: 'Warehouse & Storage',
    desc: 'Cross-dock & overflow',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
              <div
                className="nav-item-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="nav-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Services <ChevronDown size={14} className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} />
                </span>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="dropdown-header">
                        <span>What we haul</span>
                      </div>
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="dropdown-link"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="dropdown-link-num">{item.num}</span>
                          <span className="dropdown-link-copy">
                            <span className="dropdown-link-title">{item.title}</span>
                            <span className="dropdown-link-desc">{item.desc}</span>
                          </span>
                          <ArrowRight size={14} className="dropdown-link-arrow" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
              <div className="mobile-dropdown-container">
                <button
                  className="mobile-nav-link"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Services <ChevronDown size={20} style={{ transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      className="mobile-dropdown-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="mobile-sub-link"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
