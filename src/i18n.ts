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
        title: 'Premium Serbian private security services',
        titleHighlight: 'for those who demand excellence.',
        subtitle: 'VIP Elite Security provides bespoke protection for high-net-worth individuals, executives, and families — combining discretion, experience, and tactical precision.',
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
        description1: 'VIP Security is Serbia’s premier provider of private security services, specializing in close protection, secure transportation, and comprehensive security solutions for high-net-worth individuals, executives, and families.',
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
        description: 'Elite protection services delivered with discretion and professionalism. Trusted by high-net-worth individuals, executives, and families in Serbia and around the world.',
        quickLinks: 'Quick Links',
        legal: 'Legal',
        privacyPolicy: 'Privacy Policy',
        termsConditions: 'Terms & Conditions',
        allRightsReserved: 'All rights reserved.'
      },
      
legal: {
  hero: {
    badge: 'Legal Framework',
    title1: 'LEGAL',
    title2: 'COMPLIANCE',
    subtitle: 'Transparency, trust, and legal excellence — our commitment to compliance and client protection.'
  },
  privacy: {
    badge: 'Data Protection',
    title: 'Privacy Policy',
    subtitle: 'Your privacy and data security are fundamental to our operations.',
    points: [
      'Personal information collected via forms and emails',
      'Used to respond to inquiries and deliver services',
      'Essential cookies and basic analytics for site performance',
      'No sale or rental of personal data',
      'Data shared only with trusted service providers',
      'Right to access, correct, or delete data at any time',
      'Reasonable technical and organizational security measures'
    ],
    sideTitle: 'Your Privacy',
    sideSubtitle: 'Protected with elite-level security measures and strict confidentiality protocols.'
  },
  terms: {
    badge: 'Service Agreement',
    title: 'Terms & Conditions',
    subtitle: 'Clear guidelines for our professional relationship and service delivery.',
    points: [
      'Content for general information purposes only',
      'Security services subject to local laws and licensing',
      'No liability for losses from website information use',
      'All trademarks and content are property of their owners',
      'Unauthorized use strictly prohibited',
      'Governed by laws of Republic of Serbia',
      'Severability of provisions'
    ],
    sideTitle: 'Legal Framework',
    sideSubtitle: 'Governed by the laws of the Republic of Serbia with international compliance standards.'
  },
  additional: {
    badge: 'Compliance & Assurance',
    title: 'Additional Information',
    disclaimerTitle: 'Disclaimer',
    disclaimerSubtitle: 'Risk Management',
    disclaimerText: 'While VIP Elite Security strives to provide the highest level of protection, we cannot guarantee complete immunity from all security threats. Our services are designed to significantly reduce risks and provide rapid response to security incidents.',
    licensingTitle: 'Licensing',
    licensingSubtitle: 'Certified Excellence',
    licensingText: 'VIP Elite Security and all its operatives are fully licensed and insured in accordance with local and international regulations governing private security services.'
  },
  cta: {
    title: 'Questions About Our Legal Policies?',
    subtitle: 'Contact us for clarification on any legal matters or to discuss how we protect your interests.',
    contactButton: 'Contact Legal Team',
    servicesButton: 'View Services'
  }
},
    }
  },
  sr: {
    translation: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        about: 'O Nama',
        contact: 'Kontakt',
        getQuote: 'ZATRAŽI PONUDU',
      },
      hero: {
        title: 'Premium srpske usluge privatne bezbednosti',
        titleHighlight: 'za one koji zahtevaju izvrsnost.',
        subtitle: 'VIP Elite Security pruža prilagođenu zaštitu imućnim pojedincima, rukovodiocima i porodicama — kombinujući diskreciju, iskustvo i taktičku preciznost.',
        exploreServices: 'Istražite Usluge',
        getQuote: 'Zatraži Ponudu',
        availability: 'Dostupnost',
        yearsExperience: 'Godina Iskustva',
        countries: 'Zemlje',
        discretion: 'Diskrecija'
      },
      services: {
        title: 'Naše Usluge',
        subtitle: 'Sveobuhvatna bezbednosna rešenja prilagođena vašim potrebama',
        viewAll: 'Pogledajte Sve Usluge',
        closeProtection: {
          title: 'Lična Zaštita',
          description: 'Elitni telohranitelji za visokoprofilne pojedince i rukovodioce.'
        },
        familySecurity: {
          title: 'Porodična Bezbednost',
          description: 'Sveobuhvatna zaštita porodica i stambenih objekata.'
        },
        secureTransport: {
          title: 'Siguran Transport',
          description: 'Oklopna vozila i profesionalni bezbednosni vozači za sigurno putovanje.'
        },
        covertProtection: {
          title: 'Prikrivena Zaštita',
          description: 'Diskretan nadzor i zaštita bez vidljive prisutnosti.'
        },
        travelSecurity: {
          title: 'Bezbednost Putovanja',
          description: 'Međunarodna zaštita za poslovna i turistička putovanja.'
        },
        cyberSecurity: {
          title: 'Cyber Bezbednost',
          description: 'Digitalna zaštita i mere protiv nadzora.'
        }
      },
      about: {
        title: 'Izvrsnost u',
        titleHighlight: 'Izvršnoj Zaštiti',
        description1: 'VIP Security je vodeći pružalac privatne bezbednosti u Srbiji, specijalizovan za ličnu zaštitu, siguran transport i sveobuhvatna bezbednosna rešenja za imućne pojedince, rukovodioce i porodice.',
        description2: 'Naš tim čine visoko obučeni profesionalci sa iskustvom u vojnim specijalnim jedinicama, policiji i obaveštajnim službama. Poslujemo sa apsolutnom diskrecijom i profesionalnošću.',
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
        description: 'Elitne usluge zaštite isporučene sa diskrecijom i profesionalnošću. Pouzdani od strane imućnih pojedinaca, rukovodilaca i porodica u Srbiji i širom sveta.',
        quickLinks: 'Brzi Linkovi',
        legal: 'Pravno',
        privacyPolicy: 'Politika Privatnosti',
        termsConditions: 'Uslovi Korišćenja',
        allRightsReserved: 'Sva prava zadržana.'
      },
      legal: {
        hero: {
          badge: 'Pravni Okvir',
          title1: 'PRAVNI',
          title2: 'STANDARDI',
          subtitle: 'Transparentnost, poverenje i pravna izvrsnost — naša posvećenost usklađenosti i zaštiti klijenata.'
        },
        privacy: {
          badge: 'Zaštita Podataka',
          title: 'Politika Privatnosti',
          subtitle: 'Vaša privatnost i bezbednost podataka su temelj našeg poslovanja.',
          points: [
            'Lični podaci se prikupljaju putem formi i email-a',
            'Koriste se za odgovore na upite i pružanje usluga',
            'Osnovni kolačići i analitika za funkcionalnost sajta',
            'Podaci se ne prodaju niti iznajmljuju',
            'Deljenje samo sa pouzdanim servisnim partnerima',
            'Pravo pristupa, ispravke ili brisanja podataka u svakom trenutku',
            'Primena tehničkih i organizacionih mera zaštite'
          ],
          sideTitle: 'Vaša Privatnost',
          sideSubtitle: 'Zaštićena vrhunskim bezbednosnim merama i strogim protokolima poverljivosti.'
        },
        terms: {
          badge: 'Ugovorni Odnos',
          title: 'Uslovi Korišćenja',
          subtitle: 'Jasne smernice našeg profesionalnog odnosa i pružanja usluga.',
          points: [
            'Sadržaj je informativnog karaktera',
            'Usluge bezbednosti podležu zakonima i licenciranju',
            'Bez odgovornosti za gubitke nastale korišćenjem informacija sa sajta',
            'Svi znakovi i sadržaji su vlasništvo svojih autora',
            'Neovlašćena upotreba je strogo zabranjena',
            'Podleže zakonima Republike Srbije',
            'Neprimenljive odredbe ne utiču na ostale'
          ],
          sideTitle: 'Pravni Okvir',
          sideSubtitle: 'Podleže zakonima Republike Srbije uz međunarodne standarde usklađenosti.'
        },
        additional: {
          badge: 'Usklađenost i Garancija',
          title: 'Dodatne Informacije',
          disclaimerTitle: 'Odricanje Od Odgovornosti',
          disclaimerSubtitle: 'Upravljanje Rizicima',
          disclaimerText: 'Iako VIP Elite Security teži da pruži najviši nivo zaštite, potpuna imunost od svih bezbednosnih pretnji nije moguća. Naše usluge su dizajnirane da značajno smanje rizike i obezbede brzu reakciju na incidente.',
          licensingTitle: 'Licenciranje',
          licensingSubtitle: 'Sertifikovana Izvrsnost',
          licensingText: 'VIP Elite Security i svi njegovi operativci u potpunosti su licencirani i osigurani u skladu sa lokalnim i međunarodnim propisima koji uređuju privatne bezbednosne usluge.'
        },
        cta: {
          title: 'Pitanja U Vezi Naših Pravnih Politika?',
          subtitle: 'Kontaktirajte nas za objašnjenje pravnih detalja ili da saznate više o zaštiti vaših interesa.',
          contactButton: 'Kontaktirajte Pravni Tim',
          servicesButton: 'Pogledajte Usluge'
        }
      }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
