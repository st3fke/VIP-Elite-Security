import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export function CloseProtection() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = t('servicesDetails.closeProtection.features', { returnObjects: true }) as string[];

  return (
    <section ref={ref} id='close-protection' className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">
                {t('servicesDetails.closeProtection.title')}
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('servicesDetails.closeProtection.description1')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('servicesDetails.closeProtection.description2')}
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/closeProtection.png"
              alt={t('servicesDetails.closeProtection.title')}
              className="w-full h-[500px] object-cover border border-white/10 transition-transform hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}