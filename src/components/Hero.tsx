import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0">
      
      <div className="z-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-light text-[12vw] md:text-[6vw] leading-[0.9] tracking-tighter uppercase mb-6">
              Abrham<br />Bayelign
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="h-[1px] w-24 bg-white/30 mb-8 md:ml-0 mx-auto"></div>
            <motion.p 
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-red-500 font-medium mb-6"
            >
              Form • Function • Elegance
            </motion.p>
            <p className="font-sans text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
              4th-year architecture student at EIABC, passionate about minimalist design, spatial storytelling, and creating timeless experiences.
            </p>
          </motion.div>
        </div>

         <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="w-56 h-56 md:w-96 md:h-[500px] flex-shrink-0 relative group mt-8 md:mt-0"
        >
          <motion.div 
            className="w-full h-full overflow-hidden border border-white/20 bg-gray-900 rounded-full md:rounded-none relative z-10"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
          >
            <motion.img 
              initial={{ scale: 1.2, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              src="/photo_2026-02-27_22-48-12.jpg" 
              alt="Abrham Bayelign" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105 opacity-90 group-hover:opacity-100" 
            />
            {/* Minimalist overlay frame effect */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 hidden md:block rounded-full md:rounded-none"></div>
          </motion.div>
          
          {/* Decorative shadow/offset element */}
          <motion.div 
             initial={{ opacity: 0, x: -10, y: -10 }}
             animate={{ opacity: 1, x: 20, y: 20 }}
             transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
             className="absolute inset-0 border border-white/10 -z-10 rounded-full md:rounded-none hidden md:block transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"
          ></motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest mb-4 opacity-50 hidden md:block">Scroll</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
