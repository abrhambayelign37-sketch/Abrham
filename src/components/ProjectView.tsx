import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from './Portfolio';
import { ArrowLeft, MapPin, Briefcase } from 'lucide-react';
import { useEffect } from 'react';

export function ProjectView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    // Scroll to top when mounted
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-black text-white rounded-full font-sans text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  // The first image in the array could be considered the "front photo" but project.coverImage is also there.
  // Actually, project.images contains all images. We can show project.coverImage large at the top,
  // or the first image of project.images, and then loop the rest.
  const allImages = project.images;

  return (
    <div className="bg-white text-gray-900 min-h-screen w-full font-sans pb-24">
      {/* Top Navbar Area for Project View */}
      <div className="fixed top-0 left-0 right-0 p-6 md:p-12 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 group hover:opacity-75 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest font-semibold hidden md:block text-gray-900">Back</span>
        </button>
        <div className="font-display text-xl font-medium tracking-tight text-gray-900">
          {project.title}
        </div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20 text-center max-w-4xl mx-auto"
        >
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8102E] font-bold mb-4">
            {project.type}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-black">
            {project.title}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-gray-500 font-sans tracking-[0.1em] uppercase">
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
            )}
            {project.company && (
              <div className="flex items-center gap-2">
                <Briefcase size={14} />
                <span>{project.company}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Hero Image (Larger Front Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full aspect-[16/9] md:aspect-[21/9] mb-12 md:mb-24 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl relative"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Gallery Below */}
        <div className="space-y-12 md:space-y-32">
          {allImages.filter(img => img.url !== project.coverImage).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-full bg-gray-50 rounded-xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-2 md:p-6 mb-4 md:mb-8">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-auto max-h-[85vh] object-contain mx-auto rounded-lg md:rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl tracking-tight text-gray-900 mb-1">{img.title}</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-gray-500">{img.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
