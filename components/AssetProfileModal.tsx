import React from 'react';
import { X, ShieldCheck, Landmark, Globe, FileText, Activity, PieChart, Info, ExternalLink, BarChart3 } from 'lucide-react';

interface AssetProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssetProfileModal: React.FC<AssetProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const profileData = {
    identity: [
      { label: "Legal Entity", value: "LS International Pvt Ltd" },
      { label: "Asset Class", value: "Institutional Real Estate / Hospitality" },
      { label: "Jurisdiction", value: "Kerala, India (Guruvayur)" },
      { label: "Registration", value: "LS-INTL-2024-KERALA" },
      { label: "Status", value: "Active Development (42.5% Complete)", highlight: true },
    ],
    capital: [
      { label: "Total Capital Outlay", value: "₹350 Crore (Net Capex)" },
      { label: "Land Equity", value: "1.29 Acres (Freehold, Debt-Free)" },
      { label: "Senior Debt Tranche", value: "₹210 Crore (Term-Sheet Executed)" },
      { label: "Institutional Tranche", value: "₹70 Crore (Active Deployment)" },
    ],
    yield: [
      { label: "Target Exit IRR", value: "24.2%", type: "Financial" },
      { label: "Equity Multiplier", value: "3.5x", type: "Financial" },
      { label: "Stabilized EBITDA", value: "₹79.8 Cr / Year", type: "Financial" },
    ]
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-onyx-950/90 backdrop-blur-2xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl bg-onyx-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-3xl animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]">
        {/* Decorative Side Panel */}
        <div className="md:w-1/3 bg-gold-500 p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Landmark size={300} className="text-onyx-950" />
          </div>
          <div className="relative z-10">
            <ShieldCheck size={48} className="text-onyx-950 mb-8" />
            <h2 className="text-onyx-950 font-serif text-5xl leading-tight font-black italic">Institutional <br/>Profile.</h2>
            <p className="text-onyx-950/70 mt-6 text-sm font-bold uppercase tracking-widest leading-relaxed">
              Verified Asset Intelligence v.2.5. <br/>Authorized Portfolio Analysis.
            </p>
          </div>
          <div className="relative z-10 pt-10 border-t border-onyx-950/10">
            <div className="flex items-center gap-4 text-onyx-950/60 mb-2">
              <Activity size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Global Ranking: Alpha</span>
            </div>
            <div className="flex items-center gap-4 text-onyx-950/60">
              <Globe size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Regional Priority: High</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-onyx-950/50">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-gold-500 text-white hover:text-onyx-950 transition-all z-20"
          >
            <X size={24} />
          </button>

          <div className="space-y-16">
            {/* Identity Section */}
            <section>
              <h3 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                <Info size={14} /> 01. Corporate Identity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {profileData.identity.map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-all ${item.highlight ? 'bg-gold-500/5 border-gold-500/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                    <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-2">{item.label}</div>
                    <div className={`text-white font-serif text-xl ${item.highlight ? 'text-gold-400 italic' : ''}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capital Matrix */}
            <section>
              <h3 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                <PieChart size={14} /> 02. Capital Structure
              </h3>
              <div className="space-y-4">
                {profileData.capital.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors">
                    <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                    <span className="text-white font-mono font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Performance Analytics */}
            <section>
              <h3 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                <BarChart3 size={14} /> 03. Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profileData.yield.map((item, i) => (
                  <div key={i} className="bg-onyx-900 p-8 rounded-3xl border border-white/5 text-center group hover:border-gold-500/50 transition-all">
                    <div className="text-gold-500 font-serif text-4xl mb-2 group-hover:scale-110 transition-transform">{item.value}</div>
                    <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA / Compliance */}
            <footer className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-slate-600">
                <FileText size={16} />
                <span className="text-[9px] font-black uppercase tracking-widest">Memorandum v2.5 Audited by Institutional Desk</span>
              </div>
              <button className="flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-gold-500 text-white hover:text-onyx-950 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10">
                Full Data Room Access <ExternalLink size={14} />
              </button>
            </footer>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #111827; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
      `}</style>
    </div>
  );
};

export default AssetProfileModal;