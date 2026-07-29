"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Users, Wrench } from 'lucide-react';
import './Services.css';

const services = [
  { id: '01', title: 'Specialty Equipment', icon: Wrench, href: '/services/specialty-equipment', desc: 'Moffett, linen and custom hauling configurations for loads that need the right gear.' },
  { id: '02', title: 'Dedicated Fleet', icon: Users, href: '/services/dedicated-fleet', desc: 'Company-owned trucks and vetted drivers assigned to your lanes for consistent service.' },
  { id: '03', title: 'Warehouse & Storage', icon: Warehouse, href: '/services/warehouse-and-storage', desc: 'Cross-dock, consolidate and store across Mississauga, Bolton and Brampton.' },
  { id: '04', title: 'Flatbed & Moffett', icon: Truck, href: '/services/specialty-equipment', desc: 'Open-deck transport and truck-mounted forklift delivery anywhere on site.' },
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
