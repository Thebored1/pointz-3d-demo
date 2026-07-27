"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './CareerPage.css'; 
import { CheckCircle2 } from 'lucide-react';

export default function CareerPage() {
  const requirements = [
    "Valid AZ Commercial Driver's License",
    "Clean abstract and CVOR",
    "Minimum 2 years of verifiable driving experience",
    "Strong commitment to safety and compliance",
    "Excellent communication and customer service skills"
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Banner - outside page-wrapper for full width */}
      <motion.div className="career-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.11.jpeg" alt="Career Hero" />
        <div className="career-hero-overlay"></div>
        <h1>Join Our Team</h1>
      </motion.div>

      <main className="page-wrapper">

        <motion.section 
          className="career-narrative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="career-narrative-text">
            <h2>Drive with Point Zero Roadlines</h2>
            <p>
              We are always looking for dedicated and experienced professionals to join our growing fleet. At Point Zero Roadlines, we understand that our drivers are the backbone of our operation.
            </p>
            <p>
              We are a dedicated team focused on quality, safety, and integrity. We treat our staff with the same respect and dignity that we offer our clients, ensuring a supportive and rewarding work environment.
            </p>
          </div>
          <div className="career-narrative-img">
            <img src="/images/WhatsApp%20Image%202026-07-25%20at%2014.28.05.jpeg" alt="Our Team" />
          </div>
        </motion.section>

        <section className="career-bento">
          <div className="career-bento-header">
            <motion.h2 className="career-bento-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why Choose Us?</motion.h2>
          </div>
          <div className="career-bento-grid">
            <motion.div className="career-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Competitive Pay</h3>
              <p>We offer industry-leading compensation packages that reflect your experience and dedication to the road.</p>
            </motion.div>
            <motion.div className="career-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3>Dedicated Routes</h3>
              <p>Enjoy the stability of dedicated fleet services with consistent lanes and predictable home time.</p>
            </motion.div>
            <motion.div className="career-bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3>Quality Equipment</h3>
              <p>Drive with confidence using our well-maintained, specialized fleet ranging from flatbeds to Moffetts.</p>
            </motion.div>
          </div>
        </section>

        <motion.section 
          className="career-bento"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ background: 'var(--bg-secondary)', padding: '4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 className="career-bento-title" style={{ marginBottom: '2rem' }}>Driver Requirements</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {requirements.map((req, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 color="var(--accent)" size={24} />
                  <span style={{ fontSize: '1.125rem', color: 'var(--text-main)' }}>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="career-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Ready to hit the road with us?</h2>
          <p>If you meet our requirements and share our core values of honesty, integrity, and safety, we want to hear from you.</p>
          <a href="/contact-us" className="career-cta-button">Apply Now</a>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
