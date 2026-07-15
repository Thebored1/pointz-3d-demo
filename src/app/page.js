"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FleetGallery from '../components/FleetGallery';
import Process from '../components/Process';
import About from '../components/About';
import Fleet from '../components/Fleet';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ThreeScene from '../components/ThreeScene';

const ContentSections = () => (
  <>
    <Hero />
    <Services />
    <FleetGallery />
    <Process />
    <About />
    <Fleet />
    <CTA />
    <Footer />
  </>
);

export default function Home() {
  const [hyperdrive, setHyperdrive] = useState(false);
  const [pages, setPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const measureRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const el = measureRef.current;
    if (!el) return;

    const updatePages = () => {
      const h = el.scrollHeight;
      const vh = window.innerHeight;
      if (h > 0 && vh > 0) {
        setPages(h / vh);
      }
    };

    const resizeObserver = new ResizeObserver(() => updatePages());
    resizeObserver.observe(el);
    window.addEventListener('resize', updatePages);

    const timeout = setTimeout(updatePages, 100);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePages);
      clearTimeout(timeout);
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
      <div
        ref={measureRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: -9999,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      >
        <div className="content-left">
          <ContentSections />
        </div>
      </div>
      <Navbar />
      <div className="canvas-bg-wrapper">
        <Canvas flat camera={{ position: [15, 10, 20], fov: 45 }}>
          <color attach="background" args={['#f5f3ef']} />
          
          <ScrollControls pages={pages} damping={0.1}>
            <ThreeScene hyperdrive={hyperdrive} setHyperdrive={setHyperdrive} />
            
            <Scroll html style={{ width: '100%', height: '100%' }}>
              <div className="content-left">
                <ContentSections />
              </div>
            </Scroll>
          </ScrollControls>
          
        </Canvas>
      </div>
    </div>
  );
}
