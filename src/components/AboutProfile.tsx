import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from './Portfolio';
import { useState, useEffect } from 'react';
import { HamburgerMenu } from './HamburgerMenu';

export function AboutProfile() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleProjects = [
    projects[startIndex],
    projects[(startIndex + 1) % projects.length],
    projects[(startIndex + 2) % projects.length],
    projects[(startIndex + 3) % projects.length]
  ];

  return (
    <div className="bg-white min-h-screen text-black font-sans pb-24">
      {/* Header bar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/" className="text-xl md:text-2xl font-light tracking-tight hover:underline">
          Abrham Bayelign
        </Link>
        <HamburgerMenu />
      </header>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-3 text-sm flex flex-col gap-6">
          <div>
            <h4 className="font-semibold text-xs mb-4">Archive:</h4>
            <div className="text-gray-500 mb-2">People</div>
            <h1 className="text-2xl font-medium mb-1">Abrham Bayelign</h1>
            <p className="text-sm font-medium mb-1">Architecture Student at EIABC</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 border-b border-gray-200 pb-4">
              Form · Function · Elegance
            </p>
          </div>

          <div className="flex flex-col gap-4 text-[13px] leading-relaxed text-gray-800">
            <p>
              Abrham's pioneering vision aims to redefine architecture for the 21st century. His passion for spatial storytelling captures imaginations through innovative forms and meaningful geometries. Each of his projects transforms notions of what can be achieved in concrete, steel, and glass, combining his unwavering optimism for the future and belief in the power of invention with advanced design, material, and construction innovations.
            </p>
            <p>
              Currently studying as a 4th-year architecture student at EIABC, Abrham focuses on minimalist design. His aesthetic and academic pursuits stand as symbols of progress, unexpectedly and spectacularly reshaping modern contexts. His design practice remains an inventive space for conceptualizing future urban interventions.
            </p>
            <p>
              Born and raised with an eye for detail, Abrham has always had a passion for architectural composition, forming his unique perspective on space, structure, and light to create intuitive environments.
            </p>
            <p>
              He recently completed a 2-month internship program at MAFER PLC, where he gained valuable practical experience. During this time, he actively participated in drafting, conceptualizing, and 3D modeling for an upcoming mixed-use residential development, bridging the gap between academic theory and professional execution.
            </p>
          </div>
        </div>

        {/* Center Column: Large Image */}
        <motion.div 
          className="lg:col-span-6 relative group z-10"
          drag
          dragMomentum={false}
        >
          <motion.img 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/photo_2026-02-27_22-48-12.jpg" 
            alt="Abrham Bayelign" 
            className="w-full h-auto object-cover border border-gray-200 shadow-sm cursor-move pointer-events-none"
          />
        </motion.div>

        {/* Right Column: Projects Scroll */}
        <div className="lg:col-span-3 flex flex-col gap-6 pr-2 relative overflow-hidden h-[80vh]">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 group cursor-pointer"
              >
                <Link to={`/#project-${project.id}`} className="block overflow-hidden relative">
                   <img 
                     src={project.coverImage || project.images[0]?.url} 
                     alt={project.title} 
                     className="w-full h-40 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                   />
                   {/* Left black line indicator */}
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-black translate-x-[-100%] transition-transform group-hover:translate-x-0"></div>
                </Link>
                <div className="text-xs font-medium">
                  {project.title}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
