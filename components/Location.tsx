import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-white text-luxury-black">
      <div className="flex flex-col lg:flex-row">
        
        {/* Map Placeholder */}
        <div className="lg:w-1/2 h-[500px] lg:h-auto bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
                className="absolute inset-0"
            ></iframe>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-luxury-dark text-white">
            <span className="text-gold-500 tracking-[0.2em] uppercase text-xs font-bold mb-6 block">Get in Touch</span>
            <h2 className="font-serif text-4xl mb-8">Visit Us</h2>
            
            <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                    <MapPin className="text-gold-500 shrink-0 mt-1" />
                    <div>
                        <p className="text-lg font-serif">Shirshukk Grand Towers</p>
                        <p className="text-slate-400 font-light">Temple Road, South Nada<br/>Guruvayur, Kerala 680101</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <Phone className="text-gold-500 shrink-0 mt-1" />
                    <div>
                        <p className="text-lg font-serif">Reservations</p>
                        <p className="text-slate-400 font-light">+91 487 255 xxxx</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <Mail className="text-gold-500 shrink-0 mt-1" />
                    <div>
                        <p className="text-lg font-serif">Email</p>
                        <p className="text-slate-400 font-light">reservations@shirshukk.com</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-6 text-slate-400">
                <Instagram className="hover:text-gold-500 cursor-pointer transition-colors" />
                <Facebook className="hover:text-gold-500 cursor-pointer transition-colors" />
                <Twitter className="hover:text-gold-500 cursor-pointer transition-colors" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Location;