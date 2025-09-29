"use client";

export default function RegulationPurpose() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Regulation <span className="text-[#8DD95B]">Purpose</span>
      </h2>

      {/* First Paragraph */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
        The<span className="text-[#8DD95B] font-medium">
          SGX Sustainability Reporting Framework
        </span>{" "}
         is a globally aligned standard that ensures listed companies disclose material 
        <span className="text-[#8DD95B] font-medium">
         {" "}  ESG factors, manage climate-related risks, and uphold transparent governance.
        </span>{" "}
      
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For businesses,  {" "}
        <span className="text-[#8DD95B] font-medium">
          SGX
        </span>
        compliance is critical to meeting investor{" "}
        <span className="text-[#8DD95B] font-medium">
          expectations, strengthening market confidence, and securing long-term competitiveness 
        </span>{" "}
         in a world where sustainable performance drives capital flows.
      </p>
    </section>
  );
}
