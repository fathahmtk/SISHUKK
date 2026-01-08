import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, PieChart, ShieldCheck, Activity, Map, Bed, Utensils, Heart, Settings, LogOut } from 'lucide-react';

const SECTIONS = [
  { path: '/asset', label: '01 Asset', icon: Layers },
  { path: '/market', label: '02 Market', icon: Map },
  { path: '/hotel', label: '03 Hotel', icon: Bed },
  { path: '/events', label: '04 Events', icon: Activity },
  { path: '/dining', label: '05 Dining', icon: Utensils },
  { path: '/wellness', label: '06 Wellness', icon: Heart },
  { path: '/operations', label: '07 Ops', icon: Settings },
  { path: '/economics', label: '08 Finance', icon: PieChart },
  { path: '/risk', label: '09 Risk', icon: ShieldCheck },
  { path: '/exit', label: '10 Exit', icon: LogOut },
];

const DossierNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
      <div className="bg-onyx-900/40 backdrop-blur-3xl border border-white/10 p-4 rounded-full flex flex-col gap-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 institutional-border">
        {SECTIONS.map((s) => {
          const isActive = location.pathname === s.path;
          return (
            <Link
              key={s.path}
              to={s.path}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all group relative border ${
                isActive 
                ? 'bg-gold-500 text-onyx-950 scale-110 shadow-[0_0_25px_#D4AF37] border-gold-400' 
                : 'text-slate-500 border-transparent hover:bg-white/5 hover:text-white'
              }`}
            >
              <s.icon size={20} />
              <div className="absolute left-20 bg-onyx-950 border border-white/10 px-6 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-3xl">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{s.label}</span>
              </div>
              {isActive && (
                <div className="absolute -left-2 w-1.5 h-6 bg-gold-500 rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_10px_#D4AF37]"></div>
              )}
            </Link>
          );
        })}
      </div>
      <div className="text-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-px h-16 bg-gradient-to-b from-gold-500 to-transparent mx-auto"></div>
        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em] [writing-mode:vertical-lr] mt-6">Dossier Index</span>
      </div>
    </div>
  );
};

export default DossierNav;
