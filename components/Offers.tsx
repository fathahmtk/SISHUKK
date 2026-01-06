import React from 'react';
import { ArrowRight, Gift, Percent, Heart, Sparkles } from 'lucide-react';

const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>
      {/* Gold sheen animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gold-900/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <span className="text-gold-400 tracking-[0.3em] uppercase text-xs font-bold flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gold-500/50"></span>
              Privileges
              <span className="w-8 h-px bg-gold-500/50"></span>
           </span>
           <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">Exclusive Offers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Offer 1 - Gold Theme */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(197,160,40,0.15)]">
                {/* Decorative Icon Background */}
                <div className="absolute -top-6 -right-6 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 duration-700">
                   <Percent size={180} className="text-gold-100" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shadow-2xl relative z-10 border border-white/20">
                            <span className="font-serif text-2xl text-black font-bold">20%</span>
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                             <Sparkles size={12} className="text-gold-400" />
                             <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">Limited Time</span>
                        </div>
                        <h3 className="text-white font-serif text-3xl mb-3 group-hover:text-gold-300 transition-colors">Early Bird Special</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                            Secure your sanctuary 30 days in advance. Includes complimentary breakfast and high-tea at the Sky Lounge.
                        </p>
                        <button className="group/btn text-white text-xs uppercase tracking-widest font-bold border-b border-gold-500 pb-2 hover:text-gold-400 transition-colors flex items-center gap-2 mx-auto md:mx-0">
                            Check Rates <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Offer 2 - Rose Theme */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]">
                 <div className="absolute -top-6 -right-6 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 duration-700">
                   <Heart size={180} className="text-rose-100" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="relative">
                         <div className="absolute inset-0 bg-rose-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-300 to-rose-600 flex items-center justify-center shadow-2xl relative z-10 border border-white/20">
                            <Gift size={32} className="text-white" />
                        </div>
                    </div>

                     <div className="text-center md:text-left flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                             <Heart size={12} className="text-rose-400" />
                             <span className="text-[10px] uppercase tracking-widest text-rose-400 font-bold">Couples Exclusive</span>
                        </div>
                        <h3 className="text-white font-serif text-3xl mb-3 group-hover:text-rose-300 transition-colors">Honeymoon Bliss</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                            Romantic candlelight dinner on the rooftop, couples spa therapy, and luxury airport transfers.
                        </p>
                        <button className="group/btn text-white text-xs uppercase tracking-widest font-bold border-b border-rose-500 pb-2 hover:text-rose-300 transition-colors flex items-center gap-2 mx-auto md:mx-0">
                            View Package <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;