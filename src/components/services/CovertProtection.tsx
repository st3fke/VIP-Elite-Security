import React from 'react';
import { motion } from 'framer-motion';
import { Eye, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
export function CovertProtection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const features = ['Invisible protection without obvious security presence', 'Surveillance detection and counter-surveillance', 'Discreet monitoring of potential threats', 'Intelligence gathering and analysis', 'Protective surveillance teams', 'Seamless integration into daily routines'];
  return <section ref={ref} id='covert-protection' className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -30
        }} transition={{
          duration: 0.6
        }} className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800" alt="Covert protection services" className="w-full h-[500px] object-cover border border-white/10 transition-transform hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 30
        }} transition={{
          duration: 0.6
        }} className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-12 h-12 text-primary-red" />
              <h2 className="text-4xl font-bold text-white">
                Covert Protection
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              For clients who require security without the visible presence of
              bodyguards, our covert protection services provide discreet,
              professional protection that maintains your privacy and normal
              lifestyle while ensuring your safety.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our covert protection specialists blend seamlessly into any
              environment, providing invisible security coverage while
              conducting surveillance detection and threat assessment. This
              approach is ideal for clients in sensitive positions or those who
              prefer not to draw attention to their security arrangements.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={inView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
}