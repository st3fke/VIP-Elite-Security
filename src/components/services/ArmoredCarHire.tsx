import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle } from 'lucide-react';
export function ArmoredCarHire() {
  const features = [
    'Certified ballistic protection vehicles',
    'Armored sedans and SUVs with trained drivers',
    'Vehicle selection based on mission profile',
    'Maintenance and readiness checks',
    'Integration with escort and convoy teams'
  ];
  return (
    <section id='armored-car-hire' className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Armored Car Hire</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Hire armored vehicles tailored to your security needs, operated by trained and vetted professionals.
            </p>
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
            <img src="https://images.unsplash.com/photo-1615554968012-8b59a5c0b1b1?w=800&q=70" alt="Armored Car Hire" className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
