"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function CarbonMilestonePlatform(){
  const [activeSection, setActiveSection] = useState('accounting');

  const sections = [
    {
      id: 'accounting',
      title: 'Smarter Carbon Accounting',
      description: 'Track Scope 1, 2 & 3 emissions with precision. Get real-time dashboards and automated reports for seamless compliance.',
      buttonText: 'Calculate Impact',
      image: '/smart.png',
      imageAlt: 'Carbon accounting dashboard showing emissions data and analytics',
 
    },
    {
      id: 'training',
      title: 'Carbon Training, Simplified',
      description: 'Upskill teams with practical, AI-assisted carbon literacy programs — turning awareness into action.',
      buttonText: 'Learn More',
      image: '/training.png',
      imageAlt: 'Professional training session in modern office with sustainability focus',
 
    },
    {
      id: 'audits',
      title: 'Energy Audits that Deliver',
      description: 'Identify inefficiencies, optimize usage, and cut costs with data-driven energy performance insights.',
      buttonText: 'Learn More',
      image: '/trachanges.png',
      imageAlt: 'Energy audit dashboard showing performance metrics and cost savings',
 
    }
  ];

  const activeData = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Powering every milestone on your path to<br />
            a low-carbon future
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Accordion */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                {/* Header */}
                <button
                  onClick={() => {
                    // Ensure at least one section is always open
                    if (activeSection !== section.id) {
                      setActiveSection(section.id);
                    }
                  }}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {activeSection === section.id ? (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-gray-600 rounded"></div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-4 h-0.5 bg-gray-600 rounded"></div>
                          <div className="w-4 h-0.5 bg-gray-600 rounded absolute top-0 rotate-90"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
                
                {/* Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {section.description}
                    </p>
                    <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-sm">
                      {section.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white overflow-hidden relative group">
                {/* Image with smooth transition */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden">
                  <Image
                    width={600}
                    height={400}
                    // key={activeData?.id}  
                    // src={activeData?.image}
                    // alt={activeData?.imageAlt}
                    key={activeData?.id ?? "default"}
                    src={activeData?.image ?? "/fallback.png"}  // fallback image
                    alt={activeData?.imageAlt ?? "Default alt text"}
                    className="w-full h-full object-contain transition-all duration-700 ease-in-out transform group-hover:scale-105"
                  />
                  
        
                </div>
                
                {/* Loading Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

 
            </div>
          </div>
        </div>

 
      </div>
    </div>
  );
};
