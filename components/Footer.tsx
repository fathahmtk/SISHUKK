import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-gold-400 font-serif text-2xl font-bold tracking-widest">SIRSHUKK</h2>
          <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider">Grand Towers • Hospitality • Weddings</p>
        </div>
        
        <div className="text-right">
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Developed By</p>
             <p className="text-slate-300 font-serif tracking-wider font-bold text-sm">LIVE SHUKRAN INTERNATIONAL PVT LIMITED</p>
             <p className="text-slate-600 text-xs mt-2">&copy; {new Date().getFullYear()} Confidential Investor Brief.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;