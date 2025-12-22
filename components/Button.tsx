
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
  const baseStyles = "relative px-8 py-4 font-bold text-lg transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-[#ff5a00] text-white animate-pulse-glow hover:brightness-110",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-[#ff5a00] text-[#ff5a00] hover:bg-[#ff5a00] hover:text-white animate-pulse-glow-subtle"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Glossy Top Edge */}
      <span className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 z-20"></span>
      
      {/* Constant Infinite Shine Effect */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] animate-infinite-shine pointer-events-none z-10"></span>
      
      {/* Extra Hover Shine */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[25deg] transition-none group-hover:animate-[infinite-shine_1s_infinite] pointer-events-none z-10 opacity-0 group-hover:opacity-100"></span>
      
      <span className="relative z-20 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
