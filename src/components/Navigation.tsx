import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'close-protection', label: t('servicesDetails.closeProtection.title'), icon: '🛡️' },
    { id: 'covert-protection', label: t('servicesDetails.covertProtection.title'), icon: '🕵️' },
    { id: 'family-security', label: t('servicesDetails.familySecurity.title'), icon: '👨‍👩‍👧‍👦' },
    { id: 'residential-security', label:  t('servicesDetails.residentialSecurity.title'), icon: '🏠' },
    { id: 'event-security', label: t('servicesDetails.eventSecurity.title'), icon: '🎭' },
    { id: 'transport-security', label: t('servicesDetails.transportSecurity.title'), icon: '🚗' },
    { id: 'travel-security', label: t('servicesDetails.travelSecurity.title'), icon: '✈️' },
    { id: 'cyber-security', label: t('servicesDetails.cyberSecurity.title'), icon: '💻' },
    { id: 'armored-car-hire', label: t('servicesDetails.armoredCarHire.title'), icon: '🚙' },
    { id: 'armored-luxury-transport', label: t('servicesDetails.armoredLuxuryTransport.title'), icon: '🏎️' },
    { id: 'bug-sweeping', label: t('servicesDetails.bugSweeping.title'), icon: '🔍' },
    { id: 'helicopter-transport', label: t('servicesDetails.helicopterTransport.title'), icon: '🚁' },
    { id: 'protective-surveillance', label: t('servicesDetails.protectiveSurveillance.title'), icon: '👁️' },
    { id: 'security-driver', label: t('servicesDetails.riskManagement.title'), icon: '🚘' },
    { id: 'armed-security-driver', label: t('servicesDetails.securityDriver.title'), icon: '🔫' },
    { id: 'risk-management', label: t('servicesDetails.armedSecurityDriver.title'), icon: '⚠️' },
  { id: 'journey-management', label: t('servicesDetails.journeyManagement.title'), icon: '🗺️' },
  { id: 'medical-support', label: t('servicesDetails.medicalSupport.title'), icon: '🩺' }
  ];

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'sr', label: 'Srpski', flag: '🇷🇸' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const handleServicesClick = () => {
    setServicesOpen(false);
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown') && !target.closest('.services-button')) {
        setServicesOpen(false);
      }
      if (!target.closest('.language-dropdown') && !target.closest('.language-button')) {
        setLangOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToService = (serviceId: string) => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setIsOpen(false);
    
    if (location.pathname !== '/services') {
      navigate('/services');
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(serviceId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 border-white/20 shadow-2xl shadow-black/50'
          : 'bg-black/70 border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary-red transition-transform group-hover:scale-110" />
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight transition-colors group-hover:text-primary-red">
              VIP ELITE SECURITY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-medium tracking-wide transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-primary-red'
                    : 'text-white hover:text-primary-red hover:scale-105'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-red animate-pulse" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={handleServicesClick}
                className={`flex items-center gap-2 text-sm lg:text-base font-medium tracking-wide transition-all duration-300 relative ${
                  isActive('/services')
                    ? 'text-primary-red'
                    : 'text-white hover:text-primary-red hover:scale-105'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                {isActive('/services') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-red animate-pulse" />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[420px] bg-black/95 backdrop-blur-xl border border-red-500/30 shadow-2xl shadow-red-500/20 rounded-2xl overflow-hidden"
                  >
                    {/* Decorative gradient header */}
                    <div className="bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 px-6 py-4 border-b border-red-500/20">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg">{t('services.title')}</h3>
                        <Shield className="w-5 h-5 text-red-400" />
                      </div>
                    </div>

                    {/* Services grid */}
                    <div className="p-3 max-h-[500px] overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => (
                          <motion.button
                            key={service.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                            onClick={() => scrollToService(service.id)}
                            className="group relative px-3 py-3 text-left rounded-xl bg-gray-900/50 border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 overflow-hidden"
                          >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/5 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            
                            <div className="relative flex items-center gap-2">
                              <span className="text-lg">{service.icon}</span>
                              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                                {service.label}
                              </span>
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* View All Button */}
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="group mt-3 flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                      >
                        {t('services.viewAll')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
                onClick={() => setLangOpen(!langOpen)}
                className="group flex items-center gap-2 px-4 py-2 text-white hover:text-primary-red transition-all duration-300 text-sm lg:text-base font-medium hover:scale-105 rounded-lg hover:bg-red-500/10"
              >
                <Globe className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12" />
                <span className="text-2xl">{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => setLangOpen(true)}
                    onMouseLeave={() => setLangOpen(false)}
                    className="absolute right-0 mt-4 w-56 bg-black/95 backdrop-blur-xl border border-red-500/30 shadow-2xl shadow-red-500/20 rounded-xl overflow-hidden"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 px-4 py-3 border-b border-red-500/20">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-red-400" />
                        <span className="text-white font-semibold text-sm">Select Language</span>
                      </div>
                    </div>

                    {/* Language Options */}
                    <div className="p-2">
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => changeLanguage(lang.code)}
                          className={`group relative w-full px-4 py-3 text-left flex items-center gap-3 rounded-lg transition-all duration-300 overflow-hidden ${
                            i18n.language === lang.code 
                              ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/30' 
                              : 'text-gray-300 hover:text-white hover:bg-red-500/10'
                          }`}
                        >
                          {/* Hover gradient effect */}
                          {i18n.language !== lang.code && (
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                          )}
                          
                          <span className="relative text-2xl">{lang.flag}</span>
                          <div className="relative flex-1">
                            <span className="font-medium">{lang.label}</span>
                            {i18n.language === lang.code && (
                              <div className="text-xs text-red-200 mt-0.5">Active</div>
                            )}
                          </div>
                          {i18n.language === lang.code && (
                            <div className="relative w-2 h-2 rounded-full bg-white animate-pulse" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-red to-red-700 text-white px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:shadow-red-500/50 hover:scale-105 rounded-lg"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary-red transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium tracking-wide py-3 px-2 transition-all duration-300 rounded-md ${
                    isActive(item.path)
                      ? 'text-primary-red bg-primary-red/10'
                      : 'text-white hover:text-primary-red hover:bg-primary-red/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="border-t border-white/20 pt-4">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between text-base font-medium tracking-wide py-3 px-2 transition-all duration-300 rounded-md ${
                    isActive('/services')
                      ? 'text-primary-red bg-primary-red/10'
                      : 'text-white hover:text-primary-red hover:bg-primary-red/5'
                  }`}
                >
                  {t('nav.services')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-1 bg-black/40 rounded-lg p-2"
                    >
                      <Link
                        to="/services"
                        onClick={() => {
                          setMobileServicesOpen(false);
                          setIsOpen(false);
                        }}
                        className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white bg-red-600/20 hover:bg-red-600/30 rounded-md transition-all duration-300"
                      >
                        {t('services.viewAll')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="border-t border-white/10 my-2" />
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => scrollToService(service.id)}
                          className="w-full flex items-center gap-2 text-left text-sm text-gray-300 py-2 px-3 hover:text-white hover:bg-red-500/10 rounded-md transition-all duration-300"
                        >
                          <span>{service.icon}</span>
                          <span>{service.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Language Section */}
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3 font-medium px-2">
                  <Globe className="w-4 h-4" />
                  <span>Language / Jezik</span>
                </div>
                <div className="bg-black/40 rounded-lg p-2 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`group relative w-full text-left px-3 py-3 flex items-center gap-3 transition-all duration-300 rounded-md overflow-hidden ${
                        i18n.language === lang.code 
                          ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/30' 
                          : 'text-gray-300 hover:text-white hover:bg-red-500/10'
                      }`}
                    >
                      {/* Hover gradient effect */}
                      {i18n.language !== lang.code && (
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      )}
                      
                      <span className="relative text-2xl">{lang.flag}</span>
                      <div className="relative flex-1 flex items-center justify-between">
                        <span className="text-base font-medium">{lang.label}</span>
                        {i18n.language === lang.code && (
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-primary-red to-red-700 text-white px-6 py-3 text-base font-semibold tracking-wide text-center transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-500/50 rounded-lg"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.7);
        }
      `}</style>
    </nav>
  );
}