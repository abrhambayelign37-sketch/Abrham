import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ProjectSearch } from './ProjectSearch';

export function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/ai-render-14206411.jpg")' }}
        initial={{ scale: 1.1, opacity: 0, filter: 'brightness(1)' }}
        animate={{ 
          scale: 1,
          opacity: [0, 0.8, 0.1, 1, 0.3, 0.4, 0.6, 0.4],
          filter: [
            'brightness(1)', 
            'brightness(1.5)', 
            'brightness(0.8)', 
            'brightness(2)', 
            'brightness(1)', 
            'brightness(1)', 
            'brightness(1.3)', 
            'brightness(1)'
          ]
        }}
        transition={{ 
          scale: { duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" },
          opacity: { duration: 20, repeat: Infinity, times: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.5, 1], ease: "easeInOut" },
          filter: { duration: 20, repeat: Infinity, times: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.5, 1], ease: "easeInOut" }
        }}
      ></motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/70 to-black"></div>

      <div className="z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
        
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
            <div className="mb-10 mx-auto md:-ml-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="flex items-center justify-center md:justify-start px-2 font-sans text-[13px] md:text-base tracking-[0.2em] uppercase text-orange-500 font-medium whitespace-nowrap"
              >
                <span className="drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]">Form</span>
                <span className="opacity-40 text-[10px] mx-3 md:mx-4">●</span>
                <span className="drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]">Function</span>
                <span className="opacity-40 text-[10px] mx-3 md:mx-4">●</span>
                <span className="drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]">Elegance</span>
              </motion.div>
            </div>
            <p className="font-sans text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              4th-year architecture student at EIABC, passionate about minimalist design, spatial storytelling, and creating timeless experiences.
            </p>
          </motion.div>
        </div>

         <motion.div
           drag
           dragMomentum={false}
           onClick={() => navigate('/about')}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex-shrink-0 relative group mt-8 md:mt-0 cursor-move z-50 rounded-full"
           style={{ touchAction: 'none' }}
        >
          {/* Animated Glow / Organic background blob */}
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 md:-inset-6 border border-orange-500/30 z-0 bg-orange-500/5 shadow-[0_0_40px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50 group-hover:shadow-[0_0_60px_rgba(249,115,22,0.25)] transition-all duration-700"
          />

          <div className="block w-full h-full relative cursor-pointer group z-10" onDragStart={(e) => e.preventDefault()}>
            <motion.div 
              className="w-full h-full overflow-hidden relative z-10"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            >
              <motion.div 
                className="w-full h-full"
                animate={{ 
                  borderRadius: [
                    "50% 50% 50% 50% / 50% 50% 50% 50%",
                    "45% 55% 42% 58% / 55% 45% 58% 42%",
                    "50% 50% 50% 50% / 50% 50% 50% 50%"
                  ]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center 30%, black 40%, transparent 80%)',
                  maskImage: 'radial-gradient(circle at center 30%, black 40%, transparent 80%)'
                }}
              >
                <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                
                <motion.img 
                  initial={{ scale: 1.1, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                  src="/photo_2026-02-27_22-48-12.jpg" 
                  alt="Abrham Bayelign" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.05] opacity-90 hover:opacity-100 group-hover:opacity-100 object-top mix-blend-luminosity hover:mix-blend-normal" 
                />
              </motion.div>
            </motion.div>
            
            {/* Minimal floating badge */}
            <div className="absolute bottom-2 right-2 md:bottom-6 md:-right-8 bg-black/80 backdrop-blur-md border border-white/10 text-white p-3 md:p-4 rounded-2xl z-20 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-orange-500/40 shadow-xl pointer-events-none">
              <h3 className="font-sans text-sm md:text-base font-medium tracking-wide m-0">Abrham Bayelign</h3>
              <p className="font-sans text-[10px] md:text-xs text-gray-400 mt-1 m-0">Architecture Student at EIABC</p>
            </div>
          </div>
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

      {/* Floating Project Search */}
      <ProjectSearch />
    </section>
  );
}
