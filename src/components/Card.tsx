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
      className={`bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/5 transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function TintedCard({ children, className = "", style, type = 'blue' }: CardProps & { type?: 'blue' | 'mint' | 'gray' | 'peach' }) {
  const tints = {
    blue: 'bg-[#E5F0FF]',
    mint: 'bg-[#E5F7ED]',
    gray: 'bg-[#EBEBEB]',
    peach: 'bg-[#FFEAE8]'
  };
  
  return (
    <div 
      style={style}
      className={`${tints[type]} rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-16 transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
