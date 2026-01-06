import React from 'react';
import { Download, ArrowRight, Shield, TrendingUp, Building2, MapPin, DollarSign, PieChart, CheckCircle2, Key, Star, Mail, LayoutTemplate, Utensils, HeartHandshake, Briefcase, ShoppingBag } from 'lucide-react';

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
        <div className="absolute inset-0 bg-slate-950/70" /> 
        {/* Gradient mesh for that 'futuristic' glow seen in the reference */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-black/60 mix-blend-overlay" />
      </div>

      {/* 1. HERO SECTION (Model: Top Panel) */}
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
                  <Download size={18} /> Download Investor Deck
                </button>
                <button className="bg-gold-500 text-white hover:bg-gold-600 px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all shadow-lg shadow-gold-500/20 flex items-center gap-3">
                  <Mail size={18} /> Investor Enquiry
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* 2. ICONIC REALITIES / CHECKLIST (Model: Middle Panels) */}
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

      {/* 3. FULL FACILITIES (Model: Bottom Panel) */}
      <Section id="facilities" className="pb-32">
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

         {/* Floating Revenue Pill */}
         <div className="mt-12 flex justify-center">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex items-center gap-3 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
               <TrendingUp className="text-green-400" size={20} />
               <span className="text-slate-200 text-sm font-medium">Event-led revenues outperform rooms in margin and cash flow.</span>
            </div>
         </div>
      </Section>

      <footer className="relative z-10 bg-black/80 backdrop-blur border-t border-white/10 py-8 text-center">
         <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Live Shukran International Pvt Ltd. Confidential Investor Brief.</p>
      </footer>
    </div>
  );
};

export default InvestorView;