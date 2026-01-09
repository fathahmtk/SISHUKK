import React from 'react';
import { ArrowLeft, Cpu, Shield, Settings, Truck, Power, Layers, Users, ArrowRight, Database, Server, Zap, Workflow, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsPage: React.FC = () => {
  const techImages = [
      { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", label: "Central HVAC Plant" },
      { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80", label: "Data Core Control" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">O</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 07: Invisible Systems</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              Operational <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "The technical backbone is engineered for peak-load scenarios. From zero-downtime power redundant cores to AI-driven building management systems."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-[#FDFBF7] border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <Workflow size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Zap size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Uptime Shield</h4>
                   </div>
                   <p className="text-slate-500 text-base font-light leading-relaxed mb-10">
                      Dual-grid power redundancy and dedicated heavy-lift service cores ensuring invisible operational flow 24/7/365.
                   </p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Technical Backbone Sync</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
           {techImages.map((img, i) => (
               <div key={i} className={`group relative h-[650px] rounded-[5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 transition-all duration-1000 hover:shadow-3xl ${i % 2 === 1 ? 'lg:translate-y-24' : ''}`}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                     <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{img.label}</span>
                     <h3 className="text-slate-950 font-serif text-5xl leading-none italic group-hover:text-gold-600 transition-colors">Grade-A Core</h3>
                  </div>
               </div>
           ))}
        </div>

        <Link to="/economics" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
           <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 08</span>
              <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Financial <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Structure.</span></h3>
              <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default OperationsPage;