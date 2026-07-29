"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import '../../../about/AboutPage.css';
import '../preview.css';

function PreviewBar({ active }) {
  return (
    <div className="sv-preview-bar">
      <span>Preview · Dedicated Fleet · full page</span>
      <div className="sv-preview-links">
        <Link href="/services/preview">All</Link>
        <Link href="/services/preview/a" className={active === 'a' ? 'active' : ''}>A Cinematic</Link>
        <Link href="/services/preview/b" className={active === 'b' ? 'active' : ''}>B Industrial</Link>
        <Link href="/services/preview/c" className={active === 'c' ? 'active' : ''}>C Catalog</Link>
        <Link href="/services/preview/d" className={active === 'd' ? 'active' : ''}>D About-style</Link>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const timeline = [
  { year: '01', title: 'Brief the lanes', desc: 'Share volume, corridors, equipment and service windows. We answer straight.' },
  { year: '02', title: 'Reserve capacity', desc: 'Trucks and drivers get locked against your cadence — not shopped load by load.' },
  { year: '03', title: 'Assign the crew', desc: 'Same faces on your docks. Same iron in the yard. Dispatch owns the account.' },
  { year: '04', title: 'Run the program', desc: 'Every load tracked end to end. If something slips, you hear it from us first.' },
];

const rules = [
  { num: '01', title: 'Your lanes, your trucks', desc: 'Capacity is reserved for your freight. No morning roulette on a load board.' },
  { num: '02', title: 'Same drivers, same sites', desc: 'Familiar crews learn your gates, your paperwork and your appointment windows.' },
  { num: '03', title: 'One desk owns it', desc: 'A real dispatcher — not a ticket queue — stays on the account from quote to delivery.' },
  { num: '04', title: 'Equipment that fits', desc: 'Flatbed, step-deck, Moffett and specialty configs can sit on the same dedicated program.' },
];

const stats = [
  { num: '01', value: '100%', label: 'Dedicated lanes', desc: 'Reserved for your freight' },
  { num: '02', value: '24/7', label: 'Dispatch coverage', desc: 'Someone who knows the load' },
  { num: '03', value: '3', label: 'Ontario hubs', desc: 'Mississauga · Bolton · Brampton' },
  { num: '04', value: '2012', label: 'On these roads', desc: 'Same standard since day one' },
];

const badges = [
  'Company-owned fleet', 'CVOR excellent', 'Moffett-certified operators', 'FAST / PARS ready', 'Direct dispatch line',
];

export default function PreviewD() {
  return (
    <div className="pz-about">
      <PreviewBar active="d" />

      {/* HERO — matches About */}
      <section className="pz-hero" style={{ paddingTop: 'clamp(3rem, 6vw, 60px)' }}>
        <div className="pz-container">
          <motion.div className="pz-hero-top" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="pz-badge">SERVICES · DEDICATED FLEET</span>
            <span className="pz-badge">POINT ZERO ROAD LINES</span>
          </motion.div>

          <motion.h1 className="pz-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            YOUR LANES.<br />
            <span className="text-cyan italic">YOUR TRUCKS.</span>
          </motion.h1>

          <motion.div className="pz-hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="pz-hero-desc">
              Dedicated fleet means company-owned trucks and vetted drivers
              assigned to your freight — consistent, accountable service across
              the GTA and Ontario. Not a revolving door of brokers.
            </p>
            <div className="pz-scroll-indicator">
              <span>SCROLL THE PROGRAM</span>
              <div className="pz-scroll-icon"><ArrowDown size={14} /></div>
            </div>
          </motion.div>

          <motion.div className="pz-hero-img-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Image
              src="/images/fleet-hero.webp"
              alt="Point Zero dedicated fleet"
              className="pz-hero-img"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* PROCESS — cinematic, image-forward (preview-only) */}
      <section className="sv-d-process">
        <div className="sv-d-process-bg">
          <Image
            src="/images/gallery-2.webp"
            alt="Point Zero flatbed with Moffett on dedicated run"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div className="sv-d-process-overlay" />
        </div>

        <div className="pz-container sv-d-process-inner">
          <motion.div className="sv-d-process-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="sv-d-process-label">HOW IT STARTS</p>
            <h2 className="sv-d-process-title">
              FROM BRIEF TO <span className="text-cyan italic">DEDICATED.</span>
            </h2>
            <p className="sv-d-process-desc">
              We lock capacity the way freight companies should — clear lanes,
              named crews, and a desk that answers when you call.
            </p>
          </motion.div>

          <div className="sv-d-process-steps">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                className="sv-d-process-step"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={i}
              >
                <span className="sv-d-process-num">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES — dark operate block */}
      <section className="pz-operate">
        <div className="pz-container">
          <motion.div className="pz-section-header-dark" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label-dark">THE PROGRAM</p>
            <div className="pz-operate-top">
              <h2 className="pz-section-title-dark">
                FOUR THINGS WE <span className="text-cyan italic">DON&apos;T<br />COMPROMISE.</span>
              </h2>
              <p className="pz-operate-desc">
                Dedicated only works if the promise is real. These are the
                commitments that sit on every assigned lane.
              </p>
            </div>
          </motion.div>

          <div className="pz-rules-list">
            {rules.map((rule, i) => (
              <motion.div key={i} className="pz-rule-row" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} custom={i}>
                <div className="pz-rule-num">{rule.num}</div>
                <h3 className="pz-rule-title">{rule.title}</h3>
                <p className="pz-rule-desc">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + BADGES */}
      <section className="pz-crew">
        <div className="pz-container">
          <motion.div className="pz-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="pz-section-label">THE NUMBERS</p>
            <h2 className="pz-section-title">
              CAPACITY YOU CAN<br />
              <span className="text-cyan italic">PLAN AROUND.</span>
            </h2>
            <p className="pz-crew-desc">
              Mississauga headquarters with sites in Bolton and Brampton.
              Flatbed, Moffett and specialty configs can sit on the same
              dedicated program — maintained company equipment, CVOR-excellent.
            </p>
          </motion.div>

          <motion.div
            className="pz-stats-grid"
            style={{ margin: '4rem 0 2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '3rem 0' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {stats.map((stat, i) => (
              <div key={i} className="pz-stat-card">
                <div className="pz-stat-num">{stat.num}</div>
                <h3 className="pz-stat-value">{stat.value}</h3>
                <p className="pz-stat-label">{stat.label}</p>
                <p className="pz-stat-desc">{stat.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div className="pz-crew-badges" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            {badges.map((badge, i) => (
              <span key={i} className="pz-crew-badge">
                <span className="pz-check">✓</span> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pz-cta">
        <div className="pz-cta-bg">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
            alt="Truck on highway"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="pz-cta-overlay" />
        </div>
        <div className="pz-container pz-cta-inner">
          <motion.div className="pz-cta-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="pz-badge-dark">READY WHEN YOU ARE</span>
            <h2 className="pz-cta-title">
              NEED A<br />
              <span className="text-cyan italic">DEDICATED TEAM?</span>
            </h2>
            <p className="pz-cta-desc">
              Tell us your lanes and volume. We&apos;ll put the right<br />
              trucks and drivers on them.
            </p>
          </motion.div>
          <motion.div className="pz-cta-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <Link href="/need-a-truck" className="pz-btn pz-btn-primary">
              Request a quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact-us" className="pz-btn pz-btn-outline">
              Contact dispatch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
