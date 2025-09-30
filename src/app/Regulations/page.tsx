"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegulationsPage() {
  const regulationsTop = [
    { image: "/eudrcards.png", title: "EUDR", link: "/Regulations/EUDR" },
    { image: "/bursacards.png", title: "Bursa", link: "/Regulations/BURSA" },
    { image: "/ESGcardni.png", title: "CBAM", link: "/Regulations/CBAM" },
  ];

  const regulationsBottom = [
    { image: "/gsxcard.png", title: "SGX", link: "/Regulations/SGX" },
    // { image: "/mspocard.png", title: "MSPO", link: "/regulations/mspo" },
    { image: "/rspocardsni.png", title: "RSPO", link: "/Regulations/RSPO" },
    { image: "/ghgcardcsa.png", title: "GHG", link: "/Regulations/GHG" },
    { image: "/tcfdcards.png", title: "TCFD", link: "/Regulations/TCFD" },
    {
      image: "/halalcards.png",
      title: "Halal Certification",
      link: "/Regulations/Halal",
    },
  ];

  const stories = [
    {
      image: "/cock.png",
      title:
        "Achieving CBAM Compliance: Lessons from a Mid-Sized Steel Fabricator Entering the EU Market",
      category: "Brewing",
      link: "/Regulations",
    },
    {
      image: "/bottle.png",
      title:
        "Integrating IoT for Real-Time Cold-Chain Traceability and Lowering Food Waste by 20%",
      category: "Beverages",
      link: "/Regulations",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-white">
  <div className="max-w-7xl mx-auto px-4 py-10">
    {/* Header Row */}
    <div className="flex justify-between items-start mb-4">
      <h1 className="text-[14px] font-bold text-[#1A3A3A] ml-2">
        Regulations
      </h1>
      <h2 className="text-[14px] font-bold text-[#1A3A3A] mr-84">
        CUSTOMER STORIES
      </h2>
    </div>

    {/* Row 1: 3 Cards + Customer Stories */}
    <div className="grid lg:grid-cols-5 gap-6 items-start">
      {/* First 3 cards */}
      <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {regulationsTop.map((reg, idx) => (
          <Link
            key={idx}
            href={reg.link}
            className="overflow-hidden cursor-pointer transition h-full flex flex-col"
          >
            <div className="relative w-full h-40 md:h-52 lg:h-60">
              <Image
                src={reg.image}
                alt={reg.title}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Customer Stories */}
      <div className="lg:col-span-2 flex flex-col">
        <div className="space-y-4">
          {stories.map((story, idx) => (
            <Link
              key={idx}
              href={story.link}
              className="flex items-center p-3 gap-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={story.image}
                  alt={story.category}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-blue-600 font-semibold uppercase mb-1">
                  {story.category}
                </p>
                <h3 className="text-xs text-gray-800 font-medium line-clamp-2">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
          <Link
            href="/stories"
            className="block text-blue-600 font-semibold text-sm hover:underline"
          >
            See all customer stories →
          </Link>
        </div>
      </div>
    </div>

    {/* Row 2: 5 Cards full width */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
      {regulationsBottom.map((reg, idx) => (
        <Link
          key={idx}
          href={reg.link}
          className="transition h-full flex flex-col cursor-pointer"
        >
          <div className="relative w-full h-40 md:h-48 lg:h-60">
            <Image
              src={reg.image}
              alt={reg.title}
              fill
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

  );
}
 