"use client"

import Image from "next/image";

const industries = [
  {
    title: "Packed Food",
    subtitle: "RePut.ai for",
    image: "/chips.png", // your image path
    icon: "/icon-food.png", // your icon path
  },
  {
    title: "Personal care",
    subtitle: "RePut.ai for",
    image: "/beauty.png",
    icon: "/icon-care.png",
  },
  {
    title: "Steel",
    subtitle: "RePut.ai for",
    image: "/steel2.png",
    icon: "/icon-steel.png",
  },
];

export default function IndustrySectionCarbon() {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
          Start preparing for the future <br /> of traceability today.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="text-center">
              {/* Image Card */}
              {/* <div
                className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_#00ff9d]"
              > */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64  "
                />
                {/* White Diagonal Corner */}
                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-white clip-corner">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={28}
                    height={28}
                    className="absolute top-3 right-3"
                  />
                </div> */}
              {/* </div> */}

              {/* Text */}
              <div className="text-start ml-5">
              <p className=" mt-4 text-black">{item.subtitle}</p>
              <h3 className="text-2xl font-bold text-black">{item.title}</h3>
              

              {/* Button */}
              <button className="mt-4 relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                <span className="flex gap-2">
                  Read More →
                </span>
                {/* Small corner accent */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom clip-path for diagonal corner */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  );
}
