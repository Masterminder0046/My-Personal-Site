import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Award, X, ZoomIn, Image, ChevronRight } from 'lucide-react';
import techFestImg from '../assets/tech_fest_deck.png';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  details: string;
}

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Inter-College Vector Logo Symbol",
      category: "Graphic Design",
      description: "1st Prize Winner logo layout created for university design competition. Combines minimalist geometric lines with custom branding values.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
      badge: "🥇 1st Prize Winner",
      details: "Constructed utilizing precise coordinate grids and custom typography spacing. Designed to scale seamlessly from 16px favicons to high-definition display banners."
    },
    {
      id: "gal-2",
      title: "Tech Fest Event Promotional Deck",
      category: "Creative Direction",
      description: "Official slide layouts and visual branding templates engineered for St. Anne's college technical symposia events.",
      image: techFestImg,
      badge: "Symposium Theme",
      details: "Created a high-contrast futuristic visual identity. Integrated cohesive neon gradients, custom display headings, and slide structures that received wide praise from attendees."
    },
    {
      id: "gal-3",
      title: "Custom Interactive UI Prototypes",
      category: "UI/UX Design",
      description: "Figma wireframes and high-fidelity screen flows detailing the dashboard mechanics for support system tickets.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      badge: "High-Fidelity Wireframe",
      details: "Conducted iterative usability tests to optimize click triggers. Configured optimal touch target sizing, micro-copy, and structural hierarchies to lower user friction."
    }
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">07 / Gallery</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Creative Graphics & Design
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Curated highlights of Sheik's award-winning logo drafts, graphics presentation assets, and high-fidelity wireframe structures.
          </p>
        </div>

        {/* Gallery Masonry-feeling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group relative rounded-[32px] overflow-hidden glass-card aspect-[4/3] flex flex-col justify-end p-6 text-left cursor-zoom-in border border-white"
              onClick={() => setSelectedItem(item)}
            >
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-transparent z-10" />
              </div>

              {/* Hover Trigger Details */}
              <div className="relative z-20 space-y-2 text-white">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase bg-blue-500/80 text-white px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] font-mono font-bold text-amber-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs font-sans line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-display font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  View Graphic Details
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Zoom Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-white w-full max-w-2xl rounded-[36px] shadow-2xl overflow-hidden border border-gray-100 z-10 text-left flex flex-col"
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-150 transition-colors cursor-pointer text-gray-500 hover:text-gray-800 z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="h-64 sm:h-80 relative overflow-hidden bg-zinc-950">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-black">
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-gray-400">
                      Concept Strategy
                    </h4>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-sans">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                    <h5 className="font-display font-bold text-xs text-gray-900 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-blue-600" /> Technical Details
                    </h5>
                    <p className="text-gray-500 text-xs font-sans leading-normal">
                      {selectedItem.details}
                    </p>
                  </div>

                  {selectedItem.badge && (
                    <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-600">
                      ✓ {selectedItem.badge}
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
