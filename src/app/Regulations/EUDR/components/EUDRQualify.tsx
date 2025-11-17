// app/components/EUDRQualify.tsx

"use client";

import React from "react";
import Image from "next/image";

 

export default function EUDRQualify(){

  return (
   


         <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left small card (image) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/smalllcard.png" // 👈 place your small card image in /public
            alt="CarbonScan card"
            width={800}
            height={800}
            className="w-full max-w-[570px]"
          />
        </div>

        {/* <div className="relative flex justify-center md:justify-start">
          <Image
            src="/largecard.png"  
            alt="Does my business qualify card"
            width={700}
            height={700}
            className=" w-full"
          />

          <div className="absolute bottom-10 left-0 right-[40%] flex justify-center">
            <button className="bg-[#8DD95B] hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-2 shadow-md transition">
              Know more →
            </button>
          </div>
        </div> */}


  

 
    <div className="w-[600px] h-[547px] overflow-y-auto mx-auto bg-white rounded-3xl shadow-lg p-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {/* Header with leaf icon */}
      <div className="flex items-center gap-3 mb-6">
        🌿
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Does My Business Qualify Under EUDR?
        </h2>
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-6 leading-relaxed">
        EUDR applies to specific forest-risk commodities and their derived products. These include:
      </p>

      {/* List of commodities */}
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Palm oil and derived products</span>
        </li>
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Rubber (natural rubber and finished goods)</span>
        </li>
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Cocoa and chocolate-based products</span>
        </li>
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Coffee</span>
        </li>
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Cattle (beef & leather)</span>
        </li>
        <li className="flex items-start gap-2 text-slate-700">
          <span className="text-green-600 mt-1">•</span>
          <span>Timber & wood products (including paper, furniture, plywood, etc.)</span>
        </li>
      </ul>

      {/* Conditions text */}
      <p className="text-slate-600 mb-4 leading-relaxed">
        If your goods fall under these categories when exported to the EU, you must ensure that they are:
      </p>

      {/* Numbered requirements */}
      <ol className="space-y-3 mb-6 ml-2">
        <li className="flex items-start gap-3 text-slate-700">
          <span className="font-semibold">1.</span>
          <span>Deforestation-free (no land cleared after 31 December 2020)</span>
        </li>
        <li className="flex items-start gap-3 text-slate-700">
          <span className="font-semibold">2.</span>
          <span>Legally produced according to the laws of Malaysia</span>
        </li>
        <li className="flex items-start gap-3 text-slate-700">
          <span className="font-semibold">3.</span>
          <span>Traceable with geolocation data provided down to the plantation or plot level</span>
        </li>
      </ol>

      {/* Footer text */}
      <p className="text-slate-600 mb-8 leading-relaxed">
        Exporters will also be required to submit due diligence statements and maintain records for at least five years. Ensuring supply chain transparency is the most important step to compliance.
      </p>

      {/* Button */}
      <button className="bg-[#8DD95B] hover:bg-green-600 text-white font-medium rounded-full px-8 py-3 shadow-md transition-colors duration-200 flex items-center gap-2">
        Know more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

 


      </div>
    </section>
  );
};

