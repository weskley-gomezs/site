
import React from 'react';
import { Button } from './Button';
import { Layout, Database, TrendingUp, Cpu, Terminal, ShieldCheck, Rocket, LayoutDashboard } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; items: string[]; link: string; badge?: string }> = ({ icon, title, items, link, badge }) => (
  <div className="flex flex-col h-full glass-card p-8 md:p-10 hover:border-[#ff5a00] transition-all duration-500 rounded-[2rem] md:rounded-[3rem] relative group">
    {badge && (
      <span className="absolute top-6 right-8 text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-[#ff5a00]/20 text-[#ff5a00] border border-[#ff5a00]/30 rounded-full">
        {badge}
      </span>
    )}
    <div className="text-[#ff5a00] mb-6 md:mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-bold font-display uppercase mb-4 md:mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-400">
          <span className="text-[#ff5a00] mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
          <span className="text-base md:text-lg leading-snug">{item}</span>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="w-full text-xs md:text-sm py-4 rounded-2xl" onClick={() => window.open(link, '_blank')}>
      Get Quote
    </Button>
  </div>
);

export const Services: React.FC = () => {
  const getWhatsappUrl = (service: string) => `https://wa.me/5561981535040?text=Hello,%20I'd%20like%20to%20know%20more%20about%20high-performance%20${service}.`;

  return (
    <section id="servicos" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center">
          <div className="inline-block px-4 py-1 border border-[#ff5a00]/20 rounded-full bg-[#ff5a00]/5 mb-4">
             <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff5a00]">Conversion Engineering</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-display uppercase tracking-tighter mb-4">
            HIGH-FIDELITY <span className="text-[#ff5a00]">SOLUTIONS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Interfaces planned for brands that don't accept mediocre results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard 
            badge="Direct Response"
            icon={<Rocket size={48} strokeWidth={1.5} />}
            title="Landing Pages"
            items={[
              "Sales LPs for Info Products",
              "High-Conversion Capture Pages",
              "Embedded Strategic Copywriting",
              "Absolute Mobile-First Design"
            ]}
            link={getWhatsappUrl("Landing Pages")}
          />
          <ServiceCard 
            badge="Brand Authority"
            icon={<LayoutDashboard size={48} strokeWidth={1.5} />}
            title="Corporate Sites"
            items={[
              "Premium SaaS Institutional Sites",
              "Luxury/High-End Portfolios",
              "Manageable CMS (Custom Panel)",
              "Next-Gen Technical SEO"
            ]}
            link={getWhatsappUrl("Corporate Sites")}
          />
          <ServiceCard 
            badge="Sales Engines"
            icon={<TrendingUp size={48} strokeWidth={1.5} />}
            title="Ecosystems"
            items={[
              "Full CRM Integration (RD/Hubspot)",
              "Real-time Tracking Dashboards",
              "Checkout/Sales Automation",
              "Digital Funnel Consulting"
            ]}
            link={getWhatsappUrl("Ecosystems")}
          />
        </div>
      </div>
    </section>
  );
};
