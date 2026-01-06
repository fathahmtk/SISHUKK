import React from 'react';
import { ArrowRight } from 'lucide-react';

const Dining: React.FC = () => {
  return (
    <section id="dining" className="bg-black text-white relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Hero Dining */}
      <div className="relative h-[80vh] min-h-[600px] w-full group overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg')] bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
         </div>
         
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 relative z-20">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-10 md:p-14 max-w-4xl rounded-sm">
                <span className="text-gold-400 tracking-[0.3em] uppercase text-xs font-bold mb-6 block flex justify-center items-center gap-3">
                   <span className="w-8 h-px bg-gold-400"></span> Signature Experience <span className="w-8 h-px bg-gold-400"></span>
                </span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-none">
                    The Sky <span className="italic font-light text-gold-200">Revolving</span>
                </h2>
                <p className="text-lg font-light text-slate-200 mb-10 max-w-xl mx-auto leading-relaxed border-t border-b border-white/10 py-6">
                    Kerala's first dual-tower revolving restaurants. Experience 360-degree panoramic views of the temple city while indulging in world-class gastronomy.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-gold-500 text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(197,160,40,0.3)] rounded">
                        Book A Table
                    </button>
                    <button className="bg-transparent border border-white/30 text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 transition-colors rounded backdrop-blur-sm">
                        View Menu
                    </button>
                </div>
            </div>
         </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-32 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8 group">
                <div className="overflow-hidden rounded-2xl border border-white/10 relative shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" alt="Lounge" className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1s]" />
                     <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-gold-400 text-xs uppercase tracking-widest font-bold">Level 15</span>
                     </div>
                </div>
                <div>
                    <h3 className="font-serif text-4xl mb-4 text-white group-hover:text-gold-400 transition-colors">The Sky Bridge Lounge</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-lg pl-6 border-l border-gold-500/50">
                        Suspended between the two towers, this exclusive lounge offers artisanal cocktails and high tea in a gravity-defying setting.
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors pl-6">
                        Explore Lounge <ArrowRight size={14} />
                    </button>
                </div>
            </div>
            
            <div className="space-y-8 md:pt-32 group">
                <div className="overflow-hidden rounded-2xl border border-white/10 relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80" alt="Fine Dining" className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1s]" />
                     <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-gold-400 text-xs uppercase tracking-widest font-bold">Level 20</span>
                     </div>
                </div>
                <div>
                    <h3 className="font-serif text-4xl mb-4 text-white group-hover:text-gold-400 transition-colors">Saffron & Spice</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-lg pl-6 border-l border-gold-500/50">
                        An all-day dining sanctuary celebrating the rich culinary heritage of the Spice Route with a contemporary twist.
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors pl-6">
                        Explore Menu <ArrowRight size={14} />
                    </button>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Dining;