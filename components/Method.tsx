
import React from 'react';
import { motion } from 'framer-motion';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative pl-16 pb-12 border-l border-black/10 last:border-0 last:pb-0 group">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 bg-white border-2 border-black flex items-center justify-center font-black text-black font-display z-10 group-hover:bg-[#ff5a00] group-hover:border-[#ff5a00] group-hover:text-white transition-all duration-500 shadow-xl">
      {number}
    </div>
    <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-4 tracking-tight text-black group-hover:text-[#ff5a00] transition-colors">{title}</h3>
    <p className="text-gray-600 max-w-xl text-lg leading-relaxed font-medium">{description}</p>
  </div>
);

export const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Grid (Subtle for light mode) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-grid-light" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-grid-light)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-40">
              <div className="inline-block px-4 py-1 border border-black rounded-full mb-6">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black">Clareza Estrutural</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black font-display uppercase leading-[0.85] tracking-tighter text-black mb-10">
                O MÉTODO <br /><span className="text-[#ff5a00]">LTV</span>
              </h2>
              <p className="text-xl text-gray-700 mb-12 font-medium max-w-md leading-relaxed">
                Transformamos o caos operacional em um manual de lucros. Não é criatividade, é <span className="underline decoration-[#ff5a00] decoration-4 underline-offset-8">engenharia de processos</span>.
              </p>
              <div className="h-2 w-32 bg-black"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="space-y-4">
              <Step 
                number="01"
                title="Diagnóstico de Funil"
                description="Mapeamos onde o dinheiro está vazando. Identificamos cada gargalo no seu atendimento e processo de vendas atual."
              />
              <Step 
                number="02"
                title="Arquitetura de Contato"
                description="Desenhamos a jornada ideal. O que o cliente recebe, quando recebe e como ele é educado para valorizar sua solução."
              />
              <Step 
                number="03"
                title="Implementação Core"
                description="Instalamos as ferramentas e automações. WhatsApp, CRM e fluxos inteligentes trabalhando para você 24/7."
              />
              <Step 
                number="04"
                title="Otimização de LTV"
                description="Monitoramos as métricas reais. Ajustamos o processo para que o cliente não apenas compre, mas indique e retorne."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
