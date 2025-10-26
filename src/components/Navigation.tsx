import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const {
    t,
    i18n
  } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    path: '/',
    label: t('nav.home')
  }, {
    path: '/services',
    label: t('nav.services')
  }, {
    path: '/about',
    label: t('nav.about')
  }, {
    path: '/contact',
    label: t('nav.contact')
  }];
  const languages = [{
    code: 'en',
    label: 'English',
    flag: '🇬🇧'
  }, {
    code: 'sr',
    label: 'Srpski',
    flag: '🇷🇸'
  }];
  const isActive = (path: string) => location.pathname === path;
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${scrolled ? 'bg-black/98 border-white/10 shadow-2xl' : 'bg-black/80 border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <Shield className="w-8 h-8 text-primary-red transition-transform group-hover:scale-110" />
            <span className="text-white font-bold text-xl tracking-tight transition-colors group-hover:text-primary-red">
              VIP ELITE SECURITY
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium tracking-wide transition-colors relative ${isActive(item.path) ? 'text-primary-red' : 'text-white hover:text-primary-red'}`}>
                {item.label}
                {isActive(item.path) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-red" />}
              </Link>)}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-2 text-white hover:text-primary-red transition-colors text-sm font-medium">
                <Globe className="w-4 h-4" />
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.2
              }} className="absolute right-0 mt-2 w-48 bg-gray-900 border border-white/10 shadow-xl overflow-hidden">
                    {languages.map(lang => <button key={lang.code} onClick={() => changeLanguage(lang.code)} className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors hover:bg-primary-red/10 ${i18n.language === lang.code ? 'text-primary-red' : 'text-white'}`}>
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium">
                          {lang.label}
                        </span>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>
            <Link to="/contact" className="bg-primary-red text-white px-6 py-2.5 text-sm font-medium tracking-wide transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
              {t('nav.getQuote')}
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-primary-red transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden bg-gray-900 border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block text-sm font-medium tracking-wide py-2 transition-colors ${isActive(item.path) ? 'text-primary-red' : 'text-white hover:text-primary-red'}`}>
                  {item.label}
                </Link>)}
              <div className="border-t border-white/10 pt-4">
                <div className="text-gray-400 text-xs mb-2">
                  Language / Jezik
                </div>
                {languages.map(lang => <button key={lang.code} onClick={() => {
              changeLanguage(lang.code);
              setIsOpen(false);
            }} className={`w-full text-left px-3 py-2 flex items-center gap-3 transition-colors hover:text-primary-red ${i18n.language === lang.code ? 'text-primary-red' : 'text-white'}`}>
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </button>)}
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-primary-red text-white px-6 py-2.5 text-sm font-medium tracking-wide text-center transition-colors hover:bg-red-700">
                {t('nav.getQuote')}
              </Link>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}