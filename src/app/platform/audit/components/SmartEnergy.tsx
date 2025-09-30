// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SmartEnergy() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[50px] font-bold text-[#1A3A3A] leading-snug">
            Robust Energy Reporting
          </h2>
          <p className="mt-4 text-[#1A3A3A] text-[20px] font-medium text-lg leading-relaxed">
            Generate automated, data-rich reports that not only capture key performance metrics but also provide real-time visibility into your organization’s energy landscape. Access interactive views, detailed charts, and customized graphs to analyze cost trends, consumption patterns, carbon emissions, billing details, and ROI projections—empowering you to make informed, sustainability-driven decisions with confidence.
          </p>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/smartEnergy.png" // save your uploaded screenshot here in /public
            alt="Drive Energy Efficiency Dashboard"
            width={600}
            height={400}
            className=" w-[80%] h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
