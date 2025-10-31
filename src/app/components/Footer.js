// export default function Footer() {
//   return (
//     <footer className="text-center py-6 text-gray-400 bg-black/20 mt-10">
//       © {new Date().getFullYear()} Ankit Gyanwali. All Rights Reserved.
//     </footer>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [year, setYear] = useState(null);

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);
//   return (
//     <footer className="relative overflow-hidden mt-20">
//       {/* Background gradient + subtle glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_70%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_70%)]"></div>

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="relative z-10 text-center py-12 px-6 flex flex-col items-center justify-center text-gray-300"
//       >
//         {/* Floating Glow Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "80%" }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//           className="h-[2px] mb-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)]"
//         ></motion.div>

//         {/* Logo or Name */}
//         <motion.h3
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4"
//         >
//           Ankit Gyanwali
//         </motion.h3>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-sm md:text-base text-gray-400 mb-6"
//         >
//           Designed & Developed by{" "}
//           <span className="text-cyan-400 font-medium">Ankit Gyanwali</span>
//         </motion.p>

//         {/* Social Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="flex gap-6 text-2xl mb-8"
//         >
//           <motion.a
//             href="https://github.com/ankit07721"
//             target="_blank"
//             whileHover={{ scale: 1.3, rotate: 10 }}
//             className="text-gray-400 hover:text-cyan-400 transition duration-300"
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a
//             href="https://www.linkedin.com/in/ankit-gyanwali-4949a3284//"
//             target="_blank"
//             whileHover={{ scale: 1.3, rotate: -10 }}
//             className="text-gray-400 hover:text-blue-500 transition duration-300"
//           >
//             <FaLinkedin />
//           </motion.a>
//           <motion.a
//             href="https://www.instagram.com/ankit07721/"
//             target="_blank"
//             whileHover={{ scale: 1.3, rotate: 10 }}
//             className="text-gray-400 hover:text-pink-500 transition duration-300"
//           >
//             <FaInstagram />
//           </motion.a>
//           <motion.a
//             href="https://www.facebook.com/ankit.gyanwali.3"
//             target="_blank"
//             whileHover={{ scale: 1.3, rotate: -10 }}
//             className="text-gray-400 hover:text-blue-500 transition duration-300"
//           >
//             <FaFacebook />
//           </motion.a>
//         </motion.div>

//         {/* Copyright */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 1 }}
//           className="text-xs md:text-sm text-gray-500"
//         >
//           {/* © {new Date().getFullYear()} Ankit Gyanwali. All Rights Reserved. */}
//           © {year ?? "...."} Ankit Gyanwali. All Rights Reserved.
//         </motion.p>
//       </motion.div>

//       {/* Bottom Neon Glow Border */}
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         transition={{ duration: 1.5 }}
//         className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]"
//       ></motion.div>
//     </footer>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [mounted, setMounted] = useState(false);
//   const [year, setYear] = useState(null);

//   useEffect(() => {
//     setMounted(true);
//     setYear(new Date().getFullYear());
//   }, []);

//   if (!mounted) return null; // Prevent SSR mismatch

//   return (
//     <footer className="relative overflow-hidden mt-20">
//       {/* Background gradient + subtle glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_70%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_70%)]"></div>

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="relative z-10 text-center py-12 px-6 flex flex-col items-center justify-center text-gray-300"
//       >
//         {/* Floating Glow Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "80%" }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//           className="h-[2px] mb-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)]"
//         ></motion.div>

//         {/* Logo or Name */}
//         <motion.h3
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4"
//         >
//           Ankit Gyanwali
//         </motion.h3>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-sm md:text-base text-gray-400 mb-6"
//         >
//           Designed & Developed by{" "}
//           <span className="text-cyan-400 font-medium">Ankit Gyanwali</span>
//         </motion.p>

//         {/* Social Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="flex gap-6 text-2xl mb-8"
//         >
//           {[FaGithub, FaLinkedin, FaInstagram, FaFacebook].map((Icon, idx) => {
//             const links = [
//               "https://github.com/ankit07721",
//               "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
//               "https://www.instagram.com/ankit07721/",
//               "https://www.facebook.com/ankit.gyanwali.3",
//             ];
//             const colors = [
//               "hover:text-cyan-400",
//               "hover:text-blue-500",
//               "hover:text-pink-500",
//               "hover:text-blue-500",
//             ];
//             return (
//               <motion.a
//                 key={idx}
//                 href={links[idx]}
//                 target="_blank"
//                 whileHover={{ scale: 1.3, rotate: idx % 2 === 0 ? 10 : -10 }}
//                 className={`text-gray-400 transition duration-300 ${colors[idx]}`}
//               >
//                 <Icon />
//               </motion.a>
//             );
//           })}
//         </motion.div>

//         {/* Copyright */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 1 }}
//           className="text-xs md:text-sm text-gray-500"
//         >
//           © {year} Ankit Gyanwali. All Rights Reserved.
//         </motion.p>
//       </motion.div>

//       {/* Bottom Neon Glow Border */}
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         transition={{ duration: 1.5 }}
//         className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]"
//       ></motion.div>
//     </footer>
//   );
// }

"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
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
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/ankit.gyanwali.3",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background gradient + subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_70%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center py-12 px-6 flex flex-col items-center justify-center text-gray-300">
        {/* Floating Glow Line */}
        <div className="h-[2px] mb-8 w-4/5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)]"></div>

        {/* Logo or Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Ankit Gyanwali
        </h3>

        {/* Tagline */}
        <p className="text-sm md:text-base text-gray-400 mb-6">
          Designed & Developed by{" "}
          <span className="text-cyan-400 font-medium">Ankit Gyanwali</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mb-8">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              className={`text-gray-400 transition duration-300 ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500">
          © {year} Ankit Gyanwali. All Rights Reserved.
        </p>
      </div>

      {/* Bottom Neon Glow Border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]"></div>
    </footer>
  );
}
