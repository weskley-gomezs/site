
import React from 'react';
import { AlertCircle, TrendingDown, Target, Zap, Users } from 'lucide-react';

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
              <Users size={14} className="text-[#ff5a00]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5a00]">Desafios do Gestor Escolar</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8">
              O pátio vazio <br />custa <span className="text-[#ff5a00]">caro.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
              Depender apenas de <span className="text-white font-medium">indicações</span> é um risco para a saúde financeira da sua escola. Se a sua estrutura digital não converte curiosos em matrículas, você está perdendo alunos para a concorrência.
            </p>
            <div className="mt-8 md:mt-10 h-1 w-16 md:w-24 bg-[#ff5a00]/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
            <ProblemCard 
              icon={<TrendingDown size={32} />}
              title="Fuga de Interessados"
              text="Sites lentos e desatualizados fazem os pais desistirem de conhecer sua escola em segundos."
            />
            <ProblemCard 
              icon={<Target size={32} />}
              title="Investimento sem Retorno"
              text="Gastar com anúncios sem uma página de alta conversão é queimar o orçamento da campanha de matrícula."
            />
            <ProblemCard 
              icon={<AlertCircle size={32} />}
              title="Processo Analógico"
              text="Dificuldade em gerenciar leads e fazer follow-up, resultando em perda de matrículas por falta de agilidade."
            />
            <ProblemCard 
              icon={<Zap size={32} />}
              title="Invisibilidade Digital"
              text="Sua escola é incrível fisicamente, mas digitalmente parece parada no tempo, perdendo autoridade."
            />
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="mt-20 md:mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-gray-400 mb-4 md:mb-6 italic">
            "A NX Education não entrega apenas um site. Entregamos..."
          </p>
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tighter">
            Previsibilidade de <span className="text-[#ff5a00]">Crescimento</span> Educacional.
          </h4>
        </div>
      </div>
    </section>
  );
};
