import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Abstract/architectural image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[3/4] md:aspect-square group overflow-hidden bg-gray-900"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop" 
            alt="Minimalist architectural detail" 
            className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Stark white frame element over the image */}
          <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-light tracking-tight mb-8"
          >
            Sculpting Void <br/>
            <span className="italic text-gray-400 font-serif">Into Place.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 text-gray-400 font-sans leading-relaxed"
          >
            <p>
              I believe architecture is the art of subtracting the unnecessary. Every project is an exploration of context, materiality, and light—aiming to create spaces that evoke silence and profound presence.
            </p>
            <p>
              As a 4th-year architecture student at the Ethiopian Institute of Architecture, Building Construction and City Development (EIABC), my approach strips away ornamentation to reveal the fundamental truth of the building. I design to ground structures in deep minimalist principles and bold geometries.
            </p>
            
            <div className="pt-8 flex flex-col space-y-4">
              <div className="flex border-b border-white/10 pb-4 justify-between uppercase text-xs tracking-widest">
                <span className="text-white">Education</span>
                <span>EIABC (4th Year)</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 justify-between uppercase text-xs tracking-widest">
                <span className="text-white">Focus</span>
                <span>Minimalist Architecture</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 justify-between uppercase text-xs tracking-widest">
                <span className="text-white">Based In</span>
                <span>Addis Ababa</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
