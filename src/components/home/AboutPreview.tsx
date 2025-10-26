import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
export function AboutPreview() {
  const {
    t
  } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const principles = [t('about.principle1'), t('about.principle2'), t('about.principle3'), t('about.principle4')];
  return <section ref={ref} className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -30
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
              <br />
              <span className="text-primary-red">
                {t('about.titleHighlight')}
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.description1')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.description2')}
            </p>
            <ul className="space-y-4 mb-8">
              {principles.map((principle, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={inView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1
            }} className="flex items-start gap-3 transition-transform hover:translate-x-2">
                  <CheckCircle className="w-6 h-6 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{principle}</span>
                </motion.li>)}
            </ul>
            <Link to="/about" className="inline-block border-2 border-primary-red text-primary-red px-8 py-3 text-lg font-medium tracking-wide transition-all hover:bg-primary-red hover:text-white hover:shadow-lg hover:shadow-primary-red/30">
              {t('about.learnMore')}
            </Link>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 30
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800" alt="Professional security team" className="w-full h-full object-cover opacity-60 transition-opacity hover:opacity-70" />
            </div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={inView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="absolute -bottom-6 -right-6 bg-primary-red text-white p-8 max-w-xs shadow-2xl transition-transform hover:scale-105">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">{t('about.yearsProtecting')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}