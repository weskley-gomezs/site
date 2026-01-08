
import React from 'react';
import { motion } from 'framer-motion';

export const SuccessCases: React.FC = () => {
  const logoUrl = 'https://i.imgur.com/LESvkxT.png';
  const targetUrl = 'https://colegioreacao.com';

  return (
    <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background ambient glow for aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff5a00]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-2">
              Parceria Estratégica
            </p>
            <div className="h-px w-12 bg-[#ff5a00]/30 mx-auto"></div>
          </motion.div>

          <motion.a 
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group cursor-pointer block"
          >
            {/* Subtle glow behind the logo on hover */}
            <div className="absolute inset-0 bg-[#ff5a00]/0 group-hover:bg-[#ff5a00]/10 blur-3xl transition-all duration-700 rounded-full"></div>
            
            <div className="relative flex items-center justify-center p-8">
              <img 
                src={logoUrl} 
                alt="Colegio Reação" 
                className="h-24 md:h-36 w-auto object-contain filter brightness-100 transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(255,90,0,0.3)]" 
              />
            </div>
            
            {/* Visual indicator for clickability */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[9px] text-[#ff5a00] font-bold tracking-[0.3em] uppercase">
              Visitar Site
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-600 uppercase">Projetos de Alta Performance</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
