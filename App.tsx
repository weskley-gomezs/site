
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Method } from './components/Method';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SuccessCases } from './components/SuccessCases';
import { WhatsAppButton } from './components/WhatsAppButton';
import { 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Code2
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

type Route = 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  
  // Cursor Flashlight State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [mouseX, mouseY]);

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
          {subtitle && <p className="text-xl text-gray-400 max-w-2xl font-light italic">{subtitle}</p>}
        </header>

        <div className="glass-card p-8 md:p-16 rounded-[3rem] border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Zap size={300} className="text-[#ff5a00]" />
           </div>
          {children}
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Hero />
            <SuccessCases />
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
          <PageWrapper title="Engenharia de Lucro" subtitle="O framework técnico que remove a sorte da equação.">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#ff5a00]/10 rounded-xl text-[#ff5a00]"><Code2 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-2">Código de Alta Performance</h4>
                    <p className="text-gray-400">Desenvolvemos com as tecnologias mais rápidas do mercado para garantir que seu site carregue em menos de 1 segundo.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#ff5a00]/10 rounded-xl text-[#ff5a00]"><BarChart3 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-2">Decisões Baseadas em Dados</h4>
                    <p className="text-gray-400">Cada botão e cada palavra no seu site é testado para maximizar a conversão de leads.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center">
                <p className="text-center italic text-gray-500">Documentação do método em processo de atualização para V2.0...</p>
              </div>
            </div>
          </PageWrapper>
        );
      case 'servicos':
        return (
          <PageWrapper title="Nossos Motores" subtitle="Soluções sob medida para quem não aceita resultados médios.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Explore nossa gama de serviços de elite. Detalhes em breve.</div>
          </PageWrapper>
        );
      case 'portfolio':
        return (
          <PageWrapper title="Showcase de Ativos" subtitle="Explore a qualidade técnica e visual da NX.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Clique nos projetos na Home para visualizar interativamente.</div>
          </PageWrapper>
        );
      case 'faq':
        return (
          <PageWrapper title="Dúvidas Reais" subtitle="O que você precisa saber antes de contratarmos sua vitória.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Nossa central de ajuda está sendo expandida.</div>
          </PageWrapper>
        );
      case 'privacidade':
      case 'termos':
      case 'cookies':
        return (
          <PageWrapper title={currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)} subtitle="Informações legais NX.">
            <div className="space-y-6">
              <div className="flex gap-3 items-center text-[#ff5a00] mb-4">
                <ShieldCheck size={24} />
                <span className="font-bold uppercase tracking-widest">Compromisso com a Transparência</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A NX Company preza pela segurança dos seus dados. Esta seção contém as diretrizes de uso de nossa plataforma e o tratamento de informações de acordo com a LGPD.
              </p>
              <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse"></div>
            </div>
          </PageWrapper>
        );
      default:
        return (
          <PageWrapper title="NX Company">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Página não encontrada ou em construção.</div>
          </PageWrapper>
        );
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#ff5a00] selection:text-white relative overflow-x-hidden">
      {/* Global Cursor Glow */}
      <motion.div 
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#ff5a00]/5 blur-[120px] rounded-full pointer-events-none z-0"
      />

      <Header onNavigate={setCurrentRoute} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={setCurrentRoute} />
      <WhatsAppButton />
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .perspective-2000 { perspective: 2000px; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes infinite-shine {
          0% { transform: translateX(-150%) skewX(-25deg); }
          20% { transform: translateX(250%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        .animate-infinite-shine {
          animation: infinite-shine 4s infinite ease-in-out;
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
