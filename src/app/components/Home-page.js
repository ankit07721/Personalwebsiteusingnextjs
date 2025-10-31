// import React from 'react'
// import SocialIcons from "./SocialIcons";
// const Home = () => {
//   return (
//       <section className="items-center  w-full h-screen flex flex-col bg-[#222831] justify-center">

//       <h1 className='text-[100px]'>Hey, I'm <span className="text-[#C1D7F0] font-bold ">Ankit Gyanwali</span></h1>
//       <p className='text-xl'> A passionate Front-End Developer creating visually appealing, responsive,
//         and user-friendly web interfaces using React.js and Next.js.</p>
//       <SocialIcons/>
//     </section>
//   )
// }

// export default Home

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import SocialIcons from "./SocialIcons";

// const Home = () => {
//   return (
//     <section className="relative flex flex-col justify-center items-center w-full h-screen bg-[#0B1120] text-center overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-fuchsia-900/20 to-cyan-900/30 blur-3xl"></div>

//       {/* Floating Orbs */}
//       <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse delay-1000"></div>

//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-200 mb-3"
//       >
//         Hey, I&apos;m
//       </motion.h1>

//       {/* Name with Gradient Animation */}
//       <motion.span
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//         className="text-[60px] md:text-[90px] lg:text-[110px] font-extrabold
//         bg-gradient-to-r from-[#00E6FF] via-[#FF00C8] to-[#FFD700]
//         bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,230,255,0.4)]"
//         style={{
//           backgroundSize: "300% 300%",
//           animation: "gradientShift 6s ease infinite",
//         }}
//       >
//         Ankit Gyanwali
//       </motion.span>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
//       >
//         A passionate Front-End Developer crafting responsive, elegant, and
//         high-performance web experiences using React.js and Next.js.
//       </motion.p>

//       {/* Sidebar Social Icons (Always Visible) */}
//       <div className="hidden md:flex flex-col gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-20">
//         <SocialIcons vertical />
//         <div className="w-[2px] h-24 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
//       </div>

//       {/* Gradient Keyframes */}
//       <style jsx>{`
//         @keyframes gradientShift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import SocialIcons from "./SocialIcons";

// export default function Home() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevent SSR mismatch

//   return (
//     <section className="relative flex flex-col justify-center items-center w-full h-screen bg-[#0B1120] text-center overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-fuchsia-900/20 to-cyan-900/30 blur-3xl -z-10"></div>

//       {/* Floating Orbs */}
//       <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse delay-1000"></div>

//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-200 mb-3"
//       >
//         Hey, I&apos;m
//       </motion.h1>

//       {/* Name with Gradient Animation */}
//       <motion.span
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//         className="text-[60px] md:text-[90px] lg:text-[110px] font-extrabold bg-gradient-to-r from-[#00E6FF] via-[#FF00C8] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,230,255,0.4)]"
//         style={{
//           backgroundSize: "300% 300%",
//           animation: "gradientShift 6s ease infinite",
//         }}
//       >
//         Ankit Gyanwali
//       </motion.span>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
//       >
//         A passionate Front-End Developer crafting responsive, elegant, and
//         high-performance web experiences using React.js and Next.js.
//       </motion.p>

//       {/* Sidebar Social Icons */}
//       <div className="hidden md:flex flex-col gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-20">
//         <SocialIcons vertical />
//         <div className="w-[2px] h-24 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
//       </div>

//       {/* Gradient Keyframes */}
//       <style jsx>{`
//         @keyframes gradientShift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import SocialIcons from "./SocialIcons";

export default function Home() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-screen bg-[#0B1120] text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-fuchsia-900/20 to-cyan-900/30 blur-3xl -z-10"></div>

      {/* Floating Orbs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-3xl animate-pulse delay-1000"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-200 mb-3">
        Hey, I&apos;m
      </h1>

      {/* Name with Gradient */}
      <span
        className="text-[60px] md:text-[90px] lg:text-[110px] font-extrabold bg-gradient-to-r from-[#00E6FF] via-[#FF00C8] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,230,255,0.4)]"
        style={{
          backgroundSize: "300% 300%",
          animation: "gradientShift 6s ease infinite",
        }}
      >
        Ankit Gyanwali
      </span>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
        A passionate Front-End Developer crafting responsive, elegant, and
        high-performance web experiences using React.js and Next.js.
      </p>

      {/* Sidebar Social Icons */}
      <div className="hidden md:flex flex-col gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-20">
        <SocialIcons vertical />
        <div className="w-[2px] h-24 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
      </div>

      {/* Gradient Keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
