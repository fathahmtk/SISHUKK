import React from 'react';
import { BedDouble, Maximize, Mic2, Smartphone, ArrowRight, Star, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  const mix = ["200 Luxury Keys", "220 Suite Keys", "Temple View Wings", "Executive Suites"];

  return (
    <section id="hotel" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 03: Inventory Specs</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.8] tracking-tighter italic">
                  Inventory <br/><span className="gold-gradient-text not-italic font-black">Portfolio.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 italic">
                  420 luxury units de-risked to serve both high-frequency transit and long-stay ceremonial groups.
               </p>
            </div>

            <div className="bg-[#FDFBF7] border border-slate-200 rounded-[3rem] p-10 shadow-sm relative overflow-hidden">
                <h3 className="text-slate-400 text-[8px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  <ShieldCheck size={14} className="text-gold-600" /> Accommodation Mix
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                    {mix.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                        <span className="text-slate-800 text-[10px] font-black uppercase tracking-widest">{item}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="pt-6">
               <Link to="/hotel" className="inline-flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  View Specifications <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 h-[650px]">
             <div className="relative h-full rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl aspect-[4/5] mx-auto bg-slate-50 group">
                <img 
                    src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
                    alt="Atrium" 
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                            <Star size={24} fill="currentColor" />
                        </div>
                        <div>
                            <div className="text-white font-serif text-3xl italic leading-none mb-1">7-Star Specs</div>
                            <div className="text-gold-400 text-[8px] font-black uppercase tracking-[0.4em]">Institutional Standard</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: Maximize, label: "Pure Veg Hub" },
                          { icon: Mic2, label: "Acoustic Silence" },
                          { icon: Smartphone, label: "Smart Suites" },
                          { icon: BedDouble, label: "Bridal Wings" }
                        ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                            <item.icon className="text-gold-400" size={16} />
                            <span className="text-white text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheHotel;