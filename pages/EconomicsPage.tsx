import React from 'react';
import { ArrowLeft, IndianRupee, PieChart, TrendingUp, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const EconomicsPage: React.FC = () => {
  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 08</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Capital <span className="text-gold-500 italic">Allocation.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            A transparent breakdown of the ₹350 Crore project cost and the stabilized revenue model that drives investor returns.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-24">
         {/* Capex Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
             <div>
                 <h3 className="text-white font-serif text-3xl mb-8 flex items-center gap-3">
                    <div className="p-2 bg-gold-500 rounded-lg text-onyx-950"><IndianRupee size={24} /></div>
                    Capex Deployment
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
                     The capital is ring-fenced for construction and fit-outs. Land cost is excluded as the 1.29-acre freehold land is already fully paid for and secured, providing an immediate equity buffer.
                 </p>
                 
                 <div className="space-y-4">
                     {[
                         { l: "Civil & Structure", v: "₹140 Cr", p: "40%" },
                         { l: "Interiors & FF&E", v: "₹105 Cr", p: "30%" },
                         { l: "MEP & Services", v: "₹52.5 Cr", p: "15%" },
                         { l: "Pre-Opening & Contingency", v: "₹52.5 Cr", p: "15%" }
                     ].map((item, i) => (
                         <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                             <div className="flex flex-col">
                                 <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.l}</span>
                                 <div className="h-1 bg-white/10 w-full mt-2 rounded-full overflow-hidden">
                                     <div className="h-full bg-gold-500" style={{ width: item.p }}></div>
                                 </div>
                             </div>
                             <span className="text-white font-mono font-bold">{item.v}</span>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="bg-onyx-900 border border-white/10 p-10 rounded-[3rem] flex flex-col justify-center text-center">
                 <div className="mb-8">
                     <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Total Project Cost</span>
                     <div className="text-gold-500 font-serif text-7xl font-black mt-2">₹350 Cr</div>
                     <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mt-4 block">+ Land Equity (Separate)</span>
                 </div>
                 <div className="grid grid-cols-2 gap-6 text-left">
                     <div className="p-6 bg-black/20 rounded-2xl border border-white/5">
                         <span className="text-slate-500 text-[10px] uppercase font-bold block mb-1">Debt</span>
                         <span className="text-white font-serif text-2xl">₹210 Cr</span>
                     </div>
                     <div className="p-6 bg-black/20 rounded-2xl border border-white/5">
                         <span className="text-slate-500 text-[10px] uppercase font-bold block mb-1">Equity</span>
                         <span className="text-white font-serif text-2xl">₹140 Cr</span>
                     </div>
                 </div>
             </div>
         </div>

         {/* Revenue Section */}
         <div className="border-t border-white/10 pt-24">
             <h3 className="text-white font-serif text-3xl mb-12 text-center">Stabilized Revenue Engine (Year 3)</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                     { title: "MICE & Weddings", val: "55%", desc: "Primary driver. High volume, advance payments." },
                     { title: "Rooms Inventory", val: "30%", desc: "High ADR driven by 7-star positioning." },
                     { title: "F&B Outlets", val: "10%", desc: "Revolving restaurants attract non-residents." },
                     { title: "Wellness & Spa", val: "5%", desc: "High margin ancillary revenue." }
                 ].map((item, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold-500/50 transition-colors group">
                         <div className="text-slate-600 group-hover:text-gold-500 transition-colors mb-4"><PieChart size={24} /></div>
                         <div className="text-4xl font-serif text-white mb-2">{item.val}</div>
                         <h4 className="text-slate-300 font-bold uppercase tracking-widest text-xs mb-2">{item.title}</h4>
                         <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
             </div>
         </div>
      </div>
    </div>
  );
};

export default EconomicsPage;