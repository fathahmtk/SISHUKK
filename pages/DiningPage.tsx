
import React from 'react';
/* Added missing ShieldCheck import */
import { ArrowLeft, Compass, UtensilsCrossed, Wine, Coffee, RotateCw, ArrowRight, Star, Hexagon, Zap, Utensils, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiningPage: React.FC = () => {
  const concepts = [
    {
      title: "The Orbit",
      sub: "Dual Revolving Crowns",
      desc: "Two independent 60-minute rotation platforms offering 360-degree spiritual and coastal vistas. German-engineered vibration-free dynamics.",
      yield: "High Non-Resident Capture",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
    },
    {
      title: "Vedic Hearth",
      sub: "Fine Dining Ritual",
      desc: "Pure vegetarian destination dining. Curated temple-inspired menus using organic-certified regional produce.",
      yield: "Premium Ticket Size",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">D</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 05: Gastronomy Portfolio</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "F&B assets are positioned as independent revenue centers, engineered to capture demand from the wider region, ensuring yield stability."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <RotateCw size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Compass size={28} className="animate-spin-slow" />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Structural USP</h4>
                   </div>
                   <div className="text-slate-950 font-serif text-5xl font-black mb-4 italic leading-tight">Dual Revolving <br/>Crowns.</div>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Engineering Marvel</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Concept Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
           {concepts.map((item, i) => (
               <div key={i} className={`group relative h-[750px] rounded-[5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 transition-all duration-1000 hover:shadow-3xl ${i % 2 === 1 ? 'lg:translate-y-24' : ''}`}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-16 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                     <div className="bg-white/90 backdrop-blur-2xl p-12 rounded-[4rem] border border-white/50 shadow-3xl">
                        <div className="flex justify-between items-start mb-10">
                           <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                              <Star size={24} fill="currentColor" />
                           </div>
                           <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest border border-gold-200 px-6 py-2.5 rounded-full">{item.yield}</span>
                        </div>
                        <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{item.sub}</span>
                        <h3 className="text-slate-950 font-serif text-5xl mb-8 italic leading-none">{item.title}</h3>
                        <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-2 border-gold-400 pl-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                           {item.desc}
                        </p>
                        <div className="mt-10 pt-10 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Monetization Active</span>
                           <ArrowRight size={24} className="text-gold-600 group-hover:translate-x-2 transition-transform" />
                        </div>
                     </div>
                  </div>
               </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40 items-center pt-24 border-t border-slate-100">
            <div className="lg:col-span-8 space-y-16">
               <h3 className="text-slate-950 font-serif text-5xl md:text-[6rem] italic leading-[0.9] tracking-tighter">Monetization <br/><span className="gold-gradient-text not-italic font-black">Logic.</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Day-Part Optimization", icon: Hexagon, desc: "Breakfast for pilgrims, revolving lunches for business, and ritual dinner rituals." },
                    { title: "Non-Resident Capture", icon: Wine, desc: "Direct elevator access ensures F&B guests do not interfere with room-guest privacy." }
                  ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[4rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 shadow-sm group">
                       <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 mb-8 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-slate-950 font-serif text-3xl mb-4 italic leading-none">{item.title}</h4>
                       <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:col-span-4">
               <div className="bg-white border border-slate-200 p-12 lg:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                     <RotateCw size={300} className="text-slate-950" />
                  </div>
                  <h3 className="text-slate-950 font-serif text-4xl mb-12 italic relative z-10 leading-none">The Orbit.</h3>
                  <div className="space-y-10 relative z-10">
                     {[
                        { l: "Rotation Speed", v: "60 Min Cycle" },
                        { l: "Capacity", v: "120 Seats" },
                        { l: "Drive System", v: "Vibration-Free" },
                        { l: "Access Path", v: "VIP Express" }
                     ].map((item, i) => (
                        <div key={i} className="flex justify-between items-baseline group/row">
                           <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest group-hover/row:text-gold-600 transition-colors">{item.l}</span>
                           <div className="flex-1 border-b border-dotted border-slate-200 mx-6"></div>
                           <span className="text-slate-950 font-serif text-2xl italic whitespace-nowrap">{item.v}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                     <p className="text-gold-600 text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">Technical Annexure: Drive-Train Vibration Analysis Logged v2.5</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Link */}
         <Link to="/wellness" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Chapter 06</span>
               <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Vedic <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Wellness.</span></h3>
               <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                  <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default DiningPage;
