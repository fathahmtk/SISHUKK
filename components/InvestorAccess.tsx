import React, { useState } from 'react';
import { Lock, ChevronRight, FileCheck, Shield, ShieldCheck, Mail, Activity, ArrowRight } from 'lucide-react';

interface InvestorAccessProps {
  onOpenDeck?: () => void;
}

const InvestorAccess: React.FC<InvestorAccessProps> = ({ onOpenDeck }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="investor-access" className="py-48 bg-[#FDFBF7] border-y border-slate-200 relative overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] text-slate-100 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-60">P</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
           <div className="w-24 h-24 bg-white border border-slate-200 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 text-gold-600 shadow-2xl group hover:border-gold-400 transition-all">
              <Lock size={40} className="group-hover:rotate-12 transition-transform" />
           </div>
           
           <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Authorization Protocol</span>
           <h2 className="text-slate-950 font-serif text-6xl md:text-9xl mb-12 tracking-tighter italic">Secure <br/><span className="gold-gradient-text not-italic font-black">Data Room.</span></h2>
           <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl mx-auto italic border-x-2 border-gold-200 px-12">
             Detailed financials, technical annexures, and exit projections available under authorized digital NDA.
           </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {status === 'idle' ? (
            <div className="bg-white border border-slate-200 p-12 md:p-16 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.05)] relative group">
               <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                  <Shield size={300} className="text-slate-950" />
               </div>
               
               <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
                  <div className="space-y-4">
                     <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-8">Corporate Email Identity</label>
                     <div className="relative">
                        <input 
                          type="email" 
                          required
                          placeholder="EX: PARTNER@FIRM.COM" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 px-10 py-7 rounded-[2rem] text-slate-950 text-center focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-300 uppercase tracking-[0.3em] font-black text-sm"
                        />
                        <Mail className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-200" size={24} />
                     </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-slate-950 hover:bg-gold-500 text-white py-8 rounded-[2rem] text-[12px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 transition-all shadow-3xl active:scale-95 group"
                  >
                    Initialize Authorization <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <div className="flex justify-between px-4">
                     <span className="text-[9px] text-slate-300 font-black uppercase tracking-widest flex items-center gap-3">
                        <ShieldCheck size={14} className="text-gold-500" /> AES-256 Encryption Active
                     </span>
                     <span className="text-[9px] text-slate-300 font-black uppercase tracking-widest italic">Sync: v.2.5 Institutional</span>
                  </div>
               </form>
            </div>
          ) : (
            <div className="bg-white border border-emerald-200 p-16 md:p-24 rounded-[5rem] text-center shadow-3xl animate-fade-in-up">
               <div className="w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-12 text-emerald-500 shadow-xl">
                  <FileCheck size={48} className="animate-bounce" />
               </div>
               <h2 className="text-slate-950 font-serif text-5xl mb-6 italic">Request Logged.</h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed max-w-sm mx-auto mb-16">
                  Our compliance team is verifying your firm credentials. The Digital NDA will be released to your inbox shortly.
               </p>
               <button 
                onClick={() => setStatus('idle')}
                className="text-slate-400 hover:text-slate-950 text-[10px] font-black uppercase tracking-widest transition-all border-b border-slate-100 pb-2 hover:border-gold-500"
               >
                 Submit Another Identity
               </button>
            </div>
          )}
        </div>

        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-center gap-12 items-center relative z-10">
           <button className="text-slate-400 hover:text-slate-950 text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-4">
              Schedule Asset Briefing <ChevronRight size={14} className="text-gold-500" />
           </button>
           <div className="hidden md:block w-px h-6 bg-slate-200"></div>
           {onOpenDeck && (
             <button 
                onClick={onOpenDeck}
                className="flex items-center gap-4 text-gold-600 hover:text-slate-950 text-[10px] font-black uppercase tracking-widest transition-all group"
             >
                <ShieldCheck size={18} className="group-hover:scale-125 transition-transform" /> 
                <span className="border-b border-gold-200 group-hover:border-slate-950">Enter Secure Vault Node</span>
             </button>
           )}
        </div>
      </div>
    </section>
  );
};

export default InvestorAccess;