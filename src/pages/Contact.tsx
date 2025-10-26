import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
export function Contact() {
  return <div className="w-full min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Contact <span className="text-primary-red">Us</span>
          </h1>
          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-16">
            Get in touch with our team for a confidential consultation about
            your security needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 border border-white/10 p-8 text-center">
              <Phone className="w-10 h-10 text-primary-red mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+381 66 030 4411</p>
            </div>
            <div className="bg-gray-900/50 border border-white/10 p-8 text-center">
              <Mail className="w-10 h-10 text-primary-red mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">info@vipelitesecurity.com</p>
            </div>
            <div className="bg-gray-900/50 border border-white/10 p-8 text-center">
              <MapPin className="w-10 h-10 text-primary-red mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Office</h3>
              <p className="text-gray-400">Belgrade, Serbia</p>
            </div>
          </div>
          {/* Contact form would go here */}
          <div className="bg-gray-900/50 border border-white/10 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-black border border-gray-800 text-white p-3" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-black border border-gray-800 text-white p-3" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full bg-black border border-gray-800 text-white p-3"></textarea>
              </div>
              <button type="submit" className="bg-primary-red text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}