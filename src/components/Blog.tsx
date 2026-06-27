import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, X, Clock, HelpCircle, Terminal } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "art-1",
      title: "Orchestrating Redis Event Loops in Django",
      category: "Backend Services",
      readTime: "5 min read",
      date: "May 12, 2026",
      summary: "How to leverage asynchronous tasks, message queue channels, and key-value cache memory to scale websocket requests in modern SaaS.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      content: [
        "In modern web applications, handling asynchronous tasks efficiently is paramount to maintaining a responsive UI. When building my AI-powered project management platform, Synapse, I integrated Redis to manage background event loops.",
        "Redis operates as an in-memory database that serves as an excellent message broker between Django REST Framework and Celery worker processes. By utilizing non-blocking task queues, long-running processes (like AI-driven task break downs) do not freeze the main HTTP request thread.",
        "To implement this, you first configure a Redis broker URL inside Django settings. Django Channels can then establish persistent, active WebSockets that route state updates directly back to connected React clients.",
        "The result is a highly responsive workflow board that syncs multi-user edits in real time (with sub-5ms transaction latency) while keeping server overhead minimal."
      ]
    },
    {
      id: "art-2",
      title: "The Beauty of Micro-Interactions in React 19",
      category: "UI Engineering",
      readTime: "4 min read",
      date: "Apr 28, 2026",
      summary: "Utilizing fluid timing parameters, negative layout bounds, and structural state transformations for award-winning web design.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      content: [
        "Award-winning web development is rarely defined by volume of features; it is defined by the absolute precision of execution. Micro-interactions are the subtle feedback transitions that turn a mechanical interface into an organic experience.",
        "With the release of React 19 and modern transition orchestrators like motion, declaring UI physics has never been easier. Transitions should mimic real-world inertia: rapid acceleration accompanied by a smooth deceleration curve.",
        "For example, when hovering over interactive bento cards, we apply a subtle scale change (scale: 1.02) and generate a dynamic shadows gradient. We also leverage negative spacing parameters to allow buttons or labels to emerge naturally from hidden layouts.",
        "By avoiding flashy, unnecessary animations and dedicating efforts to smooth hover-states, touch targets, and scrolling timeline progress, you create interfaces that are highly satisfying to navigate."
      ]
    },
    {
      id: "art-3",
      title: "Optimizing SQL Relational Joins for Large Datasets",
      category: "Databases",
      readTime: "6 min read",
      date: "Mar 15, 2026",
      summary: "Defining compound schemas, managing foreign index keys, and avoiding slow queries during bulk transactional lookups.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      content: [
        "Database performance is the bedrock of server scalability. In help-desk ticketing suites or school database structures, poorly indexed tables can quickly cause query timeouts under concurrent load.",
        "When optimizing relational tables in MySQL or Oracle SQL, developers must carefully define indexing schemes. A clustered index ensures the physical data rows are stored in sorted order, while a secondary index provides a lookup table targeting specific key combinations.",
        "When executing multiple INNER JOIN parameters, ensure foreign key constraints are matching identical data types. This prevents the query parser from performing slow full-table scans.",
        "By structuring transactional schemas cleanly, utilizing database normalization rules, and analyzing query execution logs, you can achieve sub-10ms dataset responses for complicated analytical reporting."
      ]
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-200 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">08 / Publications</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Technical Logs & Insights
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Sharing research logs detailing server scaling tactics, interactive UI states, and relational persistence paradigms.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {articles.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ y: -4 }}
              className="group relative rounded-[32px] overflow-hidden glass-card p-6 flex flex-col justify-between text-left border border-white min-h-[420px]"
            >
              {/* Image Banner */}
              <div className="h-44 rounded-2xl overflow-hidden mb-6 relative">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-white/50">
                  {art.category}
                </span>
              </div>

              {/* Text Area */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-500" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-extrabold text-gray-950 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-sans line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100/60 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-1 text-xs font-display font-semibold text-blue-600 hover:text-purple-600 cursor-pointer"
                  >
                    Read Full Article
                  </button>
                  <span className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal Lightbox */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-white w-full max-w-2xl rounded-[36px] shadow-2xl overflow-hidden border border-gray-100 z-10 text-left flex flex-col h-[85vh]"
              >
                {/* Header Close */}
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-150 transition-colors cursor-pointer text-gray-500 hover:text-gray-800 z-20 bg-white/80 backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Cover Image banner */}
                <div className="h-48 shrink-0 relative bg-zinc-950">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      {selectedArticle.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-black">
                      {selectedArticle.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 md:p-10 overflow-y-auto space-y-5 flex-1 text-gray-600 text-sm leading-relaxed font-sans">
                  <div className="flex gap-4 border-b border-gray-100 pb-4 text-xs font-mono text-gray-400">
                    <span>Published: {selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>

                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))}

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600">
                      <Terminal className="w-4 h-4" />
                      Compiled & Published by Sheik Mohamed
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
