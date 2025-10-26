import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
export function Hero() {
  const {
    t
  } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          {t('hero.title')}
          <br />
          <span className="text-primary-red">{t('hero.titleHighlight')}</span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/services" className="bg-primary-red text-white px-8 py-4 text-lg font-medium tracking-wide transition-all flex items-center gap-2 group hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
            {t('hero.exploreServices')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wide transition-all hover:bg-white hover:text-black hover:shadow-lg">
            {t('hero.getQuote')}
          </Link>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={inView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{
          value: '24/7',
          label: t('hero.availability')
        }, {
          value: '15+',
          label: t('hero.yearsExperience')
        }, {
          value: '50+',
          label: t('hero.countries')
        }, {
          value: '100%',
          label: t('hero.discretion')
        }].map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.5,
          delay: 0.7 + index * 0.1
        }} className="text-center transition-transform hover:scale-105 cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary-red mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}