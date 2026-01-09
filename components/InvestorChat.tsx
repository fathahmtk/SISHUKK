import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, ShieldCheck, Sparkles, AlertCircle, TrendingUp, Landmark, Construction, ChevronRight } from 'lucide-react';
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
    { label: "Site Feed", icon: <Construction size={10} />, query: "What is the construction status?" }
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
          className="bg-white hover:bg-gold-500 text-slate-900 hover:text-white p-7 rounded-[2rem] shadow-2xl transition-all duration-500 active:scale-95 group relative border border-slate-200"
        >
          <Bot size={32} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          <div className="absolute -left-56 top-1/2 -translate-y-1/2 bg-white border border-slate-100 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl translate-x-4 group-hover:translate-x-0">
            <p className="text-slate-900 text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Institutional Intelligence</p>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[400px] md:w-[520px] bg-white/80 backdrop-blur-[50px] border border-white rounded-[3.5rem] shadow-[0_60px_120px_rgba(0,0,0,0.15)] overflow-hidden animate-fade-in-up flex flex-col">
          <div className="bg-white/50 border-b border-slate-100 p-8 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-gold-600 border border-slate-200 shadow-sm">
                 <Bot size={28} />
              </div>
              <div>
                <span className="text-slate-950 text-[11px] font-black uppercase tracking-widest leading-none block mb-1">Portfolio Intelligence</span>
                <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck size={10} /> Encrypted Session v2.5
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all border border-slate-200">
              <X size={20} className="text-slate-400" />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-10 space-y-8 custom-scrollbar">
            <div className="flex justify-start">
              <div className="bg-slate-50/50 p-8 rounded-[2.5rem] text-slate-600 border border-slate-100 text-[12px] leading-relaxed max-w-[90%] shadow-sm">
                 <Sparkles className="text-gold-500 mb-4" size={16} />
                 Greetings. I am authorized to disclose structural data, yield projections, and risk mitigation profiles for the SIRSHUKK asset.
                 <div className="mt-6 grid grid-cols-1 gap-3">
                    {quickQueries.map((q, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSend(q.query)}
                        className="flex items-center justify-between px-5 py-4 bg-white hover:bg-gold-50 hover:border-gold-300 border border-slate-200 rounded-2xl text-[10px] font-bold transition-all text-slate-500 hover:text-gold-600 shadow-sm group/btn"
                      >
                        <span className="flex items-center gap-3">{q.icon} {q.label}</span>
                        <ChevronRight size={12} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                      </button>
                    ))}
                 </div>
              </div>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-gold-500 text-white font-bold' : 'bg-white border border-slate-100 text-slate-600'} p-7 rounded-[2.5rem] text-[12px] leading-relaxed max-w-[85%] shadow-md whitespace-pre-wrap`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-4 text-[10px] text-slate-400 tracking-[0.2em] font-black uppercase animate-pulse pl-4">
                <div className="flex gap-1.5">
                   <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                   <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                Accessing Ledger...
              </div>
            )}
          </div>

          <div className="p-8 bg-white border-t border-slate-100">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query Capex, ADR, or IRR..."
                className="w-full bg-slate-50 border border-slate-200 rounded-3xl pl-8 pr-16 py-6 text-slate-900 text-[12px] focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-slate-400"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold-500 rounded-2xl text-white hover:bg-slate-900 transition-all flex items-center justify-center shadow-lg disabled:opacity-0"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="flex justify-between mt-6 px-4">
               <span className="text-[9px] text-slate-300 uppercase tracking-widest font-black flex items-center gap-2">
                 <AlertCircle size={10} /> Audited Gemini-3 Data
               </span>
               <span className="text-[9px] text-slate-300 uppercase tracking-widest font-black italic">
                 Context: {location.pathname === '/' ? 'DOSSIER' : location.pathname.slice(1).toUpperCase()}
               </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
      `}</style>
    </div>
  );
};

export default InvestorChat;