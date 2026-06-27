import { motion } from 'motion/react';
import { Code2, Figma, Sparkles, Cpu, Database, LayoutDashboard, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Web Engineering",
      description: "Developing hyper-responsive, lightning-fast web architectures using modern full-stack technologies with pristine performance.",
      details: ["SPA & server-side hybrid routing", "Serverless API proxy setups", "Performance audits and load-time optimization"],
      icon: Code2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "uiux",
      title: "UI/UX & Graphics",
      description: "Crafting beautiful interactive designs, layouts, logo symbols, and typography guidelines focused on user response.",
      details: ["Aesthetic design systems", "Logo & content graphics design", "Micro-interaction & layout spacing"],
      icon: Figma,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ai-int",
      title: "AI Integrations",
      description: "Embedding natural language processing, semantic search, and intelligence agents directly into your product workflows.",
      details: ["Gemini & LLM orchestration", "Automated prompt-to-task creation", "Semantic parsing & vector setups"],
      icon: Sparkles,
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: "automation",
      title: "Workflow Automation",
      description: "Developing high-integrity scheduled scripts, automated scraping, and server triggers to reduce manual overhead.",
      details: ["Cron job schedulers", "Webhook orchestration", "System-to-system data transfers"],
      icon: Cpu,
      color: "from-red-500 to-orange-500"
    },
    {
      id: "api-dev",
      title: "API Design & Backend",
      description: "Building robust RESTful and database frameworks with strict validation rules, secure controllers, and structured queries.",
      details: ["Django & Flask microservices", "Express backend structures", "High-performance database indexing"],
      icon: Database,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: "dashboards",
      title: "Dashboard & Visualizer",
      description: "Designing bespoke charts, grids, and analytics dashboards that present complex operational statistics in intuitive boards.",
      details: ["D3.js & custom canvas metrics", "Responsive bento cells layouts", "Real-time state tracking indicators"],
      icon: LayoutDashboard,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white/40">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">04 / Services</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Interactive Design & Systems Lab
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            Architecting specialized systems tailored for rapid business scaling. Seamlessly combining design intuition with structured code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((serv, index) => {
            const ServiceIcon = serv.icon;
            return (
              <motion.div
                key={serv.id}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[32px] glass-card relative overflow-hidden border border-white flex flex-col justify-between group min-h-[360px]"
              >
                {/* Background glow circle */}
                <div className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${serv.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-xl transition-all duration-500`} />

                <div className="space-y-6">
                  {/* Floating Icon Frame */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${serv.color} text-white shadow-md shadow-blue-500/5`}>
                    <ServiceIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {serv.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-sans leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </div>

                {/* Service Specifications Checklist */}
                <div className="border-t border-gray-100 pt-6 mt-6 space-y-2.5">
                  {serv.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex gap-2 items-center text-xs text-gray-600 font-sans">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
