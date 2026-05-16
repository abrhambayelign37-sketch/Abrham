import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ProjectSearch } from './ProjectSearch';

export function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("/ai-render-14206411.jpg")' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
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
            <div className="relative mb-10 h-8 w-[320px] mx-auto md:-ml-2" style={{ perspective: '1000px' }}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="w-full h-full relative"
              >
                <motion.div
                  animate={{ rotateY: [0, -360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full absolute inset-0 text-center md:text-left"
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                >
                  {[0, 120, 240].map((rotation, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center md:justify-start px-2 font-sans text-[13px] md:text-base tracking-[0.2em] uppercase text-red-500 font-medium whitespace-nowrap"
                      style={{
                        transform: `rotateY(${rotation}deg) translateZ(150px)`,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]">Form</span>
                      <span className="opacity-40 text-[10px] mx-3 md:mx-4">●</span>
                      <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]">Function</span>
                      <span className="opacity-40 text-[10px] mx-3 md:mx-4">●</span>
                      <span className="drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]">Elegance</span>
                    </div>
                  ))}
                </motion.div>
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
           className="w-[200px] h-[250px] md:w-[250px] md:h-[320px] flex-shrink-0 relative group mt-8 md:mt-0 cursor-move z-50 shadow-2xl resize overflow-hidden"
           style={{ touchAction: 'none' }}
        >
          <div className="block w-full h-full relative cursor-pointer group" onDragStart={(e) => e.preventDefault()}>
            <motion.div 
              className="w-full h-full overflow-hidden bg-gray-900 relative z-10"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            >
              <motion.img 
                initial={{ scale: 1.1, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                src="/photo_2026-02-27_22-48-12.jpg" 
                alt="Abrham Bayelign" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.02] opacity-90 hover:opacity-100 group-hover:opacity-100" 
              />
            </motion.div>
            
            {/* Dark text box at the bottom like Zaha website */}
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black text-white p-3 md:p-4 z-20 transition-transform duration-500 ease-out group-hover:-translate-y-2">
              <h3 className="font-sans text-sm md:text-base font-medium tracing-wide m-0">Abrham Bayelign</h3>
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
