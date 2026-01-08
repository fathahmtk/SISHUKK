import React, { useState } from 'react';
import { Layers, Maximize2, Map, ShieldCheck, Zap, UserCheck, Coffee, Wind, Eye, Ruler, Users, Grid, ArrowRight, Gauge, Activity, Database } from 'lucide-react';

const FLOORS = [
  {
    id: 'crown',
    level: 'Lvl 20',
    name: 'The Revolving Crown',
    type: 'Gastronomy Hub',
    description: 'A high-precision engineering marvel featuring two independent revolving platforms. Designed for vibration-free 360-degree destination dining.',
    amenities: ['German Drive Train Tech', 'Panoramic DGU Glass', 'Independent Service Core', 'Ambient Scenography'],
    capacity: '120 Pax per Tower',
    metrics: {
      area: '8,500 Sq. Ft.',
      efficiency: '94%',
      height: '75.0m Terminal',
      configuration: '360° Circular Core'
    },
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80'
  },
  {
    id: 'bridge',
    level: 'Lvl 15',
    name: 'The Meridian Arch',
    type: 'Executive Skybridge',
    description: 'A structural nexus link connecting Towers A and B. Houses the Executive Club lounge and a glass-bottomed spiritual observation deck.',
    amenities: ['Private Concierge', 'Executive Library', 'Observation Deck', 'Secure Digital Vault'],
    capacity: '45 Pax Peak',
    metrics: {
      area: '4,200 Sq. Ft.',
      efficiency: '88%',
      height: '55.0m Span',
      configuration: 'Steel Truss Link'
    },
    image: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80'
  },
  {
    id: 'guest',
    level: 'Lvl 04-14',
    name: 'Inventory Plate',
    type: 'Luxury Residencies',
    description: 'Typical floor plate featuring a mix of Metropolitan Deluxe and Sanctuary units. Optimized for maximum thermal and acoustic comfort.',
    amenities: ['IoT Suite Control', 'Acoustic Barrier Glazing', '24/7 Butler Pantry', 'Wellness Air Systems'],
    capacity: '20 Keys per Level',
    metrics: {
      area: '12,500 Sq. Ft.',
      efficiency: '86%',
      height: '3.4m Clear',
      configuration: 'Cylindrical Core Flow'
    },
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'
  },
  {
    id: 'ballroom',
    level: 'Lvl 01-03',
    name: 'Imperial Ballroom',
    type: 'Event Epicenter',
    description: 'Monumental 15,000 sq ft pillar-less volume. Triple-height ceiling clearance for grand ceremonial scale and cinematic production.',
    amenities: ['Digital Acoustics', 'Mega-Kitchen Core', 'VIP Ceremonial Entry', 'Bespoke Lighting Rig'],
    capacity: '3,000 Pax Capacity',
    metrics: {
      area: '22,000 Sq. Ft.',
      efficiency: '96%',
      height: '8.0m Clearance',
      configuration: 'Pillar-less Void'
    },
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80'
  },
];

