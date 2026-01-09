import React from 'react';
import { Sparkles, Flower2, Activity, HeartPulse, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <section id="wellness" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 05: Wellness Core</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.8] tracking-tighter italic">
                 Vedic <br/><span className="gold-gradient-text not-italic font-black">Alchemy.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 max-w-xl italic">
                  Traditional Ayurveda reimagined as clinical-grade luxury. A 12,000 sq ft core designed for medical tourism.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               {[
                 { icon: Sparkles, text: "Signature Spa", sub: "Vedic Protocols" },
                 { icon: Flower2, text: "Clinical Suites", sub: "Grade A facility" },
                 { icon: Activity, text: "Yoga Decks", sub: "Skyline Vistas" },
                 { icon: HeartPulse, text: "Bio-Hacking", sub: "Recovery Labs" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-4 p-8 rounded-[2.5rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 group">
                    <div className="w-10 h-10 bg-white rounded-xl text-gold-600 flex items-center justify-center border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                       <item.icon size={18} />
                    </div>
                    <div>
                       <h4 className="text-slate-950 font-serif text-xl mb-1 italic leading-none">{item.text}</h4>
                       <p className="text-[8px] text-slate-400 uppercase tracking-widest font-black">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-6">
               <Link to="/wellness" className="inline-flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Explore Wellness <ArrowRight size={18} />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-6 h-[700px]">
             <div className="relative h-full w-full rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl bg-slate-50 group">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
                  alt="Wellness" 
                  className="w-full h-full object-cover transition-all duration-[8s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-xl">
                  <div className="flex items-center gap-5">
                     <ShieldCheck size={28} className="text-gold-500" />
                     <div>
                        <span className="text-white/60 text-[8px] font-black uppercase tracking-[0.5em] block mb-1">Impact Analysis</span>
                        <p className="text-white font-serif italic text-3xl leading-none font-black">2.5x ALOS Cap</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WellnessExperience;