import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Layers, Building2, Target, Info, Ruler, Compass, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloorPlanExplorer from '../components/FloorPlanExplorer.tsx';

const AssetPage: React.FC = () => {
  const images = [
    { 
      src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg", 
      label: "Twin Cylindrical Monoliths", 
      sub: "Structural Aerodynamics",
      detail: "Dual 20-floor cylindrical cores designed to reduce wind-load vortex shedding while maximizing 360° spiritual vistas of the temple zone."
    },
    { 
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", 
      label: "The Meridian Arch", 
      sub: "Level 15 Structural Link",
      detail: "A 45-meter steel truss sky-bridge connecting Tower A and Tower B, acting as the structural stabilizer and housing the Executive Club."
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Asset Hero */}
      <div className="relative h-[85vh] w-full bg-slate-900 flex items-end pb-24">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            alt="Asset Exterior"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Dashboard
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 01: Asset Configuration</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  Structural <br/><span className="gold-gradient-text italic font-black">Monopoly.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  Two cylindrical towers rising from a monolithic podium. Connected by a Grand Lobby and the signature Meridian Arch. This is engineering as a commercial moat.
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Core Technical Matrix */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Built-up Area", v: "350k", s: "Sq. Ft. GSF" },
              { l: "Vertical Datum", v: "G+20", s: "Cylindrical Cores" },
              { l: "Podium Base", v: "G+3", s: "Event Logistics" },
              { l: "Sky Link", v: "Lvl 15", s: "Meridian Arch" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Narrative Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40 items-center">
            <div className="lg:col-span-6 space-y-12">
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Asset <br/><span className="gold-gradient-text not-italic font-black">DNA.</span></h2>
               <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl">
                  "Architecture is our primary yield multiplier. The twin-tower symmetry creates an instant geographic waypoint, ensuring the asset commands a premium ADR and banqueting floor from day zero."
               </p>
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                        <Building2 size={20} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Institutional Class</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                        <ShieldCheck size={20} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Title Secured</span>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6">
               <div className="relative rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl group h-[600px]">
                  <img src={images[0].src} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Detail" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12">
                     <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{images[0].sub}</span>
                     <h3 className="text-white font-serif text-4xl italic">{images[0].label}</h3>
                  </div>
               </div>
            </div>
        </div>

        {/* Engineering Audit Section */}
        <div className="mb-40 pt-32 border-t border-slate-200">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-2xl">
                    <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Technical Parameters</span>
                    <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Engineering <br/><span className="gold-gradient-text not-italic font-black">Audit.</span></h2>
                </div>
                <div className="p-8 bg-slate-950 rounded-3xl text-white flex items-center gap-6 shadow-2xl">
                   <Database size={24} className="text-gold-500" />
                   <div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">BIM Grade</div>
                      <div className="text-white font-bold text-sm">Level 300 Certified</div>
                   </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  { icon: Target, title: "Circular Efficiency", desc: "92% floor-plate efficiency through central circular service core optimization.", val: "92%" },
                  { icon: Compass, title: "Vedic Alignment", desc: "Vastu-calibrated orientations ensuring spiritual compliance for local high-velocity demand.", val: "100%" },
                  { icon: Ruler, title: "Aviation Datum", desc: "75.0m maximum verticality cleared by AAI, establishing district skyline height record.", val: "75m" }
                ].map((item, i) => (
                   <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:border-gold-400 transition-all duration-700 shadow-sm hover:shadow-2xl group">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-gold-600 mb-8 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <item.icon size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic mb-4 leading-none">{item.title}</h4>
                      <p className="text-slate-500 text-lg font-light leading-relaxed italic mb-8">{item.desc}</p>
                      <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Metric Value</span>
                         <span className="text-slate-950 font-mono text-xl font-black">{item.val}</span>
                      </div>
                   </div>
                ))}
            </div>
        </div>

        {/* Immersive Stacking Explorer */}
        <div className="mb-40 pt-32 border-t border-slate-200">
           <FloorPlanExplorer />
        </div>

        {/* Visual Link to Next Chapter */}
        <Link to="/market" className="group relative block w-full h-[700px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Market" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 02</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Market <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Dynamics.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default AssetPage;