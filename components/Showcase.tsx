
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';

interface ShowcaseProps {
  onNavigate: (route: any) => void;
}

const Mockup: React.FC<{ imageUrl: string; title: string; tag: string; onClick: () => void }> = ({ imageUrl, title, tag, onClick }) => (
  <button 
    onClick={onClick}
    className="group relative overflow-hidden bg-white/5 aspect-[4/3] sm:aspect-video border border-white/5 rounded-2xl md:rounded-3xl block w-full cursor-pointer transition-all duration-500 hover:border-[#ff5a00]/50"
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
           <Search size={20} className="text-black" />
        </div>
      </div>
    </div>
    
    {/* Touch Indicator for Mobile */}
    <div className="absolute top-4 right-4 md:hidden">
       <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
          <Search size={14} className="text-white/50" />
       </div>
    </div>
  </button>
);

export const Showcase: React.FC<ShowcaseProps> = ({ onNavigate }) => {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4">
              CASE DE <span className="text-[#ff5a00]">ENGENHARIA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Visualização de um ecossistema completo: do site de alta conversão ao sistema de gestão interna (ERP).
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold tracking-widest text-[#ff5a00] uppercase mb-1">Architecture Case</p>
            <div className="h-1 w-24 bg-[#ff5a00] ml-auto"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Mockup 
            imageUrl="https://i.imgur.com/aMoMRlq.png"
            title="Sistemas Colégio Reação"
            tag="ERP / CRM / Performance"
            onClick={() => onNavigate('case-reacao')}
          />
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase italic px-4">
            Clique para visualizar como Weskley Gomes construiu o sistema de gestão técnica e o motor de leads do Colégio Reação.
          </p>
        </div>
      </div>
    </section>
  );
};
