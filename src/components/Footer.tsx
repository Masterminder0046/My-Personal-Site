import { useEffect, useState } from 'react';
import { Terminal, Shield, Sparkles } from 'lucide-react';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Sheik's timezone is IST (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-gray-150 bg-white/60 py-12 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-gray-950 text-white flex items-center justify-center font-display font-black text-sm">
            SM
          </div>
          <div>
            <h4 className="font-display font-extrabold text-gray-900 text-sm">Sheik Mohamed</h4>
            <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-0.5">Full Stack Developer • Lab</p>
          </div>
        </div>

        {/* Local Clock */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-50 border border-gray-150/60 shadow-sm text-[11px] font-mono font-bold text-gray-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>Local Time (IST): {localTime || 'Calculating...'}</span>
        </div>

        {/* Right Info */}
        <div className="flex flex-col md:items-end text-xs text-gray-400 font-sans space-y-1">
          <div className="flex items-center gap-1.5 justify-center md:justify-end text-gray-500 font-medium">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span>Enterprise-Grade Portfolio System</span>
          </div>
          <p>© {new Date().getFullYear()} Sheik Mohamed. Engineered in India. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
