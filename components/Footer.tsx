
import React from 'react';
import { Button } from './Button';
import { Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá,%20vim%20pelo%20site%20Weskley%20Gomes%20e%20gostaria%20de%20iniciar%20uma%20conversa%20estratégica%20para%20minha%20escola.";

  const socials = {
    instagram: "https://www.instagram.com/weskley_gomezs/"
  };

  const handleNav = (route: any) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer id="contato" className="bg-deep-black pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ff5a00]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-none mb-8">
            Sua escola pronta para <br />
            <span className="text-[#ff5a00]">escala máxima?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Diagnóstico inicial sem compromisso. Uma conversa estratégica diretamente com Weskley Gomes para validar sua estrutura.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="px-12 py-6 text-xl" onClick={() => window.open(whatsappUrl, '_blank')}>
              Quero alunos novos
            </Button>
          </div>
          <p className="mt-8 text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
            Agenda aberta para consultorias de alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <a href="#" onClick={handleNav('home')} className="hover:opacity-80 transition-opacity">
                <span className="font-display font-black uppercase tracking-tighter text-2xl">
                  WESKLEY <span className="text-[#ff5a00]">GOMES</span>
                </span>
              </a>
            </div>
            <p className="text-gray-500 max-w-xs mb-8">
              Engenharia de captação e design de marca focado em instituições de ensino de elite. Transformando autoridade em faturamento.
            </p>
            <div className="flex gap-4">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-[#ff5a00] text-gray-400 hover:text-white transition-all rounded-full">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><button onClick={handleNav('metodo')} className="hover:text-white transition-colors text-left">Método CAPTA</button></li>
              <li><button onClick={handleNav('servicos')} className="hover:text-white transition-colors text-left">Nossas Soluções</button></li>
              <li><button onClick={handleNav('portfolio')} className="hover:text-white transition-colors text-left">Cases Educacionais</button></li>
              <li><button onClick={handleNav('faq')} className="hover:text-white transition-colors text-left">FAQ Estratégico</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><button onClick={handleNav('privacidade')} className="hover:text-white transition-colors text-left">Privacidade</button></li>
              <li><button onClick={handleNav('termos')} className="hover:text-white transition-colors text-left">Termos de Uso</button></li>
              <li><button onClick={handleNav('cookies')} className="hover:text-white transition-colors text-left">Cookies</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Weskley Gomes. Todos os direitos reservados. 
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-all text-sm uppercase font-bold tracking-widest"
          >
            Voltar ao topo <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
