import React from 'react';
import { ArrowLeft, Cpu, Shield, Settings, Truck, Power, Layers, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", label: "Central MEP Plant" },
      { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80", label: "Smart BMS Control" },
      { src: "https://images.unsplash.com/photo-1621905252507-b35492ccba0b?auto=format&fit=crop&q=80", label: "Automated Laundry" },
      { src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80", label: "Banquet Kitchen" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 07</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Invisible <span className="text-gold-500 italic">Engineering.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            The operational backbone is designed to handle "Peak Load" scenarios (3,000+ simultaneous guests) without compromising the 7-star front-of-house experience.
        </p>
      </div>

      <div className="w-full h-[60vh] grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mb-24">
         {images.map((img, i) => (
             <div key={i} className="relative group overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-50 group-hover:brightness-100 grayscale group-hover:grayscale-0" />
                 <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                    {img.label}
                 </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
             <div className="lg:col-span-2">
                 <h3 className="text-white font-serif text-3xl mb-8">Segregation of Flow</h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-12">
                     In standard hotels, service trolleys often cross paths with guests. At Sirshukk, we have engineered three distinct vertical circulation cores:
                 </p>
                 
                 <div className="space-y-6 mb-16">
                     <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-6 items-start">
                         <div className="bg-onyx-950 p-3 rounded-lg text-gold-500"><Users size={24} /></div>
                         <div>
                             <h4 className="text-white font-bold text-lg">Guest Core</h4>
                             <p className="text-slate-400 text-sm">6 High-speed glass elevators offering panoramic views, strictly for residents.</p>
                         </div>
                     </div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-6 items-start">
                         <div className="bg-onyx-950 p-3 rounded-lg text-slate-500"><Truck size={24} /></div>
                         <div>
                             <h4 className="text-white font-bold text-lg">Service Core</h4>
                             <p className="text-slate-400 text-sm">4 Heavy-duty freight elevators connected to the basement loading dock, invisible to guests.</p>
                         </div>
                     </div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-6 items-start">
                         <div className="bg-onyx-950 p-3 rounded-lg text-emerald-500"><Layers size={24} /></div>
                         <div>
                             <h4 className="text-white font-bold text-lg">Banquet Core</h4>
                             <p className="text-slate-400 text-sm">Dedicated escalators and lifts transporting 2,000+ wedding guests directly to the ballrooms without crowding the lobby.</p>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="bg-onyx-900 border border-white/10 p-8 rounded-3xl h-fit">
                 <h4 className="text-gold-500 text-xs font-black uppercase tracking-widest mb-6">Technical Specs</h4>
                 <div className="space-y-4">
                     {[
                         { l: "Backup Power", v: "100% DG Set (2000 kVA)" },
                         { l: "Water Treatment", v: "Advanced STP + WTP" },
                         { l: "HVAC", v: "Magnetic Bearing Chillers" },
                         { l: "Fire Safety", v: "Fully Sprinklered (NFPA)" },
                         { l: "BMS", v: "Honeywell / Siemens" }
                     ].map((item, i) => (
                         <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                             <span className="text-slate-500 text-xs uppercase font-bold">{item.l}</span>
                             <span className="text-white font-mono text-xs">{item.v}</span>
                         </div>
                     ))}
                 </div>
                 <div className="mt-8 pt-6 border-t border-white/10 text-center">
                     <p className="text-slate-400 text-[10px] leading-relaxed">
                         "Back-of-house accounts for 35% of built-up area, ensuring operational resilience."
                     </p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default OperationsPage;