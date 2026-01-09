import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ShieldCheck, Download, Printer, CheckCircle2, 
  FileText, Landmark, MapPin, HardHat, Database, 
  Briefcase, Globe, ClipboardCheck, Scale, Zap, Info,
  Menu, X, ChevronRight, FileDown, BookOpen, Activity,
  Layers, Target, Workflow, Users, Percent, Calculator,
  Smartphone, Leaf, Gavel, BarChart3, TrendingUp, Handshake,
  IndianRupee, Rocket, Scan, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';

const ReportPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('01');

  const sections = [
    { id: '01', title: 'EXECUTIVE SUMMARY', icon: FileText },
    { id: '02', title: 'PROJECT BACKGROUND & VISION', icon: Target },
    { id: '03', title: 'SITE & LOCATION OVERVIEW', icon: MapPin },
    { id: '04', title: 'MASTER PLANNING & ARCHITECTURE', icon: Landmark },
    { id: '08', title: 'CAPEX ALLOCATION', icon: Calculator },
    { id: '14', title: 'IMPLEMENTATION & PHASING', icon: Workflow },
    { id: '20', title: 'OPERATIONAL PRO-FORMA', icon: FileDown },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-40 animate-fade-in font-sans selection:bg-gold-500/20 relative">
      
      {/* Background HUD Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center">
         <Logo className="w-[80vw] h-[80vh]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* INSTITUTIONAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 border-b-8 border-slate-950 pb-12">
          <div className="space-y-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] hover:text-slate-950 transition-all group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Exit Confidential Portal
            </Link>
            <div className="flex items-center gap-12">
              <Logo className="w-24 h-24 shadow-2xl rounded-[2rem] p-4 bg-white border border-slate-100" />
              <div className="h-20 w-px bg-slate-200"></div>
              <div>
                <h1 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black leading-[0.8] mb-4">Master <br/>Ledger.</h1>
                <div className="flex flex-wrap items-center gap-6">
                   <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em]">REF: SGT_MASTER_SYNC_2025_v18.0</span>
                   <div className="flex items-center gap-2 text-emerald-600 text-[8px] font-black uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                      <Scan size={10} className="animate-pulse" /> Asset_Synchronized
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-16 md:mt-0">
            <button onClick={() => window.print()} className="w-16 h-16 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all bg-white shadow-xl">
              <Printer size={22} />
            </button>
            <button className="px-10 py-6 bg-slate-950 text-white rounded-[2rem] text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-2xl flex items-center gap-6 group">
              Transmit Dossier <FileDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* TECHNICAL INDEX SIDEBAR */}
          <aside className="lg:col-span-3 sticky top-32 h-fit hidden lg:block">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[3rem] p-10 shadow-xl space-y-12">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-onyx-950 shadow-gold-glow">
                   <Box size={14} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Technical Index</span>
              </div>
              <nav className="space-y-1">
                {sections.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-5 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all flex items-center gap-4 group ${
                      activeSection === s.id 
                        ? 'bg-slate-950 text-white shadow-xl translate-x-2' 
                        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <s.icon size={12} className={activeSection === s.id ? 'text-gold-500' : 'opacity-40 group-hover:opacity-100'} />
                    {s.title}
                  </button>
                ))}
              </nav>
              <div className="pt-6 border-t border-slate-100">
                 <div className="flex items-center gap-3 text-gold-600 mb-2">
                    <Activity size={12} className="animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em]">System Uptime: 99.9%</span>
                 </div>
                 <div className="text-slate-300 text-[7px] font-mono uppercase">Node: LS-CLOUD-HYPERCORE-01</div>
              </div>
            </div>
          </aside>

          {/* MASTER DOCUMENT CONTENT */}
          <main className="lg:col-span-9 space-y-40 text-slate-700 leading-relaxed font-sans text-lg">
            
            {/* 01. EXECUTIVE SUMMARY */}
            <section id="01" className="space-y-12 animate-fade-in scroll-mt-32">
              <div className="flex items-center gap-6 mb-16">
                 <div className="w-16 h-16 rounded-2xl bg-slate-950 text-gold-500 flex items-center justify-center shadow-2xl">
                    <FileText size={32} />
                 </div>
                 <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase leading-none">01. Executive Thesis</h2>
              </div>
              <p className="font-editorial text-3xl italic text-slate-900 leading-tight border-l-8 border-gold-500 pl-16 py-6 bg-white rounded-r-[4rem] shadow-xl">
                "Conceived as a destination-grade institutional asset, SIRSHUKK monetises structural architecture, ensuring superior yield capture and capital barrier."
              </p>
              <p className="text-xl font-light">
                The development is structured to generate diversified revenue streams across luxury hospitality, destination dining, and ritual-driven events. Unlike conventional projects, it creates long-tail equity through absolute structural scarcity in the South India corridor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                 <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-3xl relative overflow-hidden group">
                    <ShieldCheck size={180} className="absolute -right-8 -bottom-8 opacity-5" />
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Target Participation</h4>
                    <p className="text-slate-300 text-lg italic leading-relaxed relative z-10">Optimized for Tier-1 Sovereign funds and strategic institutional stakeholders seeking debt-free asset exposure.</p>
                 </div>
                 <div className="bg-white border border-slate-200 p-12 rounded-[3.5rem] shadow-xl group hover:border-gold-400 transition-all flex flex-col justify-between">
                    <div>
                       <TrendingUp size={40} className="text-gold-500 mb-8" />
                       <h4 className="text-slate-950 font-serif text-3xl italic mb-4 leading-none">Projected IRR</h4>
                       <div className="text-slate-950 font-serif text-7xl font-black italic tracking-tighter">24.2%</div>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-6 mt-8 italic">Validated Stabilization Metric</span>
                 </div>
              </div>
            </section>

            {/* 08. CAPEX ALLOCATION */}
            <section id="08" className="space-y-12 scroll-mt-32">
               <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 text-gold-500 flex items-center justify-center shadow-2xl">
                    <Calculator size={32} />
                  </div>
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase leading-none">08. Capex Audit</h2>
               </div>
               <div className="bg-white border-4 border-slate-950 rounded-[4rem] overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50 border-b-4 border-slate-950 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
                           <th className="px-12 py-10">Audit Deployment Node</th>
                           <th className="px-12 py-10 text-right">Value (₹ Cr)</th>
                           <th className="px-12 py-10 text-right">Weight</th>
                        </tr>
                     </thead>
                     <tbody className="text-slate-600 text-base">
                        {[
                          { l: "Civil & Structural Core", v: "140.0", p: "40%", s: "Audit Verified" },
                          { l: "Architectural Façade & Arch", v: "52.5", p: "15%", s: "Vendor Locked" },
                          { l: "Luxury Interior Fit-outs", v: "70.0", p: "20%", s: "Mock-ups OK" },
                          { l: "MEP, AI & Systems", v: "35.0", p: "10%", s: "L3 BIM Sync" },
                          { l: "Operational Liquidity Reserve", v: "52.5", p: "15%", s: "Capital Reserved" }
                        ].map((row, i) => (
                           <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-gold-50/20 transition-all group">
                              <td className="px-12 py-8 font-black text-slate-950 text-xl font-serif italic flex items-center gap-4">
                                 <div className="w-2 h-2 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                                 {row.l}
                              </td>
                              <td className="px-12 py-8 text-right font-mono font-black text-slate-900">₹{row.v}</td>
                              <td className="px-12 py-8 text-right font-bold text-gold-600">{row.p}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="p-12 bg-slate-950 text-white flex flex-col md:flex-row justify-between items-center gap-10">
                     <div className="flex items-center gap-10">
                        <Database size={32} className="text-gold-500 animate-pulse" />
                        <span className="text-4xl font-serif italic font-black">₹350 Crore Consolidated Outlay</span>
                     </div>
                     <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-emerald-500" /> Fixed_Asset_Ledger_v18.0_Audit_Ready
                     </div>
                  </div>
               </div>
            </section>

            {/* DOCUMENT CLOSING */}
            <section className="pt-32 border-t-8 border-slate-950 text-center space-y-24">
               <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full border-4 border-gold-500/20 border-t-gold-500 flex items-center justify-center mb-16 shadow-gold-glow animate-spin-slow">
                    <ShieldCheck size={80} className="text-gold-500 rotate-[calc(360deg*var(--tw-rotate))]" style={{animation: 'none'}} />
                  </div>
                  <h3 className="text-slate-950 font-serif text-6xl italic font-black tracking-tighter uppercase leading-none">Dossier Closure</h3>
                  <p className="text-slate-400 text-2xl font-light max-w-4xl mx-auto italic mt-10 leading-relaxed">
                    "This memorandum serves as the authoritative source of truth for SIRSHUKK GRAND TOWERS. All metrics synchronized with the January 2025 Ledger Release."
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center mb-40 border-y border-slate-200 py-20">
                  <div className="text-center space-y-8">
                    <div className="w-32 h-px bg-slate-200 mx-auto"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 block">Lead Capital Auditor</span>
                  </div>
                  <div className="text-center space-y-8">
                    <div className="w-32 h-px bg-slate-200 mx-auto"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 block">Structural BIM Certifier</span>
                  </div>
                  <div className="text-center space-y-8">
                    <div className="w-32 h-px bg-slate-200 mx-auto"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 block">Strategic Counsel</span>
                  </div>
               </div>

               <div className="pt-20 max-w-4xl mx-auto pb-20 opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.6em] italic mb-12">
                     AUTHORIZED INSTITUTIONAL DATA SYNC // (C) 2025 SIRSHUKK HOSPITALITY
                  </p>
                  <Logo className="w-12 h-12 mx-auto" />
               </div>
            </section>

          </main>
        </div>
      </div>

      {/* Floating HUD Scroll Progress */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden 2xl:flex">
         {sections.map(s => (
           <div 
             key={s.id} 
             className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSection === s.id ? 'bg-gold-500 scale-[2] shadow-gold-glow' : 'bg-slate-200'}`}
           ></div>
         ))}
      </div>
    </div>
  );
};

export default ReportPage;