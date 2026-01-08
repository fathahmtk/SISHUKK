
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-black text-white relative">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Map Placeholder */}
        <div className="lg:w-1/2 min-h-[400px] lg:h-auto bg-slate-900 relative grayscale hover:grayscale-0 transition-all duration-700 border-r border-white/5">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)'}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
                className="absolute inset-0 opacity-70 hover:opacity-100 transition-opacity"
            ></iframe>
            
            {/* Overlay Gradient on Map */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none lg:hidden block"></div>

            {/* Distance Badge */}
            <div className="absolute bottom-12 left-12 bg-gold-500 p-6 rounded-2xl text-onyx-950 flex items-center gap-6 shadow-2xl animate-float">
               <Navigation size={32} />
               <div>
                  <div className="text-4xl font-serif font-black">1.5 KM</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">From Guruvayur Temple</div>
               </div>
            </div>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-black flex flex-col justify-center relative overflow-hidden">
             {/* Background Textures */}
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <MapPin size={300} className="text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
                <span className="text-gold-500 tracking-[0.2em] uppercase text-xs font-bold mb-6 block">Get in Touch</span>
                <h2 className="font-serif text-5xl mb-12 text-white">Visit Us</h2>
                
                <div className="space-y-8 mb-16">
                    <div className="flex gap-6 items-start group p-6 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300">
                        <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-colors group-hover:scale-110">
                            <MapPin className="text-gold-500" size={20} />
                        </div>
                        <div>
                            <p className="text-xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">Shirshukk Grand Towers</p>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">Temple Road, South Nada<br/>Guruvayur, Kerala 680101</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start group p-6 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300">
                        <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-colors group-hover:scale-110">
                             <Phone className="text-gold-500" size={20} />
                        </div>
                        <div>
                            <p className="text-xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">Reservations</p>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">+91 487 255 xxxx<br/><span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Mon - Sun, 24 Hours</span></p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start group p-6 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300">
                         <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-colors group-hover:scale-110">
                             <Mail className="text-gold-500" size={20} />
                        </div>
                        <div>
                            <p className="text-xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">Email</p>
                            <p className="text-slate-400 font-light text-sm">reservations@shirshukk.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 text-slate-500 border-t border-white/10 pt-8 pl-6">
                    <Instagram className="hover:text-gold-500 cursor-pointer transition-colors hover:scale-110 transform duration-300" size={20} />
                    <Facebook className="hover:text-gold-500 cursor-pointer transition-colors hover:scale-110 transform duration-300" size={20} />
                    <Twitter className="hover:text-gold-500 cursor-pointer transition-colors hover:scale-110 transform duration-300" size={20} />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
