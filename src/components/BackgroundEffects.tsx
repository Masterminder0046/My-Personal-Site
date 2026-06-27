import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAFA]">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] bg-blue-400/8 rounded-full blur-[120px] animate-pulse [animation-duration:8s]" />
      <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[650px] bg-purple-400/8 rounded-full blur-[130px] animate-pulse [animation-duration:10s]" />
      <div className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] max-w-[500px] bg-cyan-400/5 rounded-full blur-[100px] animate-pulse [animation-duration:12s]" />

      {/* Floating Orbital particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/40"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, Math.random() * -40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Artistic Flair SVG Grain Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] contrast-125 mix-blend-overlay">
        <filter id="grainNoise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.7 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainNoise)" />
      </svg>
    </div>
  );
}
