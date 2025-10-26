import React from 'react';
import { motion } from 'framer-motion';
import { Plane, CheckCircle } from 'lucide-react';
export function HelicopterTransport() {
  const features = [
    'Private point-to-point helicopter transfers',
    'Vetted aviation partners and pilots',
    'Integrated ground security coordination',
    'Weather and route safety checks',
    'Fast response for time-critical movement'
  ];
  return (
    <section id='helicopter-transport' className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=70" alt="Helicopter transport" className="w-full h-[500px] object-cover border border-white/10" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Helicopter Transport</h2>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              We provide secure and efficient helicopter transport for rapid, door-to-door movement, integrated with ground security and logistics teams.
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
