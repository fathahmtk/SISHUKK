import React from 'react';
import { ArrowLeft, FileText, ShieldCheck, Landmark, Printer, Download, CheckCircle2, Database, AlertCircle, TrendingUp, Activity, Scale, Calendar, Target, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';

const ReportPage: React.FC = () => {
  const thesisPoints = [
    {
      title: "01. Executive Thesis",
      content: "SIRSHUKK GRAND TOWERS is an institutional-grade hospitality asset engineered for the Guruvayur spiritual corridor. Conceived as a 'Visual Monopoly,' the Twin-Tower asset leverages architectural scarcity to drive disproportionate RevPAR and banqueting yields in a supply-void luxury market.",
      kpi: "24.2% IRR"
    },
    {
      title: "02. Market Dynamics",
      content: "The asset targets the 12M+ annual pilgrimage footfall of Guruvayur. Market analysis identifies an 'Inelastic Ritual Economy' where spiritual spend is recession-proof. SGT captures the absolute HNW and NRI demographic through first-mover advantage.",
      kpi: "12M+ Footfall"
    },
    {
      title: "03. Capital Architecture",
      content: "The ₹350 Crore capital stack is optimized through 100% unencumbered land equity. Front-loaded CapEx prioritizes structural landmark status (Twin Towers + Arch) and high-margin ceremonial volumes.",
      kpi: "Debt-Free Land"
    }
  ];

  const financialData = [
    { year: "Year 1 (Stabilization)", gross: "68.5", opex: "46.1", ebitda: "22.4", margin: "32.7%", dscr: "0.85x" },
    { year: "Year 2 (Ramp Up)", gross: "84.2", opex: "45.6", ebitda: "38.6", margin: "45.8%", dscr: "1.24x" },
    { year: "Year 3 (Growth)", gross: "102.1", opex: "50.9", ebitda: "51.2", margin: "50.1%", dscr: "1.65x" },
    { year: "Year 4 (Peak)", gross: "125.4", opex: "60.6", ebitda: "64.8", margin: "51.6%", dscr: "2.10x" },
    { year: "Year 5 (Mature)", gross: "148.9", opex: "70.7", ebitda: "78.2", margin: "52.5%", dscr: "2.45x" },
  ];

  const unitMix = [
    { type: "Tower A: Transient", keys: "200", size: "450 sqft", adr: "₹10,500", rev: "High Velocity" },
    { type: "Tower B: Long-Stay", keys: "220", size: "500 sqft", adr: "₹12,500", rev: "Stable Yield" },
    { type: "Imperial Suites", keys: "20", size: "950 sqft", adr: "₹25,000", rev: "Alpha Driver" },
    { type: "Total Inventory", keys: "440", size: "350k GSF", adr: "₹12,200", rev: "Blended Avg" },
  ];

  const swot = [
    { label: "Strengths", items: ["1.5km Temple Proximity", "Twin-Tower Landmark Status", "Largest Banquet Hall (3k Pax)"], color: "bg-emerald-50 text-emerald-900 border-emerald-100" },
    { label: "Weaknesses", items: ["High Initial Capex (Structure)", "New Brand Entry", "Complex Logistics (Twin Core)"], color: "bg-slate-50 text-slate-900 border-slate-200" },
    { label: "Opportunities", items: ["Wedding Destination Hub", "Medical Tourism Wing", "REIT Acquisition Target"], color: "bg-blue-50 text-blue-900 border-blue-100" },
    { label: "Threats", items: ["Policy Changes (CRZ)", "Construction Inflation", "Labor Shortage"], color: "bg-rose-50 text-rose-900 border-rose-100" },
  ];

  const risks = [
    { cat: "Financial", risk: "Interest Rate Sensitivity", impact: "High", mitigation: "Debt service coverage ratio (DSCR) stressed at 2.1x." },
    { cat: "Operational", risk: "Talent Acquisition", impact: "Medium", mitigation: "Dedicated staff housing block included in masterplan." },
    { cat: "Market", risk: "New Competition", impact: "Low", mitigation: "10km radius land scarcity creates natural barrier." },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-40 animate-fade-in print:bg-white print:pt-0 print:pb-0">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Dossier Header */}
        <div className="flex justify-between items-start mb-16 border-b border-slate-900/10 pb-12 print:mb-8 print:pb-6 print:border-black">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] hover:text-slate-950 transition-all group print:hidden">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-8">
              <Logo className="w-20 h-20 print:w-16 print:h-16 print:grayscale" />
              <div className="h-16 w-px bg-slate-200 print:bg-black"></div>
              <div>
                <h1 className="text-slate-950 font-serif text-5xl italic font-black leading-none mb-2 print:text-4xl">Technical Dossier</h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] print:text-black">Institutional Memorandum v.2.5 / SGT-2025-ALPHA</p>
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
        <div className="bg-white border border-slate-200 p-12 md:p-16 rounded-[3rem] shadow-sm mb-24 relative overflow-hidden group print:shadow-none print:border-2 print:border-black print:rounded-xl print:p-8 print:mb-12 break-inside-avoid">
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                 <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.6em] block print:text-black">00. Confidential Executive Summary</span>
                 <Scale size={24} className="text-gold-500 print:hidden" />
              </div>
              <p className="text-slate-900 text-3xl md:text-4xl font-serif italic leading-tight mb-16 print:text-black print:text-2xl">
                "The definitive ₹350 Crore hospitality-led landmark in the South Indian spiritual corridor. A de-risked, Twin-Tower asset calibrated for institutional exit within a 7-year cycle."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-100 print:border-black">
                {[
                  { l: "Asset Class", v: "Institutional Luxury" },
                  { l: "Valuation Mode", v: "EBITDA Multiple" },
                  { l: "Equity Hurdle", v: "10.2% WACC" },
                  { l: "Liquidity Case", v: "REIT-Ready" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2 print:text-black">{stat.l}</div>
                    <div className="text-slate-950 font-serif text-2xl italic font-black print:text-black">{stat.v}</div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Core Thesis Grid */}
        <div className="grid grid-cols-1 gap-16 mb-32 print:mb-12 print:gap-8">
          {thesisPoints.map((section, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-slate-100 pb-16 last:border-0 print:pb-8 print:border-black break-inside-avoid">
              <div className="md:col-span-4">
                <h3 className="text-slate-950 font-serif text-3xl italic mb-4 leading-none print:text-2xl">{section.title}</h3>
                <div className="text-gold-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 print:text-black">
                   <Target size={14} /> Key Metric: {section.kpi}
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-600 text-lg leading-relaxed font-light italic print:text-black print:text-sm">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unit Economics Table */}
        <div className="mb-32 print:mb-12 break-inside-avoid">
           <div className="flex items-center gap-4 mb-10">
              <Grid size={24} className="text-gold-600 print:text-black" />
              <h3 className="text-slate-950 font-serif text-4xl italic print:text-2xl">Unit Economics & Inventory</h3>
           </div>
           <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm print:shadow-none print:border-2 print:border-black print:rounded-xl">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] print:bg-gray-100 print:text-black print:border-black">
                       <th className="px-8 py-6">Asset Config</th>
                       <th className="px-8 py-6 text-right">Key Count</th>
                       <th className="px-8 py-6 text-right">Unit Size</th>
                       <th className="px-8 py-6 text-right">Target ADR</th>
                       <th className="px-8 py-6 text-right">Revenue Profile</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm font-mono text-slate-600 print:text-black">
                    {unitMix.map((row, i) => (
                       <tr key={i} className={`border-b border-slate-100 hover:bg-[#FDFBF7] transition-colors print:border-gray-300 ${i === unitMix.length - 1 ? 'bg-slate-50 font-bold text-slate-900 print:bg-gray-100' : ''}`}>
                          <td className="px-8 py-5 font-bold text-slate-900 print:text-black font-sans">{row.type}</td>
                          <td className="px-8 py-5 text-right">{row.keys}</td>
                          <td className="px-8 py-5 text-right">{row.size}</td>
                          <td className="px-8 py-5 text-right text-slate-900">{row.adr}</td>
                          <td className="px-8 py-5 text-right text-[10px] font-sans font-bold uppercase tracking-wider">{row.rev}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Financial Pro-Forma Table */}
        <div className="mb-32 print:mb-12 break-inside-avoid">
           <div className="flex items-center gap-4 mb-10">
              <TrendingUp size={24} className="text-gold-600 print:text-black" />
              <h3 className="text-slate-950 font-serif text-4xl italic print:text-2xl">5-Year Pro-Forma Ledger</h3>
           </div>
           <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm print:shadow-none print:border-2 print:border-black print:rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] print:bg-gray-100 print:text-black print:border-black">
                         <th className="px-8 py-6">Fiscal Period</th>
                         <th className="px-8 py-6 text-right">Gross Rev (Cr)</th>
                         <th className="px-8 py-6 text-right">OpEx (Cr)</th>
                         <th className="px-8 py-6 text-right text-gold-600 print:text-black">EBITDA (Cr)</th>
                         <th className="px-8 py-6 text-right">Margin %</th>
                         <th className="px-8 py-6 text-right">DSCR</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-mono text-slate-600 print:text-black">
                      {financialData.map((row, i) => (
                         <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-[#FDFBF7] transition-colors print:border-gray-300">
                            <td className="px-8 py-5 font-bold text-slate-900 print:text-black font-sans">{row.year}</td>
                            <td className="px-8 py-5 text-right">₹{row.gross}</td>
                            <td className="px-8 py-5 text-right">₹{row.opex}</td>
                            <td className="px-8 py-5 text-right font-black text-slate-900 print:text-black">₹{row.ebitda}</td>
                            <td className="px-8 py-5 text-right">{row.margin}</td>
                            <td className="px-8 py-5 text-right">{row.dscr}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
              </div>
              <div className="bg-slate-50 p-6 flex justify-between items-center border-t border-slate-200 print:bg-white print:border-black">
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 print:text-black">*Unaudited projections based on 70% Occ.</span>
                 <div className="flex gap-2 text-[9px] font-black uppercase tracking-widest text-emerald-600 print:text-black">
                    <Activity size={12} /> Positive Cash Flow Y2
                 </div>
              </div>
           </div>
        </div>

        {/* Strategic SWOT Matrix */}
        <div className="mb-32 print:mb-12 break-inside-avoid">
           <div className="flex items-center gap-4 mb-10">
              <Scale size={24} className="text-gold-600 print:text-black" />
              <h3 className="text-slate-950 font-serif text-4xl italic print:text-2xl">Strategic SWOT Analysis</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {swot.map((quadrant, i) => (
                 <div key={i} className={`p-8 rounded-[2rem] border ${quadrant.color} print:border-black print:bg-white print:text-black`}>
                    <h4 className="font-serif text-2xl italic mb-6">{quadrant.label}</h4>
                    <ul className="space-y-3">
                       {quadrant.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wider opacity-80">
                             <span className="mt-1 w-1.5 h-1.5 rounded-full bg-current"></span>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-32 print:mb-12 break-inside-avoid">
           <div className="flex items-center gap-4 mb-10">
              <Calendar size={24} className="text-gold-600 print:text-black" />
              <h3 className="text-slate-950 font-serif text-4xl italic print:text-2xl">Development Velocity</h3>
           </div>
           <div className="relative border-l border-slate-200 ml-6 space-y-12 print:border-black">
              {[
                 { date: "Q1 2024", event: "Land Acquisition & Fencing", status: "Complete" },
                 { date: "Q3 2024", event: "Structural Piling & Foundation", status: "Complete" },
                 { date: "Q2 2025", event: "Podium Level Slab Casting", status: "Active" },
                 { date: "Q4 2026", event: "Structural Topping Out", status: "Projected" },
                 { date: "Q4 2027", event: "Grand Commercial Opening", status: "Projected" }
              ].map((milestone, i) => (
                 <div key={i} className="relative pl-12 group">
                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ring-slate-200 print:ring-black print:bg-black ${milestone.status === 'Complete' || milestone.status === 'Active' ? 'bg-gold-500 ring-gold-500' : 'bg-slate-100'}`}></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                       <div>
                          <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest block mb-1 print:text-black">{milestone.date}</span>
                          <h4 className="text-slate-950 font-serif text-xl italic">{milestone.event}</h4>
                       </div>
                       <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit ${milestone.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'} print:border print:border-black print:bg-white print:text-black`}>
                          {milestone.status}
                       </span>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Risk & Technical Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 print:mb-12 break-inside-avoid">
           <div>
              <h4 className="text-slate-950 font-serif text-3xl mb-8 italic print:text-2xl">Risk Mitigation Matrix</h4>
              <div className="space-y-4">
                 {risks.map((r, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm print:border-black print:rounded-xl">
                       <div className="flex justify-between mb-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 print:text-black">{r.cat}</span>
                          <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${r.impact === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'} print:border print:border-black print:bg-white print:text-black`}>{r.impact} Priority</span>
                       </div>
                       <div className="font-serif text-xl italic text-slate-950 mb-2 print:text-black">{r.risk}</div>
                       <p className="text-xs text-slate-500 leading-relaxed print:text-black">{r.mitigation}</p>
                    </div>
                 ))}
              </div>
           </div>

           <div>
              <h4 className="text-slate-950 font-serif text-3xl mb-8 italic print:text-2xl">Technical Specifications</h4>
              <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm print:shadow-none print:border-black print:rounded-xl">
                 <table className="w-full text-left">
                    <tbody className="text-sm">
                       {[
                          { l: "Structural Core", s: "Twin-Tower RC / 75m Terminal" },
                          { l: "MEP / HVAC", s: "Mag-Lev Chiller Plant (AI)" },
                          { l: "Vertical Logistics", s: "12x High-Velocity Cores" },
                          { l: "Crown Feature", s: "Dual Revolving Platforms" },
                          { l: "Digital Security", s: "AES-256 ERP / Bio-Access" }
                       ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-[#FDFBF7] print:border-gray-300">
                             <td className="px-8 py-5 text-slate-900 font-bold print:text-black">{row.l}</td>
                             <td className="px-8 py-5 text-slate-500 text-right print:text-black">{row.s}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="bg-slate-50 p-6 text-center border-t border-slate-200 print:bg-white print:border-black">
                    <span className="text-emerald-600 text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 print:text-black">
                       <ShieldCheck size={12} /> Audit Grade A+ Verified
                    </span>
                 </div>
              </div>
           </div>
        </div>

        {/* Compliance Footer */}
        <div className="pt-24 border-t border-slate-200 text-center space-y-12 print:pt-8 print:border-black break-inside-avoid">
           <div className="flex justify-center gap-16">
              <div className="flex flex-col items-center">
                 <ShieldCheck size={32} className="text-gold-500 mb-4 print:text-black" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 print:text-black">Governance Sync v2.5</span>
              </div>
              <div className="flex flex-col items-center">
                 <Database size={32} className="text-gold-500 mb-4 print:text-black" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 print:text-black">BIM Level 300 Certified</span>
              </div>
           </div>
           
           <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] italic print:text-black">
                *This report is for authorized institutional use only. All data points are based on Jan 2025 audited milestones.
              </p>
              <div className="flex justify-between items-end border-b border-slate-200 pb-4 print:border-black">
                 <div className="text-left">
                    <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-2 print:text-black">Authorized Signatory</div>
                    <div className="font-serif text-2xl italic text-slate-950 print:text-black">K. Haridas</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-gold-600 print:text-black">Chairman, LS International</div>
                 </div>
                 <Logo className="w-12 h-12 opacity-20 grayscale print:opacity-100 print:w-10 print:h-10" />
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ReportPage;