
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ShowcaseProps {
  onNavigate: (route: any) => void;
}

const Mockup: React.FC<{ imageUrl: string; title: string; tag: string; onClick: () => void; isExternal?: boolean }> = ({ imageUrl, title, tag, onClick, isExternal }) => (
  <button 
    onClick={onClick}
    className="group relative overflow-hidden bg-white/5 aspect-[4/3] sm:aspect-video border border-white/5 rounded-2xl md:rounded-3xl block w-full cursor-pointer transition-all duration-500 hover:border-[#ff5a00]/50 shadow-2xl"
  >
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex justify-between items-end">
        <div className="text-left">
           <span className="text-[#ff5a00] text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-1 md:mb-2 block">{tag}</span>
           <h4 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight">{title}</h4>
        </div>
        <div className="bg-[#ff5a00] p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-[0_0_20px_rgba(255,90,0,0.4)]">
           <ExternalLink size={20} className="text-black" />
        </div>
      </div>
    </div>
  </button>
);

export const Showcase: React.FC<ShowcaseProps> = ({ onNavigate }) => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20vi%20os%20cases%20e%20quero%20o%20Diagnóstico%20Gratuito%20para%20minha%20empresa.";
  const reacaoUrl = "https://colegioreacao.com";

  return (
    <section id="showcase" className="py-20 md:py-32 bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4">
              PROJETOS DE <span className="text-[#ff5a00]">GUERRA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Visualize a engenharia por trás de ecossistemas completos. Da interface de vendas ao core do ERP.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold tracking-widest text-[#ff5a00] uppercase mb-1">Architecture Showcase</p>
            <div className="h-1 w-24 bg-[#ff5a00] ml-auto"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <Mockup 
            imageUrl="https://i.imgur.com/aMoMRlq.png"
            title="Reação College Systems"
            tag="ERP / CRM / Performance"
            isExternal={true}
            onClick={() => window.open(reacaoUrl, '_blank', 'noopener,noreferrer')}
          />
        </div>

        <div className="flex flex-col items-center gap-8 bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-20 text-center">
          <h3 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter text-white">
            Sua empresa merece uma <br /><span className="text-[#ff5a00]">Estrutura de Elite.</span>
          </h3>
          <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
            FAZER DIAGNÓSTICO GRATUITO <ArrowRight size={22} strokeWidth={4} />
          </Button>
          <p className="text-gray-500 text-[10px] font-black tracking-[0.6em] uppercase">Avaliação Técnica de Alto Nível</p>
        </div>
      </div>
    </section>
  );
};
