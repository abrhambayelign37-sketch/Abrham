/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Inspirations } from './components/Inspirations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutProfile } from './components/AboutProfile';
import { motion, AnimatePresence } from 'motion/react';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Inspirations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation();
  
  return (
    <div className="bg-[#050505] min-h-[100dvh] w-full text-white font-sans selection:bg-orange-500 selection:text-white p-0 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
      
      {/* Background ambient glow effect */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[70vw] h-[70vh] bg-orange-600/20 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 0, x: '50%', scale: 0.9, rotateY: -10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: '-50%', scale: 0.9, rotateY: 10, filter: 'blur(10px)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 2000, originX: 0.5 }}
          className="relative z-10 w-full h-[100dvh] md:h-[calc(100vh-6rem)] max-w-[1920px] mx-auto bg-[#0a0a0a] md:rounded-[32px] overflow-x-hidden overflow-y-auto scroll-smooth shadow-[0_0_80px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/10 custom-scrollbar"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutProfile />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
