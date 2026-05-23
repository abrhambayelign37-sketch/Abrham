import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const projects = [
  {
    id: '01',
    title: 'Residential Building',
    type: 'Architecture & 3D',
    location: 'Accra, Ghana',
    company: 'Internship at MAFER PLC',
    coverImage: '/photo_2025-08-01_22-57-50.jpg',
    colorCover: true,
    images: [
      { url: '/photo_2025-08-01_22-57-50.jpg', title: 'Exterior Visualization', type: '3D Render' },
      { url: '/3D_final.jpg', title: 'Final Monolith', type: '3D Render' },
      { url: '/section_done_1234.jpg', title: 'Section Detail I', type: 'Technical Drawing' },
      { url: '/sec1_done.jpg', title: 'Section Detail II', type: 'Technical Drawing' },
    ]
  },
  {
    id: '02',
    title: 'Guest House',
    type: 'Commercial Tower',
    location: 'Watamo, Kenya',
    company: 'Internship at MAFER PLC',
    coverImage: '/photo_2_2025-10-07_06-05-40.jpg',
    colorCover: true,
    images: [
      { url: '/photo_1_2025-10-07_06-05-40.jpg', title: 'Urban Oasis I', type: 'Commercial Tower' },
      { url: '/photo_2_2025-10-07_06-05-40.jpg', title: 'Urban Oasis II', type: 'Commercial Tower' },
      { url: '/photo_3_2025-10-07_06-05-40.jpg', title: 'Urban Oasis III', type: 'Commercial Tower' },
      { url: '/photo_2025-08-12_22-57-40.jpg', title: 'Urban Oasis IV', type: 'Commercial Tower' }
    ]
  },
  {
    id: '03',
    title: 'Educational Mall',
    type: 'Interior Renders',
    location: 'Addis Ababa, Ethiopia',
    company: 'Integrated Design 2',
    coverImage: '/ai-render-14206411.jpg',
    colorCover: true,
    images: [
      { url: '/ai-render-14206411.jpg', title: 'Interior Render I', type: 'Interior Visualization' },
      { url: '/ai-render-14208037.jpg', title: 'Interior Render II', type: 'Interior Visualization' },
      { url: '/ai-render-14208176.jpg', title: 'Interior Render III', type: 'Interior Visualization' },
      { url: '/ai-render-14208369.jpg', title: 'Interior Render IV', type: 'Interior Visualization' },
      { url: '/1777178985183.png', title: 'Interior Render V', type: 'Interior Visualization' }
    ]
  },
  {
    id: '04',
    title: 'Apartment',
    type: 'Academic Review',
    location: 'Addis Ababa, Ethiopia',
    company: 'Integrated Design 1',
    coverImage: '/jury_7 - Photo.jpg',
    colorCover: true,
    images: [
      { url: '/jury_4 - Photo.jpg', title: 'Jury Presentation I', type: 'Academic Review' },
      { url: '/jury_5 - Photo.jpg', title: 'Jury Presentation II', type: 'Academic Review' },
      { url: '/jury_6 - Photo.jpg', title: 'Jury Presentation III', type: 'Academic Review' },
      { url: '/jury_7 - Photo.jpg', title: 'Jury Presentation IV', type: 'Academic Review' }
    ]
  },
  {
    id: '05',
    title: 'Bakkafa Castle',
    type: 'Conceptual Studies',
    location: 'Fasil Ghebbi, Gondar',
    company: 'History of Architecture',
    coverImage: '/Image(10).png',
    colorCover: true,
    images: [
      { url: '/Scene 1(3).png', title: 'Concept Scene I', type: 'Conceptual Study' },
      { url: '/Image(9) (2).png', title: 'Concept Visualization II', type: 'Conceptual Study' },
      { url: '/Image(10).png', title: 'Concept Visualization III', type: 'Conceptual Study' },
      { url: '/Image(12).png', title: 'Concept Visualization IV', type: 'Conceptual Study' },
      { url: '/Image(17).png', title: 'Concept Visualization V', type: 'Conceptual Study' }
    ]
  },
  {
    id: '06',
    title: 'Landscape Design',
    type: 'Re-imagining White House',
    location: 'Addis Ababa, Ethiopia',
    company: 'Eiabc, Seminar Project',
    coverImage: '/Enscape_2025-04-25-21-34-10.png',
    colorCover: true,
    images: [
      { url: '/Enscape_2025-04-25-21-22-14.png', title: 'Render View I', type: 'Architectural Visualization' },
      { url: '/Enscape_2025-04-25-21-34-10.png', title: 'Render View II', type: 'Architectural Visualization' },
      { url: '/Enscape_2025-04-26-03-19-45.png', title: 'Render View III', type: 'Architectural Visualization' },
      { url: '/photo_2025-04-25_22-35-01.jpg', title: 'Render Details', type: 'Architectural Visualization' }
    ]
  },
  {
    id: '07',
    title: 'Commercial Mall',
    type: 'Interface',
    location: 'Addis Ababa, Ethiopia',
    company: 'Architectural Design 2',
    coverImage: '/Enscape_2025-06-01-14-37-04.png',
    colorCover: true,
    images: [
      { url: '/Enscape_2025-06-01-14-27-28.png', title: 'Exterior Angle I', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-14-37-04.png', title: 'Exterior Angle II', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-15-19-12.png', title: 'Exterior Angle III', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-15-33-31.png', title: 'Exterior Angle IV', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-15-37-08.png', title: 'Exterior Angle V', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-15-48-07.png', title: 'Exterior Angle VI', type: 'Exterior Vis' },
      { url: '/Enscape_2025-06-01-16-52-42.png', title: 'Exterior Angle VII', type: 'Exterior Vis' }
    ]
  },
  {
    id: '08',
    title: 'Appropriate Building',
    type: 'Vernacular Architecture',
    location: 'Somalia, Ethiopia',
    company: 'Appropriate Design',
    coverImage: '/ap1.png',
    colorCover: true,
    images: [
      { url: '/ap1.png', title: 'Presentation I', type: 'Architectural Plan' },
      { url: '/ap 6.png', title: 'Presentation X', type: 'Architectural Plan' },
      { url: '/ap 9.png', title: 'Presentation XI', type: 'Architectural Plan' },
      { url: '/ap 1q.png', title: 'Presentation II', type: 'Architectural Plan' },
      { url: '/ap 1w.png', title: 'Presentation V', type: 'Architectural Plan' },
      { url: '/ap 1r.png', title: 'Presentation III', type: 'Architectural Plan' },
      { url: '/ap 1t.png', title: 'Presentation IV', type: 'Architectural Plan' },
      { url: '/ap 2y.png', title: 'Presentation IX', type: 'Architectural Plan' },
      { url: '/ap 2p.png', title: 'Presentation VII', type: 'Architectural Plan' },
      { url: '/ap 2i.png', title: 'Presentation VI', type: 'Architectural Plan' },
      { url: '/ap 2u.png', title: 'Presentation VIII', type: 'Architectural Plan' }
    ]
  }
];

import { createPortal } from 'react-dom';

export function Portfolio() {
  const [lightbox, setLightbox] = useState<{ pId: number, iId: number } | null>(null);
  const navigate = useNavigate();

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Listen for custom event from ProjectSearch
    const handleOpenLightbox = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      const { id } = customEvent.detail;
      navigate('/project/' + id);
    };
    window.addEventListener('openProjectLightbox', handleOpenLightbox);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openProjectLightbox', handleOpenLightbox);
    };
  }, [lightbox]);

  const handleNext = () => {
    if (lightbox !== null) {
      const len = projects[lightbox.pId].images.length;
      setLightbox({
        pId: lightbox.pId,
        iId: (lightbox.iId + 1) % len
      });
    }
  };

  const handlePrev = () => {
    if (lightbox !== null) {
      const len = projects[lightbox.pId].images.length;
      setLightbox({
        pId: lightbox.pId,
        iId: (lightbox.iId - 1 + len) % len
      });
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-t border-white/10">
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl md:text-7xl font-light tracking-tighter"
        >
          Selected Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-6 md:mt-0"
        >
          2023 — Present
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {projects.map((project, index) => {
          return (
          <motion.div 
            key={project.id}
            id={`project-${project.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            className={`group ${index % 2 === 1 ? 'md:mt-32' : ''}`}
          >
            <div className="relative transition-transform duration-500 group-hover:-translate-y-2">
              <div className={`overflow-hidden aspect-[3/2] bg-[#0a0a0a] relative rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_60px_rgba(249,115,22,0.25)] group-hover:border-orange-500/30 transition-all duration-500`}>
                {/* Glowing top line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className={`w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105 ${(project as any).colorCover ? '' : 'grayscale contrast-125'}`}
                  referrerPolicy="no-referrer"
                />
                
                <div 
                  onClick={() => navigate('/project/' + project.id)}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="View Project"
                />
              </div>
              
              {/* Metadata below the image */}
              <div className="mt-6 flex justify-between items-baseline pointer-events-none">
                <div>
                  <h3 className="font-display font-medium text-xl md:text-3xl tracking-tight leading-none mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-gray-400">
                    {project.type}
                  </p>
                  {((project as any).location || (project as any).company) && (
                    <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-[10px] text-gray-400 font-sans tracking-[0.15em] uppercase">
                      {(project as any).location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          <span>{(project as any).location}</span>
                        </div>
                      )}
                      {(project as any).company && (
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={12} />
                          <span>{(project as any).company}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="font-display text-3xl font-light text-gray-700">
                  {project.id}
                </div>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            >
              <button 
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                aria-label="Close lightbox"
              >
                <X size={32} strokeWidth={1} />
              </button>
              
              {projects[lightbox.pId].images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev}
                    className="absolute left-4 md:left-12 text-white/50 hover:text-white transition-colors z-50 p-4"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={48} strokeWidth={1} />
                  </button>

                  <button 
                    onClick={handleNext}
                    className="absolute right-4 md:right-12 text-white/50 hover:text-white transition-colors z-50 p-4"
                    aria-label="Next image"
                  >
                    <ChevronRight size={48} strokeWidth={1} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox.iId}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full max-w-[1440px] max-h-[85vh] px-4 md:px-0 flex flex-col items-center justify-center"
                >
                  <img 
                    src={projects[lightbox.pId].images[lightbox.iId].url} 
                    alt={projects[lightbox.pId].images[lightbox.iId].title}
                    className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-6 text-center">
                    <h4 className="font-display text-2xl tracking-tight text-white mb-1">
                      {projects[lightbox.pId].images[lightbox.iId].title}
                    </h4>
                    <p className="font-sans text-xs uppercase tracking-widest text-gray-400">
                      {projects[lightbox.pId].images[lightbox.iId].type}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slide counter */}
              {projects[lightbox.pId].images.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans tracking-[0.3em] text-xs text-gray-500">
                  {String(lightbox.iId + 1).padStart(2, '0')} / {String(projects[lightbox.pId].images.length).padStart(2, '0')}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
