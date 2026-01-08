import React from 'react';
import { ArrowLeft, ShieldCheck, AlertTriangle, Lock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskPage: React.FC = () => {
  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 09</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Structural <span className="text-gold-500 italic">Resilience.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            This is a capital-protected hospitality investment, not a speculative build. We have identified and mitigated key project risks.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
             
             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 hover:border-gold-500/30 transition-colors">
                 <div className="w-16 h-16 bg-onyx-950 rounded-2xl flex items-center justify-center text-gold-500 border border-white/5 shrink-0">
                     <Activity size={32} />
                 </div>
                 <div>
                     <h3 className="text-white font-serif text-2xl mb-2">Demand Risk</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-4">
                         <strong>Risk:</strong> Low occupancy during off-seasons.<br/>
                         <strong>Mitigation:</strong> Guruvayur is a "non-seasonal" market. Pilgrimage is year-round. Furthermore, our revenue model relies 55% on Weddings/Events, which are booked 6-12 months in advance with non-refundable deposits.
                     </p>
                     <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">Mitigated: Ritual Economy</span>
                 </div>
             </div>

             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 hover:border-gold-500/30 transition-colors">
                 <div className="w-16 h-16 bg-onyx-950 rounded-2xl flex items-center justify-center text-gold-500 border border-white/5 shrink-0">
                     <AlertTriangle size={32} />
                 </div>
                 <div>
                     <h3 className="text-white font-serif text-2xl mb-2">Construction Risk</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-4">
                         <strong>Risk:</strong> Cost overruns and delays.<br/>
                         <strong>Mitigation:</strong> Fixed-price EPC contracts with Tier-1 contractors. 15% contingency fund already factored into the ₹350 Cr budget. Land is already secured, removing the biggest variable.
                     </p>
                     <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">Mitigated: Locked Contracts</span>
                 </div>
             </div>

             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 hover:border-gold-500/30 transition-colors">
                 <div className="w-16 h-16 bg-onyx-950 rounded-2xl flex items-center justify-center text-gold-500 border border-white/5 shrink-0">
                     <Lock size={32} />
                 </div>
                 <div>
                     <h3 className="text-white font-serif text-2xl mb-2">Competition Risk</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-4">
                         <strong>Risk:</strong> New luxury entrants.<br/>
                         <strong>Mitigation:</strong> High barrier to entry. There are no other land parcels of this size (1.29 acres) available within 1.5km of the temple. The "First Mover" advantage secures brand dominance.
                     </p>
                     <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">Mitigated: Strategic Moat</span>
                 </div>
             </div>

         </div>

         <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-4 bg-gold-500 p-1 rounded-full pr-6">
                 <div className="bg-onyx-950 text-gold-500 p-2 rounded-full"><ShieldCheck size={20} /></div>
                 <span className="text-onyx-950 font-bold text-xs uppercase tracking-widest">Asset is 100% Freehold & Encumbrance Free</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default RiskPage;