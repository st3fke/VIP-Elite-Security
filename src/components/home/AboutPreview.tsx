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
    threshold: 0.2
  });

  const principles = [t('about.principle1'), t('about.principle2'), t('about.principle3'), t('about.principle4')];

  return (
    <section ref={ref} className="bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              {t('about.title')}
              <br />
              <span className="text-primary-red">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8">
              {t('about.description1')}
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              {t('about.description2')}
            </p>
            <ul className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10">
              {principles.map((principle, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2 sm:hover:translate-x-3 group"
                >
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary-red flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="text-gray-300 text-sm sm:text-base md:text-lg group-hover:text-white transition-colors">
                    {principle}
                  </span>
                </motion.li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary-red text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold tracking-wide transition-all duration-500 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 rounded-lg w-full sm:w-auto"
            >
              {t('about.learnMore')}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-black border border-red-500/20 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-red-500/20 rounded-xl sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800"
                alt="Professional security team"
                className="w-full h-full object-cover opacity-70 transition-opacity duration-500 hover:opacity-80"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-red-600 to-red-800 text-white p-6 sm:p-8 md:p-10 max-w-[200px] sm:max-w-xs shadow-2xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-red-500/50 rounded-xl sm:rounded-2xl border border-red-500/20"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm md:text-base font-medium leading-tight">{t('about.yearsProtecting')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}