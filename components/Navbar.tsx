import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, BookOpen, ScrollText } from 'lucide-react';
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
    { path: '/asset', id: 'snapshot', label: 'Evidence' },
    { path: '/market', id: 'market', label: 'Context' },
    { path: '/hotel', id: 'hotel', label: 'Inventory' },
    { path: '/economics', id: 'economics', label: 'Integrity' },
    { path: '/exit', id: 'exit', label: 'Horizon' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
    <nav className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
      isScrolled 
        ? 'h-16 md:h-20 bg-onyx-950/95 backdrop-blur-xl border-b border-white/10' 
        : 'h-20 md:h-24 bg-transparent border-b border-white/5'
    }`}>
      <div className="w-full h-full px-6 md:px-12 flex items-center justify-between">
        {/* Brand Group */}
        <Link to="/" className="flex items-center gap-4 md:gap-6 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <Logo className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-700 group-hover:scale-110 shadow-brass-glow`} />
          </div>
          <div className="block border-l border-white/10 pl-4 md:pl-6 transition-colors group-hover:border-brass-400/50">
            <div className="text-[11px] md:text-[13px] font-black tracking-[0.4em] uppercase leading-none mb-1 text-white">Sirshukk</div>
            <div className="text-brass-400 text-[8px] md:text-[9px] font-black tracking-[0.5em] uppercase leading-none">Grand Towers</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path, link.id)}
              className="text-[10px] font-black uppercase tracking-[0.35em] transition-all relative group flex items-center gap-2 text-white/40 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-brass-400 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden xl:flex items-center gap-4 pr-8 border-r border-white/10">
             <div className="text-right">
                <span className="text-[7px] font-black uppercase tracking-widest block text-white/30 mb-0.5">Project Node</span>
                <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 text-emerald-400">
                   <Activity size={10} className="animate-pulse" /> SGT_SYNC_LIVE
                </span>
             </div>
          </div>

          <button 
            onClick={onInvestorClick}
            className="flex items-center gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-all bg-brass-400 text-onyx-950 hover:bg-white hover:shadow-brass-glow active:scale-95 shadow-premium group"
          >
            <ScrollText size={16} className="group-hover:rotate-12 transition-transform" />
            <span className="whitespace-nowrap">Project Pack</span>
          </button>

          <button 
            className="lg:hidden p-3 text-white border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-Width Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-onyx-950/98 backdrop-blur-3xl p-10 flex flex-col gap-12 animate-fade-in lg:hidden z-[210]">
           <div className="flex justify-between items-center pb-10 border-b border-white/5">
              <div className="flex items-center gap-5">
                <Logo className="w-12 h-12" variant="gold" />
                <div>
                   <div className="text-white text-[12px] font-black uppercase tracking-widest leading-none mb-1">Monograph</div>
                   <div className="text-brass-400 text-[9px] font-black uppercase tracking-widest opacity-60">Report v2.5</div>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-4 border border-white/10 rounded-[2rem] bg-white/5">
                <X size={28} />
              </button>
           </div>
           <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path, link.id)}
                  className="text-4xl font-serif italic text-white/30 hover:text-brass-400 py-6 border-b border-white/5 flex justify-between items-center group transition-all"
                >
                  {link.label} <ArrowRight size={28} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </Link>
              ))}
           </div>
           <button 
            onClick={() => { onInvestorClick?.(); setIsMobileMenuOpen(false); }}
            className="mt-auto w-full py-8 bg-brass-400 text-onyx-950 rounded-[2.5rem] text-[12px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 shadow-premium active:scale-95 transition-all"
          >
            <BookOpen size={20} /> Access Master Report
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;