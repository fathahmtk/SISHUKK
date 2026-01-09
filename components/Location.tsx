import React from 'react';
import { MapPin, Phone, Globe, Compass, ChevronRight, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-white text-slate-950 relative border-t border-slate-100 overflow-hidden h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Map Side */}
        <div className="lg:w-1/2 min-h-[400px] lg:h-full bg-slate-50 relative group overflow-hidden border-r border-slate-100">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                width="100%" height="100%" style={{border:0, filter: 'contrast(1.1) brightness(1.05) saturate(0.2)'}} allowFullScreen={true} loading="lazy" title="Map"
                className="absolute inset-0 opacity-40 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-[2s]"
            ></iframe>
            
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none hidden lg:block"></div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] text-slate-950 flex items-center gap-6 shadow-2xl border border-white/50 animate-float">
               <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Navigation size={32} />
               </div>
               <div>
                  <div className="text-4xl font-serif font-black tracking-tighter leading-none mb-1 italic">1.5 KM</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.4em] text-gold-600">Temple Proximity Index</div>
               </div>
            </div>
        </div>

        {/* Info Side */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-white flex flex-col justify-center relative h-full">
            <div className="absolute top-0 right-0 p-24 opacity-[0.01] pointer-events-none group-hover:scale-110 transition-transform">
                <Globe size={600} className="text-slate-950" />
            </div>

            <div className="relative z-10 max-w-xl">
                <span className="text-gold-600 tracking-[0.6em] uppercase text-[9px] font-black mb-8 block">Chapter 11: Site Context</span>
                <h2 className="font-serif text-4xl md:text-7xl mb-12 text-slate-950 leading-[0.8] tracking-tighter italic">The <br/><span className="gold-gradient-text not-italic font-black">Nexus.</span></h2>
                
                <div className="space-y-6 mb-16">
                    <div className="flex gap-8 items-start group p-8 rounded-[2.5rem] border border-slate-50 hover:border-gold-300 hover:bg-[#FDFBF7] transition-all shadow-sm">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 text-gold-600 shadow-md">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-slate-950 mb-2 italic leading-none">Shirshukk Towers</p>
                            <p className="text-slate-500 font-light text-sm">South Nada, Guruvayur, Kerala</p>
                        </div>
                    </div>

                    <div className="flex gap-8 items-start group p-8 rounded-[2.5rem] border border-slate-50 hover:border-gold-300 hover:bg-[#FDFBF7] transition-all shadow-sm">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 text-gold-600 shadow-md">
                             <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-slate-950 mb-2 italic leading-none">Investor Desk</p>
                            <p className="text-slate-500 font-light text-sm">+91 97443 23232</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-10 gap-8">
                    <div className="flex gap-8 text-slate-300">
                        <Compass className="hover:text-gold-600 cursor-pointer transition-all hover:scale-110" size={20} />
                        <Globe className="hover:text-gold-600 cursor-pointer transition-all hover:scale-110" size={20} />
                    </div>
                    <button className="flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-xl group">
                       Launch Concierge <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Location;