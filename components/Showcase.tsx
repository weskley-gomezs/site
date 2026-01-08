
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Mockup: React.FC<{ imageUrl: string; title: string; tag: string; link: string }> = ({ imageUrl, title, tag, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden bg-white/5 aspect-video border border-white/5 rounded-3xl block cursor-pointer transition-all duration-500 hover:border-[#ff5a00]/50"
  >
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex justify-between items-end">
        <div>
           <span className="text-[#ff5a00] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">{tag}</span>
           <h4 className="text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight">{title}</h4>
        </div>
        <div className="bg-[#ff5a00] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-[0_0_20px_rgba(255,90,0,0.4)]">
           <ExternalLink size={20} className="text-black" />
        </div>
      </div>
    </div>
  </a>
);

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4">
              PENSAMENTO <span className="text-[#ff5a00]">VISUAL</span>
            </h2>
            <p className="text-xl text-gray-400">
              Projetos reais e conceitos de alta performance desenvolvidos pela NX Company. Clique para navegar em cada ativo digital.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold tracking-widest text-[#ff5a00] uppercase mb-1">Portfolio & Concepts</p>
            <div className="h-1 w-24 bg-[#ff5a00] ml-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Mockup 
            imageUrl="https://i.imgur.com/aMoMRlq.png"
            title="Colégio Reação"
            tag="Site informativo com CTA de alta conversão"
            link="https://colegioreacao.com"
          />
          <Mockup 
            imageUrl="https://i.imgur.com/GPLB9Op.png"
            title="Clínica de Estética de Luxo"
            tag="High Performance / Aesthetics"
            link="https://estetica-2-0.vercel.app"
          />
          <Mockup 
            imageUrl="https://i.imgur.com/amn0xlY.png"
            title="Clínica de Estética Premium"
            tag="Landing Page / Estética"
            link="https://estetica.weskleygomes.site/"
          />
          <Mockup 
            imageUrl="https://i.imgur.com/TAF2QoA.png"
            title="Escritório de Advocacia"
            tag="Corporate Site / Law"
            link="https://advocracia.vercel.app/"
          />
          <Mockup 
            imageUrl="https://i.imgur.com/JNmYOVP.png"
            title="Lançamento Curso de Violão"
            tag="High Conversion LP / Music"
            link="https://lp-curso-de-vioao.vercel.app/"
          />
          <Mockup 
            imageUrl="https://i.imgur.com/4fiTPqo_d.png?maxwidth=520&shape=thumb&fidelity=high"
            title="SaaS de Agendamento Inteligente"
            tag="Software as a Service / Booking"
            link="https://app.weskleygomes.site"
          />
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase italic">
            Visualize como a NX Company estrutura a experiência do seu usuário para maximizar faturamento.
          </p>
        </div>
      </div>
    </section>
  );
};
