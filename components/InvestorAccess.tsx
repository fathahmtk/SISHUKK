import React from 'react';
import { FileDown, FileCheck, Shield, ShieldCheck, Mail, ArrowRight, ChevronRight, Terminal, Zap, Activity, IndianRupee, FileBadge } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorAccess: React.FC = () => {
  return (
    <section id="investor-access" className="py-40 bg-[#FDFBF7] border-y border-slate-200 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-[20%] right-[-5%] text-slate-100 font-serif text-[30rem] font-black pointer-events-none select-none italic leading-none opacity-40">A</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
           <div className="w-24 h-24 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-center mx-auto mb-12 text-gold-600 shadow-3xl group hover:border-gold-500 transition-all duration-700">
              <ShieldCheck size={40} className="group-hover:rotate-12 transition-transform" />
           </div>
           
           <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-white mb-10 shadow-sm">
             <Shield className="text-gold-600" size={16} />
             <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Institutional Transparency Protocol</span>
           </div>
           
           <h2 className="text-slate-950 font-serif text-6xl md:text-[9rem] leading-[0.75] tracking-tighter italic mb-12">Data <br/><span className="gold-gradient-text italic font-black">Room.</span></h2>
           <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl mx-auto italic border-x-2 border-gold-200 px-16">
             "Access full financial pro-formas, technical blueprints, and exit modeling below. SGT maintains a zero-lag regulatory tracker for institutional audit."
           </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Financial Audit", desc: "Consolidated financial model including IRR and Year-7 EBITDA targets.", icon: IndianRupee, link: "/report" },
             { title: "Technical Report", desc: "BIM Level 300 structural specifications and NOC certificates.", icon: Terminal, link: "/report" },
             { title: "Regulatory Log", desc: "100% Freehold title reports, RERA, and Environmental compliance.", icon: FileBadge, link: "/report" }
           ].map((box, i) => (
             <div key={i} className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-xl hover:border-gold-400 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform">
                   <box.icon size={150} className="text-slate-900" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 mb-10 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                      <box.icon size={28} />
                   </div>
                   <h3 className="text-slate-950 font-serif text-3xl italic mb-6 leading-none">{box.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-12 italic">{box.desc}</p>
                   <Link to={box.link} className="mt-auto flex items-center gap-4 bg-slate-950 text-white px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all">
                      Open Audit <ArrowRight size={14} />
                   </Link>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 flex justify-center items-center relative z-10">
           <button className="text-slate-400 hover:text-slate-950 text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-6 group">
              Schedule Confidential Project Briefing <ChevronRight size={14} className="text-gold-500 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorAccess;