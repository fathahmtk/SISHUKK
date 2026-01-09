import React from 'react';
import { X, ShieldCheck, Landmark, Globe, FileText, Activity, PieChart, Info, ExternalLink, BarChart3, ChevronRight, Scan, Lock, Target } from 'lucide-react';

interface AssetProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssetProfileModal: React.FC<AssetProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const profileData = {
    identity: [
      { label: "Asset Identifier", value: "SIRSHUKK_GRAND_TOWERS" },
      { label: "Capital Class", value: "Trophy_Infra_Hospitality" },
      { label: "Asset Milestone", value: "Phase_02_Active", highlight: true },
      { label: "Verification", value: "SGT-KER-2025-V18" },
    ],
    yield: [
      { label: "Target IRR", value: "24.2%" },
      { label: "MOIC", value: "3.5x" },
      { label: "Audit Node", value: "Grade A" },
    ]
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl bg-white border border-slate-950/10 rounded-[5rem] overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.4)] animate-fade-in-up flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Left Side: Security Clearance Identity */}
        <div className="lg:w-2/5 bg-slate-950 p-16 flex flex-col justify-between relative overflow-hidden text-white">
           {/* Technical HUD Grid Overlay */}
           <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           <div className="relative z-10">
              <div className="w-20 h-20 bg-gold-500 rounded-3xl flex items-center justify-center text-onyx-950 shadow-gold-glow mb-12 animate-pulse">
                 <ShieldCheck size={40} />
              </div>
              <h2 className="text-white font-serif text-6xl leading-[0.8] font-black italic mb-10 tracking-tighter">
                 Asset <br/><span className="gold-gradient-text not-italic">ID_Scan.</span>
              </h2>
              <div className="space-y-6 border-l-2 border-gold-500/40 pl-8">
                 <p className="text-slate-400 text-xs font-black uppercase tracking-[0.4em]">Authorized Clearance Granted</p>
                 <div className="flex items-center gap-4 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    <Activity size={14} className="animate-pulse" /> Signal: Stable_Alpha
                 </div>
              </div>
           </div>

           <div className="relative z-10 pt-16 mt-16 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-slate-500">
                 <span>Bio-Sync Index</span>
                 <span className="text-gold-500">Verified</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-gold-500 animate-[loading_2s_infinite]"></div>
              </div>
           </div>
        </div>

        {/* Right Side: Credentials & Performance */}
        <div className="flex-1 p-16 lg:p-24 overflow-y-auto custom-scrollbar bg-white relative">
          <button 
            onClick={onClose}
            className="absolute top-12 right-12 p-4 rounded-full bg-slate-50 hover:bg-gold-500 text-slate-400 hover:text-white transition-all z-20 border border-slate-200 active:scale-90"
          >
            <X size={24} />
          </button>

          <div className="space-y-24">
            <section>
              <div className="flex items-center gap-6 mb-16">
                 <Scan size={18} className="text-gold-500" />
                 <h3 className="text-slate-950 text-[10px] font-black uppercase tracking-[0.6em] border-b border-slate-100 pb-4 flex-1">
                   Node_01 // Asset Credentials
                 </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {profileData.identity.map((item, i) => (
                  <div key={i} className="pb-10 border-b border-slate-50 group hover:pl-4 transition-all">
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{item.label}</div>
                    <div className={`text-slate-950 font-serif text-3xl italic ${item.highlight ? 'text-gold-600 font-black' : 'font-bold'}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-6 mb-16">
                 <Target size={18} className="text-gold-500" />
                 <h3 className="text-slate-950 text-[10px] font-black uppercase tracking-[0.6em] border-b border-slate-100 pb-4 flex-1">
                   Node_02 // Target Benchmarks
                 </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileData.yield.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-200 text-center group hover:bg-white hover:border-gold-500 hover:shadow-2xl transition-all duration-700">
                    <div className="text-gold-600 font-serif text-6xl mb-4 group-hover:scale-110 transition-transform font-black italic">{item.value}</div>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="pt-16 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-gold-500">
                     <Lock size={20} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-950 leading-none mb-1">Encrypted Session</div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 italic">Auth_Ref: SGT_2025_PIM</span>
                  </div>
               </div>
               <button className="w-full sm:w-auto bg-slate-950 text-white px-14 py-6 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-3xl flex items-center justify-center gap-6 group active:scale-95">
                  Access Full Ledger <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </footer>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
};

export default AssetProfileModal;