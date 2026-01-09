import React, { useState, useEffect } from 'react';
import { Layers, Maximize2, Map, ShieldCheck, Zap, UserCheck, Coffee, Wind, Eye, Ruler, Users, Grid, ArrowRight, Gauge, Activity, Database, Target, Info, IndianRupee, TrendingUp, ChevronLeft, ChevronRight, X } from 'lucide-react';

const FLOORS = [
  {
    id: 'crown',
    level: 'Lvl 20',
    name: 'The Revolving Crown',
    type: 'Gastronomy Hub',
    description: 'A high-precision engineering marvel featuring two independent revolving platforms. Designed for vibration-free 360-degree destination dining.',
    amenities: ['German Drive Train Tech', 'Panoramic DGU Glass', 'Independent Service Core', 'Ambient Scenography'],
    capacity: '120 Pax per Tower',
    revenue: '₹28.5 Cr / Yr',
    yield: 'High-Alpha F&B',
    metrics: {
      area: '8,500 Sq. Ft.',
      efficiency: '94%',
      height: '75.0m Terminal',
      configuration: '360° Circular Core'
    },
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    hotspots: [
        { x: 50, y: 50, label: 'Kinetic Axis', detail: 'Primary 10-Ton silent drive train core ensuring jitter-free 360° rotation cycles.' },
        { x: 80, y: 30, label: 'Vista Glazing', detail: 'Triple-Glazed argon-filled DGU barriers offering -45dB acoustic isolation.' },
        { x: 20, y: 70, label: 'Service Path', detail: 'Vertically segregated logistics core for BOH staff, bypassing guest zones.' }
    ]
  },
  {
    id: 'bridge',
    level: 'Lvl 15',
    name: 'The Meridian Arch',
    type: 'Executive Skybridge',
    description: 'A structural nexus link connecting Towers A and B. Houses the Executive Club lounge and a glass-bottomed spiritual observation deck.',
    amenities: ['Private Concierge', 'Executive Library', 'Observation Deck', 'Secure Digital Vault'],
    capacity: '45 Pax Peak',
    revenue: '₹12.0 Cr / Yr',
    yield: 'Membership Yield',
    metrics: {
      area: '4,200 Sq. Ft.',
      efficiency: '88%',
      height: '55.0m Span',
      configuration: 'Steel Truss Link'
    },
    image: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80',
    hotspots: [
        { x: 50, y: 40, label: 'Steel Truss', detail: 'High-tensile Grade 500 steel truss system spanning 24 meters between towers.' },
        { x: 30, y: 65, label: 'Glass Deck', detail: 'Structural glass flooring node offering a 55m direct vertical datum view.' }
    ]
  },
  {
    id: 'guest',
    level: 'Lvl 04-14',
    name: 'Inventory Plate',
    type: 'Luxury Residencies',
    description: 'Typical floor plate featuring a mix of Metropolitan Deluxe and Sanctuary units. Optimized for maximum thermal and acoustic comfort.',
    amenities: ['IoT Suite Control', 'Acoustic Barrier Glazing', '24/7 Butler Pantry', 'Wellness Air Systems'],
    capacity: '42 Keys per Floor',
    revenue: '₹52.0 Cr / Yr',
    yield: 'Stabilized ADR',
    metrics: {
      area: '12,500 Sq. Ft.',
      efficiency: '86%',
      height: '3.4m Clear',
      configuration: 'Cylindrical Core Flow'
    },
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    hotspots: [
        { x: 40, y: 30, label: 'Vertical Core', detail: 'Group of 6 high-velocity Mitsubishi lifts with smart-dispatch AI logic.' },
        { x: 75, y: 50, label: 'Suite Bay', detail: 'Dual-aspect room configuration optimized for Guruvayur temple line-of-sight.' },
        { x: 50, y: 85, label: 'Service Hub', detail: 'Zoned BOH pantry and laundry chutes for floor-specific vertical logistics.' }
    ]
  },
  {
    id: 'ballroom',
    level: 'Lvl 01-03',
    name: 'Imperial Ballroom',
    type: 'Event Epicenter',
    description: 'Monumental 15,000 sq ft pillar-less volume. Triple-height ceiling clearance for grand ceremonial scale and cinematic production.',
    amenities: ['Digital Acoustics', 'Mega-Kitchen Core', 'VIP Ceremonial Entry', 'Bespoke Lighting Rig'],
    capacity: '3,000 Pax Capacity',
    revenue: '₹45.0 Cr / Yr',
    yield: 'Event Arbitrage',
    metrics: {
      area: '22,000 Sq. Ft.',
      efficiency: '96%',
      height: '8.0m Clearance',
      configuration: 'Pillar-less Void'
    },
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    hotspots: [
        { x: 50, y: 60, label: 'Performance Zone', detail: 'Hydraulic proscenium stage with integrated 4K LED broadcast infrastructure.' },
        { x: 15, y: 80, label: 'Grand Foyer', detail: 'Double-height volume with segregated arrival logic for VVIP guests.' },
        { x: 85, y: 20, label: 'Banquet Kitchen', detail: '10,000 meals/day capacity with dedicated service corridors and cold-chain.' }
    ]
  },
];

