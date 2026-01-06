import React, { useState } from 'react';
import { Download, Shield, TrendingUp, Building2, MapPin, DollarSign, PieChart as PieIcon, CheckCircle2, Key, Star, Mail, LayoutTemplate, Utensils, HeartHandshake, Briefcase, ShoppingBag, BarChart as BarChartIcon, AlertTriangle, Wallet, Calculator, ArrowRight, Calendar, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';

// --- DATA & CONSTANTS ---

const CAPEX_DATA = [
  { name: 'Civil & Structure', value: 140, color: '#C5A028' }, // Gold
  { name: 'Interiors & FF&E', value: 110, color: '#334155' }, // Slate
  { name: 'MEP & Services', value: 60, color: '#475569' },    // Slate Light
  { name: 'Approvals/Land', value: 20, color: '#94a3b8' },    // Gray
  { name: 'Contingency', value: 20, color: '#e2e8f0' },       // White-ish
];

const MARKET_DATA = [
  { year: '2020', footfall: 2.1, supply: 0.8 },
  { year: '2021', footfall: 2.8, supply: 0.85 },
  { year: '2022', footfall: 3.5, supply: 0.9 },
  { year: '2023', footfall: 4.2, supply: 0.95 },
  { year: '2024', footfall: 5.0, supply: 1.0 }, // Gap widens
];

const TIMELINE_DATA = [
    { phase: "Phase 1", title: "Development", date: "Y1 - Y2", desc: "Civil Structure & Façade Completion" },
    { phase: "Phase 2", title: "Fit-out", date: "Y2 - Y2.5", desc: "Interiors, MEP, & Pre-opening" },
    { phase: "Phase 3", title: "Launch", date: "Y3 Q1", desc: "Soft Launch & Wedding Bookings" },
    { phase: "Phase 4", title: "Stabilization", date: "Y3 - Y4", desc: "Operational Breakeven & Yield Gen" },
    { phase: "Phase 5", title: "Exit / REIT", date: "Y5+", desc: "Asset Valuation Peak & Liquidity Event" },
];

// --- COMPONENTS ---

const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = false }) => (
  <div className={`bg-slate-950/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl relative overflow-hidden ${className} ${hoverEffect ? 'hover:bg-slate-900/50 hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300' : ''}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <div id={id} className={`relative w-full px-6 py-20 ${className}`}>
    <div className="container mx-auto relative z-20">
      {children}
    </div>
  </div>
);

const RangeSlider: React.FC<{ label: string; value: number; min: number; max: number; unit: string; onChange: (val: number) => void }> = ({ label, value, min, max, unit, onChange }) => (
    <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">{label}</span>
            <span className="text-gold-400 font-bold">{unit === '₹' ? `₹${value.toLocaleString()}` : `${value}${unit}`}</span>
        </div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            value={value} 
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
        />
    </div>
);

const InvestorView: React.FC = () => {
  // Calculator State
  const [occupancy, setOccupancy] = useState(65);
  const [arr, setArr] = useState(12000);
  
  // Simple Financial Logic
  const keys = 200;
  const days = 365;
  const roomRevenue = keys * (occupancy / 100) * arr * days;
  const fnbMultiplier = 1.6; // Event-led model multiplier
  const totalRevenue = roomRevenue * fnbMultiplier;
  const ebitdaMargin = 0.38; // 38% margin
  const ebitda = totalRevenue * ebitdaMargin;

  const formatCr = (val: number) => `₹${(val / 10000000).toFixed(1)} Cr`;

  return (
    <div className="bg-luxury-black text-slate-200 font-sans selection:bg-gold-500 selection:text-white overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND - Fixed for parallax effect */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")' }}
        />
        <div className="absolute inset-0 bg-slate-950/90" /> 
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-black mix-blend-overlay" />
      </div>

      {/* 1. HERO SECTION */}
      <Section className="min-h-screen flex items-center pt-32 pb-20" id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
             <div className="space-y-2 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-md mb-4">
                   <Shield size={12} className="text-gold-500" />
                   <span className="text-gold-400 uppercase text-[10px] font-bold tracking-[0.2em]">Institutional Grade Asset</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight">
                  SHIRSHUKK<br/>GRAND TOWERS
                </h1>
                <p className="text-3xl text-slate-300 font-light font-serif">
                  ₹350 Crore <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Project Valuation</span>
                </p>
             </div>

             <div className="bg-gradient-to-r from-white/10 to-transparent p-px h-px w-full max-w-xl my-6"></div>

             <p className="text-slate-400 text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
               A landmark twin-tower hospitality asset monetizing the structural wedding and pilgrimage demand of Guruvayur. 
               <br/><span className="text-white font-medium">Clean Title. High Yield. Clear Exit.</span>
             </p>

             {/* Metrics Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {[
                    { label: "Project Cost", val: "₹350 Cr", sub: "Locked Estimates", color: "border-l-gold-500", icon: DollarSign },
                    { label: "Land Area", val: "1.29 Ac", sub: "Freehold Title", color: "border-l-blue-500", icon: MapPin },
                    { label: "Inventory", val: "200 Keys", sub: "Event-Led Mix", color: "border-l-purple-500", icon: Key },
                    { label: "Construction", val: "40%", sub: "Civil Allocation", color: "border-l-green-500", icon: Building2 },
                ].map((m, i) => (
                    <GlassCard key={i} className={`p-4 flex flex-col justify-center border-l-2 ${m.color}`}>
                       <div className="text-slate-400 mb-2"><m.icon size={16} /></div>
                       <div className="text-xl font-serif text-white font-bold">{m.val}</div>
                       <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{m.sub}</div>
                    </GlassCard>
                ))}
             </div>

             <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gold-500 text-black hover:bg-white hover:text-black px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all shadow-[0_0_20px_rgba(197,160,40,0.3)] flex items-center gap-3">
                  <Mail size={18} /> Request IM
                </button>
                <button className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all flex items-center gap-3">
                  <Download size={18} /> Financial Model
                </button>
             </div>
          </div>

          {/* Interactive Chart Preview (Right Side) */}
          <div className="lg:col-span-5 relative hidden lg:block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/20 rounded-full blur-[100px]"></div>
             <GlassCard className="p-6 border-gold-500/30">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-serif">Projected Growth</h3>
                    <TrendingUp className="text-green-400" size={20} />
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                            { month: 'Y1', val: 30 }, { month: 'Y2', val: 45 }, { month: 'Y3', val: 75 },
                            { month: 'Y4', val: 110 }, { month: 'Y5', val: 160 }, { month: 'Y6', val: 220 }
                        ]}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#C5A028" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#C5A028" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="month" stroke="#666" tick={{fontSize: 10}} />
                            <YAxis stroke="#666" tick={{fontSize: 10}} />
                            <Tooltip contentStyle={{backgroundColor: '#000', borderColor: '#333'}} />
                            <Area type="monotone" dataKey="val" stroke="#C5A028" fillOpacity={1} fill="url(#colorVal)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-xs text-slate-500 mt-4 uppercase tracking-widest">Cumulative Cash Flow Projection (Illustrative)</p>
             </GlassCard>
          </div>
        </div>
      </Section>

      {/* 2. MARKET INTELLIGENCE (Data Visualization) */}
      <Section id="location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Market Intelligence</h3>
               <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Structural Gap</h2>
               <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  Guruvayur witnesses over 5 Million pilgrims annually. The current market inventory is fragmented, consisting mostly of lodges and budget hotels. 
                  <br/><br/>
                  <strong className="text-white">The Opportunity:</strong> There is zero 5-star inventory to capture the high-net-worth wedding and NRI demand.
               </p>
               <GlassCard className="p-6 border-l-4 border-l-blue-500">
                   <p className="text-xl text-white font-serif italic">"Demand exceeds supply by 400% in the luxury segment."</p>
               </GlassCard>
            </div>
            
            <GlassCard className="p-8">
                <h3 className="text-white mb-6 font-bold flex items-center gap-2">
                    <BarChartIcon size={16} className="text-blue-400" /> 
                    Footfall vs. Luxury Supply Index
                </h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MARKET_DATA}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="year" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#000', border: '1px solid #333'}} />
                            <Bar dataKey="footfall" name="Pilgrim Footfall (M)" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                            <Bar dataKey="supply" name="Luxury Supply Index" fill="#334155" radius={[4, 4, 0, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4 text-xs uppercase tracking-wider text-slate-400">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Demand</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-sm"></div> Existing Supply</div>
                </div>
            </GlassCard>
        </div>
      </Section>

      {/* 3. CAPEX VISUALIZER (Interactive Donut) */}
      <Section id="capex" className="bg-gradient-to-b from-black to-slate-950">
         <div className="text-center mb-16">
             <h2 className="font-serif text-4xl text-white">Capital Structure</h2>
             <p className="text-slate-400 mt-2">Breakdown of the ₹350 Cr Project Valuation</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="h-[400px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={CAPEX_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={100}
                            outerRadius={140}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {CAPEX_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{backgroundColor: '#000', borderColor: '#333', borderRadius: '8px'}} itemStyle={{color: '#fff'}} />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Total Valuation</div>
                    <div className="text-4xl font-serif text-white font-bold">₹350</div>
                    <div className="text-sm text-gold-500">Crores</div>
                </div>
            </div>

            {/* Legend / List */}
            <div className="space-y-4">
                {CAPEX_DATA.map((item, idx) => (
                    <GlassCard key={idx} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-12 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <div>
                                <h4 className="text-white font-medium text-lg">{item.name}</h4>
                                <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden w-24">
                                    <div className="h-full bg-white/20" style={{ width: `${(item.value / 350) * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-serif text-white">₹{item.value} Cr</div>
                            <div className="text-xs text-slate-500">{Math.round((item.value / 350) * 100)}% Allocation</div>
                        </div>
                    </GlassCard>
                ))}
            </div>
         </div>
      </Section>

      {/* 4. INTERACTIVE YIELD CALCULATOR (The Killer Feature) */}
      <Section id="revenue" className="bg-luxury-black border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/30 rounded-full bg-green-500/10 mb-6">
                   <Calculator size={12} className="text-green-400" />
                   <span className="text-green-400 uppercase text-[10px] font-bold tracking-[0.2em]">Interactive Model</span>
                </div>
                <h2 className="font-serif text-4xl text-white mb-6">Yield Calculator</h2>
                <p className="text-slate-400 mb-8">
                    Adjust the drivers to see the impact on EBITDA. The event-led model provides a high revenue multiplier compared to standard room-only assets.
                </p>
                <div className="p-6 bg-slate-900 rounded-xl border border-white/10">
                    <RangeSlider 
                        label="Occupancy Rate" 
                        value={occupancy} 
                        min={30} 
                        max={95} 
                        unit="%" 
                        onChange={setOccupancy} 
                    />
                    <RangeSlider 
                        label="Average Room Rate (ARR)" 
                        value={arr} 
                        min={8000} 
                        max={25000} 
                        unit="₹" 
                        onChange={setArr} 
                    />
                    <div className="text-xs text-slate-500 italic mt-4 border-t border-white/10 pt-4">
                        *Calculations assume 200 keys, 1.6x F&B multiplier, and ~38% EBITDA margin.
                    </div>
                </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Output Cards */}
                <div className="grid gap-6">
                    <GlassCard className="p-8 text-center border-t-4 border-t-blue-500">
                        <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Projected Annual Revenue</div>
                        <div className="text-4xl md:text-5xl font-serif text-white font-bold">{formatCr(totalRevenue)}</div>
                        <div className="text-green-400 text-sm mt-2 flex items-center justify-center gap-1">
                            <TrendingUp size={14} /> Driven by Weddings
                        </div>
                    </GlassCard>

                    <GlassCard className="p-8 text-center border-t-4 border-t-gold-500">
                        <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Projected Annual EBITDA</div>
                        <div className="text-4xl md:text-5xl font-serif text-gold-400 font-bold">{formatCr(ebitda)}</div>
                        <div className="text-slate-400 text-sm mt-2">
                            @ {Math.round(ebitdaMargin * 100)}% Margin
                        </div>
                    </GlassCard>
                </div>

                {/* Graph Representation of the Numbers */}
                <div className="h-[300px] bg-slate-900/50 rounded-xl p-4 border border-white/5">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                            { name: 'Room Rev', val: roomRevenue },
                            { name: 'Events/F&B', val: totalRevenue - roomRevenue },
                            { name: 'EBITDA', val: ebitda }
                        ]} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" stroke="#fff" width={80} tick={{fontSize: 10}} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', borderColor: '#333'}} />
                            <Bar dataKey="val" fill="#C5A028" barSize={30} radius={[0, 4, 4, 0]}>
                                { [roomRevenue, totalRevenue - roomRevenue, ebitda].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 2 ? '#C5A028' : '#334155'} />
                                )) }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
      </Section>

      {/* 5. VALUE CREATION TIMELINE */}
      <Section id="exit">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl text-white">Value Creation Roadmap</h2>
            <p className="text-slate-400 mt-2">Clear path to stabilization and exit</p>
          </div>
          
          <div className="relative">
              {/* Connector Line */}
              <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {TIMELINE_DATA.map((item, i) => (
                      <div key={i} className="relative group">
                          {/* Dot */}
                          <div className="w-4 h-4 bg-black border-2 border-gold-500 rounded-full mx-auto mb-6 relative z-10 group-hover:bg-gold-500 transition-colors hidden md:block">
                              <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                          </div>
                          
                          <GlassCard className="p-6 text-center hover:border-gold-500/50 transition-colors" hoverEffect>
                              <div className="text-xs text-gold-400 font-bold mb-2 uppercase tracking-widest">{item.phase}</div>
                              <div className="text-white font-serif text-xl mb-1">{item.date}</div>
                              <div className="text-white font-bold mb-3">{item.title}</div>
                              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                          </GlassCard>
                      </div>
                  ))}
              </div>
          </div>
      </Section>

      {/* 6. EXIT STRATEGY */}
      <Section id="strategy" className="pb-32">
         <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="p-12 md:p-20 relative overflow-hidden group">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
               
               <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 relative z-10">Exit Options</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                  <div className="bg-slate-900/60 p-8 rounded-xl border border-white/10 hover:border-gold-500/40 transition-colors">
                     <TrendingUp className="text-gold-500 w-10 h-10 mx-auto mb-4" />
                     <h3 className="text-white font-bold text-xl font-serif">REIT Acquisition</h3>
                     <p className="text-slate-400 text-sm mt-3">Pre-agreed ROFR with major hospitality REITs upon stabilization.</p>
                  </div>
                  <div className="bg-slate-900/60 p-8 rounded-xl border border-white/10 hover:border-gold-500/40 transition-colors">
                     <Wallet className="text-gold-500 w-10 h-10 mx-auto mb-4" />
                     <h3 className="text-white font-bold text-xl font-serif">Annuity Hold</h3>
                     <p className="text-slate-400 text-sm mt-3">Long-term dividend yield generation via management contract.</p>
                  </div>
               </div>
               
               <div className="flex flex-col md:flex-row gap-6 justify-center pt-8 border-t border-white/10 relative z-10">
                  <button className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg border border-white/5">
                     <Download size={20} /> Full Investment Memo (PDF)
                  </button>
                  <button className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg border border-white/5">
                     <Activity size={20} /> Request Feasibility Report
                  </button>
               </div>
            </GlassCard>
         </div>
      </Section>

      <footer className="relative z-10 bg-black/80 backdrop-blur border-t border-white/10 py-8 text-center">
         <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Live Shukran International Pvt Ltd. Confidential Investor Brief.</p>
      </footer>
    </div>
  );
};

export default InvestorView;