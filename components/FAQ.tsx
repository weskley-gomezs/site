
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
          Common <span className="text-[#ff5a00]">Questions</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <FAQItem 
            question="Does it work for small businesses?"
            answer="Yes. However, we focus on businesses that already understand digital value and seek scale. If you're just starting out but have a long-term vision, Weskley Gomes is the ideal partner to ensure your first step is technically perfect."
          />
          <FAQItem 
            question="Do I need a large investment to start?"
            answer="The investment is proportional to the goal. High-performance digital assets require serious technology and strategy. I am not the cheapest option on the market, but I am the investment with the greatest focus on real financial return through robust systems."
          />
          <FAQItem 
            question="Do you deliver the source code?"
            answer="Yes. Full transparency. For sites and SaaS, the code is yours. I do not lock clients into proprietary platforms or technical 'black boxes'."
          />
          <FAQItem 
            question="How soon will I see results?"
            answer="System projects and lead management usually take between 15 to 45 days for first-phase implementation. Operational results are immediate after deployment, with full lead flow optimization occurring within the first 90 days."
          />
        </div>
      </div>
    </section>
  );
};
