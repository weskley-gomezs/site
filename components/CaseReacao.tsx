
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Database, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from './Button';

interface CaseReacaoProps {
  onBack: () => void;
}

const ProcessCard: React.FC<{ number: string; title: string; text: string; icon: React.ReactNode }> = ({ number, title, text, icon }) => (
  <div className="p-8 glass-card border-white/5 relative group overflow-hidden rounded-[2rem]">
    <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl italic group-hover:text-[#ff5a00]/10 transition-colors">
      {number}
    </div>
    <div className="text-[#ff5a00] mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="text-xl font-bold font-display uppercase text-white mb-4 tracking-tight">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
    <div className="mt-6 h-px w-12 bg-white/10 group-hover:w-full transition-all duration-700"></div>
  </div>
);

export const CaseReacao: React.FC<CaseReacaoProps> = ({ onBack }) => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20vi%20o%20case%20do%20Colégio%20Reação.%20Quero%20uma%20estrutura%20similar.";

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[60] py-6 px-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors font-black text-[10px] uppercase tracking-[0.4em]"
          >
            <ArrowLeft size={16} /> VOLTAR AO CORE
          </button>
          <span className="font-display font-black text-white text-sm uppercase tracking-tighter">
            CASE: <span className="text-[#ff5a00]">REAÇÃO COLLEGE</span>
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/aMoMRlq.png" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <img src="https://i.imgur.com/LESvkxT.png" className="h-20 mx-auto mb-10 object-contain" />
            <h1 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-none mb-8">
              A ENGENHARIA DA <br />
              <span className="text-[#ff5a00]">ESCALA MÁXIMA.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Como transformamos uma operação educacional manual em um motor de vendas automático e soberano.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="py-20 border-y border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "LEADS PROCESSADOS", value: "+300", suffix: "" },
              { label: "REDUÇÃO DE ATRITO", value: "85", suffix: "%" },
              { label: "ROI MÉDIO", value: "12", suffix: "x" },
              { label: "LTV OPTIMIZED", value: "100", suffix: "%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase mb-4">{stat.label}</span>
                <span className="text-4xl md:text-6xl font-black font-display text-white italic">
                  {stat.value}<span className="text-[#ff5a00]">{stat.suffix}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Blueprint */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-6xl font-black font-display uppercase tracking-tighter mb-6">
              O <span className="text-[#ff5a00]">BLUEPRINT</span> DO PROCESSO
            </h2>
            <p className="text-gray-500 max-w-xl text-lg">
              Mapeamento técnico da jornada do dado. Da primeira interação ao faturamento recorrente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard 
              number="01"
              icon={<Database size={32} />}
              title="Captação Omnichannel"
              text="Integração de Webhooks do Meta e Google diretamente para o servidor central, eliminando o delay de resposta e garantindo 100% de rastreio."
            />
            <ProcessCard 
              number="02"
              icon={<Cpu size={32} />}
              title="Triagem Inteligente"
              text="Sistema de Score que prioriza leads quentes. O time de vendas foca no que converte, enquanto a automação educa o restante."
            />
            <ProcessCard 
              number="03"
              icon={<MessageSquare size={32} />}
              title="Fluxo de Conversão"
              text="Arquitetura de WhatsApp API com fluxos de urgência e prova social personalizados conforme o comportamento do lead."
            />
            <ProcessCard 
              number="04"
              icon={<ShieldCheck size={32} />}
              title="Governança LTV"
              text="Dashboards em tempo real para controle de Churn e ferramentas de Re-Engajamento para vender novamente para a mesma base."
            />
          </div>
        </div>
      </section>

      {/* White Section: Insights */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 border border-black rounded-full mb-6">
                 <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black">Technical Insight</span>
              </div>
              <h3 className="text-4xl md:text-7xl font-black font-display text-black uppercase tracking-tighter leading-tight mb-8">
                A VERDADE <br />ESTÁ NOS <br /><span className="text-[#ff5a00]">DADOS.</span>
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
                O grande segredo do Colégio Reação não foi "investir mais em tráfego", mas sim **parar de perder leads**. Implementamos uma infraestrutura que garante que nenhum lead fique mais de 2 minutos sem um contato qualificado.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminação de planilhas manuais.",
                  "Segurança de dados padrão GDPR.",
                  "Previsibilidade de faturamento mensal.",
                  "Time de vendas 3x mais produtivo."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-black font-bold uppercase text-xs tracking-widest">
                    <Zap size={16} className="text-[#ff5a00]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-black p-4 rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                  <div className="bg-gray-900 rounded-[1.5rem] p-8 border border-white/10">
                    <div className="flex justify-between items-center mb-10">
                       <BarChart3 className="text-[#ff5a00]" />
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <div className="h-4 bg-white/5 rounded-full w-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-[#ff5a00]"></motion.div>
                       </div>
                       <div className="h-4 bg-white/5 rounded-full w-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-white"></motion.div>
                       </div>
                       <div className="h-4 bg-white/5 rounded-full w-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-[#ff5a00]"></motion.div>
                       </div>
                    </div>
                    <p className="text-[10px] font-black uppercase text-gray-600 mt-8 tracking-widest">Performance Dashboard Architecture</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff5a00]/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black font-display uppercase tracking-tighter mb-12">
            QUER ESSE NÍVEL DE <br />
            <span className="text-[#ff5a00]">ENGENHARIA NO SEU NEGÓCIO?</span>
          </h2>
          <Button variant="primary" onClick={() => window.open(whatsappUrl, '_blank')}>
            SOLICITAR DIAGNÓSTICO SIMILAR <ArrowRight size={22} strokeWidth={4} />
          </Button>
        </div>
      </section>
    </div>
  );
};
