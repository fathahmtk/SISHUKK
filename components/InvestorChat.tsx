import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, MessageSquare } from 'lucide-react';
import { queryInvestorAssistant } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is the project cost?",
  "Explain the wedding revenue model.",
  "Why is the key count capped?",
  "What are the exit options?",
  "Detail the rooftop experience."
];

const InvestorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Greetings. I am the AI Relations Officer for Shirshukk Grand Towers. Accessing the master brief... How may I assist your inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input.trim();
    if (!textToSend || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: textToSend }]);
    setInput('');
    setIsLoading(true);

    const answer = await queryInvestorAssistant(textToSend);

    setMessages(prev => [...prev, { role: 'ai', content: answer }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button - Glass Style */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 pr-6 pl-4 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-gold-500/30 text-white shadow-[0_0_30px_rgba(197,160,40,0.15)] hover:shadow-[0_0_50px_rgba(197,160,40,0.3)] hover:border-gold-500 hover:-translate-y-1 transition-all duration-500"
        >
           <div className="relative">
             <div className="absolute inset-0 bg-gold-500 rounded-full blur animate-pulse opacity-50"></div>
             <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-full text-black">
                <Bot size={24} />
             </div>
           </div>
           <div className="text-left">
              <span className="block text-[10px] uppercase tracking-widest text-gold-400 font-bold">Investor AI</span>
              <span className="block text-xs font-serif italic text-slate-300">Ask the Master Brief</span>
           </div>
        </button>
      )}

      {/* Chat Window - Premium Glass Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-[450px] h-[600px] flex flex-col font-sans animate-fade-in-up">
           {/* Glass Container */}
           <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"></div>
           
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="relative z-10 flex justify-between items-center p-5 border-b border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-0 animate-pulse ring-2 ring-black"></div>
                 <Bot size={20} className="text-gold-400" />
              </div>
              <div>
                 <h3 className="text-white font-serif tracking-wide text-lg leading-none">IR Assistant</h3>
                 <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Live Shukran Intl.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed relative ${
                    msg.role === 'user' 
                      ? 'bg-gold-500/10 text-white border border-gold-500/20 rounded-tr-sm' 
                      : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-sm shadow-inner'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold-400 font-serif">$1</strong>').replace(/\n/g, '<br />') }} />
                  <span className="text-[9px] opacity-40 absolute bottom-1 right-3 uppercase tracking-widest mt-2 block">
                    {msg.role === 'ai' ? 'System' : 'You'}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (Glass Chips) */}
          {messages.length < 3 && !isLoading && (
             <div className="relative z-10 px-5 pb-3 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                   <button 
                    key={i} 
                    onClick={() => handleSend(q)}
                    className="text-[10px] uppercase tracking-wider font-bold bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 text-slate-300 hover:text-white py-2 px-3 rounded-lg transition-all duration-300"
                   >
                    {q}
                   </button>
                ))}
             </div>
          )}

          {/* Input Area */}
          <div className="relative z-10 p-5 bg-black/40 border-t border-white/10 backdrop-blur-md">
            <div className="flex gap-3 items-center bg-white/5 border border-white/10 rounded-xl px-2 py-2 focus-within:border-gold-500/50 focus-within:bg-black/60 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your query regarding the asset..."
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder-slate-500 px-2 font-sans"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-gold-500 hover:bg-gold-400 text-black p-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(197,160,40,0.3)] hover:shadow-[0_0_25px_rgba(197,160,40,0.5)]"
              >
                <Send size={16} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-600 mt-3 uppercase tracking-widest">
                AI responses based on Investor Master Brief v1.0
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestorChat;