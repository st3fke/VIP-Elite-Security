import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Car, Eye, Globe, Lock, ArrowRight, Star } from 'lucide-react'; // Added Star for floating elements
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export function ServicesPreview() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Shield,
      title: t('services.closeProtection.title'),
      description: t('services.closeProtection.description')
    },
    {
      icon: Users,
      title: t('services.familySecurity.title'),
      description: t('services.familySecurity.description')
    },
    {
      icon: Car,
      title: t('services.secureTransport.title'),
      description: t('services.secureTransport.description')
    },
    {
      icon: Eye,
      title: t('services.covertProtection.title'),
      description: t('services.covertProtection.description')
    },
    {
      icon: Globe,
      title: t('services.travelSecurity.title'),
      description: t('services.travelSecurity.description')
    },
    {
      icon: Lock,
      title: t('services.cyberSecurity.title'),
      description: t('services.cyberSecurity.description')
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
      {/* Luxury Background Overlays (matching Hero style) */}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent"></div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header (title now completely white) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Enhanced Service Cards Grid (icons without hover effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 group rounded-2xl"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-red-500/50">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 transition-colors group-hover:text-red-400 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Button (matching Hero button style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-primary-red text-white px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold tracking-wide transition-all duration-500 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 rounded-lg"
          >
            {t('services.viewAll')}
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}