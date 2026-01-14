
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseStyles = "relative px-10 py-5 font-bold text-lg transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-3 uppercase tracking-[0.2em] rounded-full overflow-hidden group shadow-2xl";
  
  const variants = {
    primary: "bg-[#ff5a00] text-black hover:brightness-110 cta-glow",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border border-[#ff5a00]/50 text-[#ff5a00] hover:bg-[#ff5a00] hover:text-black transition-all duration-500"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Glossy Overlay for depth */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></span>
      
      {/* Infinite Shine Effect */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[30deg] animate-infinite-shine pointer-events-none z-10"></span>
      
      <span className="relative z-20 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </button>
  );
};
