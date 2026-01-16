
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDCore } from './ThreeDCore';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20quero%20o%20Diagnóstico%20Gratuito.%20Minha%20estrutura%20atual%20não%20está%20gerando%20LTV.";

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-4">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left z-30 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 border border-[#ff5a00]/40 rounded-full bg-[#ff5a00]/10 mb-8 md:mb-12 mx-auto md:mx-0">
              <Zap size={14} className="text-[#ff5a00] fill-[#ff5a00]" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-[#ff5a00]">Quem educa, retém. Quem retém, cresce.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-10 uppercase">
              ESTRUTURA QUE<br />
              <span className="text-[#ff5a00]">ESCALA</span> SEU<br />
              NEGÓCIO.
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl mb-12 md:mb-16 leading-relaxed mx-auto md:mx-0">
              Eu não ajudo empresas a vender mais uma vez. Eu construo o <span className="text-white font-bold italic">Core de LTV</span> que faz o mesmo cliente comprar de você para sempre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start items-center">
              <Button variant="primary" className="w-full sm:w-auto shadow-[0_0_50px_rgba(255,90,0,0.35)]" onClick={() => window.open(whatsappUrl, '_blank')}>
                FAZER DIAGNÓSTICO GRATUITO
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <ArrowRight size={22} strokeWidth={4} />
                </motion.span>
              </Button>
            </div>

            <div className="mt-20 flex items-center gap-10 justify-center md:justify-start grayscale opacity-40">
               <div className="flex flex-col">
                  <span className="text-3xl font-black font-display text-white">LEADS</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">São Vaidade</span>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-black font-display text-[#ff5a00]">LTV</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">É Lucro Real</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 h-[400px] md:h-[700px] flex items-center justify-center relative order-1 md:order-2"
          >
            <ThreeDCore />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
