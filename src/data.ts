import { Project, Service, ExperienceItem, BlogArticle, Testimonial } from './types';
import hashCareerImg from './assets/hash_career_dashboard.png';

export const HERO_DATA = {
  name: "Sheik Mohammed",
  title: "Creative Technologist",
  subtitle: "Building the Next Era of Digital Experiences",
  scrambleWords: [
    "Frontend Architect",
    "Creative Director",
    "AI Systems Integrator",
    "Full-Stack Engineer",
    "UI/UX Designer"
  ],
  bio: "Crafting fluid digital interactions, bento layouts, and premium interfaces. Bridging the gap between pure artistic visual design and high-performance, responsive full-stack engineering.",
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "48+", label: "Projects Completed" },
    { value: "99.8%", label: "Client Satisfaction" },
    { value: "14", label: "Awwwards / Behance Stars" }
  ]
};

export const PROJECTS_DATA: Project[] = [
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
    id: "ai-saas",
    title: "AI Project Management SaaS",
    description: "An intelligent productivity engine with real-time analytics, automatic task allocation, and natural language workspace creation.",
    longDescription: "A revolutionary task engine designed for decentralized teams. It leverages local intelligence and advanced visual pipelines to dynamically distribute tasks, predict milestone risks, and summarize sprint cycles with deep semantic analysis.",
    category: "AI & Full-Stack",
    tags: ["React", "Express", "Gemini AI", "Tailwind v4", "Docker"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/Masterminder0046/AI-PROJECT-MANAGEMENT-SITE.git",
    metric: "40% Efficiency Gain",
    keyFeatures: [
      "Natural Language prompt-to-workspace builder",
      "Dynamic resource leveling & risk prediction models",
      "Interactive 3D-like Gantt bento visualizer"
    ],
    isFeatured: true
  },
  {
    id: "travelmate",
    title: "TravelMate AI",
    description: "Personalized intelligent travel planning suite generating rich itineraries, local recommendations, and real-time transit optimizations.",
    longDescription: "An immersive travel companion applet utilizing contextual machine learning to curate multi-day adventures. Automatically checks local transit feeds, weather reports, and crowd densities to re-route plans on the fly.",
    category: "Mobile & Web",
    tags: ["React Native", "Flask", "Google Maps", "Tailwind", "Python"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    metric: "120K+ Users Globally",
    keyFeatures: [
      "Generative multi-city itinerary builder",
      "Real-time Google Maps API custom spatial layers",
      "Offline itinerary caching with localized offline-first sync"
    ],
    isFeatured: true
  },
  {
    id: "attendance-mgt",
    title: "Insight Presence System",
    description: "Next-gen biometric and spatial attendance manager featuring high-accuracy analytics, visual dashboards, and API webhooks.",
    longDescription: "Enterprise-grade organizational hub built for security and hybrid attendance auditing. Seamlessly tracks real-time team check-ins, leaves, and activity streams with high-performance reporting metrics.",
    category: "Enterprise Software",
    tags: ["React", "Django", "MySQL", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/Masterminder0046/EduAttend-Institutional-Attendance-Tracker-.git",
    metric: "99.9% Audit Accuracy",
    keyFeatures: [
      "Ultra-low latency web auditing dashboards",
      "Flexible REST API with custom webhooks for custom pipelines",
      "Automated PDF & spreadsheet report builders"
    ],
    isFeatured: false
  },
  {
    id: "bookstore",
    title: "Aether Bookstore Engine",
    description: "An elegant, high-performance book marketplace featuring semantic search, recommendations, and secure checking systems.",
    longDescription: "A highly stylized reading experience with lightning-fast catalog search, client-side bookmark synchronization, and custom review sections styled in a modern, content-first layout.",
    category: "E-Commerce",
    tags: ["React", "SQLite", "Node.js", "Tailwind v4", "Lucide"],
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    metric: "2.4s Average Load Time",
    keyFeatures: [
      "Fuzzy text catalog search with index pre-fetching",
      "Stripe payment integration with persistent cart state",
      "Editorial serif typography and dark/light dynamic reading modes"
    ],
    isFeatured: false
  },
  {
    id: "resume-enhancer",
    title: "AI Resume Enhancer",
    description: "An intelligent platform analyzing resumes against targeted job descriptions, offering real-time phrasing suggestions.",
    longDescription: "A smart editorial assistant that parses resumes in various formats, matches semantic vectors with modern job profiles, and suggests tailored industry keywords to dramatically increase ATS score margins.",
    category: "AI & Productivity",
    tags: ["React", "Flask", "Gemini SDK", "CSS3", "Python"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    metric: "88% Hire Callback Boost",
    keyFeatures: [
      "Dynamic text diffing visualizer",
      "ATS Scoring Simulator with semantic keywords extraction",
      "One-click tailored cover letter builder"
    ],
    isFeatured: true
  },
  {
    id: "tourism-portal",
    title: "Odyssey Tourism Hub",
    description: "A premium, visually immersive storytelling portal showcasing global cultural landmarks with panoramic components.",
    longDescription: "A highly cinematic visual exploration website with parallax scroll sections, ambient sound cues, interactive spatial charts, and elegant micro-transitions showcasing the wonders of heritage tourism.",
    category: "Creative Web Design",
    tags: ["HTML5", "CSS3", "Vite", "Motion/React", "Behance"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    metric: "Awwwards Site of the Day nominee",
    keyFeatures: [
      "Immersive scroll-driven visual transitions",
      "Vector-based interactive localized landmark atlas",
      "Fluid typography and layout optimized for ultra-wide displays"
    ],
    isFeatured: false
  },
  {
    id: "task-app",
    title: "Linear Task Board",
    description: "A keyboard-optimized, high-speed project planner focused on lightning fast developer hotkeys and minimalist bento cells.",
    longDescription: "A developer-focused task organizer designed to work entirely with keyboard hotkeys, offering beautiful canvas-based task connections, dynamic drag boards, and instant state restoration.",
    category: "Productivity",
    tags: ["React", "Vite", "motion", "Tailwind CSS", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    metric: "0ms Keyboard Latency",
    keyFeatures: [
      "Rich keyboard command palette interface (Raycast style)",
      "Draggable bento lanes with elastic springs",
      "Full offline persistence with live-tab sync"
    ],
    isFeatured: false
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    title: "Web Engineering",
    description: "Developing hyper-responsive, lightning-fast web architectures using modern full-stack technologies with pristine performance.",
    details: ["SPA & server-side hybrid routing", "Serverless API proxy setups", "Performance audits and load-time optimization"],
    iconName: "Code2"
  },
  {
    id: "uiux",
    title: "UI/UX & Creative Direction",
    description: "Crafting beautiful interactive designs, layouts, and typography guidelines focused on user attention and emotional response.",
    details: ["Aesthetic design systems", "Interactive prototyping in Figma", "Micro-interaction & motion choreography"],
    iconName: "Figma"
  },
  {
    id: "ai-int",
    title: "AI Integration",
    description: "Embedding natural language processing, semantic search, and intelligence agents directly into your product workflows.",
    details: ["Gemini & LLM orchestration", "Retrieval-Augmented Generation (RAG)", "Semantic text vectors & clustering models"],
    iconName: "Sparkles"
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Developing high-integrity scheduled scripts, scraping loops, and server hooks to automate manual organizational overhead.",
    details: ["Cron job schedulers", "Webhook orchestration", "System-to-system integrations"],
    iconName: "Cpu"
  },
  {
    id: "api-dev",
    title: "API Design & Backend",
    description: "Building robust RESTful and GraphQL endpoints with strict schemas, reliable security rules, and real-time streams.",
    details: ["Django & Flask microservices", "Express backend structures", "High-performance database indexing"],
    iconName: "Database"
  },
  {
    id: "dashboards",
    title: "Dashboard & Visualizer",
    description: "Designing bespoke charts, grids, and analytics dashboards that present complex spatial data in understandable summaries.",
    details: ["D3.js & custom Canvas grids", "Responsive bento cells layouts", "Real-time state charting"],
    iconName: "LayoutDashboard"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Creative Developer",
    company: "Aetherial Labs",
    duration: "2024 - Present",
    description: "Architecting interactive design systems and custom AI-powered SAAS platforms for next-generation tech startups.",
    achievements: [
      "Built custom web visualizer saving clients 24% in manual operations using Gemini integrations",
      "Redesigned central dashboard, driving an increase in user activation rates by 35%",
      "Mentored junior engineers on high-performance React patterns and WebGL workflows"
    ],
    type: "experience",
    logoText: "AL"
  },
  {
    id: "exp-2",
    role: "Full-Stack AI Consultant",
    company: "Prism Technologies",
    duration: "2022 - 2024",
    description: "Designed secure REST API frameworks, cloud-hosted backends, and customized search algorithms for enterprise partners.",
    achievements: [
      "Implemented a secure sync pipeline using Python/Django and PostgreSQL handling 1.5M transactions/day",
      "Engineered automated semantic indexers for resume analysis engines",
      "Reduced cloud computing costs by 18% through container optimization and Docker configurations"
    ],
    type: "experience",
    logoText: "PT"
  },
  {
    id: "exp-3",
    role: "Frontend Engineer Intern",
    company: "Stripe-Inspired Digital Agency",
    duration: "2021 - 2022",
    description: "Collaborated on designing high-end marketing campaigns, parallax scroll experiences, and interactive checkout systems.",
    achievements: [
      "Coded pixel-perfect responsive landing pages using Tailwind CSS and React",
      "Integrated secure microservices for booking engines and ticketing apps",
      "Maintained 100% accessible standards compliance on high-traffic public interfaces"
    ],
    type: "experience",
    logoText: "DA"
  },
  {
    id: "edu-1",
    role: "B.S. in Computer Science & Interactive Design",
    company: "Metro Polytech University",
    duration: "2018 - 2022",
    description: "Specialized in Computer Graphics, Algorithms, Human-Computer Interaction (HCI), and Software Architecture.",
    achievements: [
      "Graduated with honors, GPA 3.92/4.00",
      "HCI Lab project: Developed interactive tactile gesture navigator awarded best student project"
    ],
    type: "education",
    logoText: "MU"
  },
  {
    id: "cert-1",
    role: "Advanced Machine Learning & AI Engineering Specialist",
    company: "Google Developers Group / Coursera",
    duration: "2023",
    description: "Rigorous certification covering advanced neural networks, LLM prompting strategies, and backend vector databases.",
    achievements: [
      "Completed practical capstone: Dynamic AI routing agent using serverless clusters"
    ],
    type: "certificate",
    logoText: "GD"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Evelyn Thorne",
    role: "Product Director",
    company: "LinearFlow",
    text: "Alexander is a rare talent who bridges the deep gap between outstanding visual artistry and pristine software engineering. He didn't just build our app; he co-designed the emotional feel of the user experience. The results have been stellar.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "test-2",
    name: "Marcus Chen",
    role: "Co-Founder",
    company: "Vertex AI",
    text: "The AI SaaS Alexander architected is an absolute masterclass in dashboard layout. The fluid grid, natural-sounding automated pipelines, and 0ms-feel latency have become our primary selling points. He has a brilliant design intuition.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "test-3",
    name: "Sophia Martinez",
    role: "Brand Director",
    company: "Aura Escapes",
    text: "Working with Alexander was a seamless masterclass. He took our rough ideas for Odyssey and built a cinematic storytelling experience that earned Awwwards praise. His communication is clear, objective, and inspiring.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Minimalist Workspace Design",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-2",
    title: "Geometric Glass Sculpture",
    category: "3D Art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-3",
    title: "Prismatic Light Trails",
    category: "Creative Coding",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-4",
    title: "Futuristic HUD Wireframes",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-5",
    title: "Warm Fluid Waves",
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-6",
    title: "Monochrome Editorial Layout",
    category: "Print",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    title: "Designing Beyond the Grid: Bento Layouts in 2026",
    excerpt: "How modern product sites are structuring complex dashboards, statistics, and media showcases in beautiful asymmetric interactive boxes.",
    content: "The grid has evolved. In 2026, the Bento grid design philosophy is leading UI standards. Rooted in traditional Japanese lunchboxes, it divides space into discrete, high-contrast, rounded containers. We explore how to manage responsive breakpoints while maintaining strict, content-driven hierarchies using CSS Grid, flex wrappers, and Framer Motion spring states.",
    date: "June 18, 2026",
    category: "Design",
    readTime: "4 min read",
    likes: 142,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "art-2",
    title: "Biometric AI Backends with Python and React",
    excerpt: "A deep technical walkthrough of microservice design patterns, streaming WebSockets, and low-latency auditing models.",
    content: "Real-time auditing requires high data throughput and minimal handshake latencies. By leveraging lightweight Flask/Django microservices as data brokers, we can feed React canvas boards using non-blocking asynchronous event loops. In this deep dive, we outline standard schemas, security rules, and performance metrics.",
    date: "May 29, 2026",
    category: "Engineering",
    readTime: "7 min read",
    likes: 218,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "art-3",
    title: "Crafting Organic Motion with Spring Physics",
    excerpt: "Why standard linear ease-out transitions feel sterile, and how to introduce friction, mass, and tension into web states.",
    content: "Our eyes are attuned to physical constants. When a button clicks or a card scales, using linear timelines breaks the suspension of disbelief. Using Framer Motion's physical configurations (such as stiffness: 200, damping: 25, mass: 1.2), we can establish interfaces that feel weighty, elastic, and delightful to interact with.",
    date: "April 14, 2026",
    category: "Motion Design",
    readTime: "5 min read",
    likes: 189,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  }
];
