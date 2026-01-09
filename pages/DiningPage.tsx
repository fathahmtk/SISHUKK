import React from 'react';
import { ArrowLeft, Compass, UtensilsCrossed, Wine, Coffee, RotateCw, ArrowRight, Star, Hexagon, Zap, Utensils } from 'lucide-react';
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
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-20">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <Utensils size={14} /> Dossier Chapter 05: Gastronomy Portfolio
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                Positioned as independent revenue centers, our F&B assets are designed to attract non-resident demand from the wider region, ensuring yield stability independent of room occupancy.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <RotateCw size={18} /> Unique Selling Point
            </div>
            <p className="text-slate-400 text-xs font-mono">Structural USP: <br/><span className="text-white">DUAL REVOLVING CROWNS</span></p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 mb-40">
         {concepts.map((item, i) => (
             <div key={i} className="relative group h-[750px] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 brightness-[0.35] group-hover:brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute top-12 left-12">
                   <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-gold-500 group-hover:text-onyx-950 group-hover:border-gold-500 transition-all duration-700">
                      <Star size={24} className="group-hover:rotate-180 transition-transform duration-1000" />
                   </div>
                </div>

                <div className="absolute bottom-16 left-12 right-12 space-y-6">
                   <div>
                      <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block border-b border-gold-500/30 pb-4 w-fit">{item.sub}</span>
                      <h3 className="text-white font-serif text-5xl md:text-6xl">{item.title}</h3>
                   </div>
                   <p className="text-slate-300 text-lg font-light leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                      {item.desc}
                   </p>
                   <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                      <Zap className="text-gold-500" size={16} />
                      <span className="text-[10px] text-white font-black uppercase tracking-widest">{item.yield}</span>
                   </div>
                </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
            <div className="lg:col-span-8 space-y-16">
               <h3 className="text-white font-serif text-5xl italic leading-tight">Monetization <br/>Logic.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Day-Part Optimization", icon: Hexagon, desc: "Breakfast for pilgrims, premium revolving lunches for business, and destination dinner rituals for weddings." },
                    { title: "Non-Resident Capture", icon: Wine, desc: "Direct elevator access from the Portal Lobby ensures F&B guests do not interfere with room-guest privacy." }
                  ].map((item, i) => (
                    <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3.5rem] group hover:bg-white/[0.08] transition-all relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-700">
                          <item.icon size={120} />
                       </div>
                       <item.icon className="text-gold-500 mb-8" size={36} />
                       <h4 className="text-white font-serif text-3xl mb-4 italic">{item.title}</h4>
                       <p className="text-slate-400 text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-4">
               <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] shadow-3xl h-full flex flex-col justify-between">
                  <div>
                     <h3 className="text-white font-serif text-3xl mb-12 flex items-center gap-4 italic">
                        <RotateCw className="text-gold-500" size={28} /> The Orbit
                     </h3>
                     <div className="space-y-10">
                        <div className="group">
                           <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-gold-500 transition-colors">Rotation Speed</div>
                           <div className="text-white font-serif text-4xl">60 Min</div>
                           <div className="text-slate-600 text-[9px] uppercase tracking-widest mt-1">Per Full Cycle</div>
                        </div>
                        <div className="h-px bg-white/5"></div>
                        <div className="group">
                           <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-gold-500 transition-colors">Capacity</div>
                           <div className="text-white font-serif text-4xl">120 Seats</div>
                           <div className="text-slate-600 text-[9px] uppercase tracking-widest mt-1">Per Tower Core</div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-12 p-6 bg-gold-500/10 rounded-3xl border border-gold-500/20 text-center">
                     <p className="text-gold-500 text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">Technical Annexure: German Drive-Train Vibration Analysis Logged.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/wellness" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 06</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Vedic <br/><span className="gold-gradient-text font-black tracking-tighter">Wellness.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default DiningPage;