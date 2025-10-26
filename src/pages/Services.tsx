import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
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
  return <div className="w-full min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Our <span className="text-primary-red">Services</span>
          </h1>
          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-16">
            Comprehensive security solutions tailored to meet the unique needs
            of our elite clientele
          </p>
        </div>
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
      </div>
      <Footer />
    </div>;
}