
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 shadow-[0_0_50px_rgba(255,90,0,0.1)]">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
          <h3 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-[#ff5a00] transition-all"
          >
            <X size={32} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 overflow-y-auto text-gray-400 leading-relaxed font-light">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#0a0a0a] flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-white/5 hover:bg-[#ff5a00] text-white hover:text-black font-bold uppercase tracking-widest rounded-full transition-all text-sm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
