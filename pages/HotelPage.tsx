import React from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Key, ShieldCheck, Sparkles, Utensils, Music, ChevronRight, Star, Home, HeartPulse, Clock, Shield, Thermometer, AirVent, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "200 Units",
          tag: "Tower A Portfolio",
          desc: "Engineered for the high-velocity transient guest. Strategically positioned for immediate temple access, featuring smart-tech automation for seamless short stays and acoustic isolation for rapid recovery.",
          img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
          features: ["Smart Automation", "Triple Glazing", "Italian Marble"]
      },
      {
          type: "Sovereign Bridal Suites",
          size: "950 Sq. Ft.",
          count: "20 Units",
          tag: "The Event Engine",
          desc: "Designed specifically for wedding preparation. Featuring dual-vanity wings, cinematic lighting, and private salon access to drive wedding package sales.",
          img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
          features: ["Dual Entry", "Priority Service", "Panorama View"]
      },
      {
          type: "The Sanctuary Residency",
          size: "500 Sq. Ft.",
          count: "200 Units",
          tag: "Tower B Inventory",
          desc: "Optimized for extended pilgrimage stays and religious medical tourism, featuring integrated wellness controls and dietary pantries.",
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
          features: ["HEPA Filters", "Nespresso Hub", "Vedic Tech"]
      }
  ];

  const towerBAmenities = [
    { icon: <Thermometer size={24} />, title: "Precision Climate Control", desc: "Individualized HVAC zones with moisture regulation for year-round comfort." },
    { icon: <AirVent size={24} />, title: "HEPA Medical Grade Air", desc: "Advanced filtration systems targeting particulate matter and ritual smoke residue." },
    { icon: <Clock size={24} />, title: "Long-Stay Concierge", desc: "Dedicated logistics for multi-week stays, including ritual dietary planning." },
    { icon: <Shield size={24} />, title: "Digital Privacy Armor", desc: "AES-256 encrypted guest identity and autonomous room entry protocols." }
  ];

  const amenities = [
    {
        title: "Vedic Wellness Core",
        desc: "A 12,000 sq. ft. sanctuary dedicated to Ayurvedic healing. Featuring consultation suites, hydrotherapy pools, and meditation decks.",
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
        icon: <Sparkles size={20} />,
        tag: "Rejuvenation",
        link: "/wellness"
    },
    {
        title: "The Orbit Gastronomy",
        desc: "Dual revolving restaurants offering 360-degree views of the Guruvayur skyline. A culinary journey from local Satvik flavors to global gourmet.",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
        icon: <Utensils size={20} />,
        tag: "Fine Dining",
        link: "/dining"
    },
    {
        title: "Imperial Event Deck",
        desc: "South India's largest pillar-less ballroom capable of hosting 3,000 guests. Engineered for grand weddings with bridal suites.",
        img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
        icon: <Music size={20} />,
        tag: "Celebrations",
        link: "/events"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen animate-fade-in overflow-hidden font-sans text-white">
      
      {/* 1. HERO SECTION - Full Immersive */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            alt="Hotel Exterior"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/20"></div>
         
         <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-32">
            <Link to="/" className="inline-flex items-center gap-4 text-white/60 hover:text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 transition-all group w-fit backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:border-gold-500/50">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-5xl">
               <div className="flex items-center gap-6 mb-8 animate-fade-in-up">
                  <div className="w-16 h-[2px] bg-gold-500 box-shadow-gold-glow"></div>
                  <span className="text-gold-400 text-[11px] font-black uppercase tracking-[0.6em]">Chapter 03: Inventory Specifications</span>
               </div>
               <h1 className="font-serif text-6xl md:text-[7rem] lg:text-[8rem] leading-[0.85] tracking-tight mb-8 text-white drop-shadow-2xl">
                  Inventory <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 font-bold italic">Audit.</span>
               </h1>
               <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500 pl-8 backdrop-blur-sm">
                  A granular breakdown of the 420 luxury keys. Engineered for thermal comfort, acoustic isolation, and high-velocity hospitality operations.
               </p>
            </div>
         </div>
      </div>

      {/* 2. STATS STRIP - Floating Glass Panel */}
      <div className="relative z-20 -mt-24 container mx-auto px-6 mb-32">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { l: "Tower A Mix", v: "200 Keys", s: "Transient Core" },
              { l: "Tower B Mix", v: "220 Keys", s: "Ceremonial Residencies" },
              { l: "Avg Room Size", v: "475 Sq.Ft", s: "Efficiency: 92%" },
              { l: "Target ARR", v: "₹12,000", s: "Audit Verified" }
            ].map((stat, i) => (
              <div key={i} className="group border-b md:border-b-0 md:border-r border-white/5 last:border-0 pb-8 md:pb-0 md:pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] mb-3 group-hover:text-gold-500 transition-colors">{stat.l}</div>
                <div className="text-white font-serif text-4xl lg:text-5xl mb-2 font-bold tracking-tight">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-bold">{stat.s}</div>
              </div>
            ))}
        </div>
      </div>

      {/* 3. TOTAL INVENTORY FEATURE - Image Based */}
      <div className="container mx-auto px-6 mb-40">
         <div className="relative rounded-[4rem] overflow-hidden border border-white/10 group h-[700px]">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]" alt="Keys" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-16 md:p-24 flex flex-col justify-center max-w-3xl">
               <div className="w-20 h-20 rounded-3xl bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 mb-12 backdrop-blur-md">
                  <Key size={40} />
               </div>
               <h2 className="font-serif text-6xl md:text-8xl text-white mb-8 leading-none">420 <span className="text-gold-500 italic">Keys.</span></h2>
               <div className="h-px w-32 bg-gold-500/50 mb-8"></div>
               <p className="text-xl md:text-3xl font-light leading-relaxed text-slate-200">
                  "<strong className="text-white font-serif">Tower A</strong> captures high-frequency transient pilgrims, while <strong className="text-white font-serif">Tower B</strong> is optimized for multi-day wedding blocks, ensuring stabilized occupancy floors."
               </p>
            </div>
         </div>
      </div>

      {/* 4. ROOM INVENTORY - Full Screen Parallax Cards */}
      <div className="flex flex-col gap-0">
         {rooms.map((room, i) => (
            <div key={i} className="relative min-h-[90vh] w-full flex items-center border-t border-white/5 sticky top-0 overflow-hidden group">
               <img src={room.img} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[20s] group-hover:scale-110" alt={room.type} />
               <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

               <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                     <span className="inline-block px-6 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md">
                        {room.tag}
                     </span>
                     <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight">
                        {room.type.split(' ')[0]} <br/>
                        <span className="italic text-slate-400 font-serif">{room.type.split(' ').slice(1).join(' ')}</span>
                     </h2>
                     <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed border-l-2 border-gold-500/50 pl-8 max-w-lg">
                        {room.desc}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {room.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                              <ShieldCheck size={16} className="text-gold-500" />
                              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{f}</span>
                           </div>
                        ))}
                     </div>

                     <div className="pt-8 flex items-center gap-12">
                        <div>
                           <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Count</div>
                           <div className="text-4xl font-serif text-white">{room.count}</div>
                        </div>
                        <div>
                           <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Size</div>
                           <div className="text-4xl font-serif text-white">{room.size}</div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Glass Card Floating Right (Optional detail view) */}
                  <div className="hidden lg:block relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group/card">
                     <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-24 h-24 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500 hover:text-black text-white flex items-center justify-center transition-all duration-500 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover/card:scale-110">
                           <ArrowRight size={32} />
                        </button>
                     </div>
                     <div className="absolute bottom-10 text-center w-full">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">View Schematic</span>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* NEW: TOWER B - THE RESIDENCY MOAT */}
      <div className="bg-white py-40 relative overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] text-slate-50 font-serif text-[40rem] font-black italic opacity-40 pointer-events-none select-none leading-none">B</div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32">
            <div className="lg:col-span-6 space-y-12">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 03.1: The Residency Moat</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-8xl leading-[0.8] tracking-tighter italic">
                  Tower B <br/><span className="gold-gradient-text italic font-black">Sanctuary.</span>
               </h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
                  "Tower B functions as the asset's yield anchor, capturing multi-day ritual cycles through specialized residency architecture."
               </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
               <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                     <Home size={150} className="text-slate-950" />
                  </div>
                  <h4 className="text-slate-950 font-serif text-3xl italic mb-6">Residency Logic</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-10">
                    Unlike Tower A's rapid turnover, Tower B is designed for the high-net-worth spiritual traveler. Integrated dietary pantries and long-stay storage hubs ensure 7-star comfort for durations up to 21 days.
                  </p>
                  <div className="flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-widest">
                     <HeartPulse size={16} /> Curative Living Node Active
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {towerBAmenities.map((item, i) => (
                <div key={i} className="group p-12 bg-white border border-slate-100 rounded-[4rem] hover:border-gold-400 hover:shadow-2xl transition-all duration-700 h-[400px] flex flex-col justify-between shadow-sm">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="text-slate-950 font-serif text-3xl italic mb-4 leading-none">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{item.desc}</p>
                   </div>
                   <div className="pt-6 border-t border-slate-50 opacity-30 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Node Status: Verified</span>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-32 p-16 md:p-24 bg-slate-950 rounded-[5rem] shadow-3xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                <Ruler size={400} className="text-gold-500" />
             </div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                   <h3 className="text-white font-serif text-5xl md:text-7xl italic leading-none mb-10">Unit <br/><span className="gold-gradient-text not-italic font-black">Specs.</span></h3>
                   <div className="space-y-8">
                      {[
                        { l: "Clear Ceiling Height", v: "3.4 Meters" },
                        { l: "Glazing Spec", v: "18mm DGU Acoustic" },
                        { l: "Thermal Barrier", v: "R-Value 4.5" },
                        { l: "Automation Node", v: "KNX Unified" }
                      ].map((spec, i) => (
                         <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{spec.l}</span>
                            <span className="text-white font-serif text-2xl italic">{spec.v}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-3xl p-12 rounded-[4rem] text-center">
                   <p className="text-white font-serif text-4xl italic leading-tight mb-12">
                     "Tower B is the <span className="gold-gradient-text not-italic font-black">stabilizing anchor</span>, protecting the project from seasonal transient volatility."
                   </p>
                   <div className="flex justify-center gap-10">
                      <div className="flex flex-col">
                        <span className="text-gold-500 font-serif text-5xl font-black italic">220</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Luxury Units</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gold-500 font-serif text-5xl font-black italic">92%</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Floor Efficiency</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 5. AMENITIES - Horizontal Scroll / High Impact Grid */}
      <div className="bg-slate-950 relative py-40 border-t border-white/10">
         <div className="container mx-auto px-6 mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
               <div className="max-w-3xl">
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-6">Integrated Ecosystem</span>
                  <h2 className="font-serif text-5xl md:text-8xl text-white leading-none">Signature <span className="text-slate-500 italic">Assets.</span></h2>
               </div>
               <p className="text-slate-400 text-lg max-w-sm text-right leading-relaxed font-light">
                  Beyond the room, the asset offers a complete destination ecosystem designed to increase length of stay.
               </p>
            </div>
         </div>

         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {amenities.map((item, i) => (
                <Link to={item.link} key={i} className="group relative h-[800px] rounded-[3rem] overflow-hidden border border-white/10">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
                    
                    <div className="absolute top-10 left-10">
                        <div className="bg-black/60 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em]">{item.tag}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-12 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                            <div className="text-gold-500 mb-6">{item.icon}</div>
                            <h3 className="font-serif text-3xl text-white italic mb-4">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <span className="text-[9px] font-black uppercase tracking-widest text-gold-500">Explore</span>
                                <ChevronRight size={16} className="text-white" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
         </div>
      </div>

      {/* 6. NEXT SECTION TEASER - Full Bleed */}
      <Link to="/events" className="relative block h-[80vh] w-full overflow-hidden group">
         <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 opacity-60" alt="Next" />
         <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
         
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 rounded-full mb-12">
               <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Proceed to Chapter 04</span>
            </div>
            <h2 className="font-serif text-[5rem] md:text-[10rem] text-white leading-[0.8] mb-12 opacity-90">
               Event <span className="italic text-gold-500 font-bold">Masterplan.</span>
            </h2>
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.1)]">
               <ArrowRight size={48} />
            </div>
         </div>
      </Link>

    </div>
  );
};

export default HotelPage;