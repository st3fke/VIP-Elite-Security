import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Shield, Star, Crown } from 'lucide-react'; // Added icons for luxury
import { CloseProtection } from '../components/services/CloseProtection';
import { CovertProtection } from '../components/services/CovertProtection';
import { FamilySecurity } from '../components/services/FamilySecurity';
import { ResidentialSecurity } from '../components/services/ResidentialSecurity';
import { EventSecurity } from '../components/services/EventSecurity';
import { TransportSecurity } from '../components/services/TransportSecurity';
import { TravelSecurity } from '../components/services/TravelSecurity';
import { CyberSecurity } from '../components/services/CyberSecurity';

import { ArmedSecurityDriver } from '../components/services/ArmedSecurityDriver';
import { ArmoredCarHire } from '../components/services/ArmoredCarHire';
import { ArmoredLuxuryTransport } from '../components/services/ArmoredLuxuryTransport';
import { BugSweeping } from '../components/services/BugSweeping';
import { HelicopterTransport } from '../components/services/HelicopterTransport';
import { ProtectiveSurveillance } from '../components/services/ProtectiveSurveillance';
import { SecurityDriver } from '../components/services/SecurityDriver';

export function Services() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navigation />
      
      {/* Enhanced Hero Section for Services */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Luxury Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent"></div>

        {/* Floating Luxury Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-12 text-red-400 opacity-60"
        >
          <Star className="w-10 h-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-16 right-12 text-red-400 opacity-60"
        >
          <Crown className="w-10 h-10" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Enhanced Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 mb-6 tracking-tight leading-tight drop-shadow-2xl"
            >
              Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Services
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gray-400" />
              <Shield className="w-6 h-6 text-red-500" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gray-400" />
            </motion.div>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed drop-shadow-lg"
          >
            Comprehensive security solutions tailored to meet the unique needs
            of our elite clientele
          </motion.p>
        </div>
      </section>

      {/* Service Components */}
      <CloseProtection />
      <CovertProtection />
      <FamilySecurity />
      <ResidentialSecurity />
      <EventSecurity />
      <TransportSecurity />
      <TravelSecurity />
      <CyberSecurity />
      <ArmoredCarHire />
      <ArmoredLuxuryTransport />
      <BugSweeping />
      <HelicopterTransport />
      <ProtectiveSurveillance />
      <SecurityDriver />
      <ArmedSecurityDriver />

      <Footer />
    </div>
  );
}