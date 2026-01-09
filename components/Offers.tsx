import React from 'react';
import { ArrowRight, Gift, Target, ShieldCheck, Heart } from 'lucide-react';

interface OffersProps {
  onActionClick?: (type: 'room' | 'wedding') => void;
}

const Offers: React.FC<OffersProps> = ({ onActionClick }) => {
  return (
    <section id="offers" className="py-12 bg-[#FDFBF7] relative h-full flex flex-col justify-center border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <span className="text-gold-600 tracking-[0.6em] uppercase text-[9px] font-black flex items-center justify-center gap-6 mb-6">
              <span className="w-10 h-px bg-gold-400/30"></span>
              Strategic Privileges
              <span className="w-10 h-px bg-gold-400/30"></span>
           </span>
           <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.75] tracking-tighter italic">Exclusive <br/><span className="gold-gradient-text not-italic font-black">Incentives.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto h-[55vh]">
            
            <div className="group relative bg-white border border-slate-200 p-10 md:p-12 rounded-[3.5rem] overflow-hidden hover:border-gold-400 transition-all duration-700 shadow-xl h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                   <Target size={200} className="text-slate-950" />
                </div>
                <div className="flex flex-col gap-10 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-20 h-20 rounded-2xl bg-gold-500 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                          <span className="font-serif text-4xl text-white font-black italic">20%</span>
                       </div>
                       <span className="bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-gold-600 text-[7px] font-black uppercase tracking-widest">Early Bird Equity</span>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-slate-950 font-serif text-4xl italic leading-none">Founder Sanctuary.</h3>
                        <p className="text-slate-500 text-lg font-light leading-tight italic border-l-2 border-gold-400 pl-6">
                            "Secure residency 30 days in advance. Priority high-altitude tea at The Orbit."
                        </p>
                        <div className="pt-6">
                           <button onClick={() => onActionClick?.('room')} className="flex items-center gap-6 bg-slate-950 text-white px-8 py-4 rounded-full text-[9px] uppercase tracking-[0.4em] font-black hover:bg-gold-500 transition-all shadow-lg active:scale-95 group">
                               Claim Privilege <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group relative bg-white border border-slate-200 p-10 md:p-12 rounded-[3.5rem] overflow-hidden hover:border-gold-400 transition-all duration-700 shadow-xl h-full flex flex-col justify-center lg:translate-y-8">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                   <Gift size={200} className="text-slate-950" />
                </div>
                <div className="flex flex-col gap-10 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-20 h-20 rounded-2xl bg-slate-950 flex items-center justify-center shadow-lg group-hover:-rotate-6 transition-transform">
                          <Gift size={32} className="text-gold-500" />
                       </div>
                       <span className="bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-slate-400 text-[7px] font-black uppercase tracking-widest">Legacy Pack</span>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-slate-950 font-serif text-4xl italic leading-none">Imperial Bridal.</h3>
                        <p className="text-slate-500 text-lg font-light leading-tight italic border-l-2 border-gold-400 pl-6">
                            "Signature suites on Meridian Peak, private ritual transfers for the bridal core."
                        </p>
                        <div className="pt-6">
                           <button onClick={() => onActionClick?.('wedding')} className="flex items-center gap-6 bg-white border border-slate-200 text-slate-950 px-8 py-4 rounded-full text-[9px] uppercase tracking-[0.4em] font-black hover:bg-slate-950 hover:text-white transition-all shadow-lg active:scale-95 group">
                               Request Dossier <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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