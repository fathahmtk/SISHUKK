import React from 'react';
import { ArrowLeft, ArrowRight, Music, Users, Layers, Zap, Maximize2, Mic2, Globe, Star, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const venues = [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", label: "Grand Imperial Ballroom", sub: "15,000 Sq. Ft. Volume", desc: "South India's largest pillar-less ceremonial volume." },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", label: "Pre-Function Foyer", sub: "Ritual Concierge Hub", desc: "A 5,000 sq ft arrival atrium for high-velocity banquet flows." },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", label: "Ceremonial Decks", sub: "Outdoor Panorama", desc: "Level 4 terrace decks aligned with temple skyline vistas." }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Events Hero */}
      <div className="relative h-[85vh] w-full bg-slate-900 flex items-end pb-24">
         <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Event Grandeur"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 04: Revenue Alpha Driver</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  "The ballroom core is the structural heart of SIRSHUKK. Engineered for South India's largest ritual events, providing a non-seasonal demand floor."
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Core Event Metrics */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Global Capacity", v: "3,000", s: "Pax Pax-Pax" },
              { l: "Ceiling Height", v: "8.0m", s: "Cinematic Clearance" },
              { l: "Banquet Area", v: "15,000", s: "Sq. Ft. Pillar-less" },
              { l: "Concurrent Ops", v: "4 Units", s: "Parallel Logistics" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Venue Showcase */}
        <div className="space-y-32 mb-40">
           {venues.map((venue, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                 <div className={`lg:col-span-7 relative h-[600px] rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={venue.src} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt={venue.label} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12">
                       <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{venue.sub}</span>
                       <h3 className="text-white font-serif text-5xl italic leading-none">{venue.label}</h3>
                    </div>
                 </div>
                 <div className={`lg:col-span-5 space-y-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-slate-950 font-serif text-4xl md:text-6xl leading-[0.9] tracking-tighter italic">Yield <br/><span className="gold-gradient-text not-italic font-black">Generator.</span></h2>
                    <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                       {venue.desc}
                    </p>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                       <div className="flex items-center gap-4">
                          <ShieldCheck size={20} className="text-gold-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Logistics Verified</span>
                       </div>
                       <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 hover:bg-gold-500 hover:text-white transition-all shadow-lg active:scale-90">
                          <ArrowRight size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* Technical Capacity Block */}
        <div className="mb-40 pt-32 border-t border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block">Operational Core</span>
                 <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Capacity <br/><span className="gold-gradient-text not-italic font-black">Engineering.</span></h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Maximize2, title: "8m Heights", d: "Clear vertical dynamics for ritual media production." },
                      { icon: Mic2, title: "Sonic Armor", d: "Acoustic isolation between concurrent venues." }
                    ].map((item, i) => (
                       <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-gold-400 transition-all">
                          <item.icon size={24} className="text-gold-600 mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="text-slate-950 font-serif text-2xl italic mb-2">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-950 p-16 md:p-24 rounded-[6rem] text-white flex flex-col justify-between shadow-3xl h-full relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-24 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                    <Globe size={400} className="text-gold-500" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-16">
                       <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl">
                          <Target size={32} />
                       </div>
                       <div className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full">REGION MONOPOLY</div>
                    </div>
                    <h3 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 italic">365-Day <br/><span className="gold-gradient-text not-italic">Yield Floor.</span></h3>
                    <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm uppercase tracking-tight italic border-l border-white/10 pl-8">
                       The event core ensures consistent cash flow regardless of room seasonality.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Next Link to Dining */}
        <Link to="/dining" className="group relative block w-full h-[700px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Dining" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 05</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Destination <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Gastronomy.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;