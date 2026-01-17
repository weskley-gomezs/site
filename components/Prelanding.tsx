
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, ArrowRight, Play } from 'lucide-react';

interface PrelandingProps {
  onEnter: () => void;
}

export const Prelanding: React.FC<PrelandingProps> = ({ onEnter }) => {
  const socials = {
    instagram: "https://www.instagram.com/weskley_gomezs/",
    youtube: "https://www.youtube.com/@Weskleygomezs"
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      {/* Left Side: Education/Socials */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 min-h-[45vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center p-6 sm:p-10 md:p-20 relative group shrink-0"
      >
        <div className="absolute inset-0 bg-[#ff5a00]/[0.02] md:bg-[#ff5a00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 text-center space-y-4 md:space-y-8 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-2">
            <Play size={10} className="text-[#ff5a00] fill-[#ff5a00]" />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">Ambiente de Educação</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">
            ACESSE CONTEÚDOS <br />
            <span className="text-[#ff5a00]">VALIOSOS.</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-xl font-light leading-relaxed">
            Aprenda os bastidores da estrutura que gera lucro real antes de tomar sua decisão.
          </p>
          
          <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-6 justify-center items-center pt-4 md:pt-8">
            <a 
              href={socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center gap-3 p-4 md:p-0 bg-white/5 md:bg-transparent border border-white/10 md:border-0 rounded-2xl text-white hover:text-[#ff5a00] transition-colors group/link"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/link:border-[#ff5a00]">
                <Youtube size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">YouTube</span>
            </a>
            
            <a 
              href={socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center gap-3 p-4 md:p-0 bg-white/5 md:bg-transparent border border-white/10 md:border-0 rounded-2xl text-white hover:text-[#ff5a00] transition-colors group/link"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/link:border-[#ff5a00]">
                <Instagram size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Action/Conversion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 min-h-[55vh] md:h-full flex flex-col items-center justify-center p-6 sm:p-10 md:p-20 relative bg-[#0a0a0a] shrink-0"
      >
        <div className="absolute inset-0 bg-white/[0.01] md:bg-white/[0.02] opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 text-center space-y-6 md:space-y-12 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff5a00]/10 border border-[#ff5a00]/20 rounded-full mb-2">
            <div className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full animate-pulse"></div>
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-[#ff5a00]">Business Transformation</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">
            MUDE A HISTÓRIA <br />
            DO SEU <span className="underline decoration-[#ff5a00] decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">NEGÓCIO.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-xl font-light leading-relaxed">
            Descubra como estruturar sua escala através do Método LTV e engenharia de processos.
          </p>

          <motion.button 
            onClick={onEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-4 bg-[#ff5a00] text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] px-8 py-6 md:px-12 md:py-8 rounded-full shadow-[0_20px_60px_rgba(255,90,0,0.3)] text-xs md:text-base w-full transition-all"
          >
            VER ESTRUTURA AGORA
            <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>

          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-600">
            Acesso ao Core Estratégico
          </p>
        </div>
      </motion.div>

      {/* Floating Center Badge - Mobile Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-14 h-14 md:w-24 md:h-24 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md">
          <span className="font-display font-black text-[8px] md:text-xs text-white uppercase tracking-tighter">
            WG <span className="text-[#ff5a00]">CORE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
