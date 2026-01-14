
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561981535040?text=Hello!%20I'm%20from%20the%20website%20and%20I'd%20like%20a%20strategic%20audit%20for%20my%20project.";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center group"
      >
        {/* Pulsing Attention Ring (NX Orange) */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#ff5a00]/40 opacity-75"></span>
        
        {/* Sidebar Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl border border-black/5 translate-x-4 group-hover:translate-x-0">
          Strategic Support
        </span>

        {/* Main Button */}
        <div className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-110 active:scale-90">
          <MessageCircle size={32} strokeWidth={2.5} />
          
          {/* Online Status Badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#ff5a00] border-2 border-white rounded-full"></span>
        </div>
      </a>
    </motion.div>
  );
};
