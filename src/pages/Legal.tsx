import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
export function Legal() {
  return <div className="w-full min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Legal <span className="text-primary-red">Information</span>
          </h1>
          <div className="text-gray-400 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Privacy Policy
            </h2>
            <p className="mb-6">
              VIP Elite Security is committed to protecting the privacy and
              security of our clients. This privacy policy outlines how we
              collect, use, and safeguard your personal information.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4 mt-12">
              Terms of Service
            </h2>
            <p className="mb-6">
              By engaging our services, you agree to the following terms and
              conditions that govern our relationship and the provision of
              security services.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4 mt-12">
              Disclaimer
            </h2>
            <p className="mb-6">
              While VIP Elite Security strives to provide the highest level of
              protection, we cannot guarantee complete immunity from all
              security threats. Our services are designed to significantly
              reduce risks and provide rapid response to security incidents.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4 mt-12">
              Licensing
            </h2>
            <p className="mb-6">
              VIP Elite Security and all its operatives are fully licensed and
              insured in accordance with local and international regulations
              governing private security services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}