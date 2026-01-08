import React from 'react';
import { ArrowLeft, Users, Music, Layers, Zap, Truck, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", label: "Grand Ballroom" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", label: "Pre-Function Foyer" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", label: "Ceremonial Setup" },
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80", label: "Bridal Suite" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 04</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Monumental <span className="text-gold-500 italic">Volumes.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            The 15,000 sq ft pillar-less ballroom is the structural heart of the asset, engineered to capture the high-value Indian wedding market.
        </p>
      </div>

      <div className="w-full h-[50vh] md:h-[60vh] grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mb-24">
         {images.map((img, i) => (
             <div key={i} className="relative group overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-75 group-hover:brightness-100" />
                 <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                    {img.label}
                 </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
             <div>
                 <h3 className="text-white font-serif text-3xl mb-8">Capacity Engineering</h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
                     We don't just host events; we engineer flow. The ballroom features 8-meter clear heights, allowing for elaborate set designs and aerial cinematography—mandatory requirements for UHNWI weddings.
                 </p>
                 <ul className="space-y-4">
                     <li className="flex justify-between border-b border-white/5 pb-3">
                         <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Theater Style</span>
                         <span className="text-white font-mono">2,500 Pax</span>
                     </li>
                     <li className="flex justify-between border-b border-white/5 pb-3">
                         <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Round Table (Banquet)</span>
                         <span className="text-white font-mono">1,200 Pax</span>
                     </li>
                     <li className="flex justify-between border-b border-white/5 pb-3">
                         <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Floating Crowd</span>
                         <span className="text-white font-mono">4,000+ Pax</span>
                     </li>
                 </ul>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <Truck className="text-gold-500 mb-4" size={24} />
                     <h4 className="text-white font-bold text-lg mb-2">Service Logistics</h4>
                     <p className="text-slate-400 text-sm">Dedicated freight elevators and service corridors ensure that food & decor movement is 100% invisible to guests.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <Zap className="text-gold-500 mb-4" size={24} />
                     <h4 className="text-white font-bold text-lg mb-2">Power Redundancy</h4>
                     <p className="text-slate-400 text-sm">Dual-feed power lines plus 100% DG backup capability to handle concert-grade lighting loads.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <Music className="text-gold-500 mb-4" size={24} />
                     <h4 className="text-white font-bold text-lg mb-2">Digital Acoustics</h4>
                     <p className="text-slate-400 text-sm">Acoustic paneling integrated into the interior design to ensure speech intelligibility during ceremonies.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <Camera className="text-gold-500 mb-4" size={24} />
                     <h4 className="text-white font-bold text-lg mb-2">Broadcast Ready</h4>
                     <p className="text-slate-400 text-sm">Pre-wired structural points for camera jibs and live-streaming setups.</p>
                 </div>
             </div>
         </div>

         <div className="bg-onyx-900 border border-white/10 rounded-[3rem] p-12 text-center">
             <Layers size={48} className="text-gold-500 mx-auto mb-6" />
             <h3 className="text-white font-serif text-4xl mb-4">The "Sadya" Kitchen</h3>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                 A specialized, separate kitchen wing dedicated solely to traditional Kerala vegetarian feasts (Sadya), ensuring ritual purity compliance for orthodox families—a critical USP in Guruvayur.
             </p>
             <div className="flex justify-center gap-4">
                 <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">10,000 Meals / Day Capacity</span>
                 <span className="px-4 py-2 bg-white/5 text-slate-300 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">ISO 22000 Certified Layout</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default EventsPage;