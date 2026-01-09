import React from 'react';
import { ArrowLeft, Compass, RotateCw, ArrowRight, Star, Hexagon, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiningPage: React.FC = () => {
  const concepts = [
    {
      title: "The Orbit",
      sub: "Dual Revolving Crowns",
      desc: "Two independent 60-minute rotation platforms offering 360-degree spiritual and coastal vistas. German-engineered vibration-free dynamics.",
      yield: "High Non-Resident Capture",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
      stats: [
        { label: "Cycle", val: "60 Min" },
        { label: "Level", val: "Lvl 20" }
      ]
    },
    {
      title: "Vedic Hearth",
      sub: "Fine Dining Ritual",
      desc: "Pure vegetarian destination dining. Curated temple-inspired menus using organic-certified regional produce.",
      yield: "Premium Ticket Size",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      stats: [
        { label: "Seats", val: "150 Pax" },
        { label: "Grade", val: "7-Star" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Dining Hero */}
      <div className="relative h-[80vh] w-full bg-slate-900 flex items-end pb-20">
         <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Dining Grandeur"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 05: Gastronomy Portfolio</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  "F&B assets are positioned as independent revenue centers, engineered to capture demand from the wider region, ensuring yield stability."
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Core Gastronomy Stats */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Revenue Weight", v: "40%", s: "Target Capture" },
              { l: "Concept USP", v: "Revolving", s: "Dual High-Rise" },
              { l: "Seating GSF", v: "12,000", s: "Consolidated Area" },
              { l: "Status", v: "Operational", s: "Year-1 Projection" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-4xl lg:text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Concept Showcase Grid */}
        <div className="space-y-32 mb-40">
           {concepts.map((item, i) => (
               <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className={`lg:col-span-7 relative h-[600px] rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12">
                       <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{item.sub}</span>
                       <h3 className="text-white font-serif text-5xl italic leading-none">{item.title}</h3>
                    </div>
                  </div>
                  <div className={`lg:col-span-5 space-y-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                     <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl">
                           <Star size={24} fill="currentColor" />
                        </div>
                        <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest border border-gold-200 px-6 py-2.5 rounded-full">{item.yield}</span>
                     </div>
                     <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                        {item.desc}
                     </p>
                     <div className="grid grid-cols-2 gap-8">
                        {item.stats.map((s, idx) => (
                           <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">{s.label}</span>
                              <span className="text-slate-950 font-serif text-2xl font-bold">{s.val}</span>
                           </div>
                        ))}
                     </div>
                     <button className="w-full py-6 bg-slate-950 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all flex items-center justify-center gap-4 group">
                        Inspect Concept <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
           ))}
        </div>

        {/* Engineering Feature Strip */}
        <div className="mb-40 p-16 md:p-24 bg-slate-950 border border-white/10 rounded-[6rem] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                <RotateCw size={400} className="text-white" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block">Technical Advantage</span>
                  <h2 className="text-white font-serif text-5xl md:text-7xl leading-[0.9] italic tracking-tighter">Vibration-Free <br/><span className="gold-gradient-text not-italic font-black">Dynamics.</span></h2>
                  <p className="text-slate-400 text-xl font-light leading-relaxed border-l border-white/10 pl-10 italic">
                     German-manufactured drive systems ensure a seamless 60-minute rotation. Engineered for structural silence and ultra-premium dining acoustics.
                  </p>
               </div>
               <div className="bg-white/5 border border-white/10 backdrop-blur-3xl p-12 rounded-[4rem] space-y-10">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-slate-950">
                        <Compass size={24} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white">Drive Calibration: BIM Level 3</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-slate-950">
                        <ShieldCheck size={24} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white">Structural Resonance: Verified</span>
                  </div>
                  <div className="h-px bg-white/10 w-full"></div>
                  <button className="text-gold-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-4 hover:text-white transition-colors">
                     View Mechanical Annexure <Hexagon size={16} />
                  </button>
               </div>
            </div>
        </div>

        {/* Proceed to Next Chapter Link */}
        <Link to="/wellness" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Wellness" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 06</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Vedic <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Wellness.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default DiningPage;