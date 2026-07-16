"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';

import Process from '../components/Process';
import About from '../components/About';
import Fleet from '../components/Fleet';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ContentSections = () => (
  <>
    <Hero />
    <Services />
    <VideoSection />

    <Process />
    <About />
    <Fleet />
    <CTA />
    <Footer />
  </>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (videoRef.current && !isNaN(videoRef.current.duration)) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll > 0) {
              const scrollFraction = scrollTop / maxScroll;
              // Add a slight easing or direct mapping
              videoRef.current.currentTime = scrollFraction * videoRef.current.duration;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Attempt initial sync
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

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
          ref={videoRef}
          src="/hero-video.mp4" 
          preload="metadata"
          muted 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,15,0.1)' }}></div>
      </div>
    </div>
  );
}
