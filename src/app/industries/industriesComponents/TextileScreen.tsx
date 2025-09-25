// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function TextileScreen() {
//   return (
//     <section className="relative w-full h-[90vh]">
//       {/* Background Image */}
//       <Image
//         src="/Wireframe.png" // replace with your hero image path
//         alt="Hero Banner"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-none"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex items-center px-10 md:px-20">
//         <motion.div
//           className="  text-white p-1 rounded-xl max-w-lg"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-[56px] md:text-6xl font-bold mb-4">
//             RePut.ai For <span className="text-white">Textile Products</span>
//           </h1>
//           <p className="mb-6 text-[22px] w-[607px] text-gray-200">
//             Empower your textile business with end-to-end product traceability
//             and sustainability reporting.
//           </p>
//           {/* <motion.button
//             className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Case Study →
//           </motion.button> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TextileScreen() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/Wireframe.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20">
        <motion.div
          className="text-white p-1 rounded-xl max-w-full md:max-w-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            RePut.ai For <span className="text-white">Textile Products</span>
          </h1>

          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-200 max-w-full md:max-w-[607px]">
            Empower your textile business with end-to-end product traceability
            and sustainability reporting.
          </p>

          {/* Button (optional) */}
          {/* <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Case Study →
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
