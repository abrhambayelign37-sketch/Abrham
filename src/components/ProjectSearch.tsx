import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';

const projectsList = [
  { id: '01', title: 'Residential Building' },
  { id: '02', title: 'Guest House' },
  { id: '03', title: 'Educational Mall' },
  { id: '04', title: 'Apartment' },
  { id: '05', title: 'Bakkafa Castle' },
  { id: '06', title: 'Landscape Design' },
  { id: '07', title: 'Commercial Mall' },
  { id: '08', title: 'Appropriate Building' }
];

export function ProjectSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsList.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Dispatch an event so Portfolio can listen and open the lightbox
      const event = new CustomEvent('openProjectLightbox', { detail: { id } });
      window.dispatchEvent(event);
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="absolute z-[100] right-4 md:right-12 lg:right-[10%] bottom-4 md:bottom-8 lg:bottom-12 bg-black border border-white/10 shadow-2xl overflow-hidden cursor-move w-64 text-sm font-sans"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ touchAction: 'none' }}
    >
      <div className="flex justify-between items-center p-2 px-3 border-b border-white/10 bg-black/40">
        <span className="text-[10px] uppercase tracking-widest text-gray-300 pointer-events-none">Project Search</span>
        <button 
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          onPointerDown={(e) => e.stopPropagation()} // Prevent dragging when clicking the button
        >
          {isMinimized ? <Search size={16} /> : <X size={16} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div onPointerDown={(e) => e.stopPropagation()} className="cursor-auto">
              <div className="flex bg-white text-black p-0.5">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="flex-1 bg-transparent px-2 py-0.5 outline-none text-xs placeholder-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  onClick={() => {
                    if (filteredProjects.length > 0) {
                      handleScrollTo(filteredProjects[0].id);
                    }
                  }}
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-colors"
                >
                  Go
                </button>
              </div>

              <div className="max-h-52 overflow-y-auto custom-scrollbar">
                {filteredProjects.length > 0 ? (
                  <ul className="py-1">
                    {filteredProjects.map((project) => (
                      <li key={project.id}>
                        <button
                          onClick={() => handleScrollTo(project.id)}
                          className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors text-[11px] tracking-wider"
                        >
                          {project.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-xs text-gray-500 text-center">No projects found</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
