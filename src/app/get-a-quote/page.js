"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { heroContainer, fadeUp, textReveal, imageReveal, viewportOnce } from '../../lib/motion';
import '../../components/motion.css';
import './QuotePage.css';
import QuoteForm from './QuoteForm';

export default function GetAQuotePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <motion.div className="nat-hero" variants={heroContainer} initial="hidden" animate="visible">
        <motion.div variants={imageReveal} style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/need-truck-hero.webp" alt="Point Zero Road Lines fleet" fill sizes="100vw" priority style={{ objectFit: 'cover', objectPosition: 'left top' }} />
        </motion.div>
        <div className="nat-hero-overlay" />
        <h1>
          <div className="pz-mask-container">
            <motion.div variants={textReveal}>Get A</motion.div>
          </div>
          <div className="pz-mask-container">
            <motion.div variants={textReveal}>Quote</motion.div>
          </div>
        </h1>
      </motion.div>

      <main className="page-wrapper">
        <motion.section
          className="nat-form-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <QuoteForm />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
