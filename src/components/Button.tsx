import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, className = "", variant = 'primary', ...props }: ButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2";
  
  const variantClasses = variant === 'primary' 
    ? "bg-black text-white hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]" 
    : "bg-white text-black border border-black/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]";
    
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
