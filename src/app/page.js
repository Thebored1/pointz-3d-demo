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

  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    if (isMobile) return;
    
    const frameCount = 240;
    const currentFrame = index => (
      `/assets/frames/frame_${index.toString().padStart(4, '0')}.jpg`
    );

    const images = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    imagesRef.current = images;

    // Draw first frame once it loads
    images[0].onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    
    let targetFrame = 1;
    let currentFrame = 1;
    let animationFrameId;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const scrollFraction = scrollTop / maxScroll;
        targetFrame = Math.min(240, Math.max(1, Math.ceil(scrollFraction * 240)));
      }
    };

    const render = () => {
      // Faster lerp for instant yet smooth response
      currentFrame += (targetFrame - currentFrame) * 0.3;

      const frameIndex = Math.round(currentFrame) - 1;
      const canvas = canvasRef.current;
      
      if (canvas && imagesRef.current[frameIndex] && imagesRef.current[frameIndex].complete) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imagesRef.current[frameIndex], 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
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
        <canvas 
          ref={canvasRef}
          width={1920}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,15,0.1)' }}></div>
      </div>
    </div>
  );
}
