
import React, { useState, useEffect, useRef } from 'react';
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
  Code2,
  GraduationCap,
  ExternalLink,
  Target,
  MousePointer2,
  Cpu,
  ArrowRight,
  TrendingUp,
  Globe,
  Smartphone,
  Settings,
  Users,
  Wrench,
  Database,
  Search,
  ClipboardList,
  Activity,
  Layers,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

type Route = 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies' | 'case-reacao';

// Componente para Números que Animam
const CountUp = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl md:text-6xl font-black font-display text-[#ff5a00]"
    >
      {value}{suffix}
    </motion.span>
  );
};

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateEffect = useTransform(scrollYProgress, [0, 0.5], [0, 5]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const CyberWrapper: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-40 pb-20 bg-[#050505] relative overflow-hidden"
    >
      {/* Elementos Imersivos de Fundo */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff5a00]/50 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff5a00]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff5a000a_0%,transparent_70%)]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.button 
          whileHover={{ x: -10 }}
          onClick={() => setCurrentRoute('home')}
          className="flex items-center gap-3 text-[#ff5a00] font-bold uppercase tracking-[0.3em] text-[10px] mb-16 px-6 py-2 border border-[#ff5a00]/20 rounded-full bg-[#ff5a00]/5 backdrop-blur-md"
        >
          <ArrowLeft size={16} /> Voltar ao Nexo
        </motion.button>
        
        <header className="mb-24 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-[#ff5a00] mb-8"
          />
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black font-display uppercase tracking-tighter mb-6 leading-none"
          >
            {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <span key={i} className="text-[#ff5a00] block md:inline">{word}</span> : word + ' ')}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-500 max-w-3xl font-light italic border-l-2 border-white/10 pl-8"
            >
              {subtitle}
            </motion.p>
          )}
        </header>

        <div className="relative">
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
            <SuccessCases onNavigate={setCurrentRoute} />
            <Problem />
            <div id="positioning" className="py-20 bg-deep-black flex justify-center overflow-hidden border-y border-white/5">
              <div className="whitespace-nowrap flex animate-[scroll_60s_linear_infinite] gap-10">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-black font-display text-white/[0.03] uppercase italic tracking-tighter">
                    Weskley Gomes • Matrículas em Escala • Captação de Alunos • Performance Digital • 
                  </span>
                ))}
              </div>
            </div>
            <Method />
            <Services />
            <Showcase onNavigate={setCurrentRoute} />
            <FAQ />
          </motion.div>
        );
      
      case 'case-reacao':
        return (
          <CyberWrapper title="Case Colégio Reação" subtitle="A transição radical de um legado analógico para uma vanguarda digital imersiva.">
            <div className="space-y-40">
              
              {/* Seção 01: O Choque de Realidade (Antes e Depois) */}
              <section>
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="flex items-center gap-4 mb-20"
                >
                  <Activity className="text-[#ff5a00]" />
                  <h4 className="font-bold uppercase tracking-[0.5em] text-xs text-white/50">Módulo 01: Audit de Interface</h4>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                  {/* Card Antes */}
                  <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <a 
                      href="https://mecanografiacode.github.io/siteinstitucional/infantil.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative block rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl"
                    >
                      <div className="absolute top-8 left-8 z-30 flex items-center gap-3">
                         <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                         <span className="text-[10px] font-black uppercase tracking-widest bg-black/80 backdrop-blur-md px-4 py-1 rounded-full border border-red-500/30">Interface Legada</span>
                      </div>
                      
                      {/* Efeito de Scanner */}
                      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-full h-1/2 bg-gradient-to-b from-transparent via-red-500/10 to-transparent"
                        />
                      </div>

                      <img src="https://i.imgur.com/v8bzVKV.png" alt="Legado" className="w-full h-auto grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-60" />
                      
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    </a>
                    <div className="mt-8 space-y-4">
                      <h5 className="text-2xl font-bold font-display uppercase tracking-tight">Obsolescência Digital</h5>
                      <p className="text-gray-500 font-light italic">"O design anterior falhava em transmitir a segurança e o carinho que a escola oferece fisicamente. Era uma barreira fria entre o pai e a matrícula."</p>
                    </div>
                  </motion.div>

                  {/* Card Depois */}
                  <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-[#ff5a00]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <a 
                      href="https://colegioreacao.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative block rounded-[3rem] overflow-hidden border-2 border-[#ff5a00]/30 bg-black shadow-[0_0_80px_rgba(255,90,0,0.1)]"
                    >
                      <div className="absolute top-8 left-8 z-30 flex items-center gap-3">
                         <span className="w-3 h-3 rounded-full bg-[#ff5a00] animate-pulse"></span>
                         <span className="text-[10px] font-black uppercase tracking-widest bg-[#ff5a00] text-black px-4 py-1 rounded-full">Engenharia Vanguarda</span>
                      </div>

                      {/* Efeito de Scanner Otimizado */}
                      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="w-full h-1/4 bg-gradient-to-b from-transparent via-[#ff5a00]/20 to-transparent"
                        />
                      </div>

                      <img src="https://i.imgur.com/JnlVmh8.png" alt="Depois" className="w-full h-auto" />
                    </a>
                    <div className="mt-8 space-y-4 text-right">
                      <h5 className="text-2xl font-bold font-display uppercase tracking-tight text-[#ff5a00]">Design que Converte</h5>
                      <p className="text-gray-300 font-light italic">"Criamos um ecossistema visual onde cada pixel foi planejado para reduzir a fricção e acelerar o agendamento da visita."</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Seção 02: O Motor Interno (ERP) */}
              <section className="relative">
                {/* Background Decorativo ERP */}
                <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
                
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="flex items-center gap-4 mb-20"
                >
                  <Cpu className="text-blue-400" />
                  <h4 className="font-bold uppercase tracking-[0.5em] text-xs text-blue-400/50">Módulo 02: Governança Operacional</h4>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-7 relative order-2 lg:order-1">
                    {/* Elementos Flutuantes do Blueprint */}
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-10 -left-10 z-20 p-4 bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl hidden md:block"
                    >
                      <Activity className="text-blue-400 mb-2" />
                      <div className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Server Status: Optimal</div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      className="relative rounded-[3rem] overflow-hidden border-2 border-blue-500/20 shadow-[0_0_100px_rgba(59,130,246,0.1)] perspective-1000"
                    >
                      <img src="https://i.imgur.com/3x4iV3H.png" alt="ERP Colégio Reação" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
                    <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none">
                      A <span className="text-blue-400 italic">Arquitetura</span> do Suporte.
                    </h3>
                    <div className="grid grid-cols-1 gap-8">
                       {[
                         { icon: <ClipboardList />, title: "Ordens de Serviço", desc: "Digitalização total das demandas de infraestrutura." },
                         { icon: <Database />, title: "Ativos & Frota", desc: "Controle de hardware e equipamentos em tempo real." },
                         { icon: <Users />, title: "Gestão Humana", desc: "Auditoria de acessos e performance da equipe técnica." },
                         { icon: <TrendingUp />, title: "BI & Reports", desc: "Métricas consolidadas para decisões da diretoria." }
                       ].map((item, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: 30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="flex gap-6 group"
                         >
                           <div className="shrink-0 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all">
                              {item.icon}
                           </div>
                           <div>
                              <h6 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-2">{item.title}</h6>
                              <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                           </div>
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Seção 03: Resultados (Data Visualization) */}
              <section className="py-32 relative">
                <div className="absolute inset-0 bg-white/[0.01] skew-y-3 rounded-[5rem]"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-start">
                   <div className="space-y-8">
                      <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#ff5a00]/10 border border-[#ff5a00]/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#ff5a00]">
                        <TrendingUp size={16} /> Performance Report
                      </div>
                      <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-none">
                        O impacto do <span className="text-[#ff5a00]">Código</span> nos <span className="italic">Resultados.</span>
                      </h2>
                      <p className="text-xl text-gray-500 font-light max-w-xl">
                        A transformação não foi apenas estética. Foi uma reconfiguração completa do funil de vendas escolar.
                      </p>
                      
                      <div className="flex flex-col gap-10 pt-8">
                         <div className="flex items-center gap-8">
                            <CountUp value="300" suffix="%" />
                            <div className="h-px flex-grow bg-white/10"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Conversão de Leads</span>
                         </div>
                         <div className="flex items-center gap-8">
                            <CountUp value="0.8" suffix="s" />
                            <div className="h-px flex-grow bg-white/10"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Loading Speed</span>
                         </div>
                      </div>
                   </div>

                   {/* Coluna Direita: Imagem e Explicação EMBAIXO */}
                   <div className="flex flex-col gap-12">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-[4rem] overflow-hidden border border-white/10 bg-black/60 shadow-2xl p-4 md:p-8"
                    >
                      {/* Foto Limpa sem texto em cima */}
                      <img src="https://i.imgur.com/3wVb3b0.png" alt="Gráfico de Resultados" className="w-full h-auto rounded-[3rem]" />
                    </motion.div>
                    
                    {/* Explicação posicionada claramente embaixo da foto */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="p-10 bg-[#ff5a00]/5 border border-[#ff5a00]/10 rounded-[3rem] shadow-xl"
                    >
                       <p className="text-gray-300 italic text-xl leading-relaxed">"Em 90 dias, o Colégio Reação atingiu a marca de escola mais buscada digitalmente na região, superando concorrentes com 20 anos de mercado."</p>
                       <div className="mt-8 flex items-center gap-4">
                          <div className="w-10 h-px bg-[#ff5a00]"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5a00]">Direção Comercial // Colégio Reação</span>
                       </div>
                    </motion.div>
                   </div>
                </div>
              </section>

              {/* Call to Action Final - Surreal */}
              <section className="relative py-40 flex flex-col items-center justify-center text-center">
                 <motion.div 
                   animate={{ 
                     scale: [1, 1.2, 1],
                     opacity: [0.1, 0.2, 0.1]
                   }}
                   transition={{ duration: 10, repeat: Infinity }}
                   className="absolute inset-0 bg-[#ff5a00] blur-[200px] rounded-full"
                 />
                 
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-white">
                      Próxima Parada:<br />Sua <span className="text-[#ff5a00]">Liderança.</span>
                    </h3>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a 
                        href="https://wa.me/5561981535040?text=Weskley, vi o case surreal do Colégio Reação e preciso desse nível de engenharia na minha escola."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-[#ff5a00] text-black font-black uppercase tracking-[0.2em] px-16 py-8 rounded-full shadow-[0_0_50px_rgba(255,90,0,0.5)] text-xl"
                      >
                        Iniciar Transformação <ArrowRight />
                      </a>
                    </motion.div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.5em]">Edição Limitada de Consultoria Trimestral</p>
                 </div>
              </section>

            </div>
          </CyberWrapper>
        );

      case 'metodo':
        return (
          <CyberWrapper title="Engenharia de Matrículas" subtitle="O framework técnico que desenvolvi para remover a sorte da captação escolar.">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#ff5a00]/10 rounded-xl text-[#ff5a00]"><Code2 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-2">Infraestrutura Veloz</h4>
                    <p className="text-gray-400">Desenvolvo cada projeto com foco em mobile-first, garantindo autoridade instantânea para sua escola.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#ff5a00]/10 rounded-xl text-[#ff5a00]"><BarChart3 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-2">Dados Geográficos</h4>
                    <p className="text-gray-400">Minha estratégia foca o tráfego pago nos bairros certos, otimizando seu investimento.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center">
                <p className="text-center italic text-gray-500">Framework Weskley Gomes V2.5 disponível para parceiros.</p>
              </div>
            </div>
          </CyberWrapper>
        );
      case 'servicos':
        return (
          <CyberWrapper title="Minhas Engrenagens" subtitle="Soluções educacionais desenhadas por quem entende de escala.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Explore como loto instituições de ensino de elite.</div>
          </CyberWrapper>
        );
      case 'portfolio':
        return (
          <CyberWrapper title="Showcase de Projetos" subtitle="Explore a qualidade técnica do meu trabalho aplicado ao ensino.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Projetos reais que confiam na minha visão estratégica.</div>
          </CyberWrapper>
        );
      case 'faq':
        return (
          <CyberWrapper title="Dúvidas Frequentes" subtitle="O que você precisa saber sobre trabalhar comigo.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Consultoria especializada em gestão escolar.</div>
          </CyberWrapper>
        );
      case 'privacidade':
      case 'termos':
      case 'cookies':
        return (
          <CyberWrapper title={currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)} subtitle="Informações legais.">
            <div className="space-y-6">
              <div className="flex gap-3 items-center text-[#ff5a00] mb-4">
                <ShieldCheck size={24} />
                <span className="font-bold uppercase tracking-widest">Segurança de Dados</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Trato os dados de famílias e alunos com o máximo sigilo e segurança técnica, seguindo a LGPD.
              </p>
              <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse"></div>
            </div>
          </CyberWrapper>
        );
      default:
        return (
          <CyberWrapper title="Weskley Gomes">
            <div className="h-40 flex items-center justify-center text-gray-500 italic">Página em construção.</div>
          </CyberWrapper>
        );
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#ff5a00] selection:text-white relative overflow-x-hidden">
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
          background-color: #050505;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
