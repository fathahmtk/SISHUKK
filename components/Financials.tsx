import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { IndianRupee, BarChart, TrendingUp, ShieldCheck, Landmark, ArrowUpRight, Activity } from 'lucide-react';

const data = [
  { name: 'Rooms & Suites', value: 35 },
  { name: 'F&B Destination', value: 25 },
  { name: 'Weddings & Events', value: 20 },
  { name: 'Experiential', value: 15 },
];

const COLORS = ['#D4AF37', '#1e293b', '#475569', '#94a3b8'];

const Financials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'capital' | 'risk'>('revenue');

  return (
    <section id="financials" className="py-12 bg-white border-t border-slate-100 relative h-full flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Financial Intelligence Hub</span>
            <h2 className="font-serif text-4xl md:text-7xl text-slate-950 mb-4 tracking-tighter leading-[0.8] italic">Capital <br/><span className="gold-gradient-text italic font-black">Architecture.</span></h2>
          </div>
          
          <div className="flex bg-[#FDFBF7] border border-slate-200 p-1.5 rounded-2xl shadow-sm">
            {[
              { id: 'revenue', label: 'Rev', icon: TrendingUp },
              { id: 'capital', label: 'Cap', icon: IndianRupee },
              { id: 'risk', label: 'Sec', icon: ShieldCheck }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-6 py-3 text-[9px] font-black uppercase tracking-widest transition-all rounded-xl ${
                  activeTab === tab.id 
                  ? 'text-white bg-slate-950 shadow-lg' 
                  : 'text-slate-400 hover:text-slate-950'
                }`}
              >
                <tab.icon size={12} /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[55vh] animate-fade-in flex flex-col justify-center">
          {activeTab === 'revenue' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
              <div className="lg:col-span-7 bg-[#FDFBF7] border border-slate-200 p-10 rounded-[3rem] h-full shadow-xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-8 relative z-10">
                   <h3 className="text-slate-950 font-serif text-3xl italic leading-none">Capture Mix</h3>
                   <Activity size={24} className="text-gold-500 animate-pulse" />
                </div>
                
                <div style={{ width: '100%', height: '80%' }} className="relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data} cx="50%" cy="50%" innerRadius="65%" outerRadius="85%" paddingAngle={10} dataKey="value" stroke="none">
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', borderRadius: '16px' }} />
                      <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontSize: '8px', textTransform: 'uppercase', fontWeight: 'black'}} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <span className="text-slate-950 font-serif text-4xl font-black italic">100%</span>
                     <span className="text-gold-600 text-[7px] font-black uppercase tracking-[0.4em]">Alpha Yield</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                {[
                  { title: "Non-Linear Demand", icon: BarChart, desc: "Driven by structural destination pull." },
                  { title: "Landmark Premium", icon: TrendingUp, desc: "Architecture justifies 24% ADR premium." },
                  { title: "Stabilized Yield", icon: ShieldCheck, desc: "High-margin event income floor." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-gold-400 transition-all group flex gap-6 items-center shadow-sm">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl text-gold-600 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all flex items-center justify-center">
                       <item.icon size={20} />
                    </div>
                    <div>
                       <h4 className="text-slate-950 font-serif text-xl italic group-hover:text-gold-600 transition-colors">{item.title}</h4>
                       <p className="text-slate-500 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'capital' && (
             <div className="max-w-4xl mx-auto w-full h-full flex items-center">
                <div className="p-12 md:p-16 bg-white border border-slate-200 rounded-[4rem] shadow-2xl relative overflow-hidden group w-full">
                   <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-slate-100 pb-10 gap-8 relative z-10">
                      <h3 className="text-slate-950 font-serif text-4xl italic font-black">Capital Stack</h3>
                      <div className="text-gold-600 font-serif text-6xl font-black italic leading-none">₹350 Cr</div>
                   </div>

                   <div className="space-y-12 relative z-10">
                      {[
                        { item: "Senior Project Debt", val: "₹210 Cr", p: "60%" },
                        { item: "Equity Tranche", val: "₹140 Cr", p: "40%" },
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center group/row">
                           <div className="flex items-center gap-8">
                              <div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover/row:border-gold-500 group-hover/row:text-gold-600 transition-all font-mono text-sm font-black">
                                 {row.p}
                              </div>
                              <div className="text-slate-950 font-serif text-3xl group-hover/row:text-gold-600 transition-colors italic">{row.item}</div>
                           </div>
                           <div className="text-slate-950 font-mono text-4xl font-black">₹{row.val}</div>
                        </div>
                      ))}
                      
                      <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                         <div className="flex items-center gap-6">
                            <ShieldCheck size={28} className="text-emerald-500" />
                            <p className="text-slate-950 text-xl font-serif italic">Unencumbered Equity Base</p>
                         </div>
                         <button className="bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl hover:bg-gold-500 transition-all flex items-center gap-4 group/btn">
                            Full Roadmap <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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