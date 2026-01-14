
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative pl-16 pb-12 border-l border-white/10 last:border-0 last:pb-0 group">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-black border-2 border-[#ff5a00] flex items-center justify-center font-bold text-[#ff5a00] font-display z-10 group-hover:bg-[#ff5a00] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(255,90,0,0.2)]">
      {number}
    </div>
    <h3 className="text-2xl font-bold font-display uppercase mb-4 tracking-tight group-hover:text-[#ff5a00] transition-colors">{title}</h3>
    <p className="text-gray-400 max-w-xl text-lg leading-relaxed">{description}</p>
  </div>
);

export const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-hex" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0L50 15V45L25 60L0 45V15L25 0Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-hex)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-black font-display uppercase leading-none tracking-tighter mb-8">
                THE <span className="text-[#ff5a00]">SYSTEMIC</span> METHOD
              </h2>
              <p className="text-lg text-gray-500 mb-8 italic">
                Reverse engineering to create sites that don't just impress, they sell.
              </p>
              <div className="w-20 h-1 bg-[#ff5a00] mb-6"></div>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">
                Funnel Design & Conversion Logic
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-4">
              <Step 
                number="01"
                title="FUNNEL AUDIT"
                description="We analyze your customer journey. Where do they click? Why do they leave? We identify the friction points preventing conversion on your current site."
              />
              <Step 
                number="02"
                title="STRATEGIC UX"
                description="We design the interface focused on consumer psychology. Each section is planned to break objections and increase the visitor's desire to buy."
              />
              <Step 
                number="03"
                title="ELITE CODE"
                description="Developed in React/Vite for extreme performance. Instant loading ensuring no lead is lost due to technical slowness."
              />
              <Step 
                number="04"
                title="RESULT OPTIMIZATION"
                description="Installation of advanced tracking tools and heatmaps to monitor and scale the conversion rate of your new digital ecosystem."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
