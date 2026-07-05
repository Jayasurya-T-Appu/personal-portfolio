import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = "", style }: CardProps) {
  return (
    <div 
      style={style}
      className={`bg-white rounded-2xl p-8 md:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/5 transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function TintedCard({ children, className = "", style, type = 'blue', shine = false }: CardProps & { type?: 'blue' | 'mint' | 'gray' | 'peach'; shine?: boolean }) {
  const tints = {
    blue: 'bg-[#F0F0F0]',
    mint: 'bg-[#E7E7E7]',
    gray: 'bg-[#EBEBEB]',
    peach: 'bg-[#E2E2E2]'
  };

  return (
    <div
      style={style}
      className={`group relative ${tints[type]} rounded-2xl p-8 md:p-16 border border-transparent ${shine ? 'transition-all duration-500 hover:-translate-y-2 hover:border-black/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]' : 'transition-transform duration-500 hover:-translate-y-1'} ${className}`}
    >
      {shine && (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
          <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-700 ease-out" />
        </div>
      )}
      {children}
    </div>
  );
}
