import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        getQuote: 'GET QUOTE'
      },
      hero: {
        title: 'Elite protection,',
        titleHighlight: 'discreetly delivered.',
        subtitle: 'Premium private security services for high-net-worth individuals, executives, and families who demand excellence and discretion.',
        exploreServices: 'Explore Services',
        getQuote: 'Get Quote',
        availability: 'Availability',
        yearsExperience: 'Years Experience',
        countries: 'Countries',
        discretion: 'Discretion'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive security solutions tailored to your unique needs',
        viewAll: 'View All Services',
        closeProtection: {
          title: 'Close Protection',
          description: 'Elite bodyguard services for high-profile individuals and executives.'
        },
        familySecurity: {
          title: 'Family Security',
          description: 'Comprehensive protection for families and residential properties.'
        },
        secureTransport: {
          title: 'Secure Transport',
          description: 'Armored vehicles and professional security drivers for safe travel.'
        },
        covertProtection: {
          title: 'Covert Protection',
          description: 'Discreet surveillance and protection without visible presence.'
        },
        travelSecurity: {
          title: 'Travel Security',
          description: 'International protection services for business and leisure travel.'
        },
        cyberSecurity: {
          title: 'Cyber Security',
          description: 'Digital protection and counter-surveillance measures.'
        }
      },
      about: {
        title: 'Excellence in',
        titleHighlight: 'Executive Protection',
        description1: 'VIP Elite Security is a premier provider of private security services, specializing in close protection, secure transportation, and comprehensive security solutions for high-net-worth individuals, executives, and families.',
        description2: 'Our team consists of highly trained professionals with backgrounds in military special forces, law enforcement, and intelligence services. We operate with absolute discretion and professionalism.',
        principle1: 'Absolute discretion and confidentiality',
        principle2: 'Highly trained security professionals',
        principle3: 'Tailored protection strategies',
        principle4: 'International operational capability',
        learnMore: 'Learn More About Us',
        yearsProtecting: 'Years protecting VIPs worldwide'
      },
      contact: {
        title: 'Ready to Secure Your Safety?',
        subtitle: 'Contact us today for a confidential consultation and personalized security assessment.',
        phone: 'Phone',
        email: 'Email',
        availability: 'Availability',
        availabilityText: '24/7 Emergency Response',
        requestConsultation: 'Request Consultation'
      },
      footer: {
        description: 'Elite protection services delivered with discretion and professionalism. Trusted by high-net-worth individuals, executives, and families worldwide.',
        quickLinks: 'Quick Links',
        legal: 'Legal',
        privacyPolicy: 'Privacy Policy',
        termsConditions: 'Terms & Conditions',
        allRightsReserved: 'All rights reserved.'
      }
    }
  },
  sr: {
    translation: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        about: 'O Nama',
        contact: 'Kontakt',
        getQuote: 'ZATRAŽI PONUDU'
      },
      hero: {
        title: 'Elitna zaštita,',
        titleHighlight: 'diskretno isporučena.',
        subtitle: 'Premium usluge privatne bezbednosti za imućne pojedince, rukovodioce i porodice koji zahtevaju izvrsnost i diskreciju.',
        exploreServices: 'Istražite Usluge',
        getQuote: 'Zatraži Ponudu',
        availability: 'Dostupnost',
        yearsExperience: 'Godina Iskustva',
        countries: 'Zemlje',
        discretion: 'Diskrecija'
      },
      services: {
        title: 'Naše Usluge',
        subtitle: 'Sveobuhvatna bezbednosna rešenja prilagođena vašim jedinstvenim potrebama',
        viewAll: 'Pogledajte Sve Usluge',
        closeProtection: {
          title: 'Lična Zaštita',
          description: 'Elitne telohranitelje za visokoprofilne pojedince i rukovodioce.'
        },
        familySecurity: {
          title: 'Porodična Bezbednost',
          description: 'Sveobuhvatna zaštita za porodice i stambene objekte.'
        },
        secureTransport: {
          title: 'Siguran Transport',
          description: 'Oklopna vozila i profesionalni bezbednosni vozači za siguran prevoz.'
        },
        covertProtection: {
          title: 'Prikrivena Zaštita',
          description: 'Diskretna nadzor i zaštita bez vidljive prisutnosti.'
        },
        travelSecurity: {
          title: 'Bezbednost Putovanja',
          description: 'Međunarodne usluge zaštite za poslovna i turistička putovanja.'
        },
        cyberSecurity: {
          title: 'Cyber Bezbednost',
          description: 'Digitalna zaštita i mere protiv nadzora.'
        }
      },
      about: {
        title: 'Izvrsnost u',
        titleHighlight: 'Izvršnoj Zaštiti',
        description1: 'VIP Elite Security je vodeći pružalac usluga privatne bezbednosti, specijalizovan za ličnu zaštitu, siguran transport i sveobuhvatna bezbednosna rešenja za imućne pojedince, rukovodioce i porodice.',
        description2: 'Naš tim se sastoji od visoko obučenih profesionalaca sa iskustvom u vojnim specijalnim jedinicama, policiji i obaveštajnim službama. Poslujemo sa apsolutnom diskretnošću i profesionalnošću.',
        principle1: 'Apsolutna diskrecija i poverljivost',
        principle2: 'Visoko obučeni bezbednosni profesionalci',
        principle3: 'Prilagođene strategije zaštite',
        principle4: 'Međunarodne operativne mogućnosti',
        learnMore: 'Saznajte Više O Nama',
        yearsProtecting: 'Godina zaštite VIP klijenata širom sveta'
      },
      contact: {
        title: 'Spremni da Obezbedite Svoju Sigurnost?',
        subtitle: 'Kontaktirajte nas danas za poverljivu konsultaciju i personalizovanu procenu bezbednosti.',
        phone: 'Telefon',
        email: 'Email',
        availability: 'Dostupnost',
        availabilityText: '24/7 Hitna Pomoć',
        requestConsultation: 'Zatraži Konsultaciju'
      },
      footer: {
        description: 'Elitne usluge zaštite isporučene sa diskretnošću i profesionalnošću. Pouzdani od strane imućnih pojedinaca, rukovodilaca i porodica širom sveta.',
        quickLinks: 'Brzi Linkovi',
        legal: 'Pravno',
        privacyPolicy: 'Politika Privatnosti',
        termsConditions: 'Uslovi Korišćenja',
        allRightsReserved: 'Sva prava zadržana.'
      }
    }
  }
};
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});
export default i18n;