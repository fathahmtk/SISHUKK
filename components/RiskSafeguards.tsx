
import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, ChevronDown, ChevronUp, Construction, Search, Landmark, Zap } from 'lucide-react';

const RiskSafeguards: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const risks = [
    { 
      title: "Construction Risk", 
      icon: Construction, 
      mitigation: "Fixed-price EPC contracts with Tier-1 contractors ensure zero exposure to material price volatility. All structural plans are peer-reviewed by international engineering consultants.",
      status: "De-risked (Contracts Signed)"
    },
    { 
      title: "Market Demand Risk", 
      icon: Search, 
      mitigation: "The Guruvayur market is structurally unique with non-seasonal 30M+ visitor footfall. 40% of revenue targets are secured via advance convention and wedding banquet deposits.",
      status: "Mitigated (High Pre-bookings)"
    },
    { 
      title: "Regulatory Risk", 
      icon: Landmark, 
      mitigation: "All major NOCs (Environmental, Fire, Aviation, Pollution) are already secured. Land is 100% freehold, debt-free, and legally cleared with Title Search reports from senior counsel.",
      status: "Resolved (100% Compliant)"
    },
    { 
      title: "Operational Cost Risk", 
      icon: Zap, 
      mitigation: "Integrated BMS (Building Management Systems) and 100% sewage treatment reuse significantly reduce ongoing OpEx compared to local peers.",
      status: "Optimized (Tech-First)"
    }
  ];

  return (
    <section id="risk" className="py-32 bg-onyx-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/3">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Risk Matrix</span>
            <h2 className="text-white font-serif text-5xl md:text-6xl tracking-tighter mb-8 italic">Safeguards & <br/>Mitigation.</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
              Institutional investing requires identifying the downside before chasing the upside. SGT is engineered for resilience.
            </p>
            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl flex items-center gap-6">
              <ShieldCheck size={40} className="text-emerald-500 shrink-0" />
              <div>
                 <h4 className="text-white font-bold">Debt-Free Foundation</h4>
                 <p className="text-slate-500 text-xs">The underlying 1.29-acre asset is 100% unencumbered equity.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full space-y-6">
            {risks.map((risk, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeTab === i ? 'bg-white/5 border-gold-500/50' : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${activeTab === i ? 'bg-gold-500 text-onyx-950' : 'bg-onyx-900 text-gold-500'}`}>
                      <risk.icon size={24} />
                    </div>
                    <div>
                       <h3 className={`font-serif text-2xl transition-colors ${activeTab === i ? 'text-white' : 'text-slate-400'}`}>{risk.title}</h3>
                       <div className="flex items-center gap-2 mt-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                          <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500">{risk.status}</span>
                       </div>
                    </div>
                  </div>
                  {activeTab === i ? <ChevronUp className="text-slate-600" /> : <ChevronDown className="text-slate-600" />}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeTab === i ? 'max-h-40 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-[72px] space-y-4">
                     <p className="text-slate-400 text-base leading-relaxed">{risk.mitigation}</p>
                     <button className="text-[10px] font-black uppercase tracking-widest text-gold-500 flex items-center gap-2 group">
                        Review Legal Documentation <ShieldAlert size={14} className="group-hover:rotate-12 transition-transform" />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSafeguards;
