import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added for seamless routing and active states
import { ChevronDown, X, Menu } from 'lucide-react'; // Added Menu icon for mobile
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  // Get current URL path to highlight the active link
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper functions to check if a link is active
  const isActive = (path: string) => currentPath === path;
  const isServicesActive = currentPath.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 1. Promo Banner */}
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

      {/* 2. Navigation Bar */}
      <nav
        className={`transition-all duration-300 w-full ${scrolled ? 'bg-[#0C0C0C]/95 backdrop-blur-md' : 'bg-[#0C0C0C]'}`}
      >
        <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between w-full h-[104px]">

          {/* Logo - Now redirects to Home! */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105 z-50">
            <img
              src="/logo.png"
              alt="Designeezy Logo"
              className="w-[130px] md:w-[150px] h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div
            className="hidden md:flex items-center gap-[32px] text-[16px] leading-[24px]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
          >
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className={`transition-colors flex items-center gap-2 ${isServicesActive ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-[#171717] border border-white/10 py-2 rounded-[3px] min-w-[220px] shadow-2xl overflow-hidden"
                  >
                    <Link to="/services/graphic-designing" className={`block px-4 py-3 transition-colors ${isActive('/services/graphic-designing') ? 'bg-[#BCFF03]/10 text-[#BCFF03]' : 'text-[#F6F2E7] hover:bg-[#BCFF03]/10 hover:text-[#BCFF03]'}`}>
                      Graphic Designing
                    </Link>
                    <Link to="/services/video-editing" className={`block px-4 py-3 transition-colors ${isActive('/services/video-editing') ? 'bg-[#BCFF03]/10 text-[#BCFF03]' : 'text-[#F6F2E7] hover:bg-[#BCFF03]/10 hover:text-[#BCFF03]'}`}>
                      Video Editing
                    </Link>
                    <Link to="/services/web-development" className={`block px-4 py-3 transition-colors ${isActive('/services/web-development') ? 'bg-[#BCFF03]/10 text-[#BCFF03]' : 'text-[#F6F2E7] hover:bg-[#BCFF03]/10 hover:text-[#BCFF03]'}`}>
                      Web Development
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" className={`transition-colors ${isActive('/portfolio') ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}>Portfolio</Link>
            <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}>About</Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}>Contact</Link>
            <Link to="/shop" className={`transition-colors ${isActive('/shop') ? 'text-[#BCFF03]' : 'text-[#F6F2E7] hover:text-[#BCFF03]'}`}>Shop</Link>
          </div>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="hidden md:flex">
            <button
              className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-[192px] h-[34px] px-[14px] py-[7px] hover:scale-105 transition-transform"
              style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
            >
              Let's Work Together
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden flex items-center text-[#F6F2E7] hover:text-[#BCFF03] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#171717] w-full absolute top-[104px] left-0 overflow-hidden shadow-2xl border-t border-white/5"
            >
              <div className="flex flex-col px-6 py-6 gap-6" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px' }}>
                <Link to="/" className={`${isActive('/') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Home</Link>
                
                <div className="flex flex-col gap-3">
                  <span className={`text-[#F6F2E7]/50 text-sm uppercase tracking-wider`}>Services</span>
                  <Link to="/services/graphic-designing" className={`pl-4 ${isActive('/services/graphic-designing') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Graphic Designing</Link>
                  <Link to="/services/video-editing" className={`pl-4 ${isActive('/services/video-editing') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Video Editing</Link>
                  <Link to="/services/web-development" className={`pl-4 ${isActive('/services/web-development') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Web Development</Link>
                </div>

                <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Portfolio</Link>
                <Link to="/about" className={`${isActive('/about') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>About</Link>
                <Link to="/contact" className={`${isActive('/contact') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Contact</Link>
                <Link to="/shop" className={`${isActive('/shop') ? 'text-[#BCFF03]' : 'text-[#F6F2E7]'}`}>Shop</Link>

                <Link to="/contact" className="w-full mt-4">
                  <button
                    className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-full h-[44px] hover:scale-[1.02] transition-transform"
                    style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '18px' }}
                  >
                    Let's Work Together
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}