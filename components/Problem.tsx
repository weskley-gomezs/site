
import React from 'react';
import { AlertCircle, TrendingDown, Target, HelpCircle } from 'lucide-react';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-8 glass-card border border-white/5 hover:border-[#ff5a00]/30 transition-all group rounded-3xl">
    <div className="text-[#ff5a00] mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-display mb-4 uppercase">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{text}</p>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none mb-6">
              O digital não é <br />mais sobre <span className="text-[#ff5a00]">beleza.</span>
            </h2>
            <p className="text-xl text-gray-400">É sobre estratégia técnica e comercial. Se o seu projeto não converte, ele é apenas uma despesa bonita.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProblemCard 
              icon={<TrendingDown size={32} />}
              title="SITES QUE NÃO VENDEM"
              text="Milhares de reais investidos em designs genéricos que confundem o lead e travam o checkout."
            />
            <ProblemCard 
              icon={<Target size={32} />}
              title="TRÁFEGO SEM ESTRATÉGIA"
              text="Queimar caixa no Google e Meta sem saber exatamente qual criativo ou LP está gerando lucro."
            />
            <ProblemCard 
              icon={<AlertCircle size={32} />}
              title="FALTA DE ESCALA"
              text="Ferramentas que quebram quando o tráfego aumenta. Código sujo que impede o crescimento."
            />
            <ProblemCard 
              icon={<HelpCircle size={32} />}
              title="DÚVIDA TÉCNICA"
              text="Não saber se a tecnologia escolhida hoje suportará o seu faturamento de amanhã."
            />
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff5a00]/50 to-transparent"></div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">
            A NX Company não cria "presença online".
          </h4>
          <p className="text-3xl md:text-5xl font-black font-display text-[#ff5a00] uppercase italic">
            Criamos ativos digitais com função comercial clara.
          </p>
        </div>
      </div>
    </section>
  );
};