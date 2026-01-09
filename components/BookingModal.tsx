import React, { useState } from 'react';
import { X, Calendar, Users, Heart, Bed, ArrowRight, ShieldCheck, Check, Activity, Scan, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'room' | 'wedding';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialType = 'room' }) => {
  const [type, setType] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl bg-slate-900 border border-white/10 rounded-[5rem] overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.5)] animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 z-50 p-4 rounded-full bg-white/5 hover:bg-gold-500 text-white hover:text-onyx-950 transition-all active:scale-90 border border-white/10 shadow-2xl"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left Side: Cinematic Narrative */}
          <div className="lg:w-2/5 relative hidden lg:block overflow-hidden group">
            <img 
              src={type === 'wedding' 
                ? "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                : "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80"}
              className="w-full h-full object-cover brightness-[0.3] transition-transform duration-[10s] group-hover:scale-110"
              alt="Booking Visual"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50">
               <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
                  <Scan size={12} /> Inquiry_Node_01
               </div>
               <div className="text-white text-[7px] font-mono opacity-60 uppercase tracking-widest">
                  Status: Availability_Audit_Active
               </div>
            </div>

            <div className="absolute bottom-16 left-16 right-16 space-y-8">
               <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-gold-500 shadow-2xl">
                  <Clock size={32} className="animate-pulse" />
               </div>
               <div className="space-y-4">
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block">Legacy Reservation</span>
                  <h3 className="text-white font-serif text-5xl italic font-black leading-none">Capture <br/><span className="gold-gradient-text not-italic">The Moment.</span></h3>
               </div>
               <div className="flex items-center gap-4 text-emerald-400 text-[9px] font-black uppercase tracking-widest border-t border-white/5 pt-8">
                  <Activity size={12} className="animate-pulse" /> Real-time System Sync: Enabled
               </div>
            </div>
          </div>

          {/* Right Side: Interaction Terminal */}
          <div className="flex-1 p-12 md:p-20 bg-white flex flex-col justify-center relative">
            {!submitted ? (
              <div className="animate-fade-in space-y-12">
                <div className="flex gap-6">
                   <button 
                    onClick={() => setType('room')}
                    className={`flex-1 flex flex-col items-center gap-4 py-8 rounded-[3rem] text-[10px] font-black uppercase tracking-widest transition-all border ${type === 'room' ? 'bg-slate-950 text-white border-slate-950 shadow-2xl scale-105 z-10' : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-gold-300 hover:bg-white'}`}
                   >
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${type === 'room' ? 'bg-gold-500 text-onyx-950' : 'bg-white border border-slate-200'}`}>
                        <Bed size={24} />
                     </div>
                     Inventory Hub
                   </button>
                   <button 
                    onClick={() => setType('wedding')}
                    className={`flex-1 flex flex-col items-center gap-4 py-8 rounded-[3rem] text-[10px] font-black uppercase tracking-widest transition-all border ${type === 'wedding' ? 'bg-slate-950 text-white border-slate-950 shadow-2xl scale-105 z-10' : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-gold-300 hover:bg-white'}`}
                   >
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${type === 'wedding' ? 'bg-gold-500 text-onyx-950' : 'bg-white border border-slate-200'}`}>
                        <Heart size={24} />
                     </div>
                     Ritual Events
                   </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-slate-400 text-[9px] font-black uppercase tracking-widest ml-4">Full Legal Name</label>
                       <input required type="text" placeholder="GUEST_IDENTITY_01" className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 text-slate-950 text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-slate-400 text-[9px] font-black uppercase tracking-widest ml-4">Authorized Email</label>
                       <input required type="email" placeholder="ENCRYPTED_ADDRESS" className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 text-slate-950 text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-slate-400 text-[9px] font-black uppercase tracking-widest ml-4">Deployment Date</label>
                       <div className="relative group">
                          <input required type="date" className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 pr-16 py-5 text-slate-950 text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner cursor-pointer" />
                          <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-gold-600 pointer-events-none group-hover:scale-110 transition-transform" size={20} />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-slate-400 text-[9px] font-black uppercase tracking-widest ml-4">Load Count (Pax)</label>
                       <div className="relative group">
                          <input required type="number" min="1" placeholder="CAPACITY_SPEC" className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 pr-16 py-5 text-slate-950 text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner" />
                          <Users className="absolute right-6 top-1/2 -translate-y-1/2 text-gold-600 pointer-events-none group-hover:scale-110 transition-transform" size={20} />
                       </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-slate-950 hover:bg-gold-500 text-white hover:text-onyx-950 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.5em] text-[11px] transition-all shadow-3xl disabled:opacity-50 flex items-center justify-center gap-6 group active:scale-95"
                  >
                    {loading ? (
                       <> <Activity size={20} className="animate-spin" /> Verifying System Slots...</>
                    ) : (
                      <>Initialize Inquiry <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></>
                    )}
                  </button>
                  
                  <div className="flex justify-center items-center gap-6">
                     <span className="w-20 h-px bg-slate-100"></span>
                     <p className="text-slate-300 text-[8px] uppercase tracking-widest font-black italic">Institutional Concierge Loop Enabled</p>
                     <span className="w-20 h-px bg-slate-100"></span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center animate-fade-in py-20 space-y-10">
                 <div className="w-32 h-32 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.3)] group">
                    <Check size={56} className="text-emerald-500 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="space-y-4">
                    <h2 className="text-slate-950 font-serif text-6xl italic font-black leading-none tracking-tighter">Transmission <br/><span className="gold-gradient-text not-italic">Confirmed.</span></h2>
                    <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm mx-auto italic">
                       Your reservation parameters have been prioritized. Our asset manager will initiate contact within 120 minutes.
                    </p>
                 </div>
                 <button 
                  onClick={onClose}
                  className="bg-slate-50 border border-slate-200 hover:bg-slate-950 hover:text-white px-16 py-6 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-90"
                 >
                   Return to Hub
                 </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;