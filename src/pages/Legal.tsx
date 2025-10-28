import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Shield, Eye, FileText, AlertTriangle, Award, Star, Crown, Check, Scale, Lock } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

// Define types for the translation data
interface TranslationPoints {
  [key: string]: string[];
}

export function Legal() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const privacyRef = useRef(null);
  const termsRef = useRef(null);
  const additionalRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const privacyInView = useInView(privacyRef, { once: true, amount: 0.2 });
  const termsInView = useInView(termsRef, { once: true, amount: 0.2 });
  const additionalInView = useInView(additionalRef, { once: true, amount: 0.2 });

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

  // Get translation points with proper typing
  const privacyPoints = t('legal.privacy.points', { returnObjects: true }) as string[];
  const termsPoints = t('legal.terms.points', { returnObjects: true }) as string[];

  return (
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
              {t('legal.hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 md:mb-6"
          >
            <motion.span variants={itemVariants} className="block">{t('legal.hero.title1')}</motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#DD0000] to-[#FF0000]">
              {t('legal.hero.title2')}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#aaa] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('legal.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id='privacy' ref={privacyRef} className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#070707] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={privacyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
              {t('legal.privacy.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3 mb-4 md:mb-6">
              {t('legal.privacy.title').split(' ')[0]} <span className="text-[#FF0000]">{t('legal.privacy.title').split(' ')[1]}</span>
            </h2>
            <p className="text-[#999] text-base md:text-lg max-w-2xl mx-auto">
              {t('legal.privacy.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={privacyInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 hover:border-[#FF0000]/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4 md:gap-5 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 flex-shrink-0"
                  >
                    <Lock className="w-6 h-6 md:w-7 md:h-7 text-[#FF0000]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t('legal.privacy.badge')}</h3>
                    <p className="text-[#FF0000] text-sm md:text-base">VIP Elite Security</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {privacyPoints.map((point: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={privacyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 border border-[#FF0000]/60 bg-[#FF0000]/10 flex items-center justify-center rounded-md group-hover:bg-[#FF0000] transition flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FF0000] group-hover:text-white" />
                      </div>
                      <span className="text-[#aaa] text-sm font-light group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={privacyInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square border border-[#1a1a1a] rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] flex items-center justify-center p-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={privacyInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-[#FF0000]/10 rounded-full flex items-center justify-center border border-[#FF0000]/20"
                  >
                    <Eye className="w-10 h-10 md:w-12 md:h-12 text-[#FF0000]" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('legal.privacy.sideTitle')}</h3>
                    <p className="text-[#999] text-sm md:text-base">
                      {t('legal.privacy.sideSubtitle')}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TERMS & CONDITIONS SECTION */}
      <section id='terms' ref={termsRef} className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#050505] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={termsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
              {t('legal.terms.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3 mb-4 md:mb-6">
              {t('legal.terms.title').split(' & ')[0]} & <span className="text-[#FF0000]">{t('legal.terms.title').split(' & ')[1]}</span>
            </h2>
            <p className="text-[#999] text-base md:text-lg max-w-2xl mx-auto">
              {t('legal.terms.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={termsInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square border border-[#1a1a1a] rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] flex items-center justify-center p-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={termsInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-[#FF0000]/10 rounded-full flex items-center justify-center border border-[#FF0000]/20"
                  >
                    <Scale className="w-10 h-10 md:w-12 md:h-12 text-[#FF0000]" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('legal.terms.sideTitle')}</h3>
                    <p className="text-[#999] text-sm md:text-base">
                      {t('legal.terms.sideSubtitle')}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={termsInView ? "visible" : "hidden"}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 hover:border-[#FF0000]/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4 md:gap-5 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 flex-shrink-0"
                  >
                    <FileText className="w-6 h-6 md:w-7 md:h-7 text-[#FF0000]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t('legal.terms.badge')}</h3>
                    <p className="text-[#FF0000] text-sm md:text-base">VIP Elite Security</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {termsPoints.map((point: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={termsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 border border-[#FF0000]/60 bg-[#FF0000]/10 flex items-center justify-center rounded-md group-hover:bg-[#FF0000] transition flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FF0000] group-hover:text-white" />
                      </div>
                      <span className="text-[#aaa] text-sm font-light group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS */}
      <section ref={additionalRef} className="relative py-20 md:py-32 bg-gradient-to-t from-black via-[#080000] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
              {t('legal.additional.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3 mb-4 md:mb-6">
              {t('legal.additional.title').split(' ')[0]} <span className="text-[#FF0000]">{t('legal.additional.title').split(' ')[1]}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Disclaimer */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={additionalInView ? "visible" : "hidden"}
              whileHover="hover"
              className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 hover:border-[#FF0000]/40 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 flex-shrink-0"
                >
                  <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 text-[#FF0000]" />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t('legal.additional.disclaimerTitle')}</h3>
                  <p className="text-[#FF0000] text-sm md:text-base">{t('legal.additional.disclaimerSubtitle')}</p>
                </div>
              </div>
              <p className="text-[#aaa] font-light leading-relaxed text-sm md:text-base">
                {t('legal.additional.disclaimerText')}
              </p>
            </motion.div>

            {/* Licensing */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={additionalInView ? "visible" : "hidden"}
              whileHover="hover"
              className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 hover:border-[#FF0000]/40 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 flex-shrink-0"
                >
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-[#FF0000]" />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t('legal.additional.licensingTitle')}</h3>
                  <p className="text-[#FF0000] text-sm md:text-base">{t('legal.additional.licensingSubtitle')}</p>
                </div>
              </div>
              <p className="text-[#aaa] font-light leading-relaxed text-sm md:text-base">
                {t('legal.additional.licensingText')}
              </p>
            </motion.div>
          </div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            {t('legal.cta.title').split('Legal Policies')[0]} 
            <span className="text-[#FF0000]">{t('legal.cta.title').includes('Legal Policies') ? 'Legal Policies' : t('legal.cta.title').split(' ').slice(-2).join(' ')}</span>
            {t('legal.cta.title').split('Legal Policies')[1] || t('legal.cta.title').split('?')[1]}
          </h2>
          <p className="text-[#aaa] text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t('legal.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="group relative px-8 py-4 md:px-12 md:py-5 bg-[#FF0000] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] overflow-hidden rounded-md transition-all duration-300"
            >
              <span className="relative z-10">{t('legal.cta.contactButton')}</span>
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "#FF0000", backgroundColor: "rgba(255, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="px-8 py-4 md:px-12 md:py-5 border border-[#333] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-md transition-all duration-300"
            >
              {t('legal.cta.servicesButton')}
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}