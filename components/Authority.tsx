
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Star } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section className="py-32 bg-[#f8f8f8] border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="text-[#ff5a00]" size={32} />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-gray-400">Publicação Oficial</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter text-black leading-none mb-8">
              De Curioso a <br />
              <span className="text-[#ff5a00]">Vendedor</span> do <br />
              Seu Negócio.
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Weskley Gomes consolidou anos de campo de batalha em um guia prático para empresários que cansaram de depender da sorte e decidiram dominar o processo.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-white border border-black/5 rounded-2xl">
                <Star className="text-[#ff5a00] mb-4" fill="#ff5a00" />
                <h4 className="font-black text-black uppercase text-sm mb-2">Autoridade Sóbria</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Resultado Real</p>
              </div>
              <div className="p-6 bg-white border border-black/5 rounded-2xl">
                <Award className="text-[#ff5a00] mb-4" />
                <h4 className="font-black text-black uppercase text-sm mb-2">Estrategista B2B</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Foco em Processo</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-black/10 blur-[100px] rounded-full group-hover:bg-[#ff5a00]/20 transition-all duration-700"></div>
              <img 
                src="https://i.imgur.com/DUAXPVn.jpeg" 
                alt="Weskley Gomes - Livro" 
                className="relative z-10 w-full max-w-md h-auto rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] grayscale hover:grayscale-0 transition-all duration-1000 rotate-2 group-hover:rotate-0"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#ff5a00] text-black font-black p-10 rounded-full shadow-2xl z-20 hidden md:block group-hover:scale-110 transition-transform">
                <span className="text-3xl font-display">BEST<br />SELLER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
