// Portfolio Data - All portfolio content in one place
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Daksh Kumar",
    title: "Full Stack Developer & Software Engineer",
    tagline: "Web Developer & Software Developer",
    description:
      "I'm a backend-focused software developer passionate about cloud engineering, network programming, and scalable systems. I enjoy building efficient architectures, exploring low-level protocols, and deploying robust, cloud-native solutions. Always curious, I aim to create impactful and functional digital experiences.",
    location: "India",
    email: "rao.daksh555@gmail.com",
    phone: "+91 (768) 899-2293",
  },

  // Social Links
  social: {
    github: {
      url: "https://github.com/Excius",
      username: "@Excius",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/daksh-kumar555/",
      username: "Daksh Kumar",
    },
    email: "rao.daksh555@gmail.com",
  },

  // Education Data
  education: [
    {
      title: "Bachelor of Technology in Computer Science",
      organization: "Indian Institute of Information Technology, Sri City",
      duration: "2023 - 2027",
      description:
        "Pursuing a degree in Computer Science with a focus on software engineering. Engaged in various projects involving web development and system design.",
    },
  ],

  // Experience Data
  experience: [
    {
      title: "Co-Lead",
      organization: "Enigma Club",
      duration: "2023 - Present",
      description:
        "Contributing to low-level software development and system security, with a focus on reverse engineering, debugging, and understanding OS internals through hands-on CTF mentoring and research.",
      tech: [],
    },
  ],

  // Skills Data with categories and languages
  skills: {
    // Programming Languages
    languages: [
      { name: "C/C++", category: "languages" },
      { name: "Java", category: "languages" },
      { name: "JavaScript", category: "languages" },
      { name: "TypeScript", category: "languages" },
      { name: "Python", category: "languages" },
      { name: "Bash", category: "languages" },
      { name: "SQL", category: "languages" },
      { name: "HTML", category: "languages" },
      { name: "CSS", category: "languages" },
    ],

    // Frontend Technologies
    frontend: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "EJS", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer Motion", category: "frontend" },
      { name: "Redux", category: "frontend" },
    ],

    // Backend Technologies
    backend: [
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "REST APIs", category: "backend" },
      { name: "Hono.js", category: "backend" },
      { name: "WebSockets", category: "backend" },
      { name: "Cloudflare Worker", category: "backend" },
    ],

    // Databases
    databases: [
      { name: "PostgreSQL", category: "databases" },
      { name: "MongoDB", category: "databases" },
      { name: "Redis", category: "databases" },
      { name: "Prisma", category: "databases" },
      { name: "MySQL", category: "databases" },
      { name: "SQLite", category: "databases" },
    ],

    // DevOps & Cloud
    devops: [
      { name: "Docker", category: "devops" },
      { name: "AWS", category: "devops" },
      { name: "GCP", category: "devops" },
      { name: "Vercel", category: "devops" },
      { name: "Render", category: "devops" },
      { name: "CI/CD", category: "devops" },
      { name: "GitHub Actions", category: "devops" },
      { name: "NGINX", category: "devops" },
    ],

    // Tools & Other
    tools: [
      { name: "Git", category: "tools" },
      { name: "VS Code", category: "tools" },
      { name: "Neovim", category: "tools" },
      { name: "Postman", category: "tools" },
      { name: "Wireshark", category: "tools" },
      { name: "Notion", category: "tools" },
      { name: "GDB", category: "tools" },
    ],
  },

  // Skill Categories for filtering
  skillCategories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools" },
  ],

  // Projects (if needed in the future)
  projects: [
    {
      title: "Pingio",
      description:
        "Full-stack real-time chat application with modern UI/UX, secure auth, media sharing, and real-time messaging using Socket.io.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Socket.io",
        "TypeScript",
        "DaisyUI",
        "Redux",
      ],
      github: "https://github.com/Excius/PingioV2",
      live: "https://pingio.excius.live/",
      image: "/pingio.png",
    },
    {
      title: "Rippl",
      description:
        "Full-stack social media platform built with Next.js, featuring SSR for faster load times, scalable Prisma/PostgreSQL backend, and secure Auth.js-based authentication.",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Auth.js",
        "Cloudinary",
        "ShadCN",
      ],
      github: "https://github.com/Excius/rippl",
      live: "https://rippl.excius.live/",
      image: "/rippl.png",
    },
    {
      title: "ArtisanSpace",
      description:
        "Full-stack web platform with EJS-rendered dashboards, hybrid MongoDB/SQLite storage, and a scalable Node.js backend using REST APIs and MVC architecture.",
      tech: [
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQLite",
        "Cloudinary",
        "JWT",
      ],
      github: "https://github.com/Rithvik086/ArtisanSpace",
      live: "https://artisanspace.onrender.com/",
      image: "/artisanSpace.png",
    },
    {
      title: "RAM Injection Project",
      description:
        "Low-level Linux tooling project focused on memory manipulation, process injection, and debugging using C and system calls.",
      tech: ["C", "Ptrace", "GDB", "Linux"],
      github: "https://github.com/Excius/ram-injection",
      live: "https://github.com/Excius/ram-injection",
      image: "/projects/analytics.jpg",
    },
  ],
};

export default portfolioData;
