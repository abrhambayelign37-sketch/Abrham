/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Inspirations } from './components/Inspirations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutProfile } from './components/AboutProfile';
import { motion, AnimatePresence } from 'motion/react';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      const scrollContainer = document.getElementById('main-scroll-container');
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
        // Prevent browser scroll restoration from overriding
        setTimeout(() => { if (scrollContainer) scrollContainer.scrollTop = 0; }, 10);
      }
    } else {
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
        <Experience />
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
      
      {/* Background ambient glow effect (static for better performance) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-[70vw] h-[70vh] bg-orange-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50"
        />
      </div>

      <div className="relative z-10 w-full h-[100dvh] md:h-[calc(100vh-6rem)] max-w-[1920px] mx-auto bg-[#0a0a0a] md:rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full h-full overflow-x-hidden overflow-y-auto scroll-smooth custom-scrollbar"
            id="main-scroll-container"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutProfile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
