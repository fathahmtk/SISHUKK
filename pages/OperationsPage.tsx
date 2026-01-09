import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Activity, Cpu, Workflow, Server, Database, Zap, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const CinematicLevel: React.FC<{ children: React.ReactNode, bg: string, id: string }> = ({ children, bg, id }) => (
  <section id={id} className="h-screen w-full relative snap-start overflow-hidden flex flex-col justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      <img src={bg} className="w-full h-full object-cover opacity-20 transition-transform duration-[20s] hover:scale-110 grayscale" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-8">
      {children}
    </div>
  </section>
);

const OperationsPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: Process Architecture */}
      <CinematicLevel id="process" bg="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <Workflow size={24} className="text-gold-500 animate-pulse" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">OpEx Protection // Node_Process_Core</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Invisible <br/><span className="gold-gradient-text not-italic">Velocity.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               Engineered for seamless peak-load performance. Complete segregation of resident guest and event visitor circulation via AI building systems.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: Building Intelligence */}
      <CinematicLevel id="intelligence" bg="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Tech Stack // Smart_Asset_v2.5</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">Margin <br/>Armor.</h2>
               <div className="grid grid-cols-2 gap-8 pt-10">
                  {[
                    { l: "HVAC Saving", v: "22.4%", s: "AI Demand Control" },
                    { l: "Labor Eff.", v: "30.0%", s: "Process Automation" },
                    { l: "Lift Core", v: "12 Units", s: "Mitsubishi High-V" },
                    { l: "BIM Grade", v: "Level 3", s: "Digital Twin Sync" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
                       <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-3">{stat.l}</div>
                       <div className="text-white font-serif text-3xl font-black italic mb-1">{stat.v}</div>
                       <div className="text-gold-500 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:flex flex-col gap-6">
               <div className="bg-slate-950 border border-white/10 p-16 rounded-[4rem] relative overflow-hidden group shadow-3xl">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                     <Server size={300} className="text-white" />
                  </div>
                  <Cpu size={64} className="text-gold-500 mb-10 group-hover:rotate-12 transition-transform" />
                  <p className="text-white text-3xl font-editorial italic leading-relaxed mb-10 relative z-10">
                     "Integration of AI builds systems directly contributes to stabilized EBITDA by eliminating traditional hospitality OpEx friction."
                  </p>
                  <div className="flex items-center gap-6 relative z-10 border-t border-white/5 pt-10">
                     <Database size={20} className="text-gold-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em]">Real-time P&L Ledger: Enabled</span>
                  </div>
               </div>
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: Redundancy & Flow */}
      <CinematicLevel id="redundancy" bg="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Uptime Baseline // Node_Stability</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Zero <br/><span className="gold-gradient-text not-italic">Lag.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
               {[
                 { i: Zap, t: "N+1 Power", s: "Dual Grid Redundancy" },
                 { i: Scan, t: "IoT Hub", s: "Keyless Node Identity" },
                 { i: Activity, t: "BOH Sync", s: "Automated Logistics" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] group hover:border-gold-500 transition-all duration-700">
                    <item.i size={40} className="text-gold-500 mx-auto mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <div className="text-white font-serif text-3xl italic mb-4">{item.t}</div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.s}</div>
                 </div>
               ))}
            </div>

            <Link to="/economics" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Capital Allocation <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

export default OperationsPage;