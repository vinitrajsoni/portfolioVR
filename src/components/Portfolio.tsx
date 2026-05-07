import { Mail, Phone, Linkedin, Github, ExternalLink, GraduationCap, Briefcase, Award, Sparkles, Bot, Code2, Workflow, Send } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import gradImg from "@/assets/graduation.jpeg";
import certEthnus from "@/assets/cert-ethnus.png";
import certLLM from "@/assets/cert-llm.jpeg";
import certCV from "@/assets/cert-cv.jpeg";

const services = [
  { icon: Bot, title: "AI Chatbot Development", desc: "RAG, LangChain, Gemini" },
  { icon: Code2, title: "Web Application Development", desc: "React, FastAPI" },
  { icon: Workflow, title: "AI Agent & Workflow Automation", desc: "n8n, Make.com" },
  { icon: Send, title: "Telegram Bot Integration", desc: "Routing, ngrok, secure setup" },
];

const skillGroups = [
  { title: "Core", items: ["Chatbot Creating", "Web Application Development", "AI Agent Making", "Telegram Bot Making"] },
  { title: "AI / ML", items: ["Machine Learning (ML)", "Natural Language Processing (NLP)", "Transformers", "LLMs", "Prompt Engineering"] },
  { title: "Tools", items: ["Git/GitHub", "Jupyter Notebook", "FastAPI", "n8n", "Make.com", "VS Code", "Antigravity", "VAPI", "Bland AI"] },
  { title: "Soft Skills", items: ["Problem-solving", "Communication", "Collaboration"] },
];

const certificates = [
  {
    title: "Generative AI with Large Language Models (LLM)",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/5ZDPNZ2ZRZCE",
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/38W1C4TB7N5U",
  },
  {
    title: "MERN Full Stack Internship Program",
    issuer: "Ethnus",
    image: certEthnus,
  },
];

const experiences = [
  {
    role: "AI Intern (Full-Time)",
    company: "Senselink Technology Pvt. Ltd. (Sensegrass)",
    period: "Jun – Jul 2025",
    points: [
      "Developed a multilingual AI chatbot using LangChain and Gemini, integrated with REST APIs for real-time responses.",
      "Utilized Python-based tools for data processing, LLM integration, and chatbot deployment (RAG).",
    ],
    tech: ["Python", "REST API", "LLM API", "Gemini 3.5 Flash", "Make.com", "RAG Pipeline"],
  },
  {
    role: "AI Engineer Intern",
    company: "Spearmint Technologies",
    period: "Apr 2026",
    points: [
      "Built n8n workflows integrating local LLMs (LM Studio, Ollama) and APIs for automated Q&A systems.",
      "Developed a Telegram bot with routing, filtering, and secure setup using ngrok.",
      "Implemented task routing (local vs API), debugged JS workflows, and explored AI image/video models.",
    ],
    tech: ["n8n", "LM Studio", "Ollama", "Telegram Bot API", "ngrok", "JavaScript"],
  },
];

const projects = [
  {
    name: "Real Estate Chatbot",
    desc: "AI-powered chatbot for property queries.",
    tech: ["LangChain", "Gemini", "RAG", "React"],
    link: "https://real-state-chatbot.vercel.app/",
  },
  {
    name: "Jewellery Website",
    desc: "Modern e-commerce frontend for jewellery shopping.",
    tech: ["React", "Tailwind", "Vercel"],
    link: "https://shopping-jewelleries.vercel.app/",
  },
  {
    name: "Auth Todo List App",
    desc: "Full-stack todo app with authentication.",
    tech: ["React", "Auth", "REST API"],
    link: "https://auth-todo-list-frontend-ten.vercel.app/",
  },
];

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-20 sm:py-28">
      <div className="mb-12 text-center">
        {kicker && <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{kicker}</p>}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "Poppins" }}>
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
      </div>
      {children}
    </section>
  );
}

export function Portfolio() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32">
      {/* HOME */}
      <section id="home" className="min-h-[80vh] flex items-center scroll-mt-28">
        <div className="glass rounded-3xl p-8 sm:p-14 w-full shadow-glow fade-up">
          <div className="grid md:grid-cols-[auto_1fr] items-center gap-10">
            <div className="relative mx-auto">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary to-accent opacity-50 blur-xl" />
              <img
                src={profileImg}
                alt="Vinit Raj Soni"
                className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full object-cover border border-white/10"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Portfolio</p>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight" style={{ fontFamily: "Poppins" }}>
                <span className="text-gradient">VINIT RAJ SONI</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-muted-foreground">
                AI Engineer & Full-Stack Developer
              </p>
              <p className="mt-5 max-w-xl text-foreground/80 leading-relaxed">
                Passionate AI Engineer with expertise in LLMs, chatbot development, and web applications.
                I love building intelligent systems that solve real-world problems.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
                  View Projects
                </a>
                <a href="#contact" className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-white/10 transition">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / What I can do */}
      <Section id="about" kicker="About" title="What I Can Do">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-6 hover:translate-y-[-4px] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <s.icon size={20} className="text-background" />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" kicker="Toolkit" title="My Skills">
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-accent" />
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-foreground/85">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" kicker="Credentials" title="Certificates">
        <div className="grid md:grid-cols-3 gap-5">
          {certificates.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 flex flex-col">
              {c.image ? (
                <img src={c.image} alt={c.title} className="rounded-xl mb-4 border border-white/10" />
              ) : (
                <div className="h-32 mb-4 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <Award size={36} className="text-foreground/80" />
                </div>
              )}
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                  Verify <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" kicker="Academics" title="Education">
        <div className="glass rounded-2xl p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GraduationCap size={20} className="text-background" />
              </div>
              <p className="text-sm text-muted-foreground">Aug 2021 – Jul 2025</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Vellore Institute of Technology, Andhra Pradesh (VIT-AP University)
            </h3>
            <p className="mt-2 text-foreground/80">
              B.Tech. in Computer Science Engineering with a Specialization in AI &amp; ML
            </p>
          </div>
          <img
            src={gradImg}
            alt="Graduation"
            className="rounded-2xl w-full md:w-64 h-64 object-cover border border-white/10"
          />
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" kicker="Journey" title="Experience">
        <div className="space-y-5">
          {experiences.map((e) => (
            <div key={e.role + e.company} className="glass rounded-2xl p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-foreground/85 text-sm leading-relaxed list-disc pl-5">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-accent/10 border border-accent/20 text-accent">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" kicker="Work" title="Projects">
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-4px] transition"
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/30 to-accent/20 overflow-hidden">
                <iframe
                  src={p.link}
                  title={p.name}
                  loading="lazy"
                  className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <ExternalLink size={16} className="text-accent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-foreground/70">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="Say Hi" title="Get In Touch">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <p className="text-foreground/80">
            Open to opportunities, collaborations, and interesting AI projects.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <a href="mailto:vinit@example.com" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Mail size={18} className="text-accent" />
              <span className="text-sm">vinit@example.com</span>
            </a>
            <a href="tel:+91" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Phone size={18} className="text-accent" />
              <span className="text-sm">+91 XXXXX XXXXX</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Linkedin size={18} className="text-accent" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Github size={18} className="text-accent" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vinit Raj Soni. Crafted with care.
      </footer>
    </main>
  );
}
