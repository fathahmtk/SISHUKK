import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, PieChart, ShieldCheck, Activity, Map, Bed, Utensils, Heart, Settings, LogOut, FileText } from 'lucide-react';

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
  { path: '/report', label: 'Dossier', icon: FileText },
];

const DossierNav: React.FC = () => {
  const location = useLocation();

  // Hide on home page
  if (location.pathname === '/') return null;

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      {SECTIONS.map((section) => {
        const isActive = location.pathname === section.path;
        return (
          <Link
            key={section.path}
            to={section.path}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 shadow-lg border ${
              isActive 
                ? 'bg-slate-950 text-white border-slate-950 scale-110' 
                : 'bg-white text-slate-400 border-slate-200 hover:border-gold-400 hover:text-gold-600'
            }`}
          >
            <section.icon size={18} />
            
            {/* Tooltip Label */}
            <div className={`absolute left-14 bg-slate-950 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none ${
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}>
              {section.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DossierNav;