import React from 'react';
import { 
  ComposedChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { ShieldCheck, TrendingUp, Landmark, ArrowRight, Info, Layers } from 'lucide-react';

const WATERFALL_DATA = [
  { name: 'Exit Value', value: 1236, color: '#D4AF37', label: 'Asset Sale' },
  { name: 'Debt Payback', value: -210, color: '#1e293b', label: 'Senior Debt' },
  { name: 'Capital Base', value: -140, color: '#475569', label: 'Equity Floor' },
  { name: 'Pref Return', value: -180, color: '#94a3b8', label: '10.2% Hurdle' },
  { name: 'Net Upside', value: 706, color: '#D4AF37', label: '3.5x Multiple' },
];

const WaterfallChart: React.FC = () => {
  return (
    <section id="waterfall" className="py-48 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          <div className="space-y-12 order-2 lg:order-1">
            <div className="h-[650px] w-full bg-[#FDFBF7] border border-slate-200 rounded-[5rem] p-16 md:p-20 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                <Layers size={400} className="text-slate-950" />
              </div>
              
              <div className="flex justify-between items-end mb-24 relative z-10">
                 <div>
                    <h3 className="text-slate-950 font-serif text-5xl mb-2 italic">Liquidity Path</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Projected Realization Flow (₹ Cr)</p>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gold-600 bg-white border border-gold-200 px-5 py-2 rounded-full shadow-sm">Target v2.5</span>
              </div>

              <div style={{ width: '100%', height: 400 }} className="relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={WATERFALL_DATA} margin={{ top: 60, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#94a3b8" 
                      fontSize={8} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                      itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                    />
                    <Bar dataKey="value" radius={[16, 16, 0, 0]} barSize={70}>
                      {WATERFALL_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <LabelList dataKey="value" position="top" style={{ fill: '#1e293b', fontSize: '14px', fontFamily: 'Space Grotesk', fontWeight: 'bold' }} />
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-16 flex justify-center gap-12 border-t border-slate-100 pt-10">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gold-500 shadow-lg"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Equity Profit</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-slate-900 shadow-lg"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Structural Obligations</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 order-1 lg:order-2">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50">
                <ShieldCheck size={16} className="text-gold-600" />
                <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Divestment Protocol Chapter 10</span>
              </div>
              <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic">Value <br/><span className="gold-gradient-text italic font-black">Realization.</span></h2>
              <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl">
                The waterfall is structured to prioritize <strong>Downside Protection</strong>. First-charge debt retirement and investor hurdle benchmarks must be liquidated before promoter carry activation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "Senior Debt Priority", desc: "First-charge legal security on 100% of asset divestment proceeds.", icon: Landmark },
                { title: "Preferred Hurdle", desc: "10.2% compounded annual return before promoter carry activation.", icon: TrendingUp },
                { title: "Multiple Realization", desc: "Targeting a market-leading 3.5x gross equity multiplier by Year 7.", icon: Info }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 items-start group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-gold-400 transition-all duration-700 shadow-sm hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-700 shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-slate-950 font-serif text-3xl italic mb-3 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10">
               <button className="px-16 py-8 bg-slate-950 hover:bg-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all shadow-3xl flex items-center gap-8 group active:scale-95">
                 Analyze Divestment Scenarios <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterfallChart;