import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
export function ContactCTA() {
  const {
    t
  } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section ref={ref} className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[{
          icon: Phone,
          title: t('contact.phone'),
          value: '+381 66 030 4411'
        }, {
          icon: Mail,
          title: t('contact.email'),
          value: 'info@vipelitesecurity.com'
        }, {
          icon: Clock,
          title: t('contact.availability'),
          value: t('contact.availabilityText')
        }].map((item, index) => <motion.div key={index} initial={{
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
        }} className="bg-gray-900/50 border border-white/10 p-8 text-center transition-all hover:border-primary-red hover:shadow-lg hover:shadow-primary-red/20 hover:-translate-y-1">
              <item.icon className="w-10 h-10 text-primary-red mx-auto mb-4 transition-transform hover:scale-110" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.value}</p>
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
        delay: 0.4
      }} className="text-center">
          <Link to="/contact" className="inline-block bg-primary-red text-white px-12 py-4 text-lg font-medium tracking-wide transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
            {t('contact.requestConsultation')}
          </Link>
        </motion.div>
      </div>
    </section>;
}