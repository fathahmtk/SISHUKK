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
        ? 'h-16 md:h-20 bg-onyx-950/90 backdrop-blur-xl border-b border-white/10' 
        : 'h-20 md:h-24 bg-transparent border-b border-white/5'
    }`}>
      <div className="w-full h-full px-4 md:px-12 flex items-center justify-between">
        {/* Brand Group */}
        <Link to="/" className="flex items-center gap-3 md:gap-6 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <Logo className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-700 group-hover:scale-110`} />
          </div>
          <div className="block border-l border-white/10 pl-4 md:pl-6">
            <div className="text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase leading-none mb-1 text-white">Sirshukk</div>
            <div className="text-brass-400 text-[7px] md:text-[8px] font-black tracking-[0.5em] uppercase leading-none">Grand Towers</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path, link.id)}
              className="text-[9px] font-black uppercase tracking-[0.3em] transition-all relative group flex items-center gap-2 text-white/50 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brass-400 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden sm:flex items-center gap-4 pr-6 border-r border-white/10">
             <div className="text-right">
                <span className="text-[7px] font-black uppercase tracking-widest block text-white/30">Node_v2.5</span>
                <span className="text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 text-emerald-400">
                   <Activity size={10} className="animate-pulse" /> Linked_Live
                </span>
             </div>
          </div>

          <button 
            onClick={onInvestorClick}
            className="flex items-center gap-2 md:gap-4 px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all bg-brass-400 text-onyx-950 hover:bg-white active:scale-95 shadow-lg"
          >
            <ScrollText size={14} />
            <span className="whitespace-nowrap">Project Pack</span>
          </button>

          <button 
            className="lg:hidden p-2 text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Width Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-onyx-950/98 backdrop-blur-2xl p-8 flex flex-col gap-10 animate-fade-in lg:hidden z-[210]">
           <div className="flex justify-between items-center pb-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                <Logo className="w-10 h-10" variant="gold" />
                <span className="text-brass-400 text-[10px] font-black uppercase tracking-widest">Report_v2.5</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-3 border border-white/10 rounded-2xl">
                <X size={24} />
              </button>
           </div>
           <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path, link.id)}
                  className="text-2xl font-serif italic text-white/40 hover:text-brass-400 py-6 border-b border-white/5 flex justify-between items-center group transition-all"
                >
                  {link.label} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
           </div>
           <button 
            onClick={() => { onInvestorClick?.(); setIsMobileMenuOpen(false); }}
            className="mt-auto w-full py-6 bg-brass-400 text-onyx-950 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-xl active:scale-95"
          >
            <BookOpen size={16} /> Access Full Monograph
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;