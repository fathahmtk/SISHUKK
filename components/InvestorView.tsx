import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Lock, ShieldCheck, Check, Mail, Copy, Activity, Zap, Scale, ShieldAlert, Terminal, Loader2
} from 'lucide-react';

import MarketDynamics from './MarketDynamics.tsx';
import CompetitorMatrix from './CompetitorMatrix.tsx';
import InvestmentFramework from './InvestmentFramework.tsx';
import WaterfallChart from './WaterfallChart.tsx';
import ValuationEngine from './ValuationEngine.tsx';
import InvestmentCalculator from './InvestmentCalculator.tsx';
import TenYearForecast from './TenYearForecast.tsx';
import ExitStrategy from './ExitStrategy.tsx';
import RiskSafeguards from './RiskSafeguards.tsx';
import OperationalExcellence from './OperationalExcellence.tsx';
import ExecutionTimeline from './ExecutionTimeline.tsx';
import ComplianceTimeline from './ComplianceTimeline.tsx';
import FinancialExecutiveSummary from './FinancialExecutiveSummary.tsx';
import Team from './Team.tsx';

const PITCH_LETTER = `Subject: Strategic Investment: The 7-Star Gateway to Guruvayur (₹350 Cr)

Dear Investment Committee,

Following our market audit of the South Indian pilgrimage corridor, we are highlighting SIRSHUKK Grand Towers—a high-yield hospitality asset in Guruvayur, Kerala.

Market Thesis:
- Annual Footfall: 30M+ (Recession-proof spiritual economy).
- Supply Void: Zero comparable 7-star luxury assets within 10km.
- Moat: Iconic Twin-Tower design with the region's largest ballroom (15,000 sq ft).

Investment Metrics:
- Targeted IRR: 24.2%
- Equity Multiplier: 3.5x (7-Year Horizon)
- Status: Land Secured (Debt-Free), NOCs cleared, Construction Active.

Best regards,
Institutional Partner Portfolio`;

const VaultSection = ({ children, id }: { children?: React.ReactNode; id: string }) => (
  <section id={id} className="snap-start h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-onyx-950 border-b border-white/5">
     <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center justify-center">
        <div className="w-full">
           {children}
        </div>
     </div>
  </section>
);

