
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Cpu, Repeat } from 'lucide-react';

const Step: React.FC<{ number: string; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="relative pl-16 pb-16 border-l border-black/10 last:border-0 last:pb-0 group">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-14 h-14 bg-white border-2 border-black flex items-center justify-center font-black text-black font-display z-10 group-hover:bg-[#ff5a00] group-hover:border-[#ff5a00] group-hover:text-white transition-all duration-500 shadow-xl">
      {number}
    </div>
    <div className="mb-6 text-[#ff5a00] opacity-30 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-4 tracking-tight text-black group-hover:text-[#ff5a00] transition-colors">{title}</h3>
    <p className="text-gray-600 max-w-xl text-lg leading-relaxed font-medium">{description}</p>
  </div>
);

export const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
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
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black">Technical Framework</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black font-display uppercase leading-[0.85] tracking-tighter text-black mb-10">
                O MÉTODO <br /><span className="text-[#ff5a00]">LTV.</span>
              </h2>
              <p className="text-xl text-gray-700 mb-12 font-medium max-w-md leading-relaxed">
                Transformamos o caos de leads em um ecossistema de lucros. Não é criatividade, é <span className="underline decoration-[#ff5a00] decoration-4 underline-offset-8">engenharia de contato</span>.
              </p>
              <div className="h-2 w-32 bg-black"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="space-y-4">
              <Step 
                number="01"
                icon={<Search size={32} strokeWidth={1.5} />}
                title="Sondagem de Infra"
                description="Mapeamos tecnicamente onde o faturamento está vazando. Identificamos cada gargalo no seu atendimento e processo de vendas."
              />
              <Step 
                number="02"
                icon={<PenTool size={32} strokeWidth={1.5} />}
                title="Arquitetura de Contato"
                description="Desenhamos a jornada soberana. O que o lead recebe, quando recebe e como ele é educado para valorizar sua oferta de elite."
              />
              <Step 
                number="03"
                icon={<Cpu size={32} strokeWidth={1.5} />}
                title="Deploy de Processos"
                description="Instalamos as ferramentas e automações que sustentam a escala. WhatsApp, CRM e fluxos inteligentes operando 24/7."
              />
              <Step 
                number="04"
                icon={<Repeat size={32} strokeWidth={1.5} />}
                title="Governança de LTV"
                description="Monitoramos as métricas de retenção real. Ajustamos o motor para que o cliente não apenas compre, mas se torne um promotor."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
