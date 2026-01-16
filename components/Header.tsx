
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5561981535040?text=Weskley,%20quero%20o%20Diagnóstico%20Gratuito%20que%20vi%20no%20cabeçalho.";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center shrink-0">
          <a href="#" onClick={handleLogoClick} className="group">
            <span className={`font-display font-black uppercase tracking-tighter transition-all duration-500 ${isScrolled ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'}`}>
              WESKLEY <span className="text-[#ff5a00] group-hover:drop-shadow(0 0 15px #ff5a00) transition-all">GOMES</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
           <nav className="flex gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">
              <a href="#servicos" className="hover:text-white transition-colors relative group">
                SOLUÇÕES
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff5a00] group-hover:w-full transition-all"></span>
              </a>
              <a href="#metodo" className="hover:text-white transition-colors relative group">
                MÉTODO
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff5a00] group-hover:w-full transition-all"></span>
              </a>
           </nav>
           
           <motion.a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group border-2 border-[#ff5a00] px-8 py-3.5 text-[10px] font-black text-black bg-[#ff5a00] transition-all uppercase tracking-[0.4em] rounded-full inline-flex items-center gap-3 shadow-[0_10px_30px_rgba(255,90,0,0.2)]"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[25deg] group-hover:left-[150%] transition-all duration-700"></span>
            DIAGNÓSTICO GRATUITO
            <ArrowRight size={16} strokeWidth={4} />
          </motion.a>
        </div>

        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-3xl fixed inset-0 z-40 flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
          <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={40} />
          </button>
          
          <div className="flex flex-col gap-10 text-center mb-16">
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter text-gray-500 hover:text-white">SOLUÇÕES</a>
              <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter text-gray-500 hover:text-white">O MÉTODO</a>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-sm bg-[#ff5a00] text-black text-center py-6 font-black uppercase tracking-[0.3em] rounded-full shadow-[0_20px_50px_rgba(255,90,0,0.4)] flex items-center justify-center gap-4 text-sm"
          >
             DIAGNÓSTICO GRATUITO <ArrowRight size={20} strokeWidth={4} />
          </a>
        </div>
      )}
    </header>
  );
};
