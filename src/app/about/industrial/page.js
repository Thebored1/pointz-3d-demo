"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, HardHat } from 'lucide-react';
import './Industrial.css';

export default function IndustrialPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const marqueeItems = [
    "HEAVY LOAD", "CAUTION: WIDE TURNS", "OVERSIZE", "NO CLEARANCE", "SAFETY FIRST"
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
    "CVOR EXCELLENT", "$5M COVERAGE", "FAST / PARS CERT",
    "WSIB CLEARED", "SMARTWAY", "MOFFETT OP"
  ];

  const locations = ["MISSISSAUGA", "BOLTON", "BRAMPTON", "HAMILTON", "KITCHENER", "OTTAWA"];

  return (
    <div className="pz-industrial">
      <Navbar />

      {/* HERO SECTION */}
      <section className="in-hero">
        <div className="pz-container">
          <motion.div className="in-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="in-badge"><HardHat size={14} /> HEAVY DUTY DIVISION</span>
            <span className="in-badge">OPERATIONAL</span>
          </motion.div>
          
          <motion.h1 className="in-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            BUILT BY DRIVERS<br />
            <span className="in-text-orange">RUN LIKE CLOCKWORK.</span>
          </motion.h1>

          <motion.div className="in-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="in-hero-desc">
              Point Zero Road Lines started with one flatbed and one promise:
              show up when we said we would. Fourteen years later that promise
              still runs the yard — twenty-six trucks, a dispatch desk that
              answers on the second ring, and drivers who treat your freight like
              it's theirs.
            </p>
            <div className="in-scroll-indicator">
              <span>PULL DOWN</span>
              <div className="in-scroll-icon"><ArrowDown size={18} strokeWidth={3} /></div>
            </div>
          </motion.div>

          <motion.div className="in-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000" alt="Fleet of trucks" className="in-hero-img" fill sizes="(max-width: 768px) 100vw, 1400px" priority style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="in-marquee-container">
        <div className="in-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="in-marquee-item">{item}</span>
              <span className="in-marquee-dot">X</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="in-stats">
        <div className="pz-container in-stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} className="in-stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
              <div className="in-stat-num">NO.{stat.num}</div>
              <h3 className="in-stat-value">{stat.value}</h3>
              <p className="in-stat-label">{stat.label}</p>
              <p className="in-stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="in-story">
        <div className="pz-container">
          <motion.div className="in-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="in-section-label">01 // LOGBOOK</p>
            <h2 className="in-section-title">
              FOURTEEN<br />YEARS OF<br />
              <span className="in-text-orange">SHOWING UP.</span>
            </h2>
            <p className="in-section-desc">
              We grew the way freight companies should — one
              satisfied shipper at a time. No overpromising, no mystery
              surcharges, no trucks that leave the yard before the pre-trip's done.
            </p>
          </motion.div>

          <div className="in-timeline">
            {storySteps.map((step, i) => (
              <motion.div key={i} className="in-timeline-step" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
                <div className="in-timeline-year">{step.year}</div>
                <div className="in-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="in-operate">
        <div className="pz-container">
          <motion.div className="in-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="in-section-label">02 // PROTOCOL</p>
            <div className="in-operate-top">
              <h2 className="in-section-title">
                FOUR RULES WE <span className="in-text-orange">DON'T<br/>BEND.</span>
              </h2>
              <p className="in-operate-desc">
                They're not posters in the lunchroom. They're how loads
                get planned, how drivers get hired and how we answer
                the phone at 5am.
              </p>
            </div>
          </motion.div>

          <div className="in-rules-grid">
            {rules.map((rule, i) => (
              <motion.div key={i} className="in-rule-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
                <div className="in-rule-num">P-{rule.num}</div>
                <h3 className="in-rule-title">{rule.title}</h3>
                <p className="in-rule-desc">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CREW */}
      <section className="in-crew">
        <div className="pz-container">
          <motion.div className="in-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="in-section-label">03 // PERSONNEL</p>
            <h2 className="in-section-title">
              THIRTY-ONE PEOPLE<br/>
              WHO <span className="in-text-orange">LIKE THIS WORK.</span>
            </h2>
            <p className="in-crew-desc">
              Our average driver has been with us six years. That matters more
              than any brochure: the same faces show up at your dock, learn
              your site, and know which gate to use. Dispatch, safety and
              maintenance all sit in the same Mississauga building — so
              problems get solved in a hallway instead of an inbox.
            </p>
          </motion.div>

          <motion.div className="in-crew-stats" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="in-crew-stat">
              <h3>31</h3>
              <p>Team members</p>
            </div>
            <div className="in-crew-stat">
              <h3>6 yrs</h3>
              <p>Avg tenure</p>
            </div>
            <div className="in-crew-stat">
              <h3>1 HQ</h3>
              <p>Central operation</p>
            </div>
          </motion.div>

          <motion.div className="in-crew-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            {crewBadges.map((badge, i) => (
              <span key={i} className="in-crew-badge">
                <span className="in-check">X</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="in-cta">
        <div className="in-cta-bg"></div>
        <div className="pz-container in-cta-inner">
          <motion.div className="in-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="in-badge-dark">ACTION REQUIRED</span>
            <h2 className="in-cta-title">
              LET'S MOVE YOUR<br/>
              <span className="in-text-orange">NEXT LOAD.</span>
            </h2>
            <p className="in-cta-desc">
              Send the details and you'll have a rate back the same<br/>
              business day — usually inside two hours.
            </p>
          </motion.div>
          <motion.div className="in-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <a href="/quote" className="in-btn in-btn-primary">
              REQUEST QUOTE <ArrowUpRight size={24} strokeWidth={3} />
            </a>
            <a href="tel:+19052910325" className="in-btn in-btn-secondary">
              CALL DISPATCH
            </a>
          </motion.div>
        </div>
        
        {/* FOOTER MARQUEE */}
        <div className="in-footer-marquee">
          <div className="in-marquee in-marquee-huge">
            {[...locations, ...locations, ...locations].map((loc, i) => (
              <React.Fragment key={i}>
                <span className="in-marquee-item-huge">{loc}</span>
                <span className="in-marquee-dot-huge">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
