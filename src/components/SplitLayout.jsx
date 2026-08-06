"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const FRAME_COUNT = 240;
// How many frames to fetch at once. All 240 in parallel saturates the
// connection and starves the rest of the page on first load.
const LOAD_CONCURRENCY = 8;

const frameSrc = index =>
  `/assets/frames/frame_${index.toString().padStart(4, '0')}.webp`;

export default function SplitLayout({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1200);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload frames, first one first, in bounded batches
  useEffect(() => {
    if (isMobile) return;

    let cancelled = false;
    const images = new Array(FRAME_COUNT);
    imagesRef.current = images;

    const drawFirstFrame = img => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const load = index => new Promise(resolve => {
      const img = new Image();
      img.decoding = 'async';
      images[index] = img;
      // A cached image can be `complete` before onload is ever attached.
      const done = () => {
        if (index === 0 && !cancelled) drawFirstFrame(img);
        resolve();
      };
      img.onload = done;
      img.onerror = resolve;
      img.src = frameSrc(index + 1);
      if (img.complete) done();
    });

    (async () => {
      // Frame 1 alone first so the panel paints as early as possible.
      await load(0);
      for (let i = 1; i < FRAME_COUNT && !cancelled; i += LOAD_CONCURRENCY) {
        const batch = [];
        for (let j = i; j < Math.min(i + LOAD_CONCURRENCY, FRAME_COUNT); j++) {
          batch.push(load(j));
        }
        await Promise.all(batch);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    
    let targetFrame = 1;
    let currentFrame = 1;
    let drawnFrame = -1;
    let animationFrameId;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const scrollFraction = scrollTop / maxScroll;
        targetFrame = Math.min(FRAME_COUNT, Math.max(1, Math.ceil(scrollFraction * FRAME_COUNT)));
      }
    };

    const isReady = img => Boolean(img && img.complete && img.naturalWidth);

    // Frames still arrive while the user scrolls, so the exact frame may not be
    // decoded yet. Fall back to the closest one that is, rather than freezing on
    // whatever was drawn last.
    const nearestReadyFrame = index => {
      const frames = imagesRef.current;
      if (isReady(frames[index])) return index;
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        if (isReady(frames[index - offset])) return index - offset;
        if (isReady(frames[index + offset])) return index + offset;
      }
      return -1;
    };

    const render = () => {
      // Faster lerp for instant yet smooth response
      currentFrame += (targetFrame - currentFrame) * 0.3;

      const canvas = canvasRef.current;
      const frameIndex = nearestReadyFrame(Math.round(currentFrame) - 1);

      // Skip the redraw when the frame hasn't changed since the last tick.
      if (frameIndex !== -1 && frameIndex !== drawnFrame && canvas) {
        canvas.getContext('2d').drawImage(imagesRef.current[frameIndex], 0, 0, canvas.width, canvas.height);
        drawnFrame = frameIndex;
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

  if (isMobile === null) {
    return <div className="mobile-layout"><Navbar /><div className="mobile-content">{children}</div></div>;
  }

  if (isMobile) {
    return (
      <div className="mobile-layout">
        <Navbar />
        <div className="mobile-content">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="split-layout-container">
      <Navbar />
      
      {/* Left side: Scrollable Content */}
      <div className="content-left">
        {/* Content goes here */}
        {children}
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