const FloorPlanExplorer: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  // Reset hotspot selection when switching floors
  useEffect(() => {
    setSelectedHotspot(null);
  }, [activeFloor]);

  const nextFloor = () => setActiveFloor((prev) => (prev + 1) % FLOORS.length);
  const prevFloor = () => setActiveFloor((prev) => (prev - 1 + FLOORS.length) % FLOORS.length);

  return (
    <div className="w-full py-40 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-200 bg-gold-50/50 text-gold-600 text-[10px] font-black uppercase tracking-[0.6em] mb-8 rounded-full">
              <Database size={14} /> Structural Blueprints v2.5
            </div>
            <h2 className="text-slate-950 font-serif text-5xl md:text-8xl leading-[0.8] italic">
              Facility <br/><span className="gold-gradient-text italic font-black">Stacking.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-slate-50 border border-slate-200 px-10 py-6 rounded-[2.5rem] shadow-sm">
             <div className="text-right">
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Audit Status</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                   <ShieldCheck size={16} className="text-gold-500" /> BIM Level 300
                </span>
             </div>
             <div className="w-px h-12 bg-slate-200"></div>
             <div className="text-right">
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Asset ID</span>
                <span className="text-gold-600 font-mono text-sm font-black">SGT_242_ALPHA</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Vertical Navigation Stack */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 shadow-sm">
              <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-12 border-b border-slate-200 pb-4">Zone Select</h3>
              <div className="space-y-5">
                {FLOORS.map((floor, i) => (
                  <button
                    key={floor.id}
                    onClick={() => setActiveFloor(i)}
                    className={`w-full group relative flex items-center justify-between p-8 rounded-[2rem] border transition-all duration-500 ${
                      activeFloor === i 
                      ? 'bg-white text-slate-950 border-gold-500 shadow-2xl scale-105 z-10' 
                      : 'bg-transparent text-slate-400 border-transparent hover:border-slate-200 hover:text-slate-950'
                    }`}
                  >
                    <div className="text-left">
                      <div className={`text-[9px] font-black uppercase tracking-widest mb-2 ${activeFloor === i ? 'text-gold-600' : 'text-slate-300'}`}>
                        {floor.level}
                      </div>
                      <div className="text-sm font-black uppercase tracking-wider truncate max-w-[160px]">{floor.name}</div>
                    </div>
                    <ArrowRight size={18} className={`transition-all duration-500 text-gold-500 ${activeFloor === i ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:border-gold-300 transition-all">
               <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-slate-50 rounded-2xl text-gold-600 border border-slate-100 shadow-sm">
                    <Grid size={22} />
                  </div>
                  <h4 className="text-slate-950 font-serif text-xl italic leading-none">Global <br/>Matrix</h4>
               </div>
               <p className="text-slate-500 text-10px font-black uppercase tracking-widest leading-relaxed">
                  Analyze vertical logistics and revenue-generating area efficiency across the twin cores.
               </p>
            </div>
          </div>

          {/* Interactive Technical Terminal */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-3xl min-h-[850px]">
            
            {/* Visual Display Core */}
            <div className="md:col-span-7 relative h-[500px] md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-slate-100" onClick={() => setSelectedHotspot(null)}>
              <img 
                src={FLOORS[activeFloor].image} 
                className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]"
                alt={FLOORS[activeFloor].name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none opacity-80"></div>
              
              {/* Technical HUD Overlay */}
              <div className="absolute inset-0 z-10 p-12">
                 <div className="w-full h-full border border-slate-200/50 rounded-[3rem] relative backdrop-blur-[1px] animate-fade-in" key={activeFloor}>
                    
                    {/* Architectural Grid Lines */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                       <svg className="w-full h-full" viewBox="0 0 100 100">
                          <rect x="5" y="5" width="90" height="90" fill="none" stroke="black" strokeWidth="0.1" strokeDasharray="2,2" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
                          <line x1="50" y1="0" x2="50" y2="100" stroke="black" strokeWidth="0.05" />
                          <line x1="0" y1="50" x2="100" y2="50" stroke="black" strokeWidth="0.05" />
                       </svg>
                    </div>

                    {/* Dynamic Hotspots */}
                    {FLOORS[activeFloor].hotspots?.map((hs, i) => (
                      <div 
                        key={i} 
                        className="absolute" 
                        style={{ top: `${hs.y}%`, left: `${hs.x}%`, transform: 'translate(-50%, -50%)' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHotspot(selectedHotspot === i ? null : i);
                        }}
                      >
                         <div className={`w-8 h-8 rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-125 ${selectedHotspot === i ? 'bg-gold-500 border-white shadow-[0_0_25px_#D4AF37] scale-125' : 'bg-white/80 backdrop-blur-md border-gold-500 shadow-xl animate-pulse'}`}>
                            {selectedHotspot === i ? <X size={14} className="text-white" /> : <div className="w-2.5 h-2.5 bg-gold-500 rounded-full"></div>}
                         </div>

                         {/* Click-to-Reveal Tooltip */}
                         <div className={`absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-64 transition-all duration-500 pointer-events-none z-50 ${selectedHotspot === i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                            <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/20 p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
                               <div className="absolute top-0 right-0 p-4 opacity-10">
                                  <Info size={40} className="text-gold-500" />
                               </div>
                               <div className="relative z-10">
                                  <div className="flex items-center gap-3 mb-4">
                                     <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                                        <Info size={16} />
                                     </div>
                                     <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest">{hs.label}</span>
                                  </div>
                                  <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-gold-500/50 pl-4">
                                     "{hs.detail}"
                                  </p>
                               </div>
                               {/* Tooltip Tail */}
                               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950/95 border-r border-b border-white/20 rotate-45"></div>
                            </div>
                         </div>
                      </div>
                    ))}

                    <div className="absolute bottom-12 left-12 flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 shadow-xl hover:bg-gold-500 hover:text-white transition-all cursor-pointer group/scan">
                          <Maximize2 size={24} className="group-hover/scan:scale-110 transition-transform" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Blueprint Archive</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Click nodes for structural detail</span>
                       </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                       <button 
                         onClick={(e) => { e.stopPropagation(); prevFloor(); }} 
                         className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-gold-600 hover:border-gold-500 transition-all shadow-lg active:scale-95 group/btn"
                         aria-label="Previous Floor"
                       >
                          <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                       </button>
                       <button 
                         onClick={(e) => { e.stopPropagation(); nextFloor(); }} 
                         className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-gold-600 hover:border-gold-500 transition-all shadow-lg active:scale-95 group/btn"
                         aria-label="Next Floor"
                       >
                          <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>

            {/* Technical Data Terminal */}
            <div className="md:col-span-5 p-12 lg:p-16 flex flex-col justify-between relative bg-[#FDFBF7]">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Map size={300} className="text-slate-950" />
               </div>

               <div className="relative z-10">
                  <div className="mb-12">
                     <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-200 bg-white rounded-full text-gold-600 text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm">
                        <Activity size={14} /> {FLOORS[activeFloor].type}
                     </div>
                     <h3 className="text-slate-950 font-serif text-5xl mb-8 italic leading-none">{FLOORS[activeFloor].name}</h3>
                     <p className="text-slate-500 text-lg font-light leading-relaxed border-l-2 border-gold-400 pl-8">{FLOORS[activeFloor].description}</p>
                  </div>

                  {/* Financial Projection Highlight */}
                  <div className="mb-12 p-8 bg-white border border-gold-200 rounded-[2.5rem] shadow-lg flex items-center gap-6 relative overflow-hidden">
                     <div className="absolute right-0 top-0 p-6 opacity-5 pointer-events-none">
                        <TrendingUp size={100} className="text-gold-500" />
                     </div>
                     <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl shrink-0">
                        <IndianRupee size={24} />
                     </div>
                     <div>
                        <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Projected Annual Yield</div>
                        <div className="flex items-baseline gap-3">
                           <span className="text-slate-950 font-serif text-3xl font-black italic">{FLOORS[activeFloor].revenue}</span>
                           <span className="text-[9px] font-bold text-gold-600 uppercase tracking-wider bg-gold-50 px-2 py-1 rounded-md">{FLOORS[activeFloor].yield}</span>
                        </div>
                     </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-16">
                     {[
                        { label: "Gross Area", val: FLOORS[activeFloor].metrics.area, icon: Ruler },
                        { label: "Efficiency", val: FLOORS[activeFloor].metrics.efficiency, icon: Gauge },
                        { label: "Datum Pt", val: FLOORS[activeFloor].metrics.height, icon: Layers },
                        { label: "Hierarchy", val: "Trophy Asset", icon: ShieldCheck }
                     ].map((m, i) => (
                        <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl group/m hover:border-gold-500 transition-all shadow-sm">
                           <div className="flex items-center gap-3 text-slate-400 mb-2">
                              <m.icon size={14} className="group-hover/m:text-gold-500 transition-colors" />
                              <span className="text-[9px] font-black uppercase tracking-widest">{m.label}</span>
                           </div>
                           <div className="text-slate-950 text-base font-black truncate">{m.val}</div>
                        </div>
                     ))}
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 pb-4 mb-8 flex items-center justify-between">
                        Amenity Inventory <span className="text-gold-500 opacity-40 font-mono text-[9px]">v.2.5</span>
                     </h4>
                     <div className="grid grid-cols-1 gap-4">
                        {FLOORS[activeFloor].amenities.map((amenity, i) => (
                           <div key={i} className="flex items-center gap-4 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover/item:scale-150 transition-transform"></div>
                              <span className="text-slate-600 text-sm font-bold uppercase tracking-wide group-hover/item:text-slate-950 transition-colors">{amenity}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="mt-20 pt-12 border-t border-slate-100 relative z-10">
                  <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl group hover:border-gold-400 transition-all">
                     <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-2xl group-hover:bg-gold-500 transition-colors">
                           <Users size={28} />
                        </div>
                        <div>
                           <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Operational Capacity</div>
                           <div className="text-slate-950 font-serif text-3xl font-black italic">{FLOORS[activeFloor].capacity}</div>
                        </div>
                     </div>
                     <button className="w-12 h-12 rounded-full border border-slate-100 text-slate-300 group-hover:text-gold-500 group-hover:border-gold-200 transition-all flex items-center justify-center active:scale-90">
                        <ArrowRight size={20} />
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