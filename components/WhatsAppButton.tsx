
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Olá!%20Sou%20do%20site%20e%20gostaria%20de%20um%20contato%20técnico%20estratégico.";

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-[9999]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-5 bg-black/90 backdrop-blur-2xl border border-white/10 pl-7 pr-4 py-4 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:border-[#ff5a00]/40 transition-all duration-700"
      >
        <div className="flex flex-col items-end">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#ff5a00] mb-0.5 opacity-70">Canal de Elite</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white">Concierge Técnico</span>
            <ArrowUpRight size={12} className="text-[#ff5a00] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <div className="relative">
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#ff5a00] blur-[20px] rounded-full"
          />
          <div className="relative bg-[#ff5a00] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-active:scale-95 transition-all duration-500">
            <MessageCircle size={26} strokeWidth={2.5} />
            <motion.span 
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-black rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Shine highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </a>
    </motion.div>
  );
};
