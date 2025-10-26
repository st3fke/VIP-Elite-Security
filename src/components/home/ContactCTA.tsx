import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export function ContactCTA() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactItems = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+381 66 030 4411'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@vipelitesecurity.com'
    },
    {
      icon: Clock,
      title: t('contact.availability'),
      value: t('contact.availabilityText')
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Luxury Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-2xl">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 group rounded-2xl text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-red-500/50 transition-shadow duration-500">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 transition-colors group-hover:text-red-400 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 break-words">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary-red text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold tracking-wide transition-all duration-500 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 rounded-lg group"
          >
            {t('contact.requestConsultation')}
            <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}