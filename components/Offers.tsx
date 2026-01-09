import React from 'react';
import { ArrowRight, Gift, Percent, Heart, Sparkles, ChevronRight, Target, ShieldCheck } from 'lucide-react';

interface OffersProps {
  onActionClick?: (type: 'room' | 'wedding') => void;
}

const Offers: React.FC<OffersProps> = ({ onActionClick }) => {
  return (
    <section id="offers" className="py-64 bg-[#FDFBF7] relative overflow-hidden border-y border-slate-200">
      <div className="absolute top-[10%] right-[-5%] text-slate-100 font-serif text-[45rem] font-black italic leading-none select-none pointer-events-none opacity-60">O</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-40">
           <span className="text-gold-600 tracking-[1em] uppercase text-[11px] font-black flex items-center justify-center gap-10 mb-12">
              <span className="w-16 h-px bg-gold-400/30"></span>
              Strategic Privileges
              <span className="w-16 h-px bg-gold-400/30"></span>
           </span>
           <h2 className="font-serif text-6xl md:text-9xl text-slate-950 leading-[0.75] tracking-tighter italic">Exclusive <br/><span className="gold-gradient-text not-italic font-black">Incentives.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            <div className="group relative bg-white border border-slate-200 p-16 md:p-24 rounded-[5rem] overflow-hidden hover:border-gold-400 transition-all duration-1000 shadow-2xl hover:shadow-3xl">
                <div className="absolute top-0 right-0 p-24 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                   <Target size={350} className="text-slate-950" />
                </div>
                
                <div className="flex flex-col gap-16 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-32 h-32 rounded-[2.5rem] bg-gold-500 flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-700">
                          <span className="font-serif text-5xl text-white font-black italic leading-none">20%</span>
                       </div>
                       <span className="bg-slate-50 border border-slate-200 px-6 py-2 rounded-full text-gold-600 text-[9px] font-black uppercase tracking-widest">Early Bird Equity</span>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <ShieldCheck size={18} className="text-gold-500" />
                           <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-black">Limited Institutional Allocation</span>
                        </div>
                        <h3 className="text-slate-950 font-serif text-5xl italic leading-tight">Founder <br/>Sanctuary.</h3>
                        <p className="text-slate-500 text-xl font-light leading-relaxed italic border-l-2 border-gold-400 pl-10">
                            "Secure your residency 30 days in advance. Includes priority high-altitude tea service at The Orbit and artisan ritual breakfast."
                        </p>
                        <div className="pt-10">
                           <button 
                             onClick={() => onActionClick?.('room')}
                             className="group/btn flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] uppercase tracking-[0.5em] font-black hover:bg-gold-500 transition-all shadow-3xl active:scale-95"
                           >
                               Claim Privilege <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                           </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group relative bg-white border border-slate-200 p-16 md:p-24 rounded-[5rem] overflow-hidden hover:border-gold-400 transition-all duration-1000 shadow-2xl hover:shadow-3xl lg:translate-y-24">
                <div className="absolute top-0 right-0 p-24 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                   <Gift size={350} className="text-slate-950" />
                </div>
                
                <div className="flex flex-col gap-16 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-32 h-32 rounded-[2.5rem] bg-slate-950 flex items-center justify-center shadow-2xl group-hover:-rotate-6 transition-transform duration-700">
                          <Gift size={48} className="text-gold-500" />
                       </div>
                       <span className="bg-slate-50 border border-slate-200 px-6 py-2 rounded-full text-slate-400 text-[9px] font-black uppercase tracking-widest">Legacy Pack</span>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <Heart size={18} className="text-gold-500" />
                           <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-black">Ceremonial Priority Tier</span>
                        </div>
                        <h3 className="text-slate-950 font-serif text-5xl italic leading-tight">Imperial <br/>Bridal Wings.</h3>
                        <p className="text-slate-500 text-xl font-light leading-relaxed italic border-l-2 border-gold-400 pl-10">
                            "Signature preparation suites on the Meridian Peak, dual-specialist spa therapy, and private ritual transfers for the bridal core."
                        </p>
                        <div className="pt-10">
                           <button 
                             onClick={() => onActionClick?.('wedding')}
                             className="group/btn flex items-center gap-10 bg-white border border-slate-200 text-slate-950 px-12 py-7 rounded-full text-[11px] uppercase tracking-[0.5em] font-black hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-95"
                           >
                               Request Dossier <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                           </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;