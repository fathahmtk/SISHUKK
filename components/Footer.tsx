import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Brand Column */}
            <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 border border-gold-500/30 rotate-45 flex items-center justify-center">
                        <span className="text-gold-400 font-serif -rotate-45 font-bold">S</span>
                    </div>
                    <h2 className="text-white font-serif text-2xl tracking-widest">SHIRSHUKK</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    A landmark twin-tower hospitality asset in Guruvayur. Where heritage meets high-rise luxury.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors text-xs uppercase tracking-widest font-bold">Instagram</a>
                    <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
                </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Explore</h4>
                    <ul className="space-y-3">
                        {['Rooms & Suites', 'Dining', 'Weddings', 'Experiences', 'Offers'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                                    {item} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Legal</h4>
                    <ul className="space-y-3">
                        {['Privacy Policy', 'Terms of Service', 'Investor Login', 'Press Kit'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-left">
                 <p className="text-slate-600 text-xs">
                     &copy; {new Date().getFullYear()} Live Shukran International Pvt Ltd. All rights reserved.
                 </p>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                 <span className="text-slate-500 text-[10px] uppercase tracking-widest">System Operational</span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;