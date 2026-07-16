"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

import Process from '../components/Process';
import About from '../components/About';
import Fleet from '../components/Fleet';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ContentSections = () => (
  <>
    <Hero />
    <Services />

    <Process />
    <About />
    <Fleet />
    <CTA />
    <Footer />
  </>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-layout">
        <Navbar />
        <div className="mobile-content">
          <ContentSections />
        </div>
      </div>
    );
  }

  return (
    <div className="split-layout-container">
      <Navbar />
      
      {/* Left side: Scrollable Content */}
      <div className="content-left">
        <ContentSections />
      </div>

      {/* Right side: Fixed Video */}
      <div className="video-right" style={{ position: 'fixed', right: 0, top: 0, width: '50vw', height: '100vh', zIndex: -1, background: '#0f0f0f' }}>
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,15,0.1)' }}></div>
      </div>
    </div>
  );
}
