
import React from 'react';
import { motion } from 'framer-motion';

export const SuccessCases: React.FC = () => {
  const logoUrl = 'https://i.imgur.com/LESvkxT.png';
  const targetUrl = 'https://colegioreacao.com';

  return (
    <section className="py-16 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff5a00]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/3">
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-4 block">
              Trusted Performance
            </p>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight">
              Projetos que operam em <span className="text-[#ff5a00]">escala máxima</span>.
            </h3>
          </div>

          <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-12 md:gap-20">
            <motion.a 
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.5, filter: 'grayscale(100%)' }}
              whileInView={{ opacity: 1, filter: 'grayscale(0%)' }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer block"
            >
              <img 
                src={logoUrl} 
                alt="Colegio Reação" 
                className="h-20 md:h-28 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,90,0,0.2)]" 
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[8px] text-[#ff5a00] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                Live Preview ↗
              </div>
            </motion.a>

            {/* Placeholder for future elite partners to maintain visual balance */}
            <div className="opacity-10 grayscale hover:opacity-20 transition-all cursor-default">
              <span className="text-2xl font-black font-display uppercase tracking-widest text-white">SaaS Tech</span>
            </div>
            <div className="opacity-10 grayscale hover:opacity-20 transition-all cursor-default hidden sm:block">
              <span className="text-2xl font-black font-display uppercase tracking-widest text-white">Scale Up</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
