import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function JourneyManagement() {
  const { t } = useTranslation();
  const features = t('servicesDetails.journeyManagement.features', { returnObjects: true }) as string[];

  return (
    <section id='journey-management' className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Map className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">{t('servicesDetails.journeyManagement.title')}</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">{t('servicesDetails.journeyManagement.description1')}</p>
            <p className="text-gray-400 text-lg mb-6">{t('servicesDetails.journeyManagement.description2')}</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red mt-1" />
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=70" alt={t('servicesDetails.journeyManagement.title')} className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}