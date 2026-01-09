import React from 'react';
import { BedDouble, Maximize, Mic2, Smartphone, ArrowRight, Star, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  const mix = [
    "Tower A: 200 Luxury Keys", "Tower B: 220 Suite Keys", "Temple View Suites",
    "Executive Residencies", "Bridal Suites", "Ritual Suites"
  ];

  return (
    <section id="hotel" className="py-48 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 03: Inventory Specs</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                  Inventory <br/><span className="gold-gradient-text not-italic font-black">Portfolio.</span>
               </h2>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
                  "420 luxury units de-risked to serve high-frequency pilgrim transit and long-stay ceremonial groups."
               </p>
            </div>

            <div className="bg-[#FDFBF7] border border-slate-200 rounded-[4rem] p-12 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform">
                   <Layers size={200} className="text-slate-950" />
                </div>
                <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                  <ShieldCheck size={14} className="text-gold-600" /> Accommodation Mix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                    {mix.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-slate-800 text-[11px] font-black uppercase tracking-widest">{item}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="pt-8">
               <Link to="/hotel" className="inline-flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group">
                  View Full Specs <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="relative rounded-[5rem] overflow-hidden border border-slate-200 shadow-3xl aspect-[4/5] bg-slate-50 group">
                <img 
                    src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
                    alt="Atrium" 
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-16 left-16 right-16 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-20 h-20 bg-gold-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform">
                            <Star size={36} fill="currentColor" />
                        </div>
                        <div>
                            <div className="text-white font-serif text-5xl italic leading-none mb-2">7-Star Specs</div>
                            <div className="text-gold-400 text-[10px] font-black uppercase tracking-[0.5em]">Institutional Standard</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: Maximize, label: "Pure Veg Hub" },
                          { icon: Mic2, label: "Acoustic Silence" },
                          { icon: Smartphone, label: "Smart Suites" },
                          { icon: BedDouble, label: "Bridal Wings" }
                        ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-xl group/item hover:bg-white/20 transition-all">
                            <item.icon className="text-gold-400 group-hover/item:scale-125 transition-transform" size={20} />
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">{item.label}</span>
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