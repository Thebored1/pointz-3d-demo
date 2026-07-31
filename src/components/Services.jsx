"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Users, Forklift, Hammer, Store } from 'lucide-react';
import './Services.css';

const services = [
  { id: '01', title: 'Moffett Delivery', icon: Forklift, href: '/services/moffett-delivery', desc: 'Truck-mounted forklift delivery to any site — no dock, no on-site forklift, no waiting.' },
  { id: '02', title: 'Dedicated Fleet', icon: Users, href: '/services/dedicated-fleet', desc: 'Company-owned trucks and vetted drivers assigned to your lanes for consistent service.' },
  { id: '03', title: 'Construction Material', icon: Hammer, href: '/services/construction-material-delivery', desc: 'Lumber, drywall, roofing and steel placed where the job site actually needs it.' },
  { id: '04', title: 'Flatbed Transportation', icon: Truck, href: '/services/flatbed-transportation', desc: 'Open-deck transport for steel, lumber, machinery and oversized freight.' },
  { id: '05', title: 'Warehouse & Cross-Dock', icon: Warehouse, href: '/services/warehouse-cross-dock', desc: 'Stage, consolidate and store across Mississauga, Bolton and Brampton.' },
  { id: '06', title: 'Last Mile & Retail', icon: Store, href: '/services/last-mile-retail-delivery', desc: 'Scheduled route and store-level delivery, including white glove placement.' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>01</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What We Do</motion.span>
          </div>
          <motion.h2 className="services-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Built for the loads<br/>others turn down.</motion.h2>
          <motion.p className="services-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            Six of our twelve service lines. <Link href="/services" className="services-intro-link">See all services →</Link>
          </motion.p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={i} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Icon size={20} strokeWidth={1.5} />
                  <span className="service-id">{s.id}</span>
                  <h3>{s.title}</h3>
                  <p style={{fontSize: 'var(--fs-small)', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0}}>{s.desc}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
