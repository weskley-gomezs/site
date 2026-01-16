
import React from 'react';
import { Layers, Database, Activity, Share2, Skull, ArrowRight } from 'lucide-react';
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
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20identifiquei%20gargalos%20no%20meu%20negócio.%20Quero%20o%20diagnóstico%20gratuito.";

  return (
    <section className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          <div className="lg:sticky lg:top-40">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-red-500/30 rounded-full bg-red-500/5 mb-8">
              <Skull size={14} className="text-red-500" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-red-500">Alerta de Risco</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tighter leading-[0.85] mb-10">
              Sua estrutura <br /><span className="text-red-600">limita</span> sua <br />riqueza.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed mb-12">
              Processos manuais e sistemas fragmentados são o freio de mão puxado da sua escala. Sem um <span className="text-white font-bold italic">Core de Engenharia</span>, você está apenas adiando o colapso.
            </p>
            <div className="h-2 w-32 bg-red-600 rounded-full mb-4"></div>
            <p className="text-xs font-black uppercase tracking-[0.6em] text-red-900">IDENTIFIQUE OS GARGALOS ABAIXO</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProblemCard 
              icon={<Layers size={40} strokeWidth={1} />}
              title="Escala Falsa"
              text="Sua estrutura derrete quando o volume sobe. Você está crescendo sobre uma base frágil."
            />
            <ProblemCard 
              icon={<Share2 size={40} strokeWidth={1} />}
              title="Cárcere Operacional"
              text="Você é escravo do seu próprio sistema. Sem automação real, você não tem uma empresa."
            />
            <ProblemCard 
              icon={<Database size={40} strokeWidth={1} />}
              title="Caos de Dados"
              text="Decisões baseadas em achismo. Seus dados estão espalhados e você pilota no escuro."
            />
            <ProblemCard 
              icon={<Activity size={40} strokeWidth={1} />}
              title="Lucro Perdido"
              text="Leads que morrem no esquecimento e falhas técnicas que custam milhares de reais por dia."
            />
          </div>
        </div>

        {/* Rescue CTA */}
        <div className="flex flex-col items-center justify-center py-16 border-t border-white/5 text-center">
            <h4 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter text-white mb-10">
              Pare de queimar dinheiro por <br /><span className="text-[#ff5a00]">ineficiência técnica.</span>
            </h4>
            <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
              FAZER DIAGNÓSTICO GRATUITO <ArrowRight size={20} strokeWidth={4} />
            </Button>
        </div>
      </div>
    </section>
  );
};
