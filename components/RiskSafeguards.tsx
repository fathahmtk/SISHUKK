import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, Construction, Search, Landmark, Zap, AlertCircle } from 'lucide-react';

const RiskSafeguards: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const risks = [
    { 
      title: "Volume Sensitivity", 
      icon: Search, 
      mitigation: "The model is built on conservative occupancy floors. Auxiliary revenue from MICE and F&B provide structural resilience against room turnover fluctuations.",
      status: "Stress-Tested"
    },
    { 
      title: "Event Pipeline Risk", 
      icon: Zap, 
      mitigation: "Pre-commitments and non-seasonal ritual demand ensure a high baseline for banqueting yields, insulating the asset from leisure market volatility.",
      status: "Diversified"
    },
    { 
      title: "ADR Price Integrity", 
      icon: Landmark, 
      mitigation: "Landmark status and Visual Monopoly provide significant pricing power. The total absence of 7-star competition in the district ensures ADR insulation.",
      status: "Verified"
    },
    { 
      title: "Development Slip", 
      icon: Construction, 
      mitigation: "Fixed-price EPC turnkey contracts with penalty clauses for delay ensure capital outlay remains within the ₹350 Cr institutional allocation.",
      status: "Bonded"
    }
  ];

  return (
    <section id="risk" className="py-48 bg-[#FDFBF7] relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-[10%] left-[-5%] text-slate-100 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-40">R</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-start">
          <div className="lg:w-2/5 sticky top-32">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-white mb-12 shadow-sm">
              <AlertCircle className="text-gold-600" size={16} />
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Risk Management Chapter 11</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic mb-12">Safeguards & <br/><span className="gold-gradient-text italic font-black">Mitigation.</span></h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed mb-16 border-l-2 border-gold-400 pl-12">
              SGT is engineered for stability. We identify market friction points early and apply institutional-grade structural hedges to protect capital yield.
            </p>
            
            <div className="p-12 bg-white border border-slate-200 rounded-[4rem] flex items-center gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <ShieldCheck size={56} className="text-emerald-500 shrink-0 relative z-10" />
              <div className="relative z-10">
                 <h4 className="text-slate-950 font-serif text-3xl italic">Capital Security</h4>
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">100% Unencumbered Asset Base.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full space-y-8">
            {risks.map((risk, i) => (
              <div 
                key={i} 
                className={`p-12 rounded-[3.5rem] border transition-all duration-700 cursor-pointer overflow-hidden ${
                  activeTab === i ? 'bg-white border-gold-400 shadow-3xl' : 'bg-slate-50 border-slate-100 hover:border-slate-200'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-10">
                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-700 shadow-sm ${activeTab === i ? 'bg-gold-500 text-white' : 'bg-white border border-slate-100 text-gold-600'}`}>
                      <risk.icon size={32} />
                    </div>
                    <div>
                       <h3 className={`font-serif text-3xl italic transition-colors leading-none mb-3 ${activeTab === i ? 'text-slate-950' : 'text-slate-400'}`}>{risk.title}</h3>
                       <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">{risk.status} Protocol</span>
                       </div>
                    </div>
                  </div>
                  {activeTab === i ? <ChevronUp className="text-gold-600" /> : <ChevronDown className="text-slate-300" />}
                </div>

                <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeTab === i ? 'max-h-[300px] opacity-100 mt-10' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-[112px] pr-8 space-y-6">
                     <p className="text-slate-500 text-lg font-light leading-relaxed">{risk.mitigation}</p>
                     <div className="h-px w-full bg-slate-100"></div>
                     <div className="flex gap-10">
                        <div>
                           <div className="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-1">Exposure</div>
                           <div className="text-slate-950 font-bold text-xs">MINIMAL</div>
                        </div>
                        <div>
                           <div className="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-1">Audit Trail</div>
                           <div className="text-slate-950 font-bold text-xs">V.2.5 SYNCED</div>
                        </div>
                     </div>
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