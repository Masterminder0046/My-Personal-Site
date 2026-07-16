import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Terminal, Database, Cpu, Figma, HelpCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Familiar';
  description: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  description: string;
  icon: any;
  color: string;
  glowColor: string;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const skillGroups: SkillGroup[] = [
    {
      category: "Frontend Web",
      description: "Crafting beautiful, accessible, and high-performance user interfaces.",
      icon: Code,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      glowColor: "rgba(37, 99, 235, 0.15)",
      skills: [
        { name: "React.js", level: "Intermediate", description: "Component state management, custom hooks, and context-based structures.", icon: "⚛️" },
        { name: "JavaScript (ES6+)", level: "Intermediate", description: "Asynchronous APIs, event loops, DOM architecture, and state mutations.", icon: "💛" },
        { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic markup, modern Flexbox/Grid systems, responsive design, and animations.", icon: "🎨" },
        { name: "Responsive Design", level: "Advanced", description: "Mobile-first CSS structures, fluid typography, and viewport adaptation.", icon: "📱" },
        { name: "GSAP", level: "Intermediate", description: "ScrollTrigger mechanics, timeline orchestration, and organic physics animations.", icon: "🌀" },
        { name: "Figma & Canva", level: "Advanced", description: "High-fidelity component design, visual assets, prototyping, and layout spacing.", icon: "📐" }
      ]
    },
    {
      category: "Backend Services",
      description: "Designing robust server logic, RESTful microservices, and file processes.",
      icon: Terminal,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      glowColor: "rgba(124, 58, 237, 0.15)",
      skills: [
        { name: "Python", level: "Advanced", description: "Data structures, file handling, asynchronous programming, and scripts.", icon: "🐍" },
        { name: "Django & DRF", level: "Intermediate", description: "Strict MVC architectures, secure user models, query routers, and REST frameworks.", icon: "⚡" },
        { name: "Flask", level: "Intermediate", description: "Microservice routes, custom blueprinting, request-response handling, and DB setups.", icon: "🧪" },
        { name: "REST API Design", level: "Advanced", description: "Clean endpoint structuring, JSON payload serialization, and response codes.", icon: "🔌" },
        { name: "CRUD Operations", level: "Advanced", description: "Optimized create, read, update, delete transaction loops with strict guards.", icon: "🔧" },
        { name: "MVC Architecture", level: "Advanced", description: "Clean structural separation of models, routing views, and template controllers.", icon: "🏗️" }
      ]
    },
    {
      category: "Databases & Operations",
      description: "Managing secure data persistence, system configurations, and deployments.",
      icon: Database,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
      glowColor: "rgba(6, 182, 212, 0.15)",
      skills: [
        { name: "MySQL", level: "Intermediate", description: "Relational database tables, index definitions, and transactional joins.", icon: "🐬" },
        { name: "MongoDB", level: "Intermediate", description: "NoSQL document storage, database clustering, aggregations, and schema design.", icon: "🍃" },
        { name: "Oracle SQL", level: "Intermediate", description: "Enterprise schemas, sub-queries, stored structures, and dataset filters.", icon: "🟥" },
        { name: "PostgreSQL", level: "Intermediate", description: "Structured database queries, schema design, and local environment integration.", icon: "🐘" },
        { name: "Git & GitHub", level: "Advanced", description: "Branch isolation, secure pull requests, staging, merge resolution, and repos.", icon: "🐙" },
        { name: "Docker", level: "Intermediate", description: "Container creation, environment encapsulation, and container deployment.", icon: "🐳" },
        { name: "Render & Hosting", level: "Intermediate", description: "Continuous integration pipelines, deployment hosting, and log monitoring.", icon: "🌐" }
      ]
    }
  ];

  const IconComponent = skillGroups[activeCategory].icon;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">02 / Architecture</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Interactive Skill Galaxy
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Click categories below to navigate Sheik's tech stack. Hover over individual nodes to inspect detailed concepts and proficiencies.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-start">
          {skillGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            const isSelected = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  setHoveredSkill(null);
                }}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-semibold text-xs tracking-wide transition-all duration-300 cursor-pointer border ${
                  isSelected 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md shadow-gray-950/15 scale-[1.02]' 
                    : 'bg-white text-gray-600 hover:text-gray-950 border-gray-100 shadow-sm'
                }`}
              >
                <GroupIcon className="w-4 h-4" />
                {group.category}
              </button>
            );
          })}
        </div>

        {/* Interactive Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Skill Galaxy Node Grid (Left Col) */}
          <div className="lg:col-span-8">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left"
            >
              {skillGroups[activeCategory].skills.map((skill, sIdx) => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <motion.div
                    key={sIdx}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: `0 12px 30px 0 ${skillGroups[activeCategory].glowColor}` 
                    }}
                    className={`p-6 rounded-[24px] border transition-all duration-300 cursor-help relative overflow-hidden ${
                      isHovered 
                        ? 'bg-white border-blue-500/30' 
                        : 'bg-white/70 backdrop-blur-sm border-gray-100/80 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest ${
                        skill.level === 'Advanced' 
                          ? 'bg-emerald-50 text-emerald-700' 
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-gray-900 text-sm mb-1">{skill.name}</h4>
                    <p className="text-gray-400 text-[11px] font-sans line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Subtle micro neon line */}
                    {isHovered && (
                      <motion.div 
                        layoutId="activeSkillLine"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Galaxy Inspector Panel (Right Col) */}
          <div className="lg:col-span-4 flex">
            <div className="w-full rounded-[32px] bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 text-white relative overflow-hidden flex flex-col justify-between text-left shadow-xl border border-zinc-850">
              {/* Radial gradient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

              <div className="z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border border-white/10 ${skillGroups[activeCategory].color.split(' ')[0]}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{skillGroups[activeCategory].category}</h3>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Galaxy Node Inspector</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {skillGroups[activeCategory].description}
                </p>

                <div className="border-t border-zinc-800/80 pt-6">
                  <AnimatePresence mode="wait">
                    {hoveredSkill ? (
                      <motion.div
                        key={hoveredSkill.name}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-display font-bold text-base text-cyan-400 flex items-center gap-1.5">
                            <span>{hoveredSkill.icon}</span> {hoveredSkill.name}
                          </h4>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                            {hoveredSkill.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/40">
                          {hoveredSkill.description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-8 text-center text-zinc-500 gap-2.5"
                      >
                        <HelpCircle className="w-7 h-7 text-zinc-700 animate-pulse" />
                        <span className="text-[11px] font-mono tracking-wide">
                          Hover over any skill block<br />to inspect deep telemetry
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Skill Radar Mini Visualizer */}
              <div className="border-t border-zinc-800/80 pt-6 mt-8">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>System Engine Health</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Optimal
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/40">
                    <div className="text-sm font-bold text-white">99%</div>
                    <div className="text-[8px] text-zinc-500 uppercase tracking-tighter mt-0.5">Integrity</div>
                  </div>
                  <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/40">
                    <div className="text-sm font-bold text-blue-400">0ms</div>
                    <div className="text-[8px] text-zinc-500 uppercase tracking-tighter mt-0.5">DB Delay</div>
                  </div>
                  <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/40">
                    <div className="text-sm font-bold text-purple-400">Clean</div>
                    <div className="text-[8px] text-zinc-500 uppercase tracking-tighter mt-0.5">Audit</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
