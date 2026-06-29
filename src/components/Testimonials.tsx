import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Mail, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  comment: string;
  rating: number;
  tags: string[];
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "ref-1",
      name: "Rev. Sr. A. Punitha Jilt",
      role: "College Secretary",
      company: "St. Anne's College of Engineering & Technology",
      email: "srjiltsat@gmail.com",
      comment: "Sheik has demonstrated remarkable leadership skills during his computer science studies. He led content and visual design for our departmental fests, creating exceptional layout schemes and demonstrating extreme adaptability.",
      rating: 5,
      tags: ["Leadership", "Graphic Design", "Self-Driven"]
    },
    {
      id: "ref-2",
      name: "Mr. J. Govindharajan",
      role: "Founder & Director",
      company: "Coderz Academy",
      email: "contactcoderz@gmail.com",
      comment: "Sheik excelled in his 6-month certification, proving skills in both client-side and server-side development. He pairs strong HTML/CSS/JS and React.js architecture skills with robust Python and Django backend development, alongside a brilliant aptitude for creating high-performance MySQL database structures.",
      rating: 5,
      tags: ["Database Persistence", "React.js Stack", "Problem Solving"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/40">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">06 / Endorsements</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Verified Key Endorsements
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Directly authenticated references from academic leaders and training program directors who have audited Sheik's engineering deliveries.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 rounded-[36px] glass-card border border-white text-left relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-sm"
            >
              <Quote className="w-12 h-12 text-blue-500/15 absolute top-8 left-8" />
              
              {/* Stars & Text */}
              <div className="relative z-10 space-y-6 pt-6">
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed italic">
                  "{current.comment}"
                </p>
              </div>

              {/* Profile Details & Interaction */}
              <div className="relative z-10 mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md shadow-blue-500/10">
                    {current.name.split('. ').pop()?.[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-gray-900 text-sm">{current.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{current.role} • {current.company}</p>
                  </div>
                </div>

                {/* Tags or Email */}
                <div className="flex flex-col sm:items-end gap-1.5">
                  <a 
                    href={`mailto:${current.email}`} 
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-600 font-bold hover:text-purple-600 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {current.email}
                  </a>
                  <div className="flex flex-wrap gap-1">
                    {current.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controller buttons */}
          <div className="flex justify-center md:justify-end gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-gray-150 text-gray-600 hover:text-gray-950 shadow-sm transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-gray-150 text-gray-600 hover:text-gray-950 shadow-sm transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
