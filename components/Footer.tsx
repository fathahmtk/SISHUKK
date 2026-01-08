
import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 lg:gap-32">
            
            {/* Brand Column */}
            <div className="max-w-sm">
                <div className="flex items-center gap-4 mb-8">
                    <Logo className="w-10 h-10" />
                    <div>
                      <h2 className="text-white font-serif text-3xl tracking-widest uppercase leading-none mb-1">Sirshukk</h2>
                      <span className="text-gold-500 text-[8px] font-black uppercase tracking-[0.5em]">Grand Towers</span>
                    </div>
                </div>
                <p className="text-slate-500 text-base leading-relaxed mb-10 font-light">
                    A landmark twin-tower institutional hospitality asset by Live Shukran International Pvt Limited. Engineered for the high-yield ritual economy of Guruvayur.
                </p>
                <div className="space-y-5">
                    <div className="flex items-center gap-4 text-slate-400 text-xs group">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold-500/10 transition-colors">
                          <MapPin size={16} className="text-gold-500" />
                        </div>
                        <span className="group-hover:text-white transition-colors">Guruvayur, Kerala, India</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 text-xs group">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold-500/10 transition-colors">
                          <Phone size={16} className="text-gold-500" />
                        </div>
                        <span className="group-hover:text-white transition-colors">+91 9744323232 / 6235066660</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 text-xs group">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold-500/10 transition-colors">
                          <Mail size={16} className="text-gold-500" />
                        </div>
                        <span className="lowercase group-hover:text-white transition-colors">Liveshukrangroups@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-16 lg:gap-24">
                <div>
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Intelligence</h4>
                    <ul className="space-y-4">
                        {['Asset Architecture', 'Market Analysis', 'Inventory Specs', 'Revenue Logic', 'Risk Safeguards'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-500 hover:text-gold-400 text-sm transition-all flex items-center gap-2 group">
                                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Governance</h4>
                    <ul className="space-y-4">
                        {['Investor Portal', 'NDA Execution', 'Audit Logs', 'Data Room', 'Legal Compliance'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-left">
                 <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                     &copy; {new Date().getFullYear()} LIVE SHUKRAN INTERNATIONAL PVT LIMITED.
                 </p>
             </div>
             <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-gold-500" />
                    <span className="text-slate-600 text-[9px] uppercase tracking-widest font-black">Institutional Grade</span>
                 </div>
                 <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                 <span className="text-slate-600 text-[9px] uppercase tracking-widest font-black">Confidential Dossier v2.5</span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
