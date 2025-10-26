import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe } from 'lucide-react'; // Re-added Shield
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
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
          {/* Logo with Shield Icon */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary-red transition-transform group-hover:scale-110" />
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight transition-colors group-hover:text-primary-red">
              V I P SECURITY
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

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-white hover:text-primary-red transition-all duration-300 text-sm lg:text-base font-medium hover:scale-105"
              >
                <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-3 w-48 bg-gray-900/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 hover:bg-primary-red/20 hover:scale-105 ${
                          i18n.language === lang.code ? 'text-primary-red bg-primary-red/10' : 'text-white'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm lg:text-base font-medium">{lang.label}</span>
                      </button>
                    ))}
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
            <div className="px-4 py-6 space-y-4">
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

              {/* Mobile Language Section */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-gray-400 text-sm mb-3 font-medium">
                  Language / Jezik
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-3 flex items-center gap-3 transition-all duration-300 rounded-md hover:bg-primary-red/10 ${
                      i18n.language === lang.code ? 'text-primary-red bg-primary-red/10' : 'text-white hover:text-primary-red'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-base font-medium">{lang.label}</span>
                  </button>
                ))}
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
    </nav>
  );
}
