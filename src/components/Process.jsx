"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Route, BarChart3, CheckCircle } from 'lucide-react';
import './Process.css';

const steps = [
  { num: '01', icon: Package, title: 'Quote', desc: 'Send us your lane and load. We respond fast with a straight answer.' },
  { num: '02', icon: Route, title: 'Dispatch', desc: 'The right equipment and driver are assigned and routed for your job.' },
  { num: '03', icon: BarChart3, title: 'In transit', desc: 'Secured, tarped and tracked. Our dispatcher stays on your load end to end.' },
  { num: '04', icon: CheckCircle, title: 'Delivered', desc: 'Offloaded where you need it — dock or curbside — with confirmation.' }
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <motion.span className="section-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>03</motion.span>
            <motion.span style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>How It Works</motion.span>
          </div>
          <motion.h2 className="process-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>One call to delivered.</motion.h2>
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
