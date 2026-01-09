import React from 'react';
import { X, ShieldCheck, Landmark, Globe, FileText, Activity, PieChart, Info, ExternalLink, BarChart3, ChevronRight } from 'lucide-react';

interface AssetProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssetProfileModal: React.FC<AssetProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const profileData = {
    identity: [
      { label: "Legal Entity", value: "LS International Pvt Ltd" },
      { label: "Asset Class", value: "Hospitality Infrastructure" },
      { label: "Status", value: "Active Development (42%)", highlight: true },
      { label: "Registration", value: "SGT-KER-2024-X" },
    ],
    yield: [
      { label: "Exit IRR", value: "24.2%" },
      { label: "MOIC", value: "3.5x" },
      { label: "Stabilized EBITDA", value: "₹79.8 Cr" },
    ]
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-3xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-[4rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.1)] animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left Side: Editorial Accents */}
        <div className="md:w-2/5 bg-slate-50 p-16 flex flex-col justify-between relative overflow-hidden border-r border-slate-100">
           <div className="absolute top-[10%] left-[-10%] text-slate-100 font-serif text-[30rem] font-black pointer-events-none select-none italic leading-none">ID</div>
           
           <div className="relative z-10">
              <div className="w-16 h-16 bg-gold-500 rounded-3xl flex items-center justify-center text-white shadow-2xl mb-12">
                 <ShieldCheck size={32} />
              </div>
              <h2 className="text-slate-950 font-serif text-5xl leading-[0.9] font-black italic mb-8">
                 Institutional <br/><span className="gold-gradient-text italic font-black">Passport.</span>
              </h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.3em] leading-relaxed border-l border-gold-400 pl-6">
                 Verified Asset Intelligence v2.5. <br/>Authorized Portfolio Analysis.
              </p>
           </div>

           <div className="relative z-10 space-y-6 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-4 text-slate-400">
                 <Activity size={16} />
                 <span className="text-[10px] font-black uppercase tracking-widest">Global Status: Priority Alpha</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                 <Globe size={16} />
                 <span className="text-[10px] font-black uppercase tracking-widest">Regional Value: Tier-1 Hub</span>
              </div>
           </div>
        </div>

        {/* Right Side: Data Grid */}
        <div className="flex-1 p-12 md:p-20 overflow-y-auto custom-scrollbar bg-white">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 p-3 rounded-full bg-slate-50 hover:bg-gold-500 text-slate-400 hover:text-white transition-all z-20 border border-slate-200"
          >
            <X size={24} />
          </button>

          <div className="space-y-20">
            <section>
              <h3 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                <Info size={14} /> 01. Asset Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {profileData.identity.map((item, i) => (
                  <div key={i} className={`pb-8 border-b border-slate-100 group transition-all`}>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{item.label}</div>
                    <div className={`text-slate-900 font-serif text-2xl ${item.highlight ? 'text-gold-600 font-black' : ''}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                <BarChart3 size={14} /> 02. Performance Targets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileData.yield.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 text-center hover:shadow-2xl hover:border-gold-400 transition-all duration-500 group">
                    <div className="text-gold-600 font-serif text-5xl mb-3 group-hover:scale-110 transition-transform origin-center italic">{item.value}</div>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-10">
               <div className="flex items-center gap-5">
                  <FileText size={20} className="text-gold-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Memorandum Audited Jan 2025</span>
               </div>
               <button className="w-full sm:w-auto bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all flex items-center justify-center gap-4 group">
                  Full Data Room Access <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetProfileModal;