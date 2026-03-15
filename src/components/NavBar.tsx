import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 1. Promo Banner (Exactly 48px height, exact Figma fonts and weights) */}
      <AnimatePresence>
        {showOffer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 48, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#BCFF03] w-full overflow-hidden relative origin-top"
          >
            <div className="h-[48px] max-w-7xl mx-auto flex items-center justify-center relative px-6">

              <div
                className="text-[#0C0C0C] text-[18px] leading-[22px] text-center"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                <span style={{ fontWeight: 600 }}>Special Offer: </span>
                <span style={{ fontWeight: 400 }}> Get </span>
                <span style={{ fontWeight: 600 }}> 35%</span>
                <span style={{ fontWeight: 400 }}> Off Now</span>
              </div>

              <button
                onClick={() => setShowOffer(false)}
                className="absolute right-6 flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <X size={19} strokeWidth={2} color="#0C0C0C" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navigation Bar (Exactly 104px height, background #0C0C0C) */}
      <nav
        className={`transition-all duration-300 w-full flex items-center ${scrolled ? 'bg-[#0C0C0C]/95 backdrop-blur-md' : 'bg-[#0C0C0C]'}`}
        style={{ height: '104px' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">

          {/* Logo - Constrained by height instead of width so it fits perfectly */}
          <a href="#" className="flex items-center transition-transform hover:scale-105">
            <img
              src="/logo.png"
              alt="Designeezy Logo"
              className="w-[130px] md:w-[150px] h-auto object-contain"
            />
          </a>

          {/* Navigation Links - Shrunk text to 16px and gap to 32px for a cleaner look */}
          <div
            className="hidden md:flex items-center gap-[32px] text-[16px] leading-[24px] text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
          >
            <a href="#" className="text-[#BCFF03] hover:text-[#BCFF03] transition-colors">Home</a>

            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="#services" className="hover:text-[#BCFF03] transition-colors flex items-center gap-2">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </a>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-[#171717] border border-white/10 p-4 rounded-[3px] min-w-[200px] shadow-2xl"
                  >
                    <a href="/services/graphic-designing" className="block py-2 hover:text-[#BCFF03] transition-colors">
                      Graphic Designing
                    </a>
                    <a href="/services/video-editing" className="block py-2 hover:text-[#BCFF03] transition-colors">
                      Video Editing
                    </a>
                    <a href="/services/web-development" className="block py-2 hover:text-[#BCFF03] transition-colors">
                      Web Development
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/portfolio" className="hover:text-[#BCFF03] transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-[#BCFF03] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#BCFF03] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#BCFF03] transition-colors">Shop</a>
          </div>

          {/* CTA Button (Figma size: 192x34, gap: 8px, padding: 7px 14px, Clash Display, 16px) */}
          <button
            className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-[192px] h-[34px] px-[14px] py-[7px] hover:scale-105 transition-transform"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Let's Work Together
          </button>

        </div>
      </nav>
    </header>
  );
}