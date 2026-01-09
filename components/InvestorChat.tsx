import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, ShieldCheck, Sparkles, AlertCircle, TrendingUp, Landmark, Construction, ChevronRight, Scan, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { queryInvestorAssistant } from '../services/geminiService';

interface InvestorChatProps {
  isMinimal?: boolean;
}

const InvestorChat: React.FC<InvestorChatProps> = ({ isMinimal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const quickQueries = [
    { label: "IRR Projection", icon: <TrendingUp size={10} />, query: "Explain the 24.2% IRR projection." },
    { label: "Equity Stack", icon: <Landmark size={10} />, query: "What is the capital allocation?" },
    { label: "BIM Status", icon: <Scan size={10} />, query: "What is the BIM synchronization level?" }
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim() || isTyping) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);
    
    try {
      const pageName = location.pathname === '/' ? 'Home' : location.pathname.replace('/', '').toUpperCase();
      const context = `User is viewing ${pageName}. Response must be precise.`;
      const response = await queryInvestorAssistant(textToSend, context);
      setMessages(prev => [...prev, { role: 'bot', text: response || "Data sync error. Verify query." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Access restricted. Verify credentials." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (isMinimal && !isOpen) return null;

  return (
    <div className="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-6">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brass-400 hover:bg-white text-onyx-950 p-7 rounded-[2.5rem] shadow-premium transition-all duration-500 active:scale-95 group relative border border-brass-400/20"
        >
          <Bot size={32} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-onyx-950 rounded-full animate-pulse"></span>
          <div className="absolute -left-64 top-1/2 -translate-y-1/2 bg-onyx-950 border border-white/10 px-8 py-4 rounded-full opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-premium translate-x-4 group-hover:translate-x-0">
            <p className="text-brass-200 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Authorized Intelligence</p>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[400px] md:w-[540px] bg-onyx-900 border border-white/10 rounded-[3.5rem] shadow-[0_60px_150px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in-up flex flex-col backdrop-blur-3xl">
          <div className="bg-white/5 border-b border-white/10 p-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-brass-400 rounded-2xl flex items-center justify-center text-onyx-950 shadow-premium">
                 <Bot size={28} />
              </div>
              <div>
                <span className="text-white text-[12px] font-black uppercase tracking-widest leading-none block mb-1">Portfolio Core AI</span>
                <span className="text-brass-400 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <ShieldCheck size={12} className="text-emerald-500" /> Encrypted Session v4.2
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 text-white active:scale-90">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-[480px] overflow-y-auto p-10 space-y-10 custom-scrollbar bg-[radial-gradient(circle_at_top_right,_rgba(184,138,42,0.05)_0%,_transparent_70%)]">
            <div className="flex justify-start">
              <div className="bg-white/5 p-8 rounded-[2.5rem] text-slate-300 border border-white/10 text-[13px] font-light leading-relaxed max-w-[90%] shadow-premium font-editorial italic">
                 <Sparkles className="text-brass-400 mb-6" size={20} />
                 "Greetings. I am the lead technical assistant for the SIRSHUKK asset. My ledger is synchronized with current capex deployment and ritual market demand data. How may I assist your audit?"
                 <div className="mt-8 grid grid-cols-1 gap-3">
                    {quickQueries.map((q, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSend(q.query)}
                        className="flex items-center justify-between px-6 py-4 bg-onyx-950 hover:bg-brass-400 hover:text-onyx-950 border border-white/5 hover:border-brass-400 rounded-2xl text-[10px] font-bold transition-all text-slate-400 shadow-premium group/btn"
                      >
                        <span className="flex items-center gap-4 uppercase tracking-widest">{q.icon} {q.label}</span>
                        <ChevronRight size={14} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                      </button>
                    ))}
                 </div>
              </div>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-brass-400 text-onyx-950 font-black uppercase tracking-widest text-[11px]' : 'bg-white/5 border border-white/10 text-slate-200 font-light font-editorial italic text-[14px] leading-relaxed'} p-8 rounded-[2.5rem] max-w-[85%] shadow-premium whitespace-pre-wrap`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-6 text-[10px] text-brass-400 tracking-[0.4em] font-black uppercase animate-pulse pl-4">
                <div className="flex gap-2">
                   <div className="w-2 h-2 bg-brass-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-brass-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                   <div className="w-2 h-2 bg-brass-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                Accessing Ledger...
              </div>
            )}
          </div>

          <div className="p-8 bg-onyx-950 border-t border-white/5 relative">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Audit Capex, ADR, or BIM Sync..."
                className="w-full bg-white/5 border border-white/10 rounded-3xl pl-10 pr-20 py-7 text-white text-base focus:outline-none focus:border-brass-400 transition-all placeholder:text-slate-500 shadow-inner"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-brass-400 rounded-2xl text-onyx-950 hover:bg-white transition-all flex items-center justify-center shadow-premium disabled:opacity-0 active:scale-90"
              >
                <Send size={24} />
              </button>
            </div>
            <div className="flex justify-between mt-6 px-4">
               <span className="text-[9px] text-white/20 uppercase tracking-widest font-black flex items-center gap-3">
                 <AlertCircle size={12} /> Institutional Data Source
               </span>
               <div className="flex items-center gap-4 text-[9px] text-emerald-500 font-black uppercase tracking-widest italic">
                 <Activity size={12} className="animate-pulse" /> SGT_SYNC: 100%
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorChat;