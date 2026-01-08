
import React from 'react';
import { Sparkles, Activity, ShoppingBag, Server, Shield, Wifi } from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <section className="py-24 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Lifestyle & Operations</h2>
          <div className="w-24 h-1 bg-gold-500 mb-6 shadow-[0_0_10px_#D4AF37]"></div>
          <p className="text-slate-400 text-lg max-w-3xl">
            Beyond the event spaces, the asset integrates high-yield lifestyle amenities and a robust operational technology stack to ensure premium experiences and controlled costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Wellness & Retail */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-gold-400 font-serif text-2xl mb-8 tracking-wide uppercase">Wellness & Retail</h3>
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <Sparkles className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Luxury Spa & Wellness</h4>
                  <p className="text-slate-500 text-sm mt-1">Dedicated centre for rejuvenation, targeting high-net-worth guests.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <Activity className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Fitness & Yoga Deck</h4>
                  <p className="text-slate-500 text-sm mt-1">Open-air or glass-enclosed spaces leveraging high-rise views.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <ShoppingBag className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">High-End Retail</h4>
                  <p className="text-slate-500 text-sm mt-1">Leased spaces for jewellery, wedding couture, and premium gifting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology & Ops */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-gold-400 font-serif text-2xl mb-8 tracking-wide uppercase">Tech & Operations</h3>
            <div className="space-y-8">
               <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <Server className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Central BMS & HVAC</h4>
                  <p className="text-slate-500 text-sm mt-1">Energy-optimised building management systems to reduce OpEx.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <Wifi className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Smart Room Automation</h4>
                  <p className="text-slate-500 text-sm mt-1">Contactless controls and personalized guest settings.</p>
                </div>
              </div>

               <div className="flex gap-4 group">
                <div className="bg-onyx-900 p-4 h-fit rounded-xl border border-white/10 group-hover:border-gold-500/50 transition-colors shadow-lg">
                  <Shield className="text-gold-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Event ERP & Security</h4>
                  <p className="text-slate-500 text-sm mt-1">Integrated logistics software for seamless weddings and surveillance.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Amenities;
