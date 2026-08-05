"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Forklift, Users, Warehouse, HeartPulse, Timer, Clock } from 'lucide-react';
import './Services.css';

const services = [
  { id: '01', title: 'Flatbed & Moffett Transport', icon: Forklift, href: '/services/flatbed-moffett-transport', desc: 'Truck-mounted forklifts that unload on arrival — no dock, no on-site equipment required.' },
  { id: '02', title: 'Dedicated Fleet Services', icon: Users, href: '/services/dedicated-fleet-services', desc: 'Trucks, trailers, Moffett units, and drivers assigned to your account, planned around your schedule.' },
  { id: '03', title: 'Warehouse & Cross-Dock Storage', icon: Warehouse, href: '/services/warehouse-cross-dock-storage', desc: 'Secure, centrally located space to stage, consolidate, or store freight between transportation legs.' },
  { id: '04', title: 'Healthcare Linen & Textile Logistics', icon: HeartPulse, href: '/services/healthcare-linen-logistics', desc: 'Scheduling and handling built around the turnaround windows healthcare and linen operations run on.' },
  { id: '05', title: 'Expedited & Same-Day Freight', icon: Timer, href: '/services/expedited-same-day-freight', desc: 'Hot shot delivery when a shipment can’t wait for a standard schedule.' },
  { id: '06', title: '24/7 Dispatch & Weekend Delivery', icon: Clock, href: '/services/24-7-after-hours-weekend-dispatch', desc: 'A dispatcher on the line nights, weekends, and holidays — not a voicemail box.' },
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
            Explore our specialized capabilities. <Link href="/services" className="services-intro-link">See all services →</Link>
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
