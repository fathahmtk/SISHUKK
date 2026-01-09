import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { IndianRupee, BarChart, TrendingUp, AlertTriangle, ShieldCheck, FileText, Download, Eye, Landmark, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Rooms & Suites', value: 35 },
  { name: 'F&B Destination', value: 25 },
  { name: 'Weddings & Events', value: 20 },
  { name: 'Experiential', value: 15 }, // Adjusted based on Master Text ranges (mid-points)
];

const COLORS = ['#1e40af', '#10b981', '#D4AF37', '#e11d48'];

const Financials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'capital' | 'risk' | 'reports'>('revenue');

  return (
    <section id="financials" className="py-48 bg-onyx-950 border-t border-white/5 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.03)_0%,_transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Financial Intelligence Unit</span>
          <h2 className="font-serif text-6xl md:text-9xl text-white mb-10 tracking-tighter italic leading-[0.8]">Capital <br/><span className="gold-gradient-text italic font-black">Architecture.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A 10-Year financial model based on "Landmark Economics," maximizing yield through architectural scarcity and diversified revenue.
          </p>
        </div>

        {/* Institutional Tabs */}
        <div className="flex justify-center mb-24 border-b border-white/5 flex-wrap gap-2 xl:gap-8">
          {[
            { id: 'revenue', label: 'Revenue Logic', icon: TrendingUp },
            { id: 'capital', label: 'Capital Stack', icon: IndianRupee },
            { id: 'risk', label: 'Risk Safeguards', icon: ShieldCheck },
            { id: 'reports', label: 'Audit Logs', icon: FileText }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-4 px-10 py-6 text-[10px] font-black uppercase tracking-widest transition-all rounded-t-3xl border-x border-t ${
                activeTab === tab.id 
                ? 'text-gold-400 bg-onyx-900 border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.5)]' 
                : 'text-slate-600 border-transparent hover:text-slate-400'
              }`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Content Stages */}
        <div className="min-h-[650px] animate-fade-in">
          
          {activeTab === 'revenue' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] h-[600px] shadow-3xl relative overflow-hidden group institutional-border">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                   <BarChart size={250} className="text-gold-500" />
                </div>
                <h3 className="text-white text-3xl font-serif mb-12 italic">Revenue Capture Mix</h3>
                
                {/* Fixed height container for PieChart */}
                <div style={{ width: '100%', height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={110}
                        outerRadius={160}
                        paddingAngle={8}
                        dataKey="value"
                        animationDuration={1500}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff' }}
                        itemStyle={{ color: '#D4AF37', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                      />
                      <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '50px'}} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-10">
                {[
                  { title: "Non-Linear Demand", icon: BarChart, desc: "Revenue is driven by destination pull (weddings, tourism) rather than room count alone." },
                  { title: "Landmark Premium", icon: TrendingUp, desc: "Iconic architecture justifies premium pricing across F&B and experiential verticals." },
                  { title: "Stabilized Yield", icon: ShieldCheck, desc: "Rooms act as anchor revenue (downside protection) while Events provide the upside alpha." }
                ].map((item, i) => (
                  <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-white/[0.04] hover:border-gold-500/30 transition-all duration-500 group">
                     <div className="flex gap-8 items-start">
                        <div className="p-6 bg-onyx-950 rounded-2xl text-gold-500 border border-white/5 group-hover:border-gold-500 group-hover:text-onyx-950 transition-all shadow-xl">
                           <item.icon size={28} />
                        </div>
                        <div>
                           <h4 className="text-white font-serif text-3xl mb-4 italic group-hover:text-gold-400 transition-colors">{item.title}</h4>
                           <p className="text-slate-500 text-lg font-light leading-relaxed">{item.desc}</p>
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
                   { title: "2025 Feasibility Log", type: "Market Audit", date: "Jan 2025", pages: "48 Pgs", icon: FileText },
                   { title: "Project Cost Report", type: "Financial Audit", date: "Dec 2024", pages: "142 Pgs", icon: Landmark },
                   { title: "Legal Title Search", type: "Compliance", date: "Nov 2024", pages: "25 Pgs", icon: ShieldCheck },
                   { title: "Revenue Waterfall", type: "Forecast", date: "Jan 2025", pages: "12 Pgs", icon: BarChart },
                   { title: "Structural Integrity", type: "Engineering", date: "Dec 2024", pages: "32 Pgs", icon: AlertTriangle },
                   { title: "Sustainability Log", type: "ESG Compliance", date: "Jan 2025", pages: "18 Pgs", icon: TrendingUp }
                 ].map((report, i) => (
                    <div key={i} className="bg-onyx-900 border border-white/10 rounded-[3.5rem] p-12 group hover:border-gold-500/50 transition-all flex flex-col justify-between h-[420px] shadow-3xl relative overflow-hidden institutional-border">
                       <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                          <Download size={150} className="text-white" />
                       </div>
                       <div>
                          <div className="flex justify-between items-start mb-12">
                             <div className="bg-gold-500/10 p-5 rounded-2xl border border-gold-500/20 shadow-2xl">
                                <report.icon className="text-gold-500" size={28} />
                             </div>
                             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">{report.date}</span>
                          </div>
                          <h4 className="text-white font-serif text-2xl leading-tight group-hover:text-gold-400 transition-colors mb-4 italic">{report.title}</h4>
                          <div className="flex items-center gap-4">
                             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">{report.type}</span>
                             <div className="w-1 h-1 bg-gold-500/30 rounded-full"></div>
                             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">{report.pages}</span>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <button className="flex-1 bg-white/5 hover:bg-gold-500 hover:text-onyx-950 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-white/5 shadow-xl active:scale-95">
                             <Eye size={16} /> Preview
                          </button>
                          <button className="flex-1 bg-white/5 hover:bg-white hover:text-onyx-950 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-white/5 shadow-xl active:scale-95">
                             <Download size={16} /> Get PDF
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          )}

          {activeTab === 'capital' && (
             <div className="max-w-4xl mx-auto">
                <div className="p-12 md:p-24 bg-onyx-900 border border-white/10 rounded-[5rem] shadow-3xl relative overflow-hidden institutional-border">
                   <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
                      <Landmark size={450} className="text-white" />
                   </div>
                   <div className="flex flex-col sm:flex-row items-center justify-between mb-20 border-b border-white/5 pb-12 gap-6 relative z-10">
                      <h3 className="text-white font-serif text-4xl italic">Capital Stack v2.5</h3>
                      <div className="text-gold-500 font-serif text-6xl font-black tracking-tighter">₹350 Cr</div>
                   </div>
                   <div className="space-y-12 relative z-10">
                      {[
                        { item: "Senior Project Debt", val: "₹210 Cr", status: "Term Sheet Executed", p: "60%" },
                        { item: "Promoter & Investor Equity", val: "₹140 Cr", status: "Active Deployment", p: "40%" },
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center group">
                           <div className="flex items-center gap-10">
                              <div className="w-14 h-14 rounded-full border-2 border-white/5 flex items-center justify-center text-slate-500 group-hover:border-gold-500 group-hover:text-gold-500 transition-all font-mono text-xs font-black">
                                 {row.p}
                              </div>
                              <div>
                                <div className="text-white font-serif text-3xl mb-1 group-hover:text-gold-400 transition-colors italic">{row.item}</div>
                                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600">{row.status}</div>
                              </div>
                           </div>
                           <div className="text-white font-mono text-4xl font-black">₹{row.val}</div>
                        </div>
                      ))}
                      <div className="pt-20 border-t border-white/5">
                         <button className="w-full bg-gold-500 text-onyx-950 py-8 rounded-[2.5rem] text-[12px] font-black uppercase tracking-[0.6em] shadow-[0_25px_70px_rgba(212,175,55,0.4)] hover:bg-white transition-all flex items-center justify-center gap-6 active:scale-95">
                            Audit Roadmap Deployment <ArrowUpRight size={24} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'risk' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {[
                  { risk: "Execution Risk", mit: "Lump-sum fixed-price EPC contracts with Tier-1 engineering firms.", status: "Guaranteed" },
                  { risk: "Regulatory Risk", mit: "All major NOCs (Aviation, PCB, Fire) secured prior to construction start.", status: "De-risked" },
                  { risk: "Yield Volatility", mit: "Convention pre-deposits and non-seasonal ritual demand stabilize cash flow.", status: "Stable" },
                  { risk: "Structural Moat", mit: "Zero 5-star supply in 10km radius ensures long-term pricing power.", status: "Resilient" }
                ].map((item, i) => (
                  <div key={i} className="p-16 bg-onyx-900 border border-white/10 rounded-[4rem] hover:bg-white/[0.04] transition-all group relative overflow-hidden institutional-border">
                     <div className="flex justify-between items-start mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 border border-white/5 group-hover:border-gold-500 group-hover:scale-110 transition-all shadow-3xl">
                           <AlertTriangle size={28} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">{item.status}</span>
                     </div>
                     <h4 className="text-white font-serif text-4xl mb-8 italic">{item.risk}</h4>
                     <p className="text-slate-400 text-lg font-light leading-relaxed">{item.mit}</p>
                     <div className="absolute bottom-[-15%] right-[-10%] opacity-[0.02] pointer-events-none group-hover:scale-125 transition-transform duration-[2s]">
                        <ShieldCheck size={300} className="text-white" />
                     </div>
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