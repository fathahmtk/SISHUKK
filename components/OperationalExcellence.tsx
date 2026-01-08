
import React from 'react';
import { 
  Users, ShieldCheck, Cpu, Database, 
  Truck, BarChart3, Cloud, Zap, 
  Crown, Heart, Globe, Settings2,
  Network, Layout
} from 'lucide-react';

const OperationalExcellence: React.FC = () => {
  const pillars = [
    {
      title: "VVIP Protocol",
      icon: Crown,
      desc: "Dedicated department for HNW pilgrims providing 'Temple to Room' seamless transit and private ritual management."
    },
    {
      title: "Supply Chain Resilience",
      icon: Truck,
      desc: "Direct-to-farm contracts for organic F&B and global vendor alignments for luxury FF&E assets."
    },
    {
      title: "Revenue AI",
      icon: BarChart3,
      desc: "Proprietary software optimizing ADR based on the Guruvayur Temple calendar and historical footfall spikes."
    }
  ];

  const techStack = [
    { title: "IoT Guest Experience", icon: Cpu, detail: "Voice-controlled suites and keyless mobile identity entry." },
    { title: "AI HVAC Optimization", icon: Zap, detail: "30% energy reduction via occupied-zone precision cooling." },
    { title: "CRM Banqueting", icon: Database, detail: "Predictive analytics to capture repeat legacy wedding business." }
  ];

  return (
    <section id="ops" className="py-32 bg-onyx-950 relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none">
        <Network size={800} strokeWidth={0.5} className="text-gold-500 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Operational Excellence</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter italic">The Governance <br/><span className="gold-gradient-text">Engine.</span></h2>
        </div>

        {/* Management Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-white font-serif text-3xl mb-8">Institutional Management Structure</h3>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We leverage a professional C-Suite structure designed to transition the asset from construction to a stabilized global hospitality annuity.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Steering Committee", val: "Promoters & Financial Strategists", active: true },
                { label: "Management Co. (ManCo)", val: "Tie-up with Global Hotel Operator", active: true },
                { label: "On-Site Leadership", val: "Ex-Oberoi/Taj Core Management Team", active: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.label}</h4>
                    <p className="text-slate-500 text-xs">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-onyx-900 border border-white/5 flex flex-col items-center text-center group hover:bg-gold-500/5 hover:border-gold-500/30 transition-all shadow-2xl">
                <div className="p-5 bg-white/5 rounded-2xl mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                  <pillar.icon size={32} />
                </div>
                <h4 className="text-white font-serif text-xl mb-4">{pillar.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed uppercase font-black tracking-widest opacity-60 group-hover:opacity-100">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Header */}
        <div className="bg-onyx-900 border border-white/10 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Cpu size={240} className="text-gold-500" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold-500 text-[9px] font-black uppercase tracking-[0.4em] mb-4 block">Future-Proof Infrastructure</span>
              <h3 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">The "Smart-Towers" <br/><span className="gold-gradient-text">Tech Ecosystem.</span></h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                Integrating AI-driven building management systems directly boosts the bottom line by reducing operational friction and energy overhead.
              </p>
              <button className="px-10 py-5 bg-gold-500 text-onyx-950 rounded-full text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 transition-all hover:bg-white active:scale-95 shadow-2xl">
                <Settings2 size={16} /> Technical Audit
              </button>
            </div>

            <div className="space-y-6">
               {techStack.map((tech, i) => (
                 <div key={i} className="flex gap-8 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 border border-white/10 group-hover:border-gold-500/50 transition-all">
                       <tech.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg mb-2">{tech.title}</h4>
                       <p className="text-slate-500 text-sm">{tech.detail}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
