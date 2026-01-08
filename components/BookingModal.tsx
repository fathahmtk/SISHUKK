import React, { useState } from 'react';
import { X, Calendar, Users, Heart, Bed, ArrowRight, ShieldCheck, Check } from 'lucide-react';

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
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-onyx-950/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl bg-onyx-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-3xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side: Visual Narrative */}
          <div className="lg:w-1/3 relative hidden lg:block">
            <img 
              src={type === 'wedding' 
                ? "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                : "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80"}
              className="w-full h-full object-cover brightness-[0.4]"
              alt="Booking Visual"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Availability Check</span>
               <h3 className="text-white font-serif text-3xl italic">Reserve Your <br/>Legacy.</h3>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            {!submitted ? (
              <div className="animate-fade-in">
                <div className="flex gap-4 mb-12">
                   <button 
                    onClick={() => setType('room')}
                    className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${type === 'room' ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-xl' : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/10'}`}
                   >
                     <Bed size={16} className="mx-auto mb-2" />
                     Room Inquiry
                   </button>
                   <button 
                    onClick={() => setType('wedding')}
                    className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${type === 'wedding' ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-xl' : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/10'}`}
                   >
                     <Heart size={16} className="mx-auto mb-2" />
                     Wedding RSVP
                   </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-slate-600 text-[10px] font-black uppercase tracking-widest pl-2">Full Name</label>
                       <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-gold-500/50" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-slate-600 text-[10px] font-black uppercase tracking-widest pl-2">Email Address</label>
                       <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-gold-500/50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-slate-600 text-[10px] font-black uppercase tracking-widest pl-2">Expected Date</label>
                       <div className="relative">
                          <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 pr-12 py-4 text-white text-sm focus:outline-none focus:border-gold-500/50" />
                          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" size={18} />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-slate-600 text-[10px] font-black uppercase tracking-widest pl-2">Guests</label>
                       <div className="relative">
                          <input required type="number" min="1" placeholder="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 pr-12 py-4 text-white text-sm focus:outline-none focus:border-gold-500/50" />
                          <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" size={18} />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-slate-600 text-[10px] font-black uppercase tracking-widest pl-2">Specific Requirements</label>
                     <textarea rows={3} placeholder="Special requests, event details..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-gold-500/50 resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gold-500 hover:bg-white text-onyx-950 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                  >
                    {loading ? "Transmitting..." : (
                      <>Initialize Request <ArrowRight size={18} /></>
                    )}
                  </button>
                  <p className="text-center text-slate-600 text-[8px] uppercase tracking-widest">
                    *Our concierge will contact you within 24 hours to finalize details.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center animate-fade-in py-12">
                 <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    <Check size={40} className="text-emerald-500" />
                 </div>
                 <h2 className="text-white font-serif text-5xl mb-6">Request Received.</h2>
                 <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm mx-auto mb-12">
                    Your inquiry has been encrypted and sent to our priority concierge desk. A dedicated lifestyle manager will reach out shortly.
                 </p>
                 <button 
                  onClick={onClose}
                  className="bg-white/5 border border-white/10 hover:border-white text-white px-12 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                 >
                   Return to Portfolio
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