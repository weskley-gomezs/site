
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  pulse = false
}) => {
  const baseStyles = "relative px-12 py-6 font-black text-[13px] md:text-sm transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-4 uppercase tracking-[0.25em] rounded-full overflow-hidden group border transition-all cursor-pointer";
  
  const variants = {
    primary: "bg-[#ff5a00] border-[#ff5a00] text-black shadow-[0_15px_35px_rgba(255,90,0,0.2)] hover:shadow-[0_25px_50px_rgba(255,90,0,0.5)]",
    secondary: "bg-white border-white text-black shadow-[0_15px_35px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.2)]",
    outline: "bg-transparent border-white/30 text-white hover:border-[#ff5a00] hover:text-[#ff5a00] backdrop-blur-md",
    ghost: "bg-transparent border-transparent text-gray-400 hover:text-white"
  };

  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Subtle Idle Pulse for Primary */}
      {variant === 'primary' && (
        <motion.span 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-white rounded-full pointer-events-none"
        />
      )}

      {/* Glossy Overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
      
      {/* Scanner Effect - Improved speed and softness */}
      <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[35deg] group-hover:left-[150%] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none z-10"></span>
      
      {/* Internal Core Background */}
      <span className="absolute inset-[1px] bg-inherit rounded-full z-0 opacity-100"></span>

      <span className="relative z-20 flex items-center gap-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
        {children}
      </span>

      {/* Hover Ripple/Glow Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-[300%] group-hover:h-[300%] transition-all duration-1000 ease-out pointer-events-none opacity-0 group-hover:opacity-100"></span>
    </motion.button>
  );
};
