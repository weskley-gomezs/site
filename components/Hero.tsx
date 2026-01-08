
import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDCore } from './ThreeDCore';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá! Vim pelo site e gostaria de um diagnóstico estratégico para o meu projeto.";

  return (
    <section className="relative pt-40 pb-20 md:pt-64 md:pb-60 overflow-visible bg-[#0a0a0a]">
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Conteúdo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left z-30"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-8">
              <span className="w-2 h-2 bg-[#ff5a00] rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Ativos Digitais Autônomos</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter mb-8 uppercase">
              NX Company<br />
              <span className="text-[#ff5a00]">High Speed</span><br />
              Performance.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0">
              Engenharia de software e design de conversão para empresas que operam em escala global.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
                Validar meu projeto
                <ChevronRight size={20} />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
                Showcase
              </Button>
            </div>
          </motion.div>

          {/* Coluna Direita: O Globo NX Cinético */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-[500px] md:h-[600px] flex items-center justify-center relative pointer-events-none"
          >
            <ThreeDCore />
          </motion.div>
        </div>
      </div>

      {/* Camada de Profundidade */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
};
