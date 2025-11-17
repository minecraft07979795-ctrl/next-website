"use client";

import { useRouter } from "next/navigation";

const knowledgeHub = [
  {
    title: "Blog",
    desc: "Insights on sustainability trends and practices.",
    img: "/amico.png", // replace with your image path
    link: "/resources/blogs",
  },
  {
    title: "News letter",
    desc: "Real examples of impact and results.",
    img: "/bro.png",
    link: "/resources/newsletter",
  },
];

const events = [
  {
    title: "From hops to hotspots:",
    desc: "Hop Nation’s first step toward decarbonisation",
    img: "/hops.png",
    link: "",
  },
  {
    title: "Unboxing EPR & PPWR:",
    desc: "The Climate Implications of Packaging Regulation",
    img: "/recy.png", // replace with your image path
    link: "",
  },
];

export default function Resources() {
  const router = useRouter();

  return (
    <section className="w-full  px-6 md:px-22 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFFFF]">
      {/* Knowledge Hub */}
      <div>
        <h2 className="text-sm font-semibold tracking-wide text-gray-600 mb-4">
          KNOWLEDGE HUB
        </h2>
        <div className="flex flex-col gap-6">
          {knowledgeHub.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.link)}
              className="flex items-center gap-6 p-1 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#1A3A3A] text-[20px]">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div>
        <h2 className="text-sm font-semibold tracking-wide text-gray-600 mb-4">
          EVENTS
        </h2>
        <div className="flex flex-col gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              onClick={() => router.push(event.link)}
              className="flex gap-4 cursor-pointer hover:opacity-80 transition"
            >
              {event.img && (
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-50 h-35 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="font-semibold text-[#1A3A3A] text-[20px]">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => router.push("/resources")}
            className="text-green-700 font-medium hover:underline text-sm"
          >
            See all Events &gt;
          </button>
        </div>
      </div>
    </section>
  );
}












// "use client"



// export default function Resources(){
//     return(
//     <div>
//       <h1>Resources</h1>
//       <p>This is the Resources page.</p>
//     </div>
//     );
// } 