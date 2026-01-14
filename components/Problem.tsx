
import React from 'react';
import { TrendingDown, Target, Zap, Settings, ShieldAlert } from 'lucide-react';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-10 glass-card hover:border-[#ff5a00]/50 transition-all duration-700 group rounded-[2.5rem] relative overflow-hidden">
    <div className="text-[#ff5a00] mb-8 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-display mb-4 uppercase tracking-tight text-white">{title}</h3>
    <p className="text-gray-400 text-base leading-relaxed font-light">{text}</p>
    
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#ff5a00]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="lg:sticky lg:top-40">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#ff5a00]/20 rounded-full bg-[#ff5a00]/5 mb-8">
              <ShieldAlert size={14} className="text-[#ff5a00]" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ff5a00]">Leak Analysis</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tighter leading-[0.9] mb-10">
              Amateur sites <br />leak <span className="text-[#ff5a00]">profit.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed">
              Investing in traffic is useless if your site is an exit barrier. If your interface doesn't convey <span className="text-white font-medium">instant authority</span>, your lead buys from the competitor.
            </p>
            <div className="mt-12 h-1.5 w-24 bg-gradient-to-r from-[#ff5a00] to-transparent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-0">
            <ProblemCard 
              icon={<TrendingDown size={36} strokeWidth={1.5} />}
              title="Lead Loss"
              text="Users abandon the site in seconds due to a lack of strategic clarity and visual appeal."
            />
            <ProblemCard 
              icon={<Zap size={36} strokeWidth={1.5} />}
              title="Fatal Slowness"
              text="Heavy sites that destroy your quality score on Google and Facebook Ads."
            />
            <ProblemCard 
              icon={<Target size={36} strokeWidth={1.5} />}
              title="Directionless Design"
              text="Beautiful layouts that miserably fail to guide the user to the purchase button."
            />
            <ProblemCard 
              icon={<Settings size={36} strokeWidth={1.5} />}
              title="Broken Mobile"
              text="Interfaces that don't work on mobile, where 90% of your traffic actually happens."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
