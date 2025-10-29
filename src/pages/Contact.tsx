import React, { useRef, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Clock, Send } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    dates: '',
    locations: '',
    message: '',
    consent: false
  });

  // Get services array safely
  const services = React.useMemo(() => {
    const servicesData = t('contact.services', { returnObjects: true });
    return Array.isArray(servicesData) ? servicesData : [];
  }, [t]);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.cards.0.title'),
      subtitle: t('contact.info.cards.0.subtitle'),
      text: t('contact.info.cards.0.text')
    },
    {
      icon: Mail,
      title: t('contact.info.cards.1.title'),
      subtitle: t('contact.info.cards.1.subtitle'),
      text: t('contact.info.cards.1.text')
    },
    {
      icon: MapPin,
      title: t('contact.info.cards.2.title'),
      subtitle: t('contact.info.cards.2.subtitle'),
      text: t('contact.info.cards.2.text')
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-black" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={contactInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] bg-[#FF0000] rounded-full blur-[100px] md:blur-[220px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-[1200px] mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 border border-[#FF0000]/30 bg-[#FF0000]/10 mb-6 md:mb-10 rounded-full"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF0000] rounded-full"
            />
            <span className="text-[#FF0000] text-xs tracking-[0.2em] uppercase font-light">
              {t('contact.hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 md:mb-6"
          >
            <motion.span variants={itemVariants} className="block">{t('contact.hero.title1')}</motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#DD0000] to-[#FF0000]">
              {t('contact.hero.title2')}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#aaa] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('contact.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#070707] to-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] p-8 text-center hover:border-[#FF0000]/40 transition-all duration-500 group rounded-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF0000] transition-colors"
                >
                  <info.icon className="w-7 h-7 text-[#FF0000] group-hover:text-white" />
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-3">{info.title}</h3>
                <p className="text-[#FF0000] font-medium mb-2">{info.subtitle}</p>
                <p className="text-[#aaa] text-sm">{info.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CONFIDENTIAL MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#FF0000]" />
              <Clock className="w-6 h-6 text-[#FF0000]" />
            </div>
            <p className="text-[#aaa] text-lg md:text-xl leading-relaxed">
              {t('contact.info.confidential.text')} <span className="text-white font-medium">{t('contact.info.confidential.highlight')}</span> {t('contact.info.confidential.followup')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section ref={formRef} className="relative py-20 md:py-32 bg-gradient-to-t from-black via-[#080000] to-black">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] p-8 md:p-12 rounded-2xl hover:border-[#FF0000]/30 transition-all duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                {t('contact.form.title').split(' ')[0]} <span className="text-[#FF0000]">{t('contact.form.title').split(' ')[1]}</span>
              </h2>
              <p className="text-[#aaa] text-lg">
                {t('contact.form.subtitle')}
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-white font-medium mb-3">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-white font-medium mb-3">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="service" className="block text-white font-medium mb-3">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                  >
                    <option value="">{t('contact.form.servicePlaceholder')}</option>
                    {services.map((service: string, index: number) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="dates" className="block text-white font-medium mb-3">
                    {t('contact.form.dates')}
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    placeholder={t('contact.form.datesPlaceholder')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="locations" className="block text-white font-medium mb-3">
                    {t('contact.form.locations')}
                  </label>
                  <input
                    type="text"
                    id="locations"
                    name="locations"
                    value={formData.locations}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                    placeholder={t('contact.form.locationsPlaceholder')}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="message" className="block text-white font-medium mb-3">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-[#333] text-white p-4 rounded-lg focus:border-[#FF0000] focus:outline-none transition-colors"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-start gap-3"
              >
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-5 h-5 mt-1 bg-black/50 border border-[#333] rounded focus:border-[#FF0000] focus:outline-none"
                />
                <label htmlFor="consent" className="text-[#aaa] text-sm leading-relaxed">
                  {t('contact.form.consent')}
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF0000] text-white px-12 py-4 font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-red-700 transition-colors flex items-center gap-3 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.form.button')}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}