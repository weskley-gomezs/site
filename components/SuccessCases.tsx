
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SuccessCasesProps {
  onNavigate: (route: any) => void;
}

export const SuccessCases: React.FC<SuccessCasesProps> = ({ onNavigate }) => {
  const logoUrl = 'https://i.imgur.com/LESvkxT.png';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('case-reacao');
  };

  return (
    <section className="py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/3">
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-[#ff5a00] mb-4 block">
              Performance Técnica
            </p>
            <h3 className="text-3xl font-bold font-display uppercase tracking-tight text-white leading-tight">
              Sistemas que operam em <br /><span className="text-gray-500 italic">escala máxima.</span>
            </h3>
          </div>

          <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-16 md:gap-24">
            <motion.button 
              onClick={handleClick}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ y: -5, opacity: 1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center gap-6"
            >
              <img 
                src={logoUrl} 
                alt="Colégio Reação" 
                className="h-16 md:h-24 w-auto object-contain transition-all duration-700" 
              />
              <div className="flex items-center gap-4 bg-white/10 border-2 border-white/20 px-8 py-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.3em] text-white">Ver Arquitetura</span>
                <ArrowUpRight size={16} className="text-[#ff5a00]" strokeWidth={3} />
              </div>
            </motion.button>

            <div className="opacity-10 grayscale border-l border-white/10 pl-12 h-20 flex items-center">
              <span className="text-2xl font-black font-display uppercase tracking-widest text-white">SaaS Tech</span>
            </div>
            <div className="opacity-10 grayscale border-l border-white/10 pl-12 h-20 flex items-center hidden sm:flex">
              <span className="text-2xl font-black font-display uppercase tracking-widest text-white">Scale Up</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
