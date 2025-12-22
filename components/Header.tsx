
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5561981535040?text=Olá,%20vim%20pelo%20site%20da%20NX%20Company%20e%20gostaria%20de%20falar%20com%20um%20especialista.";
  const logoUrl = "https://i.imgur.com/etRVFsd.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Tamanho reduzido e posicionado à esquerda */}
        <div className="flex items-center shrink-0">
          <a href="#" onClick={handleLogoClick} className="transition-transform duration-300 hover:scale-105 block">
            <img 
              src={logoUrl} 
              alt="NX Company Logo" 
              className={`transition-all duration-500 w-auto ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`} 
            />
          </a>
        </div>

        {/* Botão de CTA na Direita */}
        <div className="hidden md:flex items-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative overflow-hidden group border border-[#ff5a00] px-8 py-3 text-[10px] font-bold text-[#ff5a00] hover:bg-[#ff5a00] hover:text-white transition-all uppercase tracking-[0.2em] rounded-full inline-block shadow-[0_0_10px_rgba(255,90,0,0.2)] hover:shadow-[0_0_20px_rgba(255,90,0,0.5)]"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] animate-infinite-shine pointer-events-none"></span>
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-white p-2 hover:text-[#ff5a00] transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Premium */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black fixed inset-0 z-40 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          <button 
            className="absolute top-10 right-10 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          
          <img src={logoUrl} alt="NX Company Logo" className="h-20 w-auto mb-20" />
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)} 
            className="w-full max-w-xs bg-[#ff5a00] text-center py-6 font-bold uppercase tracking-[0.2em] rounded-full relative overflow-hidden group shadow-[0_0_40px_rgba(255,90,0,0.5)] text-lg"
          >
             <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] animate-infinite-shine pointer-events-none"></span>
             Validar Projeto
          </a>
          
          <div className="mt-16 flex flex-col items-center gap-6">
             <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">High Performance Assets</span>
             <div className="flex gap-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]/50 animate-pulse delay-150"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]/20 animate-pulse delay-300"></div>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};
