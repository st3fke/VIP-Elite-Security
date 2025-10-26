import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, CheckCircle } from 'lucide-react';
export function ArmoredLuxuryTransport() {
  const features = [
    'Premium armored sedans and SUVs',
    'Discreet, comfortable executive travel',
    'Professional drivers trained in security protocols',
    'Integrated with close protection services',
    'Multi-stop itineraries and meet-and-greet options'
  ];
  return (
    <section id='armored-luxury-transport' className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1619973183568-3e2cbb6ec6b8?w=800&q=70" alt="Armored Luxury Transport" className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <CarFront className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Armored & Luxury Transport</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Travel in safety and comfort with our fleet of armored luxury vehicles, driven by experienced, vetted professionals.
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
        </motion.div>
      </div>
    </section>
  );
}
