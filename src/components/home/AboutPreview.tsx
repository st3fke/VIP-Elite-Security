import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export function AboutPreview() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const principles = [t('about.principle1'), t('about.principle2'), t('about.principle3'), t('about.principle4')];

  return (
    <section ref={ref} className="bg-black py-6 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="block text-lg sm:text-xl md:text-2xl text-white mb-1">
                {t('about.title')}
              </span>
              <span className="block text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {t('about.titleHighlight')}
              </span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            
            {/* Principles List */}
            <div className="mb-6 sm:mb-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 mb-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs sm:text-sm flex-1 leading-relaxed">
                    {principle}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:bg-red-700 rounded-lg w-full sm:w-auto group"
            >
              <span>{t('about.learnMore')}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-4 sm:mb-0"
          >
            {/* Main Image Container */}
            <div className="aspect-square bg-black border border-red-600 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80"
                alt="Professional security team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-red-600 text-white p-3 sm:p-4 rounded-lg border border-red-600 min-w-[80px] sm:min-w-[100px]"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">15+</div>
              <div className="text-[10px] sm:text-xs font-medium leading-tight mt-1">
                {t('about.yearsProtecting')}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}