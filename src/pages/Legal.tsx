import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Shield, Eye, FileText, AlertTriangle, Award, Star, Crown } from 'lucide-react';

export function Legal() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section - Enhanced with More Visual Appeal */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-12 text-red-400 opacity-60"
        >
          <Star className="w-10 h-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-16 right-12 text-red-400 opacity-60"
        >
          <Crown className="w-10 h-10" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/30 bg-red-500/5 rounded-lg"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs font-light uppercase tracking-[0.2em]">
                Legal Framework
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl"
            >
              Legal
              <br />
              <span className="text-red-500">Information</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gray-400" />
              <Shield className="w-6 h-6 text-red-500" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gray-400" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Our commitment to transparency and compliance. Understand our 
              <span className="text-white"> privacy practices</span>, 
              <span className="text-white"> service terms</span>, and 
              <span className="text-white"> legal obligations</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 border border-gray-600 bg-black/40 backdrop-blur-sm rounded-lg mb-6"
            >
              <span className="text-gray-400 text-xs font-light uppercase tracking-[0.2em]">
                Data Protection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Privacy <span className="text-red-500">Policy</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 rounded-2xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  VIP Elite Security ("we", "us") respects your privacy. We collect personal information you provide (e.g., via forms or email) to respond to inquiries, prepare proposals, and deliver services. We may use essential cookies and basic analytics to improve site performance. We do not sell or rent your data. We share data only with trusted providers necessary to operate our services (e.g., secure hosting, email). You may request access, correction, or deletion of your personal data at any time by contacting us. We take reasonable technical and organizational measures to protect information. By using this site or engaging our services, you consent to this policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 border border-gray-600 bg-black/40 backdrop-blur-sm rounded-lg mb-6"
            >
              <span className="text-gray-400 text-xs font-light uppercase tracking-[0.2em]">
                Service Agreement
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Terms & <span className="text-red-500">Conditions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 rounded-2xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Content on vipelitesecurity.com is for general information and may change without notice. Security services are subject to local laws, licensing, and compliance checks. VIP Elite Security is not liable for losses arising from the use of website information. All trademarks, logos, and content are the property of their owners. Unauthorized use is prohibited. These terms are governed by the laws of the Republic of Serbia. If any provision is found unenforceable, the remaining provisions remain in effect.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections for Disclaimer and Licensing */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 group rounded-2xl"
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <AlertTriangle className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Disclaimer</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    While VIP Elite Security strives to provide the highest level of protection, we cannot guarantee complete immunity from all security threats. Our services are designed to significantly reduce risks and provide rapid response to security incidents.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Licensing */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-105 group rounded-2xl"
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Award className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Licensing</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    VIP Elite Security and all its operatives are fully licensed and insured in accordance with local and international regulations governing private security services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}