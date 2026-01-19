
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LayoutGrid, Cpu } from 'lucide-react';

interface PrelandingProps {
  onEnter: () => void;
}

const ProjectCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  logoUrl?: string;
  tag: string;
  theme: 'light' | 'dark';
  onClick?: () => void;
  externalLink?: string;
}> = ({ title, subtitle, description, logoUrl, tag, theme, onClick, externalLink }) => {
  const isLight = theme === 'light';
  
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative group cursor-pointer flex flex-col h-full rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 overflow-hidden ${
        isLight 
        ? 'bg-white border-black/5 text-black shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]' 
        : 'bg-black border-white/10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#ff5a00]/40'
      }`}
      onClick={onClick ? onClick : () => externalLink && window.open(externalLink, '_blank')}
    >
      {/* Background Decor */}
      {!isLight && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5a00]/10 blur-[60px] rounded-full group-hover:bg-[#ff5a00]/20 transition-all"></div>
      )}
      
      {/* Header Info */}
      <div className="relative z-10 mb-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 ${
          isLight ? 'bg-gray-100' : 'bg-[#ff5a00]/10 border border-[#ff5a00]/20'
        }`}>
          <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-500' : 'text-[#ff5a00]'}`}>
            {tag}
          </span>
        </div>
        
        {/* Logo Container */}
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-8 overflow-hidden bg-white shadow-inner p-2 border transition-all duration-500 group-hover:scale-110 ${
          isLight ? 'border-gray-100' : 'border-white/5'
        }`}>
          {logoUrl ? (
            <img src={logoUrl} alt={title} className="w-full h-full object-contain" />
          ) : (
            <div className="bg-black w-full h-full flex items-center justify-center rounded-xl">
               <span className="text-[#ff5a00] font-display font-black text-2xl">WG</span>
            </div>
          )}
        </div>
        
        <h3 className={`text-3xl md:text-4xl font-black font-display uppercase tracking-tighter leading-none mb-2 ${
           isLight ? 'text-black' : 'text-white'
        }`}>
          {title}
        </h3>
        <p className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4`}>
          {subtitle}
        </p>
      </div>

      <p className={`relative z-10 text-sm md:text-base font-medium leading-relaxed mb-10 flex-grow ${
        isLight ? 'text-gray-500' : 'text-gray-400'
      }`}>
        {description}
      </p>

      <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-current opacity-10 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
          {isLight ? 'Acessar Software' : 'Acessar Consultoria'}
        </span>
        <div className={`p-3 rounded-full transition-transform group-hover:translate-x-2 ${
          isLight ? 'bg-black text-white' : 'bg-[#ff5a00] text-black shadow-[0_0_20px_rgba(255,90,0,0.4)]'
        }`}>
          <ArrowRight size={18} strokeWidth={3} />
        </div>
      </div>
    </motion.div>
  );
};

export const Prelanding: React.FC<PrelandingProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] overflow-y-auto selection:bg-[#ff5a00] selection:text-white pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff5a00]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md"
          >
            <Cpu size={14} className="text-[#ff5a00]" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-400">Hub de Ecossistemas Weskley Gomes</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-[0.9] text-white"
          >
            ESCOLHA SEU <br />
            <span className="text-[#ff5a00]">PRÓXIMO NÍVEL.</span>
          </motion.h1>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full relative z-10">
          
          {/* DesperdiControl */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            <ProjectCard 
              theme="light"
              tag="Software • Eficiência"
              logoUrl="https://i.imgur.com/brpkzky.png"
              title="DesperdiControl"
              subtitle="IA Contra Desperdício"
              description="A tecnologia soberana que utiliza inteligência artificial para detectar e estancar vazamentos de lucro em operações complexas."
              externalLink="https://controle.weskleygomes.site"
            />
          </motion.div>

          {/* Estigenda */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
          >
            <ProjectCard 
              theme="light"
              tag="Software • Gestão"
              logoUrl="https://i.imgur.com/w0aopM2.jpeg"
              title="Estigenda"
              subtitle="Escala de Agenda"
              description="Sistema de gestão e agendamento para micro-empreendedoras que buscam liberdade e previsibilidade no relacionamento com clientes."
              externalLink="https://app.weskleygomes.site"
            />
          </motion.div>

          {/* Portfólio WG */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <ProjectCard 
              theme="dark"
              tag="Arquiteto de LTV"
              title="Consultoria WG"
              subtitle="Engenharia de Elite"
              description="Acesse o core estratégico para estruturar o relacionamento e a escala da sua marca através do Método LTV original."
              onClick={onEnter}
            />
          </motion.div>

        </div>

        {/* Technical Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-6 text-[9px] font-black uppercase tracking-[0.6em] text-gray-700">
             <span>Soberania Digital</span>
             <div className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full"></div>
             <span>Escala Máxima</span>
             <div className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full"></div>
             <span>Processo > Sorte</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
