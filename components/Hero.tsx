
import React from 'react';
import { Button } from './Button';
import { ArrowRight, ShieldCheck, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDCore } from './ThreeDCore';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20quero%20o%20Diagnóstico%20Gratuito%20para%20minha%20estrutura%20digital.";

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-52 overflow-hidden bg-white">
      {/* Engineering Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="black" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[55%] text-center md:text-left z-30 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 border border-black/10 rounded-full bg-gray-50 mb-10 md:mb-14 mx-auto md:mx-0 shadow-sm">
              <ShieldCheck size={14} className="text-[#ff5a00]" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-black/70">ARQUITETURA DE RELACIONAMENTO & ESCALA</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display leading-[0.9] md:leading-[0.8] tracking-tighter mb-10 md:mb-12 uppercase text-black">
              ESTRUTURA <br />
              <span className="text-[#ff5a00]">SOBERANA.</span> <br />
              LUCRO REAL.
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium max-w-xl mb-12 md:mb-16 leading-relaxed mx-auto md:mx-0">
              Parem de depender da sorte no tráfego. Eu projeto a <span className="text-black font-black italic">infraestrutura digital</span> que transforma leads em faturamento recorrente através de processos de elite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start items-center">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto px-16 py-8 md:text-lg shadow-[0_20px_50px_rgba(255,90,0,0.3)]" 
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                FAZER DIAGNÓSTICO GRATUITO
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight size={24} strokeWidth={4} />
                </motion.span>
              </Button>
              
              <div className="hidden lg:flex items-center gap-3">
                 <div className="w-12 h-px bg-black/20"></div>
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Engineering the 1%</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-[45%] h-[400px] md:h-[700px] flex items-center justify-center relative order-1 md:order-2"
          >
            <ThreeDCore />
            <div className="absolute -bottom-10 right-0 bg-white border border-black/5 p-6 rounded-3xl shadow-2xl hidden md:flex items-center gap-6 z-40">
               <div className="bg-[#ff5a00]/10 p-4 rounded-2xl">
                 <Database className="text-[#ff5a00]" size={28} />
               </div>
               <div>
                 <span className="block text-2xl font-black text-black leading-none">+300k</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Dados Processados</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transitional Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050505]"></div>
    </section>
  );
};
