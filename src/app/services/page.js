"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './ServicesPage.css';
import { Truck, Navigation, Warehouse, Wrench, Users, Clock, Package, Route, BarChart3, CheckCircle } from 'lucide-react';

const services = [
  { id: '01', icon: Truck, title: 'Flatbed Hauling', desc: 'Open-deck transport for steel, lumber, machinery and oversized freight — secured and tarped to spec. Our flatbed fleet handles loads of all sizes across the GTA and Ontario.' },
  { id: '02', icon: Navigation, title: 'Moffett & Piggyback', desc: 'Truck-mounted forklift delivery to any site — no dock, no problem. Curbside offloading across the GTA with precision placement exactly where you need it.' },
  { id: '03', icon: Warehouse, title: 'Cross-Dock & Warehousing', desc: 'Transload, consolidate and store between our three Ontario sites with full chain-of-custody. Seamless transfers keep your freight moving without delay.' },
  { id: '04', icon: Wrench, title: 'Specialty & Linen Equipment', desc: 'Dedicated equipment for the linen industry and specialty freight in all sizes and configurations. Custom hauling solutions built around your unique requirements.' },
  { id: '05', icon: Users, title: 'Dedicated Fleet', desc: 'Company-owned trucks and vetted drivers assigned to your lanes for consistent, accountable service. Your freight, your dedicated team.' },
  { id: '06', icon: Clock, title: '24/7 Dispatch', desc: 'Live coordination around the clock. One call reaches a dispatcher who owns your load end to end — no call centers, no runaround.' }
];

const capabilities = [
  { icon: Truck, label: 'Flatbed', value: '48ft, 53ft, step-decks and drop-decks. Ready for oversized and overweight loads.' },
  { icon: Navigation, label: 'Moffett', value: 'Truck-mounted forklifts for job-site deliveries with zero dock requirements.' },
  { icon: Warehouse, label: 'Cross-dock', value: 'Seamless transfers between trailers to keep your freight moving without delay.' },
  { icon: Wrench, label: 'Specialty', value: 'Linen and custom hauling configurations available upon request.' }
];

const steps = [
  { num: '01', icon: Package, title: 'Quote', desc: 'Send us your lane and load. We respond fast with a straight answer.' },
  { num: '02', icon: Route, title: 'Dispatch', desc: 'The right equipment and driver are assigned and routed for your job.' },
  { num: '03', icon: BarChart3, title: 'In Transit', desc: 'Secured, tarped and tracked. Our dispatcher stays on your load end to end.' },
  { num: '04', icon: CheckCircle, title: 'Delivered', desc: 'Offloaded where you need it — dock or curbside — with confirmation.' }
];

const textRevealVariants = {
  hidden: { y: "110%", rotateX: -20 },
  visible: {
    y: 0,
    rotateX: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Banner - outside page-wrapper for full width */}
      <motion.div className="svp-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.13.jpeg" alt="Point Zero Fleet" />
        <div className="svp-hero-overlay"></div>
        <h1>Services</h1>
      </motion.div>

      <main className="page-wrapper" style={{ position: 'relative', zIndex: 2, paddingBottom: 0 }}>

        {/* Badge + Intro */}
        <section className="svp-intro-section">
          <div className="svp-badge">
            <motion.div className="svp-badge-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="svp-badge-dot"></div>
              OUR SERVICES &middot; WHAT WE OFFER &middot; CAPABILITIES
            </motion.div>
            <motion.div className="svp-badge-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              EST. 2012
            </motion.div>
          </div>

          <motion.h2
            className="svp-intro-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <div className="mask-container">
              <motion.div variants={textRevealVariants}>
                BUILT FOR THE LOADS
              </motion.div>
            </div>
            <div className="mask-container">
              <motion.div variants={textRevealVariants} className="svp-intro-highlight">
                OTHERS TURN DOWN.
              </motion.div>
            </div>
          </motion.h2>

          <motion.div className="svp-intro-divider" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} style={{ originX: 0 }}></motion.div>

          <motion.p className="svp-intro-subtext" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Dedicated flatbed, Moffett piggyback and cross-dock service across the GTA and Ontario. We handle the loads others walk away from — lean, safe and on schedule.
          </motion.p>

          <div className="svp-intro-actions">
            <a href="/need-a-truck" className="svp-button-dark">Request a quote &rarr;</a>
            <a href="/contact-us" className="svp-button-light">Contact us</a>
          </div>
        </section>

        {/* Services Detail Grid */}
        <section className="svp-services-section">
          <div className="svp-services-header">
            <motion.h2 className="svp-services-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What We Offer</motion.h2>
          </div>
          <div className="svp-services-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} className="svp-service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Icon size={22} strokeWidth={1.5} />
                  <span className="svp-service-number">{s.id}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Fleet Capabilities */}
        <section className="svp-capabilities-section">
          <div className="svp-capabilities-header">
            <motion.h2 className="svp-capabilities-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Capability Spotlights</motion.h2>
            <motion.p className="svp-capabilities-sub" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              From oversized flatbed loads to precision Moffett deliveries, our fleet is built to handle what others can&#39;t.
            </motion.p>
          </div>
          <div className="svp-capabilities-grid">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} className="svp-capability-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="svp-capability-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="svp-capability-label">{c.label}</span>
                  <span className="svp-capability-desc">{c.value}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Process Workflow - Stepped Progress */}
        <section className="svp-process-section">
          <motion.div className="svp-process-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="svp-process-label-dot"></span>
            HOW IT WORKS
          </motion.div>
          <motion.h2 className="svp-process-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            One call to delivered.
          </motion.h2>
          <div className="svp-steps-track">
            <div className="svp-steps-line"></div>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} className="svp-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                  <div className="svp-step-number-ring">
                    <span>{step.num}</span>
                  </div>
                  <div className="svp-step-content">
                    <div className="svp-step-icon-row">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <motion.section className="svp-cta-banner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="svp-cta-badge">POINT ZERO</div>
          <h2>Need a truck?</h2>
          <p>Tell us your lane and load. We&#39;ll get back to you with a quote fast. Let us help you find ways to be lean and efficient.</p>
          <a href="/need-a-truck" className="svp-cta-button">Get a Quote</a>
        </motion.section>

      </main>
      <div style={{ paddingTop: '10rem', backgroundColor: 'var(--c-charcoal)', marginTop: '-10rem', position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}
