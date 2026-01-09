import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Target, Activity, BarChart3, IndianRupee, Calculator, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CinematicLevel: React.FC<{ children: React.ReactNode, bg: string, id: string }> = ({ children, bg, id }) => (
  <section id={id} className="h-screen w-full relative snap-start overflow-hidden flex flex-col justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      <img src={bg} className="w-full h-full object-cover opacity-20 transition-transform duration-[20s] hover:scale-110 saturate-0" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-8">
      {children}
    </div>
  </section>
);

const EconomicsPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: Capital Stack Header */}
      <CinematicLevel id="capital-base" bg="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <BarChart3 size={24} className="text-gold-500 animate-pulse" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">Fiscal Baseline // Node_Capital_Allocation</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Capital <br/><span className="gold-gradient-text not-italic">Sovereignty.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               ₹350 Crore institutional outlay. 100% freehold land equity provides a debt-free foundation, significantly reducing the project's operational hurdle rate.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: Capex Waterfall */}
      <CinematicLevel id="waterfall" bg="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Allocation Metrics // Capex_Nodes</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">Yield <br/>Precision.</h2>
               <div className="grid grid-cols-1 gap-6 pt-10">
                  {[
                    { l: "Structural Core", v: "₹140 Cr", p: "40%", s: "Civil Basis" },
                    { l: "7-Star Fit-outs", v: "₹105 Cr", p: "30%", s: "Finishings" },
                    { l: "MEP & AI Chiller", v: "₹70 Cr", p: "20%", s: "Systems" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md flex justify-between items-center group/row hover:border-gold-500 transition-all">
                       <div>
                          <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">{stat.l}</div>
                          <div className="text-white font-serif text-3xl font-black italic">{stat.v}</div>
                       </div>
                       <div className="text-right">
                          <div className="text-gold-500 font-mono text-xs font-bold leading-none mb-1">{stat.p}</div>
                          <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">{stat.s}</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:block relative group">
               <div className="bg-slate-900/60 border border-white/10 p-16 rounded-[4rem] backdrop-blur-3xl shadow-3xl text-center">
                  <Calculator size={64} className="text-gold-500 mx-auto mb-10" />
                  <p className="text-white text-3xl font-editorial italic leading-relaxed mb-12">
                     "Cost allocation is front-loaded to structural moats, ensuring Year-50 asset relevance and minimizing long-tail maintenance drag."
                  </p>
                  <div className="inline-flex items-center gap-6 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                     <ShieldCheck size={24} className="text-emerald-500" />
                     <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">Audit: Big-4 Verified Ledger</span>
                  </div>
               </div>
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: IRR & Return Horizon */}
      <CinematicLevel id="yield-targets" bg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Return Targets // Node_Alpha</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Equity <br/><span className="gold-gradient-text not-italic">Alpha.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { l: "Equity IRR", v: "24.2%", s: "Target Return" },
                 { l: "Stabilized Yield", v: "45.4%", s: "EBITDA Floor" },
                 { l: "Multiple", v: "3.5x", s: "MOIC Cycle" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-md group hover:border-gold-500 transition-all duration-700">
                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-onyx-950 mx-auto mb-10 shadow-2xl transition-transform group-hover:scale-110">
                       <TrendingUp size={32} />
                    </div>
                    <div className="text-white font-serif text-5xl font-black italic mb-4">{item.v}</div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.l}</div>
                 </div>
               ))}
            </div>

            <Link to="/risk" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Risk Intelligence <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </CinematicLevel>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default EconomicsPage;