import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export function Hero() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black pt-20 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        controls={false}
        className="absolute inset-0 w-full h-full object-cover opacity-10 hide-controls"
        style={{
          pointerEvents: 'none', // Prevent interaction with video controls
        }}
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Global CSS to hide video controls (add this to your global CSS file) */}
      <style>{`
        .hide-controls::-webkit-media-controls {
          display: none !important;
        }
        .hide-controls::-webkit-media-controls-panel {
          display: none !important;
        }
        .hide-controls::-moz-media-controls {
          display: none !important;
        }
        .hide-controls::controls {
          display: none !important;
        }
        .hide-controls {
          -webkit-appearance: none;
          appearance: none;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight"
        >
          {t('hero.title')}
          <br />
          <span className="text-primary-red">{t('hero.titleHighlight')}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link
            to="/services"
            className="bg-primary-red text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-red-800 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-110 rounded-lg"
          >
            {t('hero.exploreServices')}
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide transition-all hover:bg-white hover:text-black hover:shadow-lg rounded-lg"
          >
            {t('hero.getQuote')}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: '24/7', label: t('hero.availability') },
            { value: '15+', label: t('hero.yearsExperience') },
            { value: '50+', label: t('hero.countries') },
            { value: '100%', label: t('hero.discretion') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center transition-transform hover:scale-105 cursor-default"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}