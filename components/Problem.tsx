
import React from 'react';
import { AlertCircle, TrendingDown, Target, Zap, Users, Settings } from 'lucide-react';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-6 md:p-8 glass-card border border-white/5 hover:border-[#ff5a00]/30 transition-all group rounded-2xl md:rounded-3xl relative overflow-hidden">
    <div className="text-[#ff5a00] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold font-display mb-3 md:mb-4 uppercase relative z-10 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10 font-light">{text}</p>
    
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
              <Settings size={14} className="text-[#ff5a00]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5a00]">Fricção Operacional</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tighter leading-[1] md:leading(0.85] mb-6 md:mb-8">
              O Caos Operacional <br />custa <span className="text-[#ff5a00]">caro.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
              Planilhas soltas e processos manuais são os maiores inimigos do lucro. Se o seu negócio não possui um <span className="text-white font-medium">sistema centralizado</span>, você está deixando dinheiro na mesa e perdendo leads por falta de gestão.
            </p>
            <div className="mt-8 md:mt-10 h-1 w-16 md:w-24 bg-[#ff5a00]/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
            <ProblemCard 
              icon={<TrendingDown size={32} />}
              title="Leads sem Resposta"
              text="Contatos que esfriam por falta de automação e rapidez no primeiro atendimento comercial."
            />
            <ProblemCard 
              icon={<Settings size={32} />}
              title="Gestão Manual"
              text="Dependência de processos humanos lentos que impedem a escalabilidade real da empresa."
            />
            <ProblemCard 
              icon={<Target size={32} />}
              title="Decisões no Escuro"
              text="Falta de dados precisos (BI) para entender de onde vem o lucro e onde o dinheiro está sendo perdido."
            />
            <ProblemCard 
              icon={<Zap size={32} />}
              title="Tecnologia Legada"
              text="Softwares lentos ou genéricos que não se adaptam às necessidades específicas do seu fluxo de trabalho."
            />
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mt-20 md:mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-gray-400 mb-4 md:mb-6 italic">
            "Não entrego apenas código. Entrego..."
          </p>
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tighter">
            Engenharia de <span className="text-[#ff5a00]">Previsibilidade</span> Empresarial.
          </h4>
        </div>
      </div>
    </section>
  );
};
