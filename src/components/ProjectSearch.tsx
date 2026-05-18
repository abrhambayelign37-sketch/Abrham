import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = projectsList.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Dispatch an event so Portfolio can listen and open the lightbox
      const event = new CustomEvent('openProjectLightbox', { detail: { id } });
      window.dispatchEvent(event);
      setIsOpen(false);
    }
  };

  return createPortal(
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-4 bg-[#0a0a0a] border border-orange-500/30 text-white rounded-full px-5 py-3 shadow-[0_0_20px_rgba(249,115,22,0.2)] flex items-center gap-3 transition-colors hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
          >
            <Search size={18} className="text-orange-500" />
            <span className="text-sm font-sans tracking-widest uppercase">Search Projects</span>
            <span className="text-[10px] text-gray-500 ml-2 border border-gray-700 rounded px-1.5 py-0.5 hidden md:block">⌘K</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1000 }}
              className="w-full max-w-2xl bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(249,115,22,0.15)] flex flex-col relative overflow-hidden z-10"
            >
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
              
              <div className="flex items-center p-4 border-b border-white/10 relative">
                <Search size={22} className="text-orange-500 absolute left-6" />
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Search projects..." 
                  className="w-full bg-transparent pl-12 pr-12 py-3 outline-none text-lg placeholder-gray-500 font-sans text-white focus:ring-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute right-6 text-gray-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[50vh] custom-scrollbar p-2">
                {filteredProjects.length > 0 ? (
                  <ul className="flex flex-col gap-1 p-2">
                    {filteredProjects.map((project, index) => (
                      <motion.li 
                        key={project.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => handleScrollTo(project.id)}
                          className="w-full text-left px-4 py-4 rounded-xl hover:bg-white/5 group flex items-center justify-between transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-orange-500/50 text-xs font-mono group-hover:text-orange-500 transition-colors">
                              {project.id}
                            </span>
                            <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors tracking-wide font-sans">
                              {project.title}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-transparent group-hover:text-gray-500 transition-colors">
                            View Project
                          </span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-16 text-center flex flex-col items-center justify-center">
                    <Search size={32} className="text-gray-700 mb-4" />
                    <p className="text-gray-500 font-sans tracking-wide">No projects found for "{searchTerm}"</p>
                  </div>
                )}
              </div>
              
              {/* Footer text */}
              <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
                <span>{filteredProjects.length} results</span>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-flex items-center gap-1">
                    <span className="border border-gray-600 rounded px-1 py-0.5">↑</span>
                    <span className="border border-gray-600 rounded px-1 py-0.5">↓</span> to navigate
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="border border-gray-600 rounded px-1 py-0.5">ESC</span> to close
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

