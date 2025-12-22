
import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá,%20vim%20pelo%20site%20da%20NX%20Company%20e%20gostaria%20de%20validar%20meu%20projeto.";
  const founderPhoto = "https://i.imgur.com/GikBazQ.png";

  return (
    <section className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden bg-[#0a0a0a]">
      {/* Elementos de Background Globais */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff5a00]/5 blur-[120px] -z-10 rounded-full translate-x-1/4"></div>
      
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

          {/* Coluna Direita: Foto do Fundador com Artes Brancas no Background */}
          <div className="hidden lg:flex justify-end items-center relative">
            <div className="relative w-full max-w-[550px] aspect-[4/5] flex items-end">
              
              {/* --- ARTES BRANCAS NO BACKGROUND (ATRAS DA FOTO) --- */}
              <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
                {/* Círculo Técnico */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/[0.03] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/[0.05] rounded-full"></div>
                
                {/* Linhas Arquitetônicas / Grid */}
                <div className="absolute top-0 right-0 w-full h-full">
                   <svg width="100%" height="100%" className="opacity-10">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Linhas Diagonais Tech */}
                <div className="absolute -top-10 -right-20 w-64 h-[1px] bg-gradient-to-l from-white/20 to-transparent rotate-45"></div>
                <div className="absolute -bottom-10 -left-20 w-96 h-[1px] bg-gradient-to-r from-white/10 to-transparent -rotate-12"></div>
                
                {/* Pontos de Interseção (Nodes) */}
                <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white/40 rounded-full shadow-[0_0_10px_white]"></div>
                <div className="absolute top-[40%] right-[-5%] w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-1.5 h-1.5 bg-white/30 rounded-full"></div>
              </div>
              {/* -------------------------------------------------- */}

              {/* Container da Foto */}
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={founderPhoto} 
                  alt="Founder NX Company" 
                  className="w-full h-full object-cover object-center relative z-10"
                />
                
                {/* Efeito de Fumaça (Smoke) */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none"></div>
                
                {/* Texto de Identificação Sutil na Fumaça */}
                <div className="absolute bottom-12 left-0 z-30">
                  <div className="flex flex-col">
                    <span className="text-white font-display font-black text-3xl uppercase tracking-tighter leading-none">DIRETORIA ESTRATÉGICA</span>
                    <span className="text-[#ff5a00] text-sm font-bold tracking-[0.4em] uppercase mt-2">NX Company Specialist</span>
                  </div>
                </div>
              </div>

              {/* Badge de Status Online */}
              <div className="absolute top-10 right-0 bg-black/60 border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3 backdrop-blur-md z-30">
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
    </section>
  );
};
