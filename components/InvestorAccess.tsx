import React, { useState } from 'react';
import { Lock, FileCheck, Shield, ShieldCheck, Mail, ArrowRight, ChevronRight } from 'lucide-react';

interface InvestorAccessProps {
  onOpenDeck?: () => void;
}

const InvestorAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="investor-access" className="py-12 bg-[#FDFBF7] border-y border-slate-200 relative h-full flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
           <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-8 text-gold-600 shadow-xl group hover:border-gold-400 transition-all">
              <Lock size={32} className="group-hover:rotate-12 transition-transform" />
           </div>
           
           <span className="text-gold-600 text-[9px] font-black uppercase tracking-[0.6em] block mb-4">Authorization Protocol</span>
           <h2 className="text-slate-950 font-serif text-4xl md:text-7xl mb-8 tracking-tighter italic">Secure <br/><span className="gold-gradient-text not-italic font-black">Data Room.</span></h2>
           <p className="text-slate-500 text-xl font-light leading-tight max-w-xl mx-auto italic border-x-2 border-gold-200 px-10">
             Financials and technical annexures available under authorized digital NDA.
           </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {status === 'idle' ? (
            <div className="bg-white border border-slate-200 p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative group">
               <div className="absolute top-0 right-0 p-8 opacity-[0.01] pointer-events-none group-hover:scale-110 transition-transform">
                  <Shield size={200} className="text-slate-950" />
               </div>
               
               <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                  <div className="space-y-3">
                     <label className="text-slate-400 text-[8px] font-black uppercase tracking-widest pl-6">Corporate Email Identity</label>
                     <div className="relative">
                        <input type="email" required placeholder="EX: PARTNER@FIRM.COM" value={email} onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 px-8 py-5 rounded-2xl text-slate-950 text-center focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-200 uppercase tracking-[0.2em] font-black text-xs" />
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-200" size={20} />
                     </div>
                  </div>
                  
                  <button type="submit" className="bg-slate-950 hover:bg-gold-500 text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all shadow-xl group">
                    Initialize Authorization <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex justify-between px-2">
                     <span className="text-[8px] text-slate-300 font-black uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={12} className="text-gold-500" /> AES-256 Encryption
                     </span>
                     <span className="text-[8px] text-slate-300 font-black uppercase tracking-widest italic">Sync: v.2.5 Institutional</span>
                  </div>
               </form>
            </div>
          ) : (
            <div className="bg-white border border-emerald-200 p-12 md:p-16 rounded-[4rem] text-center shadow-2xl animate-fade-in-up">
               <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500">
                  <FileCheck size={32} className="animate-bounce" />
               </div>
               <h2 className="text-slate-950 font-serif text-3xl mb-4 italic">Request Logged.</h2>
               <p className="text-slate-500 text-lg font-light leading-tight max-w-xs mx-auto mb-10">
                  Compliance is verifying your firm. NDA will be released to your inbox shortly.
               </p>
               <button onClick={() => setStatus('idle')} className="text-slate-400 hover:text-slate-950 text-[8px] font-black uppercase tracking-widest transition-all border-b border-slate-100 pb-1">
                 Submit Another Identity
               </button>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center items-center relative z-10">
           <button className="text-slate-400 hover:text-slate-950 text-[9px] font-black uppercase tracking-widest transition-colors flex items-center gap-4">
              Schedule Asset Briefing <ChevronRight size={12} className="text-gold-500" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorAccess;