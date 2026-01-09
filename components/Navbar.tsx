import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Activity, Database } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.tsx';

interface NavbarProps {
  onInvestorClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInvestorClick }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const links = [
    { path: '/asset', id: 'the-asset', label: 'Asset' },
    { path: '/market', id: 'market', label: 'Market' },
    { path: '/hotel', id: 'hotel-summary', label: 'Hotel' },
    { path: '/economics', id: 'economics', label: 'Economics' },
    { path: '/risk', id: 'risk', label: 'Risk' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[200] transition-all duration-700 ${
      isScrolled 
        ? 'h-20 bg-onyx-950 border-b border-white/5 shadow-premium' 
        : 'h-24 bg-transparent border-b border-white/5'
    }`}>
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        {/* Brand Group */}
        <Link to="/" className="flex items-center gap-6 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <Logo className={`w-10 h-10 transition-all duration-700 group-hover:scale-110 ${isScrolled ? '' : 'drop-shadow-[0_0_20px_rgba(184,138,42,0.6)]'}`} />
            {!isScrolled && <div className="absolute -inset-2 bg-brass-400/10 rounded-full animate-pulse-slow"></div>}
          </div>
          <div className="block border-l border-white/10 pl-6 group-hover:border-brass-400/30 transition-colors">
            <div className={`text-[11px] font-black tracking-[0.5em] uppercase leading-none mb-1 transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>Sirshukk</div>
            <div className="text-brass-400 text-[8px] font-black tracking-[0.6em] uppercase leading-none">Grand Towers</div>
          </div>
        </Link>

        {/* Dynamic Desktop Links */}
        <div className="hidden lg:flex items-center gap-14">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path, link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group flex items-center gap-3 ${
                isScrolled ? 'text-white/60 hover:text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              <span className="w-1 h-1 rounded-full bg-brass-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className={`absolute -bottom-2 left-0 w-full h-[1.5px] bg-brass-400 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100`}></span>
            </Link>
          ))}
        </div>

        {/* Global Action Terminal */}
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-6 pr-8 border-r border-white/10">
             <div className="text-right">
                <span className={`text-[7px] font-black uppercase tracking-widest block mb-1 text-white/30`}>System Status</span>
                <span className={`text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 text-emerald-400`}>
                   <Activity size={10} className="animate-pulse" /> Live_BIM_Sync
                </span>
             </div>
          </div>

          <button 
            onClick={onInvestorClick}
            className={`flex items-center gap-4 px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 group shadow-premium ${
              isScrolled 
                ? 'bg-brass-400 text-onyx-950 hover:bg-white' 
                : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-brass-400 hover:text-onyx-950 hover:border-brass-400'
            }`}
          >
            <ShieldCheck size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Asset Core</span>
          </button>

          <button 
            className={`lg:hidden p-3 rounded-2xl transition-all border ${
              isScrolled ? 'text-white border-white/10 hover:bg-white/5' : 'text-white border-white/10 hover:bg-white/5'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-onyx-950/95 backdrop-blur-3xl p-10 flex flex-col gap-12 animate-fade-in lg:hidden z-[100]">
           <div className="flex justify-between items-center mb-10">
              <Logo className="w-12 h-12" variant="white" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
           </div>
           <div className="grid grid-cols-1 gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path, link.id)}
                  className="text-3xl font-serif italic text-white/50 hover:text-brass-400 p-6 border-b border-white/5 transition-all flex justify-between items-center group"
                >
                  {link.label} <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
           </div>
           <button 
            onClick={() => { if (onInvestorClick) onInvestorClick(); setIsMobileMenuOpen(false); }}
            className="mt-auto w-full py-8 bg-brass-400 text-onyx-950 rounded-3xl text-xs font-black uppercase tracking-[0.5em] shadow-premium flex items-center justify-center gap-4"
          >
            <Database size={18} /> Inspect Financial Core
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;