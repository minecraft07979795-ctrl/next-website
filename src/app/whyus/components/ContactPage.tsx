// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useContact } from '../../components/ContactContext';
// import emailjs from "emailjs-com";


// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const { contactRef } = useContact();
  

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

 


//   const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!formData.name || !formData.email || !formData.message) {
//     alert("Please fill all fields");
//     return;
//   }

//   emailjs
//     .send(
//       "service_1m4m7ep",
//       "template_zsadldb",
//       {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//       },
//       "Na1U6IjxXgt8zzexd"
//     )
//     .then(
//       () => {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//       },
//       (err) => {
//         alert("Failed to send message. " + err.text);
//       }
//     );
// };

//   return (
//     <div ref={contactRef} className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
//       <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
//         {/* Left Side - Form */}
//         <div>
//           <h2 className="text-3xl font-bold text-[#1A3A3A]">Get In Touch</h2>
//           <p className="mt-3 text-gray-600">
//             We&apos;re here to help you elevate your business. Reach out to us for
//             expert guidance, tailored solutions, or any questions you may have.
//           </p>

//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-[#1A3A3A]">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//                 className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-[#1A3A3A]">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="e.g johndoe@gmail.com"
//                 className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-[#1A3A3A]">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Tell us about your project or inquiry..."
//                 className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full rounded-md bg-green-900 text-white py-2 font-medium hover:bg-green-800 transition"
//             >
//               Submit
//             </button>
//           </form>

//           {submitted && (
//             <p className="mt-4 text-green-700 font-medium">
//               ✅ Thank you! Your message has been submitted.
//             </p>
//           )}
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex justify-center items-center">
//           <Image
//             width={600}
//             height={600}
//             src="/hand.png" // 👉 save your uploaded image in public/ as contact-image.png
//             alt="Contact"
//             className="rounded-xl shadow-lg w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";
import Image from "next/image";
import { useState } from "react";
import { useContact } from '../../components/ContactContext';
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const { contactRef } = useContact();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill all fields (Name, Company, Phone, Email, Message).");
      return;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number (7–15 digits).");
      return;
    }

    emailjs
      .send(
        "service_1m4m7ep", // your service ID
        "template_zsadldb", // your template ID
        {
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "Na1U6IjxXgt8zzexd" // your public key
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: "", company: "", phone: "", email: "", message: "" });
        },
        (err) => {
          alert("Failed to send message. " + err.text);
        }
      );
  };

  return (
    <div ref={contactRef} className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#1A3A3A]">Get In Touch</h2>
          <p className="mt-3 text-gray-600">
            We&apos;re here to help you elevate your business. Reach out to us for
            expert guidance, tailored solutions, or any questions you may have.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +911234567890"
                className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
                required
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
                className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project or inquiry..."
                className="mt-1 w-full text-[#1A3A3A] rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-900 text-white py-2 font-medium hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-green-700 font-medium">
              ✅ Thank you! Your message has been submitted.
            </p>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <Image
            width={600}
            height={600}
            src="/hand.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
