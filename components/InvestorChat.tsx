
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, ShieldCheck, Sparkles, AlertCircle, TrendingUp, Landmark, Construction } from 'lucide-react';
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
    { label: "IRR Breakdown", icon: <TrendingUp size={10} />, query: "Explain the 24.2% IRR projection and exit assumptions." },
    { label: "Capex Deployment", icon: <Landmark size={10} />, query: "What is the breakdown of the ₹350 Crore capital allocation?" },
    { label: "Construction Status", icon: <Construction size={10} />, query: "What is the current technical progress on site?" }
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
      const pageName = location.pathname === '/' ? 'Home/Executive Summary' : location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2);
      const context = `User is currently viewing the ${pageName} page. Respond with institutional precision.`;
      
      const response = await queryInvestorAssistant(textToSend, context);
      setMessages(prev => [...prev, { role: 'bot', text: response || "Ledger data currently synchronized. Please re-verify the query." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Access temporarily restricted. Please verify your institutional credentials." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (isMinimal && !isOpen) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-4">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gold-500 hover:bg-white text-onyx-950 p-6 rounded-full shadow-[0_20px_60px_rgba(197,160,89,0.4)] transition-all active:scale-95 group relative border border-gold-400"
        >
          <Bot size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-onyx-950 rounded-full"></span>
          <div className="absolute -left-48 top-1/2 -translate-y-1/2 bg-onyx-900 border border-white/10 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Query AI Consultant</p>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[380px] md:w-[480px] bg-onyx-900/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden animate-fade-in-up flex flex-col">
          <div className="bg-gold-500 p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-onyx-950 rounded-xl flex items-center justify-center text-gold-500 border border-white/5">
                 <Bot size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-onyx-950 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Portfolio Consultant</span>
                <span className="text-onyx-950/60 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck size={10} /> Institutional Mode Active
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-all">
              <X size={20} className="text-onyx-950" />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-[420px] overflow-y-auto p-8 space-y-6 custom-scrollbar bg-black/30">
            <div className="flex justify-start">
              <div className="bg-white/5 p-6 rounded-2xl text-slate-300 border border-white/5 text-[11px] leading-relaxed max-w-[90%] shadow-xl">
                 <Sparkles className="text-gold-500 mb-3" size={14} />
                 Greetings. I am authorized to disclose structural data, IRR projections, and risk mitigation profiles for the SIRSHUKK asset. 
                 <div className="mt-4 grid grid-cols-1 gap-2">
                    {quickQueries.map((q, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSend(q.query)}
                        className="flex items-center gap-2 px-3 py-2 bg-onyx-950/50 hover:bg-gold-500/10 border border-white/5 hover:border-gold-500/30 rounded-lg text-[9px] font-bold transition-all text-slate-400 hover:text-gold-400 text-left"
                      >
                        {q.icon} {q.label}
                      </button>
                    ))}
                 </div>
              </div>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-gold-500 text-onyx-950 font-bold' : 'bg-white/5 text-slate-300 border border-white/10'} p-5 rounded-2xl text-[11px] leading-relaxed max-w-[85%] shadow-2xl whitespace-pre-wrap`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-3 text-[9px] text-slate-500 tracking-[0.2em] font-black uppercase animate-pulse pl-2">
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-bounce"></div>
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                Accessing Institutional Vault...
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/10 bg-onyx-950">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query IRR, DSC, or Capex..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-16 py-5 text-white text-[11px] focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-slate-700"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold-500 rounded-xl text-onyx-950 hover:bg-white transition-all flex items-center justify-center shadow-lg disabled:opacity-0"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="flex justify-between mt-4 px-2">
               <span className="text-[8px] text-slate-700 uppercase tracking-widest font-black flex items-center gap-1">
                 <AlertCircle size={8} /> Audited Gemini 3.0 Dataset
               </span>
               <span className="text-[8px] text-slate-700 uppercase tracking-widest font-black italic">
                 Context: {location.pathname === '/' ? 'Dossier' : location.pathname.slice(1).toUpperCase()}
               </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(197,160,89,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #C5A059; }
      `}</style>
    </div>
  );
};

export default InvestorChat;
