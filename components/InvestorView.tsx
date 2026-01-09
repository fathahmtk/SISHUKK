import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ShieldCheck, Activity, Zap, Scale, Terminal, Target, PieChart, TrendingUp, Info, UserCheck, 
  // Add missing ChevronRight and CheckCircle2 icons
  FileCheck, Lock, Globe, FileBadge, IndianRupee, Layers, Briefcase, Workflow, Rocket, Landmark, ClipboardCheck,
  ChevronRight, CheckCircle2
} from 'lucide-react';

import FinancialExecutiveSummary from './FinancialExecutiveSummary.tsx';
import MarketDynamics from './MarketDynamics.tsx';
import InvestmentFramework from './InvestmentFramework.tsx';
import WaterfallChart from './WaterfallChart.tsx';
import ValuationEngine from './ValuationEngine.tsx';
import TenYearForecast from './TenYearForecast.tsx';
import ExitStrategy from './ExitStrategy.tsx';
import RiskSafeguards from './RiskSafeguards.tsx';
import OperationalExcellence from './OperationalExcellence.tsx';
import Team from './Team.tsx';

const VAULT_LINKS = [
  { id: 'v-executive', label: 'Executive Pack', icon: Briefcase },
  { id: 'v-financials', label: 'Financial Info', icon: IndianRupee },
  { id: 'v-operations', label: 'Operations', icon: Workflow },
  { id: 'v-technical', label: 'Technical Pack', icon: Terminal },
  { id: 'v-legal', label: 'Legal/Reg', icon: Landmark },
  { id: 'v-governance', label: 'Governance', icon: UserCheck },
  { id: 'v-risk', label: 'Risk/ESG', icon: ShieldCheck },
  { id: 'v-exit', label: 'Value Realization', icon: Rocket },
];

const VaultSection = ({ children, id, title }: { children?: React.ReactNode; id: string, title?: string }) => (
  <section id={id} className="snap-start min-h-screen w-full flex flex-col items-center relative overflow-hidden bg-onyx-950 border-b border-white/5 py-32">
     <div className="container mx-auto px-10 relative z-10 w-full">
        {title && (
          <div className="mb-20 flex items-center gap-6">
             <div className="w-12 h-px bg-gold-500 opacity-40"></div>
             <h2 className="text-white font-serif text-3xl italic font-black uppercase tracking-tight">{title}</h2>
          </div>
        )}
        <div className="w-full">
           {children}
        </div>
     </div>
  </section>
);

export const InvestorView: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('v-hero');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const handleScroll = () => {
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
      
      const sections = VAULT_LINKS.map(l => document.getElementById(l.id));
      const current = sections.find(s => s && s.getBoundingClientRect().top >= -200 && s.getBoundingClientRect().top <= 400);
      if (current) setActiveSection(current.id);
    };
    
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-full w-full bg-onyx-950 text-white font-sans flex flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-[150]">
        <div className="h-full bg-gold-500 shadow-[0_0_20px_#D4AF37] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Persistent Data Room Nav HUD */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 z-[200] hidden 2xl:flex flex-col gap-5">
         {VAULT_LINKS.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollTo(link.id)}
              className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 border ${
                activeSection === link.id 
                ? 'bg-gold-500 border-gold-500 text-onyx-950 shadow-gold-glow scale-110' 
                : 'bg-white/5 text-slate-500 border-white/10 hover:border-gold-500/50 hover:text-white'
              }`}
            >
               <link.icon size={20} />
               <div className={`absolute left-20 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl`}>
                  {link.label}
               </div>
            </button>
         ))}
      </div>

      <div className="h-10 bg-onyx-950 border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap z-[140] backdrop-blur-3xl pt-1">
        <div className="animate-[scroll_50s_linear_infinite] flex items-center gap-16 text-[8px] font-black uppercase tracking-[0.5em] text-slate-500">
          <span className="flex items-center gap-2 text-gold-400"><Lock size={10} /> SECURE INVESTOR DATA ROOM ACTIVE</span>
          <span className="flex items-center gap-2 text-emerald-400"><Activity size={10} /> PROJECT STATUS: STAGE 02 - PHYSICAL CORE</span>
          <span className="flex items-center gap-2 text-gold-400"><IndianRupee size={10} /> CAPITAL BASIS: ₹350 Cr</span>
          <span className="flex items-center gap-2 text-white"><FileBadge size={10} /> BIM LEVEL 3 COMPLIANCE: 100%</span>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar">
        
        {/* HERO HEADER */}
        <VaultSection id="v-hero">
          <div className="text-center space-y-12 max-w-6xl mx-auto py-24 px-6">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-gold-500 text-[11px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl backdrop-blur-md">
               <Lock size={16} className="text-emerald-500" /> Authorized Data Room Access
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.75] tracking-tighter mb-12 italic">
              Investor <br/><span className="gold-gradient-text font-black">Vault.</span>
            </h1>
            <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic opacity-90">
              "Providing full access to project documentation required for institutional due diligence and investment committee review."
            </p>
            <div className="pt-16"><ChevronDown className="text-gold-500 mx-auto animate-bounce" size={48} /></div>
          </div>
        </VaultSection>

        {/* SECTION 1: EXECUTIVE PACK */}
        <VaultSection id="v-executive" title="Section 1 – Executive Pack">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-10">
                <p className="text-slate-400 text-2xl font-light italic leading-relaxed">"High-level materials intended for internal circulation and initial evaluation."</p>
                <div className="space-y-6">
                   {['Full Project Report', 'One-Page IC Summary', 'Investment Highlights Presentation'].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-gold-500 transition-all">
                         <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-onyx-950 font-black italic">0{i+1}</div>
                         <span className="text-white text-xl font-serif italic">{item}</span>
                      </div>
                   ))}
                </div>
             </div>
             <FinancialExecutiveSummary />
          </div>
        </VaultSection>

        {/* SECTION 2: FINANCIAL INFO */}
        <VaultSection id="v-financials" title="Section 2 – Financial Information">
           <div className="space-y-24">
              <TenYearForecast />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all">
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-6">Master Model</h4>
                    <p className="text-slate-300 text-lg mb-8">Integrated Dynamic Financial Model (Excel Format)</p>
                    <button className="flex items-center gap-4 text-white text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-2 group">
                       Initialize Sync <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all">
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-6">Projections</h4>
                    <p className="text-slate-300 text-lg mb-8">10-Year High-Precision Cash Flow Analysis (PDF)</p>
                    <button className="flex items-center gap-4 text-white text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-2 group">
                       Audit Document <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all">
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-6">Sensitivity</h4>
                    <p className="text-slate-300 text-lg mb-8">Stress Testing & Scenario Arbitrage Analysis</p>
                    <button className="flex items-center gap-4 text-white text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-2 group">
                       Open Matrix <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </VaultSection>

        {/* SECTION 3: BUSINESS & OPERATIONS */}
        <VaultSection id="v-operations" title="Section 3 – Business & Operations">
           <OperationalExcellence />
        </VaultSection>

        {/* SECTION 4: DEVELOPMENT & TECHNICAL */}
        <VaultSection id="v-technical" title="Section 4 – Development & Technical">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 bg-onyx-900 border border-white/10 p-12 rounded-[4rem] flex flex-col justify-between h-[600px] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Terminal size={300} className="text-gold-500" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-white font-serif text-5xl leading-none italic mb-10">Design <br/>Dossier.</h3>
                    <p className="text-slate-400 text-lg italic leading-relaxed mb-10 border-l border-gold-500 pl-8">"Technical blueprints supporting development feasibility and execution readiness."</p>
                 </div>
                 <div className="relative z-10 space-y-4">
                    {['Architectural Package', 'Master Planning Maps', 'BIM v3.0 Logs', 'EPC Task Index'].map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-3">
                          {item} <Activity size={12} className="text-emerald-500 animate-pulse" />
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-8">
                 <InvestmentFramework />
              </div>
           </div>
        </VaultSection>

        {/* SECTION 5: LEGAL & REGULATORY */}
        <VaultSection id="v-legal" title="Section 5 – Legal & Regulatory">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#FDFBF7]/5 border border-white/10 p-12 rounded-[4rem] group hover:border-gold-500 transition-all">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-onyx-950">
                       <Landmark size={28} />
                    </div>
                    <h4 className="text-white font-serif text-3xl italic">Compliance Archive</h4>
                 </div>
                 <ul className="space-y-6">
                    {['100% Freehold Land Title', 'Zoning & Development Approvals', 'Environmental (EC) Clearance', 'RERA Registration Documents'].map((item, i) => (
                       <li key={i} className="flex items-center gap-6 group/li">
                          <CheckCircle2 size={18} className="text-gold-500 opacity-40 group-hover/li:opacity-100 transition-opacity" />
                          <span className="text-slate-400 text-lg group-hover/li:text-white transition-colors">{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="bg-slate-900/40 border border-white/10 p-12 rounded-[4rem] relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <ClipboardCheck size={200} className="text-white" />
                 </div>
                 <p className="text-white font-serif text-4xl mb-8 italic">Audit-Ready Protocol.</p>
                 <p className="text-slate-500 text-lg leading-relaxed mb-10">Access to legal documents is governed through strict NDA-based digital protocols. Authorization level 4 required.</p>
                 <button className="w-fit px-10 py-5 bg-gold-500 text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-xl hover:bg-white transition-all">
                    Initiate Clearance
                 </button>
              </div>
           </div>
        </VaultSection>

        {/* SECTION 6: GOVERNANCE */}
        <VaultSection id="v-governance" title="Section 6 – Governance & Structure">
           <Team />
        </VaultSection>

        {/* SECTION 7: RISK & ESG */}
        <VaultSection id="v-risk" title="Section 7 – Risk & ESG">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                 <RiskSafeguards />
              </div>
              <div className="lg:col-span-5 space-y-8">
                 <div className="bg-emerald-950/20 border border-emerald-500/20 p-12 rounded-[4rem] h-full flex flex-col justify-between">
                    <div>
                       <Globe size={48} className="text-emerald-500 mb-10" />
                       <h4 className="text-white font-serif text-4xl italic mb-6">ESG Commitment</h4>
                       <p className="text-slate-400 text-lg leading-relaxed italic">"Sustainability is integrated at the design core. From zero-discharge water cycles to local-first supply chains, we ensure long-term asset stewardship."</p>
                    </div>
                    <div className="pt-10 border-t border-emerald-500/10 grid grid-cols-2 gap-8">
                       <div>
                          <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Water Audit</div>
                          <div className="text-white font-bold">100% Circular</div>
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Energy Profile</div>
                          <div className="text-white font-bold">Gold Certified</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </VaultSection>

        {/* SECTION 8: EXIT */}
        <VaultSection id="v-exit" title="Section 8 – Exit & Value Realization">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <ExitStrategy />
              <ValuationEngine />
           </div>
        </VaultSection>

        {/* FINAL CLOSING STRIP */}
        <section className="py-40 bg-onyx-950 text-center relative overflow-hidden border-t border-white/5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]"></div>
           <div className="max-w-4xl mx-auto relative z-10 space-y-12">
              <ShieldCheck size={96} className="text-gold-500 mx-auto animate-glint" />
              <h2 className="text-white font-serif text-5xl md:text-8xl italic font-black leading-[0.85] tracking-tighter">Engagement <br/><span className="gold-gradient-text not-italic">Authorized.</span></h2>
              <p className="text-slate-400 text-2xl font-light italic leading-relaxed">"For clarifications or further engagement, authorized investors may request direct discussions with the project executive team."</p>
              <div className="flex justify-center gap-10">
                 <button className="px-16 py-8 bg-gold-500 text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] shadow-3xl hover:bg-white transition-all">
                    Schedule Board Sync
                 </button>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};
