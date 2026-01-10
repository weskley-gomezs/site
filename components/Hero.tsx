
import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDCore } from './ThreeDCore';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá! Vim pelo site Weskley Gomes e gostaria de um diagnóstico para aumentar as matrículas da minha escola.";

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left z-30 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-6 md:mb-8 mx-auto md:mx-0">
              <span className="w-2 h-2 bg-[#ff5a00] rounded-full animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Weskley Gomes • Estrategista de Conversão</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8 uppercase">
              Escolas com<br />
              <span className="text-[#ff5a00]">Matrículas</span><br />
              Lotadas.
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light max-w-xl mb-8 md:mb-12 leading-relaxed mx-auto md:mx-0">
              Minha engenharia constrói a estrutura técnica e estratégica para instituições de ensino que buscam escala real e eficiência na captação de novos alunos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.open(whatsappUrl, '_blank')}>
                Lotar minha escola
                <ChevronRight size={20} />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
                Minhas Soluções
              </Button>
            </div>
          </motion.div>

          {/* Visual Content - Globo Canvas 3D */}
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

      {/* Profundidade de Fundo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    </section>
  );
};
