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
  { name: 'Initial Exit Proceeds', value: 1236, color: '#D4AF37', label: 'Asset Sale' },
  { name: 'Debt Repayment', value: -210, color: '#1e293b', label: 'Senior Debt' },
  { name: 'Capital Repayment', value: -140, color: '#475569', label: 'Equity Floor' },
  { name: 'Preferred Return', value: -180, color: '#64748B', label: '10.2% Hurdle' },
  { name: 'Net Investor Profit', value: 706, color: '#D4AF37', label: '3.5x Multiple' },
];

const WaterfallChart: React.FC = () => {
  return (
    <section id="waterfall" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          <div className="space-y-12 order-2 lg:order-1">
            <div className="h-[550px] w-full bg-onyx-900/30 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                <Layers size={300} className="text-white" />
              </div>
              
              <div className="flex justify-between items-center mb-16 relative z-10">
                 <h3 className="text-white font-serif text-3xl italic">Liquidity Waterfall</h3>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Units: ₹ Cr</span>
              </div>

              {/* Explicit Dimensions for Recharts */}
              <div style={{ width: '100%', height: 350 }} className="relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={WATERFALL_DATA} margin={{ top: 40, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#475569" 
                      fontSize={8} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}
                    />
                    <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }}
                      itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                    />
                    <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={60}>
                      {WATERFALL_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <LabelList dataKey="value" position="top" style={{ fill: '#fff', fontSize: '12px', fontFamily: 'Space Grotesk', fontWeight: 'bold' }} />
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-12 flex justify-center gap-10 opacity-40">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white">Profit Tranche</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-onyx-800"></div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white">Debt / Hurdle</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
                <ShieldCheck className="text-gold-500" size={14} />
                <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Section 10: Divestment Logic</span>
              </div>
              <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter italic">The Exit <br/><span className="gold-gradient-text italic font-black">Velocity.</span></h2>
              <p className="text-slate-400 text-2xl font-light leading-relaxed mt-10 max-w-xl border-l border-gold-500/30 pl-10">
                Strategic capital protection through first-charge debt coverage and investor hurdle priority. Engineered for re-tradeability in global REIT markets.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Senior Debt Priority", desc: "First-charge legal security on 100% of asset sale proceeds.", icon: Landmark },
                { title: "Preferred Hurdle", desc: "10.2% compounded annual return before promoter carry activation.", icon: TrendingUp },
                { title: "Multiple Realization", desc: "Targeting a 3.5x gross equity multiple on exit year 7.", icon: Info }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-2xl">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-2xl italic mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-12 py-7 bg-white/5 border border-white/10 hover:border-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-6 group shadow-2xl">
              Model Sensitivity <ArrowRight size={18} className="text-gold-500 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterfallChart;