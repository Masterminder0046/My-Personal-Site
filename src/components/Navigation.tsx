import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Story", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Labs", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Journey", id: "experience" },
    { name: "Reviews", id: "testimonials" },
    { name: "Design", id: "gallery" },
    { name: "Log", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background toggle on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section viewport position
      const scrollPosition = window.scrollY + 160;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 md:py-6 ${
        isScrolled ? 'md:pt-4 md:pb-4' : 'md:pt-6 md:pb-6'
      }`}>
        <div className={`w-full max-w-7xl mx-auto px-6 py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md border border-white/40 shadow-md shadow-gray-950/5' 
            : 'bg-transparent border border-transparent'
        }`}>
          
          {/* Logo Frame */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group select-none text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gray-950 text-white flex items-center justify-center font-display font-black text-sm group-hover:scale-105 transition-transform duration-300">
              SM
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-extrabold text-xs text-gray-900 leading-tight">Sheik Mohamed</h1>
              <span className="text-[9px] font-mono font-bold text-blue-600 tracking-wider block uppercase">Portfolio Studio</span>
            </div>
          </div>

          {/* Nav list - Desktop */}
          <nav className="hidden lg:flex items-center gap-1.5 font-display text-xs font-semibold text-gray-500">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-gray-900 text-white shadow-sm' 
                      : 'hover:text-gray-900 hover:bg-gray-50/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action trigger button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-950 hover:bg-blue-600 text-white rounded-full font-display font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              Consult Lab
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-950 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Slider Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-zinc-950/20 backdrop-blur-md"
            />

            {/* Slider panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white border-l border-gray-100 p-8 flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-8 text-left mt-16">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-950 text-white flex items-center justify-center font-display font-black text-sm">
                    SM
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-sm text-gray-900 leading-tight">Sheik Mohamed</h3>
                    <p className="text-[9px] font-mono text-zinc-400 font-bold tracking-wider block uppercase">Full Stack Studio</p>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`w-full text-left px-4 py-3 rounded-2xl font-display font-bold text-sm transition-colors cursor-pointer ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 border border-blue-100/50' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer CTA bottom */}
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-4 bg-gray-900 hover:bg-blue-600 text-white font-display font-bold text-xs tracking-wider rounded-2xl transition-colors shadow-sm cursor-pointer text-center"
                >
                  Consult Lab
                </button>
                <div className="text-center font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  EST. 2026 • Tamil Nadu, India
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
