import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LiveTracker from '../components/LiveTracker';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <LiveTracker />
      <Footer />
    </div>
  );
}
