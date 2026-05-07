import { motion } from 'motion/react';

const inspirations = [
  {
    name: 'Zaha Hadid',
    quote: 'Queen of the curve.',
    review: 'Her fluid, highly expressive forms continue to inspire my approach to spatial dynamics. Hadid taught us that buildings do not have to be rigid boxes; they can flow like liquid, carving the environment in breathless geometries that defy gravity.',
    image: 'https://images.unsplash.com/photo-1549488344-c650cf5dfed1?q=80&w=2670&auto=format&fit=crop' // flowing modern curve
  },
  {
    name: 'Tadao Ando',
    quote: 'Master of light and concrete.',
    review: 'His work teaches the profound impact of simplicity and raw materials. By manipulating geometric forms in harmony with natural elements like light and water, Ando creates minimalist spaces that evoke deep spiritual resonance.',
    image: 'https://images.unsplash.com/photo-1542384701-c0e46eadef08?q=80&w=2574&auto=format&fit=crop' // concrete light
  },
  {
    name: 'Le Corbusier',
    quote: 'Pioneer of modernism.',
    review: 'The Five Points of Architecture remain foundational to my structural philosophy. Le Corbusier stripped architecture of its historical baggage, pushing it into the machine age with pure, functional, and revolutionary starkness.',
    image: 'https://images.unsplash.com/photo-1566838965074-ceee8a86ad49?q=80&w=2670&auto=format&fit=crop' // brutalist standard
  }
];

export function Inspirations() {
  return (
    <section id="inspirations" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl md:text-7xl font-light tracking-tighter"
        >
          Inspirations
        </motion.h2>
      </div>

      <div className="space-y-32">
        {inspirations.map((arch, index) => (
          <motion.div 
            key={arch.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={arch.image} 
                  alt={arch.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="font-display text-4xl font-medium tracking-tight mb-2">
                {arch.name}
              </h3>
              <p className="font-serif italic text-xl text-gray-400 mb-8 border-l border-white/20 pl-4 py-1">
                "{arch.quote}"
              </p>
              <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base max-w-md">
                {arch.review}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
