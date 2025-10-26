import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { AboutPreview } from '../components/home/AboutPreview';
import { ContactCTA } from '../components/home/ContactCTA';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="w-full min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </div>;
}