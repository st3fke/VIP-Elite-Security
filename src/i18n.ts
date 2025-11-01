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
        },
        hero: {
          badge: "Elite Protection Services",
          title1: "BESPOKE",
          title2: "SECURITY",
          title3: "SOLUTIONS",
          subtitle: "Comprehensive protection services tailored for high-net-worth individuals, executives, and their families worldwide.",
          btn1: "Request Consultation",
          btn2: "Explore Services"
        },
        highlights: {
          sectionBadge: "Our Expertise",
          title: "Comprehensive Protection",
          subtitle: "Tailored security solutions for every aspect of your life and business",
          cards: [
            {
              title: "Executive Protection",
              desc: "24/7 close protection for high-profile individuals"
            },
            {
              title: "Family Security",
              desc: "Comprehensive protection for your loved ones"
            },
            {
              title: "Residential",
              desc: "Secure your homes and properties"
            },
            {
              title: "Transport Security",
              desc: "Armored vehicles and secure transportation"
            },
            {
              title: "Travel Security",
              desc: "Global protection during business and leisure travel"
            },
            {
              title: "Event Security",
              desc: "Large-scale event protection and crowd management"
            }
          ]
        },
        stats: [
          { number: "24/7", label: "Protection Coverage" },
          { number: "100+", label: "Elite Clients" },
          { number: "50+", label: "Countries Served" },
          { number: "0", label: "Security Breaches" }
        ],
        cta: {
          badge: "Ready for Elite Protection?",
          title: "Begin Your Security Assessment",
          subtitle: "Contact us for a confidential consultation and let us design a protection strategy that integrates seamlessly with your lifestyle.",
          button: "Schedule Consultation"
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
        ,
        hero: {
          badge: "Trusted Worldwide",
          title1: "BESPOKE",
          title2: "PROTECTION",
          title3: "REDEFINED",
          subtitle: "Precision, discretion, and trust — our protection adapts to your lifestyle, ensuring peace of mind through every moment."
        },
        story: {
          badge: "Our Philosophy",
          title: "Protection That Fits Your Life",
          p1: "VIP Elite Security provides bespoke protection with a blend of discreet luxury and tactical professionalism.",
          p2: "Every engagement begins with listening — understanding your lifestyle, then crafting security that integrates seamlessly.",
          highlights: [
            "Experienced operators from elite backgrounds",
            "Continuous training and certification",
            "Strict confidentiality protocols",
            "Tailored protective strategies",
            "Intelligence-led risk assessment",
            "Seamless lifestyle integration"
          ]
        },
        principles: {
          badge: "Core Values",
          title: "Our Principles",
          subtitle: "The foundation of every mission, engagement, and client relationship.",
          list: [
            {
              title: "Discretion",
              description: "Low-profile conduct, privacy by design.",
              detail: "We operate seamlessly in the background, ensuring your security never compromises your lifestyle or public image."
            },
            {
              title: "Professionalism",
              description: "Trained, licensed, scenario-rehearsed teams.",
              detail: "Our operators are drawn from elite military and law enforcement backgrounds, continuously trained in the latest protective methodologies."
            },
            {
              title: "Preparation",
              description: "Intelligence-led planning and contingencies.",
              detail: "Every assignment begins with comprehensive threat assessment and strategic planning, leaving nothing to chance."
            },
            {
              title: "Care",
              description: "Safety, dignity, and service at every touchpoint.",
              detail: "We protect not just physical security, but the comfort, privacy, and peace of mind of those we serve."
            }
          ]
        },
        coverage: {
          title: "Coverage & Reach",
          description: "Headquartered in Belgrade, Serbia. Regular operations across Serbia and international deployments by arrangement.",
          locations: [
            { location: "Belgrade", type: "Headquarters", status: "Primary Base" },
            { location: "Novi Sad", type: "Regional Hub", status: "Regular Operations" },
            { location: "Niš", type: "Regional Hub", status: "Regular Operations" },
            { location: "International", type: "Global Reach", status: "By Arrangement" }
          ]
        },
        cta: {
          title: "Ready to Experience",
          highlight: "Elite Protection?",
          subtitle: "Contact us for a confidential consultation. We'll listen to your needs and design a protection solution that fits seamlessly into your lifestyle.",
          button1: "Schedule Consultation",
          button2: "View Services"
        }
      },
      contact: {
        title: 'Ready to Secure Your Safety?',
        subtitle: 'Contact us today for a confidential consultation and personalized security assessment.',
        phone: 'Phone',
        email: 'Email',
        availability: 'Availability',
        availabilityText: '24/7 Emergency Response',
        requestConsultation: 'Request Consultation',
        hero: {
          badge: "Confidential Consultation",
          title1: "CONTACT",
          title2: "VIP ELITE",
          subtitle: "Begin your journey to elite protection. Share your requirements for a confidential assessment."
        },
        info: {
          cards: [
            {
              icon: "Phone",
              title: "24/7 Phone",
              subtitle: "+381 66 030 4411",
              text: "Always available for urgent inquiries"
            },
            {
              icon: "Mail",
              title: "Email",
              subtitle: "info@vipelitesecurity.com",
              text: "Secure encrypted communication"
            },
            {
              icon: "MapPin",
              title: "Headquarters",
              subtitle: "Belgrade, Serbia",
              text: "Global operations available"
            }
          ],
          confidential: {
            text: "For confidential inquiries, please share:",
            highlight: "name, contact details, dates, locations, number of persons, and the services required.",
            followup: "A protection manager will respond promptly."
          }
        },
        form: {
          title: "Confidential Inquiry",
          subtitle: "Complete the form below and our protection manager will contact you within 24 hours.",
          name: "Full Name *",
          namePlaceholder: "Enter your full name",
          email: "Email Address *",
          emailPlaceholder: "Enter your email",
          phone: "Phone Number *",
          phonePlaceholder: "+381 XX XXX XXXX",
          service: "Service Required *",
          servicePlaceholder: "Select a service",
          dates: "Dates",
          datesPlaceholder: "Preferred dates or duration",
          locations: "Locations",
          locationsPlaceholder: "Cities or countries involved",
          message: "Additional Details *",
          messagePlaceholder: "Please include number of persons, specific requirements, and any other relevant details...",
          consent: "I consent to the processing of my personal data in accordance with the Privacy Policy. I understand that all information shared will be treated with strict confidentiality.",
          button: "Send Confidential Message",
          successMessage: "Thank you for your inquiry. A protection manager will contact you shortly.",
          errorMessage: "Sorry, there was an error sending your message. Please try again.",
          submitting: "Sending..."
        },
        services: [
          "Executive Protection",
          "Event Security",
          "Residential Security",
          "Corporate Security",
          "Travel Security",
          "Risk Assessment",
          "Other"
        ],
        validation: {
      nameRequired: "Name is required",
      nameMinLength: "Name must be at least 2 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      serviceRequired: "Please select a service",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
      consentRequired: "You must agree to the privacy policy"
    },
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
      servicesDetails: {
        closeProtection: {
          title: "Close Protection",
          description1: "Our close protection officers are highly trained professionals with extensive backgrounds in military special forces, law enforcement, and intelligence services. We provide discreet, professional protection for high-profile individuals, executives, celebrities, and their families.",
          description2: "Each protection detail is carefully planned and executed with precision, ensuring your safety while maintaining your privacy and lifestyle. Our team operates seamlessly in any environment, from corporate settings to high-risk international locations.",
          features: [
            "Elite bodyguard services from former special forces",
            "Threat assessment and risk mitigation",
            "Advance route planning and reconnaissance",
            "Discreet or visible protection as required",
            "Emergency response and medical support",
            "International operational capability"
          ]
        },
        covertProtection: {
          title: "Covert Protection",
          description1: "For clients who require security without a visible presence, our covert protection services provide discreet, professional coverage that ensures your safety while maintaining your privacy.",
          description2: "Our covert protection specialists blend seamlessly into any environment, offering surveillance detection, threat assessment, and invisible protection ideal for sensitive profiles.",
          features: [
            "Invisible protection without obvious security presence",
            "Surveillance detection and counter-surveillance",
            "Discreet monitoring of potential threats",
            "Intelligence gathering and analysis",
            "Protective surveillance teams",
            "Seamless integration into daily routines"
          ]
        },
        familySecurity: {
          title: "Family Security",
          description1: "Protecting your family is our highest priority. We offer comprehensive protection programs designed for families, ensuring the safety of all members — children, elders, and staff.",
          description2: "Our services cover daily routines, travel, school runs, and recreational activities. Each plan is customized to integrate seamlessly with your family’s lifestyle.",
          features: [
            "Comprehensive family protection programs",
            "Child protection and school security",
            "Residential security assessments",
            "Safe travel arrangements for family members",
            "Emergency response planning",
            "Security awareness training for families"
          ]
        },
        residentialSecurity: {
          title: "Residential Security",
          description1: "Your home should be your sanctuary. We provide full-scale protection for luxury estates, private residences, and vacation properties.",
          description2: "Our guards ensure discreet but vigilant protection through access control, surveillance, and emergency response protocols.",
          features: [
            "Professional security guards for estates and properties",
            "Access control and visitor management",
            "CCTV monitoring and surveillance systems",
            "Perimeter security and intrusion detection",
            "Emergency response protocols",
            "Integration with smart home security systems"
          ]
        },
        eventSecurity: {
          title: "Event Security",
          description1: "Whether hosting private gatherings, corporate events, or attending public functions, our event security ensures your safety and flawless execution.",
          description2: "We assess venues, plan security logistics, manage crowds, and coordinate with local law enforcement while maintaining a professional and discreet presence.",
          features: [
            "VIP protection at private and public events",
            "Venue security assessments and planning",
            "Access control and guest screening",
            "Crowd management and monitoring",
            "Emergency evacuation procedures",
            "Coordination with local law enforcement"
          ]
        },
        transportSecurity: {
          title: "Secure Transport",
          description1: "Travel safely with our armored luxury vehicles and professional drivers, trained in advanced defensive and evasive driving techniques.",
          description2: "Every journey is planned with threat assessment, route alternates, and emergency response contingencies for complete peace of mind.",
          features: [
            "Armored luxury vehicles for secure transportation",
            "Professional security drivers with advanced training",
            "Route planning and real-time threat monitoring",
            "Counter-surveillance and evasive driving techniques",
            "Airport transfers and VIP transport services",
            "International transport coordination"
          ]
        },
        travelSecurity: {
          title: "Travel Security",
          description1: "Our travel security services protect you worldwide — for both business and leisure trips.",
          description2: "We conduct risk assessments, arrange secure transport and accommodations, and provide 24/7 support throughout your journey.",
          features: [
            "International travel security planning",
            "Destination risk assessments",
            "Secure accommodation arrangements",
            "Local security coordination",
            "Emergency extraction capabilities",
            "Medical and crisis support worldwide"
          ]
        },
        cyberSecurity: {
          title: "Cyber Security",
          description1: "Protecting your information and privacy is as vital as physical safety. Our cyber team neutralizes surveillance, data breaches, and cyber threats.",
          description2: "We perform technical sweeps, implement secure communications, and offer consulting on digital privacy and data protection.",
          features: [
            "Technical surveillance countermeasures (TSCM)",
            "Bug sweeping and electronic detection",
            "Secure communications solutions",
            "Digital privacy protection",
            "Cyber threat assessment and monitoring",
            "Data security consulting"
          ]
        },
        armoredCarHire: {
          title: "Armored Car Hire",
          description1: "Hire armored vehicles tailored to your security needs, operated by trained professionals with experience in high-risk environments.",
          description2: "Each vehicle undergoes safety inspections and is integrated with escort or convoy teams when required.",
          features: [
            "Certified ballistic protection vehicles",
            "Armored sedans and SUVs with trained drivers",
            "Vehicle selection based on mission profile",
            "Maintenance and readiness checks",
            "Integration with escort and convoy teams"
          ]
        },
        armoredLuxuryTransport: {
          title: "Armored & Luxury Transport",
          description1: "Travel in safety and comfort with our fleet of armored luxury vehicles driven by experienced professionals.",
          description2: "Perfect for executives seeking secure, discreet, and premium ground transport options.",
          features: [
            "Premium armored sedans and SUVs",
            "Discreet, comfortable executive travel",
            "Professional drivers trained in security protocols",
            "Integrated with close protection services",
            "Multi-stop itineraries and meet-and-greet options"
          ]
        },
        bugSweeping: {
          title: "Bug Sweeping (TSCM)",
          description1: "Our TSCM experts detect and neutralize hidden listening and tracking devices across offices, vehicles, and residences.",
          description2: "Using RF, optical, and cable analysis, we ensure your communications and privacy remain secure.",
          features: [
            "RF and NLJD electronic sweep detection",
            "Thermal and optical inspection",
            "Hidden camera and microphone discovery",
            "Cable and endpoint analysis",
            "Post-sweep reporting and remediation guidance"
          ]
        },
        helicopterTransport: {
          title: "Helicopter Transport",
          description1: "We offer secure and efficient helicopter transfers coordinated with ground security for time-critical movements.",
          description2: "Ideal for high-net-worth individuals and executives requiring rapid and private travel.",
          features: [
            "Private point-to-point helicopter transfers",
            "Vetted aviation partners and pilots",
            "Integrated ground security coordination",
            "Weather and route safety checks",
            "Fast response for time-critical movement"
          ]
        },
        protectiveSurveillance: {
          title: "Protective Surveillance",
          description1: "Our teams discreetly monitor routes, venues, and persons of interest to detect and prevent threats before they escalate.",
          description2: "We combine intelligence gathering with real-time communication for proactive protection.",
          features: [
            "Covert monitoring of routes, venues, and persons of interest",
            "Early threat detection and warning systems",
            "Pattern-of-life and risk behavior analysis",
            "Hostile surveillance detection",
            "Real-time communication with protection team",
            "Ideal for residences, offices, and events"
          ]
        },
        riskManagement: {
          title: "Risk Management",
          description1: "We assess and mitigate risks across people, assets, and operations.",
          description2: "Our consultants deliver actionable insights for secure decision-making and contingency planning.",
          features: [
            "Comprehensive risk assessments and audits",
            "Threat prioritization and mitigation planning",
            "Crisis response and contingency design",
            "Security policy and training support",
            "Executive and board-level briefings"
          ]
        },
        securityDriver: {
          title: "Security Driver",
          description1: "Our executive security drivers ensure safe, discreet, and efficient transport for executives and families alike.",
          description2: "They are trained in defensive driving, emergency response, and route optimization.",
          features: [
            "Executive chauffeurs with defensive driving skills",
            "Discreet and professional appearance",
            "Real-time route optimization",
            "Low-profile pickups and arrivals",
            "Trained in emergency and threat response"
          ]
        },
        armedSecurityDriver: {
          title: "Armed Security Driver",
          description1: "Our armed drivers combine precision driving with firearms proficiency to guarantee safety in all environments.",
          description2: "Ideal for high-risk profiles and sensitive missions requiring maximum security.",
          features: [
            "Armed and licensed professional drivers",
            "Advanced defensive and counter-ambush training",
            "Route design with alternates and safe zones",
            "Vehicle readiness and safety inspections",
            "Ideal for high-risk profiles and sensitive missions"
          ]
        },
        journeyManagement: {
          title: "Journey Management",
          description1: "We ensure that every trip is secure, efficient, and seamlessly coordinated from start to finish.",
          description2: "Our experts monitor travel in real time and plan contingencies for all scenarios.",
          features: [
            "Pre-trip planning and reconnaissance",
            "Real-time journey monitoring",
            "Alternate route and safe-haven design",
            "Emergency and medical trigger planning",
            "End-to-end security coordination"
          ]
        },
        medicalSupport: {
          title: "Medical Support",
          description1: "Our embedded medical specialists ensure immediate, professional response to any medical emergency.",
          description2: "We provide trained doctors and paramedics integrated directly into protection teams.",
          features: [
            "Embedded doctors or paramedics in protection teams",
            "Trauma and emergency medical kits on-site",
            "Venue and route medical risk assessments",
            "Evacuation and hospital coordination",
            "First-response coverage during any incident"
          ]
        }
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
        countries: 'Država',
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
        },
        hero: {
          badge: "Elitne Zaštitne Usluge",
          title1: "PRILAGOĐENE",
          title2: "BEZBEDNOSNE",
          title3: "SOLUCIJE",
          subtitle: "Sveobuhvatne usluge zaštite prilagođene pojedincima visokog profila, izvršnim direktorima i njihovim porodicama širom sveta.",
          btn1: "Zakažite Konsultaciju",
          btn2: "Istražite Usluge"
        },
        highlights: {
          sectionBadge: "Naša Stručnost",
          title: "Sveobuhvatna Zaštita",
          subtitle: "Bezbednosna rešenja prilagođena svakom aspektu vašeg života i poslovanja",
          cards: [
            {
              title: "Izvršna Zaštita",
              desc: "24/7 bliska zaštita za javne ličnosti i klijente visokog profila"
            },
            {
              title: "Porodična Bezbednost",
              desc: "Kompletna zaštita za vaše najbliže"
            },
            {
              title: "Rezidencijalna Zaštita",
              desc: "Osigurajte svoje domove i objekte"
            },
            {
              title: "Bezbednost Transporta",
              desc: "Oklopna vozila i bezbedan prevoz"
            },
            {
              title: "Bezbednost Putovanja",
              desc: "Globalna zaštita tokom poslovnih i privatnih putovanja"
            },
            {
              title: "Bezbednost Događaja",
              desc: "Zaštita velikih događaja i upravljanje masama"
            }
          ]
        },
        stats: [
          { number: "24/7", label: "Pokriće Zaštite" },
          { number: "100+", label: "Elitnih Klijenata" },
          { number: "50+", label: "Zemalja Pokriveno" },
          { number: "0", label: "Bezbednosnih Propusta" }
        ],
        cta: {
          badge: "Spremni za Elitnu Zaštitu?",
          title: "Započnite Vašu Bezbednosnu Procenu",
          subtitle: "Kontaktirajte nas za poverljivu konsultaciju i dozvolite nam da dizajniramo strategiju zaštite koja se savršeno uklapa u vaš stil života.",
          button: "Zakažite Konsultaciju"
        }
      }
      ,
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
        yearsProtecting: 'Godina zaštite VIP klijenata širom sveta',
        hero: {
          badge: "Pouzdani širom sveta",
          title1: "PRILAGOĐENA",
          title2: "ZAŠTITA",
          title3: "DEFINISANA IZNOVA",
          subtitle: "Preciznost, diskrecija i poverenje — naša zaštita se prilagođava vašem životnom stilu, pružajući mir i sigurnost u svakom trenutku."
        },
        story: {
          badge: "Naša filozofija",
          title: "Zaštita koja se uklapa u vaš život",
          p1: "VIP Elite Security pruža personalizovanu zaštitu kombinujući diskretnu eleganciju i taktički profesionalizam.",
          p2: "Svaka saradnja počinje slušanjem — razumevanjem vašeg životnog stila, a zatim oblikovanjem bezbednosti koja se neprimetno uklapa u njega.",
          highlights: [
            "Iskusni operativci iz elitnih bezbednosnih struktura",
            "Kontinuirana obuka i sertifikacija",
            "Strogi protokoli poverljivosti",
            "Prilagođene strategije zaštite",
            "Analiza rizika zasnovana na obaveštajnim podacima",
            "Potpuna integracija u vaš način života"
          ]
        },
        principles: {
          badge: "Osnovne vrednosti",
          title: "Naši principi",
          subtitle: "Temelj svake misije, angažmana i odnosa sa klijentima.",
          list: [
            {
              title: "Diskrecija",
              description: "Diskretan pristup, privatnost po dizajnu.",
              detail: "Radimo neprimetno u pozadini, osiguravajući da vaša bezbednost nikada ne ugrozi vaš životni stil ili javni imidž."
            },
            {
              title: "Profesionalizam",
              description: "Obučeni, licencirani, uvežbani timovi.",
              detail: "Naši operativci dolaze iz elitnih vojnih i policijskih struktura i kontinuirano prolaze obuke u savremenim metodologijama zaštite."
            },
            {
              title: "Priprema",
              description: "Planiranje zasnovano na obaveštajnim podacima.",
              detail: "Svaka misija počinje sveobuhvatnom procenom rizika i strateškim planiranjem, bez prostora za slučajnost."
            },
            {
              title: "Briga",
              description: "Bezbednost, dostojanstvo i usluga u svakom trenutku.",
              detail: "Štitimo ne samo fizičku sigurnost, već i udobnost, privatnost i spokoj naših klijenata."
            }
          ]
        },
        coverage: {
          title: "Pokrivenost i prisustvo",
          description: "Sedište u Beogradu, Srbija. Redovne operacije širom zemlje i međunarodne angažmane po dogovoru.",
          locations: [
            { location: "Beograd", type: "Sedište", status: "Glavna baza" },
            { location: "Novi Sad", type: "Regionalni centar", status: "Redovne operacije" },
            { location: "Niš", type: "Regionalni centar", status: "Redovne operacije" },
            { location: "Inostranstvo", type: "Globalno prisustvo", status: "Po dogovoru" }
          ]
        },
        cta: {
          title: "Spremni ste da iskusite",
          highlight: "Elitnu zaštitu?",
          subtitle: "Kontaktirajte nas za poverljiv razgovor. Saslušaćemo vaše potrebe i osmisliti rešenje zaštite koje se savršeno uklapa u vaš životni stil.",
          button1: "Zakažite konsultaciju",
          button2: "Pogledajte usluge"
        }
      },
      contact: {
        title: 'Spremni da Obezbedite Svoju Sigurnost?',
        subtitle: 'Kontaktirajte nas danas za poverljivu konsultaciju i personalizovanu procenu bezbednosti.',
        phone: 'Telefon',
        email: 'Email',
        availability: 'Dostupnost',
        availabilityText: '24/7 Hitna Pomoć',
        requestConsultation: 'Zatraži Konsultaciju',
        hero: {
          badge: "Poverljiva Konsultacija",
          title1: "KONTAKT",
          title2: "VIP ELITE",
          subtitle: "Započnite svoj put ka elitnoj zaštiti. Podelite svoje potrebe za poverljivu procenu bezbednosti."
        },
        info: {
          cards: [
            {
              icon: "Phone",
              title: "24/7 Telefon",
              subtitle: "+381 66 030 4411",
              text: "Uvek dostupni za hitne upite"
            },
            {
              icon: "Mail",
              title: "Email",
              subtitle: "info@vipelitesecurity.com",
              text: "Bezbedna i enkriptovana komunikacija"
            },
            {
              icon: "MapPin",
              title: "Sedište",
              subtitle: "Beograd, Srbija",
              text: "Međunarodne operacije dostupne"
            }
          ],
          confidential: {
            text: "Za poverljive upite, molimo navedite:",
            highlight: "ime, kontakt podatke, datume, lokacije, broj osoba i usluge koje su vam potrebne.",
            followup: "Menadžer zaštite će vam se ubrzo javiti."
          }
        },
        form: {
          title: "Poverljivi Upit",
          subtitle: "Popunite formular ispod i naš menadžer zaštite će vas kontaktirati u roku od 24 sata.",
          name: "Puno Ime *",
          namePlaceholder: "Unesite vaše puno ime",
          email: "Email Adresa *",
          emailPlaceholder: "Unesite vaš email",
          phone: "Broj Telefona *",
          phonePlaceholder: "+381 XX XXX XXXX",
          service: "Potrebna Usluga *",
          servicePlaceholder: "Odaberite uslugu",
          dates: "Datumi",
          datesPlaceholder: "Željeni datumi ili trajanje",
          locations: "Lokacije",
          locationsPlaceholder: "Gradovi ili zemlje koje su uključene",
          message: "Dodatni Detalji *",
          messagePlaceholder: "Unesite broj osoba, specifične zahteve i sve druge relevantne detalje...",
          consent: "Slažem se sa obradom svojih ličnih podataka u skladu sa Politikom Privatnosti. Razumem da će svi podaci biti tretirani kao strogo poverljivi.",
          button: "Pošalji Poverljivu Poruku",
          successMessage: "Hvala na vašem upitu. Menadžer zaštite će vas uskoro kontaktirati.",
          errorMessage: "Izvinite, nastala je greška prilikom slanja. Molimo pokušajte opet.",
          submitting: "Slanje..."
        },
        services: [
          "Izvršna Zaštita",
          "Bezbednost Događaja",
          "Rezidencijalna Zaštita",
          "Korporativna Bezbednost",
          "Bezbednost Putovanja",
          "Procena Rizika",
          "Ostalo"
        ],
        validation: {
      nameRequired: "Ime je obavezno",
      nameMinLength: "Ime mora imati najmanje 2 karaktera",
      emailRequired: "Email je obavezan",
      emailInvalid: "Molimo unesite validnu email adresu",
      phoneRequired: "Broj telefona je obavezan",
      phoneInvalid: "Molimo unesite validan broj telefona",
      serviceRequired: "Molimo odaberite uslugu",
      messageRequired: "Poruka je obavezna",
      messageMinLength: "Poruka mora imati najmanje 10 karaktera",
      consentRequired: "Morate se složiti sa politikom privatnosti"
    },
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
      },
      servicesDetails: {
        closeProtection: {
          title: "Lična Zaštita",
          description1: "Naši operativci lične zaštite su visoko obučeni profesionalci sa iskustvom u vojnim specijalnim jedinicama, policiji i obaveštajnim službama. Pružamo diskretnu, profesionalnu zaštitu visokoprofilnim pojedincima, rukovodiocima, javnim ličnostima i njihovim porodicama.",
          description2: "Svaka misija zaštite pažljivo se planira i izvodi sa preciznošću, obezbeđujući vašu sigurnost uz očuvanje privatnosti i svakodnevnog načina života. Naš tim deluje neprimetno u bilo kom okruženju – od poslovnih prostora do visokorizičnih međunarodnih lokacija.",
          features: [
            "Elitne telohraniteljske usluge bivših specijalaca",
            "Procena pretnji i ublažavanje rizika",
            "Planiranje ruta i izviđanje terena",
            "Diskretna ili vidljiva zaštita po potrebi",
            "Hitni medicinski i bezbednosni odgovor",
            "Međunarodne operativne mogućnosti"
          ]
        },
        covertProtection: {
          title: "Prikrivena Zaštita",
          description1: "Za klijente koji zahtevaju zaštitu bez vidljivog prisustva obezbeđenja, naše prikrivene usluge nude diskretnu i profesionalnu zaštitu uz očuvanje privatnosti i normalnog života.",
          description2: "Naši specijalisti za prikrivenu zaštitu neprimetno se uklapaju u svako okruženje, pružajući nadzor, procenu pretnji i tajnu zaštitu idealnu za osetljive profile.",
          features: [
            "Nevidljiva zaštita bez uočljivog prisustva obezbeđenja",
            "Otkrivanje i praćenje nadzora",
            "Diskretan monitoring potencijalnih pretnji",
            "Prikupljanje i analiza obaveštajnih informacija",
            "Zaštitni nadzorni timovi",
            "Potpuna integracija u svakodnevne aktivnosti"
          ]
        },
        familySecurity: {
          title: "Porodična Bezbednost",
          description1: "Zaštita vaše porodice je naš najveći prioritet. Nudimo sveobuhvatne programe zaštite koji osiguravaju bezbednost svih članova – dece, starijih i osoblja.",
          description2: "Naše usluge obuhvataju svakodnevne aktivnosti, školske rute, putovanja i rekreaciju. Svaki plan se prilagođava načinu života porodice uz očuvanje komfora i privatnosti.",
          features: [
            "Sveobuhvatni programi zaštite porodice",
            "Zaštita dece i bezbednost škola",
            "Procena bezbednosti stambenih objekata",
            "Bezbedna putovanja članova porodice",
            "Planovi za hitne situacije",
            "Obuka i podizanje svesti o bezbednosti"
          ]
        },
        residentialSecurity: {
          title: "Stambena Zaštita",
          description1: "Vaš dom treba da bude vaše utočište. Pružamo kompletnu zaštitu za luksuzne vile, privatne rezidencije i odmarališta.",
          description2: "Naši profesionalci obezbeđuju diskretnu, ali stalnu zaštitu kroz kontrolu pristupa, video nadzor i protokole za hitne slučajeve.",
          features: [
            "Profesionalno obezbeđenje za posede i vile",
            "Kontrola pristupa i evidencija posetilaca",
            "CCTV nadzor i sistemi praćenja",
            "Perimetarska zaštita i detekcija upada",
            "Protokoli za hitne situacije",
            "Integracija sa pametnim bezbednosnim sistemima"
          ]
        },
        eventSecurity: {
          title: "Bezbednost Događaja",
          description1: "Bez obzira da li organizujete privatni događaj, korporativni skup ili prisustvujete javnom događaju, naše obezbeđenje garantuje sigurnost i profesionalnu organizaciju.",
          description2: "Izrađujemo bezbednosne planove, vršimo procenu lokacije, upravljamo pristupom i masom, i sarađujemo sa lokalnim službama radi potpune zaštite.",
          features: [
            "VIP zaštita na privatnim i javnim događajima",
            "Procena lokacije i planiranje obezbeđenja",
            "Kontrola pristupa i provera gostiju",
            "Upravljanje i nadzor mase",
            "Protokoli za evakuaciju i hitne slučajeve",
            "Saradnja sa lokalnim bezbednosnim službama"
          ]
        },
        transportSecurity: {
          title: "Siguran Transport",
          description1: "Putujte bezbedno uz oklopna luksuzna vozila i profesionalne vozače obučene za napredne defanzivne i evazivne tehnike vožnje.",
          description2: "Svako putovanje planiramo uz procenu rizika, alternativne rute i planove za hitne slučajeve radi vaše potpune sigurnosti.",
          features: [
            "Oklopna luksuzna vozila za bezbedan prevoz",
            "Profesionalni bezbednosni vozači sa naprednom obukom",
            "Planiranje ruta i praćenje pretnji u realnom vremenu",
            "Tehnike kontra-nadzora i izbegavanja rizika",
            "VIP i aerodromski transferi",
            "Međunarodna koordinacija prevoza"
          ]
        },
        travelSecurity: {
          title: "Bezbednost Putovanja",
          description1: "Naše usluge bezbednosti putovanja obezbeđuju vašu sigurnost širom sveta – tokom poslovnih i privatnih putovanja.",
          description2: "Sprovodimo procene rizika, organizujemo siguran prevoz i smeštaj, i obezbeđujemo 24/7 podršku tokom čitavog putovanja.",
          features: [
            "Planiranje međunarodne bezbednosti putovanja",
            "Procena rizika destinacije",
            "Organizacija sigurnog smeštaja",
            "Koordinacija sa lokalnim bezbednosnim timovima",
            "Mogućnost hitne evakuacije",
            "Medicinska i krizna podrška širom sveta"
          ]
        },
        cyberSecurity: {
          title: "Cyber Bezbednost",
          description1: "Zaštita informacija i privatnosti jednako je važna kao i fizička bezbednost. Naš tim neutralizuje elektronski nadzor, curenje podataka i sajber pretnje.",
          description2: "Sprovodimo tehničke preglede (TSCM), implementiramo sigurne komunikacione sisteme i pružamo konsultacije o digitalnoj privatnosti i zaštiti podataka.",
          features: [
            "Tehničke mere protiv nadzora (TSCM)",
            "Detekcija i uklanjanje prislušnih uređaja",
            "Sigurne komunikacione platforme",
            "Zaštita digitalne privatnosti",
            "Procena i monitoring sajber pretnji",
            "Konsalting o bezbednosti podataka"
          ]
        },
        armoredCarHire: {
          title: "Iznajmljivanje Oklopnih Vozila",
          description1: "Iznajmite oklopna vozila prilagođena vašim bezbednosnim potrebama, kojima upravljaju obučeni profesionalci sa iskustvom u rizičnim područjima.",
          description2: "Svako vozilo prolazi detaljnu tehničku proveru i može biti uključeno u konvoj ili pratnju po potrebi.",
          features: [
            "Vozila sa sertifikovanom balističkom zaštitom",
            "Oklopni automobili i SUV-ovi sa profesionalnim vozačima",
            "Izbor vozila prema bezbednosnom profilu misije",
            "Redovne provere i održavanje vozila",
            "Integracija sa pratećim i konvojskim timovima"
          ]
        },
        armoredLuxuryTransport: {
          title: "Oklopni i Luksuzni Transport",
          description1: "Putujte bezbedno i udobno u našim oklopnim luksuznim vozilima kojima upravljaju provereni i iskusni profesionalci.",
          description2: "Idealno za rukovodioce koji zahtevaju sigurnost, diskreciju i komfor na najvišem nivou.",
          features: [
            "Premium oklopni automobili i SUV-ovi",
            "Diskretno i udobno putovanje za rukovodioce",
            "Vozači obučeni u bezbednosnim protokolima",
            "Integracija sa timovima lične zaštite",
            "Višestepena putovanja i opcija dočeka"
          ]
        },
        bugSweeping: {
          title: "Detekcija Prislušnih Uređaja (TSCM)",
          description1: "Naši TSCM eksperti otkrivaju i neutralizuju skrivene prislušne ili prateće uređaje u kancelarijama, vozilima i domovima.",
          description2: "Koristimo RF, optičke i kablovske analize kako bismo osigurali potpunu zaštitu vaših komunikacija i privatnosti.",
          features: [
            "Otkrivanje prislušnih i pratećih uređaja (RF i NLJD)",
            "Toplotna i optička inspekcija",
            "Detekcija skrivenih kamera i mikrofona",
            "Analiza kablovskih i mrežnih veza",
            "Izveštaj i preporuke nakon provere"
          ]
        },
        helicopterTransport: {
          title: "Helikopterski Transport",
          description1: "Pružamo siguran i efikasan helikopterski transport uz koordinaciju sa kopnenim obezbeđenjem i logističkim timovima.",
          description2: "Idealno rešenje za klijente koji zahtevaju brz, privatan i bezbedan prevoz.",
          features: [
            "Privatni helikopterski transferi od tačke do tačke",
            "Provereni piloti i avio partneri",
            "Integrisana kopnena bezbednosna podrška",
            "Provere rute i vremenskih uslova",
            "Brz odziv za hitna putovanja"
          ]
        },
        protectiveSurveillance: {
          title: "Zaštitni Nadzor",
          description1: "Naši timovi diskretno prate rute, objekte i osobe od interesa kako bi identifikovali pretnje pre nego što eskaliraju.",
          description2: "Kombinujemo prikupljanje informacija sa komunikacijom u realnom vremenu za proaktivnu zaštitu.",
          features: [
            "Prikriveno praćenje ruta, lokacija i osoba od interesa",
            "Rano otkrivanje i upozorenje na pretnje",
            "Analiza ponašanja i obrazaca rizika",
            "Otkrivanje neprijateljskog nadzora",
            "Komunikacija u realnom vremenu sa zaštitnim timom",
            "Idealno za rezidencije, kancelarije i događaje"
          ]
        },
        riskManagement: {
          title: "Upravljanje Rizicima",
          description1: "Procenićemo i ublažiti rizike koji utiču na ljude, imovinu i poslovne operacije.",
          description2: "Naši konsultanti pružaju praktične smernice i strategije za bezbedno odlučivanje i planiranje kriznih situacija.",
          features: [
            "Sveobuhvatne procene rizika i revizije",
            "Prioritizacija pretnji i plan ublažavanja rizika",
            "Dizajn kriznih i rezervnih planova",
            "Podrška u izradi bezbednosnih politika i obuka",
            "Izveštaji i brifinzi za menadžment i upravne odbore"
          ]
        },
        securityDriver: {
          title: "Bezbednosni Vozač",
          description1: "Naši bezbednosni vozači obezbeđuju siguran, diskretan i udoban prevoz za rukovodioce i porodice.",
          description2: "Obučeni su u defanzivnoj vožnji, reagovanju na pretnje i optimizaciji ruta u realnom vremenu.",
          features: [
            "Vozači sa obukom u defanzivnoj vožnji",
            "Diskretan i profesionalan izgled",
            "Optimizacija rute u realnom vremenu",
            "Neupadljivo preuzimanje i dolazak",
            "Obuka za hitne i krizne situacije"
          ]
        },
        armedSecurityDriver: {
          title: "Naoružani Bezbednosni Vozač",
          description1: "Naši naoružani vozači kombinuju preciznu vožnju sa stručnošću u rukovanju oružjem radi vaše potpune sigurnosti.",
          description2: "Idealno rešenje za visokorizične profile i osetljive misije koje zahtevaju maksimalan nivo zaštite.",
          features: [
            "Naoružani i licencirani profesionalni vozači",
            "Napredna obuka za defanzivnu i protivzasednu vožnju",
            "Dizajn ruta sa bezbednim zonama i alternativama",
            "Redovne tehničke i bezbednosne provere vozila",
            "Prilagođeno za visokorizične zadatke i misije"
          ]
        },
        journeyManagement: {
          title: "Upravljanje Putovanjima",
          description1: "Naši stručnjaci obezbeđuju da svako putovanje bude bezbedno, efikasno i besprekorno koordinisano od početka do kraja.",
          description2: "Pratimo rute u realnom vremenu i planiramo alternative za sve moguće situacije.",
          features: [
            "Planiranje i izviđanje pre putovanja",
            "Praćenje putovanja u realnom vremenu",
            "Dizajn alternativnih ruta i sigurnih tačaka",
            "Planiranje medicinskih i kriznih procedura",
            "Kompletna bezbednosna koordinacija putovanja"
          ]
        },
        medicalSupport: {
          title: "Medicinska Podrška",
          description1: "Naši medicinski stručnjaci u timu obezbeđuju brzu i profesionalnu reakciju u svakoj hitnoj situaciji.",
          description2: "Doktori i paramedici su integrisani direktno u zaštitne timove radi trenutne pomoći na licu mesta.",
          features: [
            "Lekari ili paramedici u zaštitnim timovima",
            "Trauma i hitni medicinski setovi na licu mesta",
            "Procena medicinskih rizika na rutama i lokacijama",
            "Evakuacija i koordinacija sa bolnicama",
            "Pokriće prve pomoći tokom svakog incidenta"
          ]
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
