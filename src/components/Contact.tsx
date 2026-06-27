import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal, Trash2, ShieldCheck, Sparkles, User, Cpu } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function Contact() {
  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Chatbot States
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container on updates
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isChatLoading]);

  // Load welcome prompt on start
  useEffect(() => {
    setChatMessages([
      {
        role: 'model',
        parts: [{ text: "Hello! I am Sheik Mohamed's AI Twin. I have his complete resume details loaded into my memory system! Feel free to ask me anything about his technical projects, Python/Django expertise, educational credentials, or career availability. Let's build together!" }]
      }
    ]);
  }, []);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 8000);
      } else {
        throw new Error(data.error || 'SMTP delivery failed.');
      }
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || 'Transmission failed. Ensure server connection is active.');
      setTimeout(() => setSubmitError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChatSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = chatInput.trim();
    if (!query || isChatLoading) return;

    setChatInput('');
    const newHistory: ChatMessage[] = [...chatMessages, { role: 'user', parts: [{ text: query }] }];
    setChatMessages(newHistory);
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history: chatMessages })
      });

      if (!response.ok) {
        throw new Error('System API offline');
      }

      const data = await response.json();
      setChatMessages(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }]);
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [
        ...prev, 
        { role: 'model', parts: [{ text: "I am Sheik Mohamed's local manual NLP Twin. My primary server connector experienced a minor lookup timeout. Feel free to use the Client Inquiry Board on the left or send an email directly to sheikmohamed0046@gmail.com!" }] }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const clearChat = () => {
    setChatMessages([
      {
        role: 'model',
        parts: [{ text: "Hello! I am Sheik's AI Twin. System refreshed. How can I help you learn more about his technical capabilities?" }]
      }
    ]);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">09 / Collaboration</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Initiate Consultation
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Send a direct message below or interact instantly with Sheik's AI Twin to review his credentials and project architectures.
          </p>
        </div>

        {/* Dual Content Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Traditional Message Form (Left Col) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <motion.div 
              whileHover={{ y: -2 }}
              className="p-8 rounded-[32px] glass-card border border-white text-left relative overflow-hidden"
            >
              <h3 className="font-display text-xl font-extrabold text-gray-950 mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" /> Client Inquiry Board
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-500 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs font-sans text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs font-sans text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-500 uppercase">Subject Topic</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="Technical opportunity, consulting project..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs font-sans text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-500 uppercase">Message Specifications</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    placeholder="Detail your requirements here..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs font-sans text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gray-950 text-white rounded-xl font-display font-semibold text-xs tracking-wide flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-md cursor-pointer disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      Transmit Inquiry
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl flex items-center gap-2 text-xs font-sans font-medium"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600 animate-pulse" />
                      Inquiry delivered! Check your inbox for our automated greeting.
                    </motion.div>
                  )}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl flex items-center gap-2 text-xs font-sans font-medium"
                    >
                      <Terminal className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Direct Connect Details */}
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-zinc-900 to-zinc-950 text-white text-left space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <h4 className="font-display text-base font-extrabold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Contact Coordinates
              </h4>

              <div className="space-y-4 text-xs font-sans text-zinc-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>+91 7708182774</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>sheikmohamed0046@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Villupuram, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 pt-4 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>Coordinates Checksum</span>
                <span className="text-cyan-400">Secure TLS</span>
              </div>
            </div>
          </div>

          {/* AI Twin Chatbot (Right Col) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-[32px] border border-gray-100 bg-white shadow-xl overflow-hidden flex flex-col justify-between min-h-[500px]">
              {/* Chat Header */}
              <div className="p-4 bg-gray-950 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-gradient-to-tr from-blue-500 to-cyan-400 text-white rounded-xl">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs">Sheik's AI Twin</h3>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-ping" />
                      LLM Agent Live
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={clearChat}
                    className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Refresh Chat Thread"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                ref={chatScrollRef}
                className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/50 text-left text-xs leading-normal"
              >
                <AnimatePresence initial={false}>
                  {chatMessages.map((msg, i) => {
                    const isModel = msg.role === 'model';
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 max-w-[85%] ${isModel ? '' : 'ml-auto flex-row-reverse'}`}
                      >
                        {/* Avatar */}
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                          isModel 
                            ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20' 
                            : 'bg-zinc-900 text-white'
                        }`}>
                          {isModel ? <Cpu className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                        </div>

                        {/* Content Bubble */}
                        <div className={`p-4 rounded-3xl ${
                          isModel 
                            ? 'bg-white border border-gray-150 text-gray-800 rounded-tl-none shadow-sm' 
                            : 'bg-gray-900 text-white rounded-tr-none'
                        }`}>
                          <p className="font-sans whitespace-pre-line leading-relaxed">
                            {msg.parts[0].text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {isChatLoading && (
                    <div className="flex gap-3 max-w-[80%]">
                      <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center shrink-0 animate-pulse">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-4 bg-white border border-gray-150 text-gray-500 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-1.5 italic font-sans">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                        AI Twin processing logic loops...
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-100 bg-white flex gap-2 shrink-0">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about project stacks, his academic records, or databases..."
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs font-sans text-gray-800"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isChatLoading}
                  className="px-5 bg-blue-600 text-white rounded-xl font-display font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/10 cursor-pointer disabled:bg-gray-200 disabled:shadow-none"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
