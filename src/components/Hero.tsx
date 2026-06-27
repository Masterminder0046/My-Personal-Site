import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, ExternalLink, Terminal, Brain, Layers } from 'lucide-react';

export default function Hero() {
  const handleProjectsClick = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrambleWords = [
    "Full Stack Developer",
    "Python Django Developer",
    "Frontend Engineer",
    "React Specialist",
    "API Architect"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(scrambleWords[0]);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScrambling(true);
      let iteration = 0;
      const targetWord = scrambleWords[(currentWordIndex + 1) % scrambleWords.length];
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&%";
      
      const scrambleInterval = setInterval(() => {
        setDisplayText((prev) => 
          targetWord
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return targetWord[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= targetWord.length) {
          clearInterval(scrambleInterval);
          setIsScrambling(false);
          setCurrentWordIndex((prev) => (prev + 1) % scrambleWords.length);
        }
        iteration += 1 / 3;
      }, 30);

    }, 3500);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const techBadges = [
    { name: 'Python', color: 'from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-500/20' },
    { name: 'Django', color: 'from-emerald-500/10 to-green-500/10 text-emerald-700 border-emerald-500/20' },
    { name: 'Flask', color: 'from-gray-500/10 to-zinc-500/10 text-gray-700 border-gray-500/20' },
    { name: 'React.js', color: 'from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-500/20' },
    { name: 'MySQL', color: 'from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-500/20' },
    { name: 'Docker', color: 'from-blue-600/10 to-sky-500/10 text-blue-700 border-blue-600/20' },
    { name: 'REST API', color: 'from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-500/20' },
    { name: 'Git/GitHub', color: 'from-zinc-950/10 to-gray-800/10 text-zinc-900 border-zinc-950/20' }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Interactive Content Area */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-blue-600 text-xs font-semibold tracking-wide uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Available for Internships & Remote Freelance
          </motion.div>

          <div className="space-y-3">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm tracking-widest text-gray-500 uppercase font-medium"
            >
              Hi there, I am
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-gray-900"
            >
              SHEIK<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-glow">
                MOHAMED
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-10 flex items-center"
          >
            <span className="font-mono text-lg md:text-xl font-bold text-gray-700 border-r-2 border-blue-600 pr-1 py-0.5 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            I'm a self-driven Full Stack Developer who loves turning ideas into real, working web applications. I build everything from relational databases to high-fidelity responsive UI layouts.
          </motion.p>

          {/* Interactive CTA Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2 items-center"
          >
            <button
              onClick={handleProjectsClick}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-blue-600 text-white rounded-2xl font-display font-semibold text-sm shadow-xl shadow-gray-950/10 hover:shadow-blue-600/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 rounded-2xl font-display font-semibold text-sm shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Get In Touch
              <Mail className="w-4 h-4 text-purple-600" />
            </button>
          </motion.div>

          {/* Elegant Social Connect Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5 pt-4 text-gray-400"
          >
            <span className="font-mono text-xs text-gray-400 font-semibold tracking-wider uppercase">Connect:</span>
            <a 
              href="https://github.com/sheikmohamed0046" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all duration-300 hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:sheikmohamed0046@gmail.com" 
              className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Fluid Developer Workspace Area */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          {/* Moving Mesh Ambient Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60" />

          {/* Centered Code Workspace Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            whileHover={{ y: -6, rotate: 1 }}
            className="relative z-10 w-full max-w-md bg-zinc-950 text-zinc-300 rounded-[30px] shadow-2xl p-6 border border-zinc-800/80 font-mono text-xs overflow-hidden cursor-default select-none"
          >
            {/* Window controls */}
            <div className="flex justify-between items-center mb-5 border-b border-zinc-900 pb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-zinc-600 text-[10px] tracking-widest uppercase font-bold">sheik_workspace.py</span>
              <Terminal className="w-3.5 h-3.5 text-zinc-600" />
            </div>

            {/* Code structure */}
            <div className="space-y-2 text-left select-none">
              <div className="text-zinc-500"># Interactive Developer Workspace</div>
              <div>
                <span className="text-purple-400">class</span> <span className="text-blue-400">Developer</span>:
              </div>
              <div className="pl-4">
                <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>):
              </div>
              <div className="pl-8">
                <span className="text-orange-300">self</span>.name = <span className="text-emerald-400">"Sheik Mohamed"</span>
              </div>
              <div className="pl-8">
                <span className="text-orange-300">self</span>.stack = [<span className="text-emerald-400">"Django"</span>, <span className="text-emerald-400">"Flask"</span>, <span className="text-emerald-400">"React"</span>]
              </div>
              <div className="pl-8">
                <span className="text-orange-300">self</span>.ai_powered = <span className="text-purple-400">True</span>
              </div>
              <div className="pl-8">
                <span className="text-orange-300">self</span>.database_accuracy = <span className="text-cyan-400">"99.9%"</span>
              </div>
              
              <div className="pl-4 mt-2">
                <span className="text-purple-400">def</span> <span className="text-blue-400">build_future</span>(<span className="text-orange-300">self</span>, <span className="text-orange-300">idea</span>):
              </div>
              <div className="pl-8">
                <span className="text-purple-400">return</span> <span className="text-orange-300">self</span>.compile(idea).deploy()
              </div>

              <div className="text-zinc-500 mt-4"># Status Check Output</div>
              <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/50 flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>&gt; Synapse SaaS online (Port 3000)</span>
                </div>
                <div className="text-zinc-400">&gt; Python Server loaded successfully</div>
                <div className="text-cyan-400">&gt; React UI connected (0ms key latency)</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-1/4 -right-4 z-20 w-28 h-28 bg-white backdrop-blur-md rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 border border-white/80"
          >
            <div className="p-2 rounded-full bg-blue-50 mb-1">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xs font-bold text-gray-800">AI Integrator</div>
            <div className="text-[9px] uppercase font-bold text-gray-400 tracking-tighter">GenAI & Synapse</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-1/4 -left-6 z-20 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-2xl shadow-purple-500/20 flex flex-col items-center justify-center p-4"
          >
            <Layers className="w-6 h-6 text-white mb-1" />
            <div className="text-white font-black text-lg leading-tight">CGPA 7.9</div>
            <div className="text-[9px] text-purple-100 uppercase font-medium tracking-wide">Computer Science</div>
          </motion.div>

          {/* Orbital Tech Badges Floating Around */}
          <div className="absolute top-6 left-6 p-2.5 bg-white shadow-md rounded-xl border border-gray-100/60 font-mono text-xs font-semibold text-blue-600 flex items-center gap-1.5 animate-bounce">
            🐍 Python
          </div>
          <div className="absolute bottom-6 right-6 p-2.5 bg-white shadow-md rounded-xl border border-gray-100/60 font-mono text-xs font-semibold text-emerald-700 flex items-center gap-1.5 animate-pulse">
            ⚡ Django
          </div>
          <div className="absolute top-0 right-1/4 p-2.5 bg-white shadow-md rounded-xl border border-gray-100/60 font-mono text-xs font-semibold text-cyan-500 flex items-center gap-1.5 animate-bounce [animation-delay:0.5s]">
            ⚛️ React
          </div>
        </div>

      </div>

      {/* Decorative down-indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => {
        const next = document.getElementById('about');
        if (next) next.scrollIntoView({ behavior: 'smooth' });
      }}>
        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400">Explore Studio</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
