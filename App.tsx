
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
  Cpu,
  ArrowRight,
  TrendingUp,
  Users,
  Database,
  ClipboardList,
  Activity,
  MousePointer2
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

type Route = 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies' | 'case-reacao';

const CountUp = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl md:text-7xl font-black font-display text-[#ff5a00] tracking-tighter"
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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
      {/* Background Architectural Grid */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff5a00]/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff5a00]/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff5a0008_0%,transparent_70%)]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.button 
          whileHover={{ x: -10 }}
          onClick={() => setCurrentRoute('home')}
          className="flex items-center gap-3 text-[#ff5a00] font-bold uppercase tracking-[0.4em] text-[10px] mb-16 px-8 py-3 border border-[#ff5a00]/30 rounded-full bg-[#ff5a00]/5 backdrop-blur-xl hover:bg-[#ff5a00]/10 transition-all"
        >
          <ArrowLeft size={16} /> Back
        </motion.button>
        
        <header className="mb-32 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            className="h-1.5 bg-[#ff5a00] mb-10"
          />
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black font-display uppercase tracking-tighter mb-8 leading-[0.9]"
          >
            {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <span key={i} className="text-[#ff5a00] block md:inline">{word}</span> : word + ' ')}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl font-light italic border-l-2 border-[#ff5a00]/30 pl-10 py-2"
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
            <div id="positioning" className="py-24 bg-[#0a0a0a] flex justify-center overflow-hidden border-y border-white/5">
              <div className="whitespace-nowrap flex animate-[scroll_50s_linear_infinite] gap-12">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-7xl md:text-9xl font-black font-display text-white/[0.02] uppercase italic tracking-tighter">
                    Weskley Gomes • Conversion Engineering • High Performance Sites • Conversion UX • Brand Strategy • 
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
          <CyberWrapper title="Case Reação College" subtitle="The radical transition from an analog legacy to an immersive digital vanguard, unifying site and technical management.">
            <div className="space-y-48">
              
              {/* Section 01: Conversion Audit */}
              <section>
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="flex items-center gap-6 mb-24"
                >
                  <Activity className="text-[#ff5a00] w-8 h-8" />
                  <h4 className="font-bold uppercase tracking-[0.6em] text-sm text-gray-500">Module 01: Conversion Audit</h4>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
                  <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-red-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative block rounded-[4rem] overflow-hidden border border-white/5 bg-black/40 shadow-2xl">
                      <div className="absolute top-10 left-10 z-30 flex items-center gap-4">
                         <span className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></span>
                         <span className="text-xs font-black uppercase tracking-widest bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-red-500/20">Legacy Site</span>
                      </div>
                      <img src="https://i.imgur.com/v8bzVKV.png" alt="Legacy" className="w-full h-auto grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-60" />
                    </div>
                    <div className="mt-12 space-y-6">
                      <h5 className="text-3xl font-black font-display uppercase tracking-tight">Interest Loss</h5>
                      <p className="text-gray-500 text-lg font-light leading-relaxed">"The old site was a static catalog that failed to convert visitors into actual enrollments."</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-4 bg-[#ff5a00]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative block rounded-[4rem] overflow-hidden border-2 border-[#ff5a00]/20 bg-[#0a0a0a] shadow-[0_0_100px_rgba(255,90,0,0.05)]">
                      <div className="absolute top-10 left-10 z-30 flex items-center gap-4">
                         <span className="w-4 h-4 rounded-full bg-[#ff5a00] animate-pulse"></span>
                         <span className="text-xs font-black uppercase tracking-widest bg-[#ff5a00] text-black px-6 py-2 rounded-full">Sales Interface</span>
                      </div>
                      <img src="https://i.imgur.com/JnlVmh8.png" alt="After" className="w-full h-auto" />
                    </div>
                    <div className="mt-12 space-y-6 lg:text-right">
                      <h5 className="text-3xl font-black font-display uppercase tracking-tight text-[#ff5a00]">Maximum Conversion</h5>
                      <p className="text-gray-300 text-lg font-light leading-relaxed">"Strategic visual engineering. Every pixel was optimized to accelerate the lead's journey."</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Section 02: Internal Engine */}
              <section className="relative">
                <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none"></div>
                
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="flex items-center gap-6 mb-24"
                >
                  <Cpu className="text-blue-500 w-8 h-8" />
                  <h4 className="font-bold uppercase tracking-[0.6em] text-sm text-blue-500/50">Module 02: Technical Performance</h4>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-20 items-center">
                  <div className="lg:col-span-7 relative order-2 lg:order-1">
                    <motion.div 
                      whileHover={{ scale: 1.03, rotateY: 3 }}
                      className="relative rounded-[4rem] overflow-hidden border border-blue-500/20 shadow-[0_0_120px_rgba(59,130,246,0.1)] transition-all duration-700"
                    >
                      <img src="https://i.imgur.com/3x4iV3H.png" alt="Reação ERP" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 space-y-16 order-1 lg:order-2">
                    <h3 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter leading-[0.9]">
                      Speed <span className="text-blue-500 italic">Matters.</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-10">
                       {[
                         { icon: <MousePointer2 />, title: "Fluid Interface", desc: "Instant navigation keeping the user engaged until the CTA." },
                         { icon: <Database />, title: "Data Tracking", desc: "Real-time monitoring of every click for continuous funnel optimization." },
                         { icon: <Users />, title: "User-Centric", desc: "Intuitive design removing any barrier between the lead and the sale." }
                       ].map((item, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: 30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.15 }}
                           className="flex gap-8 group"
                         >
                           <div className="shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-[1.5rem] text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                              {item.icon}
                           </div>
                           <div className="pt-2">
                              <h6 className="text-white font-black uppercase text-sm tracking-[0.3em] mb-3">{item.title}</h6>
                              <p className="text-gray-500 text-base font-light leading-relaxed">{item.desc}</p>
                           </div>
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 03: Results */}
              <section className="py-40 relative">
                <div className="absolute inset-0 bg-white/[0.02] -skew-y-2 rounded-[6rem]"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-24 lg:gap-40 items-start">
                   <div className="space-y-12">
                      <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#ff5a00]/10 border border-[#ff5a00]/20 rounded-full text-xs font-black uppercase tracking-[0.5em] text-[#ff5a00]">
                        <TrendingUp size={18} /> Explosive ROI
                      </div>
                      <h2 className="text-6xl md:text-8xl font-black font-display uppercase tracking-tighter leading-[0.85]">
                        Design that <span className="text-[#ff5a00]">Sells</span> with <span className="italic text-white">Class.</span>
                      </h2>
                      <p className="text-2xl text-gray-500 font-light max-w-xl leading-relaxed">
                        Weskley Gomes engineering transformed an institutional portal into a 24/7 lead generation machine.
                      </p>
                      
                      <div className="flex flex-col gap-14 pt-10">
                         <div className="flex items-center gap-10">
                            <CountUp value="300" suffix="%" />
                            <div className="h-px flex-grow bg-white/5"></div>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Conversion Increase</span>
                         </div>
                         <div className="flex items-center gap-10">
                            <CountUp value="0.7" suffix="s" />
                            <div className="h-px flex-grow bg-white/5"></div>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Instant Loading</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col gap-16">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-[5rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl p-6 md:p-12 transition-all duration-700"
                    >
                      <img src="https://i.imgur.com/3wVb3b0.png" alt="Results Graph" className="w-full h-auto rounded-[3.5rem]" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="p-12 md:p-16 bg-gradient-to-br from-[#ff5a00]/10 to-transparent border border-[#ff5a00]/20 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                       <div className="absolute top-0 right-0 p-8 opacity-10">
                          <Activity size={80} className="text-[#ff5a00]" />
                       </div>
                       <p className="text-gray-300 italic text-2xl md:text-3xl leading-relaxed mb-12 relative z-10">
                         "After the new site, our visit scheduling rate skyrocketed. The refined design brought in much higher quality leads."
                       </p>
                       <div className="flex items-center gap-6 relative z-10">
                          <div className="w-16 h-[2px] bg-[#ff5a00]"></div>
                          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ff5a00]">Marketing Board // Reação College</span>
                       </div>
                    </motion.div>
                   </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="relative py-48 flex flex-col items-center justify-center text-center">
                 <motion.div 
                   animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                   transition={{ duration: 12, repeat: Infinity }}
                   className="absolute inset-0 bg-[#ff5a00] blur-[220px] rounded-full"
                 />
                 
                 <div className="relative z-10 space-y-16">
                    <h3 className="text-6xl md:text-9xl font-black font-display uppercase tracking-tighter text-white leading-none">
                      Let's Build <br />your <span className="text-[#ff5a00]">Legacy.</span>
                    </h3>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a 
                        href="https://wa.me/5561981535040?text=Weskley,%20I%20need%20a%20site%20that%20converts%20like%20Reação%20College."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-6 bg-[#ff5a00] text-black font-black uppercase tracking-[0.3em] px-20 py-10 rounded-full shadow-[0_0_60px_rgba(255,90,0,0.4)] text-2xl"
                      >
                        Scale Now <ArrowRight size={28} />
                      </a>
                    </motion.div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-[0.8em]">Premium Conversion Engineering</p>
                 </div>
              </section>
            </div>
          </CyberWrapper>
        );

      case 'metodo':
        return (
          <CyberWrapper title="SYSTEMIC Engineering" subtitle="The strategic design framework I developed to transform visitors into revenue assets.">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-[#ff5a00]/10 rounded-2xl text-[#ff5a00] border border-[#ff5a00]/20"><MousePointer2 size={32} /></div>
                  <div>
                    <h4 className="text-2xl font-bold uppercase mb-4 tracking-tight">Funnel Audit</h4>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">We map every touchpoint to ensure your site is a straight line between the lead and the conversion.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-[#ff5a00]/10 rounded-2xl text-[#ff5a00] border border-[#ff5a00]/20"><Activity size={32} /></div>
                  <div>
                    <h4 className="text-2xl font-bold uppercase mb-4 tracking-tight">Performance UX</h4>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">Ultra-light and fast interfaces, designed to maintain lead attention and eliminate bounce rates.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a0a0a] p-16 rounded-[4rem] border border-white/5 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="w-24 h-[2px] bg-[#ff5a00] mb-8"></div>
                <p className="text-2xl font-light text-gray-400 italic mb-4">"Design is the silent ambassador of your brand."</p>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-600">Framework Weskley Gomes V4.0</span>
              </div>
            </div>
          </CyberWrapper>
        );
      default:
        return (
          <CyberWrapper title="Under Construction" subtitle="Page under technical maintenance.">
            <div className="h-40 flex items-center justify-center text-gray-500 italic text-xl">Archiving logs...</div>
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
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes infinite-shine {
          0% { transform: translateX(-150%) skewX(-25deg); }
          20% { transform: translateX(250%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #050505;
        }
      `}</style>
    </div>
  );
}

export default App;
