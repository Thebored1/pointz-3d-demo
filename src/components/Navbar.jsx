"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-name">POINTZ</span>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#tracking">Tracking</a>
          <a href="#network">Network</a>
        </div>
        <button className="btn-primary">Get a Quote</button>
      </div>
    </motion.nav>
  );
}
