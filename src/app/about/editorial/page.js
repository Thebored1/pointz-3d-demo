"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import './Editorial.css';

export default function EditorialPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const stats = [
    { num: 'I.', value: '26', label: 'Trucks in fleet', desc: 'Flatbed, step-deck & Moffett' },
    { num: 'II.', value: '14 yrs', label: 'On Ontario roads', desc: 'Family run since 2012' },
    { num: 'III.', value: '99.8%', label: 'On-time delivery', desc: 'Rolling 12-month avg' },
    { num: 'IV.', value: '2.1M', label: 'Safe km per year', desc: 'CVOR excellent rating' },
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

  return (
    <div className="pz-editorial">
      <Navbar />

      {/* HERO SECTION */}
      <section className="ed-hero">
        <div className="pz-container">
          <div className="ed-hero-grid">
            <motion.div className="ed-hero-text" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <p className="ed-hero-kicker">Est. 2012 — Mississauga, ON</p>
              <h1 className="ed-hero-title">
                The Art of <br />
                <span className="ed-italic">Freight.</span>
              </h1>
              <p className="ed-hero-desc">
                Point Zero Road Lines started with one flatbed and one promise:
                show up when we said we would. Fourteen years later that promise
                still runs the yard — twenty-six trucks, a dispatch desk that
                answers on the second ring, and drivers who treat your freight like
                it's theirs.
              </p>
              <div className="ed-scroll-indicator">
                <div className="ed-scroll-line"></div>
                <span>Discover the story</span>
              </div>
            </motion.div>
            <motion.div className="ed-hero-image" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
                <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200" alt="Fleet of trucks" fill sizes="(max-width: 768px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="ed-stats">
        <div className="pz-container">
          <div className="ed-stats-header">
            <h2 className="ed-stats-title">By the Numbers</h2>
            <div className="ed-divider"></div>
          </div>
          <div className="ed-stats-grid">
            {stats.map((stat, i) => (
              <motion.div key={i} className="ed-stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
                <div className="ed-stat-num">{stat.num}</div>
                <h3 className="ed-stat-value">{stat.value}</h3>
                <p className="ed-stat-label">{stat.label}</p>
                <p className="ed-stat-desc">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="ed-story">
        <div className="pz-container">
          <motion.div className="ed-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="ed-kicker">Chapter I</p>
            <h2 className="ed-section-title">
              Fourteen Years <br />
              <span className="ed-italic">of Showing Up.</span>
            </h2>
          </motion.div>

          <div className="ed-story-grid">
            <motion.div className="ed-story-image" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4' }}>
                <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" alt="Truck on highway" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
              </div>
              <p className="ed-image-caption">Early runs in the Greater Toronto Area.</p>
            </motion.div>
            <div className="ed-timeline">
              <p className="ed-story-intro">
                We grew the way freight companies should — one satisfied shipper at a time. No overpromising, no mystery surcharges, no trucks that leave the yard before the pre-trip's done.
              </p>
              {storySteps.map((step, i) => (
                <motion.div key={i} className="ed-timeline-step" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
                  <div className="ed-timeline-year">{step.year}</div>
                  <div className="ed-timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="ed-operate">
        <div className="pz-container">
          <div className="ed-operate-wrapper">
            <motion.div className="ed-operate-text" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="ed-kicker">Chapter II</p>
              <h2 className="ed-section-title">
                Four Rules We <br /><span className="ed-italic">Don't Bend.</span>
              </h2>
              <p className="ed-operate-desc">
                They're not posters in the lunchroom. They're how loads get planned, how drivers get hired and how we answer the phone at 5am.
              </p>
            </motion.div>
            
            <div className="ed-rules-list">
              {rules.map((rule, i) => (
                <motion.div key={i} className="ed-rule-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
                  <div className="ed-rule-num">{rule.num}</div>
                  <div className="ed-rule-content">
                    <h3>{rule.title}</h3>
                    <p>{rule.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE CREW */}
      <section className="ed-crew">
        <div className="pz-container">
          <motion.div className="ed-section-header-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="ed-kicker">Chapter III</p>
            <h2 className="ed-section-title">
              Thirty-One People <br /><span className="ed-italic">Who Like This Work.</span>
            </h2>
            <div className="ed-divider-center"></div>
            <p className="ed-crew-desc">
              Our average driver has been with us six years. That matters more than any brochure: the same faces show up at your dock, learn your site, and know which gate to use. Dispatch, safety and maintenance all sit in the same Mississauga building — so problems get solved in a hallway instead of an inbox.
            </p>
          </motion.div>

          <motion.div className="ed-crew-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            {crewBadges.map((badge, i) => (
              <span key={i} className="ed-crew-badge">{badge}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="ed-cta">
        <div className="pz-container">
          <div className="ed-cta-box">
            <motion.div className="ed-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="ed-kicker">Epilogue</p>
              <h2 className="ed-cta-title">
                Let's move your <br /><span className="ed-italic">next load.</span>
              </h2>
              <p className="ed-cta-desc">
                Send the details and you'll have a rate back the same business day — usually inside two hours.
              </p>
              <div className="ed-cta-actions">
                <a href="/quote" className="ed-btn ed-btn-primary">
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
