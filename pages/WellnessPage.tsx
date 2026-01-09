import React from 'react';
import { ArrowLeft, Flower2, HeartPulse, ArrowRight, ShieldCheck, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessPage: React.FC = () => {
  const sections = [
    { title: "Vedic Spa Sanctuary", sub: "12,000 Sq. Ft. Core", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", desc: "A clinical-grade Ayurvedic facility offering 21-day Panchakarma protocols to drive long-stay occupancy." },
    { title: "The Meridian Pool", sub: "Rooftop Infinity Edge", img: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80", desc: "A spiritual sunrise node at Level 15, calibrated for yoga and high-altitude recovery." }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Wellness Hero */}
      <div className="relative h-[80vh] w-full bg-slate-900 flex items-end pb-20">
         <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Wellness Sanctuary"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 06: Wellness Integration</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  Wellness <br/><span className="gold-gradient-text italic font-black">Alchemy.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  "Traditional Ayurveda reimagined as clinical-grade luxury. Leveraging high-net-worth medical tourism and multi-day long-stay therapy cycles."
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Wellness Impact stats */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "ALOS Multiplier", v: "2.5x", s: "Target Length of Stay" },
              { l: "Clinic Area", v: "12,000", s: "Sq. Ft. Specialized" },
              { l: "Yield Vector", v: "Premium", s: "Medical Tourism" },
              { l: "Integration", v: "Vedic", s: "Spiritual Compliance" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-4xl lg:text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Narrative & Visual Clusters */}
        <div className="space-y-32 mb-40">
           {sections.map((item, i) => (
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
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl">
                           <HeartPulse size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                           <ShieldCheck size={14} className="text-emerald-500" /> Clinical Grade
                        </span>
                     </div>
                     <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                        {item.desc}
                     </p>
                     <div className="flex gap-6 pt-6">
                        <div className="p-8 bg-white border border-slate-100 rounded-3xl flex-1 shadow-sm group hover:border-gold-300 transition-all">
                           <Activity size={24} className="text-gold-600 mb-4" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Impact</span>
                           <span className="text-slate-950 font-serif text-xl font-bold italic">Yield Optimization</span>
                        </div>
                        <div className="p-8 bg-white border border-slate-100 rounded-3xl flex-1 shadow-sm group hover:border-gold-300 transition-all">
                           <Target size={24} className="text-gold-600 mb-4" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Status</span>
                           <span className="text-slate-950 font-serif text-xl font-bold italic">Ready 2027</span>
                        </div>
                     </div>
                  </div>
               </div>
           ))}
        </div>

        {/* Global Strategy Teaser Link */}
        <Link to="/operations" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Operations" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 07</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Invisible <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Engineering.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default WellnessPage;