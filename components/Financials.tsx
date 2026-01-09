import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { IndianRupee, BarChart, TrendingUp, ShieldCheck, FileText, Download, Eye, Landmark, ArrowUpRight, Target, Activity } from 'lucide-react';

const data = [
  { name: 'Rooms & Suites', value: 35 },
  { name: 'F&B Destination', value: 25 },
  { name: 'Weddings & Events', value: 20 },
  { name: 'Experiential', value: 15 },
];

const COLORS = ['#D4AF37', '#1e293b', '#475569', '#94a3b8'];

const Financials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'capital' | 'risk' | 'reports'>('revenue');

  return (
    <section id="financials" className="py-64 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-32 font-mono text-[8px] p-24 leading-none text-slate-900">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="max-w-[200px] overflow-hidden whitespace-nowrap uppercase tracking-widest italic font-black">Model_SGT_v2.5 // WACC_10.2 // IRR_24.2 // Stabilized_EBITDA</div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] block mb-10">Financial Intelligence Hub</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 mb-12 tracking-tighter leading-[0.8] italic">Capital <br/><span className="gold-gradient-text italic font-black">Architecture.</span></h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
              "A 10-Year financial model maximizing yield through architectural scarcity and de-risked structural demand."
            </p>
          </div>
          
          {/* Institutional Tabs - Arranged Style */}
          <div className="flex bg-[#FDFBF7] border border-slate-200 p-2 rounded-[3.5rem] shadow-sm">
            {[
              { id: 'revenue', label: 'Revenue', icon: TrendingUp },
              { id: 'capital', label: 'Capital', icon: IndianRupee },
              { id: 'risk', label: 'Security', icon: ShieldCheck }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-4 px-10 py-5 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${
                  activeTab === tab.id 
                  ? 'text-white bg-slate-950 shadow-2xl' 
                  : 'text-slate-400 hover:text-slate-950'
                }`}
              >
                <tab.icon size={14} /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[750px] animate-fade-in">
          {activeTab === 'revenue' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-7 bg-[#FDFBF7] border border-slate-200 p-16 md:p-24 rounded-[5rem] h-[700px] shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <BarChart size={500} className="text-slate-950" />
                </div>
                
                <div className="flex justify-between items-start mb-16 relative z-10">
                   <div>
                      <h3 className="text-slate-950 font-serif text-5xl mb-3 italic">Capture Mix</h3>
                      <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.5em]">Consolidated Operating P&L (Target State)</p>
                   </div>
                   <Activity size={32} className="text-gold-500 animate-pulse" />
                </div>
                
                <div style={{ width: '100%', height: 450 }} className="relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={140}
                        outerRadius={180}
                        paddingAngle={15}
                        dataKey="value"
                        stroke="#fff"
                        strokeWidth={4}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', borderRadius: '32px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
                        itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                      />
                      <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontSize: '9px', textTransform: 'uppercase', fontWeight: 'black', letterSpacing: '0.4em', paddingTop: '60px'}} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <span className="text-slate-950 font-serif text-6xl font-black italic">100%</span>
                     <span className="text-gold-600 text-[8px] font-black uppercase tracking-[0.5em]">Alpha Yield</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-10">
                {[
                  { title: "Non-Linear Demand", icon: BarChart, desc: "Revenue is driven by structural destination pull rather than inventory alone." },
                  { title: "Landmark Premium", icon: TrendingUp, desc: "Iconic architecture justifies a 24% ADR premium over district benchmarks." },
                  { title: "Stabilized Yield", icon: ShieldCheck, desc: "High-margin event income providing 45%+ operational EBITDA cushion." }
                ].map((item, i) => (
                  <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:bg-[#FDFBF7] hover:border-gold-400 transition-all duration-700 group shadow-sm hover:shadow-2xl">
                     <div className="flex gap-12 items-start">
                        <div className="w-16 h-16 bg-[#FDFBF7] rounded-2xl text-gold-600 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm flex items-center justify-center">
                           <item.icon size={32} />
                        </div>
                        <div>
                           <h4 className="text-slate-950 font-serif text-3xl mb-4 italic group-hover:text-gold-600 transition-colors">{item.title}</h4>
                           <p className="text-slate-500 text-lg font-light leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'capital' && (
             <div className="max-w-6xl mx-auto">
                <div className="p-24 md:p-40 bg-white border border-slate-200 rounded-[6rem] shadow-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                      <Landmark size={800} className="text-slate-950" />
                   </div>
                   
                   <div className="flex flex-col lg:flex-row items-center justify-between mb-32 border-b border-slate-100 pb-20 gap-16 relative z-10">
                      <div className="text-center lg:text-left">
                         <h3 className="text-slate-950 font-serif text-6xl italic font-black mb-4">Capital Stack</h3>
                         <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Institutional Funding Structure v2.5</p>
                      </div>
                      <div className="text-gold-600 font-serif text-8xl md:text-[10rem] font-black tracking-tighter italic leading-none group-hover:scale-105 transition-transform">₹350 Cr</div>
                   </div>

                   <div className="space-y-20 relative z-10">
                      {[
                        { item: "Senior Project Debt", val: "₹210 Cr", status: "Term Sheet Executed", p: "60%" },
                        { item: "Equity Tranche", val: "₹140 Cr", status: "Active Deployment", p: "40%" },
                      ].map((row, i) => (
                        <div key={i} className="flex flex-col md:flex-row justify-between items-center group/row gap-12">
                           <div className="flex items-center gap-12 w-full md:w-auto">
                              <div className="w-24 h-24 rounded-full border-4 border-slate-100 flex items-center justify-center text-slate-300 group-hover/row:border-gold-500 group-hover/row:text-gold-600 transition-all font-mono text-xl font-black">
                                 {row.p}
                              </div>
                              <div>
                                <div className="text-slate-950 font-serif text-5xl mb-3 group-hover/row:text-gold-600 transition-colors italic">{row.item}</div>
                                <div className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">{row.status}</div>
                              </div>
                           </div>
                           <div className="text-slate-950 font-mono text-6xl font-black group-hover/row:scale-105 transition-transform origin-right">₹{row.val}</div>
                        </div>
                      ))}
                      
                      <div className="pt-32 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-16">
                         <div className="flex items-center gap-10">
                            <div className="w-20 h-20 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                               <ShieldCheck size={36} />
                            </div>
                            <div>
                               <p className="text-slate-950 text-2xl font-serif italic leading-none mb-2">Unencumbered Equity</p>
                               <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">100% Freehold Land Sovereignty Verified</p>
                            </div>
                         </div>
                         <button className="w-full md:w-auto bg-slate-950 text-white px-20 py-8 rounded-full text-[13px] font-black uppercase tracking-[0.6em] shadow-3xl hover:bg-gold-500 transition-all flex items-center justify-center gap-8 active:scale-95 group/btn">
                            Full Roadmap <ArrowUpRight size={24} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Financials;