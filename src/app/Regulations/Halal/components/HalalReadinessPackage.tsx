import React from 'react';
import { FileText, MapPin, GraduationCap } from 'lucide-react';

export default function HalalReadinessPackage(){
  return (
    <div className="h-[70vh] bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
          {/* Leaf Icon */}
          

          {/* Title */}
          <h1 className="text-4xl md:text-[50px] font-bold text-slate-700 leading-tight mb-8   w-[110%]">
             Halal Certification doesn’t have to be difficult.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get audit-ready in just 3 months with Carbon-Zero.ai’s Halal Readiness Package, including:
          </p>
        </div>

        {/* Package Items */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Compliance Readiness Report */}
          <div className="text-center bg-[#F9FAFB] p-5 rounded-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#8DD95B] rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-normal text-gray-600 mb-4 flex items-center justify-center">
              <span className="mr-2 text-[20px]">📋</span>
              Readiness Report
            </h3>
            <p className="text-gray-600 text-[16px]">
             Assess how your business aligns with Halal standards.
            </p>
          </div>

          {/* Traceability Gap Analysis */}
          <div className="text-center bg-[#F9FAFB] p-5 rounded-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#8DD95B] rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-normal text-gray-600 mb-4 flex items-center justify-center">
              <span className="mr-2 text-[20px]">📍</span>
              Gap Analysis
            </h3>
            <p className="text-gray-600 text-[16px]">
              Identify missing documentation and compliance gaps.
            </p>
          </div>

          {/* Knowledge Base & Training */}
          <div className="text-center bg-[#F9FAFB] p-5 rounded-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#8DD95B] rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-normal text-gray-600 mb-4 flex items-center justify-center">
              <span className="mr-2 text-[20px]">🎓</span>
              Knowledge Base 
            </h3>
            <p className="text-gray-600 text-[16px]">
              Access best practices, templates, and training for Halal compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
