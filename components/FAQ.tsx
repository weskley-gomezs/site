
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-8 flex justify-between items-center text-left hover:text-[#ff5a00] transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight">{question}</span>
        <div className={`p-2 rounded-full border transition-all ${isOpen ? 'bg-[#ff5a00] border-[#ff5a00] text-black' : 'border-white/20 text-white group-hover:border-[#ff5a00]'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] pb-8' : 'max-h-0'}`}>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-16 text-center">
          Dúvidas <span className="text-[#ff5a00]">Frequentes</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <FAQItem 
            question="Funciona para negócios pequenos?"
            answer="Sim. No entanto, focamos em negócios que já entendem o valor do digital e buscam escala. Se você está começando mas tem visão de longo prazo, Weskley Gomes é o parceiro ideal para garantir que seu primeiro passo seja tecnicamente perfeito."
          />
          <FAQItem 
            question="Preciso investir muito para começar?"
            answer="O investimento é proporcional ao objetivo. Ativos digitais de alta performance requerem tecnologia e estratégia sérias. Não sou a opção mais barata do mercado, mas sou o investimento com maior foco em retorno financeiro real através de sistemas robustos."
          />
          <FAQItem 
            question="Vocês entregam o código?"
            answer="Sim. Transparência total. No caso de sites e SaaS, o código é seu. Não prendo clientes através de plataformas proprietárias ou 'caixas-pretas' técnicas."
          />
          <FAQItem 
            question="Em quanto tempo vejo resultado?"
            answer="Projetos de sistema e gestão de leads costumam levar entre 15 a 45 dias para implementação da primeira fase. Os resultados operacionais são imediatos após o deploy, com a otimização completa dos fluxos de leads ocorrendo nos primeiros 90 dias."
          />
        </div>
      </div>
    </section>
  );
};
