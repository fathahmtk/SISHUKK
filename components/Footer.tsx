import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, Landmark, Globe, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-32 border-t border-slate-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        <div className="absolute bottom-[-10%] right-[-5%] text-slate-50 font-serif text-[35rem] font-black pointer-events-none select-none italic leading-none opacity-40">SGT</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start mb-40">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-16">
                <div className="flex items-center gap-8 group cursor-pointer">
                    <Logo className="w-20 h-20 transition-transform duration-1000 group-hover:scale-110" />
                    <div className="border-l border-slate-200 pl-8">
                      <h2 className="text-slate-950 font-serif text-5xl tracking-tighter uppercase leading-none mb-2 font-black italic">Sirshukk</h2>
                      <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block">Grand Towers</span>
                    </div>
                </div>
                
                <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-xl border-l-2 border-gold-400 pl-12 italic">
                    "A landmark twin-tower architectural achievement by Live Shukran International. Defining the ultimate luxury standard in the heart of Guruvayur."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                   <div className="space-y-8">
                      <h4 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Project Site</h4>
                      <div className="flex items-start gap-5 group">
                         <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all">
                            <MapPin size={18} />
                         </div>
                         <span className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed">South Nada, Guruvayur<br/>Kerala, India</span>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <h4 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Project Enquiries</h4>
                      <div className="flex flex-col gap-6">
                         <div className="flex items-center gap-5 group">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all">
                               <Phone size={18} />
                            </div>
                            <span className="text-slate-950 text-sm font-black font-mono">+91 97443 23232</span>
                         </div>
                         <div className="flex items-center gap-5 group">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all">
                               <Mail size={18} />
                            </div>
                            <span className="text-slate-500 text-sm font-bold lowercase tracking-wider border-b border-transparent group-hover:border-gold-400 transition-all">liveshukrangroups@gmail.com</span>
                         </div>
                      </div>
                   </div>
                </div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-20 lg:pl-32">
                <div className="space-y-16">
                    <h4 className="text-slate-950 text-[11px] font-black uppercase tracking-[0.6em] border-b border-slate-100 pb-6 flex items-center justify-between">
                       Architecture <Activity size={14} className="text-gold-500 opacity-40" />
                    </h4>
                    <ul className="space-y-8">
                        <li>
                            <Link to="/report" className="text-slate-950 hover:text-gold-600 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-between group">
                                Master Project Monograph <FileText size={14} className="text-gold-500" />
                            </Link>
                        </li>
                        {['Structural Thesis', 'Material Palette', 'Inventory Details', 'Operational Tech', 'Completion Log'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-400 hover:text-gold-600 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-between group">
                                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-16">
                    <h4 className="text-slate-950 text-[11px] font-black uppercase tracking-[0.6em] border-b border-slate-100 pb-6 flex items-center justify-between">
                       Discovery <Globe size={14} className="text-gold-500 opacity-40" />
                    </h4>
                    <ul className="space-y-8">
                        {['Project Archives', 'Virtual Tour', 'Site Timeline', 'Compliance Hub', 'Quality Control'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-400 hover:text-slate-950 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-between group">
                                   {item} <Landmark size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="text-left space-y-4">
                 <p className="text-slate-950 text-[11px] font-black uppercase tracking-[0.4em] italic">
                     Live Shukran International Private Limited
                 </p>
                 <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">
                     &copy; {new Date().getFullYear()} All Intellectual Property Rights Reserved.
                 </p>
             </div>
             
             <div className="flex items-center gap-10">
                 <div className="flex items-center gap-4 bg-[#FDFBF7] px-8 py-4 rounded-full border border-slate-200 shadow-sm group hover:border-gold-400 transition-all">
                    <ShieldCheck size={18} className="text-gold-500 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-500 text-[10px] uppercase tracking-widest font-black">Official Project Documentation</span>
                 </div>
                 <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                 <span className="text-slate-300 text-[10px] uppercase tracking-[1em] font-black animate-pulse">V.2.5 LIVE</span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;