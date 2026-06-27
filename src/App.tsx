import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Components
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay loading dismissal to match preloader compilation transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative font-sans text-gray-900 bg-[#FAFAFA] min-h-screen selection:bg-blue-600/10 selection:text-blue-600">
      {/* 1. Page Loading Entrance Transition */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen"
        >
          {/* 2. Interactive Custom Cursor Spotlight */}
          <CustomCursor />

          {/* 3. Ambient Background & Morphing Blobs */}
          <BackgroundEffects />

          {/* 4. Glassmorphic Header Navigation */}
          <Navigation onContactClick={() => scrollToSection('contact')} />

          {/* 5. Main Storytelling Stage Section Flow */}
          <main className="relative z-10">
            <Hero 
              onContactClick={() => scrollToSection('contact')}
              onProjectsClick={() => scrollToSection('projects')}
            />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Experience />
            <Testimonials />
            <Gallery />
            <Blog />
            <Contact />
          </main>

          {/* 6. Footer & Local Time Clock */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
