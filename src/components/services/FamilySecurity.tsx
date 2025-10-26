import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
export function FamilySecurity() {
  const features = ['Comprehensive family protection programs', 'Child protection and school security', 'Residential security assessments', 'Safe travel arrangements for family members', 'Emergency response planning', 'Security awareness training for families'];
  return <section id='family-security' className="bg-gradient-to-b from-black to-gray-900 py-20">
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
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">Family Security</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Protecting your family is our highest priority. We provide
              comprehensive security solutions designed specifically for
              families, ensuring the safety of all family members including
              children, elderly relatives, and household staff.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our family security services include protection for daily
              activities, school runs, recreational activities, and travel. We
              work closely with families to create customized security protocols
              that fit seamlessly into your lifestyle while providing peace of
              mind.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </li>)}
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800" alt="Family security services" className="w-full h-[500px] object-cover border border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>;
}