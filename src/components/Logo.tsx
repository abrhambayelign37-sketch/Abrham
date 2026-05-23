import { motion } from 'motion/react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className} group cursor-pointer`}>
      {/* Animated Graphic */}
      <motion.div 
        className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
          
          {/* Base swooshes */}
          <motion.path 
            d="M 10,75 L 50,55 L 85,72" 
            stroke="white" 
            strokeWidth="5" 
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.path 
            d="M 10,85 L 50,65 L 85,82" 
            stroke="#C8102E" 
            strokeWidth="8" 
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          />
          <motion.path 
            d="M 25,95 L 50,82 L 70,92" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
          />

          {/* Pillars */}
          {/* Left Pillar */}
          <motion.path 
            d="M 20,70 L 20,45 L 35,38 L 35,62 Z" 
            fill="#a6101c" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.path 
            d="M 35,62 L 35,38 L 45,43 L 45,67 Z" 
            fill="#C8102E" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Middle Pillar */}
          <motion.path 
            d="M 45,67 L 45,20 L 55,15 L 55,62 Z" 
            fill="#C8102E" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.path 
            d="M 55,62 L 55,15 L 65,22 L 65,69 Z" 
            fill="white" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Right Pillar */}
          <motion.path 
            d="M 65,69 L 65,40 L 75,35 L 75,64 Z" 
            fill="#C8102E" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
        </svg>

        {/* Hover glow effect for the icon */}
        <div className="absolute inset-0 bg-[#C8102E]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Text Group */}
      <div className="flex flex-col justify-center translate-y-1 overflow-hidden relative">
        <motion.div
           className="relative"
           initial={{ x: "-100%" }}
           animate={{ x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tighter leading-none text-white m-0 p-0 drop-shadow-md">
            BS<span className="text-[#C8102E]">-</span>FAM
          </h1>
          <span className="block font-sans text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] text-[#C8102E] font-bold leading-none mt-1 uppercase">
            Architectural Design
          </span>
        </motion.div>
        
        {/* Shine sweep effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
