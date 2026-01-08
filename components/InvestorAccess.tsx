import React, { useState } from 'react';
import { Lock, ChevronRight, FileCheck, Shield } from 'lucide-react';

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
    <section id="investor-access" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold-500 border border-gold-500/20">
           <Lock size={24} />
        </div>
        
        <h2 className="text-white font-serif text-4xl md:text-5xl mb-6">Investor Access</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          SIRSHUKK GRAND TOWERS is available for confidential investor discussions. Detailed financial models, technical annexures, and approval roadmaps are shared upon execution of NDA.
        </p>

        {status === 'idle' ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Corporate Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-sm text-white text-center focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-600 uppercase tracking-widest text-xs"
            />
            <button 
              type="submit"
              className="bg-gold-500 hover:bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
            >
              Request Access <ChevronRight size={14} />
            </button>
          </form>
        ) : (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-sm animate-fade-in">
             <div className="flex flex-col items-center gap-4 text-emerald-500">
                <FileCheck size={32} />
                <span className="font-bold uppercase tracking-widest text-sm">Request Logged</span>
             </div>
             <p className="text-slate-400 text-xs mt-4">Our compliance team will review your credentials and release the NDA shortly.</p>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-8 items-center">
           <button className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">
              Schedule Meeting
           </button>
           {onOpenDeck && (
             <button 
                onClick={onOpenDeck}
                className="flex items-center gap-2 text-gold-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors border border-gold-500/30 px-6 py-3 rounded-full hover:bg-gold-500/10"
             >
                <Shield size={12} /> Enter Secure Data Room
             </button>
           )}
        </div>
      </div>
    </section>
  );
};

export default InvestorAccess;