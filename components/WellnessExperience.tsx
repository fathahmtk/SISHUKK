import React from 'react';
import { Sparkles, Flower2, Activity, HeartPulse, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <section id="wellness" className="py-48 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-[10%] left-[-5%] text-slate-50 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-60">W</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-10">
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                  <Gem size={14} className="text-gold-600" />
                  <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Chapter 06: Wellness Integration</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                 Healing <br/><span className="gold-gradient-text not-italic font-black">Monopoly.</span>
               </h2>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  "Traditional Ayurveda reimagined as clinical-grade luxury. A 12,000 sq ft core designed to capture the high-yield medical tourism segment."
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { icon: Sparkles, text: "Signature Luxury Spa", sub: "Vedic Protocols" },
                 { icon: Flower2, text: "Ayurvedic Suites", sub: "Clinical Grade" },
                 { icon: Activity, text: "Yoga Decks", sub: "Panorama Vistas" },
                 { icon: HeartPulse, text: "Recovery Studios", sub: "Bio-Hacking" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-6 p-10 rounded-[3rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 group shadow-sm">
                    <div className="w-14 h-14 bg-white rounded-2xl text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm border border-slate-100">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-slate-950 font-serif text-2xl mb-2 italic leading-none">{item.text}</h4>
                       <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-8">
               <Link to="/wellness" className="inline-flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group active:scale-95">
                  Explore Wellness Core <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
             <div className="relative h-[800px] w-full group rounded-[5rem] overflow-hidden border border-slate-100 shadow-3xl bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
                  alt="Ayurvedic Spa" 
                  className="w-full h-full object-cover transition-all duration-[8s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-16 left-16 right-16 p-12 bg-white/70 backdrop-blur-3xl border border-white/50 rounded-[4rem] shadow-3xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-6 mb-6">
                     <ShieldCheck size={36} className="text-gold-600" />
                     <div>
                        <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.5em] block mb-1">Impact Analysis</span>
                        <p className="text-gold-600 font-serif italic text-4xl leading-none font-black">"2.5x ALOS Multiplier"</p>
                     </div>
                  </div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black italic border-t border-slate-200 pt-6">Extended length of stay via curative stay cycles.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WellnessExperience;