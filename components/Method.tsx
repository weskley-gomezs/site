
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative pl-16 pb-12 border-l border-white/10 last:border-0 last:pb-0 group">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-black border-2 border-[#ff5a00] flex items-center justify-center font-bold text-[#ff5a00] font-display z-10 group-hover:bg-[#ff5a00] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(255,90,0,0.2)]">
      {number}
    </div>
    <h3 className="text-2xl font-bold font-display uppercase mb-4 tracking-tight group-hover:text-[#ff5a00] transition-colors">{title}</h3>
    <p className="text-gray-400 max-w-xl text-lg leading-relaxed">{description}</p>
  </div>
);

export const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-hex" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0L50 15V45L25 60L0 45V15L25 0Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-hex)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-black font-display uppercase leading-none tracking-tighter mb-8">
                MÉTODO <span className="text-[#ff5a00]">CAPTA</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8 italic">
                Nossa engenharia exclusiva para transformar visitantes em alunos matriculados de forma previsível.
              </p>
              <div className="w-20 h-1 bg-[#ff5a00] mb-6"></div>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">
                Foco em Retorno sobre Matrícula
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-4">
              <Step 
                number="01"
                title="DIAGNÓSTICO DE CAPTAÇÃO"
                description="Analisamos o funil de matrículas atual da sua escola. Identificamos onde os pais estão abandonando o processo e mapeamos as principais objeções que impedem o fechamento do contrato."
              />
              <Step 
                number="02"
                title="ESTRUTURA DE ALTA CONVERSÃO"
                description="Implementamos landing pages e sites com carregamento ultra-rápido e copy persuasiva, desenhados especificamente para o público educacional, garantindo que o desejo de matrícula seja gerado no primeiro contato."
              />
              <Step 
                number="03"
                title="ECOSSISTEMA DE NUTRIÇÃO"
                description="Automação de processos para que nenhum lead esfrie. Integramos CRM e fluxos de mensagens para garantir que sua equipe comercial receba contatos quentes e prontos para a visita guiada."
              />
              <Step 
                number="04"
                title="CAMPANHAS DE ALTA PERFORMANCE"
                description="Gestão de tráfego pago (Google e Meta Ads) focada em atrair famílias qualificadas dentro do raio geográfico da sua instituição, otimizando o CAC (Custo de Aquisição de Aluno)."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
