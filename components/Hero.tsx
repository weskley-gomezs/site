
import React from 'react';
import { Button } from './Button';
import { ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDCore } from './ThreeDCore';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20da%20minha%20arquitetura%20digital.";

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left z-30 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 border border-white/10 rounded-full bg-white/5 mb-8 md:mb-12 mx-auto md:mx-0">
              <span className="w-2 h-2 bg-[#ff5a00] rounded-full animate-pulse shadow-[0_0_10px_#ff5a00]"></span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-400">Infraestrutura & Arquitetura de Negócios</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10 uppercase">
              O CORE<br />
              <span className="text-[#ff5a00]">DIGITAL</span> DO SEU<br />
              NEGÓCIO.
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-500 font-light max-w-xl mb-12 md:mb-16 leading-relaxed mx-auto md:mx-0">
              Engenharia de alta fidelidade para empresas de elite. Construímos o esqueleto técnico que suporta escala massiva sem gerar gargalos operacionais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start items-center">
              <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.open(whatsappUrl, '_blank')}>
                Solicitar Arquitetura
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} strokeWidth={3} />
                </motion.span>
              </Button>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-4 text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white hover:text-[#ff5a00] transition-all relative py-2"
              >
                Ver Ecossistemas
                <div className="relative overflow-hidden w-8 group-hover:w-12 h-px transition-all">
                  <div className="absolute inset-0 bg-white/30"></div>
                  <motion.div 
                    initial={{ x: -50 }}
                    animate={{ x: 50 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent"
                  />
                </div>
              </button>
            </div>

            <div className="mt-20 flex items-center gap-8 opacity-30 justify-center md:justify-start">
              <div className="flex items-center gap-2 group cursor-default">
                <ShieldCheck size={16} className="group-hover:text-[#ff5a00] transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Sistemas Soberanos</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <ChevronRight size={16} className="rotate-90 group-hover:text-[#ff5a00] transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Escala Determinística</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - 3D Globe Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center relative pointer-events-none order-1 md:order-2"
          >
            <div className="w-full h-full relative flex items-center justify-center overflow-visible">
              <ThreeDCore />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
