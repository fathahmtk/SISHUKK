import React, { useState, useEffect } from 'react';
import { Layers, Maximize2, Map, ShieldCheck, Zap, UserCheck, Coffee, Wind, Eye, Ruler, Users, Grid, ArrowRight, Gauge, Activity, Database, Target, Info, IndianRupee, TrendingUp, ChevronLeft, ChevronRight, X, Scan, Box } from 'lucide-react';

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
    metrics: { area: '8,500 Sq. Ft.', efficiency: '94%', height: '75.0m Terminal', configuration: '360° Circular Core' },
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
    metrics: { area: '4,200 Sq. Ft.', efficiency: '88%', height: '55.0m Span', configuration: 'Steel Truss Link' },
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
    metrics: { area: '12,500 Sq. Ft.', efficiency: '86%', height: '3.4m Clear', configuration: 'Cylindrical Core Flow' },
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    hotspots: [
        { x: 40, y: 30, label: 'Vertical Core', detail: 'Group of 6 high-velocity Mitsubishi lifts with smart-dispatch AI logic.' },
        { x: 75, y: 50, label: 'Suite Bay', detail: 'Dual-aspect room configuration optimized for Guruvayur temple line-of-sight.' }
    ]
  }
];

const FloorPlanExplorer: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [isSchematic, setIsSchematic] = useState(false);

  useEffect(() => {
    setSelectedHotspot(null);
  }, [activeFloor]);

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
          
          <div className="flex items-center gap-8">
             <button 
                onClick={() => setIsSchematic(!isSchematic)}
                className={`flex items-center gap-4 px-10 py-5 rounded-full border text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-xl ${isSchematic ? 'bg-gold-500 text-onyx-950 border-gold-500' : 'bg-slate-950 text-white border-slate-950'}`}
             >
                {isSchematic ? <Box size={16} /> : <Scan size={16} className="animate-pulse" />}
                {isSchematic ? 'Render View' : 'Schematic Mode'}
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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
                      : 'bg-transparent text-slate-400 border-transparent hover:border-slate-200'
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
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-3xl min-h-[850px]">
            <div className="md:col-span-7 relative h-[500px] md:h-full group overflow-hidden border-r border-slate-100">
              <img 
                src={FLOORS[activeFloor].image} 
                className={`w-full h-full object-cover transition-all duration-1000 ${isSchematic ? 'brightness-[0.1] saturate-0 scale-110 blur-sm' : 'brightness-105 saturate-100'}`}
                alt={FLOORS[activeFloor].name} 
              />
              
              {/* Schematic Overlay Layer */}
              <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${isSchematic ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="w-full h-full flex items-center justify-center p-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-gold-500 opacity-60">
                       <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                       <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                       <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
                       <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" />
                       <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1,1" />
                    </svg>
                 </div>
              </div>

              <div className="absolute inset-0 z-30 p-12">
                 <div className="w-full h-full relative" key={activeFloor}>
                    {FLOORS[activeFloor].hotspots?.map((hs, i) => (
                      <div 
                        key={i} 
                        className="absolute pointer-events-auto" 
                        style={{ top: `${hs.y}%`, left: `${hs.x}%`, transform: 'translate(-50%, -50%)' }}
                        onMouseEnter={() => setSelectedHotspot(i)}
                        onMouseLeave={() => setSelectedHotspot(null)}
                      >
                         <div className={`w-8 h-8 rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center ${selectedHotspot === i ? 'bg-gold-500 border-white shadow-[0_0_25px_#D4AF37] scale-125' : 'bg-white/80 backdrop-blur-md border-gold-500 shadow-xl'}`}>
                            <div className="w-2.5 h-2.5 bg-gold-500 rounded-full"></div>
                         </div>

                         <div className={`absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-64 transition-all duration-500 pointer-events-none ${selectedHotspot === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/20 p-6 rounded-[2rem] shadow-2xl">
                               <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest block mb-2">{hs.label}</span>
                               <p className="text-slate-300 text-xs leading-relaxed italic">"{hs.detail}"</p>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            <div className="md:col-span-5 p-12 lg:p-16 flex flex-col justify-between bg-[#FDFBF7] relative">
               <div className="relative z-10">
                  <div className="mb-12">
                     <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-200 bg-white rounded-full text-gold-600 text-[10px] font-black uppercase tracking-widest mb-8">
                        <Activity size={14} /> {FLOORS[activeFloor].type}
                     </div>
                     <h3 className="text-slate-950 font-serif text-5xl mb-8 italic leading-none">{FLOORS[activeFloor].name}</h3>
                     <p className="text-slate-500 text-lg font-light leading-relaxed border-l-2 border-gold-400 pl-8">{FLOORS[activeFloor].description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-16">
                     {[
                        { label: "Gross Area", val: FLOORS[activeFloor].metrics.area, icon: Ruler },
                        { label: "Efficiency", val: FLOORS[activeFloor].metrics.efficiency, icon: Gauge },
                     ].map((m, i) => (
                        <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                           <div className="flex items-center gap-3 text-slate-400 mb-2">
                              <m.icon size={14} />
                              <span className="text-[9px] font-black uppercase tracking-widest">{m.label}</span>
                           </div>
                           <div className="text-slate-950 text-base font-black truncate">{m.val}</div>
                        </div>
                     ))}
                  </div>

                  <div className="space-y-4">
                     <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 pb-4 mb-4">Amenity Inventory</h4>
                     {FLOORS[activeFloor].amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                           <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
                           <span className="text-slate-600 text-sm font-bold uppercase tracking-wide group-hover/item:text-slate-950 transition-colors">{amenity}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="mt-20 pt-12 border-t border-slate-100 flex justify-between items-center bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-2xl">
                        <Users size={28} />
                     </div>
                     <div>
                        <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Operational Capacity</div>
                        <div className="text-slate-950 font-serif text-3xl font-black italic">{FLOORS[activeFloor].capacity}</div>
                     </div>
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