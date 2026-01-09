import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ShieldCheck, Download, Printer, CheckCircle2, 
  FileText, Landmark, MapPin, HardHat, Database, 
  Briefcase, Globe, ClipboardCheck, Scale, Zap, Info,
  Menu, X, ChevronRight, FileDown, BookOpen, Activity,
  Layers, Target, Workflow, Users, Percent, Calculator,
  Smartphone, Leaf, Gavel, BarChart3, TrendingUp, Handshake,
  // Add missing IndianRupee and Rocket icons
  IndianRupee, Rocket
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
    { id: '05', title: 'MARKET ANALYSIS', icon: TrendingUp },
    { id: '06', title: 'PROJECT CONFIGURATION', icon: Layers },
    { id: '07', title: 'REVENUE & BUSINESS STRATEGY', icon: IndianRupee },
    { id: '08', title: 'DEVELOPMENT COST (CAPEX)', icon: Calculator },
    { id: '09', title: 'FINANCIAL MODEL OVERVIEW', icon: BarChart3 },
    { id: '10', title: 'CAPITAL STRUCTURE & FUNDING', icon: Database },
    { id: '11', title: 'EXIT STRATEGY', icon: Handshake },
    { id: '12', title: 'RISK ANALYSIS & MITIGATION', icon: ShieldCheck },
    { id: '13', title: 'GOVERNANCE & COMPLIANCE', icon: Gavel },
    { id: '14', title: 'IMPLEMENTATION & PHASING', icon: Workflow },
    { id: '15', title: 'OPERATIONAL STRATEGY', icon: Activity },
    { id: '16', title: 'HUMAN RESOURCES & TALENT', icon: Users },
    { id: '17', title: 'MARKETING & BRANDING', icon: Globe },
    { id: '18', title: 'TECHNOLOGY & DIGITAL', icon: Smartphone },
    { id: '19', title: 'SUSTAINABILITY & ESG', icon: Leaf },
    { id: '20', title: 'DETAILED FINANCIAL TABLES', icon: FileDown },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-40 animate-fade-in font-sans selection:bg-gold-500/20 print:bg-white print:pt-0">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* INSTITUTIONAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 border-b-8 border-slate-950 pb-12 print:border-black print:mb-8">
          <div className="space-y-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] hover:text-slate-950 transition-all group print:hidden">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Exit Confidential Portal
            </Link>
            <div className="flex items-center gap-12">
              <Logo className="w-32 h-32 shadow-3xl rounded-[3rem] p-4 bg-white border border-slate-100" />
              <div className="h-24 w-px bg-slate-200 print:bg-black"></div>
              <div>
                <h1 className="text-slate-950 font-serif text-6xl md:text-8xl italic font-black leading-[0.8] mb-6">Master <br/>Memorandum</h1>
                <div className="flex flex-wrap items-center gap-8">
                   <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em]">REF: LS-SGT-MASTER-2025-V18.0</span>
                   <div className="px-6 py-2 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-100 flex items-center gap-3">
                      <CheckCircle2 size={12} /> Data Sync: Certified
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-16 md:mt-0 print:hidden">
            <button onClick={() => window.print()} className="w-20 h-20 rounded-3xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-xl bg-white active:scale-95">
              <Printer size={28} />
            </button>
            <button className="px-14 py-8 bg-slate-950 text-white rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-3xl flex items-center gap-8 group active:scale-95">
              Download Full Report <Download size={22} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* STICKY DOSSIER INDEX */}
          <aside className="lg:col-span-3 sticky top-32 h-fit hidden lg:block print:hidden">
            <div className="bg-white border border-slate-200 rounded-[4rem] p-10 shadow-xl max-h-[80vh] overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
                <BookOpen size={20} className="text-gold-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Technical Index</span>
              </div>
              <nav className="space-y-2">
                {sections.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-4 group ${
                      activeSection === s.id 
                        ? 'bg-slate-950 text-white shadow-gold-glow translate-x-2' 
                        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <s.icon size={14} className={activeSection === s.id ? 'text-gold-500' : 'opacity-40 group-hover:opacity-100'} />
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* DOCUMENT BODY */}
          <main className="lg:col-span-9 space-y-40 text-slate-700 leading-relaxed font-sans text-xl print:col-span-12">
            
            {/* 01. EXECUTIVE SUMMARY */}
            <section id="01" className="space-y-12">
              <div className="flex items-center gap-6 mb-16">
                 <FileText size={48} className="text-gold-600" />
                 <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">01. Executive Thesis</h2>
              </div>
              <p className="font-editorial text-4xl italic text-slate-900 leading-[1.05] border-l-8 border-gold-500 pl-16 py-4 bg-white rounded-r-[4rem] shadow-sm">
                "Sirshukk Grand Towers is a hospitality-led landmark real estate development conceived as a destination-grade institutional asset. Conceived to monetise architecture itself, ensuring strong operating margins and premium exit valuation."
              </p>
              <p>
                The development is structured to generate diversified revenue streams across luxury hospitality, destination dining, weddings and large-format events, and experiential attractions. Unlike conventional projects, it creates brand equity through structural scarcity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                 <div className="bg-slate-950 p-12 rounded-[4rem] text-white shadow-3xl relative overflow-hidden group">
                    <ShieldCheck size={200} className="absolute -right-12 -bottom-12 opacity-5" />
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Target Participation</h4>
                    <p className="text-slate-300 text-lg italic leading-relaxed">Positioned for Private Equity funds, family offices, and strategic hospitality investors seeking long-term yield.</p>
                 </div>
                 <div className="bg-white border-2 border-slate-100 p-12 rounded-[4rem] shadow-xl group hover:border-gold-400 transition-all">
                    <TrendingUp size={48} className="text-gold-500 mb-8" />
                    <h4 className="text-slate-950 font-serif text-3xl italic mb-4">Projected IRR</h4>
                    <div className="text-slate-950 font-serif text-7xl font-black italic">24.2%</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">7-Year Horizons</span>
                 </div>
              </div>
            </section>

            {/* 02. PROJECT BACKGROUND & VISION */}
            <section id="02" className="space-y-12">
               <div className="flex items-center gap-6 mb-16">
                  <Target size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">02. Vision & Background</h2>
               </div>
               <p className="text-2xl font-light italic text-slate-500 max-w-4xl leading-relaxed">
                 "The project is not demand-following but demand-creating, designed to become a cultural, commercial, and experiential anchor for South India."
               </p>
               <p>
                 The architectural form establishes immediate differentiation and long-term relevance. Combining iconic design with disciplined financial structuring delivers sustainable institutional returns.
               </p>
            </section>

            {/* 03. SITE & LOCATION OVERVIEW */}
            <section id="03" className="space-y-12">
               <div className="flex items-center gap-6 mb-16">
                  <MapPin size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">03. Site Context</h2>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-8">
                     <p>Strategically located to command skyline dominance, ensuring long-term visual primacy. The location supports high-value events and premium hospitality demand.</p>
                     <ul className="space-y-6">
                        {[
                          "Clear skyline visibility / No competition",
                          "Strong destination appeal (12M+ Pilgrims)",
                          "Absence of vertical competition in zone",
                          "Long-term appreciation driven by scarcity"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-6 text-slate-900 font-bold uppercase text-xs tracking-widest group">
                              <CheckCircle2 size={18} className="text-gold-500 group-hover:scale-125 transition-transform" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="relative rounded-[4rem] overflow-hidden border-2 border-slate-200 h-[500px] grayscale group shadow-2xl">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                        width="100%" height="100%" style={{border:0, filter: 'contrast(1.2) brightness(1.1)'}} loading="lazy" title="Location Map"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                     <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-xl border border-white rounded-[3rem] shadow-2xl flex items-center gap-6">
                        <MapPin size={24} className="text-gold-500" />
                        <div>
                           <div className="text-slate-950 font-serif text-2xl italic leading-none">South Nada Corridor</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-gold-600">The 1.5KM Monopoly</div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 04. ARCHITECTURAL CONCEPT */}
            <section id="04" className="space-y-12">
               <div className="flex items-center gap-6 mb-16">
                  <Landmark size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">04. Master Concept</h2>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-7 space-y-10">
                     <h4 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] italic mb-6">4.1 Architectural Identity</h4>
                     <p className="text-slate-900 text-3xl font-editorial italic leading-relaxed">
                       Symmetrical high-rise towers joined by a monumental central arch establishing an instantly recognisable landmark.
                     </p>
                     <div className="grid grid-cols-2 gap-8 pt-6">
                        {["Visual Monopoly", "Experiential Monetisation", "High-Value Event Hosting", "Cultural Collaboration"].map((t, i) => (
                           <div key={i} className="flex items-center gap-4 text-slate-400 text-[9px] font-black uppercase tracking-widest">
                              <ShieldCheck size={16} className="text-gold-500" /> {t}
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-12 rounded-[4rem] border border-slate-200 shadow-inner">
                     <h4 className="text-slate-950 text-[10px] font-black uppercase tracking-widest border-b border-slate-200 pb-4 mb-8">4.2 Project Components</h4>
                     <ul className="space-y-6 font-serif italic text-2xl text-slate-800">
                        <li className="flex justify-between items-center">Luxury Keys <ChevronRight size={18} className="text-gold-500" /></li>
                        <li className="flex justify-between items-center">Destination F&B <ChevronRight size={18} className="text-gold-500" /></li>
                        <li className="flex justify-between items-center">Wedding Venues <ChevronRight size={18} className="text-gold-500" /></li>
                        <li className="flex justify-between items-center">Sky Attractions <ChevronRight size={18} className="text-gold-500" /></li>
                        <li className="flex justify-between items-center">Grand Podium <ChevronRight size={18} className="text-gold-500" /></li>
                     </ul>
                  </div>
               </div>
            </section>

            {/* 08. CAPEX STRUCTURE (DETAILED) */}
            <section id="08" className="space-y-12">
               <div className="flex items-center gap-6 mb-16">
                  <Calculator size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">08. Capex Allocation</h2>
               </div>
               <div className="bg-white border-4 border-slate-950 rounded-[4rem] overflow-hidden shadow-3xl print:border-black">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50 border-b-4 border-slate-950 text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">
                           <th className="px-12 py-10">Deployment Node</th>
                           <th className="px-12 py-10 text-right">Value (₹ Cr)</th>
                           <th className="px-12 py-10 text-right">Weight</th>
                           <th className="px-12 py-10">Verification Status</th>
                        </tr>
                     </thead>
                     <tbody className="text-slate-600 text-base">
                        {[
                          { l: "Civil & Structural Core", v: "140.0", p: "40%", s: "Audit Verified" },
                          { l: "Architectural Façade & Arch", v: "52.5", p: "15%", s: "Vendor Locked" },
                          { l: "Luxury Interior Fit-outs", v: "70.0", p: "20%", s: "Mock-ups OK" },
                          { l: "MEP, AI & Systems", v: "35.0", p: "10%", s: "L3 BIM Sync" },
                          { l: "Pre-Ops, Branding & Reserve", v: "52.5", p: "15%", s: "Capital Reserved" }
                        ].map((row, i) => (
                           <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-gold-50/20 transition-all">
                              <td className="px-12 py-8 font-black text-slate-950 text-xl font-serif italic">{row.l}</td>
                              <td className="px-12 py-8 text-right font-mono font-black text-slate-900">₹{row.v}</td>
                              <td className="px-12 py-8 text-right font-bold text-gold-600">{row.p}</td>
                              <td className="px-12 py-8 text-emerald-600 font-bold uppercase text-[9px] tracking-widest">{row.s}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="p-12 bg-slate-950 text-white flex justify-between items-center">
                     <div className="flex items-center gap-10">
                        <Database size={32} className="text-gold-500" />
                        <span className="text-4xl font-serif italic font-black">Consolidated Outlay: ₹350 Crore</span>
                     </div>
                     <div className="text-[11px] font-black uppercase tracking-[0.6em] text-white/40 italic">Fixed Asset Ledger v18.0 Verified</div>
                  </div>
               </div>
            </section>

            {/* 14. IMPLEMENTATION & PHASING */}
            <section id="14" className="space-y-16">
               <div className="flex items-center gap-6 mb-16">
                  <Workflow size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">14. Implementation Phasing</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { phase: "PHASE 1", title: "Pre-Development", desc: "Statutory approvals, environmental clearances, and financial structuring locked.", icon: Layers },
                    { phase: "PHASE 2", title: "Construction Core", desc: "Structural construction of twin towers, arch, and podium logistics.", icon: HardHat },
                    { phase: "PHASE 3", title: "Systems Integration", desc: "Interior luxury fit-outs, MEP, and technology automation layers.", icon: Zap },
                    { phase: "PHASE 4", title: "Commissioning", desc: "Operational recruitment, trial operations, and monumental soft launch.", icon: Rocket }
                  ].map((p, i) => (
                     <div key={i} className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-xl group hover:border-gold-500 transition-all duration-700">
                        <div className="flex justify-between items-start mb-10">
                           <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                              <p.icon size={28} />
                           </div>
                           <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] italic">{p.phase} Milestone</span>
                        </div>
                        <h3 className="text-slate-950 font-serif text-4xl italic mb-6 leading-none">{p.title}</h3>
                        <p className="text-slate-500 text-lg font-light leading-relaxed border-l-2 border-gold-400 pl-8 group-hover:border-gold-400 transition-all">{p.desc}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* 20. FINANCIAL TABLES (SNAP) */}
            <section id="20" className="space-y-12">
               <div className="flex items-center gap-6 mb-16">
                  <BarChart3 size={48} className="text-gold-600" />
                  <h2 className="text-slate-950 font-serif text-5xl md:text-7xl italic font-black tracking-tight uppercase">20. Operational Pro-forma</h2>
               </div>
               <div className="bg-white border-2 border-slate-200 rounded-[5rem] overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-[#FDFBF7] border-b-2 border-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">
                           <th className="px-10 py-10">Fiscal Year</th>
                           <th className="px-10 py-10 text-right">Revenue (Cr)</th>
                           <th className="px-10 py-10 text-right">EBITDA (Cr)</th>
                           <th className="px-10 py-10 text-right">Occupancy %</th>
                           <th className="px-10 py-10 text-right">DSCR Rating</th>
                        </tr>
                     </thead>
                     <tbody className="text-slate-600 font-mono text-base">
                        {[
                           { y: "Year 4 (Launch)", r: "68.5", e: "22.4", o: "55%", d: "1.42x" },
                           { y: "Year 5", r: "82.4", e: "28.8", o: "60%", d: "1.55x" },
                           { y: "Year 6", r: "118.0", e: "48.0", o: "70%", d: "1.85x" },
                           { y: "Year 7 (Stab.)", r: "155.0", e: "72.5", o: "75%", d: "2.10x" },
                        ].map((row, i) => (
                           <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-emerald-50/20 transition-all duration-500">
                              <td className="px-10 py-8 font-sans font-black text-slate-950">{row.y}</td>
                              <td className="px-10 py-8 text-right font-black text-slate-900">₹{row.r}</td>
                              <td className="px-10 py-8 text-right font-black text-gold-600">₹{row.e}</td>
                              <td className="px-10 py-8 text-right font-bold">{row.o}</td>
                              <td className="px-10 py-8 text-right font-bold text-emerald-600">{row.d}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="p-12 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 italic">
                     <span>*Stabilization Threshold met at Year 7. Yield on Cost: 20.7%</span>
                     <span className="flex items-center gap-4 mt-6 md:mt-0"><Percent size={14} className="text-gold-500" /> Hurdle Basis: 10.2% WACC</span>
                  </div>
               </div>
            </section>

            {/* DOCUMENT CLOSING */}
            <section className="pt-32 border-t-8 border-slate-950 text-center space-y-24 print:border-black">
               <div className="flex flex-col items-center">
                  <div className="w-64 h-64 rounded-full border-8 border-gold-500/20 border-t-gold-500 flex items-center justify-center mb-16 shadow-gold-glow animate-spin-slow group relative">
                    <ShieldCheck size={110} className="text-gold-500 absolute" style={{animation: 'none'}} />
                  </div>
                  <h3 className="text-slate-950 font-serif text-7xl italic font-black tracking-tighter uppercase">Audit Confirmation</h3>
                  <p className="text-slate-400 text-3xl font-light max-w-5xl mx-auto italic mt-12 leading-[1.1]">
                    "This dossier serves as the definitive institutional source of truth for SIRSHUKK GRAND TOWERS. All metrics—financial, physical, and regulatory—are synchronized with the 2025 Asset Ledger."
                  </p>
               </div>
               
               <div className="flex flex-col md:flex-row justify-center gap-48 items-center mb-40">
                  <div className="text-center">
                    <div className="w-56 h-px bg-slate-300 mx-auto mb-12"></div>
                    <span className="text-[13px] font-black uppercase tracking-[0.4em] text-slate-400">Chief Investment Officer</span>
                  </div>
                  <div className="text-center">
                    <div className="w-56 h-px bg-slate-300 mx-auto mb-12"></div>
                    <span className="text-[13px] font-black uppercase tracking-[0.4em] text-slate-400">Master Structural Auditor</span>
                  </div>
                  <div className="text-center">
                    <div className="w-56 h-px bg-slate-300 mx-auto mb-12"></div>
                    <span className="text-[13px] font-black uppercase tracking-[0.4em] text-slate-400">Director of Compliance</span>
                  </div>
               </div>

               <div className="pt-32 border-t border-slate-100 max-w-4xl mx-auto pb-40">
                  <p className="text-slate-300 text-[13px] font-black uppercase tracking-[0.5em] italic mb-12 print:text-black">
                    *STRICTLY CONFIDENTIAL INSTITUTIONAL AUDIT. LS INTERNATIONAL (C) 2025.
                  </p>
                  <div className="flex justify-center items-center gap-12 grayscale opacity-20">
                    <Logo className="w-16 h-16" />
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-[1em]">V.18.0 MASTER SYNC</div>
                      <div className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400 mt-2">JANUARY 2025 RELEASE</div>
                    </div>
                  </div>
               </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
