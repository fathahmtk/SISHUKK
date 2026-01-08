import React, { useState, useEffect } from 'react';
import { Mic, X, ChevronLeft, ChevronRight, MessageSquare, BookOpen } from 'lucide-react';

const TALK_TRACKS = [
  {
    id: 'hero',
    label: 'Opening Hooks',
    script: "Welcome to the future of spiritual hospitality. We are looking at a ₹350 Crore twin-tower asset in Guruvayur—the absolute hub of South India's sacred heritage. This isn't just a hotel; it's a yield-engine engineered for over 12 million annual visitors."
  },
  {
    id: 'market',
    label: 'The Demand Logic',
    script: "The core thesis is simple: Supply Void. While 12 million people visit Guruvayur annually and the region hosts 250 weddings a day, there are zero five-star hotels in the vicinity. We are capturing the high-end local and NRI demographic."
  },
  {
    id: 'economics',
    label: 'Capital Allocation',
    script: "Notice the capital efficiency. Our land is already 100% paid for and debt-free. We have 420 luxury keys distributed across two towers—optimizing for both residential stays and large-scale ceremonial events."
  },
  {
    id: 'exit',
    label: 'Liquidity & Exit',
    script: "We've architected this asset for a 7-year institutional exit. Our target is a 3.5x Multiple, selling to global funds seeking stable, high-barrier spiritual assets with pure vegetarian fine-dining moats."
  }
];

const PresenterMode: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-8 z-[200] bg-white/10 hover:bg-gold-500 text-white hover:text-onyx-950 p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all shadow-2xl group"
      >
        <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-onyx-950 text-white text-[8px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Open Presenter Guide
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-32 right-8 z-[200] w-[450px] bg-onyx-900 border border-gold-500/30 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] p-10 animate-fade-in-up backdrop-blur-3xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
      
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-onyx-950">
            <Mic size={20} />
          </div>
          <div>
            <span className="text-white text-[10px] font-black uppercase tracking-widest block">Presenter Guide</span>
            <span className="text-gold-500 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
              <MessageSquare size={10} /> Live Talk Track
            </span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-500 hover:text-white">
          <X size={20} />
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{TALK_TRACKS[activeTrack].label}</span>
          <span className="text-gold-500 text-[10px] font-mono">{activeTrack + 1} / {TALK_TRACKS.length}</span>
        </div>
        <div className="p-6 bg-black/40 rounded-2xl border border-white/5 min-h-[140px]">
          <p className="text-slate-300 text-sm leading-relaxed font-serif italic">
            "{TALK_TRACKS[activeTrack].script}"
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => setActiveTrack(prev => Math.max(0, prev - 1))}
          className="flex-1 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all disabled:opacity-30"
          disabled={activeTrack === 0}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setActiveTrack(prev => Math.min(TALK_TRACKS.length - 1, prev + 1))}
          className="flex-1 py-4 rounded-xl bg-gold-500 text-onyx-950 flex items-center justify-center transition-all disabled:opacity-30"
          disabled={activeTrack === TALK_TRACKS.length - 1}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest">
          Tip: Scroll to the relevant section as you speak.
        </p>
      </div>
    </div>
  );
};

export default PresenterMode;