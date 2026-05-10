import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-5xl md:text-7xl font-light tracking-tighter mb-8"
          >
            Start a <br/> Conversation.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-6 text-gray-400 font-sans uppercase text-xs tracking-widest"
          >
            <div>
              <span className="block text-white mb-1">Studio</span>
              A·Bayelign Architecture<br/>
              Addis Ababa<br/>
              Ethiopia
            </div>
            <div>
              <span className="block text-white mb-1">Inquiries</span>
              <a href="mailto:abrhambayelign62@gmail.com" className="hover:text-white transition-colors block mb-2">
                abrhambayelign62@gmail.com
              </a>
              <a href="tel:+251951537164" className="hover:text-white transition-colors block">
                +251 95 153 7164
              </a>
            </div>
            <div>
              <span className="block text-white mb-1">Social</span>
              <div className="flex space-x-6 mt-2">
                <a href="https://instagram.com/bsfa_m" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram (@bsfa_m)</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Form) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-1/2 h-full flex flex-col justify-center"
        >
          <form className="flex flex-col space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="block w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer font-sans text-white text-lg"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-gray-500 font-sans tracking-widest text-xs uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
              >
                Name
              </label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="block w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer font-sans text-white text-lg"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 text-gray-500 font-sans tracking-widest text-xs uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea 
                id="message"
                placeholder=" "
                rows={1}
                className="block w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer font-sans text-white text-lg resize-none"
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-gray-500 font-sans tracking-widest text-xs uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
              >
                Project Details
              </label>
            </div>

            <button type="submit" className="group flex items-center justify-between w-full pb-4 border-b border-white hover:border-gray-500 transition-colors pt-8">
              <span className="font-display text-xl tracking-tight uppercase group-hover:text-gray-300 transition-colors">Submit Request</span>
              <ArrowRight className="text-white group-hover:-rotate-45 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
