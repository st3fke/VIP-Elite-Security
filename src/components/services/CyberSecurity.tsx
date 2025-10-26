import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle } from 'lucide-react';
export function CyberSecurity() {
  const features = ['Technical surveillance countermeasures (TSCM)', 'Bug sweeping and electronic detection', 'Secure communications solutions', 'Digital privacy protection', 'Cyber threat assessment and monitoring', 'Data security consulting'];
  return <section id='cyber-security' className="bg-gradient-to-b from-gray-900 to-black py-20">
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
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" alt="Cyber security services" className="w-full h-[500px] object-cover border border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Cyber Security</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In today's digital age, protecting your information and privacy is
              as important as physical security. Our cyber security services
              provide comprehensive protection against electronic surveillance,
              cyber threats, and digital privacy breaches.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We conduct technical surveillance countermeasures (TSCM) sweeps to
              detect and neutralize electronic eavesdropping devices, provide
              secure communications solutions, and offer expert guidance on
              digital privacy and data security. Our specialists use
              state-of-the-art equipment and techniques to protect your
              sensitive information.
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