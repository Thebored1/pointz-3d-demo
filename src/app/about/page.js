"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditorialHero from '../../components/EditorialHero';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { fadeUp, fadeUpSoft, fadeIn, slideLeft, slideRight, viewportOnce } from '../../lib/motion';
import './AboutPage.css';

export default function AboutPage() {
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
    "CVOR Excellent rating", "FAST / PARS certified drivers",
    "WSIB clearance on file", "SmartWay registered fleet", "Moffett-certified operators"
  ];

  const locations = ["MISSISSAUGA", "BOLTON", "BRAMPTON", "HAMILTON", "KITCHENER", "OTTAWA"];

  return (
    <div className="pz-about">
      <Navbar />

      <EditorialHero
        badge="ABOUT POINT ZERO"
        badgeAlt="EST. 2012 • MISSISSAUGA"
        titleLine1="BUILT BY DRIVERS,"
        titleAccent="RUN LIKE CLOCKWORK."
        description="Point Zero Road Lines started with one flatbed and one promise: show up when we said we would. Fourteen years later that promise still runs the yard — twenty-six trucks, a dispatch desk that answers on the second ring, and drivers who treat your freight like it's theirs."
        scrollLabel="SCROLL FOR THE STORY"
        heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000"
        heroAlt="Fleet of trucks"
      />

      {/* MARQUEE */}
      <div className="pz-marquee-container">
        <div className="pz-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="pz-marquee-item">{item}</span>
              <span className="pz-marquee-dot">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* OUR STORY */}
      <section className="pz-story">
        <div className="pz-container">
          <motion.div className="pz-story-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="pz-story-title-wrapper">
              <motion.p className="pz-section-label" variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce}>OUR STORY</motion.p>
              <motion.h2 className="pz-story-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
                FOURTEEN YEARS OF <span className="text-cyan italic">SHOWING UP.</span>
              </motion.h2>
            </div>
            <motion.p className="pz-story-desc" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              We grew the way freight companies should — one
              satisfied shipper at a time. No overpromising, no mystery
              surcharges, no trucks that leave the yard before the pre-trip&apos;s done.
            </motion.p>
          </motion.div>

          <div className="pz-timeline">
            {storySteps.map((step, i) => (
              <motion.div key={i} className="pz-timeline-step" variants={fadeUpSoft} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                <div className="pz-timeline-year">{step.year}</div>
                <div className="pz-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="pz-operate">
        <div className="pz-container">
          <motion.div className="pz-section-header-dark" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label-dark">HOW WE OPERATE</p>
            <div className="pz-operate-top">
              <h2 className="pz-section-title-dark">
                FOUR RULES WE <span className="text-cyan italic">DON&apos;T<br/>BEND.</span>
              </h2>
              <p className="pz-operate-desc">
                They&apos;re not posters in the lunchroom. They&apos;re how loads
                get planned, how drivers get hired and how we answer
                the phone at 5am.
              </p>
            </div>
          </motion.div>

          <div className="pz-rules-list">
            {rules.map((rule, i) => (
              <motion.div key={i} className="pz-rule-row" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={i}>
                <div className="pz-rule-num">{rule.num}</div>
                <h3 className="pz-rule-title">{rule.title}</h3>
                <p className="pz-rule-desc">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CREW */}
      <section className="pz-crew">
        <div className="pz-container">
          <motion.div className="pz-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label">THE CREW</p>
            <h2 className="pz-section-title">
              THIRTY-ONE PEOPLE<br/>
              WHO <span className="text-cyan italic">LIKE THIS WORK.</span>
            </h2>
            <p className="pz-crew-desc">
              Our average driver has been with us six years. That matters more
              than any brochure: the same faces show up at your dock, learn
              your site, and know which gate to use. Dispatch, safety and
              maintenance all sit in the same Mississauga building — so
              problems get solved in a hallway instead of an inbox.
            </p>
          </motion.div>

          <motion.div className="pz-stats-grid" style={{ margin: "4rem 0 2rem", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "3rem 0" }} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {stats.map((stat, i) => (
              <motion.div key={i} className="pz-stat-card" variants={fadeUpSoft} custom={i}>
                <div className="pz-stat-num">{stat.num}</div>
                <h3 className="pz-stat-value">{stat.value}</h3>
                <p className="pz-stat-label">{stat.label}</p>
                <p className="pz-stat-desc">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="pz-crew-badges" initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {crewBadges.map((badge, i) => (
              <motion.span key={i} className="pz-crew-badge" variants={fadeUpSoft} custom={i}>
                <span className="pz-check">✓</span> {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pz-cta">
        <div className="pz-cta-bg">
          <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" alt="Truck on highway" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className="pz-cta-overlay"></div>
        </div>
        <div className="pz-container pz-cta-inner">
          <motion.div className="pz-cta-content" variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="pz-badge-dark">READY WHEN YOU ARE</span>
            <h2 className="pz-cta-title">
              LET&apos;S MOVE YOUR<br/>
              <span className="text-cyan italic">NEXT LOAD.</span>
            </h2>
            <p className="pz-cta-desc">
              Send the details and you&apos;ll have a rate back the same<br/>
              business day — usually inside two hours.
            </p>
          </motion.div>
          <motion.div className="pz-cta-actions" variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            <a href="/quote" className="pz-btn pz-btn-primary">
              Request a quote <ArrowUpRight size={18} />
            </a>
            <a href="tel:+19052910325" className="pz-btn pz-btn-secondary">
              <Phone size={18} /> Call dispatch
            </a>
          </motion.div>
        </div>
        
        {/* FOOTER MARQUEE */}
        <div className="pz-footer-marquee">
          <div className="pz-marquee pz-marquee-huge">
            {[...locations, ...locations, ...locations].map((loc, i) => (
              <React.Fragment key={i}>
                <span className="pz-marquee-item-huge">{loc}</span>
                <span className="pz-marquee-dot-huge">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
