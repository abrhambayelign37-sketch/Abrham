import { motion } from 'motion/react';
import { Building2, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-t border-white/10">
      <div className="mb-16 md:mb-24 flex items-end justify-between">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-gray-400 max-w-xl font-sans"
          >
            Professional milestones, internships, and dynamic architectural environments.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative group"
        >
           {/* Mafer actual image */}
           <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-gray-900 border border-white/5">
             <img 
               src="/Copilot_20260519_044447 (2).png" 
               alt="Mafer Experience" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="border-b border-orange-500/20 pb-8">
            <h3 className="text-2xl md:text-3xl font-display text-orange-500 mb-2">Architectural Intern</h3>
            <h4 className="text-xl font-sans font-light text-white mb-6">Mafer PLC</h4>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 uppercase tracking-wider mb-6">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded"><Calendar size={14} className="text-orange-500" /> 2023 - 2024</span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded"><MapPin size={14} className="text-orange-500" /> Addis Ababa</span>
            </div>

            <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base mb-6">
              During my internship at <span className="text-orange-500">Mafer PLC</span>, I gained extensive technical and soft skills through active participation in two major architectural projects. The first was a guest house in Watamu, Kenya, which spanned over four weeks and significantly enhanced my design, modeling, and project management abilities. 
            </p>
            <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base mb-6">
              The second was a residential house in Accra, Ghana, developed for a private client, where I deepened my understanding of contextual design and client coordination. Throughout the internship, I worked under the guidance of <span className="text-white">Architect Cristian Maroli</span> and <span className="text-white">Architect Teddy Girma</span>, collaborating closely with the entire Mafer team. 
            </p>
            <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
              This experience strengthened my professional competence, teamwork, and adaptability within a dynamic architectural environment.
            </p>
          </div>

          {/* Project Highlights mini-gallery */}
          <div className="grid grid-cols-2 gap-4">
             <div className="relative aspect-[4/3] group overflow-hidden bg-gray-900 border border-white/5">
                <img 
                  src="/photo_2_2025-10-07_06-05-40.jpg" 
                  alt="Watamu Kenya Guest House" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h5 className="text-white text-sm font-medium tracking-wide">Watamu Guest House</h5>
                  <p className="text-gray-400 text-xs">Kenya</p>
                </div>
             </div>
             <div className="relative aspect-[4/3] group overflow-hidden bg-gray-900 border border-white/5">
                <img 
                  src="/photo_2025-08-01_22-57-39.jpg" 
                  alt="Accra Ghana Residential House" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h5 className="text-white text-sm font-medium tracking-wide">Private Residential</h5>
                  <p className="text-gray-400 text-xs">Accra, Ghana</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
