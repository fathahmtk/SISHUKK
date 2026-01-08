import React from 'react';
import { ArrowLeft, Flower2, HeartPulse, Droplets, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", label: "Vedic Spa Reception" },
      { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80", label: "Treatment Suite" },
      { src: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80", label: "Infinity Pool Deck" },
      { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80", label: "Yoga Pavilion" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 06</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Science of <span className="text-gold-500 italic">Rejuvenation.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Positioning wellness not as an amenity, but as a primary driver for extended stays and medical tourism.
        </p>
      </div>

      <div className="w-full h-[60vh] grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mb-24">
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
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                 <h3 className="text-white font-serif text-3xl mb-8">The Ayurveda Advantage</h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
                     Kerala is the global capital of Ayurveda. Our wellness centre goes beyond cosmetic spa treatments to offer authentic, physician-led curative packages (Panchakarma).
                 </p>
                 <div className="space-y-6">
                     <div className="flex gap-6 items-start">
                         <div className="w-12 h-12 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500">
                             <Flower2 size={24} />
                         </div>
                         <div>
                             <h4 className="text-white font-bold text-lg mb-2">High Yield Duration</h4>
                             <p className="text-slate-400 text-sm">Wellness guests stay an average of 7-14 days, significantly higher than the typical 2-day pilgrim stay, stabilizing occupancy.</p>
                         </div>
                     </div>
                     <div className="flex gap-6 items-start">
                         <div className="w-12 h-12 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500">
                             <HeartPulse size={24} />
                         </div>
                         <div>
                             <h4 className="text-white font-bold text-lg mb-2">Membership Model</h4>
                             <p className="text-slate-400 text-sm">Annual wellness memberships targeted at the local HNW community create a recurring revenue baseline.</p>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="space-y-6">
                 <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                         <Waves size={120} className="text-blue-500" />
                     </div>
                     <h3 className="text-white font-serif text-2xl mb-4">Sky Infinity Pool</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-6">
                         Located on the podium level, the infinity pool offers views of the temple gopuram. It features temperature control and a dedicated kids' zone, essential for family-oriented leisure travelers.
                     </p>
                     <div className="flex gap-4">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">Ozone Treated</span>
                        <span className="px-4 py-2 bg-white/5 text-slate-300 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Temperature Controlled</span>
                     </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                     <div className="flex items-center gap-4 mb-4">
                         <Droplets className="text-gold-500" size={24} />
                         <h3 className="text-white font-serif text-2xl">Wet Areas</h3>
                     </div>
                     <p className="text-slate-400 text-sm leading-relaxed">
                         Comprehensive hydrotherapy circuits including steam, sauna, and jacuzzi, integrated into both male and female changing zones for pre-event grooming.
                     </p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default WellnessPage;