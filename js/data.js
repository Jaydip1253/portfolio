/**
 * =========================================================================
 * Jaydip - Portfolio Data Configuration File
 * =========================================================================
 * Easily edit your information, skills, projects, experience, and education
 * in this single file. Any changes here will automatically reflect on the website!
 */

const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "Jaydip",
    role: "Software Developer",
    headline: "Building Digital Experiences",
    fullTitle: "Software Developer | Building Digital Experiences",
    status: {
      available: true,
      text: "Available for Full-time Roles & Contracts"
    },
    location: "India (Open to Remote Worldwide)",
    email: "jaydip.dev@example.com", // Replace with your actual email
    github: "https://github.com/Jaydip1253", // Replace with your actual link
    linkedin: "https://linkedin.com/in/jaydip-dev", // Replace with your actual link
    instagram: "https://instagram.com/jaydip_codes", // Replace with your actual link
    twitter: "https://twitter.com/jaydip_dev",
    resumeUrl: "#contact", // or link to your resume PDF
    shortBio: "Passionate Software Developer dedicated to engineering fast, resilient, and intuitive digital applications. Combining modern full-stack architectures with clean aesthetics and user-centered design.",
    aboutBioParagraphs: [
      "Hello! I'm Jaydip, an enthusiastic Software Developer who thrives at the intersection of robust backend architecture and captivating frontend interactions. I build modern, scalable, and secure applications with a relentless focus on performance and usability.",
      "My journey in tech began with a curiosity about how software powers our connected world. Since then, I have developed production-ready web apps, designed high-throughput REST & GraphQL APIs, orchestrated cloud microservices, and designed fluid digital interfaces that users love.",
      "I'm continuously exploring emerging technologies — from cloud native microservices and edge architectures to intelligent agentic workflows. When I'm not writing clean code, you'll find me contributing to open-source discussions, reading engineering case studies, or mentoring aspiring developers."
    ],
    goals: "My mission is to architect resilient software ecosystems that solve genuine human challenges at scale, while collaborating with world-class engineering teams."
  },

  // Highlight Statistics
  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Completed Projects", value: 24, suffix: "+" },
    { label: "Technologies Mastered", value: 18, suffix: "+" },
    { label: "Code Commits", value: 1400, suffix: "+" }
  ],

  // Interactive Hero Code Snippet
  heroCodeSnippet: {
    filename: "Jaydip.ts",
    lines: [
      "// Meet Jaydip - Software Developer",
      "const developer: DeveloperProfile = {",
      "  name: 'Jaydip',",
      "  craft: ['Full Stack Web', 'Cloud Systems', 'API Design'],",
      "  coreValues: ['Clean Code', 'Scalability', 'Obsessive UX'],",
      "  currentStatus: 'Ready to build groundbreaking software',",
      "  sayHello: () => `Let's create something extraordinary!`",
      "};",
      "console.log(developer.sayHello());"
    ]
  },

  // Skills & Technologies Categories
  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Programming Languages" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools & Technologies" }
  ],

  // Skills List
  skills: [
    // Programming Languages
    {
      name: "JavaScript (ES6+)",
      category: "languages",
      icon: "fa-brands fa-js",
      level: 95,
      levelLabel: "Advanced",
      highlight: "Asynchronous programming, closures, event loop, modern patterns"
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: "fa-solid fa-code",
      level: 90,
      levelLabel: "Advanced",
      highlight: "Type safety, generics, interfaces, strict typing architecture"
    },
    {
      name: "Python",
      category: "languages",
      icon: "fa-brands fa-python",
      level: 88,
      levelLabel: "Advanced",
      highlight: "AsyncIO, automation, data processing, backend frameworks"
    },
    {
      name: "Java",
      category: "languages",
      icon: "fa-brands fa-java",
      level: 82,
      levelLabel: "Proficient",
      highlight: "Object-oriented design, multithreading, enterprise patterns"
    },
    {
      name: "C++",
      category: "languages",
      icon: "fa-solid fa-laptop-code",
      level: 80,
      levelLabel: "Proficient",
      highlight: "Data structures, algorithms, memory management, low-level optimization"
    },
    {
      name: "SQL",
      category: "languages",
      icon: "fa-solid fa-database",
      level: 90,
      levelLabel: "Advanced",
      highlight: "Complex queries, indexing strategies, schema modeling, ACID compliance"
    },

    // Frontend Development
    {
      name: "React.js",
      category: "frontend",
      icon: "fa-brands fa-react",
      level: 94,
      levelLabel: "Advanced",
      highlight: "Hooks, Context API, component lifecycle, custom reusable hooks"
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "fa-solid fa-cube",
      level: 90,
      levelLabel: "Advanced",
      highlight: "App Router, SSR, SSG, Server Actions, SEO optimization"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "fa-solid fa-palette",
      level: 96,
      levelLabel: "Expert",
      highlight: "Responsive design, dark mode, design systems, modern utility patterns"
    },
    {
      name: "HTML5 / Semantic Web",
      category: "frontend",
      icon: "fa-brands fa-html5",
      level: 98,
      levelLabel: "Expert",
      highlight: "WCAG accessibility, SEO-friendly structure, modern DOM APIs"
    },
    {
      name: "CSS3 / Modern SASS",
      category: "frontend",
      icon: "fa-brands fa-css3-alt",
      level: 92,
      levelLabel: "Expert",
      highlight: "Flexbox, CSS Grid, keyframe animations, glassmorphism UI"
    },
    {
      name: "Redux & State Mgmt",
      category: "frontend",
      icon: "fa-solid fa-diagram-project",
      level: 86,
      levelLabel: "Advanced",
      highlight: "Redux Toolkit, Zustand, global client-side caching"
    },

    // Backend Development
    {
      name: "Node.js",
      category: "backend",
      icon: "fa-brands fa-node-js",
      level: 92,
      levelLabel: "Advanced",
      highlight: "Event-driven runtime, non-blocking I/O, streams, clustering"
    },
    {
      name: "Express.js",
      category: "backend",
      icon: "fa-solid fa-server",
      level: 90,
      levelLabel: "Advanced",
      highlight: "REST API architecture, custom middleware, security headers (Helmet, CORS)"
    },
    {
      name: "FastAPI / Django",
      category: "backend",
      icon: "fa-solid fa-bolt",
      level: 84,
      levelLabel: "Proficient",
      highlight: "High-performance Python APIs, Pydantic validation, ORM"
    },
    {
      name: "RESTful & GraphQL APIs",
      category: "backend",
      icon: "fa-solid fa-network-wired",
      level: 92,
      levelLabel: "Advanced",
      highlight: "API versioning, rate limiting, authentication (JWT/OAuth), schema design"
    },
    {
      name: "WebSockets & Realtime",
      category: "backend",
      icon: "fa-solid fa-satellite-dish",
      level: 85,
      levelLabel: "Proficient",
      highlight: "Bi-directional streaming, Socket.io, pub/sub synchronization"
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "databases",
      icon: "fa-solid fa-database",
      level: 90,
      levelLabel: "Advanced",
      highlight: "Relational modeling, indexing, query optimization, connection pooling"
    },
    {
      name: "MongoDB",
      category: "databases",
      icon: "fa-solid fa-leaf",
      level: 88,
      levelLabel: "Advanced",
      highlight: "Document modeling, aggregation pipelines, replica sets, Mongoose"
    },
    {
      name: "Redis",
      category: "databases",
      icon: "fa-solid fa-memory",
      level: 82,
      levelLabel: "Proficient",
      highlight: "In-memory caching, pub/sub queues, session storage, rate limiting"
    },
    {
      name: "MySQL",
      category: "databases",
      icon: "fa-solid fa-server",
      level: 85,
      levelLabel: "Proficient",
      highlight: "Relational database management, joins, stored procedures, transactions"
    },
    {
      name: "Firebase / Firestore",
      category: "databases",
      icon: "fa-solid fa-fire",
      level: 88,
      levelLabel: "Advanced",
      highlight: "Real-time sync, Security Rules, serverless cloud functions"
    },

    // Tools & Technologies
    {
      name: "Git & GitHub",
      category: "tools",
      icon: "fa-brands fa-git-alt",
      level: 94,
      levelLabel: "Advanced",
      highlight: "Branching strategies, rebase, merge workflows, code reviews"
    },
    {
      name: "Docker & Containers",
      category: "tools",
      icon: "fa-brands fa-docker",
      level: 85,
      levelLabel: "Proficient",
      highlight: "Multi-stage builds, container orchestration, Docker Compose"
    },
    {
      name: "Linux & Bash",
      category: "tools",
      icon: "fa-brands fa-linux",
      level: 86,
      levelLabel: "Proficient",
      highlight: "CLI navigation, shell automation, server setup, cron tasks"
    },
    {
      name: "Postman & API Testing",
      category: "tools",
      icon: "fa-solid fa-vial",
      level: 92,
      levelLabel: "Advanced",
      highlight: "Automated test collections, mock servers, environment variables"
    },
    {
      name: "CI / CD Pipelines",
      category: "tools",
      icon: "fa-solid fa-gears",
      level: 82,
      levelLabel: "Proficient",
      highlight: "GitHub Actions, automated linting, testing, and deployment"
    },
    {
      name: "AWS & Cloud Basics",
      category: "tools",
      icon: "fa-brands fa-aws",
      level: 80,
      levelLabel: "Proficient",
      highlight: "S3, EC2, Lambda, CloudFront, IAM security permissions"
    }
  ],

  // Projects Showcase
  projects: [
    {
      id: "cloudpulse",
      title: "CloudPulse - Cloud DevOps & Infrastructure Monitor",
      category: "fullstack",
      categoryLabel: "Full Stack / DevOps",
      description: "An enterprise-grade monitoring dashboard providing real-time infrastructure telemetry, Kubernetes cluster health, latency heatmaps, and automated incident alerts.",
      fullDescription: "CloudPulse simplifies microservices observability by aggregating metrics across distributed servers, containers, and serverless jobs into a unified real-time dashboard. Features interactive time-series visualizations, threshold-based Slack/webhook alerts, and sub-second anomaly detection.",
      thumbnail: "assets/images/project-1.svg",
      technologies: ["React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com/cloudpulse-demo",
      githubUrl: "https://github.com/Jaydip1253/cloudpulse",
      featured: true,
      stats: {
        metric: "< 120ms",
        label: "P99 Telemetry Latency"
      }
    },
    {
      id: "devsync",
      title: "DevSync - Real-Time Collaborative IDE & Code Studio",
      category: "frontend",
      categoryLabel: "Frontend / WebSockets",
      description: "A browser-based collaborative code studio featuring multi-user live cursors, CRDT text synchronization, syntax highlighting, integrated terminal, and instant code execution.",
      fullDescription: "Built for pair programming, interviews, and remote engineering teams. DevSync utilizes WebSockets combined with conflict-free replicated data types (CRDTs) to ensure zero merge conflicts during high-speed concurrent edits. Includes Monaco Editor integration and custom sandboxed code execution runners.",
      thumbnail: "assets/images/project-2.svg",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Monaco Editor", "Tailwind CSS", "Redis"],
      liveUrl: "https://example.com/devsync-demo",
      githubUrl: "https://github.com/Jaydip1253/devsync",
      featured: true,
      stats: {
        metric: "0ms Conflicts",
        label: "CRDT Sync Engine"
      }
    },
    {
      id: "nexus-ai",
      title: "Nexus AI - Multi-Agent Reasoning & Document Intelligence",
      category: "backend",
      categoryLabel: "AI & Backend",
      description: "An intelligent autonomous agent platform that ingests unstructured PDFs, codebases, and databases to generate semantic insights, code, and structured reports.",
      fullDescription: "Nexus AI orchestrates a multi-step planner and executor pipeline. Documents are chunked and vectorized for semantic search via cosine similarity, while the router agent synthesizes grounded answers with verifiable source citations and streaming responses.",
      thumbnail: "assets/images/project-3.svg",
      technologies: ["Python", "FastAPI", "React", "Vector Embeddings", "LangChain", "Tailwind CSS"],
      liveUrl: "https://example.com/nexus-ai-demo",
      githubUrl: "https://github.com/Jaydip1253/nexus-ai",
      featured: true,
      stats: {
        metric: "98.5%",
        label: "Factual Retrieval Rate"
      }
    },
    {
      id: "cryptoorbit",
      title: "CryptoOrbit - High-Frequency Trading Terminal & Portfolio",
      category: "frontend",
      categoryLabel: "FinTech / Realtime",
      description: "A financial dashboard streaming live candlestick feeds, depth charts, order books, and real-time portfolio performance across major digital asset exchanges.",
      fullDescription: "CryptoOrbit connects directly to exchange WebSocket feeds for tick-by-tick order book updates and interactive technical analysis. Features custom canvas charting, SMA/EMA overlays, instant simulated order execution, and dark cyberpunk aesthetic.",
      thumbnail: "assets/images/project-4.svg",
      technologies: ["React", "Redux Toolkit", "WebSockets", "Chart.js", "Tailwind CSS", "Node.js"],
      liveUrl: "https://example.com/cryptoorbit-demo",
      githubUrl: "https://github.com/Jaydip1253/cryptoorbit",
      featured: false,
      stats: {
        metric: "60 FPS",
        label: "Smooth Canvas Charting"
      }
    },
    {
      id: "shopstream",
      title: "ShopStream - Next-Gen Headless E-Commerce Platform",
      category: "fullstack",
      categoryLabel: "Full Stack / E-Commerce",
      description: "A fast headless e-commerce store with dynamic inventory management, instant search, localized currency conversion, and secure Stripe checkout integration.",
      fullDescription: "ShopStream delivers sub-second page loads through Next.js Server Components and edge caching. Features include product variation matrix, user wishlist, real-time inventory decrementing with optimistic UI updates, and an intuitive admin management portal.",
      thumbnail: "assets/images/project-5.svg",
      technologies: ["Next.js 14", "Stripe API", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
      liveUrl: "https://example.com/shopstream-demo",
      githubUrl: "https://github.com/Jaydip1253/shopstream",
      featured: false,
      stats: {
        metric: "100/100",
        label: "Lighthouse Performance"
      }
    },
    {
      id: "taskforge",
      title: "TaskForge - Agile Project Hub & Sprint Productivity Suite",
      category: "fullstack",
      categoryLabel: "Full Stack / SaaS",
      description: "An agile management system featuring fluid drag-and-drop Kanban boards, sprint burndown charts, role-based permissions, and GitHub PR synchronization.",
      fullDescription: "TaskForge helps engineering squads streamline sprints with intuitive workflow automation, custom task tags, time-tracking, and rich markdown documentation. Engineered with high-performance optimistic client updates and automated email summaries.",
      thumbnail: "assets/images/project-6.svg",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://example.com/taskforge-demo",
      githubUrl: "https://github.com/Jaydip1253/taskforge",
      featured: false,
      stats: {
        metric: "10k+",
        label: "Tasks Processed"
      }
    }
  ],

  // Experience Timeline
  experience: [
    {
      role: "Software Developer",
      company: "TechNova Solutions",
      period: "2023 - Present",
      location: "Bengaluru, India (Hybrid)",
      type: "Full-Time",
      description: "Leading the development of scalable client-facing web applications and modernizing backend microservices for enterprise clients.",
      achievements: [
        "Architected and deployed 4 high-traffic web applications using React, TypeScript, and Node.js, supporting 100k+ monthly active users.",
        "Refactored legacy REST APIs into modular microservices with Redis caching, slashing average response latency from 450ms to 85ms.",
        "Collaborated with cross-functional design and product teams to implement an accessible, consistent design system in Tailwind CSS.",
        "Streamlined CI/CD automation pipelines using GitHub Actions and Docker, reducing deployment cycle times by 40%."
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "Redis"]
    },
    {
      role: "Junior Software Engineer",
      company: "Apex Digital Labs",
      period: "2022 - 2023",
      location: "Pune, India",
      type: "Full-Time",
      description: "Engineered responsive frontend user interfaces and built RESTful service endpoints for e-commerce and fintech clients.",
      achievements: [
        "Developed 15+ responsive UI components and interactive forms with form validation and error handling.",
        "Created RESTful endpoints using Express.js and MongoDB, handling secure payment gateways and customer authentication.",
        "Fixed 80+ critical bugs and improved Lighthouse performance scores by 35 points across core client portals.",
        "Participated in agile ceremonies, daily standups, and bi-weekly sprint planning."
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Git", "REST APIs"]
    },
    {
      role: "Software Developer Intern",
      company: "InnoWave Technologies",
      period: "2021 - 2022",
      location: "Remote",
      type: "Internship",
      description: "Assisted senior engineers with web application prototyping, unit testing, and documentation.",
      achievements: [
        "Implemented unit and integration tests using Jest, boosting test coverage to 82% across key authentication modules.",
        "Built responsive landing pages and internal dashboard analytics tools.",
        "Gained hands-on experience with version control, pull requests, code reviews, and clean architectural design patterns."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Jest", "Git"]
    }
  ],

  // Education Timeline
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "State Technological University",
      period: "2018 - 2022",
      location: "India",
      score: "First Class with Distinction (CGPA: 8.7/10)",
      description: "Comprehensive study of computer science fundamentals, algorithm design, distributed computing, database systems, and software engineering methodologies.",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering.",
        "Led University Coding Club as Technical Lead, conducting 12+ workshops on Full Stack Web Development and Git.",
        "Secured 1st Place in Inter-College Hackathon for building an emergency disaster relief coordination web app."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science & Mathematics",
      institution: "Senior Secondary High School",
      period: "2016 - 2018",
      location: "India",
      score: "Graduated with 89%",
      description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      highlights: [
        "Top 5% rank in district mathematics and science competitions.",
        "Academic Excellence Award in Computer Science."
      ]
    }
  ],

  // Certifications & Achievements
  achievements: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2023",
      icon: "fa-brands fa-aws",
      description: "Cloud architecture, security compliance, serverless computing, and database management."
    },
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta",
      year: "2023",
      icon: "fa-brands fa-react",
      description: "Advanced React, JavaScript, state management, UI/UX architecture, and testing."
    },
    {
      title: "1st Place - Hackathon InnovateX",
      issuer: "National Tech Summit",
      year: "2022",
      icon: "fa-solid fa-trophy",
      description: "Built an AI-powered offline disaster response communication tool in 36 hours."
    }
  ]
};

// Export for module systems if needed, also available globally via window.portfolioData
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}

