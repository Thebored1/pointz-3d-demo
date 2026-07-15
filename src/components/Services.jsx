"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Air Freight',
    description: 'Expedited global transit tailored for time-sensitive cargo, prioritizing efficiency and scale.'
  },
  {
    title: 'Ocean Logistics',
    description: 'Comprehensive maritime solutions offering reliable capacities and structured scheduling.'
  },
  {
    title: 'Ground Transport',
    description: 'A meticulous fleet network providing precise, uninterrupted domestic distribution.'
  },
  {
    title: 'Warehousing',
    description: 'Curated storage environments driven by rigorous inventory algorithms and design.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Our <span className="text-accent">Services.</span></h2>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-number">0{idx + 1}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
