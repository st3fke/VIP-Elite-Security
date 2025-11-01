import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { AboutPreview } from '../components/home/AboutPreview';
import { ContactCTA } from '../components/home/ContactCTA';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';
export function Home() {
  return(
  <>
  <Helmet>
        <title>VIP Elite Security — Elite Protection, Discreetly Delivered</title>
        <meta
          name="description"
          content="Elite private security from Serbia. Close protection, journey management, and cybersecurity for discerning clients."
        />
        <meta property="og:title" content="VIP Elite Security" />
        <meta property="og:description" content="Bespoke protection combining luxury and tactical professionalism." />
        <meta property="og:image" content="/homePageimg.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipelitesecurity.com" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vipelitesecurity.com" />
      </Helmet>
   <div className="w-full min-h-screen bg-black"> 
      <Navigation />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </div>;
    </>);
}