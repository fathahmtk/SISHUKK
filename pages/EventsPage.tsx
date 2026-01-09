import React from 'react';
import { ArrowLeft, ArrowRight, Music, Users, Layers, Zap, Truck, Camera, Star, Maximize2, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", label: "Grand Imperial Ballroom", sub: "15,000 Sq. Ft. Pillar-less Volume" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", label: "Pre-Function Foyer", sub: "Bespoke Concierge Arrival" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", label: "Ritual Courtyard", sub: "Outdoor Ceremonial Ecosystem" },
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80", label: "Royal Suite Wings", sub: "Integrated Event Residency" }
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
              <Music size={14} /> Dossier Chapter 04: Revenue Architecture
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                The ballroom is the structural heart of SGT. Engineered for South India's largest ceremonies and global conventions, it provides a non-seasonal demand floor independent of room occupancy.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <Users size={18} /> Max Capacity
            </div>
            <p className="text-slate-400 text-xs font-mono">Structural Limit: <br/><span className="text-white font-serif text-3xl">3,000 PAX</span></p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-1 mb-40">
         {images.map((img, i) => (
             <div key={i} className="relative group h-[700px] overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-12 left-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest block mb-4 border-l-2 border-gold-500 pl-3">{img.sub}</span>
                    <h3 className="text-white font-serif text-3xl max-w-[200px] leading-none">{img.label}</h3>
                 </div>
                 {/* Scanning Line Effect */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent h-40 -translate-y-full group-hover:translate-y-[800px] transition-transform duration-[2s] pointer-events-none"></div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-40">
            <div className="lg:col-span-7 space-y-16">
               <div className="space-y-6">
                  <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.6em] block">Technical Acoustics</span>
                  <h3 className="text-white font-serif text-5xl italic leading-tight">Capacity <br/>Engineering.</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                     Designed to host the "Big Fat Indian Wedding" and corporate MICE simultaneously. The ballroom features robotic partition walls and a dedicated heavy-lift service corridor for automotive launches.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Volume Dynamics", icon: Maximize2, desc: "8-meter clear heights allowing for aerial cinematography and elaborate set designs." },
                    { title: "Sonic Integrity", icon: Mic2, desc: "Concert-grade digital acoustics and active noise isolation between parallel venues." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all group">
                       <div className="w-16 h-16 bg-onyx-950 rounded-2xl flex items-center justify-center text-gold-500 mb-8 border border-white/5 group-hover:scale-110 transition-transform shadow-2xl">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-white font-serif text-3xl mb-4 italic">{item.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:col-span-5">
               <div className="bg-onyx-900 border border-white/10 p-12 lg:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                     <Users size={250} className="text-gold-500" />
                  </div>
                  <h3 className="text-white font-serif text-3xl mb-12 flex items-center gap-6 relative z-10">
                     <Star className="text-gold-500" size={28} /> Yield Parameters
                  </h3>
                  <div className="space-y-8 relative z-10">
                     {[
                        { l: "Max Capacity", v: "3,000 Pax" },
                        { l: "Banquet Seats", v: "1,200 Pax" },
                        { l: "Concurrent Events", v: "Up to 4" },
                        { l: "Service Core", v: "Dedicated BOH" }
                     ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 group/row">
                           <span className="text-slate-500 text-[10px] uppercase tracking-widest font-black group-hover/row:text-white transition-colors">{item.l}</span>
                           <span className="text-gold-400 font-mono text-xl font-black">{item.v}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/5">
                     <button className="w-full py-5 bg-gold-500/10 hover:bg-gold-500 text-gold-500 hover:text-onyx-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all border border-gold-500/20">
                        Download Floor Schematics
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/dining" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 05</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Destination <br/><span className="gold-gradient-text font-black tracking-tighter">Gastronomy.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EventsPage;