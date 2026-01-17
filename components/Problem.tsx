
import React from 'react';
import { UserX, MessageSquareOff, AlertTriangle, ShieldAlert, Skull, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-10 glass-card border-white/5 hover:border-[#ff5a00]/30 transition-all duration-700 group rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
    <div className="text-gray-600 group-hover:text-[#ff5a00] mb-8 transition-all duration-500 transform group-hover:-translate-y-2">
      {icon}
    </div>
    <h3 className="text-2xl font-black font-display mb-4 uppercase tracking-tight text-white group-hover:text-[#ff5a00] transition-colors">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 text-lg leading-relaxed font-light transition-colors">{text}</p>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff5a00]/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

export const Problem: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20identifiquei%20vazamentos%20no%20meu%20funil.%20Quero%20o%20diagnóstico%20gratuito.";

  return (
    <section className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          <div className="lg:sticky lg:top-40">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-red-500/30 rounded-full bg-red-500/5 mb-8">
              <Skull size={14} className="text-red-500" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-red-500">O Custo do Amadorismo</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tighter leading-[0.85] mb-10">
              O cliente entra, <br />mas <span className="text-red-600">não fica.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed mb-12">
              A maioria das empresas só pensa em atrair novos leads. Poucas pensam no que acontece após o clique. <span className="text-white font-bold italic">Sem estrutura, seu lucro escorre pelo ralo.</span>
            </p>
            <div className="h-2 w-32 bg-red-600 rounded-full mb-4"></div>
            <p className="text-xs font-black uppercase tracking-[0.6em] text-red-900">SINTOMAS DE UMA EMPRESA FRÁGIL</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProblemCard 
              icon={<UserX size={40} strokeWidth={1} />}
              title="Churn Silencioso"
              text="O cliente para de comprar e você nem sabe porquê. Ele desaparece por falta de relacionamento."
            />
            <ProblemCard 
              icon={<MessageSquareOff size={40} strokeWidth={1} />}
              title="Ruído no Time"
              text="Processos manuais geram atrito e desgaste. Seu time apaga incêndio em vez de gerar escala."
            />
            <ProblemCard 
              icon={<AlertTriangle size={40} strokeWidth={1} />}
              title="Preço como única arma"
              text="Como não há percepção de valor contínuo, o cliente te troca por qualquer centavo de desconto."
            />
            <ProblemCard 
              icon={<ShieldAlert size={40} strokeWidth={1} />}
              title="Lucro Estagnado"
              text="Você vende muito, mas o custo de aquisição (CAC) engole sua margem porque o cliente não volta."
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 bg-white/[0.01] border border-white/5 rounded-[4rem] text-center">
            <h4 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter text-white mb-10">
              Pare de perder dinheiro no <br /><span className="text-[#ff5a00]">relacionamento com o cliente.</span>
            </h4>
            <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
              FAZER DIAGNÓSTICO GRATUITO <ArrowRight size={22} strokeWidth={4} />
            </Button>
        </div>
      </div>
    </section>
  );
};
