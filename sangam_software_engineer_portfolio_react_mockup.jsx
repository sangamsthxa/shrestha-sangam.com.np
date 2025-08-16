import React, { useEffect } from "react";

// Self-contained React file with **no external UI/icon/animation libraries**
// so it runs in plain CRA/Vite/Next without extra installs.
// Tailwind classes are kept for styling, but they won't break if Tailwind isn't configured.

// -------------------- Local UI Primitives --------------------
function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

// Minimal inline SVG icons (Feather-style)
const iconProps = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
function ArrowRightIcon() { return (<svg {...iconProps}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>); }
function GithubIcon() { return (<svg {...iconProps}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.8 1.05a9.37 9.37 0 0 1 5.1 0c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.67.93.67 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>); }
function LinkedinIcon() { return (<svg {...iconProps}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2a4 4 0 0 1 2-1Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>); }
function MailIcon() { return (<svg {...iconProps}><path d="M4 4h16v16H4z" fill="none"/><polyline points="22,6 12,13 2,6"/></svg>); }
function DownloadIcon() { return (<svg {...iconProps}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>); }
function ExternalLinkIcon() { return (<svg {...iconProps}><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>); }
function MapPinIcon() { return (<svg {...iconProps}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>); }

// -------------------- Data --------------------
const navItems = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Special Education PWA Initiative",
    summary:
      "Full‑stack PWA digitizing IEP workflows for 25+ schools with bilingual access (English/Marshallese), resilient offline support, and containerized AWS deployments.",
    bullets: [
      "Built with ASP.NET MVC, role‑based access, audit logs",
      "Google Cloud Translation API integration",
      "Docker + AWS EC2, centralized logging via CloudWatch (−40% debug time)",
    ],
    tech: ["C#", ".NET", "JavaScript", "Docker", "AWS EC2", "CloudWatch", "PostgreSQL"],
    links: [{ href: "#", label: "Case Study" }],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80", // laptop + notebook
  },
  {
    title: "Real Estate ERP System",
    summary:
      "Cross‑platform ERP for listings, transactions, and roles. Migrated monolith → microservices; infra to AWS; added multilingual Angular UI.",
    bullets: [
      "Spring Boot + Hibernate microservices",
      "Query time ↓ 15s → under 3s via SQL optimizations",
      "JWT auth, RBAC, 1,000+ active listings, 500+/mo transactions",
    ],
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "AWS (EC2, S3, RDS)", "Docker"],
    links: [{ href: "#", label: "Demo (internal)" }],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80", // desk setup
  },
  {
    title: "Online Delivery Management System",
    summary:
      "Routing and dispatch platform using Mapbox + Dijkstra for shortest paths; secure JWT auth.",
    bullets: ["Real‑time map and route optimization", "Role‑based access and protected APIs"],
    tech: ["Java", "Spring Boot", "Angular", "Mapbox", "JWT"],
    links: [{ href: "https://github.com/sangamsthxa/OnlineDeliveryManagementSystem", label: "GitHub" }],
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80", // notebook + pen
  },
  {
    title: "Predictive Layoff Risk Assessment",
    summary:
      "ML model comparing Logistic Regression vs Decision Trees; 93% accuracy on internal dataset.",
    bullets: ["Key features: tenure, performance score, location"],
    tech: ["Python", "Pandas", "scikit‑learn"],
    links: [{ href: "https://github.com/sthasangam/ML-Project", label: "GitHub" }],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80", // coding notebook
  },
  {
    title: "Airline Reviews Sentiment (DistilBERT)",
    summary:
      "NLP on 23,171 reviews; 84% accuracy; surfaced drivers like seat type, value, staff service.",
    bullets: ["Cleaning, tokenization, fine‑tuning, evaluation"],
    tech: ["Python", "Transformers", "PyTorch"],
    links: [{ href: "https://github.com/sangamsthxa/Sentiment-Analysis-on-Airline-Reviews", label: "GitHub" }],
    image: "https://images.unsplash.com/photo-1494697536454-6f39e2cc1721?auto=format&fit=crop&w=900&q=80", // laptop detail
  },
];

