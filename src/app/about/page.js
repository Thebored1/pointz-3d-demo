"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './AboutPage.css'; 

export default function AboutPage() {
  const textRevealVariants = {
    hidden: { y: "110%", rotateX: -20 },
    visible: { 
      y: 0, 
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* 1. Rounded Hero Banner (Image 1 Ref) - outside page-wrapper for full width */}
      <motion.div className="ap-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/images/fleet-hero.jpg" alt="Point Zero Fleet" />
        <div className="ap-hero-overlay"></div>
        <h1>About Us</h1>
      </motion.div>

      <main className="page-wrapper" style={{ position: 'relative', zIndex: 2, paddingBottom: 0 }}>

        {/* 2. Core Idea & Bento Cards (Image 1 Ref) */}
        <section className="ap-idea-section">
          <div className="ap-badge">
            <motion.div className="ap-badge-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="ap-badge-dot"></div>
              ABOUT US &middot; OUR STORY &middot; VALUES
            </motion.div>
            <motion.div className="ap-badge-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              EST. 2012
            </motion.div>
          </div>

          <motion.h2 
            className="ap-idea-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <div className="mask-container">
              <motion.div variants={textRevealVariants}>
                STRATEGIC PLANNING THAT FEELS CLEAR,
              </motion.div>
            </div>
            <div className="mask-container">
              <motion.div variants={textRevealVariants} className="ap-idea-highlight">
                NOT OVERWHELMING.
              </motion.div>
            </div>
          </motion.h2>

          <motion.div className="ap-idea-divider" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} style={{ originX: 0 }}></motion.div>

          <motion.p className="ap-idea-subtext" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario. Lean, safe and on schedule — that's what we do.
          </motion.p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
             <a href="/contact-us" className="ap-button-dark">Request a quote &rarr;</a>
             <a href="/services" className="ap-button-light">Explore services</a>
          </div>

          <div className="ap-bento-grid">
            <motion.div className="ap-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="ap-bento-number">01</div>
              <h3>Respect & Dignity</h3>
              <p>We believe in treating every single customer with the utmost respect and dignity, forming the baseline of our operations.</p>
            </motion.div>
            <motion.div className="ap-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="ap-bento-number">02</div>
              <h3>Efficiency</h3>
              <p>We grow through finding innovative ways to be the most efficient and cost-effective transport carrier in the industry.</p>
            </motion.div>
            <motion.div className="ap-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="ap-bento-number">03</div>
              <h3>Integrity</h3>
              <p>We integrate honesty, integrity, and absolute business ethics into all aspects of our business functioning.</p>
            </motion.div>
          </div>

          <div className="ap-split-timeline">
            <div className="ap-timeline-sticky">
              <motion.h2 className="ap-timeline-title" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                Building a Better Way to Transport, One Milestone at a Time
              </motion.h2>
              <motion.p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                From our first truck to serving hundreds of clients across the GTA, here's how Point Zero grew into a trusted solution.
              </motion.p>
            </div>
            
            <div className="ap-timeline">
              <motion.div className="ap-timeline-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h4>Our Mission</h4>
                <p>To build long term partnerships with our customer and clients and provide exceptional services by pursuing business goals through dedicated services and accurate planning.</p>
              </motion.div>
              <motion.div className="ap-timeline-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4>Our Vision</h4>
                <p>To provide quality services that exceed the expectations of our valued customers.</p>
                <img src="/images/fleet.png" alt="Vision" style={{ width: '100%', borderRadius: 'var(--radius-sm)', marginTop: '1rem' }} />
              </motion.div>
              <motion.div className="ap-timeline-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h4>Our Purpose</h4>
                <p>To be the leader in the transportation industry by providing cost efficient solutions which realize maximum results.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Asymmetrical Masonry Grid (Image 2 Ref) */}
        <section className="ap-masonry-section">
          <div className="ap-masonry-header">
            <motion.h2 className="ap-masonry-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Experiences that reconnect with<br />the road and the community.
            </motion.h2>
            <motion.p className="ap-masonry-sub" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              We are a dedicated transportation company headquartered in Mississauga, with two other sites located in Bolton and Brampton, ON.
            </motion.p>
          </div>

          <div className="ap-masonry-grid">
            <motion.div className="ap-masonry-item ap-hide-mobile" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src="/images/truck-cab.jpg" alt="Trucking 1" />
            </motion.div>
            <motion.div className="ap-masonry-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.10.jpeg" alt="Logistics 2" />
            </motion.div>
            <motion.div className="ap-masonry-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.07.jpeg" alt="Team 3" />
            </motion.div>
            <motion.div className="ap-masonry-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.12.jpeg" alt="Operations 4" />
            </motion.div>
          </div>
        </section>

        {/* 4. By the Numbers & Timeline (Image 3 Ref) */}
        <section className="ap-stats-section">
          <div className="ap-stats-header">
            <motion.h2 className="ap-masonry-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Impact by the Numbers</motion.h2>
            <motion.p className="ap-masonry-sub" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              A diverse group of passionate professionals, bringing unique skills to drive innovation in every load we undertake.
            </motion.p>
          </div>

          <div className="ap-stats-grid">
            <motion.div className="ap-stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="ap-stat-header-row">
                <span className="ap-stat-number">01</span>
                <svg className="ap-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Package/Box icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3>Quote</h3>
              <p>Send us your lane and load. We respond fast with a straight answer.</p>
            </motion.div>
            
            <motion.div className="ap-stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="ap-stat-header-row">
                <span className="ap-stat-number">02</span>
                <svg className="ap-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Route/Dispatch icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3>Dispatch</h3>
              <p>The right equipment and driver are assigned and routed for your job.</p>
            </motion.div>
            
            <motion.div className="ap-stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="ap-stat-header-row">
                <span className="ap-stat-number">03</span>
                <svg className="ap-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Bar chart/Transit icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3>In transit</h3>
              <p>Secured, tarped and tracked. Our dispatcher stays on your load end to end.</p>
            </motion.div>
            
            <motion.div className="ap-stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="ap-stat-header-row">
                <span className="ap-stat-number">04</span>
                <svg className="ap-stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Check circle/Delivered icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Delivered</h3>
              <p>Offloaded where you need it — dock or curbside — with confirmation.</p>
            </motion.div>
          </div>

        </section>

        {/* 5. Final CTA Banner (Image 3 Ref) */}
        {/* 5. Final CTA Banner (Image 3 Ref) */}
        <motion.section className="ap-cta-banner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="ap-cta-badge">POINT ZERO</div>
          <h2>Need a truck?</h2>
          <p>Tell us your lane and load. We'll get back to you with a quote fast. Let us help you find ways to be lean and efficient.</p>
          <a href="/contact-us" className="ap-cta-button-new">Get a Quote</a>
        </motion.section>

      </main>
      <div style={{ paddingTop: '10rem', backgroundColor: 'var(--c-charcoal)', marginTop: '-10rem', position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}
