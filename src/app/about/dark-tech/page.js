"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowDown } from 'lucide-react';
import './DarkTech.css';

export default function DarkTechPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const marqueeItems = [
    "FLATBED FREIGHT", "MOFFETT PIGGYBACK", "CROSS-DOCK", "DEDICATED LANES", "SAME-DAY GTA", "HEAVY HAUL"
  ];
  
  const stats = [
    { num: '01', value: '26', label: 'Trucks in fleet', desc: 'Flatbed, step-deck & Moffett' },
    { num: '02', value: '14 yrs', label: 'On Ontario roads', desc: 'Family run since 2012' },
    { num: '03', value: '99.8%', label: 'On-time delivery', desc: 'Rolling 12-month avg' },
    { num: '04', value: '2.1M', label: 'Safe km per year', desc: 'CVOR excellent rating' },
  ];

  const storySteps = [
    { year: '2012', title: 'One truck, one lane', desc: 'Founded in a rented Bolton bay hauling steel between Hamilton and the GTA.' },
    { year: '2016', title: 'Moffett piggyback added', desc: 'First truck-mounted forklifts put on the road so crews could unload anywhere on site.' },
    { year: '2020', title: 'Mississauga cross-dock', desc: '18,000 sq ft facility opened, letting us stage, sort and reload same-day freight.' },
    { year: '2026', title: '26 trucks, one standard', desc: 'Dedicated lanes across Ontario with the same dispatch team that started it all.' },
  ];

  const rules = [
    { num: '01', title: 'On schedule, not on average', desc: 'Appointment windows are commitments. If a load is going to slip, you hear it from us first — not from your customer.' },
    { num: '02', title: 'Safety before speed', desc: 'Full pre-trips, secured loads, CVOR-clean records. Every driver is trained on Moffett operation and load securement.' },
    { num: '03', title: 'A real person on dispatch', desc: 'No ticket queues. Call the desk between 6am and 8pm and you get someone who knows exactly where your trailer is.' },
    { num: '04', title: 'We know these roads', desc: 'The 401 at 4pm, the Bolton back routes, tight downtown sites. Local knowledge is why our loads land on time.' },
  ];

  const crewBadges = [
    "CVOR Excellent rating", "$5M cargo & liability coverage", "FAST / PARS certified drivers",
    "WSIB clearance on file", "SmartWay registered fleet", "Moffett-certified operators"
  ];

  const locations = ["MISSISSAUGA", "BOLTON", "BRAMPTON", "HAMILTON", "KITCHENER", "OTTAWA"];

  return (
    <div className="pz-dark-tech">
      <Navbar />

      {/* HERO SECTION */}
      <section className="dt-hero">
        <div className="pz-container">
          <motion.div className="dt-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="dt-badge">SYSTEM.ABOUT</span>
            <span className="dt-badge">EST.2012_STATUS:ONLINE</span>
          </motion.div>
          
          <motion.h1 className="dt-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            BUILT BY DRIVERS<br />
            <span className="dt-text-glow">RUN LIKE CLOCKWORK.</span>
          </motion.h1>

          <motion.div className="dt-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="dt-hero-desc">
              Point Zero Road Lines started with one flatbed and one promise:
              show up when we said we would. Fourteen years later that promise
              still runs the yard — twenty-six trucks, a dispatch desk that
              answers on the second ring, and drivers who treat your freight like
              it's theirs.
            </p>
            <div className="dt-scroll-indicator">
              <span>INITIALIZING DATA STREAM</span>
              <div className="dt-scroll-icon"><ArrowDown size={14} /></div>
            </div>
          </motion.div>

          <motion.div className="dt-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000" alt="Fleet of trucks" className="dt-hero-img" fill sizes="(max-width: 768px) 100vw, 1400px" priority style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="dt-marquee-container">
        <div className="dt-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="dt-marquee-item">{item}</span>
              <span className="dt-marquee-dot">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="dt-stats">
        <div className="pz-container dt-stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} className="dt-stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
              <div className="dt-stat-num">SEQ_{stat.num}</div>
              <h3 className="dt-stat-value">{stat.value}</h3>
              <p className="dt-stat-label">{stat.label}</p>
              <p className="dt-stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="dt-story">
        <div className="pz-container">
          <motion.div className="dt-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="dt-section-label">LOG.STORY</p>
            <h2 className="dt-section-title">
              FOURTEEN<br />YEARS OF<br />
              <span className="dt-text-glow">SHOWING UP.</span>
            </h2>
            <p className="dt-section-desc">
              We grew the way freight companies should — one
              satisfied shipper at a time. No overpromising, no mystery
              surcharges, no trucks that leave the yard before the pre-trip's done.
            </p>
          </motion.div>

          <div className="dt-timeline">
            {storySteps.map((step, i) => (
              <motion.div key={i} className="dt-timeline-step" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
                <div className="dt-timeline-year">[{step.year}]</div>
                <div className="dt-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="dt-operate">
        <div className="pz-container">
          <motion.div className="dt-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="dt-section-label">SYS.OPERATE</p>
            <div className="dt-operate-top">
              <h2 className="dt-section-title">
                FOUR RULES WE <span className="dt-text-glow">DON'T<br/>BEND.</span>
              </h2>
              <p className="dt-operate-desc">
                They're not posters in the lunchroom. They're how loads
                get planned, how drivers get hired and how we answer
                the phone at 5am.
              </p>
            </div>
          </motion.div>

          <div className="dt-rules-grid">
            {rules.map((rule, i) => (
              <motion.div key={i} className="dt-rule-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
                <div className="dt-rule-num">RULE_{rule.num}</div>
                <h3 className="dt-rule-title">{rule.title}</h3>
                <p className="dt-rule-desc">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CREW */}
      <section className="dt-crew">
        <div className="pz-container">
          <motion.div className="dt-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="dt-section-label">USER.CREW</p>
            <h2 className="dt-section-title">
              THIRTY-ONE PEOPLE<br/>
              WHO <span className="dt-text-glow">LIKE THIS WORK.</span>
            </h2>
            <p className="dt-crew-desc">
              Our average driver has been with us six years. That matters more
              than any brochure: the same faces show up at your dock, learn
              your site, and know which gate to use. Dispatch, safety and
              maintenance all sit in the same Mississauga building — so
              problems get solved in a hallway instead of an inbox.
            </p>
          </motion.div>

          <motion.div className="dt-crew-stats" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="dt-crew-stat">
              <h3>31</h3>
              <p>Active Agents</p>
            </div>
            <div className="dt-crew-stat">
              <h3>6 yrs</h3>
              <p>Avg uptime</p>
            </div>
            <div className="dt-crew-stat">
              <h3>1 node</h3>
              <p>Central dispatch</p>
            </div>
          </motion.div>

          <motion.div className="dt-crew-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            {crewBadges.map((badge, i) => (
              <span key={i} className="dt-crew-badge">
                <span className="dt-check">✓</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="dt-cta">
        <div className="dt-cta-bg">
          <div className="dt-grid-bg"></div>
        </div>
        <div className="pz-container dt-cta-inner">
          <motion.div className="dt-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="dt-badge">CMD: REQUEST</span>
            <h2 className="dt-cta-title">
              LET'S MOVE YOUR<br/>
              <span className="dt-text-glow">NEXT LOAD.</span>
            </h2>
            <p className="dt-cta-desc">
              Send the details and you'll have a rate back the same<br/>
              business day — usually inside two hours.
            </p>
          </motion.div>
          <motion.div className="dt-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <a href="/quote" className="dt-btn dt-btn-primary">
              INITIALIZE QUOTE <ArrowUpRight size={18} />
            </a>
            <a href="tel:+19052910325" className="dt-btn dt-btn-secondary">
              <Phone size={18} /> CONTACT DISPATCH
            </a>
          </motion.div>
        </div>
        
        {/* FOOTER MARQUEE */}
        <div className="dt-footer-marquee">
          <div className="dt-marquee dt-marquee-huge">
            {[...locations, ...locations, ...locations].map((loc, i) => (
              <React.Fragment key={i}>
                <span className="dt-marquee-item-huge">{loc}</span>
                <span className="dt-marquee-dot-huge">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
