
import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-onyx-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4" onClick={handleLinkClick}>
          <Logo className="w-8 h-8" />
          <div className="block">
            <div className="text-white text-[10px] font-black tracking-[0.3em] uppercase leading-none mb-1">Sirshukk</div>
            <div className="text-gold-500 text-[7px] font-black tracking-[0.4em] uppercase leading-none">Grand Towers</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:scale-105 transform duration-300 ${
                location.pathname === link.path ? 'text-gold-500 underline underline-offset-8 decoration-gold-500/30' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onInvestorClick}
            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all group shadow-xl"
          >
            <ShieldCheck size={12} className="group-hover:scale-110 transition-transform" />
            <span>Vault Access</span>
          </button>

          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-onyx-950 border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-up lg:hidden shadow-2xl">
           {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={handleLinkClick}
              className={`text-sm font-bold uppercase tracking-[0.2em] py-4 border-b border-white/5 last:border-0 ${
                location.pathname === link.path ? 'text-gold-500 pl-4 border-l-2 border-gold-500' : 'text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => {
               if (onInvestorClick) onInvestorClick();
               setIsMobileMenuOpen(false);
            }}
            className="mt-4 flex items-center justify-center gap-2 bg-gold-500 text-onyx-950 px-6 py-4 rounded-lg text-xs font-black uppercase tracking-widest shadow-2xl"
          >
            <ShieldCheck size={14} /> Investor Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
