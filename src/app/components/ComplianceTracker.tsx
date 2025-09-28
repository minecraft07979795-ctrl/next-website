"use client";
import Image from "next/image";
import { useState } from "react";
// import { useContact } from "../components/ContactContext";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ComplianceTracker() {
  // const { scrollToContact } = useContact();
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email and Phone Number.");
      return;
    }

    emailjs
      .send(
        "service_1m4m7ep", // replace with your EmailJS service ID
        "template_zsadldb", // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        },
        "Na1U6IjxXgt8zzexd" // replace with your EmailJS public key
      )
      .then(
        () => {
          setShowForm(false);
          setFormData({ name: "", email: "", company: "", phone: "", message: "" });
          router.push("/Regulations"); // redirect after submit
        },
        (err) => {
          alert("Failed to send message. " + err.text);
        }
      );
  };

  return (
    <section className="w-full bg-[#0f2d2a] py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold text-white leading-snug mb-4">
            Want to know more on <span className="text-[#8DD95B]">BURSA</span> or{" "}
            <span className="text-[#8DD95B]">SGX</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-6 md:text-[20px]">
            Check your compliance readiness in seconds.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-[#8DD95B] text-[#0f2d2a] font-semibold rounded-full shadow-md hover:bg-[#8dd95bd2] transition"
          >
            Explore the Compliance Tracker
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center">
          <Image
            src="/cptracker.png"
            alt="Compliance Tracker"
            width={500}
            height={400}
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl md:text-2xl font-bold text-[#1A3A3A] mb-4 text-center">
                Compliance Tracker Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A3A3A]">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-[#1A3A3A] focus:border-green-600 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A3A3A]">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g johndoe@gmail.com"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-[#1A3A3A] focus:border-green-600 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A3A3A]">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-[#1A3A3A] focus:border-green-600 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A3A3A]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-[#1A3A3A] focus:border-green-600 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A3A3A]">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your inquiry..."
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-[#1A3A3A] focus:border-green-600 focus:ring-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-900 text-white py-2 rounded-md font-medium hover:bg-green-800 transition"
                >
                  OK
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}















// "use client";
// import Image from "next/image";
// import { useContact } from "../components/ContactContext"; 


// export default function ComplianceTracker() {
//     const { scrollToContact } = useContact();
  
//   return (
//     <section className="w-full bg-[#0f2d2a] py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl md:text-[48px] font-semibold text-white leading-snug mb-4">
//             Want to know more on <span className="text-[#8DD95B]">BURSA</span> or <span className="text-[#8DD95B]">SGX</span>?
//           </h2>
//           <p className="text-gray-300 text-lg mb-6 text-[20px]">
//             Check your compliance readiness in seconds.
//           </p>
//           <button onClick={scrollToContact} className="px-6 py-3 bg-[#8DD95B] text-[#0f2d2a] font-semibold rounded-full shadow-md hover:bg-[#8dd95bd2] transition">
//             Explore the Compliance Tracker
//           </button>
//         </div>

//         {/* Right Content - Single Image */}
//         <div className="flex justify-center">
//           <Image
//             src="/cptracker.png"  
//             alt="Compliance Tracker"
//             width={500}
//             height={400}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
