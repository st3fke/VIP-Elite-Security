import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle } from 'lucide-react';
export function ResidentialSecurity() {
  const features = ['Professional security guards for estates and properties', 'Access control and visitor management', 'CCTV monitoring and surveillance systems', 'Perimeter security and intrusion detection', 'Emergency response protocols', 'Integration with smart home security systems'];
  return <section id='residential-security' className="bg-gradient-to-b from-gray-900 to-black py-20">
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
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" alt="Residential security services" className="w-full h-[500px] object-cover border border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">
                Residential Security
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Your home should be your sanctuary. Our residential security
              services provide comprehensive protection for luxury estates,
              private residences, and vacation properties, ensuring the safety
              and privacy of your family and property.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We deploy experienced security professionals who maintain a
              discreet presence while providing vigilant protection. Our
              services include access control, perimeter security, surveillance
              monitoring, and emergency response, all tailored to your specific
              requirements.
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