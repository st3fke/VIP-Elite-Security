import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Car, Eye, Globe, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
export function ServicesPreview() {
  const {
    t
  } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const services = [{
    icon: Shield,
    title: t('services.closeProtection.title'),
    description: t('services.closeProtection.description')
  }, {
    icon: Users,
    title: t('services.familySecurity.title'),
    description: t('services.familySecurity.description')
  }, {
    icon: Car,
    title: t('services.secureTransport.title'),
    description: t('services.secureTransport.description')
  }, {
    icon: Eye,
    title: t('services.covertProtection.title'),
    description: t('services.covertProtection.description')
  }, {
    icon: Globe,
    title: t('services.travelSecurity.title'),
    description: t('services.travelSecurity.description')
  }, {
    icon: Lock,
    title: t('services.cyberSecurity.title'),
    description: t('services.cyberSecurity.description')
  }];
  return <section className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-gray-900/50 border border-white/10 p-8 transition-all hover:border-primary-red hover:shadow-lg hover:shadow-primary-red/20 hover:-translate-y-1 group">
              <service.icon className="w-12 h-12 text-primary-red mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-primary-red">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0
      }} animate={inView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="text-center mt-12">
          <Link to="/services" className="inline-block bg-primary-red text-white px-8 py-3 text-lg font-medium tracking-wide transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
            {t('services.viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>;
}