
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
import { ShieldCheck, TrendingUp, Landmark, ArrowRight, Info } from 'lucide-react';

const WATERFALL_DATA = [
  { name: 'Initial Exit Proceeds', value: 1236, color: '#D4AF37', label: 'Asset Sale' },
  { name: 'Debt Repayment', value: -210, color: '#1e293b', label: 'Senior Debt' },
  { name: 'Capital Repayment', value: -140, color: '#475569', label: 'Equity Floor' },
  { name: 'Preferred Return', value: -180, color: '#64748B', label: '10.2% Hurdle' },
  { name: 'Net Investor Profit', value: 706, color: '#D4AF37', label: '3.5x Multiple' },
];

const WaterfallChart: React.FC = () => {
  return (
    <section id="waterfall" className="py-32 bg-onyx-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="h-[500px] w-full bg-onyx-900/50 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 shadow-3xl">
              <h3 className="text-white font-serif text-2xl mb-8 flex items-center gap-3">
                <Landmark className="text-gold-500" size={24} /> Capital Waterfall (₹ Cr)
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={WATERFALL_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#475569" 
                    fontSize={8} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#475569', fontWeight: 'bold' }}
                  />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase' }}
                  />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {WATERFALL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList dataKey="label" position="top" style={{ fill: '#D4AF37', fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }} />
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Priority Distribution</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter">The Investor <br/><span className="gold-gradient-text">Safe Harbor.</span></h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mt-10 max-w-xl">
                Our distribution waterfall is designed to protect your capital first. Every rupee of debt and initial equity is recovered before the profit-split mechanism triggers.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Senior Debt Priority", desc: "1st charge on asset proceeds ensures bank-grade security.", icon: ShieldCheck },
                { title: "Preferred Hurdle", desc: "Investors receive a 10.2% compounded hurdle before promoter carry.", icon: TrendingUp },
                { title: "Upside Optimization", desc: "Year 10 exit targets a 3.5x equity multiple for early-tranche partners.", icon: Info }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-500 border border-white/5">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] group">
              Detailed Exit Simulation <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterfallChart;
