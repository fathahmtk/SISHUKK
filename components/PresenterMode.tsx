import React, { useState, useEffect } from 'react';
import { Mic, X, ChevronLeft, ChevronRight, MessageSquare, BookOpen, ToggleRight, ToggleLeft, Play, Pause, Maximize, Minimize } from 'lucide-react';

const TALK_TRACKS = [
  {
    id: 'v-hero',
    label: 'Opening Hooks',
    script: "Welcome to the future of spiritual hospitality. We are looking at a ₹350 Crore twin-tower asset in Guruvayur—the absolute hub of South India's sacred heritage. This isn't just a hotel; it's a yield-engine engineered for over 12 million annual visitors."
  },
  {
    id: 'v-market',
    label: 'The Demand Logic',
    script: "The core thesis is simple: Supply Void. While 12 million people visit Guruvayur annually and the region hosts 250 weddings a day, there are zero five-star hotels in the vicinity. We are capturing the high-end local and NRI demographic."
  },
  {
    id: 'v-capital',
    label: 'Capital Allocation',
    script: "Notice the capital efficiency. Our land is already 100% paid for and debt-free. We have 420 luxury keys distributed across two towers—optimizing for both residential stays and large-scale ceremonial events."
  },
  {
    id: 'v-valuation',
    label: 'Yield Audit',
    script: "Our valuation engine applies a conservative 12x EBITDA multiple. We are targeting a ₹1,236 Cr exit value by Year 7. The structural monopoly ensures our ADR remains insulated from market volatility."
  },
  {
    id: 'v-exit',
    label: 'Liquidity & Exit',
    script: "We've architected this asset for a 7-year institutional exit. Our target is a 3.5x Multiple, selling to global funds seeking stable, high-barrier spiritual assets with pure vegetarian fine-dining moats."
  }
];

const PresenterMode: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen && syncEnabled) {
      const element = document.getElementById(TALK_TRACKS[activeTrack].id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeTrack, isOpen, syncEnabled]);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setActiveTrack(prev => {
          if (prev < TALK_TRACKS.length - 1) return prev + 1;
          setIsAutoPlaying(false);
          return prev;
        });
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-8 z-[200] bg-white/10 hover:bg-gold-500 text-white hover:text-onyx-950 p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all shadow-2xl group animate-glint"
      >
        <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-onyx-950 text-white text-[8px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Activate Presentation Sync
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-32 right-8 z-[200] w-[450px] max-w-[90vw] bg-onyx-900 border border-gold-500/30 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] p-10 animate-fade-in-up backdrop-blur-3xl overflow-hidden border-t-gold-500">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
      
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-onyx-950 shadow-gold-glow">
            <Mic size={20} />
          </div>
          <div>
            <span className="text-white text-[10px] font-black uppercase tracking-widest block">Presentation Engine</span>
            <span className="text-gold-500 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
              <MessageSquare size={10} /> Pitch Narrative v2.5
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button 
             onClick={toggleFullscreen}
             className="p-2 hover:bg-white/10 rounded-lg transition-all text-slate-500 hover:text-white"
             title="Toggle Viewport Fullscreen"
           >
             {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
           </button>
           <button 
             onClick={() => setSyncEnabled(!syncEnabled)}
             className={`p-2 transition-all rounded-lg flex items-center gap-2 ${syncEnabled ? 'text-gold-500' : 'text-slate-600'}`}
             title="Toggle Viewport Sync"
           >
             {syncEnabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
             <span className="text-[8px] font-black uppercase">Sync</span>
           </button>
           <button onClick={() => { setIsOpen(false); setIsAutoPlaying(false); }} className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-500 hover:text-white">
             <X size={20} />
           </button>
        </div>
      </div>

      <div className="mb-8 relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{TALK_TRACKS[activeTrack].label}</span>
          <span className="text-gold-500 text-[10px] font-mono tracking-tighter">{activeTrack + 1} / {TALK_TRACKS.length}</span>
        </div>
        <div className="p-8 bg-black/60 rounded-[2rem] border border-white/5 min-h-[160px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mic size={80} className="text-white" />
           </div>
          <p className="text-slate-300 text-base leading-relaxed font-serif italic relative z-10">
            "{TALK_TRACKS[activeTrack].script}"
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => setActiveTrack(prev => Math.max(0, prev - 1))}
          className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all disabled:opacity-10 border border-white/5"
          disabled={activeTrack === 0}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`flex-1 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all ${isAutoPlaying ? 'bg-rose-500/20 text-rose-500 border border-rose-500/30' : 'bg-gold-500 text-onyx-950 shadow-gold-glow'}`}
        >
          {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
          {isAutoPlaying ? 'Pause Walkthrough' : 'Auto Playback'}
        </button>

        <button 
          onClick={() => setActiveTrack(prev => Math.min(TALK_TRACKS.length - 1, prev + 1))}
          className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all disabled:opacity-10 border border-white/5"
          disabled={activeTrack === TALK_TRACKS.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
        <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest">
          {syncEnabled ? 'Viewport Synchronized' : 'Manual Navigation Mode'}
        </p>
        <div className="flex gap-1">
          {TALK_TRACKS.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === activeTrack ? 'bg-gold-500 w-4' : 'bg-white/10 w-1'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresenterMode;