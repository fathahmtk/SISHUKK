
import React from 'react';
import { ArrowRight, Gift, Percent, Heart, Sparkles } from 'lucide-react';

interface OffersProps {
  onActionClick?: (type: 'room' | 'wedding') => void;
}

const Offers: React.FC<OffersProps> = ({ onActionClick }) => {
  return (
    <section id="offers" className="py-24 bg-onyx-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/5 via-onyx-950 to-onyx-950 opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <span className="text-gold-400 tracking-[0.6em] uppercase text-[10px] font-black flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gold-500/50"></span>
              Privileges
              <span className="w-8 h-px bg-gold-500/50"></span>
           </span>
           <h2 className="font-serif text-5xl md:text-7xl text-white mt-6 leading-tight tracking-tighter">Exclusive <br/><span className="gold-gradient-text italic">Incentives.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Offer 1 - Gold Theme */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.07] transition-all duration-700 hover:-translate-y-2 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shadow-3xl relative z-10 border border-white/20">
                            <span className="font-serif text-3xl text-onyx-950 font-black">20%</span>
                        </div>
                    </div>
                    
                    <div className="text-center lg:text-left flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                             <Sparkles size={14} className="text-gold-400 animate-pulse" />
                             <span className="text-[10px] uppercase tracking-widest text-gold-400 font-black">Limited Allocation</span>
                        </div>
                        <h3 className="text-white font-serif text-4xl mb-4 group-hover:text-gold-300 transition-colors">Early Bird Equity</h3>
                        <p className="text-slate-400 text-base mb-10 leading-relaxed font-light">
                            Secure your sanctuary 30 days in advance. Includes complimentary artisan breakfast and high-altitude tea service.
                        </p>
                        <button 
                          onClick={() => onActionClick?.('room')}
                          className="group/btn inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-gold-500 pb-3 hover:text-gold-400 transition-all"
                        >
                            Claim Privilege <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Offer 2 - Rose Theme */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.07] transition-all duration-700 hover:-translate-y-2 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
                    <div className="relative">
                         <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-300 to-rose-600 flex items-center justify-center shadow-3xl relative z-10 border border-white/20">
                            <Gift size={36} className="text-white" />
                        </div>
                    </div>

                     <div className="text-center lg:text-left flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                             <Heart size={14} className="text-rose-400" />
                             <span className="text-[10px] uppercase tracking-widest text-rose-400 font-black">Legacy Celebrations</span>
                        </div>
                        <h3 className="text-white font-serif text-4xl mb-4 group-hover:text-rose-300 transition-colors">Honeymoon Bliss</h3>
                        <p className="text-slate-400 text-base mb-10 leading-relaxed font-light">
                            Signature candlelight dinner on the Meridian Peak, dual spa therapy, and private airport transfers.
                        </p>
                        <button 
                          onClick={() => onActionClick?.('wedding')}
                          className="group/btn inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-rose-500 pb-3 hover:text-rose-300 transition-all"
                        >
                            View Dossier <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
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