const FloorPlanExplorer: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState(0);

  return (
    <div className="w-full py-40 bg-onyx-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Technical Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8 text-center lg:text-left">
              <Database size={14} /> Structural Schematics v2.5
            </div>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-[0.8] text-center lg:text-left italic">
              Facility <br/><span className="gold-gradient-text italic font-black">Stacking.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-onyx-900 border border-white/10 px-10 py-6 rounded-[2.5rem] shadow-3xl">
             <div className="text-right">
                <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest block mb-2">Audit Compliance</span>
                <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                   <ShieldCheck size={16} className="text-gold-500" /> BIM Level 300
                </span>
             </div>
             <div className="w-px h-12 bg-white/10"></div>
             <div className="text-right">
                <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest block mb-2">Yield Index</span>
                <span className="text-gold-500 font-mono text-sm font-black">SGT_PRO_242</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Vertical Navigation Stack */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-onyx-900 border border-white/10 rounded-[3rem] p-10 shadow-3xl">
              <h3 className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-12 border-b border-white/5 pb-4">Operational Levels</h3>
              <div className="space-y-5">
                {FLOORS.map((floor, i) => (
                  <button
                    key={floor.id}
                    onClick={() => setActiveFloor(i)}
                    className={`w-full group relative flex items-center justify-between p-8 rounded-[2rem] border transition-all duration-500 ${
                      activeFloor === i 
                      ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-[0_20px_40px_rgba(212,175,55,0.3)] scale-105 z-10' 
                      : 'bg-white/5 text-slate-500 border-white/5 hover:border-gold-500/40 hover:text-white'
                    }`}
                  >
                    <div className="text-left">
                      <div className={`text-[9px] font-black uppercase tracking-widest mb-2 ${activeFloor === i ? 'text-onyx-950/60' : 'text-gold-500'}`}>
                        {floor.level}
                      </div>
                      <div className="text-sm font-black uppercase tracking-wider truncate max-w-[160px]">{floor.name}</div>
                    </div>
                    <ArrowRight size={18} className={`transition-all duration-500 ${activeFloor === i ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:opacity-60'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-10 bg-gold-500/5 border border-gold-500/20 rounded-[3rem] group hover:bg-gold-500/10 transition-colors shadow-2xl">
               <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-gold-500 rounded-2xl text-onyx-950 shadow-xl">
                    <Grid size={22} />
                  </div>
                  <h4 className="text-white font-serif text-xl italic leading-none">Global <br/>Schematic</h4>
               </div>
               <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                  Analyze vertical logistics and revenue-generating area efficiency across the twin cores.
               </p>
            </div>
          </div>

          {/* Interactive Technical Terminal */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-onyx-900 border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7)] min-h-[800px]">
            
            {/* Visual Display Core */}
            <div className="md:col-span-7 relative h-[500px] md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
              <img 
                src={FLOORS[activeFloor].image} 
                className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110 brightness-[0.3] group-hover:brightness-50"
                alt={FLOORS[activeFloor].name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/95 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Technical HUD Overlay */}
              <div className="absolute inset-0 z-10 p-12">
                 <div className="w-full h-full border-2 border-gold-500/15 rounded-[3rem] relative backdrop-blur-[1px] animate-fade-in" key={activeFloor}>
                    {/* Pulsing Hotspots */}
                    <div className="absolute top-[20%] left-[25%] group/hs">
                       <div className="w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_20px_#D4AF37] animate-pulse cursor-crosshair"></div>
                       <div className="absolute top-10 left-0 bg-onyx-950 border border-gold-500/40 px-5 py-3 rounded-2xl opacity-0 group-hover/hs:opacity-100 transition-all translate-y-4 group-hover/hs:translate-y-0 whitespace-nowrap z-20 shadow-3xl">
                          <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest block mb-1">Structural Node S-1</span>
                          <span className="text-white text-[9px] font-medium opacity-60">High-Load Vertical Core</span>
                       </div>
                    </div>
                    <div className="absolute bottom-[25%] right-[30%] group/hs">
                       <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white] animate-pulse cursor-crosshair"></div>
                       <div className="absolute bottom-10 right-0 bg-onyx-950 border border-white/30 px-5 py-3 rounded-2xl opacity-0 group-hover/hs:opacity-100 transition-all -translate-y-4 group-hover/hs:translate-y-0 whitespace-nowrap z-20 shadow-3xl">
                          <span className="text-white text-[10px] font-black uppercase tracking-widest block mb-1">Mep Ducting Alpha</span>
                          <span className="text-white text-[9px] font-medium opacity-60">Acoustic Insulated Passage</span>
                       </div>
                    </div>
                    
                    {/* SVG Engineering Lines Simulation */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                       <svg className="w-full h-full" viewBox="0 0 100 100">
                          <rect x="15" y="15" width="70" height="70" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="3,3" />
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
                          <line x1="15" y1="50" x2="85" y2="50" stroke="white" strokeWidth="0.1" strokeDasharray="1,1" />
                          <line x1="50" y1="15" x2="50" y2="85" stroke="white" strokeWidth="0.1" strokeDasharray="1,1" />
                       </svg>
                    </div>

                    <div className="absolute bottom-12 left-12 flex items-center gap-5">
                       <div className="w-14 h-14 rounded-2xl bg-onyx-950/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-gold-500 shadow-3xl hover:bg-gold-500 hover:text-onyx-950 transition-all cursor-pointer">
                          <Maximize2 size={24} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Full-Scale Render Available</span>
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">4K Architectural Isometric</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Technical Data Terminal */}
            <div className="md:col-span-5 p-12 lg:p-20 flex flex-col justify-between relative bg-onyx-900 shadow-inner">
               <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                  <Map size={220} className="text-gold-500" />
               </div>

               <div className="relative z-10">
                  <div className="mb-16">
                     <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-500/20 bg-gold-500/5 rounded-full text-gold-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Activity size={14} /> {FLOORS[activeFloor].type}
                     </div>
                     <h3 className="text-white font-serif text-6xl mb-8 italic leading-none">{FLOORS[activeFloor].name}</h3>
                     <p className="text-slate-400 text-xl font-light leading-relaxed border-l-2 border-white/5 pl-8 italic">{FLOORS[activeFloor].description}</p>
                  </div>

                  {/* Technical Performance Matrix */}
                  <div className="grid grid-cols-2 gap-5 mb-16">
                     {[
                        { label: "Floor Area", val: FLOORS[activeFloor].metrics.area, icon: Ruler },
                        { label: "Efficiency Ratio", val: FLOORS[activeFloor].metrics.efficiency, icon: Gauge },
                        { label: "Level Datum", val: FLOORS[activeFloor].metrics.height, icon: Layers },
                        { label: "Layout Schema", val: FLOORS[activeFloor].metrics.configuration, icon: Grid }
                     ].map((m, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-2xl group/m hover:border-gold-500/40 transition-all shadow-xl">
                           <div className="flex items-center gap-3 text-slate-600 mb-3">
                              <m.icon size={14} className="group-hover/m:text-gold-500 transition-colors" />
                              <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                           </div>
                           <div className="text-white text-base font-black truncate">{m.val}</div>
                        </div>
                     ))}
                  </div>

                  {/* Amenity Matrix */}
                  <div className="space-y-8">
                     <h4 className="text-white text-[11px] font-black uppercase tracking-widest border-b border-white/10 pb-5 mb-8 flex items-center justify-between">
                        Amenity Inventory <span className="text-gold-500 opacity-40 font-mono text-[9px]">ID: SGT_{FLOORS[activeFloor].id.toUpperCase()}</span>
                     </h4>
                     <div className="grid grid-cols-1 gap-5">
                        {FLOORS[activeFloor].amenities.map((amenity, i) => (
                           <div key={i} className="flex items-center gap-5 group/item">
                              <div className="w-2 h-2 rounded-full bg-gold-500 group-hover/item:scale-150 transition-transform shadow-[0_0_15px_#D4AF37]"></div>
                              <span className="text-slate-300 text-base font-medium group-hover/item:text-white transition-colors">{amenity}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="mt-20 pt-12 border-t border-white/10 relative z-10">
                  <div className="flex justify-between items-center bg-onyx-950/60 p-8 rounded-[2.5rem] border border-white/5 group hover:border-gold-500/30 transition-all shadow-3xl">
                     <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl group-hover:scale-110 transition-transform">
                           <Users size={32} />
                        </div>
                        <div>
                           <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2">Operational Capacity</div>
                           <div className="text-white font-serif text-4xl font-black">{FLOORS[activeFloor].capacity}</div>
                        </div>
                     </div>
                     <button className="w-14 h-14 rounded-full border border-white/10 text-slate-500 group-hover:text-gold-500 group-hover:border-gold-500 transition-all flex items-center justify-center active:scale-90">
                        <ArrowRight size={24} />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanExplorer;