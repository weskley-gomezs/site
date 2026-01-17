
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Method } from './components/Method';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SuccessCases } from './components/SuccessCases';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Prelanding } from './components/Prelanding';
import { CaseReacao } from './components/CaseReacao';
import { 
  ArrowLeft, 
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Route = 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies' | 'case-reacao';

const FilterSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20eu%20busco%20estrutura%20e%20processo.%20Quero%20falar%20sobre%20o%20Diagnóstico.";

  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Is For */}
        <div className="p-16 md:p-32 bg-white text-black relative">
          <div className="max-w-xl ml-auto">
            <CheckCircle2 size={48} className="text-[#ff5a00] mb-8" />
            <h3 className="text-5xl font-black font-display uppercase tracking-tighter mb-10">É PARA QUEM:</h3>
            <ul className="space-y-6">
              {[
                "Já vende, mas não tem previsibilidade.",
                "Quer estrutura real, não truque de marketing.",
                "Entende que processo vem antes da escala.",
                "Busca um sistema soberano de dados."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-xl font-medium border-b border-black/5 pb-4">
                  <div className="w-2 h-2 bg-[#ff5a00] rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Is Not For */}
        <div className="p-16 md:p-32 bg-black text-white relative">
          <div className="max-w-xl">
            <XCircle size={48} className="text-gray-700 mb-8" />
            <h3 className="text-5xl font-black font-display uppercase tracking-tighter mb-10">NÃO É PARA QUEM:</h3>
            <ul className="space-y-6">
              {[
                "Busca fórmula mágica de enriquecimento.",
                "Quer apenas 'postar mais' no Instagram.",
                "Não quer organizar o próprio negócio.",
                "Procura a opção mais barata do mercado."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-xl font-light text-gray-500 border-b border-white/5 pb-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Centered CTA Overlap */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-[#ff5a00] text-black w-32 h-32 rounded-full flex items-center justify-center font-black text-center text-[10px] leading-tight cursor-pointer shadow-2xl border-4 border-black"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          QUERO<br />ESTRUTURA
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [hasEntered, setHasEntered] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Hero />
            <SuccessCases onNavigate={setCurrentRoute} />
            <Problem />
            <Method />
            <div id="positioning" className="py-24 bg-[#0a0a0a] flex justify-center overflow-hidden border-y border-white/5">
              <div className="whitespace-nowrap flex animate-[scroll_50s_linear_infinite] gap-12">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-7xl md:text-9xl font-black font-display text-white/[0.02] uppercase italic tracking-tighter">
                    Weskley Gomes • Processo > Tráfego > Sorte • Lead é Vaidade • LTV é Lucro • Quem Educa Retém • 
                  </span>
                ))}
              </div>
            </div>
            <Authority />
            <Services />
            <FilterSection />
            <Showcase onNavigate={setCurrentRoute} />
            <FAQ />
          </motion.div>
        );
      
      case 'case-reacao':
        return (
          <CaseReacao onBack={() => setCurrentRoute('home')} />
        );

      default:
        return (
          <div className="min-h-screen flex items-center justify-center text-white">Página em construção...</div>
        );
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#ff5a00] selection:text-white relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <Prelanding key="prelanding" onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div 
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {currentRoute === 'home' && <Header onNavigate={setCurrentRoute} />}
            <main className="relative z-10">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </main>
            {currentRoute === 'home' && <Footer onNavigate={setCurrentRoute} />}
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
