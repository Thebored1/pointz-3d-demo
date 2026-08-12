import React from 'react';
import SplitLayout from '../components/SplitLayout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import Process from '../components/Process';
import About from '../components/About';
import Fleet from '../components/Fleet';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
};

export default function Home() {
  return (
    <>
      <SplitLayout>
        <Hero />
        <Services />
        <VideoSection />
        <Process />
        <About />
        <Fleet />
        <CTA />
      </SplitLayout>
      <Footer />
    </>
  );
}
