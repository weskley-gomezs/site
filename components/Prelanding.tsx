
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, ArrowRight, Play, ExternalLink } from 'lucide-react';

interface PrelandingProps {
  onEnter: () => void;
}

export const Prelanding: React.FC<PrelandingProps> = ({ onEnter }) => {
  const socials = {
    instagram: "https://www.instagram.com/weskley_gomezs/",
    youtube: "https://www.youtube.com/@Weskleygomezs"
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Education/Socials */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center p-8 md:p-20 relative group"
      >
        <div className="absolute inset-0 bg-[#ff5a00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <Play size={12} className="text-[#ff5a00] fill-[#ff5a00]" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">Ambiente de Educação</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">
            ACESSE CONTEÚDOS <br />
            <span className="text-[#ff5a00]">VALIOSOS.</span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-sm mx-auto">
            Aprenda os bastidores da estrutura que gera lucro real antes de tomar sua decisão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href={socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-[#ff5a00] transition-colors group/link"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/link:border-[#ff5a00]">
                <Youtube size={24} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">YouTube</span>
            </a>
            
            <a 
              href={socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-[#ff5a00] transition-colors group/link"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/link:border-[#ff5a00]">
                <Instagram size={24} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Instagram</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Action/Conversion */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center p-8 md:p-20 relative bg-[#0a0a0a]"
      >
        <div className="absolute inset-0 bg-white/[0.02] opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ff5a00]/10 border border-[#ff5a00]/20 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#ff5a00] rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#ff5a00]">Business Transformation</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">
            MUDE A HISTÓRIA <br />
            DO SEU <span className="underline decoration-[#ff5a00] decoration-4 underline-offset-8">NEGÓCIO.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light max-w-sm mx-auto">
            Descubra como estruturar sua escala através do Método LTV e engenharia de processos.
          </p>

          <motion.button 
            onClick={onEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-6 bg-[#ff5a00] text-black font-black uppercase tracking-[0.3em] px-12 py-8 rounded-full shadow-[0_20px_60px_rgba(255,90,0,0.3)] text-sm md:text-base w-full max-w-md mx-auto"
          >
            VER ESTRUTURA AGORA
            <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>

          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-600">
            Acesso ao Core Estratégico
          </p>
        </div>
      </motion.div>

      {/* Floating Center Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
        <div className="w-24 h-24 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-2xl">
          <span className="font-display font-black text-xs text-white uppercase tracking-tighter">
            WG <span className="text-[#ff5a00]">CORE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
