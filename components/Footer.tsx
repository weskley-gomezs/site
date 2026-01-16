
import React from 'react';
import { Button } from './Button';
import { Instagram, ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20decidi%20pelo%20lucro.%20Quero%20meu%20Diagnóstico%20Gratuito.";

  const socials = {
    instagram: "https://www.instagram.com/weskley_gomezs/"
  };

  const handleNav = (route: any) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer id="contato" className="bg-black pt-40 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#ff5a00]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black font-display uppercase tracking-tighter leading-none mb-10">
            Lead é vaidade. <br />
            <span className="text-[#ff5a00]">LTV é Lucro.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Se você sente que seu negócio perde dinheiro no relacionamento com o cliente, <span className="text-white font-bold italic">eu estruturo sua escala.</span>
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Button variant="primary" className="px-16 md:px-24 py-8 md:py-10 text-xl md:text-2xl" onClick={() => window.open(whatsappUrl, '_blank')}>
              FAZER DIAGNÓSTICO GRATUITO <ArrowRight size={28} strokeWidth={4} />
            </Button>
            <p className="text-[10px] font-black tracking-[0.8em] text-gray-700 uppercase">Consultoria Estratégica para Negócios de Elite</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-16 pt-20 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <a href="#" onClick={handleNav('home')} className="group">
                <span className="font-display font-black uppercase tracking-tighter text-3xl">
                  WESKLEY <span className="text-[#ff5a00] group-hover:drop-shadow-[0_0_10px_#ff5a00] transition-all">GOMES</span>
                </span>
              </a>
            </div>
            <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed">
              Arquiteto de Estruturas de LTV. Transformamos clientes voláteis em ativos de lucro recorrente.
            </p>
            <div className="flex gap-6">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-[#ff5a00] text-gray-400 hover:text-black transition-all rounded-2xl border border-white/5">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] mb-10 text-xs">Acesso Core</h4>
            <ul className="space-y-6 text-gray-500 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={handleNav('metodo')} className="hover:text-[#ff5a00] transition-colors">Método LTV</button></li>
              <li><button onClick={handleNav('servicos')} className="hover:text-[#ff5a00] transition-colors">Soluções Scale</button></li>
              <li><button onClick={handleNav('portfolio')} className="hover:text-[#ff5a00] transition-colors">Cases de Relacionamento</button></li>
              <li><button onClick={handleNav('faq')} className="hover:text-[#ff5a00] transition-colors">Dúvidas Técnicas</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] mb-10 text-xs">Soberania</h4>
            <ul className="space-y-6 text-gray-500 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={handleNav('privacidade')} className="hover:text-[#ff5a00] transition-colors">Privacidade</button></li>
              <li><button onClick={handleNav('termos')} className="hover:text-[#ff5a00] transition-colors">Termos Core</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Weskley Gomes • Engineering for the 1%. 
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-gray-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em]"
          >
            SISTEMA AO TOPO <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
