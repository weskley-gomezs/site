
import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá,%20vim%20pelo%20site%20da%20NX%20Company%20e%20gostaria%20de%20validar%20meu%20projeto.";
  const heroImageUrl = "https://i.imgur.com/YY9xb6W.jpeg";

  return (
    <section className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden bg-[#0a0a0a]">
      {/* Elementos de Background Globais - Removido o glow laranja forte */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] blur-[120px] -z-10 rounded-full translate-x-1/4"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Conteúdo */}
          <div className="text-center md:text-left animate-fade-in z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-8">
              <span className="w-2 h-2 bg-[#ff5a00] rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Próximo nível em ativos digitais</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter mb-8 uppercase">
              NX Company<br />
              <span className="text-[#ff5a00]">Ativos digitais</span> que vendem e escalam.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0">
              Sites, landing pages, SaaS e tráfego pago pensados para conversão e crescimento real. Nós não criamos sites, construímos infraestruturas de lucro.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
                Quero validar meu projeto
                <ChevronRight size={20} />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
                Conhecer serviços
              </Button>
            </div>
          </div>

          {/* Coluna Direita: Imagem e Elementos Tech */}
          <div className="hidden lg:flex justify-end items-center relative">
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Elementos Técnicos / Grid de fundo */}
              <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/[0.05] rounded-full border-dashed"
                />
                
                {/* Grid Visual */}
                <div className="absolute top-0 right-0 w-full h-full">
                   <svg width="100%" height="100%" className="opacity-10">
                    <defs>
                      <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-hero)" />
                  </svg>
                </div>
              </div>

              {/* --- IMAGEM PRINCIPAL --- */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-[2rem] border border-white/10"
              >
                {/* Efeito de Sombra sutil atrás da imagem */}
                <div className="absolute w-[80%] h-[80%] bg-white/[0.03] blur-[100px] rounded-full"></div>
                
                <img 
                  src={heroImageUrl} 
                  alt="NX Company Founder" 
                  className="relative z-20 w-full h-full object-cover select-none pointer-events-none"
                />
                
                {/* Overlay para mesclar a imagem com o ambiente escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-25"></div>
              </motion.div>

              {/* Status Online Badge */}
              <div className="absolute top-10 right-0 bg-black/60 border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3 backdrop-blur-md z-30 shadow-2xl">
                <div className="relative flex">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Disponível agora</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FUMAÇA PRETA EM BAIXO --- */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-20">
        {/* Camada principal de fumaça (gradiente denso) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        {/* Partículas de fumaça animadas para realismo */}
        <motion.div 
          animate={{ 
            x: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/4 w-[600px] h-[300px] bg-black blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [30, -30, 30],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 right-1/4 w-[500px] h-[250px] bg-black blur-[120px] rounded-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-black"></div>
      </div>
    </section>
  );
};
