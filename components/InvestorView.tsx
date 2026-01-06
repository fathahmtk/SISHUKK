import React from 'react';
import { Download, Shield, TrendingUp, Building2, MapPin, DollarSign, PieChart, CheckCircle2, Key, Star, Mail, LayoutTemplate, Utensils, HeartHandshake, Briefcase, ShoppingBag, BarChart, AlertTriangle, Wallet } from 'lucide-react';

const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = false }) => (
  <div className={`bg-slate-950/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl relative overflow-hidden ${className} ${hoverEffect ? 'hover:bg-slate-900/50 hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300' : ''}`}>
    {/* Subtle gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />
    <div className="relative z-10">
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

const InvestorView: React.FC = () => {
  return (
    <div className="bg-luxury-black text-slate-200 font-sans selection:bg-gold-500 selection:text-white overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND - Fixed for parallax effect */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")' }}
        />
        <div className="absolute inset-0 bg-slate-950/80" /> 
        {/* Gradient mesh for that 'futuristic' glow seen in the reference */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-black/80 mix-blend-overlay" />
      </div>

      {/* 1. HERO SECTION (Overview) */}
      <Section className="min-h-screen flex items-center pt-32 pb-20" id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Metrics Content */}
          <div className="lg:col-span-7 space-y-8">
             <div className="space-y-2 animate-fade-in-up">
                <h2 className="text-gold-400 tracking-[0.2em] uppercase text-sm font-bold flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gold-400"></span> 
                  Investor Master Brief
                </h2>
                <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight">
                  SHIRSHUKK<br/>GRAND TOWERS
                </h1>
                <p className="text-2xl text-slate-300 font-light">
                  ₹350 Crore Luxury Hotel Project
                </p>
             </div>

             <div className="bg-gradient-to-r from-white/10 to-transparent p-px h-px w-full max-w-xl my-6"></div>

             <p className="text-slate-400 text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
               A landmark twin-tower hospitality asset designed to monetise year-round wedding and pilgrimage demand in Guruvayur. Clean asset. Clean exit.
             </p>

             {/* Metrics Grid (Glass Cards) */}
             <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <GlassCard className="p-4 flex flex-col justify-center border-l-4 border-l-gold-500">
                   <div className="flex items-center gap-2 text-gold-400 mb-1">
                      <DollarSign size={16} /> <span className="text-xs uppercase tracking-wider font-bold">Project Cost</span>
                   </div>
                   <div className="text-2xl font-serif text-white">₹350 Cr</div>
                   <div className="text-xs text-slate-500">Hotel Only</div>
                </GlassCard>

                <GlassCard className="p-4 flex flex-col justify-center border-l-4 border-l-blue-500">
                   <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <MapPin size={16} /> <span className="text-xs uppercase tracking-wider font-bold">Land Area</span>
                   </div>
                   <div className="text-2xl font-serif text-white">1.29 Acres</div>
                   <div className="text-xs text-slate-500">Freehold</div>
                </GlassCard>

                <GlassCard className="p-4 flex flex-col justify-center border-l-4 border-l-purple-500">
                   <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <Building2 size={16} /> <span className="text-xs uppercase tracking-wider font-bold">Location</span>
                   </div>
                   <div className="text-2xl font-serif text-white">1.5 KM</div>
                   <div className="text-xs text-slate-500">From Temple</div>
                </GlassCard>

                <GlassCard className="p-4 flex flex-col justify-center border-l-4 border-l-green-500">
                   <div className="flex items-center gap-2 text-green-400 mb-1">
                      <Key size={16} /> <span className="text-xs uppercase tracking-wider font-bold">Inventory</span>
                   </div>
                   <div className="text-2xl font-serif text-white">~200 Keys</div>
                   <div className="text-xs text-slate-500">Event-Led Model</div>
                </GlassCard>
             </div>

             {/* Buttons */}
             <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all flex items-center gap-3">
                  <Download size={18} /> Download Project Report
                </button>
                <button className="bg-gold-500 text-white hover:bg-gold-600 px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all shadow-lg shadow-gold-500/20 flex items-center gap-3">
                  <Mail size={18} /> Investor Enquiry
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* 2. ICONIC REALITIES (Location) */}
      <Section id="location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Panel: The Vision */}
            <GlassCard className="p-10 lg:p-14 flex flex-col justify-between min-h-[500px] hoverEffect">
               <div>
                  <h3 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-4">Iconic Realities</h3>
                  <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Twin-Tower<br/>Luxury Hotel</h2>
                  <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                    Designed to dominate the skyline. Vertical symmetry creates brand power, while the "Event-Led" model ensures high-yield monetization of every square foot.
                  </p>
               </div>
               
               {/* Stat Row */}
               <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-white">02</div>
                    <div className="text-[10px] uppercase text-slate-500 mt-1">Towers</div>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <div className="text-3xl font-serif text-white">05</div>
                    <div className="text-[10px] uppercase text-slate-500 mt-1">Venues</div>
                  </div>
                   <div className="text-center border-l border-white/10">
                    <div className="text-3xl font-serif text-white">02</div>
                    <div className="text-[10px] uppercase text-slate-500 mt-1">Rooftops</div>
                  </div>
                   <div className="text-center border-l border-white/10">
                    <div className="text-3xl font-serif text-white">01</div>
                    <div className="text-[10px] uppercase text-slate-500 mt-1">Bridge</div>
                  </div>
               </div>
            </GlassCard>

            {/* Right Panel: The Checklist */}
            <GlassCard className="p-10 lg:p-14 flex flex-col justify-center min-h-[500px] hoverEffect">
               <div className="absolute top-0 right-0 p-6 opacity-20">
                  <Shield size={120} className="text-white" />
               </div>
               
               <h3 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-6">Investment Logic</h3>
               <h2 className="text-3xl lg:text-4xl font-serif text-white mb-10">Clean Asset Structure</h2>
               
               <ul className="space-y-6">
                 {[
                   { label: "1.5 KM from Guruvayur Temple", icon: MapPin },
                   { label: "No Land Cost Included (Clean)", icon: CheckCircle2 },
                   { label: "No Mixed-Use Complication", icon: CheckCircle2 },
                   { label: "Hospitality Compliant Zoning", icon: CheckCircle2 },
                   { label: "Bankable & REIT-Ready Asset", icon: TrendingUp },
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-lg text-slate-200 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                        <item.icon size={20} className="text-gold-400" />
                      </div>
                      {item.label}
                   </li>
                 ))}
               </ul>

               <div className="mt-10 pt-6 border-t border-white/10 text-slate-400 text-sm italic">
                  "Zero land acquisition risk. Demand is structural."
               </div>
            </GlassCard>

        </div>
      </Section>

      {/* 3. FACILITIES */}
      <Section id="facilities">
         <div className="flex items-end justify-between mb-12">
            <div>
               <h2 className="text-white font-serif text-4xl">Full Facilities</h2>
               <p className="text-slate-400 mt-2">Comprehensive 5-Star Infrastructure</p>
            </div>
            <div className="hidden md:block">
               <div className="flex items-center gap-2 text-gold-400 text-sm font-bold uppercase tracking-widest">
                  <Star size={16} fill="currentColor" /> Premium Spec
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LayoutTemplate, title: "Accommodation", desc: "Luxury rooms, suites, and presidential apartments." },
              { icon: HeartHandshake, title: "Events & Weddings", desc: "Grand pillar-less ballroom & outdoor decks." },
              { icon: Utensils, title: "Dining", desc: "Dual revolving rooftop restaurants & bars." },
              { icon: Star, title: "Wellness", desc: "Luxury spa, infinity pool, and yoga decks." },
              { icon: Briefcase, title: "Business", desc: "Conference halls and executive lounges." },
              { icon: ShoppingBag, title: "Retail", desc: "Luxury wedding couture & jewellery arcade." },
            ].map((item, i) => (
               <GlassCard key={i} className="p-8 hoverEffect group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <item.icon className="text-gold-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </GlassCard>
            ))}
         </div>
      </Section>

      {/* 4. REVENUE (New) */}
      <Section id="revenue" className="bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h3 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4">Financial Engine</h3>
               <h2 className="font-serif text-5xl text-white mb-6">Diversified Revenue</h2>
               <p className="text-xl text-slate-300 mb-8 font-light">
                 Diversified income streams reduce reliance on room occupancy. The model is anchored by high-margin event revenues.
               </p>
               <GlassCard className="p-6 inline-block border-l-4 border-l-green-500">
                  <p className="text-slate-200 italic text-lg">"Event-led revenues outperform rooms in margin and cash flow."</p>
               </GlassCard>
            </div>
            <div className="lg:w-1/2 w-full grid gap-4">
               {[
                 { label: "Weddings & Events", width: "90%", val: "Primary Driver", color: "bg-gold-500" },
                 { label: "Rooms & Suites", width: "60%", val: "Steady Flow", color: "bg-blue-500" },
                 { label: "F&B Destinations", width: "40%", val: "High Footfall", color: "bg-purple-500" },
                 { label: "Wellness & Retail", width: "25%", val: "Ancillary", color: "bg-slate-500" }
               ].map((bar, i) => (
                 <div key={i} className="bg-slate-900/60 p-5 border border-white/5 rounded-xl backdrop-blur-md">
                    <div className="flex justify-between text-white mb-3 text-sm font-bold uppercase tracking-wider">
                       <span>{bar.label}</span>
                       <span className="text-slate-400">{bar.val}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <div className={`h-full ${bar.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} style={{ width: bar.width }}></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </Section>

      {/* 5. CAPEX & RISK (Refined for 350 Cr) */}
      <Section id="capex">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            
            {/* Capex Side */}
            <div>
               <h2 className="font-serif text-3xl text-white mb-8">Capital Structure Report</h2>
               <GlassCard className="p-8">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                    <div>
                      <h3 className="text-2xl text-white font-serif">Project Cost</h3>
                      <p className="text-slate-500 text-sm">Hotel Development</p>
                    </div>
                    <div className="text-right">
                       <div className="text-gold-400 font-bold text-3xl">₹350 Cr</div>
                       <div className="text-[10px] text-green-400 uppercase tracking-widest mt-1">Estimates Locked</div>
                    </div>
                  </div>
                  <ul className="space-y-4">
                     {[
                       { item: "Civil & Structure (Twin Towers)", val: "₹140 Cr", status: "40%" },
                       { item: "Interiors & FF&E (Luxury Spec)", val: "₹110 Cr", status: "31%" },
                       { item: "MEP & Vertical Transport", val: "₹60 Cr", status: "17%" },
                       { item: "Land Development & Approvals", val: "₹20 Cr", status: "6%" },
                       { item: "Pre-opening & Contingency", val: "₹20 Cr", status: "6%" }
                     ].map((row, i) => (
                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                          <span className="text-slate-200 text-sm">{row.item}</span>
                          <div className="flex items-center gap-3">
                             <span className="text-white font-mono text-sm">{row.val}</span>
                             <span className="text-xs text-blue-300 bg-blue-900/20 px-2 py-0.5 rounded border border-blue-500/20 w-12 text-center">{row.status}</span>
                          </div>
                       </li>
                     ))}
                  </ul>
                  <div className="mt-6 pt-4 text-center">
                     <p className="text-slate-400 text-xs uppercase tracking-widest">Excludes Land Cost • Includes Finance Costs</p>
                  </div>
               </GlassCard>
            </div>

            {/* Risk Side */}
            <div>
               <h2 className="font-serif text-3xl text-white mb-8">Risk Mitigation</h2>
               <div className="grid gap-4">
                  {[
                    { title: "Construction Risk", desc: "Fixed EPC Contracts", icon: Building2 },
                    { title: "Demand Risk", desc: "Non-seasonal Wedding Market", icon: BarChart },
                    { title: "Operational Risk", desc: "Professional Hotel Operator", icon: Briefcase },
                    { title: "Competition", desc: "First-Mover Landmark Advantage", icon: Shield }
                  ].map((risk, i) => (
                    <div key={i} className="bg-slate-900/40 border border-white/10 p-5 flex items-start gap-4 rounded-xl hover:bg-slate-800/40 transition-colors">
                       <div className="bg-gold-500/10 p-3 rounded-lg text-gold-500">
                          <risk.icon size={20} />
                       </div>
                       <div>
                          <span className="text-white font-bold block text-lg">{risk.title}</span>
                          <span className="text-slate-400 text-sm">{risk.desc}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </Section>

      {/* 6. EXIT STRATEGY (New) */}
      <Section id="exit" className="pb-32">
         <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="p-12 md:p-20 relative overflow-hidden group">
               {/* Decorative background glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
               
               <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 relative z-10">Exit Strategy</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                  <div className="bg-slate-900/60 p-8 rounded-xl border border-white/10 hover:border-gold-500/40 transition-colors">
                     <TrendingUp className="text-gold-500 w-10 h-10 mx-auto mb-4" />
                     <h3 className="text-white font-bold text-xl font-serif">Asset Sale</h3>
                     <p className="text-slate-400 text-sm mt-3">Sale to REIT / PE Fund post stabilisation.</p>
                  </div>
                  <div className="bg-slate-900/60 p-8 rounded-xl border border-white/10 hover:border-gold-500/40 transition-colors">
                     <Wallet className="text-gold-500 w-10 h-10 mx-auto mb-4" />
                     <h3 className="text-white font-bold text-xl font-serif">Annuity Hold</h3>
                     <p className="text-slate-400 text-sm mt-3">Long-term dividend yield generation.</p>
                  </div>
               </div>
               
               <p className="text-xl text-slate-300 font-serif italic mb-10 relative z-10">"Clear exits. No trapped capital."</p>
               
               <div className="flex flex-col md:flex-row gap-6 justify-center pt-8 border-t border-white/10 relative z-10">
                  <button className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg border border-white/5">
                     <Download size={20} /> Investor Pitch Deck (PDF)
                  </button>
                  <button className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg border border-white/5">
                     <PieChart size={20} /> Financial Model Teaser
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