
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (route: 'home' | 'metodo' | 'servicos' | 'portfolio' | 'faq' | 'privacidade' | 'termos' | 'cookies') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5561981535040?text=Hello,%20I'm%20visiting%20the%20Weskley%20Gomes%20website%20and%20I'd%20like%20to%20speak%20with%20a%20specialist.";

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
              WESKLEY <span className="text-[#ff5a00] group-hover:drop-shadow-[0_0_8px_#ff5a00] transition-all">GOMES</span>
            </span>
          </a>
        </div>

        {/* Navigation / CTA */}
        <div className="hidden md:flex items-center gap-8">
           <nav className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <a href="#servicos" className="hover:text-white transition-colors">Works</a>
              <a href="#metodo" className="hover:text-white transition-colors">Method</a>
           </nav>
           <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative overflow-hidden group border border-[#ff5a00]/30 px-10 py-3 text-[9px] font-black text-[#ff5a00] hover:bg-[#ff5a00] hover:text-black transition-all uppercase tracking-[0.4em] rounded-full inline-block"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] animate-infinite-shine pointer-events-none"></span>
            Validate
          </a>
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
        <div className="md:hidden bg-black/95 backdrop-blur-2xl fixed inset-0 z-40 flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
          <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          
          <span className="font-display font-black uppercase tracking-tighter text-4xl mb-16">
            WESKLEY <span className="text-[#ff5a00]">GOMES</span>
          </span>
          
          <div className="flex flex-col gap-8 text-center mb-16">
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-gray-400">Works</a>
              <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-gray-400">Method</a>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#ff5a00] text-black text-center py-6 font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(255,90,0,0.3)]"
          >
             Contact
          </a>
        </div>
      )}
    </header>
  );
};