export const InvestorView: React.FC = () => {
  const [gateStep, setGateStep] = useState<'nda' | 'password' | 'decryption' | 'authorized'>('nda');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gateStep === 'decryption') {
      const timer = setTimeout(() => setGateStep('authorized'), 3000);
      return () => clearTimeout(timer);
    }
  }, [gateStep]);

  useEffect(() => {
    const el = containerRef.current;
    if (gateStep !== 'authorized' || !el) return;
    
    const handleScroll = () => {
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [gateStep]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === 'SIRSHUKK2026') {
      setGateStep('decryption');
      setError('');
    } else {
      setError('Invalid Institutional Credentials');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PITCH_LETTER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (gateStep === 'nda') {
    return (
      <div className="h-full w-full bg-onyx-950 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="max-w-3xl w-full glass-panel p-12 rounded-[3.5rem] relative z-10 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-fade-in-up institutional-border bg-black/40 backdrop-blur-3xl">
           <div className="text-center mb-12">
              <ShieldCheck size={56} className="text-gold-500 mx-auto mb-6" />
              <h2 className="text-white font-serif text-5xl mb-4 tracking-tight uppercase">Access Protocol</h2>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.6em] font-black italic">Private Placement Memorandum Logged (v2.5)</p>
           </div>
           
           <div className="bg-black/60 border border-white/5 p-10 rounded-3xl h-72 overflow-y-auto custom-scrollbar mb-12 text-slate-400 text-[11px] leading-relaxed font-mono italic">
              <p className="mb-6 text-gold-500 font-black tracking-widest text-[11px]">STRICT CONFIDENTIALITY NOTICE (SGT-MEMO-2025)</p>
              <p className="mb-4">This Digital Prospectus contains Proprietary and Confidential information regarding the SIRSHUKK GRAND TOWERS project.</p>
              <p className="mb-4">1. NON-DISCLOSURE: Recipient agrees to hold all Technical Specifications, Financial Models, and Yield Projections in strict confidence.</p>
              <p className="mb-4">2. USE LIMITATION: Information is provided solely for evaluating capital participation.</p>
              <p>By clicking "Authorize," you formally execute the Master NDA protocol.</p>
           </div>

           <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setGateStep('password')}
                className="flex-1 bg-gold-500 text-onyx-950 py-7 rounded-2xl font-black uppercase tracking-[0.5em] text-[11px] hover:bg-white transition-all shadow-3xl active:scale-95"
              >
                Authorize Access
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="flex-1 bg-white/5 text-slate-400 py-7 rounded-2xl font-black uppercase tracking-[0.5em] text-[11px] hover:bg-white/10 transition-all border border-white/10"
              >
                Decline
              </button>
           </div>
        </div>
      </div>
    );
  }

  if (gateStep === 'password') {
    return (
      <div className="h-full w-full bg-onyx-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.05)_0%,_transparent_60%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-gold-500/10 rounded-full animate-pulse-slow"></div>
        
        <div className="relative z-10 w-full max-w-md animate-fade-in-up">
           <div className="text-center mb-16">
              <div className="w-24 h-24 border border-gold-500/20 rotate-45 flex items-center justify-center mx-auto mb-12 shadow-3xl bg-onyx-900 group">
                <Lock size={36} className="text-gold-500 -rotate-45 group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-white font-serif text-5xl mb-6 tracking-tighter italic">Enter Vault</h2>
              <p className="text-slate-500 text-[10px] tracking-[0.5em] uppercase font-black">Institutional Key Required</p>
           </div>
           <form onSubmit={handleLogin} className="space-y-8">
              <input 
                type="password" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ENCRYPTED KEY"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-7 text-white text-center tracking-[0.6em] focus:outline-none focus:border-gold-500 transition-all font-mono text-lg placeholder:text-slate-800"
              />
              {error && <p className="text-rose-500 text-[10px] text-center uppercase tracking-widest font-black animate-pulse">{error}</p>}
              <button className="w-full bg-gold-500 text-onyx-950 py-7 rounded-2xl font-black uppercase tracking-[0.5em] text-[12px] hover:bg-white transition-all shadow-3xl active:scale-95">
                Decrypt Dossier
              </button>
           </form>
        </div>
      </div>
    );
  }

  if (gateStep === 'decryption') {
    return (
      <div className="h-full w-full bg-onyx-950 flex flex-col items-center justify-center p-8 overflow-hidden text-gold-500">
         <div className="w-20 h-20 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mb-10"></div>
         <div className="text-center font-mono space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Initializing Decryption Sequence...</p>
            <div className="max-w-xs overflow-hidden h-1 w-64 bg-white/10 rounded-full mx-auto">
               <div className="h-full bg-gold-500 animate-[loading_3s_ease-in-out]"></div>
            </div>
            <div className="text-[8px] opacity-40 uppercase tracking-widest pt-4">
               NODE_SYNC: 100% | AES-256: VALID | MEMO_LOAD: ACTIVE
            </div>
         </div>
         <style>{`
            @keyframes loading {
               0% { width: 0%; }
               100% { width: 100%; }
            }
         `}</style>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-onyx-950 text-white font-sans flex flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-[150]">
        <div className="h-full bg-gold-500 shadow-[0_0_20px_#D4AF37] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="h-10 bg-onyx-950 border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap z-[140] backdrop-blur-3xl pt-1">
        <div className="animate-[scroll_40s_linear_infinite] flex items-center gap-16 text-[8px] font-black uppercase tracking-[0.5em] text-slate-500">
          <span className="flex items-center gap-2 text-gold-400"><ShieldCheck size={10} /> SESSION: SECURE</span>
          <span className="flex items-center gap-2"><Activity size={10} /> REAL-TIME YIELD: 24.2%</span>
          <span className="flex items-center gap-2 text-gold-400"><Zap size={10} /> EQUITY TRACER: COMMITTED</span>
          <span className="flex items-center gap-2"><Scale size={10} /> ASSET CLASS: INSTITUTIONAL</span>
          <span className="flex items-center gap-2 text-gold-400"><ShieldCheck size={10} /> SESSION: SECURE</span>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar">
        
        <VaultSection id="v-hero">
          <div className="text-center space-y-12 max-w-6xl mx-auto py-24 px-6">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-300 text-[11px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl backdrop-blur-md">
               <ShieldCheck size={16} className="animate-pulse" /> Decryption Sequence Complete
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.75] tracking-tighter mb-12 italic">
              The Sovereign <br/><span className="gold-gradient-text font-black">Ledger.</span>
            </h1>
            <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic opacity-90 tracking-tight">
              "An institutional roadmap for the Kerala spiritual corridor's definitive asset."
            </p>
            <div className="pt-16">
               <ChevronDown className="text-gold-500 mx-auto animate-bounce" size={48} />
            </div>
          </div>
        </VaultSection>

        <VaultSection id="v-summary"><FinancialExecutiveSummary /></VaultSection>
        <VaultSection id="v-market"><MarketDynamics /></VaultSection>
        <VaultSection id="v-moat"><CompetitorMatrix /></VaultSection>
        <VaultSection id="v-capital"><InvestmentFramework /></VaultSection>
        <VaultSection id="v-waterfall"><WaterfallChart /></VaultSection>
        <VaultSection id="v-valuation"><ValuationEngine /></VaultSection>
        <VaultSection id="v-calc"><InvestmentCalculator /></VaultSection>
        <VaultSection id="v-forecast"><TenYearForecast /></VaultSection>
        <VaultSection id="v-exit"><ExitStrategy /></VaultSection>
        <VaultSection id="v-risk"><RiskSafeguards /></VaultSection>
        <VaultSection id="v-ops"><OperationalExcellence /></VaultSection>
        <VaultSection id="v-timeline"><ExecutionTimeline /></VaultSection>
        <VaultSection id="v-compliance"><ComplianceTimeline /></VaultSection>
        <VaultSection id="v-team"><Team /></VaultSection>

        <VaultSection id="v-teaser">
          <div className="container mx-auto px-6 max-w-5xl">
              <div className="bg-onyx-900 border border-white/10 rounded-[5rem] p-16 md:p-24 relative overflow-hidden group shadow-3xl">
                 <div className="flex justify-between items-center mb-16 relative z-10">
                    <div className="flex items-center gap-8">
                       <ShieldAlert size={32} className="text-gold-500" />
                       <span className="text-[13px] font-black uppercase tracking-[0.6em] text-white">Institutional Teaser Pack</span>
                    </div>
                    <button onClick={handleCopy} className={`flex items-center gap-4 px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${copied ? 'bg-emerald-500 text-onyx-950' : 'bg-white/5 hover:bg-gold-500 hover:text-onyx-950 text-slate-300 border border-white/10'}`}>
                       {copied ? <Check size={20} /> : <Copy size={20} />} {copied ? 'Copied' : 'Copy Pitch'}
                    </button>
                 </div>
                 <div className="p-12 bg-black/60 rounded-[4rem] border border-white/5 text-slate-400 font-mono text-[12px] leading-relaxed max-h-[450px] overflow-y-auto custom-scrollbar whitespace-pre-wrap italic relative z-10">
                    {PITCH_LETTER}
                 </div>
              </div>
          </div>
        </VaultSection>

        <section className="snap-start h-48 bg-black border-t border-white/5 flex flex-col items-center justify-center text-center gap-6">
           <div className="text-[10px] font-black uppercase tracking-[1em] text-slate-800">Institutional Portfolio | Encrypted Session</div>
           <button onClick={() => window.location.reload()} className="text-gold-500 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">
             Terminate Secure Access
           </button>
        </section>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};