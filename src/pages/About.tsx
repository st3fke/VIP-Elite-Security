import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
export function About() {
  return <div className="w-full min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            About <span className="text-primary-red">Us</span>
          </h1>
          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-16">
            VIP Elite Security provides premium protection services with the
            highest standards of professionalism and discretion
          </p>
          {/* About content would go here */}
          <div className="text-gray-400">
            <p className="mb-6">
              Founded in 2008, VIP Elite Security has established itself as a
              premier provider of executive protection and security services
              worldwide. Our team consists of highly trained professionals with
              extensive backgrounds in military special forces, law enforcement,
              and intelligence services.
            </p>
            <p className="mb-6">
              We operate with absolute discretion and professionalism, ensuring
              our clients receive the highest level of protection while
              maintaining their privacy and normal lifestyle.
            </p>
            <p className="mb-6">
              Our mission is to provide peace of mind through expertly crafted
              security solutions that are tailored to each client's specific
              needs and circumstances.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}