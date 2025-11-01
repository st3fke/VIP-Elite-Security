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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black pt-24 pb-16 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover opacity-10 hide-controls"
        style={{
          pointerEvents: 'none',
        }}
      >
        <source
          src="./heroSectionVideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Global CSS to hide video controls */}
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

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          
          {/* Title Section - Optimized for long text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4 max-w-5xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-red leading-tight tracking-tight">
              {t('hero.titleHighlight')}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed px-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto bg-primary-red text-white px-8 py-4 text-base md:text-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 rounded-lg"
            >
              {t('hero.exploreServices')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 text-base md:text-lg font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl rounded-lg"
            >
              {t('hero.getQuote')}
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-16 w-full px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { value: '24/7', label: t('hero.availability') },
                { value: '15+', label: t('hero.yearsExperience') },
                { value: '50+', label: t('hero.countries') },
                { value: '100%', label: t('hero.discretion') }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-red mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}