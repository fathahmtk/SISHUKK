import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { IndianRupee, BarChart, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

const data = [
  { name: 'Weddings & Events', value: 45 },
  { name: 'Room Revenue', value: 30 },
  { name: 'F&B (Rooftop + Outlets)', value: 15 },
  { name: 'Wellness & Retail', value: 10 },
];

const COLORS = ['#C5A028', '#334155', '#94a3b8', '#cbd5e1'];

const Financials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'capital' | 'risk'>('revenue');

  return (
    <section id="financials" className="py-24 bg-luxury-black border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Financial Logic</h2>
          <p className="text-slate-400">Comprehensive analysis of revenue, capital deployment, and risk mitigation.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-white/10">
          <button 
            onClick={() => setActiveTab('revenue')}
            className={`px-8 py-4 text-sm uppercase tracking-widest transition-all ${activeTab === 'revenue' ? 'text-gold-400 border-b-2 border-gold-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Revenue Model
          </button>
          <button 
            onClick={() => setActiveTab('capital')}
            className={`px-8 py-4 text-sm uppercase tracking-widest transition-all ${activeTab === 'capital' ? 'text-gold-400 border-b-2 border-gold-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Capital Structure
          </button>
          <button 
            onClick={() => setActiveTab('risk')}
            className={`px-8 py-4 text-sm uppercase tracking-widest transition-all ${activeTab === 'risk' ? 'text-gold-400 border-b-2 border-gold-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Risk & Mitigation
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          
          {/* Revenue Tab */}
          {activeTab === 'revenue' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 h-[400px]">
                <h3 className="text-white text-lg font-serif mb-6 text-center">Projected Revenue Mix</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#121212', borderColor: '#333', color: '#fff' }}
                      itemStyle={{ color: '#C5A028' }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-luxury-dark border border-gold-900/30 hover:border-gold-500/50 transition-colors">
                  <TrendingUp className="text-gold-500 mb-4" size={32} />
                  <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">EBITDA</h4>
                  <p className="text-2xl text-white font-serif">Strong</p>
                  <p className="text-xs text-slate-500 mt-2">High-margin event revenue drives superior operating leverage.</p>
                </div>
                <div className="p-6 bg-luxury-dark border border-gold-900/30 hover:border-gold-500/50 transition-colors">
                  <BarChart className="text-gold-500 mb-4" size={32} />
                  <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Exit Strategy</h4>
                  <p className="text-2xl text-white font-serif">REIT / Asset Sale</p>
                  <p className="text-xs text-slate-500 mt-2">Designed for long-term valuation and annuity yields.</p>
                </div>
                <div className="col-span-1 md:col-span-2 p-6 bg-luxury-dark border border-gold-900/30 flex flex-col justify-center text-center">
                  <p className="text-gold-400 font-serif italic text-lg">"Weddings create a structural demand floor, mitigating seasonality risks common in pure-play hotels."</p>
                </div>
              </div>
            </div>
          )}

          {/* Capital Tab */}
          {activeTab === 'capital' && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <div className="p-6 bg-luxury-dark border-b border-white/10 flex justify-between items-center">
                  <h3 className="font-serif text-2xl text-white">Indicative Capital Deployment</h3>
                  <div className="flex items-center gap-2 text-gold-400 bg-gold-900/20 px-4 py-2 rounded-full">
                    <IndianRupee size={20} />
                    <span className="font-bold">Total: ₹250–350 Cr</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {[
                      { item: "Land Cost", desc: "Location dependent; strategic acquisition", status: "Variable" },
                      { item: "Construction (Civil + Façade)", desc: "Major Capex block. Twin tower structure.", status: "Primary Cost" },
                      { item: "Interiors & FF&E", desc: "Premium luxury specification for guest areas.", status: "High" },
                      { item: "Pre-opening & Branding", desc: "Marketing, team hiring, launch events.", status: "Included" },
                      { item: "Contingency", desc: "Mandatory buffer for timeline/cost variance.", status: "Mandatory" }
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/5 last:border-0">
                         <div>
                            <span className="text-white text-lg font-medium block">{row.item}</span>
                            <span className="text-slate-500 text-sm">{row.desc}</span>
                         </div>
                         <span className="mt-2 md:mt-0 text-xs font-bold uppercase tracking-wider text-gold-500 bg-gold-900/10 px-3 py-1 rounded">
                           {row.status}
                         </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded text-slate-300 text-sm">
                    <strong>Note:</strong> Estimates are indicative and bandwidth depends on final land cost and specification lock.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Risk Tab */}
          {activeTab === 'risk' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up">
              {[
                { risk: "Cost Overrun", mit: "Tight EPC contracts with penalty clauses.", icon: <AlertTriangle className="text-orange-500" /> },
                { risk: "Approval Delays", mit: "Early parallel processing of environmental & fire clearances.", icon: <AlertTriangle className="text-orange-500" /> },
                { risk: "Seasonality", mit: "Wedding-led demand is structural and year-round in this micro-market.", icon: <ShieldCheck className="text-green-500" /> },
                { risk: "Competition", mit: "First-mover advantage. No comparable 5-star inventory exists.", icon: <ShieldCheck className="text-green-500" /> }
              ].map((card, i) => (
                <div key={i} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-black/50 p-3 rounded-full border border-white/10">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-xl text-white">{card.risk}</h3>
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Mitigation Strategy</p>
                     <p className="text-slate-200 leading-relaxed">{card.mit}</p>
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