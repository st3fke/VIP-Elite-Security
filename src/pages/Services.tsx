import React, { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Star, Crown, Target, Users, Home, Car, Plane, Globe, ShieldCheck } from 'lucide-react';
import { CloseProtection } from '../components/services/CloseProtection';
import { CovertProtection } from '../components/services/CovertProtection';
import { FamilySecurity } from '../components/services/FamilySecurity';
import { ResidentialSecurity } from '../components/services/ResidentialSecurity';
import { EventSecurity } from '../components/services/EventSecurity';
import { TransportSecurity } from '../components/services/TransportSecurity';
import { TravelSecurity } from '../components/services/TravelSecurity';
import { CyberSecurity } from '../components/services/CyberSecurity';
import { ArmoredCarHire } from '../components/services/ArmoredCarHire';
import { ArmoredLuxuryTransport } from '../components/services/ArmoredLuxuryTransport';
import { BugSweeping } from '../components/services/BugSweeping';
import { HelicopterTransport } from '../components/services/HelicopterTransport';
import { ProtectiveSurveillance } from '../components/services/ProtectiveSurveillance';
import { ArmedSecurityDriver } from '../components/services/ArmedSecurityDriver';
import { SecurityDriver } from '../components/services/SecurityDriver';
import { JourneyManagement } from '../components/services/JourneyManagement';
import { MedicalSupport } from '../components/services/MedicalSupport';
import { RiskManagement } from '../components/services/RiskManagement';
import { ScrollToTop } from '../utils/scrollToTop';
import { Helmet } from 'react-helmet-async';
export function Services() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const serviceHighlights = [
    {
      icon: Target,
      title: t('services.highlights.cards.0.title'),
      description: t('services.highlights.cards.0.desc'),
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Users,
      title: t('services.highlights.cards.1.title'),
      description: t('services.highlights.cards.1.desc'),
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Home,
      title: t('services.highlights.cards.2.title'),
      description: t('services.highlights.cards.2.desc'),
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Car,
      title: t('services.highlights.cards.3.title'),
      description: t('services.highlights.cards.3.desc'),
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Plane,
      title: t('services.highlights.cards.4.title'),
      description: t('services.highlights.cards.4.desc'),
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      icon: Globe,
      title: t('services.highlights.cards.5.title'),
      description: t('services.highlights.cards.5.desc'),
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const stats = [
    { number: t('services.stats.0.number'), label: t('services.stats.0.label') },
    { number: t('services.stats.1.number'), label: t('services.stats.1.label') },
    { number: t('services.stats.2.number'), label: t('services.stats.2.label') },
    { number: t('services.stats.3.number'), label: t('services.stats.3.label') }
  ];

  return (
    <>
    <Helmet>
        <title>VIP Elite Security — Elite Protection, Discreetly Delivered</title>
        <meta
          name="description"
          content="Elite private security from Serbia. Close protection, journey management, and cybersecurity for discerning clients."
        />
        <meta property="og:title" content="VIP Elite Security" />
        <meta property="og:description" content="Bespoke protection combining luxury and tactical professionalism." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipelitesecurity.com" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vipelitesecurity.com" />
      </Helmet>
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-black" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] bg-[#FF0000] rounded-full blur-[100px] md:blur-[220px]"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 md:left-20 text-red-400 opacity-60"
        >
          <Star className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 md:right-20 text-red-400 opacity-60"
        >
          <Crown className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 text-red-400 opacity-40"
        >
          <Shield className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-[1200px] mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 border border-[#FF0000]/30 bg-[#FF0000]/10 mb-6 md:mb-10 rounded-full"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF0000] rounded-full"
            />
            <span className="text-[#FF0000] text-xs tracking-[0.2em] uppercase font-light">
              {t('services.hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 md:mb-6"
          >
            <motion.span variants={itemVariants} className="block">{t('services.hero.title1')}</motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#DD0000] to-[#FF0000]">
              {t('services.hero.title2')}
            </motion.span>
            <motion.span variants={itemVariants} className="block">{t('services.hero.title3')}</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#aaa] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            {t('services.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 bg-[#FF0000] text-white font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('services.hero.btn1')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "#FF0000", backgroundColor: "rgba(255, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-[0.2em] rounded-lg transition-all"
            >
              {t('services.hero.btn2')}
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#070707] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
              {t('services.highlights.sectionBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3 mb-4 md:mb-6">
              {t('services.highlights.title')}
            </h2>
            <p className="text-[#999] text-base md:text-lg max-w-2xl mx-auto">
              {t('services.highlights.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 hover:border-[#FF0000]/40 transition-all duration-500 group relative overflow-hidden ${service.gradient}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-14 h-14 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF0000] transition-colors"
                    >
                      <Icon className="w-7 h-7 text-[#FF0000] group-hover:text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF0000] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#aaa] font-light leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-[#FF0000] mt-4"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="relative py-20 md:py-32 bg-gradient-to-t from-black via-[#080000] to-black">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-[#FF0000] mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#aaa] text-sm md:text-base font-light uppercase tracking-[0.1em] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0000] to-black" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto space-y-6 md:space-y-10 px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#FF0000]/30 bg-[#FF0000]/10 rounded-full mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#FF0000]" />
            <span className="text-[#FF0000] text-xs tracking-[0.2em] uppercase font-light">
              {t('services.cta.badge')}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            {t('services.cta.title')}
          </h2>
          
          <p className="text-[#aaa] text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t('services.cta.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 bg-[#FF0000] text-white font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('services.cta.button')}
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

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
      <RiskManagement />
      <JourneyManagement />
      <MedicalSupport />
      
      <Footer />
      <ScrollToTop />
    </div>
    </>
  );
}