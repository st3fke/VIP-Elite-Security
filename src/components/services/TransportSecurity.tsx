import React from 'react';
import { motion } from 'framer-motion';
import { Car, CheckCircle } from 'lucide-react';
export function TransportSecurity() {
  const features = ['Armored luxury vehicles for secure transportation', 'Professional security drivers with advanced training', 'Route planning and real-time threat monitoring', 'Counter-surveillance and evasive driving techniques', 'Airport transfers and VIP transport services', 'International transport coordination'];
  return <section className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800" alt="Transport security services" className="w-full h-[500px] object-cover border border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">
                Secure Transport
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Travel safely and securely with our professional transport
              security services. We provide armored luxury vehicles and highly
              trained security drivers who ensure your safe passage to any
              destination, whether local or international.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our security drivers are trained in advanced defensive and evasive
              driving techniques, route planning, threat assessment, and
              emergency response. Each journey is carefully planned with
              multiple contingency options to ensure your safety and comfort
              throughout your travels.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>;
}