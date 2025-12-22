
import React from 'react';
import { Button } from './Button';
import { Layout, Rocket, LineChart } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; items: string[]; link: string }> = ({ icon, title, items, link }) => (
  <div className="flex flex-col h-full glass-card p-10 hover:border-[#ff5a00] transition-all duration-500 rounded-[3rem]">
    <div className="text-[#ff5a00] mb-8">{icon}</div>
    <h3 className="text-3xl font-bold font-display uppercase mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-4 mb-10 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-400">
          <span className="text-[#ff5a00] mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
          <span className="text-lg leading-snug">{item}</span>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="w-full text-sm py-3 rounded-2xl" onClick={() => window.open(link, '_blank')}>
      Quero esse resultado
    </Button>
  </div>
);

export const Services: React.FC = () => {
  const getWhatsappUrl = (service: string) => `https://wa.me/5561981535040?text=Olá,%20gostaria%20de%20saber%20como%20aumentar%20meu%20faturamento%20com%20${service}%20através%20da%20NX%20Company.`;

  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter text-center mb-4">
            IMPULSIONADORES DE <span className="text-[#ff5a00]">LUCRO</span>
          </h2>
          <p className="text-xl text-gray-500 text-center max-w-2xl mx-auto">
            Escolha como você quer acelerar o crescimento da sua empresa hoje.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Layout size={48} strokeWidth={1.5} />}
            title="Máquinas de Vendas"
            items={[
              "Estrutura focada em fechar negócios",
              "Carregamento instantâneo para não perder leads",
              "Comunicação que quebra objeções de compra",
              "Foco total na conversão do visitante em cliente"
            ]}
            link={getWhatsappUrl("Máquinas de Vendas")}
          />
          <ServiceCard 
            icon={<Rocket size={48} strokeWidth={1.5} />}
            title="Software como Ativo"
            items={[
              "Sistemas que trabalham sozinhos por você",
              "Criação de soluções que resolvem dores reais",
              "Escalabilidade para crescer sem limites",
              "Ativo digital que aumenta o valor da sua empresa"
            ]}
            link={getWhatsappUrl("Software como Ativo")}
          />
          <ServiceCard 
            icon={<LineChart size={48} strokeWidth={1.5} />}
            title="Aceleração de Faturamento"
            items={[
              "Atração de clientes com alto poder de compra",
              "Estratégia de escala baseada em lucro líquido",
              "Otimização constante para vender mais por menos",
              "Relatórios claros sobre o retorno do seu dinheiro"
            ]}
            link={getWhatsappUrl("Aceleração de Faturamento")}
          />
        </div>
      </div>
    </section>
  );
};
