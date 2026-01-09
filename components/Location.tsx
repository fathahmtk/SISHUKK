import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Navigation, ChevronRight, Globe, Compass } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-white text-slate-950 relative border-t border-slate-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[950px]">
        
        {/* Map Side */}
        <div className="lg:w-1/2 min-h-[600px] lg:h-auto bg-[#FDFBF7] relative grayscale transition-all duration-1000 border-r border-slate-100 group">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'contrast(1.1) brightness(1.05) saturate(0.2)'}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
                className="absolute inset-0 opacity-40 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-[2s]"
            ></iframe>
            
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>

            <div className="absolute bottom-16 left-16 bg-white/90 backdrop-blur-3xl p-12 rounded-[4rem] text-slate-950 flex items-center gap-10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-white/50 animate-float">
               <div className="w-24 h-24 bg-gold-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform">
                  <Navigation size={48} />
               </div>
               <div>
                  <div className="text-6xl font-serif font-black tracking-tighter leading-none mb-3 italic">1.5 KM</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-600">Temple Proximity Index</div>
               </div>
            </div>

            <div className="absolute top-16 right-16">
               <div className="bg-slate-950 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl flex items-center gap-4">
                  <Compass size={18} className="text-gold-500 animate-spin-slow" /> Strategic South Nada
               </div>
            </div>
        </div>

        {/* Info Side */}
        <div className="lg:w-1/2 p-16 lg:p-32 bg-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                <Globe size={800} className="text-slate-950" />
            </div>

            <div className="relative z-10 max-w-2xl">
                <span className="text-gold-600 tracking-[1em] uppercase text-[10px] font-black mb-12 block">Chapter 11: Site Context</span>
                <h2 className="font-serif text-6xl md:text-[8rem] mb-20 text-slate-950 leading-[0.8] tracking-tighter italic">The <br/><span className="gold-gradient-text not-italic font-black">Nexus.</span></h2>
                
                <div className="space-y-12 mb-32">
                    <div className="flex gap-12 items-start group p-12 rounded-[4rem] border border-slate-50 hover:border-gold-300 hover:bg-[#FDFBF7] transition-all duration-700 shadow-sm hover:shadow-2xl">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <p className="text-4xl font-serif text-slate-950 mb-4 group-hover:text-gold-600 transition-colors italic leading-none">Shirshukk Towers</p>
                            <p className="text-slate-500 font-light text-lg leading-relaxed border-l border-gold-400 pl-8">Temple Road, South Nada<br/>Guruvayur, Kerala 680101</p>
                        </div>
                    </div>

                    <div className="flex gap-12 items-start group p-12 rounded-[4rem] border border-slate-50 hover:border-gold-300 hover:bg-[#FDFBF7] transition-all duration-700 shadow-sm hover:shadow-2xl">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                             <Phone size={28} />
                        </div>
                        <div>
                            <p className="text-4xl font-serif text-slate-950 mb-4 group-hover:text-gold-600 transition-colors italic leading-none">Investor Desk</p>
                            <p className="text-slate-500 font-light text-lg leading-relaxed border-l border-gold-400 pl-8">+91 97443 23232<br/><span className="text-[10px] text-gold-600 uppercase tracking-[0.5em] mt-3 block font-black">Authorized Institutional Hours</span></p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-16 gap-10">
                    <div className="flex gap-10 text-slate-300">
                        <Instagram className="hover:text-gold-600 cursor-pointer transition-all hover:scale-125" size={24} />
                        <Facebook className="hover:text-gold-600 cursor-pointer transition-all hover:scale-125" size={24} />
                        <Twitter className="hover:text-gold-600 cursor-pointer transition-all hover:scale-125" size={24} />
                    </div>
                    <button className="flex items-center gap-10 bg-slate-950 text-white px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:bg-gold-500 shadow-3xl group active:scale-95">
                       Launch Concierge <ChevronRight size={20} className="group-hover:translate-x-3 transition-transform" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Location;