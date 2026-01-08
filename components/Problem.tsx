
import React from 'react';
import { AlertCircle, TrendingDown, Target, Zap } from 'lucide-react';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-6 md:p-8 glass-card border border-white/5 hover:border-[#ff5a00]/30 transition-all group rounded-2xl md:rounded-3xl relative overflow-hidden">
    <div className="text-[#ff5a00] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold font-display mb-3 md:mb-4 uppercase relative z-10 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10 font-light">{text}</p>
    
    {/* Subtle inner glow on hover */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#ff5a00]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:sticky lg:top-40">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#ff5a00]/20 rounded-full bg-[#ff5a00]/5 mb-6">
              <Zap size={14} className="text-[#ff5a00]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5a00]">Realidade do Mercado</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8">
              O digital não é <br />mais sobre <span className="text-[#ff5a00]">beleza.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
              Design sem estratégia é apenas <span className="text-white font-medium">arte cara</span>. Se o seu projeto não converte visitantes em clientes, você não tem um ativo, você tem uma despesa.
            </p>
            <div className="mt-8 md:mt-10 h-1 w-16 md:w-24 bg-[#ff5a00]/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
            <ProblemCard 
              icon={<TrendingDown size={28} md:size={32} />}
              title="Vazamento de Leads"
              text="Sites lentos e confusos fazem você perder 70% da sua audiência no primeiro segundo."
            />
            <ProblemCard 
              icon={<Target size={28} md:size={32} />}
              title="Tráfego Queimado"
              text="Investir em anúncios sem uma página de alta conversão é como tentar encher um balde furado."
            />
            <ProblemCard 
              icon={<AlertCircle size={28} md:size={32} />}
              title="Amadorismo Técnico"
              text="Plataformas genéricas que limitam sua escala e travam na hora do seu maior volume de vendas."
            />
            <ProblemCard 
              icon={<Zap size={28} md:size={32} />}
              title="Silêncio Comercial"
              text="Sua empresa online mas o telefone não toca. Falta persuasão técnica e foco no cliente ideal."
            />
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mt-20 md:mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-gray-400 mb-4 md:mb-6 italic">
            "A NX Company não entrega 'presença digital'. Entregamos..."
          </p>
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tighter">
            Vantagem <span className="text-[#ff5a00]">Competitiva</span> Através da Engenharia.
          </h4>
        </div>
      </div>
    </section>
  );
};
