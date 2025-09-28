"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function CarbonMilestonePlatform2(){
  const [activeSection, setActiveSection] = useState('accounting');

  const sections = [
    {
      id: 'accounting',
      title: 'Beyond Carbon: LCA Made Easy',
      description: 'Assess your product’s full life cycle impact with AI-driven precision, from raw materials to end-of-life.',
      buttonText: 'Learn More',
      image: '/lcaeasy.png',
      imageAlt: 'Carbon showing emissions data and analytics',
    },
    {
      id: 'training',
      title: 'BURSA & Carbon Compliance',
      description: 'Generate ESG reports aligned with BURSA and GHG Protocols — automated, accurate, and ready in days.',
      buttonText: 'Learn More',
      image: '/gEsg.png',
      imageAlt: 'Professional sustainability focus',
    },
    {
      id: 'audits',
      title: 'Capture Carbon, Earn Revenue',
      description: 'Monitor, report, and monetize carbon captured through CCU units with integrated carbon credit generation.',
      buttonText: 'Learn More',
      image: '/co2.png',
      imageAlt: 'Energy audit',
    }
  ];

  const activeData = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
       

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Dynamic Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className=" overflow-hidden relative group">
                {/* Image with smooth transition */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden">
                  <Image
                    width={600}
                    height={400}
                    key={activeData?.id ?? "default"}
                    src={activeData?.image ?? "/fallback.png"}
                    alt={activeData?.imageAlt ?? "Default alt text"}
                    className="w-full h-full object-contain transition-all duration-700 ease-in-out transform group-hover:scale-105"
                  />
                </div>
                
                {/* Loading Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                {/* Header */}
                <button
                  onClick={() => {
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

        </div>
      </div>
    </div>
  );
}
