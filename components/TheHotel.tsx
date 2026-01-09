import React from 'react';
import { BedDouble, Maximize, Mic2, Smartphone, ArrowRight, Star, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  const accommodationMix = [
    "Tower A: 200 Luxury Rooms", "Tower B: 220 Event Keys", "Temple View Suites",
    "Executive Residencies", "Bridal Suites", "Presidential / Wedding Suites"
  ];

  return (
    <section id="hotel" className="py-48 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-[10%] left-[-5%] text-slate-50 font-serif text-[45rem] font-black pointer-events-none select-none italic leading-none">H</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50">
                  <Star size={14} className="text-gold-600 fill-gold-600" />
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em]">Chapter 03: Hospitality Core</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                  Refined <br/><span className="gold-gradient-text not-italic font-black">Residencies.</span>
               </h2>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12">
                  SIRSHUKK features 420 luxury keys. The twin-tower configuration is strategically de-risked to serve high-frequency pilgrim transit and long-stay ceremonial groups.
               </p>
            </div>

            <div className="bg-[#FDFBF7] border border-slate-200 rounded-[4rem] p-12 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform">
                   <Layers size={200} className="text-slate-950" />
                </div>
                <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                  <ShieldCheck size={14} className="text-gold-600" /> Accommodation Portfolio
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                    {accommodationMix.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-slate-800 text-[11px] font-black uppercase tracking-widest">{item}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="pt-8">
               <Link to="/hotel" className="inline-flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group active:scale-95">
                  View Inventory Specs <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative group">
             <div className="absolute -inset-20 bg-gold-50/30 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="relative rounded-[5rem] overflow-hidden border border-slate-200 shadow-3xl aspect-[4/5] bg-slate-50">
                <img 
                    src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
                    alt="Grand Hotel Atrium" 
                    className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-16 left-16 right-16 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-20 h-20 bg-gold-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform">
                            <Star size={36} fill="currentColor" />
                        </div>
                        <div>
                            <div className="text-slate-950 font-serif text-5xl italic leading-none mb-2">7-Star Atrium</div>
                            <div className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em]">Grand Arrival Experience</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                        { icon: Maximize, label: "Pure Vegetarian" },
                        { icon: Mic2, label: "Acoustic Silence" },
                        { icon: Smartphone, label: "Smart Suites" },
                        { icon: BedDouble, label: "Bridal Wings" }
                        ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-xl group/item hover:bg-white transition-all">
                            <item.icon className="text-gold-600 group-hover/item:scale-125 transition-transform" size={20} />
                            <span className="text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">{item.label}</span>
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