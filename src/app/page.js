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
  const measureRef = useRef(null);
  const measured = useRef(false);

  useEffect(() => {
    if (measured.current) return;

    const tryMeasure = (attempt) => {
      const el = measureRef.current;
      if (!el) return;
      const h = el.scrollHeight;
      if (h > 100) {
        measured.current = true;
        const vh = window.innerHeight;
        setPages(Math.floor(h / vh));
      } else if (attempt < 20) {
        setTimeout(() => tryMeasure(attempt + 1), 100);
      }
    };

    setTimeout(() => tryMeasure(0), 100);
  }, []);

  return (
    <div className="split-layout-container">
      <div
        ref={measureRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50%',
          maxWidth: '50vw',
          zIndex: -9999,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      >
        <ContentSections />
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
