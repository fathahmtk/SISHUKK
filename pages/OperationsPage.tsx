import React from 'react';
import { ArrowLeft, Cpu, Shield, Settings, Truck, Power, Layers, Users, ArrowRight, Database, Server, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsPage: React.FC = () => {
  const techImages = [
      { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", label: "Central HVAC Plant" },
      { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80", label: "Data Core Control" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-20">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <Cpu size={14} /> Dossier Chapter 07: Invisible Systems
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Invisible <br/><span className="gold-gradient-text italic font-black">Engineering.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                The asset's technical backbone is engineered for peak-load scenarios. From zero-downtime power redundant cores to AI-driven building management systems, SGT is designed for structural efficiency.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <Zap size={18} /> Uptime Guarantee
            </div>
            <p className="text-slate-400 text-xs font-mono">Power Redundancy: <br/><span className="text-white font-serif text-3xl">N+1 CORE</span></p>
          </div>
        </div>
      </div>

      {/* Industrial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 mb-40">
         {techImages.map((img, i) => (
             <div key={i} className="relative group h-[650px] overflow-hidden">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.3] group-hover:brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-12 left-12">
                   <div className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{img.label}</span>
                   </div>
                </div>
                
                <div className="absolute bottom-12 left-12 flex items-center gap-8">
                   <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all shadow-2xl">
                      <Zap size={32} />
                   </div>
                   <div className="text-white font-serif text-3xl italic">Redundant Core v.2</div>
                </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-40">
            <div className="lg:col-span-2 space-y-16">
               <h3 className="text-white font-serif text-5xl italic leading-tight">Logistics <br/>Segregation.</h3>
               <div className="space-y-8">
                  {[
                    { title: "Service Core Alpha", icon: Truck, desc: "Dedicated heavy-lift service elevators ensuring invisible supply delivery for banqueting and room inventory." },
                    { title: "Energy Hub", icon: Server, desc: "Modular Magnetic Chiller plant with 30% lower energy intensity compared to standard hospitality MEP." },
                    { title: "Smart PMS Integration", icon: Database, desc: "AI-driven demand forecasting linked directly to building HVAC to optimize idle-floor energy consumption." }
                  ].map((item, i) => (
                    <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-white/5 transition-all group flex flex-col md:flex-row gap-12 items-center">
                       <div className="w-24 h-24 rounded-3xl bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform shadow-2xl">
                          <item.icon size={40} />
                       </div>
                       <div>
                          <h4 className="text-white font-serif text-3xl italic mb-4">{item.title}</h4>
                          <p className="text-slate-500 text-lg font-light leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:col-span-1">
               <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] shadow-3xl sticky top-32">
                  <h3 className="text-white font-serif text-3xl mb-12 italic">BMS Dashboard</h3>
                  <div className="space-y-8">
                     {[
                        { l: "Automation Level", v: "Grade-A" },
                        { l: "Renewable Integration", v: "15% Base" },
                        { l: "Waste Recovery", v: "Zero-Discharge" },
                        { l: "Lift Velocity", v: "2.5m / Sec" }
                     ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 group">
                           <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{row.l}</span>
                           <span className="text-gold-500 font-mono text-sm font-bold">{row.v}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-16 p-8 bg-gold-500/5 rounded-3xl border border-gold-500/20 text-center">
                     <p className="text-gold-500 text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">Full Technical Audit Available in Data Room</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/economics" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 08</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Capital <br/><span className="gold-gradient-text font-black tracking-tighter">Allocation.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default OperationsPage;