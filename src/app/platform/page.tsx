"use client"



 
import React from "react";
 
 





import Image from "next/image";
import Link from "next/link";

export default function PlatformPage() {
  const regulationsTop = [
    { image: "/carbonfootprint.png", title: "carbonfootprint", link: "/platform/corporateCarbon" },
    { image: "/productcarbonfootprnit.png", title: "productcarbonfootprnit", link: "/platform/lca" },
    { image: "/esgdisclosure.png", title: "esgdisclosure", link: "/platform/esg&carbonreporting" },
  ]; 

  const regulationsBottom = [
    { image: "/carboncapturingunit.png", title: "carboncapturingunit", link: "/platform/carboncapturingunit" },
    // { image: "/mspocard.png", title: "MSPO", link: "/regulations/mspo" },
    { image: "/carboncredit.png", title: "carboncredit", link: "/platform/carbonCredit" },
    { image: "/carbonTraining.png", title: "carbonTraining", link: "/education" },
    { image: "/energyAudits.png", title: "energyAudits", link: "/platform/audit" },
    {
      image: "/compliance.png",
      title: "compliance",
      link: "/platform/compliance",
    },
  ];

 const stories = [
    {
      image: "/cock.png",
      title:
        "Achieving CBAM Compliance: Lessons from a Mid-Sized Steel Fabricator Entering the EU Market",
      category: "Brewing",
      link: "/platform",
    },
    {
      image: "/bottle.png",
      title:
        "Integrating IoT for Real-Time Cold-Chain Traceability and Lowering Food Waste by 20%",
      category: "Beverages",
      link: "/platform",
    },
  ];

  return (
    <div className="min-h-[50vh] bg-white">
  <div className="max-w-7xl mx-auto px-4 py-10">
    {/* Shared Header Row */}
    <div className="flex justify-between items-start mb-4">
      <h1 className="text-[14px] md:text-[14px] font-bold text-[#1A3A3A]">
        Platform
      </h1>
      <h2 className="text-[14px] font-bold text-[#1A3A3A] mr-84">
        CUSTOMER STORIES
      </h2>
    </div>

    {/* Row 1: 3 Cards + Customer Stories */}
    <div className="grid lg:grid-cols-5 gap-6 items-start">

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



