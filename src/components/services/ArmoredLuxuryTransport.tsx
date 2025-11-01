import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ArmoredLuxuryTransport() {
  const { t } = useTranslation();
  const features = t('servicesDetails.armoredLuxuryTransport.features', { returnObjects: true }) as string[];

  return (
    <section id='armored-luxury-transport' className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img src="/armoredAndLuxury.jpeg" alt={t('servicesDetails.armoredLuxuryTransport.title')} className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <CarFront className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">{t('servicesDetails.armoredLuxuryTransport.title')}</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">{t('servicesDetails.armoredLuxuryTransport.description1')}</p>
            <p className="text-gray-400 text-lg mb-6">{t('servicesDetails.armoredLuxuryTransport.description2')}</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red mt-1" />
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}