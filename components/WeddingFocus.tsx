import React from 'react';
import { Heart, Star, Music, Camera, Layers, ArrowRight, Gem, ShieldCheck, Target } from 'lucide-react';

interface WeddingFocusProps {
  onRSVPClick?: () => void;
}

const WeddingFocus: React.FC<WeddingFocusProps> = ({ onRSVPClick }) => {
  return (
    <section id="weddings" className="relative py-12 bg-white h-full flex flex-col justify-center border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-10">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-4 px-4 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                      <Heart size={12} className="text-gold-500" />
                      <span className="text-gold-600 uppercase text-[9px] font-black tracking-[0.5em]">Ritual Event Core</span>
                   </div>
                   
                   <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter italic">
                       Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span>
                   </h2>
                   
                   <p className="text-xl text-slate-500 font-light leading-tight max-w-md border-l-2 border-gold-400 pl-8 italic">
                       15,000 sq ft pillar-less ballroom. Structural engine for high-yield ritual markets with 3,000+ pax capacity.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Imperial Hall", icon: Star },
                     { label: "8m Heights", icon: Layers },
                     { label: "Sonic Integrity", icon: Music },
                     { label: "Vista Logic", icon: Camera },
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 rounded-[2rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all shadow-sm">
                         <div className="w-10 h-10 bg-white rounded-xl text-gold-600 flex items-center justify-center border border-slate-100">
                            <item.icon size={18} />
                         </div>
                         <h4 className="text-slate-950 font-serif text-xl italic leading-none">{item.label}</h4>
                      </div>
                   ))}
                </div>

                <div className="pt-6">
                   <button onClick={onRSVPClick} className="group flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-gold-500 shadow-2xl active:scale-95">
                      Request Event Dossier <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6 h-[60vh]">
                 <div className="space-y-6 pt-12">
                    <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl aspect-[3/4] bg-white group">
                       <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s]" alt="Wedding" />
                    </div>
                    <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] text-center shadow-lg">
                       <h3 className="text-gold-600 font-serif text-6xl font-black italic leading-none">15k</h3>
                       <p className="text-slate-400 text-[8px] font-black uppercase tracking-[0.4em] mt-2">Sq. Ft. Core</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="p-8 bg-slate-950 rounded-[2.5rem] text-center shadow-xl group hover:bg-gold-500 transition-all duration-500">
                       <h3 className="text-white font-serif text-6xl font-black italic leading-none group-hover:scale-110 transition-transform">3k</h3>
                       <p className="text-slate-400 group-hover:text-onyx-950 text-[8px] font-black uppercase tracking-[0.4em] mt-2">Max Capacity</p>
                    </div>
                    <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl aspect-[3/5] bg-white group">
                       <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s]" alt="Ceremony" />
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingFocus;