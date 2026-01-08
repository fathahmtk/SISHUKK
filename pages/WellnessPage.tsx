
import React from 'react';
import { ArrowLeft, Flower2, HeartPulse, Droplets, Waves, ArrowRight, ShieldCheck, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessPage: React.FC = () => {
  const sections = [
    { title: "Vedic Spa Sanctuary", sub: "12,000 Sq. Ft. Core", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" },
    { title: "The Meridian Pool", sub: "Rooftop Infinity Edge", img: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 06: Wellness Portfolio</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Wellness <br/><span className="gold-gradient-text italic font-black">Alchemy.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                Positioning traditional Kerala Ayurveda as a clinical-grade luxury experience. The 12,000 sq ft sanctuary leverages high-net-worth medical tourism and multi-day 'Panchakarma' residencies.
            </p>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 mb-32">
         {sections.map((item, i) => (
             <div key={i} className="relative group h-[70vh] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.4] group-hover:brightness-75" />
                <div className="absolute inset-0 bg-onyx-950/30 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-12 left-12">
                   <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2 block">{item.sub}</span>
                   <h3 className="text-white font-serif text-4xl">{item.title}</h3>
                </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
            <div className="space-y-12">
               <h3 className="text-white font-serif text-4xl italic">Longevity Engineering</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Our wellness strategy focuses on high-yield curative stays. By offering structured 7, 14, and 21-day Vedic protocols, we significantly increase the 'Average Length of Stay' (ALOS) beyond typical pilgrimage visits.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Revenue Multipier", val: "2.4x", desc: "Per room yield vs. standard residents." },
                    { label: "Retention Rate", val: "40%", desc: "Annual repeat therapy bookings." }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-onyx-900 border border-white/10 rounded-3xl">
                       <Activity className="text-gold-500 mb-4" size={20} />
                       <div className="text-white font-serif text-3xl mb-1">{stat.val}</div>
                       <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] shadow-3xl">
               <h3 className="text-white font-serif text-2xl mb-10 flex items-center gap-4">
                  <Flower2 className="text-gold-500" size={24} /> Service Matrix
               </h3>
               <div className="space-y-8">
                  {[
                    { l: "Physician-Led Detox", d: "Authentic Panchakarma with on-site medical consultants." },
                    { l: "High-Altitude Yoga", d: "Level 15 glass observatory for sunrise ritual practice." },
                    { l: "Molecular Recovery", d: "Modern bio-hacking suites for rapid post-ritual recovery." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                       <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-gold-400 transition-colors">{item.l}</h4>
                       <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                       <div className="h-px bg-white/5 w-full mt-6"></div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/operations" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Invisible <br/><span className="gold-gradient-text font-black tracking-tighter">Operations.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default WellnessPage;
