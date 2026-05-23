import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (hash: string) => {
    setIsOpen(false);
    navigate(`/${hash}`);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Inspirations', href: '#inspirations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-black hover:opacity-70 transition-opacity flex items-center justify-center"
        aria-label="Menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-black opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.href)}
                className="text-3xl md:text-5xl font-display tracking-tight text-black hover:text-gray-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
