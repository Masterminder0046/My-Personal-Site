import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Server, CheckCircle, ArrowRight, X, Calendar, Settings, ShieldCheck } from 'lucide-react';
import hashCareerImg from '../assets/hash_career_dashboard.png';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  metric?: string;
  keyFeatures: string[];
  isFeatured?: boolean;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: "synapse-saas",
      title: "Synapse — AI-Powered Project Management SaaS",
      description: "An AI-powered SaaS platform featuring real-time task generation, Redis event loops, and synchronized teamwork boards.",
      longDescription: "A world-class, premium project management SaaS built to handle distributed workflows. It integrates natural language logic directly into sprint workflows to automatically generate action lists. Leverages non-blocking WebSocket triggers for live state distribution across teams.",
      category: "AI & Full-Stack",
      tags: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Web-sockets", "Docker", "JavaScript"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://saas-frontend-gs2l.onrender.com/",
      githubUrl: "https://github.com/Masterminder0046/AI-PROJECT-MANAGEMENT-SITE.git",
      metric: "Real-time task synchronization",
      keyFeatures: [
        "Django Rest Framework backend with clean API serialization",
        "Redis caching & non-blocking WebSocket channels",
        "AI task breakdown powered by natural language prompts",
        "Comprehensive containerized setup with Docker Compose"
      ],
      isFeatured: true
    },
    {
      id: "hash-career",
      title: "HASH Career — AI Placement Intelligence Platform",
      description: "An AI-powered placement platform featuring role-based access, Gemini AI resume evaluation, and Random Forest placement prediction.",
      longDescription: "Developed an AI-powered placement platform with role-based access for Students, Placement Officers, and Admins. Integrated Gemini AI for resume analysis, ATS scoring, interview evaluation, and personalized career roadmaps. Built a Random Forest ML model for placement prediction and implemented company matching with skill-gap analysis. Designed a responsive React frontend and RESTful Node.js/Express backend with interactive analytics dashboards.",
      category: "AI & Full-Stack",
      tags: ["React", "Node.js", "MongoDB", "Python", "Gemini AI", "Scikit-learn"],
      image: hashCareerImg,
      demoUrl: "https://hash-career.onrender.com/login",
      githubUrl: "https://github.com/Masterminder0046/Hash_Career.git",
      metric: "95% Prediction Accuracy",
      keyFeatures: [
        "Role-based portals for Students, Placement Officers, and Admins with custom analytical views",
        "Gemini AI integration for resume optimization, ATS scoring, and interview prep guides",
        "Random Forest classification model mapping student profiles to hiring probability scores",
        "Company criteria matching system highlighting critical skill gaps for targeted learning paths"
      ],
      isFeatured: true
    },
    {
      id: "support-ticketing",
      title: "Support System Web Application",
      description: "A help-desk ticketing solution with real-time issue logging, ticket auditing, and administrative workflows.",
      longDescription: "A secure, centralized organizational help-desk Built to streamline customer and technical service complaints. Incorporates granular administrative logs, user role assignments, ticket category indexing, and status tracking metrics.",
      category: "Web Applications",
      tags: ["Python", "Flask", "REST API", "HTML5", "CSS3", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/Masterminder0046/support_system.git",
      metric: "99.9% Ticket Accountability",
      keyFeatures: [
        "Lightweight Flask backend serving rapid REST endpoints",
        "Comprehensive database persistence leveraging relational MySQL",
        "Responsive, role-based dashboard layout for managers and agents",
        "Interactive analytics charts for monthly support resolutions"
      ],
      isFeatured: true
    },
    {
      id: "travelmate-ai",
      title: "TravelMate AI Planner",
      description: "Generative travel itinerary suite with interactive spatial maps layer integration and local weather forecasts.",
      longDescription: "A beautiful context-aware travel companion. By parsing seasonal temperatures, crowd densities, and budget tiers, TravelMate builds complete day-by-day travel boards with maps.",
      category: "Mobile & Web",
      tags: ["Python", "Flask", "React.js", "MySQL", "REST API", "Figma"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/sheikmohamed0046",
      metric: "120K+ Generative Routes",
      keyFeatures: [
        "Generates customized itineraries dynamically via API templates",
        "Google Maps spatial location pins overlay",
        "Highly aesthetic visual components styled in Figma"
      ],
      isFeatured: false
    },
    {
      id: "attendance-presence",
      title: "Insight Presence System",
      description: "An enterprise-grade hybrid check-in auditor with secure admin reporting and dashboard analytics.",
      longDescription: "A high-security attendance system monitoring remote and hybrid team presence. Features automatic CSV/PDF reporting cycles, scheduled shift changes, and secure password-less token logins.",
      category: "Web Applications",
      tags: ["Python", "Django", "MySQL", "REST API", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/Masterminder0046/EduAttend-Institutional-Attendance-Tracker-.git",
      metric: "100% Secure Auditing",
      keyFeatures: [
        "Django MVC structures enforcing absolute route safety",
        "Optimized MySQL relational indexing for quick database scans",
        "Automatic weekly reports delivered directly to system admins"
      ],
      isFeatured: false
    },
    {
      id: "resume-enhancer",
      title: "AI Resume & ATS Enhancer",
      description: "Smart text analysis matching resumes against target job profiles, advising on industry keyword counts.",
      longDescription: "An intelligent platform designed to analyze resume files against target specifications. Performs semantic checks to isolate key skill gaps and suggest phrasing modifications that boost match rates.",
      category: "AI & Full-Stack",
      tags: ["Python", "Flask", "React.js", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/sheikmohamed0046",
      metric: "88% Hire Response Boost",
      keyFeatures: [
        "Fuzzy token parser scanning keyword frequencies",
        "Dynamic client side diff viewer showcasing suggestions",
        "Pre-integrated prompt structures parsing target roles"
      ],
      isFeatured: false
    }
  ];

  const categories = ['All', 'AI & Full-Stack', 'Web Applications', 'Mobile & Web'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-gray-200 pb-8 text-left">
          <div>
            <h2 className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold mb-2">03 / Projects</h2>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Selected Engineered Labs
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            A portfolio of production-ready full-stack applications. Seamlessly integrating backend systems with modern, fluid user interfaces.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-start">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-display font-semibold text-xs transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                  : 'bg-white text-gray-600 hover:text-gray-900 border-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((proj, index) => {
            const isFirstFeatured = proj.id === 'synapse-saas';
            const colSpan = isFirstFeatured ? 'md:col-span-8' : 'md:col-span-4';
            return (
              <motion.div
                key={proj.id}
                layout
                whileHover={{ y: -4 }}
                className={`${colSpan} group relative flex flex-col justify-between rounded-[32px] overflow-hidden glass-card p-6 min-h-[380px] text-left border border-white`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover opacity-5 group-hover:scale-105 group-hover:opacity-10 transition-all duration-500" 
                  />
                  {/* Neon Radial Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent z-10" />
                </div>

                {/* Card Top Details */}
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold tracking-wider uppercase border border-blue-100">
                      {proj.category}
                    </span>
                    {proj.metric && (
                      <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">
                        ⚡ {proj.metric}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom / Tags & Buttons */}
                <div className="relative z-10 mt-8 pt-4 border-t border-gray-150/40">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.slice(0, 4).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono font-medium bg-gray-100/60 text-gray-600 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 4 && (
                      <span className="text-[9px] font-mono font-bold text-gray-400">
                        +{proj.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center gap-1 text-xs font-display font-semibold text-blue-600 hover:text-purple-600 cursor-pointer"
                    >
                      Inspect Blueprint
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-full bg-white border border-gray-150 text-gray-600 hover:text-blue-600 hover:border-blue-100 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {proj.demoUrl && proj.demoUrl !== '#' && (
                        <a 
                          href={proj.demoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2 rounded-full bg-white border border-gray-150 text-gray-600 hover:text-blue-600 hover:border-blue-100 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Project Details Drawer Lightbox Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
              />

              {/* Box */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-white w-full max-w-3xl rounded-[36px] shadow-2xl overflow-hidden border border-gray-100 z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]"
              >
                {/* Visual Half */}
                <div className="md:w-5/12 bg-zinc-950 relative overflow-hidden flex flex-col justify-between p-8 text-white min-h-[220px] md:min-h-full">
                  {/* Floating ambient glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

                  <div className="z-10 flex flex-col justify-between h-full space-y-8">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                        Project Blueprint
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-black mt-2 leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {selectedProject.metric && (
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                          <div>
                            <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Performance Metric</div>
                            <div className="text-xs font-bold text-white mt-0.5">{selectedProject.metric}</div>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <a 
                          href={selectedProject.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs rounded-xl border border-white/10 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                        {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                          <a 
                            href={selectedProject.demoUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-xs rounded-xl shadow-lg shadow-blue-500/10 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Half */}
                <div className="md:w-7/12 p-8 md:p-10 overflow-y-auto text-left space-y-6">
                  {/* Close trigger */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-150 transition-colors cursor-pointer text-gray-500 hover:text-gray-800"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-gray-900 text-lg flex items-center gap-2">
                      <Settings className="w-4 h-4 text-purple-600" /> System Architecture
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-sans">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-display font-extrabold text-gray-900 text-xs uppercase tracking-wider">
                      Key Capabilities Included
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedProject.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex gap-2.5 items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-xs font-sans leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-display font-extrabold text-gray-900 text-xs uppercase tracking-wider mb-2">
                      Full Technology Package
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100/50">
                          {tag}
                        </span>
                      ))}
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
