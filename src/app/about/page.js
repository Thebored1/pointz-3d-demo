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
    "MOFFETT DELIVERY", "DEDICATED FLEET", "FLATBED FREIGHT", "CROSS-DOCK", "CONSTRUCTION LOGISTICS", "LAST MILE"
  ];

  const stats = [
    { num: '01', value: '26', label: 'Trucks in fleet', desc: 'Flatbed, step-deck & Moffett' },
    { num: '02', value: '20 yrs', label: 'On Ontario roads', desc: 'Moving freight since 2006' },
    { num: '03', value: '99.8%', label: 'On-time delivery', desc: 'Rolling 12-month avg' },
    { num: '04', value: '3', label: 'Ontario hubs', desc: 'Mississauga, Bolton & Brampton' },
  ];

  const storySteps = [
    { year: '2006', title: 'One truck, one lane', desc: 'Founded hauling steel between Hamilton and the GTA, on the promise of showing up when we said we would.' },
    { year: '2014', title: 'Moffett forklifts added', desc: 'First truck-mounted forklifts put on the road so crews could unload anywhere on site — no dock, no waiting.' },
    { year: '2020', title: 'Mississauga cross-dock', desc: 'Warehouse and cross-dock space opened, letting us stage, sort and reload freight under the same roof as the trucks.' },
    { year: '2026', title: 'Twelve service lines', desc: 'Moffett delivery, dedicated fleet, flatbed, warehousing and last mile — run by the same dispatch team that started it all.' },
  ];

  const rules = [
    { num: '01', title: 'Quality', desc: 'Held to a standard set by what the job requires, not the minimum a client would accept. That is what nearly two decades of repeat customers is built on.' },
    { num: '02', title: 'Safety', desc: 'Every driver operates under Hours of Service, MTO and HTA regulations — non-negotiable, on every load. Equipment runs on a regular inspection and service schedule.' },
    { num: '03', title: 'Integrity', desc: 'Clients and partners get a straight answer, including when the answer is that a timeline needs to move. You hear it from us first, not from your customer.' },
    { num: '04', title: 'Innovation', desc: 'Investing in Moffett-equipped trucks, warehousing and tracking technology is how we deliver where others cannot — and how you can see your load move in real time.' },
  ];

  const crewBadges = [
    "Moffett-equipped fleet", "Company-owned trucks",
    "Bonded and insured", "24/7 dispatch", "Live truck tracking"
  ];

  const locations = ["MISSISSAUGA", "BOLTON", "BRAMPTON", "HAMILTON", "KITCHENER", "OTTAWA"];

  return (
    <div className="pz-about">
      <Navbar />

      <EditorialHero
        badge="ABOUT POINT ZERO"
        badgeAlt="EST. 2006 • MISSISSAUGA"
        titleLine1="BUILT ON RELIABILITY."
        titleAccent="DRIVEN BY INNOVATION."
        description="Since 2006, Point Zero Road Lines has helped businesses move freight safely, efficiently and on schedule. What began as a transportation company has grown into one of Ontario's trusted providers of Moffett delivery, dedicated fleet services, flatbed transportation, warehousing and specialized logistics."
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
                MORE THAN <span className="text-cyan italic">MOVING FREIGHT.</span>
              </motion.h2>
            </div>
            <motion.p className="pz-story-desc" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Transportation is about helping our customers succeed. Over nearly two
              decades we have expanded to meet changing needs — investing in
              Moffett-equipped trucks, flatbeds, dry vans, warehousing and dispatch
              technology, so a complete solution comes from one trusted partner.
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
            <p className="pz-section-label-dark">WHAT DRIVES US</p>
            <div className="pz-operate-top">
              <h2 className="pz-section-title-dark">
                FOUR THINGS WE <span className="text-cyan italic">DON&apos;T<br/>BEND ON.</span>
              </h2>
              <p className="pz-operate-desc">
                Our mission is simple: safe, reliable and innovative
                transportation and Moffett delivery that keeps our
                customers&apos; businesses moving.
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
            <p className="pz-section-label">WHY CUSTOMERS CHOOSE US</p>
            <h2 className="pz-section-title">
              OUR VISION IS TO BE<br/>
              ONTARIO&apos;S <span className="text-cyan italic">MOST TRUSTED.</span>
            </h2>
            <p className="pz-crew-desc">
              Nearly twenty years of transportation experience, specialized Moffett
              expertise, and a modern fleet of tractors, trailers, flatbeds and
              Moffett units. Dispatch, safety and maintenance all sit in the same
              Mississauga building — so problems get solved in a hallway instead of
              an inbox, and the latest tracking technology means you can see where
              your truck is at any point.
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
            <a href="/get-a-quote" className="pz-btn pz-btn-primary">
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
