
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Coins, Briefcase, Landmark, ShieldCheck, CheckCircle2, Info } from 'lucide-react';

const CAPITAL_STACK = [
  { name: 'Bank Debt', value: 210, color: '#1e293b' },
  { name: 'Promoter Equity', value: 70, color: '#475569' },
  { name: 'Investor Equity', value: 70, color: '#D4AF37' },
];

const PROCEEDS = [
  { label: "Civil & Structural", val: "₹145 Cr", desc: "Core twin-tower construction and foundation." },
  { label: "Interior & FF&E", val: "₹85 Cr", desc: "7-star fit-outs, marble, and designer lobby." },
  { label: "MEP & Smart Tech", val: "₹55 Cr", desc: "HVAC, elevators, and AI-driven PMS." },
  { label: "Pre-Operative", val: "₹25 Cr", desc: "Licensing, branding, and core team hiring." },
  { label: "Working Capital", val: "₹20 Cr", desc: "12-month operational runway post-launch." },
  { label: "Contingency", val: "₹20 Cr", desc: "5.7% buffer for global material shifts." },
];

const InvestmentFramework: React.FC = () => {
  return (
    <section id="framework" className="py-32 bg-onyx-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Institutional Allocation</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter">Capital <br/><span className="gold-gradient-text">Structure.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Capital Stack Visualization */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group">
            <h3 className="text-white font-serif text-2xl mb-8 flex items-center gap-3">
              <Coins className="text-gold-500" size={24} /> The Capital Stack
            </h3>
            <div className="h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={CAPITAL_STACK} innerRadius="60%" outerRadius="90%" paddingAngle={10} dataKey="value">
                    {CAPITAL_STACK.map((e, i) => <Cell key={i} fill={e.color} stroke="none" />)}
                  </Pie>
                  <Tooltip contentStyle={{backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-white font-serif text-4xl">₹350 Cr</span>
                <span className="text-slate-500 text-[8px] uppercase tracking-widest font-black">Total Outlay</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {CAPITAL_STACK.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{item.name}</div>
                  <div className="text-white font-serif text-lg">₹{item.value} Cr</div>
                </div>
              ))}
            </div>
          </div>

          {/* Use of Proceeds Table */}
          <div className="lg:col-span-7 space-y-4">
             <div className="p-6 bg-gold-500/5 border border-gold-500/20 rounded-2xl mb-4">
                <p className="text-gold-400 text-sm italic font-light">"Capital is deployed into high-yield tangible assets, ensuring intrinsic value floor."</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROCEEDS.map((item, i) => (
                  <div key={i} className="p-8 bg-onyx-900 border border-white/5 rounded-3xl hover:border-gold-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-gold-500 font-serif text-2xl group-hover:scale-110 transition-transform">{item.val}</span>
                      <CheckCircle2 size={16} className="text-emerald-500 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest mb-2">{item.label}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Investor Tiers */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-white font-serif text-4xl mb-4 italic">Investment Tiers</h3>
            <p className="text-slate-500 text-sm">Strategic entry points for Institutional and High-Net-Worth partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tier: "Participating", range: "₹1 Cr - ₹10 Cr", irr: "22%", icon: Briefcase, benefits: ["Standard Equity Rights", "Annual Dividend", "Data Room Access"] },
              { tier: "Growth", range: "₹10 Cr - ₹25 Cr", irr: "24%", icon: Landmark, benefits: ["Priority Yield Pref", "Quarterly Reporting", "Site Audit Rights"], popular: true },
              { tier: "Anchor", range: "₹25 Cr +", irr: "26%", icon: ShieldCheck, benefits: ["Board Seat Option", "Exit Right Refusal", "Asset Management Fee"] },
            ].map((tier, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all duration-500 relative flex flex-col h-full ${
                tier.popular ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-2xl scale-105 z-10' : 'bg-white/5 border-white/10 text-white'
              }`}>
                {tier.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-onyx-950 text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg">Most Strategic</div>}
                
                <div className="mb-10 flex justify-between items-start">
                   <tier.icon size={40} className={tier.popular ? 'text-onyx-950 opacity-40' : 'text-gold-500'} />
                   <div className="text-right">
                      <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${tier.popular ? 'opacity-60' : 'text-slate-500'}`}>Target IRR</div>
                      <div className="text-4xl font-serif">{tier.irr}</div>
                   </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">{tier.tier} Partner</h4>
                  <p className="text-2xl font-serif">{tier.range}</p>
                </div>

                <div className="flex-1 space-y-4 mb-12">
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? 'bg-onyx-950' : 'bg-gold-500'}`}></div>
                      {benefit}
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                  tier.popular ? 'bg-onyx-950 text-white hover:bg-white hover:text-onyx-950' : 'bg-gold-500 text-onyx-950 hover:bg-white'
                }`}>
                  Request Prospectus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFramework;
