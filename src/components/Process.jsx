"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Route, BarChart3, CheckCircle } from 'lucide-react';
import './Process.css';

const steps = [
  { num: '01', icon: Package, title: 'Intake', desc: 'Cargo received, scanned, and classified' },
  { num: '02', icon: Route, title: 'Route', desc: 'Optimal multi-modal routing calculated' },
  { num: '03', icon: BarChart3, title: 'Track', desc: 'Live tracking at every node' },
  { num: '04', icon: CheckCircle, title: 'Deliver', desc: 'Digital proof of delivery' }
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>02</motion.span>
          <motion.h2 className="process-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>How It Works</motion.h2>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} className="process-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="step-top">
                  <span className="step-num">{step.num}</span>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3>{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
