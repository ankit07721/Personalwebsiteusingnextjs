// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function SocialIcons() {
//   return (
//     <div className="fixed left-4 top-1/3 flex flex-col gap-4 z-50">
//       <a href="https://github.com/" target="_blank" className="hover:scale-110   transition">
//         <FaGithub className="text-2xl text-gray-300 hover:text-white" />
//       </a>
//       <a href="https://linkedin.com/" target="_blank" className="hover:scale-110 transition">
//         <FaLinkedin className="text-2xl text-blue-500" />
//       </a>
//       <a href="https://instagram.com/" target="_blank" className="hover:scale-110 transition">
//         <FaInstagram className="text-2xl text-pink-500" />
//       </a>
//       <a href="mailto:ankitgyanwalee@gmail.com" className="hover:scale-110 transition">
//         <MdEmail className="text-2xl text-gray-300" />
//       </a>
//     </div>
//   );
// }

// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function SocialIcons() {
//   const icons = [
//     {
//       icon: <FaGithub />,
//       link: "https://github.com/ankit07721",
//       color: "from-gray-400 to-gray-100",
//       hoverGlow: "shadow-[0_0_25px_rgba(255,255,255,0.5)]",
//     },
//     {
//       icon: <FaLinkedin />,
//       link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
//       color: "from-blue-400 to-cyan-400",
//       hoverGlow: "shadow-[0_0_25px_rgba(0,150,255,0.6)]",
//     },
//     {
//       icon: <FaInstagram />,
//       link: "https://www.instagram.com/ankit07721/",
//       color: "from-pink-500 to-yellow-400",
//       hoverGlow: "shadow-[0_0_25px_rgba(255,100,150,0.6)]",
//     },
//     {
//       icon: <MdEmail />,
//       link: "mailto:ankitgyanwal001@gmail.com",
//       color: "from-green-400 to-cyan-300",
//       hoverGlow: "shadow-[0_0_25px_rgba(0,255,200,0.5)]",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1 }}
//       className="fixed left-6 top-1/3 flex flex-col gap-6 z-50"
//     >
//       {icons.map((item, index) => (
//         <motion.a
//           key={index}
//           href={item.link}
//           target="_blank"
//           whileHover={{ scale: 1.2, rotate: 5 }}
//           whileTap={{ scale: 0.9 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}
//         >
//           <div
//             className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.hoverGlow}`}
//           ></div>
//           <div className="flex items-center justify-center w-full h-full bg-[#0B1120] rounded-full text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
//             {item.icon}
//           </div>
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function SocialIcons() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevent SSR mismatch

//   const icons = [
//     {
//       icon: <FaGithub />,
//       link: "https://github.com/ankit07721",
//       color: "from-gray-400 to-gray-100",
//       hoverGlow: "shadow-[0_0_25px_rgba(255,255,255,0.5)]",
//     },
//     {
//       icon: <FaLinkedin />,
//       link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
//       color: "from-blue-400 to-cyan-400",
//       hoverGlow: "shadow-[0_0_25px_rgba(0,150,255,0.6)]",
//     },
//     {
//       icon: <FaInstagram />,
//       link: "https://www.instagram.com/ankit07721/",
//       color: "from-pink-500 to-yellow-400",
//       hoverGlow: "shadow-[0_0_25px_rgba(255,100,150,0.6)]",
//     },
//     {
//       icon: <MdEmail />,
//       link: "mailto:ankitgyanwal001@gmail.com",
//       color: "from-green-400 to-cyan-300",
//       hoverGlow: "shadow-[0_0_25px_rgba(0,255,200,0.5)]",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1 }}
//       className="fixed left-6 top-1/3 flex flex-col gap-6 z-50"
//     >
//       {icons.map((item, index) => (
//         <motion.a
//           key={index}
//           href={item.link}
//           target="_blank"
//           whileHover={{ scale: 1.2, rotate: 5 }}
//           whileTap={{ scale: 0.9 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}
//         >
//           <div
//             className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.hoverGlow}`}
//           ></div>
//           <div className="flex items-center justify-center w-full h-full bg-[#0B1120] rounded-full text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
//             {item.icon}
//           </div>
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// }

"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialIcons() {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/ankit07721",
      color: "from-gray-400 to-gray-100",
      hoverGlow: "shadow-[0_0_25px_rgba(255,255,255,0.5)]",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
      color: "from-blue-400 to-cyan-400",
      hoverGlow: "shadow-[0_0_25px_rgba(0,150,255,0.6)]",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ankit07721/",
      color: "from-pink-500 to-yellow-400",
      hoverGlow: "shadow-[0_0_25px_rgba(255,100,150,0.6)]",
    },
    {
      icon: <MdEmail />,
      link: "mailto:ankitgyanwal001@gmail.com",
      color: "from-green-400 to-cyan-300",
      hoverGlow: "shadow-[0_0_25px_rgba(0,255,200,0.5)]",
    },
  ];

  return (
    <div className="fixed left-6 top-1/3 flex flex-col gap-6 z-50">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px] transition-transform duration-300 hover:scale-110`}
        >
          {/* Glow effect */}
          <div
            className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.hoverGlow}`}
          ></div>

          {/* Icon container */}
          <div className="flex items-center justify-center w-full h-full bg-[#0B1120] rounded-full text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
