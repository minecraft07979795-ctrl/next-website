// app/components/ComplianceCards.tsx

"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cards = [

  {
    title: "CBAM & Carbon Tax",
    subtitle: "Powered by CarbonScan.ai",
    image: "/cbamcardk.png",
    link: "/Regulations/CBAM",
  },
  {
    title: "RSPO",
    subtitle: "Powered by CarbonScan.ai",
    image: "/rspocard.png",
    link: "/Regulations/RSPO",
  },
    {
    title: "Halal Certification",
    subtitle: "Powered by CarbonScan.ai",
    image: "/halalcert.png", // 👈 put image in /public
    link: "/Regulations/Halal",
  },
];

export default  function ComplianceCards(){
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Start preparing for the future of{" "}
          <span className="text-[#8DD95B]">Compliances & regulations</span>{" "}
          today.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>

              {/* Button */}
              <div className="mt-auto pt-4">
                <Link href={card.link} passHref>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#8DD95B] hover:bg-[#8dd95bc6] text-white font-medium rounded-lg py-2 transition">
                    Read More <ArrowRight size={16} />
                  </button>
                </Link>
                {/* <button className="w-full flex items-center justify-center gap-2 bg-[#8DD95B] hover:bg-[#8dd95bdc] text-white font-medium rounded-lg py-2 transition">
                  Read More <ArrowRight size={16} />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

