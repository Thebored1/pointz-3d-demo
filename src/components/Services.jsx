"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Users, Clock, Wrench, Navigation } from 'lucide-react';
import './Services.css';

const services = [
  { id: '01', title: 'Flatbed hauling', icon: Truck, desc: 'Open-deck transport for steel, lumber, machinery and oversized freight — secured and tarped to spec.' },
  { id: '02', title: 'Moffett & piggyback', icon: Navigation, desc: 'Truck-mounted forklift delivery to any site — no dock, no problem. Curbside offloading across the GTA.' },
  { id: '03', title: 'Cross-dock & warehousing', icon: Warehouse, desc: 'Transload, consolidate and store between our three Ontario sites with full chain-of-custody.' },
  { id: '04', title: 'Specialty & linen equipment', icon: Wrench, desc: 'Dedicated equipment for the linen industry and specialty freight in all sizes and configurations.' },
  { id: '05', title: 'Dedicated fleet', icon: Users, desc: 'Company-owned trucks and vetted drivers assigned to your lanes for consistent, accountable service.' },
  { id: '06', title: '24/7 dispatch', icon: Clock, desc: 'Live coordination around the clock. One call reaches a dispatcher who owns your load end to end.' }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>01</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What We Do</motion.span>
          </div>
          <motion.h2 className="services-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Built for the loads<br/>others turn down.</motion.h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Icon size={20} strokeWidth={1.5} />
                <span className="service-id">{s.id}</span>
                <h3>{s.title}</h3>
                <p style={{fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0}}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
