import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle } from 'lucide-react';
export function ArmedSecurityDriver() {
  const features = [
    'Armed and licensed professional drivers',
    'Advanced defensive and counter-ambush training',
    'Route design with alternates and safe zones',
    'Vehicle readiness and safety inspections',
    'Ideal for high-risk profiles and sensitive missions'
  ];
  return (
    <section id='armed-security-driver' className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Armed Security Driver</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Our armed drivers combine precision driving skills with professional firearms proficiency, ensuring your safety in all environments.
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
            <img src="https://images.unsplash.com/photo-1597008630913-5a0a0e7d71a6?w=800&q=70" alt="Armed Security Driver" className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
