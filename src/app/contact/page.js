// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_a3mp2ea", // 🔹 Replace with your EmailJS Service ID
//         "template_jy7w6l4", // 🔹 Replace with your EmailJS Template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "_BYkbpYI7CCjJMFx8" // 🔹 Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setStatus("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("Email send failed:", error);
//           setStatus("❌ Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <section className="relative max-w-6xl mx-auto py-24 px-6 min-h-screen flex flex-col justify-center items-center text-gray-100 overflow-hidden">
//       {/* Background Gradient Glow */}
//       <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] -z-20"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_60%)] -z-10"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_60%)] -z-10"></div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-6xl text-center font-extrabold mb-8 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg"
//       >
//         CONTACT ME
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 1 }}
//         className="text-lg text-gray-300 max-w-3xl text-center mb-16"
//       >
//         Have a project, idea, or question? Let’s connect! You can reach out via
//         the platforms below or send me a message directly.
//       </motion.p>

//       {/* Main Card */}
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 bg-[#0B1120]/80 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-gray-700/50 p-8">
//         {/* Left Side: Info + Socials */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="flex flex-col items-start gap-6 flex-1"
//         >
//           <div className="flex flex-col gap-4 text-gray-200">
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdLocationOn className="text-2xl" />
//               <span>Bardaghat, Nepal</span>
//             </div>
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdEmail className="text-2xl" />
//               <span>ankitgyanwali001@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdPhone className="text-2xl" />
//               <span>+977-9742913201</span>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6 mt-6">
//             <motion.a
//               href="https://github.com/ankit07721"
//               target="_blank"
//               whileHover={{ scale: 1.2 }}
//               className="text-gray-300 hover:text-cyan-400 text-3xl transition duration-300"
//             >
//               <FaGithub />
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/ankit-gyanwali-4949a3284/"
//               target="_blank"
//               whileHover={{ scale: 1.2 }}
//               className="text-gray-300 hover:text-blue-500 text-3xl transition duration-300"
//             >
//               <FaLinkedin />
//             </motion.a>
//             <motion.a
//               href="https://www.instagram.com/ankit07721/"
//               target="_blank"
//               whileHover={{ scale: 1.2 }}
//               className="text-gray-300 hover:text-pink-500 text-3xl transition duration-300"
//             >
//               <FaInstagram />
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Right Side: Contact Form */}
//         <motion.form
//           onSubmit={sendEmail}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="flex-1 flex flex-col gap-6 w-full max-w-lg"
//         >
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition resize-none h-32"
//           ></textarea>
//           <motion.button
//             type="submit"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 30px rgba(56,189,248,0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition duration-300"
//           >
//             Send Message
//           </motion.button>
//           {status && (
//             <p className="text-center text-sm mt-4 text-cyan-400">{status}</p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

// export default function Contact() {
//   const [mounted, setMounted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "service_a3mp2ea",
//         "template_jy7w6l4",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "_BYkbpYI7CCjJMFx8"
//       )
//       .then(
//         () => {
//           setStatus("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("Email send failed:", error);
//           setStatus("❌ Failed to send message. Try again later.");
//         }
//       );
//   };

//   if (!mounted) return null; // prevent SSR mismatch

//   return (
//     <section className="relative max-w-6xl mx-auto py-24 px-6 min-h-screen flex flex-col justify-center items-center text-gray-100 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_60%)] -z-10"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_60%)] -z-10"></div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-6xl text-center font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg"
//       >
//         CONTACT ME
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 1 }}
//         className="text-lg text-gray-300 max-w-3xl text-center mb-16"
//       >
//         Have a project, idea, or question? Let’s connect! You can reach out via
//         the platforms below or send me a message directly.
//       </motion.p>

//       <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 bg-[#0B1120]/80 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-gray-700/50 p-8">
//         {/* Left: Info + Socials */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="flex flex-col items-start gap-6 flex-1"
//         >
//           <div className="flex flex-col gap-4 text-gray-200">
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdLocationOn className="text-2xl" />
//               <span>Bardaghat, Nepal</span>
//             </div>
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdEmail className="text-2xl" />
//               <span>ankitgyanwali001@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
//               <MdPhone className="text-2xl" />
//               <span>+977-9742913201</span>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6 mt-6">
//             {[
//               {
//                 icon: <FaGithub />,
//                 link: "https://github.com/ankit07721",
//                 color: "hover:text-cyan-400",
//               },
//               {
//                 icon: <FaLinkedin />,
//                 link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
//                 color: "hover:text-blue-500",
//               },
//               {
//                 icon: <FaInstagram />,
//                 link: "https://www.instagram.com/ankit07721/",
//                 color: "hover:text-pink-500",
//               },
//             ].map((item, idx) => (
//               <motion.a
//                 key={idx}
//                 href={item.link}
//                 target="_blank"
//                 whileHover={{ scale: 1.2 }}
//                 className={`text-gray-300 text-3xl transition duration-300 ${item.color}`}
//               >
//                 {item.icon}
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right: Form */}
//         <motion.form
//           onSubmit={sendEmail}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="flex-1 flex flex-col gap-6 w-full max-w-lg"
//         >
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             required
//             className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition resize-none h-32"
//           ></textarea>
//           <motion.button
//             type="submit"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 30px rgba(56,189,248,0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition duration-300"
//           >
//             Send Message
//           </motion.button>
//           {status && (
//             <p className="text-center text-sm mt-4 text-cyan-400">{status}</p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a3mp2ea",
        "template_jy7w6l4",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "_BYkbpYI7CCjJMFx8"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email send failed:", error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6 min-h-screen flex flex-col justify-center items-center text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_60%)] -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_60%)] -z-10"></div>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl text-center font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
        CONTACT ME
      </h2>

      <p className="text-lg text-gray-300 max-w-3xl text-center mb-16">
        Have a project, idea, or question? Let’s connect! You can reach out via
        the platforms below or send me a message directly.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 bg-[#0B1120]/80 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-gray-700/50 p-8">
        {/* Left: Info + Socials */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col gap-4 text-gray-200">
            <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
              <MdLocationOn className="text-2xl" />
              <span>Bardaghat, Nepal</span>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
              <MdEmail className="text-2xl" />
              <span>ankitgyanwali001@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-400 transition duration-300">
              <MdPhone className="text-2xl" />
              <span>+977-9742913201</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/ankit07721",
                color: "hover:text-cyan-400",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
                color: "hover:text-blue-500",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/ankit07721/",
                color: "hover:text-pink-500",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                className={`text-gray-300 text-3xl transition duration-300 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-6 w-full max-w-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none text-gray-200 py-2 px-1 placeholder-gray-400 transition resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition duration-300"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-sm mt-4 text-cyan-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
