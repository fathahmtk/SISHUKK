import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, BookOpen, ScrollText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 w-full z-[300] transition-all duration-700 ${
      isScrolled 
        ? 'h-20 bg-onyx-950/95 backdrop-blur-2xl border-b border-white/10 shadow-premium' 
        : 'h-24 bg-transparent'
    }`}>
      <div className="w-full h-full px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Typographic Brand Anchor */}
        <Link 
          to="/" 
          className="flex flex-col group select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-[14px] md:text-[16px] font-black tracking-[0.4em] uppercase leading-none mb-1 text-white transition-colors duration-500 group-hover:text-brass-400">
            Sirshukk
          </div>
          <div className="text-brass-400 text-[8px] md:text-[9px] font-black tracking-[0.6em] uppercase leading-none opacity-60 group-hover:opacity-100 transition-all duration-500">
            Grand Towers
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path, link.id)}
              className="text-[9px] font-black uppercase tracking-[0.4em] transition-all relative group text-white/40 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-full h-px bg-brass-400 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Interaction Group */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <button 
            onClick={onInvestorClick}
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.25em] transition-all bg-white/5 border border-white/10 text-white hover:bg-brass-400 hover:text-onyx-950 hover:border-brass-400 active:scale-95 group"
          >
            <BookOpen size={14} className="group-hover:rotate-6 transition-transform duration-500 hidden sm:block" />
            <span className="whitespace-nowrap">Project Pack</span>
          </button>

          <button 
            className="p-2.5 sm:p-3 text-white border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all active:scale-90 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Width Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-onyx-950/98 backdrop-blur-3xl p-8 flex flex-col gap-10 animate-fade-in lg:hidden z-[310] overflow-y-auto">
           <div className="flex justify-between items-center pb-8 border-b border-white/5">
              <div className="flex flex-col">
                 <div className="text-white text-[16px] font-black uppercase tracking-[0.4em] leading-none mb-1">Monograph</div>
                 <div className="text-brass-400 text-[8px] font-black uppercase tracking-widest opacity-60">Master Record v2.5</div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-4 border border-white/10 rounded-2xl bg-white/5 active:scale-90 transition-transform">
                <X size={24} />
              </button>
           </div>
           
           <div className="flex flex-col gap-2 py-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path, link.id)}
                  className="text-4xl sm:text-5xl font-serif italic text-white/30 hover:text-brass-400 py-6 border-b border-white/5 flex justify-between items-center group transition-all duration-500"
                >
                  {link.label} 
                  <ArrowRight size={28} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0" />
                </Link>
              ))}
           </div>

           <div className="mt-auto space-y-6">
              <button 
                onClick={() => { onInvestorClick?.(); setIsMobileMenuOpen(false); }}
                className="w-full py-8 bg-brass-400 text-onyx-950 rounded-[2.5rem] text-[12px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 shadow-brass-glow active:scale-95 transition-all"
              >
                <ScrollText size={20} /> Open Full Dossier
              </button>
              <div className="flex items-center justify-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
                 <Activity size={10} className="text-emerald-500 animate-pulse" /> Asset_Node_Live_Sync: Active
              </div>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;