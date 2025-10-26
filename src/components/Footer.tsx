import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function Footer() {
  const {
    t
  } = useTranslation();
  return <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-primary-red" />
              <span className="text-white font-bold text-xl">
                VIP ELITE SECURITY
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
              <Phone className="w-4 h-4 text-primary-red" />
              <span>+381 66 030 4411</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-primary-red" />
              <span>info@vipelitesecurity.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/legal#privacy" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/legal#terms" className="text-gray-400 hover:text-primary-red text-sm transition-colors">
                  {t('footer.termsConditions')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VIP Elite Security.{' '}
            {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>;
}