import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { queryInvestorAssistant } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is the estimated project cost?",
  "Why cap the keys at 200?",
  "Explain the wedding revenue model.",
  "What are the major risks?",
  "Tell me about the rooftop restaurants."
];

const InvestorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hello. I am the AI Investment Relations Officer for Sirshukk Towers. How can I assist you with the brief today?' }
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
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-gold-500 hover:bg-gold-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
        >
          <Bot size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold">Ask AI Brief</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[450px] h-[600px] bg-luxury-dark border border-gold-900/50 rounded-lg shadow-2xl flex flex-col font-sans">
          
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-luxury-black rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="text-gold-400 font-bold text-sm tracking-wide">INVESTOR RELATIONS AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-luxury-dark">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gold-900/30 text-white border border-gold-900/50' 
                      : 'bg-white/5 text-slate-300 border border-white/10'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-lg flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length < 3 && !isLoading && (
             <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                   <button 
                    key={i} 
                    onClick={() => handleSend(q)}
                    className="text-xs bg-white/5 hover:bg-gold-900/30 border border-white/10 hover:border-gold-500/30 text-slate-300 py-1 px-3 rounded-full transition-colors"
                   >
                    {q}
                   </button>
                ))}
             </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-luxury-black rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about details..."
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-gold-500"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-gold-500 hover:bg-gold-600 text-white p-2 rounded transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestorChat;