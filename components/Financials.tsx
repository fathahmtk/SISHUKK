
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
// Added Landmark to the imports from lucide-react
import { IndianRupee, BarChart, TrendingUp, AlertTriangle, ShieldCheck, FileDown, Eye, FileText, Download, Landmark } from 'lucide-react';

const data = [
  { name: 'MICE & Weddings', value: 55 },
  { name: 'Room Inventory', value: 30 },
  { name: 'F&B Operations', value: 10 },
  { name: 'Wellness & Retail', value: 5 },
];

const COLORS = ['#D4AF37', '#64748B', '#475569', '#1e293b'];

const Financials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'capital' | 'risk' | 'reports'>('revenue');

  return (
    <section id="financials" className="py-32 bg-onyx-950 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-6">Financial Intelligence</span>
          <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 tracking-tighter italic">Capital <br/><span className="gold-gradient-text italic">Architecture.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Institutional-grade analysis of revenue centers, capital deployment, and auditable 10-year growth trajectories.
          </p>
        </div>

        {/* Cinematic Tabs */}
        <div className="flex justify-center mb-20 border-b border-white/5 flex-wrap gap-2 xl:gap-8">
          {[
            { id: 'revenue', label: 'Revenue Logic', icon: TrendingUp },
            { id: 'capital', label: 'Capital Stack', icon: IndianRupee },
            { id: 'risk', label: 'Risk Mitigation', icon: ShieldCheck },
            { id: 'reports', label: 'Audit Reports', icon: FileText }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-8 py-5 text-[10px] font-black uppercase tracking-widest transition-all rounded-t-2xl border-x border-t ${
                activeTab === tab.id 
                ? 'text-gold-400 bg-white/5 border-white/10' 
                : 'text-slate-600 border-transparent hover:text-slate-400'
              }`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Stage */}
        <div className="min-h-[600px] animate-fade-in">
          
          {activeTab === 'revenue' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] h-[500px] shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                   <BarChart size={200} className="text-gold-500" />
                </div>
                <h3 className="text-white text-2xl font-serif mb-10">Revenue Yield Mix</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="40%"
                      innerRadius={80}
                      outerRadius={130}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }}
                      itemStyle={{ color: '#D4AF37', fontSize: '10px', textTransform: 'uppercase' }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '10px', paddingTop: '40px'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-8">
                {[
                  { title: "MICE Dominance", icon: BarChart, desc: "Banqueting volume provides a non-seasonal demand floor independent of room occupancy spikes." },
                  { title: "ADR Optimization", icon: TrendingUp, desc: "Premium positioning allows for a structural arbitrage over local budget inventory." },
                  { title: "REIT Capability", icon: ShieldCheck, desc: "Asset engineered for 100% flow-through transparency and institutional divestment." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-gold-500/30 transition-all group">
                     <div className="flex gap-6 items-start">
                        <div className="p-4 bg-onyx-950 rounded-2xl text-gold-500 border border-white/5 group-hover:border-gold-500/50 transition-all">
                           <item.icon size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { title: "2025 Feasibility Report", type: "Market Analysis", date: "Jan 2025", pages: "48 Pages", icon: FileText },
                   { title: "Detailed Project Report (DPR)", type: "Full Submission", date: "Dec 2024", pages: "142 Pages", icon: Landmark },
                   { title: "Revenue Waterfall Audit", type: "Financial Model", date: "Jan 2025", pages: "12 Pages", icon: BarChart },
                   { title: "Title Search & Legal Safe", type: "Governance", date: "Nov 2024", pages: "25 Pages", icon: ShieldCheck },
                   { title: "Structural Engineering Audit", type: "Technical", date: "Dec 2024", pages: "32 Pages", icon: AlertTriangle },
                   { title: "ESG & Sustainability Report", type: "Compliance", date: "Jan 2025", pages: "18 Pages", icon: TrendingUp }
                 ].map((report, i) => (
                    <div key={i} className="bg-onyx-900 border border-white/10 rounded-[2.5rem] p-10 group hover:border-gold-500/50 transition-all flex flex-col justify-between h-[320px] shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Download size={80} className="text-gold-500" />
                       </div>
                       <div>
                          <div className="flex justify-between items-start mb-8">
                             <div className="bg-gold-500/10 p-4 rounded-2xl border border-gold-500/20">
                                <report.icon className="text-gold-500" size={24} />
                             </div>
                             <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full">{report.date}</span>
                          </div>
                          <h4 className="text-white font-serif text-2xl leading-tight group-hover:text-gold-400 transition-colors mb-3">{report.title}</h4>
                          <div className="flex items-center gap-3">
                             <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{report.type}</span>
                             <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                             <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{report.pages}</span>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <button className="flex-1 bg-white/5 hover:bg-gold-500 hover:text-onyx-950 py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-white/5">
                             <Eye size={14} /> Preview
                          </button>
                          <button className="flex-1 bg-white/5 hover:bg-white hover:text-onyx-950 py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-white/5">
                             <Download size={14} /> Download
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          )}

          {activeTab === 'capital' && (
             <div className="max-w-4xl mx-auto">
                <div className="p-12 md:p-16 bg-onyx-900 border border-white/10 rounded-[4rem] shadow-3xl">
                   <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                      <h3 className="text-white font-serif text-3xl">Capital Stack Overview</h3>
                      <div className="text-gold-500 font-serif text-4xl">₹350 Cr</div>
                   </div>
                   <div className="space-y-8">
                      {[
                        { item: "Senior Project Debt", val: "₹210 Cr", status: "Term Sheet Signed" },
                        { item: "Founder Equity", val: "₹70 Cr", status: "Fully Committed" },
                        { item: "Strategic Investor Round", val: "₹70 Cr", status: "Active Fundraising" }
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center group">
                           <div>
                              <div className="text-white font-serif text-2xl mb-1 group-hover:text-gold-400 transition-colors">{row.item}</div>
                              <div className="text-[9px] uppercase tracking-widest font-black text-slate-600">{row.status}</div>
                           </div>
                           <div className="text-white font-mono text-2xl">{row.val}</div>
                        </div>
                      ))}
                      <div className="pt-12 border-t border-white/5">
                         <button className="w-full bg-gold-500 text-onyx-950 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl hover:bg-white transition-all">
                            View Deployment Roadmap
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'risk' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                  { risk: "Structural Overrun", mit: "Lump-sum EPC contracts with penalty clauses for delays.", status: "Managed" },
                  { risk: "Regulatory Variance", mit: "100% NOCs secured prior to Level 1 construction.", status: "Mitigated" },
                  { risk: "Yield Volatility", mit: "Banquet deposits cover 40% of OpEx debt service.", status: "Resilient" },
                  { risk: "Liquidity Event", mit: "REIT-ready documentation prepared by Big-4 auditors.", status: "Hedged" }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group">
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 border border-white/5 group-hover:border-gold-500/50 transition-all">
                           <AlertTriangle size={20} />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">{item.status}</span>
                     </div>
                     <h4 className="text-white font-serif text-2xl mb-4">{item.risk}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.mit}</p>
                  </div>
                ))}
             </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Financials;
