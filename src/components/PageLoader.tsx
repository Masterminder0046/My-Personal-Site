import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Cpu } from 'lucide-react';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const keywords = [
    "Compiling Python Runtime...",
    "Instantiating Django MVC Models...",
    "Loading React.js Client State...",
    "Securing Relational Schemas...",
    "Deploying Container Clusters...",
    "System Ready."
  ];

  useEffect(() => {
    // Increment loading count progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cycle loading narrative descriptions
    const wordTimer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % keywords.length);
    }, 800);

    return () => clearInterval(wordTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gray-950 flex flex-col items-center justify-center p-6 text-white cursor-none select-none"
        >
          {/* Subtle moving noise context behind */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.12),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.12),transparent_40%)]" />

          <div className="w-full max-w-sm space-y-8 text-center z-10">
            {/* Spinning icon crown */}
            <div className="flex justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="p-4 rounded-3xl bg-white/5 border border-white/10 text-blue-500 shadow-xl flex items-center justify-center"
              >
                <Cpu className="w-8 h-8" />
              </motion.div>
            </div>

            {/* Counter percentage */}
            <div className="space-y-2">
              <h1 className="font-display text-6xl font-black tracking-tighter text-glow">
                {progress}%
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Synchronizing Development Core
              </p>
            </div>

            {/* Micro progress line */}
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Scrolling narrative */}
            <div className="h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs text-blue-400 font-medium"
                >
                  {keywords[activeWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-8 text-zinc-600 font-mono text-[9px] tracking-widest uppercase font-bold">
            SM Portfolio Lab • Production Build
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
