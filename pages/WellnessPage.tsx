import React from 'react';
import { ArrowLeft, Flower2, HeartPulse, Droplets, Waves, ArrowRight, ShieldCheck, Activity, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessPage: React.FC = () => {
  const sections = [
    { title: "Vedic Spa Sanctuary", sub: "12,000 Sq. Ft. Core", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" },
    { title: "The Meridian Pool", sub: "Rooftop Infinity Edge", img: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80" }
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
              <Heart size={14} /> Dossier Chapter 06: Wellness Portfolio
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Wellness <br/><span className="gold-gradient-text italic font-black">Alchemy.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                Positioning traditional Kerala Ayurveda as a clinical-grade luxury experience. The 12,000 sq ft sanctuary leverages high-net-worth medical tourism and multi-day 'Panchakarma' residencies.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <Activity size={18} /> Medical Tourism
            </div>
            <p className="text-slate-400 text-xs font-mono">Revenue Focus: <br/><span className="text-white">LONG-STAY THERAPY</span></p>
          </div>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 mb-40">
         {sections.map((item, i) => (
             <div key={i} className="relative group h-[700px] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110 brightness-[0.4] group-hover:brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-16 left-12 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-6 text-gold-500">
                      <Flower2 size={20} className="animate-spin-slow" />
                   </div>
                   <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{item.sub}</span>
                   <h3 className="text-white font-serif text-5xl italic">{item.title}</h3>
                </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
            <div className="space-y-16">
               <h3 className="text-white font-serif text-5xl italic leading-tight">Longevity <br/>Engineering.</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Our wellness strategy focuses on high-yield curative stays. By offering structured 7, 14, and 21-day Vedic protocols, we significantly increase the 'Average Length of Stay' (ALOS) beyond typical pilgrimage visits.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Revenue Multipier", val: "2.4x", desc: "Per room yield vs. standard residents." },
                    { label: "Retention Rate", val: "40%", desc: "Annual repeat therapy bookings." }
                  ].map((stat, i) => (
                    <div key={i} className="p-10 bg-onyx-900 border border-white/10 rounded-[3rem] group hover:border-gold-500/30 transition-colors shadow-2xl">
                       <Activity className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={24} />
                       <div className="text-white font-serif text-4xl mb-2">{stat.val}</div>
                       <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[5rem] shadow-3xl">
               <h3 className="text-white font-serif text-3xl mb-16 flex items-center gap-6 italic">
                  <Flower2 className="text-gold-500" size={32} /> Service Matrix
               </h3>
               <div className="space-y-12">
                  {[
                    { l: "Physician-Led Detox", d: "Authentic Panchakarma with on-site medical consultants." },
                    { l: "High-Altitude Yoga", d: "Level 15 glass observatory for sunrise ritual practice." },
                    { l: "Molecular Recovery", d: "Modern bio-hacking suites for rapid post-ritual recovery." }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                       <div className="flex justify-between items-center mb-4">
                          <h4 className="text-white font-bold text-lg uppercase tracking-widest group-hover/item:text-gold-400 transition-colors">{item.l}</h4>
                          <ArrowRight size={18} className="text-slate-600 group-hover/item:text-gold-500 group-hover/item:translate-x-2 transition-all" />
                       </div>
                       <p className="text-slate-500 text-sm leading-relaxed font-light">{item.d}</p>
                       <div className="h-px bg-white/5 w-full mt-8 group-hover/item:bg-gold-500/20 transition-colors"></div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/operations" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 07</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Invisible <br/><span className="gold-gradient-text font-black tracking-tighter">Operations.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default WellnessPage;