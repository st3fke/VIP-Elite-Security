import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TravelSecurity() {
  const { t } = useTranslation();
  const features = t('servicesDetails.travelSecurity.features', { returnObjects: true }) as string[];

  return (
    <section id='travel-security' className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">{t('servicesDetails.travelSecurity.title')}</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('servicesDetails.travelSecurity.description1')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('servicesDetails.travelSecurity.description2')}
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
              alt={t('servicesDetails.travelSecurity.title')}
              className="w-full h-[500px] object-cover border border-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
