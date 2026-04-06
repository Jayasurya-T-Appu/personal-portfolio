"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setMounted(false), 800); 
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F2F2F2] transition-all duration-[1000ms] ease-in-out ${loading ? 'opacity-100 scale-100' : 'opacity-0 scale-[8] pointer-events-none'}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative text-[10rem] md:text-[14rem] font-black leading-none mb-4 select-none flex items-center justify-center">
          <span className="absolute text-transparent font-sans" style={{ WebkitTextStroke: '3px rgba(0,0,0,0.1)' }}>J</span>
          <span className="relative z-10 text-transparent bg-clip-text animate-fill-j font-sans">J</span>
        </div>
        
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-black animate-[fadeIn_0.8s_ease-out_1.2s_forwards] opacity-0 select-none">
          Jayasurya Appu
        </p>
      </div>
      
      <style jsx>{`
        .bg-clip-text {
          background-image: linear-gradient(to bottom, transparent 50%, #000 50%);
          background-size: 100% 200%;
          background-position: 0% 0%;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .animate-fill-j {
          animation: fillJ 1.6s cubic-bezier(0.65, 0, 0.35, 1) both;
        }
        @keyframes fillJ {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); tracking: 0.1em; }
          to { opacity: 1; transform: translateY(0); tracking: 0.4em; }
        }
      `}</style>
    </div>
  );
}
