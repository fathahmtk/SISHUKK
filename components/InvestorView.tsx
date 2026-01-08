import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Lock, Download, 
  Rocket, Mail, Copy, Check, ShieldCheck, ArrowUpRight, ArrowRight, FileText, Scale, Eye, Activity, Zap, ShieldAlert, Cpu
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

export const InvestorView: React.FC = () => {
  const [gateStep, setGateStep] = useState<'nda' | 'password' | 'authorized'>('nda');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      setGateStep('authorized');
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
        <div className="max-w-3xl w-full glass-panel p-12 rounded-[3.5rem] relative z-10 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-fade-in-up institutional-border">
           <div className="text-center mb-12">
              <ShieldCheck size={56} className="text-gold-500 mx-auto mb-6" />
              <h2 className="text-white font-serif text-5xl mb-4 tracking-tight uppercase">Access Protocol</h2>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.6em] font-black italic">Private Placement Memorandum Logged (v2.5)</p>
           </div>
           
           <div className="bg-black/60 border border-white/5 p-10 rounded-3xl h-72 overflow-y-auto custom-scrollbar mb-12 text-slate-400 text-[11px] leading-relaxed font-mono italic">
              <p className="mb-6 text-gold-500 font-black tracking-widest text-[11px]">STRICT CONFIDENTIALITY NOTICE (SGT-MEMO-2025)</p>
              <p className="mb-4">This Digital Prospectus contains Proprietary and Confidential information regarding the SIRSHUKK GRAND TOWERS project (The "Asset").</p>
              <p className="mb-4">1. NON-DISCLOSURE: Recipient agrees to hold all Technical Specifications, Financial Models, and Yield Projections in strict confidence.</p>
              <p className="mb-4">2. USE LIMITATION: Information is provided solely for evaluating capital participation. No content may be reproduced without express written consent.</p>
              <p className="mb-4">3. FINANCIAL ACCURACY: Projections are based on audited market data (Jan 2025 update).</p>
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
                onClick={() => window.location.href = '/'}
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
        {/* Biometric cue animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-gold-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-gold-500/5 rounded-full animate-ping"></div>

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
                type="password" 
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENCRYPTED KEY"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-7 text-white text-center tracking-[0.6em] focus:outline-none focus:border-gold-500 transition-all font-mono text-lg shadow-inner placeholder:text-slate-800"
              />
              {error && <p className="text-rose-500 text-[10px] text-center uppercase tracking-widest font-black animate-pulse">{error}</p>}
              <button className="w-full bg-gold-500 text-onyx-950 py-7 rounded-2xl font-black uppercase tracking-[0.5em] text-[12px] hover:bg-white transition-all shadow-[0_20px_60px_rgba(212,175,55,0.3)] active:scale-95">
                Decrypt Dossier
              </button>
           </form>
           <p className="mt-12 text-center text-slate-800 text-[9px] uppercase tracking-[0.6em] font-black italic">Hint: Asset Brand Name + Target Year</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-onyx-950 text-white font-sans flex flex-col overflow-hidden relative">
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-[150]">
        <div className="h-full bg-gold-500 shadow-[0_0_20px_#D4AF37] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Security Ticker for the Vault */}
      <div className="h-10 bg-onyx-950 border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap z-[140] backdrop-blur-3xl institutional-border">
        <div className="animate-[scroll_40s_linear_infinite] flex items-center gap-16 text-[8px] font-black uppercase tracking-[0.5em] text-slate-500">
          <span className="flex items-center gap-2 text-gold-400"><ShieldCheck size={10} /> SESSION: SECURE</span>
          <span className="flex items-center gap-2"><Activity size={10} /> REAL-TIME YIELD: 24.2%</span>
          <span className="flex items-center gap-2 text-gold-400"><Zap size={10} /> EQUITY TRACER: COMMITTED</span>
          <span className="flex items-center gap-2"><Scale size={10} /> ASSET CLASS: INSTITUTIONAL</span>
          <span className="flex items-center gap-2 text-gold-400"><ShieldCheck size={10} /> DATA LOCK: V.2.5</span>
          <span className="flex items-center gap-2 text-gold-400"><ShieldCheck size={10} /> SESSION: SECURE</span>
          <span className="flex items-center gap-2"><Activity size={10} /> REAL-TIME YIELD: 24.2%</span>
          <span className="flex items-center gap-2 text-gold-400"><Zap size={10} /> EQUITY TRACER: COMMITTED</span>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
        <section className="min-h-screen flex flex-col items-center justify-center relative p-12 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_75%)] pointer-events-none"></div>
          <div className="relative z-10 text-center space-y-12 max-w-6xl animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-300 text-[11px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl backdrop-blur-md">
               <ShieldCheck size={16} className="animate-pulse" /> Decryption Sequence Complete
            </div>
            <h1 className="text-7xl md:text-[11.5rem] font-serif leading-[0.75] tracking-tighter mb-12 italic">
              The Sovereign <br/><span className="gold-gradient-text font-black">Ledger.</span>
            </h1>
            <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic opacity-90 tracking-tight">
              "An institutional roadmap for the Kerala spiritual corridor's definitive asset."
            </p>
            <div className="pt-24">
               <ChevronDown className="text-gold-500 mx-auto animate-bounce" size={48} />
            </div>
          </div>
        </section>

        {/* Presentation Core Stack */}
        <div className="max-w-[1600px] mx-auto">
          <FinancialExecutiveSummary />
          <MarketDynamics />
          <CompetitorMatrix />
          <InvestmentFramework />
          <WaterfallChart />
          <ValuationEngine />
          <InvestmentCalculator />
          <TenYearForecast />
          <ExitStrategy />
          <RiskSafeguards />
          <OperationalExcellence />
          <ExecutionTimeline />
          <ComplianceTimeline />
          <Team />
        </div>

        {/* Integrated Exit & Teaser Pack */}
        <section className="py-64 bg-onyx-900 border-t border-white/5 relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="bg-onyx-950 border border-white/10 rounded-[5rem] p-16 md:p-32 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                 <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                   <Mail size={400} className="text-white" />
                 </div>
                 <div className="flex justify-between items-center mb-24 relative z-10">
                    <div className="flex items-center gap-8">
                       <ShieldAlert size={32} className="text-gold-500" />
                       <span className="text-[13px] font-black uppercase tracking-[0.6em] text-white">Institutional Teaser Pack</span>
                    </div>
                    <button onClick={handleCopy} className={`flex items-center gap-4 px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${copied ? 'bg-emerald-500 text-onyx-950' : 'bg-white/5 hover:bg-gold-500 hover:text-onyx-950 text-slate-300 border border-white/10'}`}>
                       {copied ? <Check size={20} /> : <Copy size={20} />} {copied ? 'Copied' : 'Copy Pitch'}
                    </button>
                 </div>
                 <div className="p-16 bg-black/60 rounded-[4rem] border border-white/5 text-slate-400 font-mono text-[12px] leading-relaxed max-h-[600px] overflow-y-auto custom-scrollbar whitespace-pre-wrap italic relative z-10 institutional-border">
                    {PITCH_LETTER}
                 </div>
              </div>
           </div>
        </section>

        {/* Secure Logout Footer */}
        <footer className="h-48 bg-black border-t border-white/5 flex flex-col items-center justify-center text-center gap-6">
           <div className="text-[10px] font-black uppercase tracking-[1em] text-slate-800">
             Institutional Portfolio | Encrypted Session
           </div>
           <button 
             onClick={() => window.location.reload()} 
             className="text-gold-500 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors"
           >
             Terminate Secure Access
           </button>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #111827; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
