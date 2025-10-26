import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Shield, Eye, Award, Heart, MapPin, Globe2, Check } from 'lucide-react';

export function About() {
  const principles = [
    {
      icon: Eye,
      title: 'Discretion',
      description: 'Low-profile conduct, privacy by design.',
      detail: 'We operate seamlessly in the background, ensuring your security never compromises your lifestyle or public image.'
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'Trained, licensed, scenario-rehearsed teams.',
      detail: 'Our operators are drawn from elite military and law enforcement backgrounds, continuously trained in the latest protective methodologies.'
    },
    {
      icon: Shield,
      title: 'Preparation',
      description: 'Intelligence-led planning and contingencies.',
      detail: 'Every assignment begins with comprehensive threat assessment and strategic planning, leaving nothing to chance.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Safety, dignity, and service at every touchpoint.',
      detail: 'We protect not just physical security, but the comfort, privacy, and peace of mind of those we serve.'
    }
  ];

  const coverage = [
    { location: 'Belgrade', type: 'Headquarters', status: 'Primary Base' },
    { location: 'Novi Sad', type: 'Regional Hub', status: 'Regular Operations' },
    { location: 'Niš', type: 'Regional Hub', status: 'Regular Operations' },
    { location: 'International', type: 'Global Reach', status: 'By Arrangement' }
  ];

  const highlights = [
    'Experienced operators from elite backgrounds',
    'Continuous training and certification',
    'Strict confidentiality protocols',
    'Tailored protective strategies',
    'Intelligence-led risk assessment',
    'Seamless lifestyle integration'
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0000] via-black to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF0000] rounded-full blur-[150px] opacity-10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-[0.03]" />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#FF0000]/30 bg-[#FF0000]/5">
              <div className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse" />
              <span className="text-[#FF0000] text-xs font-light uppercase tracking-[0.2em]">
                Established Excellence
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              REDEFINING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#CC0000] to-[#FF0000]">
                PERSONAL SECURITY
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#999999]" />
              <Shield className="w-6 h-6 text-[#FF0000]" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#999999]" />
            </div>
            
            <p className="text-[#999999] text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
              Bespoke protection with a blend of <span className="text-white">discreet luxury</span> and 
              <span className="text-white"> tactical professionalism</span>
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 space-y-10">
              <div>
                <div className="inline-block px-4 py-2 border border-[#333333] bg-[#0a0a0a] mb-6">
                  <span className="text-[#999999] text-xs font-light uppercase tracking-[0.2em]">
                    Our Philosophy
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                  Protection That
                  <br />
                  <span className="text-[#FF0000]">Fits Your Life</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-[#999999] text-lg font-light leading-relaxed">
                <p>
                  VIP Elite Security provides <span className="text-white font-normal">bespoke protection</span> with a blend of discreet luxury 
                  and tactical professionalism. We recruit experienced operators, invest in continuous 
                  training, and operate with strict confidentiality.
                </p>
                <p>
                  Every engagement starts with <span className="text-[#FF0000] font-normal">listening</span>—understanding your lifestyle, 
                  schedule, and risk tolerance—then building a protective design that fits seamlessly 
                  into your daily life.
                </p>
                <p>
                  Our mission is to provide peace of mind through expertly crafted security solutions 
                  that are tailored to each client's specific needs and circumstances, without disrupting 
                  the natural flow of your personal or professional activities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 border border-[#FF0000] bg-[#FF0000]/10 flex items-center justify-center mt-1 group-hover:bg-[#FF0000] transition-colors duration-300">
                      <Check className="w-3 h-3 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[#999999] text-sm font-light group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-[#262626]" />
                <div className="absolute -inset-8 border border-[#1a1a1a]" />
                
                <div className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black p-12 flex items-center justify-center">
                  <img 
                    src="/vipblackwhitelogo.png" 
                    alt="VIP Elite Security Logo" 
                    className="w-full h-full object-contain max-w-[350px] opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-block px-4 py-2 border border-[#333333] bg-[#0a0a0a]">
              <span className="text-[#999999] text-xs font-light uppercase tracking-[0.2em]">
                Core Values
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Our <span className="text-[#FF0000]">Principles</span>
            </h2>
            <p className="text-[#999999] text-lg max-w-2xl mx-auto font-light">
              The foundation of every engagement, mission, and client relationship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] p-10 hover:border-[#FF0000]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/0 via-[#FF0000]/5 to-[#FF0000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number background */}
                  <div className="absolute top-6 right-6 text-[120px] font-black text-[#0a0a0a] leading-none group-hover:text-[#FF0000]/5 transition-colors duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#FF0000]/30 bg-[#FF0000]/5 group-hover:border-[#FF0000] group-hover:bg-[#FF0000]/10 transition-all duration-500">
                      <Icon className="w-8 h-8 text-[#FF0000]" strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-wide mb-3">
                        {principle.title}
                      </h3>
                      
                      <p className="text-[#FF0000] font-light tracking-wide mb-4">
                        {principle.description}
                      </p>
                      
                      <p className="text-[#999999] font-light leading-relaxed">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 border border-[#1a1a1a]" />
                
                <div className="relative aspect-square bg-gradient-to-br from-[#0a0a0a] to-black border border-[#262626] p-16 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe2 className="w-full h-full text-[#FF0000] opacity-5" strokeWidth={0.3} />
                  </div>
                  
                  <div className="relative text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-[#FF0000] bg-[#FF0000]/10">
                      <MapPin className="w-10 h-10 text-[#FF0000]" />
                    </div>
                    <div>
                      <div className="text-7xl font-black text-white mb-2">SERBIA</div>
                      <div className="w-32 h-[2px] bg-[#FF0000] mx-auto mb-4" />
                      <div className="text-lg text-[#999999] font-light tracking-[0.2em] uppercase">
                        Headquarters
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <div className="inline-block px-4 py-2 border border-[#333333] bg-[#0a0a0a] mb-6">
                  <span className="text-[#999999] text-xs font-light uppercase tracking-[0.2em]">
                    Global Presence
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                  <span className="text-[#FF0000]">Coverage</span>
                  <br />
                  & Reach
                </h2>
                <p className="text-[#999999] text-lg font-light leading-relaxed">
                  Headquartered in Belgrade, Serbia, we maintain regular operations across 
                  key Serbian cities while offering international deployment capabilities for 
                  clients requiring protection beyond regional borders.
                </p>
              </div>

              <div className="space-y-3">
                {coverage.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-black border border-[#1a1a1a] hover:border-[#FF0000]/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/0 to-[#FF0000]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    
                    <div className="relative flex items-center gap-5 p-6">
                      <div className="flex-shrink-0 w-12 h-12 border border-[#FF0000]/30 bg-[#FF0000]/5 flex items-center justify-center group-hover:border-[#FF0000] group-hover:bg-[#FF0000]/10 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-[#FF0000]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-xl font-bold tracking-wide mb-1">{item.location}</h4>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-[#999999] font-light">{item.type}</span>
                          <span className="text-[#333333]">•</span>
                          <span className="text-[#666666] font-light">{item.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0000] to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF0000] rounded-full blur-[200px] opacity-10" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Ready to Experience
                <br />
                <span className="text-[#FF0000]">Elite Protection?</span>
              </h2>
              <p className="text-[#999999] text-xl font-light leading-relaxed max-w-2xl mx-auto">
                Contact us for a confidential consultation. We'll listen to your needs 
                and design a security solution that fits seamlessly into your life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact"
                className="group relative px-12 py-5 bg-[#FF0000] text-white text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF0000]/20"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              
              <a 
                href="/services"
                className="px-12 py-5 border border-[#333333] text-white text-sm font-bold uppercase tracking-[0.2em] hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}