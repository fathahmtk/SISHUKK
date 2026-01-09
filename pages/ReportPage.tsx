import React from 'react';
import { ArrowLeft, FileText, ShieldCheck, Landmark, BarChart3, Layers, Globe, Zap, Printer, Download, CheckCircle2, Info, Activity, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';

const ReportPage: React.FC = () => {
  const sections = [
    {
      title: "01. Executive Thesis",
      content: "SIRSHUKK GRAND TOWERS is an institutional-grade hospitality asset engineered for the Guruvayur spiritual corridor. Conceived as a 'Visual Monopoly,' the asset leverages architectural scarcity to drive disproportionate RevPAR and banqueting yields in a supply-void luxury market.",
      metrics: ["Target IRR: 24.2%", "MOIC: 3.5x", "Equity Multiplier: 3.5x"]
    },
    {
      title: "02. Market Dynamics",
      content: "The asset targets the 12M+ annual pilgrimage footfall of Guruvayur. Market analysis identifies an 'Inelastic Ritual Economy' where spiritual spend is recession-proof. SGT captures the absolute HNW and NRI demographic through first-mover advantage.",
      metrics: ["Annual Footfall: 12M+", "NRI Capture: 85%", "Daily Ceremonies: 250+"]
    },
    {
      title: "03. Capital Architecture",
      content: "The ₹350 Crore capital stack is optimized through 100% unencumbered land equity. Front-loaded CapEx prioritizes structural landmark status and high-margin ceremonial volumes, ensuring a defensive valuation floor.",
      metrics: ["Total Capex: ₹350 Cr", "Equity: 40%", "Debt: 60%"]
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-40 animate-fade-in print:bg-white print:pt-0">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Dossier Header */}
        <div className="flex justify-between items-start mb-24 border-b border-slate-200 pb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] hover:text-slate-950 transition-all group print:hidden">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-8">
              <Logo className="w-20 h-20" />
              <div className="h-16 w-px bg-slate-200"></div>
              <div>
                <h1 className="text-slate-950 font-serif text-5xl italic font-black leading-none mb-2">Technical Dossier</h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Institutional Memorandum v.2.5 / SGT-2025-ALPHA</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 print:hidden">
            <button onClick={() => window.print()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-sm active:scale-90">
              <Printer size={20} />
            </button>
            <button className="px-8 py-4 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-3xl flex items-center gap-4 group">
              Export PDF <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Executive Summary Box */}
        <div className="bg-white border border-slate-200 p-16 rounded-[4rem] shadow-3xl mb-32 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <Landmark size={400} className="text-slate-950" />
           </div>
           <div className="relative z-10">
              <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.6em] block mb-10">00. Confidential Executive Summary</span>
              <p className="text-slate-500 text-3xl font-light leading-relaxed italic border-l-4 border-gold-400 pl-12 mb-16">
                "The definitive ₹350 Crore hospitality-led landmark in the South Indian spiritual corridor. A de-risked, high-alpha asset calibrated for institutional exit within a 7-year cycle."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
                {[
                  { l: "Asset Class", v: "Institutional Luxury" },
                  { l: "Valuation Mode", v: "EBITDA Multiple" },
                  { l: "Equity Hurdle", v: "10.2% WACC" },
                  { l: "Liquidity Case", v: "REIT-Ready" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-2">{stat.l}</div>
                    <div className="text-slate-950 font-serif text-2xl italic font-black">{stat.v}</div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Detailed Report Sections */}
        <div className="space-y-32 mb-40">
          {sections.map((section, idx) => (
            <section key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-4 sticky top-40">
                <h3 className="text-slate-950 font-serif text-4xl italic mb-6 leading-none">{section.title}</h3>
                <div className="h-px w-16 bg-gold-400 mb-8"></div>
                <div className="space-y-4">
                  {section.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 text-gold-600 text-[10px] font-black uppercase tracking-widest">
                       <CheckCircle2 size={14} /> {m}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-500 text-xl leading-relaxed font-light mb-12 italic">
                  {section.content}
                </p>
                <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex items-center justify-between group hover:border-gold-300 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-gold-500 group-hover:text-white transition-all">
                       <FileText size={20} />
                    </div>
                    <span className="text-slate-900 text-xs font-black uppercase tracking-widest">Access technical annexure</span>
                  </div>
                  <ArrowLeft size={18} className="rotate-180 text-slate-200 group-hover:text-gold-500 transition-colors" />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Operational & Tech Stack Table */}
        <div className="mb-40">
           <h3 className="text-slate-950 font-serif text-5xl mb-16 italic text-center">Technical Specifications</h3>
           <div className="bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-2xl">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                       <th className="px-12 py-8">System Layer</th>
                       <th className="px-12 py-8">Specification Details</th>
                       <th className="px-12 py-8 text-right">Audit Status</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm">
                    {[
                       { l: "Structural Core", s: "Twin-Tower Reinforced Concrete / 75m Terminal", st: "Verified" },
                       { l: "MEP / HVAC", s: "AI-Managed Magnetic Levitation Chiller Plant", st: "Verified" },
                       { l: "Vertical Logistics", s: "12x High-Velocity MITSUBISHI Cores", st: "Verified" },
                       { l: "Acoustic Insulation", s: "Triple-Glazed DGU Acoustic Barrier Glazing", st: "Verified" },
                       { l: "Digital Security", s: "Institutional Grade BMS / AES-256 ERP Node", st: "Verified" }
                    ].map((row, i) => (
                       <tr key={i} className="border-b border-slate-50 last:border-0 group hover:bg-[#FDFBF7] transition-all">
                          <td className="px-12 py-10 text-slate-900 font-serif text-2xl italic">{row.l}</td>
                          <td className="px-12 py-10 text-slate-500 font-light">{row.s}</td>
                          <td className="px-12 py-10 text-right">
                             <span className="text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 text-[8px] font-black uppercase tracking-widest">
                                {row.st}
                             </span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Compliance Footer */}
        <div className="pt-24 border-t border-slate-200 text-center space-y-12">
           <div className="flex justify-center gap-16">
              <div className="flex flex-col items-center">
                 <ShieldCheck size={32} className="text-gold-500 mb-4" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Governance Sync v2.5</span>
              </div>
              <div className="flex flex-col items-center">
                 <Database size={32} className="text-gold-500 mb-4" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">BIM Level 300 Certified</span>
              </div>
           </div>
           <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em] max-w-2xl mx-auto italic">
             *This report is for authorized institutional use only. All data points are based on Jan 2025 audited milestones.
           </p>
           <Logo className="w-12 h-12 mx-auto opacity-20 grayscale" />
        </div>

      </div>
    </div>
  );
};

export default ReportPage;