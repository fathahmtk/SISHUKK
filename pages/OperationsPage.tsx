import React from 'react';
import { ArrowLeft, Cpu, ArrowRight, ShieldCheck, Zap, Workflow, Server, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsPage: React.FC = () => {
  const techCards = [
    {
      title: "AI Chiller Analytics",
      icon: <Server size={28} />,
      desc: "Magnetic levitation HVAC optimized by predictive occupancy data, reducing recurrence OpEx by 22% annually.",
      tag: "Energy Optimization"
    },
    {
      title: "Closed-Loop Governance",
      icon: <Database size={28} />,
      desc: "Real-time P&L visibility and automated inventory audits for total institutional transparency.",
      tag: "Asset Intelligence"
    },
    {
      title: "IoT Guest Identity",
      icon: <Cpu size={28} />,
      desc: "Keyless mobile identity and voice-controlled luxury suites linked to regional temple darshan logs.",
      tag: "Digital Ecosystem"
    },
    {
      title: "Uptime Armor",
      icon: <Zap size={28} />,
      desc: "Dual-grid power redundancy and dedicated heavy-lift service cores ensuring zero-lag operations.",
      tag: "Reliability"
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Operations Hero */}
      <div className="relative h-[80vh] w-full bg-slate-900 flex items-end pb-20">
         <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Technical Backbone"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 07: Invisible Systems</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  Operational <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  "The asset is engineered for seamless peak-load performance. Complete segregation of resident guest and event visitor circulation via AI building systems."
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Technical Core stats */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Redundancy", v: "N+1", s: "MEP Power Core" },
              { l: "OpEx Saving", v: "22%", s: "AI HVAC Control" },
              { l: "Lift Cores", v: "12 Units", s: "Mitsubishi High-V" },
              { l: "BIM Grade", v: "Level 3", s: "Tech-Ready Asset" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-4xl lg:text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Technical Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
           {techCards.map((card, i) => (
               <div key={i} className="group relative p-12 bg-white border border-slate-100 rounded-[4rem] hover:border-gold-400 transition-all duration-700 shadow-xl flex flex-col justify-between h-[450px] overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                     {card.icon}
                  </div>
                  
                  <div className="relative z-10">
                     <div className="flex justify-between items-start mb-12">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                           {card.icon}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-6 py-2 rounded-full">
                           {card.tag}
                        </span>
                     </div>
                     <h3 className="text-slate-950 font-serif text-4xl italic mb-6 leading-tight group-hover:text-gold-600 transition-colors">{card.title}</h3>
                     <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-2 border-slate-100 pl-8 group-hover:border-gold-400 transition-all">
                        {card.desc}
                     </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                     <span className="text-[8px] font-black uppercase tracking-widest">Systems Sync v2.5</span>
                     <ShieldCheck size={16} className="text-gold-500" />
                  </div>
               </div>
           ))}
        </div>

        {/* Operational Narrative Section */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center pt-24 border-t border-slate-100">
           <div className="lg:col-span-5">
              <div className="bg-[#FDFBF7] p-12 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                    <Workflow size={200} className="text-slate-950" />
                 </div>
                 <div className="relative z-10">
                    <h4 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Process Audit</h4>
                    <p className="text-slate-950 font-serif text-3xl italic leading-relaxed mb-12">
                       "Segregation of resident guest and banquet visitor flows is achieved through dedicated dual cores, ensuring 7-star privacy and operational efficiency simultaneously."
                    </p>
                    <div className="flex items-center gap-4 text-slate-400 text-[9px] font-black uppercase tracking-widest">
                       <Activity size={14} className="text-gold-500 animate-pulse" /> Flow-Control: Optimized
                    </div>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-7 space-y-12">
              <h2 className="text-slate-950 font-serif text-5xl md:text-[6rem] leading-[0.9] tracking-tighter italic">Structural <br/><span className="gold-gradient-text not-italic font-black">Intelligence.</span></h2>
              <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-10 bg-slate-50 py-12 rounded-r-3xl italic">
                 Beyond the visible luxury, SIRSHUKK is an engineering prototype for the next generation of high-velocity hospitality. We leverage AI building systems not just for comfort, but as a direct shield for operating margins.
              </p>
           </div>
        </div>

        {/* Link to Economics Chapter */}
        <Link to="/economics" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Economics" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 08</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Capital <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Architecture.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default OperationsPage;