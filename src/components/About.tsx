import { motion } from 'motion/react';
import { BookOpen, Award, Users, Compass, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "4+", label: "Completed Web Apps" },
    { value: "7.9", label: "Engineering CGPA" },
    { value: "1st", label: "Logo Design Award" },
    { value: "100%", label: "Responsive Delivery" }
  ];

  const languages = [
    { name: "English", level: "Professional", score: 85 },
    { name: "Tamil", level: "Native", score: 100 },
    { name: "Urdu", level: "Conversational", score: 75 },
    { name: "Hindi", level: "Basic", score: 40 }
  ];

  const achievements = [
    "1st Prize - Inter-College Logo Design Competition",
    "Multiple prizes in paper presentations & college tech fests",
    "Led content and graphics design for college-wide tech events"
  ];

  const softSkills = [
    { name: "Creative Problem Solving", percent: "100%" },
    { name: "Communication & Collaboration", percent: "90%" },
    { name: "Time Management", percent: "90%" },
    { name: "Adaptability & Growth", percent: "90%" },
    { name: "Multitasking", percent: "75%" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/40">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">01 / Storytelling</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              The Blueprint of My Journey
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Bridging raw computational logic with elegant user mechanics. Empowering teams with clean Python backends and fluid React.js frontends.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left Box) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-8 md:p-10 rounded-[32px] glass-card relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />
              
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-600" /> My Core Narrative
              </h3>
              
              <div className="space-y-4 font-sans text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  I'm a self-driven <strong>Full Stack Developer</strong> specializing in Python, Django, Flask, and React.js. I love turning abstract ideas into robust, deployed products. To me, a database schema is just as artistic as a micro-interaction on a web page.
                </p>
                <p>
                  I write secure code, architect high-performance REST APIs, and care deeply about intuitive layout flows. My workflow centers on modern development systems, Git version control, and integrating AI to streamline task allocations (as seen in my SaaS work).
                </p>
                <p>
                  Whether working on complex system ticketing or cooperative enterprise tools, my mission remains: build clean, maintainable systems that scale seamlessly under heavy load.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                {stats.map((s, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-display">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements & Soft Traits Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Creative Trophies */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-8 rounded-[30px] bg-gradient-to-br from-zinc-900 to-zinc-950 text-white text-left relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
                
                <h4 className="font-display text-lg font-bold flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-purple-400" /> Creative Honors
                </h4>
                
                <ul className="space-y-3 font-sans text-xs text-zinc-300 leading-relaxed">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Soft Skill Metrics */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-8 rounded-[30px] glass-card text-left"
              >
                <h4 className="font-display text-lg font-bold flex items-center gap-2 mb-4 text-gray-900">
                  <Zap className="w-4 h-4 text-cyan-500" /> Soft Attributes
                </h4>
                
                <div className="space-y-3">
                  {softSkills.map((sk, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-gray-700">
                        <span>{sk.name}</span>
                        <span className="text-blue-600">{sk.percent}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: sk.percent }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Education & Languages (Right Box) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Timeline */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-8 rounded-[32px] glass-card text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
              
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" /> Education
              </h3>

              <div className="space-y-6 relative border-l border-gray-100 pl-4 ml-2">
                
                {/* College */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                  <span className="text-[10px] font-mono font-bold text-blue-600 tracking-wider block">2022 - 2026</span>
                  <h4 className="font-display font-bold text-gray-900 text-sm mt-0.5">B.E. Computer Science & Engineering</h4>
                  <p className="text-xs text-gray-500 mt-1">St. Anne's College of Engineering and Technology (Anna University), Panruti</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-[10px] font-bold border border-blue-100">
                    CGPA: 7.9
                  </span>
                </div>

                {/* HSC */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full bg-purple-500 border-2 border-white shadow-sm" />
                  <span className="text-[10px] font-mono font-bold text-purple-500 tracking-wider block">2021 - 2022</span>
                  <h4 className="font-display font-bold text-gray-900 text-sm mt-0.5">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-xs text-gray-500 mt-1">Bonne Nehru Higher Secondary School, Villupuram</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-purple-50 text-purple-700 font-mono text-[10px] font-bold border border-purple-100">
                    HSC: 69%
                  </span>
                </div>

                {/* SSLC */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full bg-cyan-500 border-2 border-white shadow-sm" />
                  <span className="text-[10px] font-mono font-bold text-cyan-500 tracking-wider block">2019 - 2020</span>
                  <h4 className="font-display font-bold text-gray-900 text-sm mt-0.5">Secondary School Leaving Certificate</h4>
                  <p className="text-xs text-gray-500 mt-1">Bonne Nehru Higher Secondary School, Villupuram</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-700 font-mono text-[10px] font-bold border border-cyan-100">
                    SSLC: 63%
                  </span>
                </div>

              </div>
            </motion.div>

            {/* Language Proficiencies */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-8 rounded-[32px] glass-card text-left"
            >
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-500" /> Language Hub
              </h3>

              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-2xl bg-gray-50/50 border border-gray-100/40">
                    <div>
                      <h4 className="font-display font-bold text-gray-800 text-sm">{l.name}</h4>
                      <p className="text-[10px] text-gray-400 tracking-wider font-mono uppercase mt-0.5">{l.level}</p>
                    </div>
                    {/* Circle Score visualization */}
                    <div className="relative w-9 h-9 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
                        <motion.circle 
                          cx="18" cy="18" r="14" fill="none" 
                          stroke="url(#langGrad)" 
                          strokeWidth="2.5" 
                          strokeDasharray={88}
                          strokeDashoffset={88 - (88 * l.score) / 100}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                        <defs>
                          <linearGradient id="langGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563EB" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="font-mono text-[9px] font-bold text-gray-700">{l.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
