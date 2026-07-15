"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Users, Clock, Wrench } from 'lucide-react';
import './Services.css';

const services = [
  { id: '01', title: 'Dedicated Fleet', icon: Truck },
  { id: '02', title: 'Warehouse & Cross-dock', icon: Warehouse },
  { id: '03', title: 'Dedicated Team', icon: Users },
  { id: '04', title: '24/7 Dispatch', icon: Clock },
  { id: '05', title: 'Specialty Equipment', icon: Wrench }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>01</motion.span>
          <motion.h2 className="services-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Services</motion.h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Icon size={20} strokeWidth={1.5} />
                <span className="service-id">{s.id}</span>
                <h3>{s.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
