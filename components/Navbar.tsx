import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.tsx';

interface NavbarProps {
  onInvestorClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInvestorClick }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { path: '/asset', label: 'Asset' },
    { path: '/market', label: 'Market' },
    { path: '/hotel', label: 'Hotel' },
    { path: '/economics', label: 'Economics' },
    { path: '/risk', label: 'Risk' },
    { path: '/exit', label: 'Exit' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-3xl border-b border-slate-100">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-5 group" onClick={handleLinkClick}>
          <Logo className="w-10 h-10 transition-transform duration-700 group-hover:scale-110" />
          <div className="block border-l border-slate-200 pl-5">
            <div className="text-slate-950 text-[11px] font-black tracking-[0.4em] uppercase leading-none mb-1">Sirshukk</div>
            <div className="text-gold-600 text-[8px] font-black tracking-[0.5em] uppercase leading-none">Grand Towers</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group h-24 flex items-center ${
                location.pathname === link.path ? 'text-gold-600' : 'text-slate-400 hover:text-slate-950'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-1 bg-gold-500 transition-all duration-500 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onInvestorClick}
            className="hidden sm:flex items-center gap-3 bg-slate-950 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-gold-500 hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] group active:scale-95"
          >
            <ShieldCheck size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Vault Access</span>
          </button>

          <button 
            className="lg:hidden text-slate-950 p-2 hover:bg-slate-50 rounded-full transition-colors border border-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Platinum Light */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white border-b border-slate-200 p-10 flex flex-col gap-8 animate-fade-in-up lg:hidden shadow-3xl">
           <div className="grid grid-cols-2 gap-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-xs font-black uppercase tracking-[0.2em] p-6 rounded-3xl border ${
                    location.pathname === link.path ? 'text-gold-600 bg-gold-50/50 border-gold-200' : 'text-slate-500 bg-slate-50 border-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
           </div>
          <button 
            onClick={() => {
               if (onInvestorClick) onInvestorClick();
               setIsMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-4 bg-slate-950 text-white py-6 rounded-3xl text-xs font-black uppercase tracking-[0.4em] shadow-2xl active:scale-95"
          >
            <ShieldCheck size={18} /> Authorize Session
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;