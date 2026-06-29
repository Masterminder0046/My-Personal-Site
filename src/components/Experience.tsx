import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Award, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  details: string[];
  type: 'experience' | 'education' | 'certification';
  badge: string;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'All' | 'Work' | 'Education' | 'Certification'>('All');

  const timelineItems: TimelineItem[] = [
    {
      id: "exp-1",
      role: "Front-end Developer Intern",
      company: "Freelance & Academic Projects",
      duration: "Apr 2025 – May 2025",
      description: "Collaborated on designing robust, responsive full-stack applications with modular micro-architectures.",
      details: [
        "Built 4+ web applications using Flask, Django, Python, and JavaScript with REST API integration.",
        "Developed responsive role-based dashboards and converted Figma design frames into production-ready web interfaces.",
        "Managed source control workflow, branch staging, and package deployments utilizing Git version control."
      ],
      type: "experience",
      badge: "Remote Internship"
    },
    {
      id: "cert-1",
      role: "Front-end Development & Database Certification",
      company: "Coderz Academy",
      duration: "Jan 2025 – Jun 2025",
      description: "Completed intensive 6-month specialized course focusing on database mechanics and interactive client state systems.",
      details: [
        "Mastered advanced layout patterns using HTML5, CSS3, and JavaScript.",
        "Designed efficient database queries, structured schemas, and indexing routines using MySQL.",
        "Constructed custom React.js context components and asynchronous state handlers."
      ],
      type: "certification",
      badge: "Specialized Certification"
    },
    {
      id: "edu-1",
      role: "B.E. – Computer Science & Engineering",
      company: "St. Anne's College of Engineering and Technology (Anna University)",
      duration: "2022 – 2026",
      description: "Acquiring core knowledge of computer graphics, database optimization, backend servers, and algorithmic logic.",
      details: [
        "Maintained an excellent Cumulative Grade Point Average (CGPA) of 8.1.",
        "Won 1st Prize in Inter-College Logo Design competition.",
        "Led graphics content design and paper presentations for campus tech fests."
      ],
      type: "education",
      badge: "Degree / CGPA: 8.1"
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? timelineItems 
    : timelineItems.filter(item => {
        if (activeTab === 'Work') return item.type === 'experience';
        if (activeTab === 'Education') return item.type === 'education';
        return item.type === 'certification';
      });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gray-50/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-200 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">05 / Chronology</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Journey & Milestones
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            A linear progression of professional experience, university education, and specialized system credentials.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 justify-start">
          {['All', 'Work', 'Education', 'Certification'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2.5 rounded-xl font-display font-semibold text-xs transition-all duration-300 border shrink-0 cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                  : 'bg-white text-gray-500 hover:text-gray-900 border-gray-150'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Path Layout */}
        <div className="relative max-w-4xl mx-auto text-left">
          {/* Vertical core pipeline lines */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200/80 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200/80 md:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-stretch ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Centered Node Icon Ring */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-500 shadow-sm top-0 md:top-6">
                      {item.type === 'experience' && <Briefcase className="w-4 h-4 text-blue-600" />}
                      {item.type === 'education' && <GraduationCap className="w-4 h-4 text-purple-600" />}
                      {item.type === 'certification' && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
                    </div>

                    {/* Left/Right Container */}
                    <div className="w-full md:w-[45%] pl-14 md:pl-0">
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="p-8 rounded-[32px] glass-card border border-white text-left relative overflow-hidden"
                      >
                        {/* Dynamic category badge */}
                        <div className="flex justify-between items-baseline mb-4 flex-wrap gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest ${
                            item.type === 'experience' 
                              ? 'bg-blue-50 text-blue-700 border border-blue-100/50' 
                              : item.type === 'education' 
                              ? 'bg-purple-50 text-purple-700 border border-purple-100/50' 
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-100/50'
                          }`}>
                            {item.badge}
                          </span>
                          <span className="font-mono text-[10px] text-gray-400 font-bold">{item.duration}</span>
                        </div>

                        <h3 className="font-display text-lg md:text-xl font-extrabold text-gray-900 mb-1">
                          {item.role}
                        </h3>
                        <h4 className="font-display font-bold text-gray-500 text-xs md:text-sm mb-4">
                          {item.company}
                        </h4>

                        <p className="text-gray-500 text-xs md:text-sm font-sans leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Bullet achievements list */}
                        <div className="space-y-2.5 border-t border-gray-100 pt-5">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex gap-2 items-start text-xs text-gray-600 font-sans leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer Column for large layouts */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
