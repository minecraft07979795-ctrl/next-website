"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


export default function FlowModel() {
    const { scrollToContact } = useContact();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
            <p className="mt-4 text-[#8DD95B] text-lg leading-relaxed">
                FLOW-MODEL
            </p>
          <h2 className="text-3xl md:text-[48px] font-bold text-[#1A3A3A] leading-snug">
            Design, adapt, and enhance models step by step
          </h2>
          <p className="mt-4 text-[#1A3A3A] text-lg leading-relaxed">
            Easily build and fine-tune models using flexible process blocks and an intuitive flow interface. Connect elements, add or remove stages, and continuously refine complex systems to boost both precision and efficiency.
          </p>
          <br/>
        <div className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            // onClick={() => setShowTrial(true)}
            onClick={scrollToContact} 
            className="px-6 py-3 rounded-full bg-[#8DD95B] hover:bg-[#8dd95bdc] text-white font-semibold transition"
          >
            Book a demo
          </button>
 
        </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/flowmodel.png" // save your uploaded screenshot here in /public
            alt="Drive Energy Efficiency Dashboard"
            width={600}
            height={400}
            className=" w-[90%] h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
