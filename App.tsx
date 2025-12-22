
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Method } from './components/Method';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Route = 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const PageWrapper: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-40 pb-20 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-6">
        <button 
          onClick={() => setCurrentRoute('home')}
          className="flex items-center gap-2 text-[#ff5a00] font-bold uppercase tracking-widest text-sm mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={20} /> Voltar para Home
        </button>
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-4">
            {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <span key={i} className="text-[#ff5a00]">{word}</span> : word + ' ')}
          </h1>
          {subtitle && <p className="text-xl text-gray-400 max-w-2xl font-light">{subtitle}</p>}
        </header>

        <div className="glass-card p-8 md:p-16 rounded-[3rem] border-white/5 bg-white/[0.02] shadow-2xl">
          {children}
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <Problem />
            <div id="positioning" className="py-20 bg-deep-black flex justify-center overflow-hidden border-y border-white/5">
              <div className="whitespace-nowrap flex animate-[scroll_60s_linear_infinite] gap-10">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-black font-display text-white/[0.03] uppercase italic tracking-tighter">
                    Vendas Automáticas • Escala de Lucro • Ativos Digitais • NX Company • 
                  </span>
                ))}
              </div>
            </div>
            <Method />
            <Services />
            <Showcase />
            <FAQ />
          </motion.div>
        );
      
      case 'metodo':
        return (
          <PageWrapper title="Engenharia de Lucro" subtitle="Como a NX Company transforma sua operação digital em uma máquina de faturamento.">
            <div className="space-y-16">
              <div className="max-w-4xl">
                <p className="text-2xl text-white font-light leading-relaxed">
                  Não entregamos apenas "sites". Entregamos <strong className="text-[#ff5a00] font-black">vantagem competitiva</strong>. Nosso método foi desenhado para remover cada barreira que impede o seu cliente de te pagar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#ff5a00]">
                    <Target size={32} />
                    <h3 className="text-2xl font-bold font-display uppercase">Eliminação de Fricção</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">
                    Cada segundo que seu cliente espera para carregar uma página é dinheiro saindo do seu bolso. Criamos estruturas que funcionam com velocidade máxima para garantir que a decisão de compra seja tomada sem hesitação.
                  </p>
                  <ul className="space-y-3">
                    {['Foco total na experiência do comprador', 'Velocidade que gera confiança imediata', 'Navegação intuitiva focada em vendas', 'Estrutura à prova de falhas'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider">
                        <CheckCircle2 size={16} className="text-[#ff5a00]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#ff5a00]">
                    <DollarSign size={32} />
                    <h3 className="text-2xl font-bold font-display uppercase">Escala de ROI</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">
                    Parar de investir em anúncios e começar a investir em resultados. Criamos um ecossistema onde cada centavo investido é rastreado para que você saiba exatamente o quanto está ganhando de volta.
                  </p>
                  <ul className="space-y-3">
                    {['Atração de clientes qualificados', 'Maximização do lucro por venda', 'Redução do custo de novos clientes', 'Previsibilidade de faturamento mensal'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider">
                        <CheckCircle2 size={16} className="text-[#ff5a00]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-10 bg-[#ff5a00]/5 border border-[#ff5a00]/20 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5a00]/10 blur-3xl -z-10 group-hover:bg-[#ff5a00]/20 transition-all"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-[#ff5a00] p-6 rounded-3xl shrink-0 shadow-[0_0_30px_rgba(255,90,0,0.3)]">
                    <TrendingUp size={48} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black font-display uppercase mb-4">O Futuro do seu Negócio</h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                      Tratamos seu site como um ativo financeiro. Ele deve valorizar sua marca e facilitar sua operação. Construímos soluções que permitem que você escale seu faturamento sem precisar escalar sua equipe na mesma proporção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
        );

      default:
        return (
          <PageWrapper title={currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)} subtitle="Conteúdo em desenvolvimento estratégico.">
             <div className="h-40 flex items-center justify-center text-gray-600 italic">
                A seção de {currentRoute} está sendo otimizada para máxima conversão.
             </div>
          </PageWrapper>
        );
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#ff5a00] selection:text-white">
      <Header onNavigate={setCurrentRoute} />
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={setCurrentRoute} />
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes infinite-shine {
          0% { transform: translateX(-150%) skewX(-25deg); }
          20% { transform: translateX(250%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px 2px rgba(255, 90, 0, 0.4); }
          50% { box-shadow: 0 0 30px 8px rgba(255, 90, 0, 0.7); }
        }
        .animate-infinite-shine {
          animation: infinite-shine 4s infinite ease-in-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0a0a0a;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
