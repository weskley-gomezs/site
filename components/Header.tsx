
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5561981535040?text=Olá,%20estou%20visitando%20o%20site%20Weskley%20Gomes%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Text Logo - Weskley Gomes */}
        <div className="flex items-center shrink-0">
          <a href="#" onClick={handleLogoClick} className="group">
            <span className={`font-display font-black uppercase tracking-tighter transition-all duration-500 ${isScrolled ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'}`}>
              WESKLEY <span className="text-[#ff5a00] group-hover:drop-shadow(0 0 12px #ff5a00) transition-all">GOMES</span>
            </span>
          </a>
        </div>

        {/* Navigation / CTA */}
        <div className="hidden md:flex items-center gap-10">
           <nav className="flex gap-8 text-[11px] font-black uppercase tracking-[0.25em] text-gray-500">
              <a href="#servicos" className="hover:text-white transition-colors relative group">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff5a00] group-hover:w-full transition-all"></span>
              </a>
              <a href="#metodo" className="hover:text-white transition-colors relative group">
                Método
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff5a00] group-hover:w-full transition-all"></span>
              </a>
           </nav>
           
           <motion.a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group border-2 border-[#ff5a00] px-10 py-3.5 text-[11px] font-black text-black bg-[#ff5a00] transition-all uppercase tracking-[0.3em] rounded-full inline-flex items-center gap-3 shadow-[0_10px_20px_rgba(255,90,0,0.15)] hover:shadow-[0_15px_30px_rgba(255,90,0,0.3)]"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-[25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></span>
            Validar
            <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-3xl fixed inset-0 z-40 flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
          <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          
          <span className="font-display font-black uppercase tracking-tighter text-4xl mb-16">
            WESKLEY <span className="text-[#ff5a00]">GOMES</span>
          </span>
          
          <div className="flex flex-col gap-8 text-center mb-16">
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black uppercase tracking-widest text-gray-400 hover:text-[#ff5a00]">Serviços</a>
              <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black uppercase tracking-widest text-gray-400 hover:text-[#ff5a00]">Método</a>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#ff5a00] text-black text-center py-6 font-black uppercase tracking-[0.2em] rounded-full shadow-[0_15px_30px_rgba(255,90,0,0.3)] flex items-center justify-center gap-4"
          >
             Contato Técnico <ArrowRight size={20} strokeWidth={3} />
          </a>
        </div>
      )}
    </header>
  );
};
