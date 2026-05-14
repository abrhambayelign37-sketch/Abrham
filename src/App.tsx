/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Inspirations } from './components/Inspirations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutProfile } from './components/AboutProfile';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Wait for render
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
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutProfile />} />
      </Routes>
    </div>
  );
}