const skills = [
  { title: "Backend", items: ["Java (8/11/17/21)", "Spring Boot", "C#/.NET", "REST, JPA/Hibernate", "Microservices"] },
  { title: "Frontend", items: ["Angular 8–13", "TypeScript", "JavaScript", "HTML5/CSS3/SCSS", "Material UI"] },
  { title: "Cloud & DevOps", items: ["AWS (S3, EC2, RDS, IAM, CloudWatch)", "Docker", "Kubernetes (ECS)", "CI/CD", "CloudFormation"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"] },
  { title: "Security & QA", items: ["OAuth2", "JWT", "Spring Security", "JUnit", "NUnit", "Cucumber"] },
];

const contact = {
  email: "sthasngm88@gmail.com",
  location: "Pinole, CA",
  github: "https://github.com/sangamsthxa",
  linkedin: "https://www.linkedin.com/in/sangamstha",
  resume: "#", // Replace with hosted PDF url
};

// -------------------- Dev Tests (lightweight) --------------------
function DevTests() {
  useEffect(() => {
    console.assert(Array.isArray(navItems) && navItems.length === 4, "NavItems should have 4 entries");
    console.assert(Array.isArray(projects) && projects.length >= 3, "Expect at least 3 projects");
    console.assert(Array.isArray(skills) && skills.length >= 5, "Expect at least 5 skill groups");
    console.assert(typeof contact.email === "string" && contact.email.includes("@"), "Contact email should be valid-like");
  }, []);
  return null;
}

// -------------------- Sections --------------------
function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-blue-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-blue-700">Sangam Shrestha</a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-blue-700 hover:text-blue-900">
              {n.label}
            </a>
          ))}
          <a href={contact.resume} className="text-sm inline-flex items-center gap-1 text-blue-700 hover:text-blue-900">
            <DownloadIcon /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-28 md:pt-36 pb-16 bg-gradient-to-br from-white to-blue-50">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs tracking-widest uppercase text-blue-500">Software Engineer</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight text-blue-900">
            Building scalable, secure, cloud‑ready apps with <span className="underline decoration-2 decoration-blue-500">Java</span> & <span className="underline decoration-2 decoration-blue-500">AWS</span>
          </h1>
          <p className="mt-4 text-blue-700 max-w-prose">
            6+ years delivering full‑stack apps, microservices, and PWAs across enterprise and academic settings. Strong in Java/Spring Boot, .NET, and modern Angular.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">
              See Projects <ArrowRightIcon />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50">
              <GithubIcon /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-blue-700">
            <span className="inline-flex items-center gap-1"><MapPinIcon/> Pinole, CA</span>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 hover:underline"><MailIcon/> {contact.email}</a>
          </div>
        </div>
        <div>
          <div className="relative rounded-3xl border border-blue-200 overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Laptop with notebook and pen"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Featured Projects</h2>
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 text-blue-600 hover:underline">
            View all on GitHub <ExternalLinkIcon/>
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                {p.image && (
                  <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-blue-900/10"/>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900">{p.title}</h3>
                  <p className="mt-2 text-blue-800">{p.summary}</p>
                  <ul className="mt-3 space-y-1 text-sm text-blue-800 list-disc list-inside">
                    {p.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l, i) => (
                      <a key={i} href={l.href} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 text-blue-700 hover:underline">
                        {l.label} <ExternalLinkIcon/>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">About</h2>
          <p className="mt-2 text-sm text-blue-700">MS in CS @ East Tennessee State University (GPA 3.9)</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-blue-900 leading-relaxed">
            I’m a software engineer with 6+ years of experience designing and delivering full‑stack web applications, scalable APIs, and cloud‑native services. I specialize in Java/Spring Boot, .NET, and AWS, with a strong foundation in system architecture and microservices. Recently, I led a bilingual PWA for special education programs and previously shipped a multilingual Real Estate ERP used by global clients.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-blue-900">
            <li className="p-3 rounded-xl bg-blue-50 border border-blue-200">99.9% uptime across low‑bandwidth regions</li>
            <li className="p-3 rounded-xl bg-blue-50 border border-blue-200">SQL optimizations: 15s → under 3s response time</li>
            <li className="p-3 rounded-xl bg-blue-50 border border-blue-200">Incidents resolved 30% faster via CloudWatch</li>
            <li className="p-3 rounded-xl bg-blue-50 border border-blue-200">Mentored 100+ students as a GTA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900">{s.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-blue-900 list-disc list-inside">
                  {s.items.map((it, j) => (<li key={j}>{it}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Let’s build something</h2>
          <p className="mt-2 text-blue-800 max-w-prose">
            I’m open to Software Engineer roles (Java/Spring Boot, .NET, AWS, full‑stack). If you have a role, project, or idea you’d like to discuss, drop a note.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700"><MailIcon/> Email Me</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50"><LinkedinIcon/> LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50"><GithubIcon/> GitHub</a>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <form className="grid gap-4">
              <div>
                <label className="text-sm text-blue-900">Name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-blue-900">Email</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" type="email" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm text-blue-900">Message</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28" placeholder="What would you like to build?" />
              </div>
              <button type="button" className="rounded-2xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Send</button>
              <p className="text-xs text-blue-700">This is a static mockup. Wire up to a form backend or use mailto: for Wix.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// -------------------- App --------------------
export default function Portfolio() {
  return (
    <main className="font-sans bg-white text-blue-900">
      <DevTests />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <footer className="py-10 border-t border-blue-200 mt-10 bg-blue-50">
        <div className="mx-auto max-w-6xl px-4 text-sm text-blue-700 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Sangam Shrestha. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href={contact.github} className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer"><GithubIcon/> GitHub</a>
            <a href={contact.linkedin} className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer"><LinkedinIcon/> LinkedIn</a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 hover:underline"><MailIcon/> Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}