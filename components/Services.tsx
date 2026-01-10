
import React from 'react';
import { Button } from './Button';
import { Layout, GraduationCap, TrendingUp } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; items: string[]; link: string; badge?: string }> = ({ icon, title, items, link, badge }) => (
  <div className="flex flex-col h-full glass-card p-8 md:p-10 hover:border-[#ff5a00] transition-all duration-500 rounded-[2rem] md:rounded-[3rem] relative group">
    {badge && (
      <span className="absolute top-6 right-8 text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-[#ff5a00]/20 text-[#ff5a00] border border-[#ff5a00]/30 rounded-full">
        {badge}
      </span>
    )}
    <div className="text-[#ff5a00] mb-6 md:mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-bold font-display uppercase mb-4 md:mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-400">
          <span className="text-[#ff5a00] mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
          <span className="text-base md:text-lg leading-snug">{item}</span>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="w-full text-xs md:text-sm py-3 md:py-4 rounded-xl md:rounded-2xl" onClick={() => window.open(link, '_blank')}>
      Diagnóstico de Matrícula
    </Button>
  </div>
);

export const Services: React.FC = () => {
  const getWhatsappUrl = (service: string) => `https://wa.me/5561981535040?text=Olá,%20gostaria%20de%20saber%20como%20escalar%20as%20matrículas%20da%20minha%20escola%20com%20${service}%20através%20da%20NX%20Education.`;

  return (
    <section id="servicos" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center">
          <div className="inline-block px-4 py-1 border border-[#ff5a00]/20 rounded-full bg-[#ff5a00]/5 mb-4">
             <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff5a00]">Motores de Crescimento</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-display uppercase tracking-tighter mb-4">
            ENGENHARIA DE <span className="text-[#ff5a00]">MATRÍCULAS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Soluções técnicas desenhadas para o sucesso comercial de instituições de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard 
            badge="Captação 24/7"
            icon={<Layout size={48} strokeWidth={1.5} />}
            title="Máquinas de Matrícula"
            items={[
              "Landing Pages de Alta Conversão",
              "Velocidade de carregamento < 1s",
              "Design que transmite autoridade",
              "Foco total em agendamento de visitas"
            ]}
            link={getWhatsappUrl("Máquinas de Matrícula")}
          />
          <ServiceCard 
            badge="Processos"
            icon={<GraduationCap size={48} strokeWidth={1.5} />}
            title="Ecossistema de Leads"
            items={[
              "CRM especializado para escolas",
              "Automação de WhatsApp e E-mail",
              "Follow-up inteligente e automático",
              "Gestão centralizada de interessados"
            ]}
            link={getWhatsappUrl("Ecossistema de Leads")}
          />
          <ServiceCard 
            badge="Escala Local"
            icon={<TrendingUp size={48} strokeWidth={1.5} />}
            title="Aceleração Educacional"
            items={[
              "Tráfego pago focado em geolocalização",
              "Anúncios para pais e responsáveis",
              "Otimização de campanhas sazonais",
              "Relatórios de custo por matrícula"
            ]}
            link={getWhatsappUrl("Aceleração de Matrículas")}
          />
        </div>
      </div>
    </section>
  );
};
