import React from 'react';
import { Download, CalendarCheck, Heart, Star, Music, Camera } from 'lucide-react';

const WeddingFocus: React.FC = () => {
  return (
    <section id="weddings" className="relative py-32 bg-black overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-md mb-6">
                   <Heart size={12} className="text-gold-500" />
                   <span className="text-gold-400 uppercase text-[10px] font-bold tracking-[0.2em]">The Wedding Destination</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                    Your Legacy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Begins Here.</span>
                </h2>
                
                <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-xl">
                    Host your dream wedding at Shirshukk Grand Towers. From the grand pillar-less ballroom to intimate floating sky-decks, every venue is a canvas for your eternal moment.
                </p>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                   {[
                     { label: "Grand Ballroom", sub: "Capacity: 1500 Guests", icon: Star },
                     { label: "Bridal Suites", sub: "Royal Preparation Areas", icon: CrownIcon },
                     { label: "Acoustics", sub: "Concert-Grade Audio", icon: Music },
                     { label: "Photography", sub: "Scenic Photo-Ops", icon: Camera },
                   ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all group">
                         <div className="p-2 bg-black/50 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                            <item.icon size={18} />
                         </div>
                         <div>
                            <h4 className="text-white font-serif text-lg leading-none mb-1">{item.label}</h4>
                            <p className="text-xs text-slate-500 uppercase tracking-wider">{item.sub}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold-500/20">
                        <CalendarCheck size={18} /> Plan Your Wedding
                    </button>
                    <button className="bg-white/5 border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                        <Download size={18} /> Download Brochure
                    </button>
                </div>
            </div>

            {/* Visuals */}
            <div className="lg:w-1/2 relative">
                 <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4 translate-y-8">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                           <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" alt="Floral Setup" />
                        </div>
                        <div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                           <h3 className="text-gold-400 font-serif text-3xl mb-1">20+</h3>
                           <p className="text-white text-xs uppercase tracking-widest">Wedding Venues</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                           <h3 className="text-gold-400 font-serif text-3xl mb-1">500+</h3>
                           <p className="text-white text-xs uppercase tracking-widest">Weddings Hosted</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                           <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700" alt="Wedding Detail" />
                        </div>
                     </div>
                 </div>
                 
                 {/* Decorative elements */}
                 <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Helper icon
const CrownIcon = ({size, className}: {size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
)

export default WeddingFocus;