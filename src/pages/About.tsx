import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Shield, Eye, Award, Heart, MapPin, Globe2, Check } from 'lucide-react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
export function About() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get translated data
  const principles = t('about.principles.list', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    detail: string;
  }>;

  const coverage = t('about.coverage.locations', { returnObjects: true }) as Array<{
    location: string;
    type: string;
    status: string;
  }>;

  const highlights = t('about.story.highlights', { returnObjects: true }) as string[];

  // Refs for animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const principlesRef = useRef(null);
  const coverageRef = useRef(null);
  const ctaRef = useRef(null);

  // Hooks for scroll animations
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.1 });
  const coverageInView = useInView(coverageRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Container variants for stagger animations
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
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

  // Icon mapping for principles
  const principleIcons = [Eye, Award, Shield, Heart];

  return (
    <>
    <Helmet>
        <title>VIP Elite Security — About</title>
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
      <motion.section 
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-black" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] bg-[#FF0000] rounded-full blur-[80px] sm:blur-[120px] md:blur-[180px] lg:blur-[220px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 border border-[#FF0000]/30 bg-[#FF0000]/10 mb-6 md:mb-8 lg:mb-10 rounded-full"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF0000] rounded-full"
            />
            <span className="text-[#FF0000] text-xs tracking-[0.2em] uppercase font-light">
              {t('about.hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 md:mb-6"
          >
            <motion.span variants={itemVariants} className="block">{t('about.hero.title1')}</motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#DD0000] to-[#FF0000]">
              {t('about.hero.title2')}
            </motion.span>
            <motion.span variants={itemVariants} className="block">{t('about.hero.title3')}</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#aaa] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* STORY SECTION */}
      <section ref={storyRef} className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#070707] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 lg:space-y-10 order-2 lg:order-1"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <motion.span variants={itemVariants} className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
                {t('about.story.badge')}
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3">
                {t('about.story.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              className="space-y-4 md:space-y-6"
            >
              <motion.p variants={itemVariants} className="text-[#999] text-base md:text-lg font-light leading-relaxed">
                {t('about.story.p1')}
              </motion.p>
              <motion.p variants={itemVariants} className="text-[#999] text-base md:text-lg font-light leading-relaxed">
                {t('about.story.p2')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-5 h-5 md:w-6 md:h-6 border border-[#FF0000]/60 bg-[#FF0000]/10 flex items-center justify-center rounded-md group-hover:bg-[#FF0000] transition flex-shrink-0 mt-0.5"
                  >
                    <Check className="w-3 h-3 text-[#FF0000] group-hover:text-white" />
                  </motion.div>
                  <span className="text-[#aaa] text-sm font-light group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={storyInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative aspect-square border border-[#1a1a1a] rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] flex items-center justify-center p-6 md:p-8 lg:p-12"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                src="/vipwhiteredlogo.png"
                alt="VIP Elite Security Logo"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] transition-opacity duration-500"
              />
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 border-2 border-[#FF0000]/20 rounded-2xl pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
                
      {/* PRINCIPLES SECTION */}
      <section ref={principlesRef} className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden bg-gradient-to-b from-black via-[#050505] to-black">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              opacity: principlesInView ? [0.05, 0.1, 0.05] : 0.05,
              scale: principlesInView ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-[#FF0000]/10 blur-[100px] md:blur-[150px] lg:blur-[200px]"
          />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            className="mb-10 md:mb-12 lg:mb-16"
          >
            <span className="text-[#FF0000]/80 text-xs sm:text-sm uppercase tracking-[0.25em]">
              {t('about.principles.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 md:mt-3 mb-3 md:mb-4">
              {t('about.principles.title')}
            </h2>
            <p className="text-[#999] text-base md:text-lg max-w-2xl mx-auto">
              {t('about.principles.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={principlesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10"
          >
            {principles.map((p, i) => {
              const Icon = principleIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] rounded-xl p-6 md:p-8 lg:p-10 hover:border-[#FF0000]/40 transition-all duration-500 text-left group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 flex-shrink-0"
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#FF0000]" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-[#FF0000] mb-2 md:mb-3 text-sm md:text-base font-medium relative z-10">{p.description}</p>
                  <p className="text-[#aaa] font-light leading-relaxed text-sm md:text-base relative z-10">{p.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section ref={coverageRef} className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-t from-black via-[#080000] to-black">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={coverageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -60, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-black flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-16 rounded-2xl order-2 lg:order-1 group overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <Globe2 className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-[#FF0000] opacity-5" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={coverageInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#FF0000] mb-4" />
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={coverageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black"
              >
                SRBIJA
              </motion.h3>
              <motion.div 
                initial={{ width: 0 }}
                animate={coverageInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-[2px] bg-[#FF0000] my-4 md:my-6 mx-auto"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={coverageInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-[#999] uppercase tracking-[0.3em] text-xs md:text-sm"
              >
                {t('about.coverage.locations.0.type')}
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={coverageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.h2 
              variants={containerVariants}
              initial="hidden"
              animate={coverageInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6"
            >
              <motion.span variants={itemVariants} className="">
                {t('about.coverage.title')}
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={coverageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#999] text-base md:text-lg font-light mb-6 md:mb-8 leading-relaxed"
            >
              {t('about.coverage.description')}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={coverageInView ? "visible" : "hidden"}
              className="space-y-3 md:space-y-4"
            >
              {coverage.map((c, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-3 md:gap-4 border border-[#1a1a1a] bg-black/50 p-4 md:p-5 lg:p-6 hover:border-[#FF0000]/40 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0"
                  >
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FF0000]" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-lg md:text-xl font-bold truncate">{c.location}</h4>
                    <p className="text-[#777] text-xs md:text-sm truncate">
                      {c.type} • <span className="text-[#555]">{c.status}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="py-16 md:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0000] to-black" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={ctaInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative max-w-4xl mx-auto space-y-6 md:space-y-8 lg:space-y-10 px-4 sm:px-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black"
          >
            {t('about.cta.title')} <span className="text-[#FF0000]">{t('about.cta.highlight')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#aaa] text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            {t('about.cta.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="group relative px-8 py-4 md:px-12 md:py-5 bg-[#FF0000] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] overflow-hidden rounded-md transition-all duration-300"
            >
              <span className="relative z-10">{t('about.cta.button1')}</span>
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
              {t('about.cta.button2')}
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
    </>
  );
}