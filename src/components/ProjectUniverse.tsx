import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Sparkles, ChevronRight, Monitor, Shield, FileText, Users, Globe } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  problem: string
  solution: string
  challenges: string
  lessons: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  liveUrl2?: string
  liveLabel?: string
  liveLabel2?: string
  gradient: string
  accentColor: string
  icon: any
  featured?: boolean
}

export function ProjectUniverse() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'smart-campus',
      name: 'Smart Campus Complaint System',
      tagline: 'AI-Powered Campus Complaint Triage & Analytics Platform',
      description: 'A comprehensive complaint management platform for campus environments with AI-powered text classification that auto-categorizes issues, MFA-secured portals for both students and administrators, real-time analytics dashboards, and CSV export capabilities.',
      problem: 'Campus complaints were manually triaged, causing delays, misrouted tickets, and poor visibility into recurring issues.',
      solution: 'Built a full-stack platform with NLP-powered auto-classification, dual portals (student + admin), real-time dashboards with charts, multi-factor authentication, and department performance analytics.',
      challenges: 'Training the NLP classifier on noisy student text, orchestrating three independent services (frontend, backend, NLP) via Docker, and implementing secure MFA flows.',
      lessons: 'Mastered microservice orchestration, NLP tokenization strategies, confidence thresholds, and building production-grade admin analytics dashboards.',
      techStack: ['React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
      githubUrl: 'https://github.com/abinkr/smart-campus-complaints',
      liveUrl: 'https://smart-campus-student.vercel.app',
      liveUrl2: 'https://smart-campus-admin.vercel.app',
      liveLabel: 'Student Portal',
      liveLabel2: 'Admin Portal',
      gradient: 'from-rose-500/20 via-slate-900 to-slate-950',
      accentColor: 'text-rose-400',
      icon: Shield,
      featured: true
    },
    {
      id: 'resume-builder',
      name: 'Professional Resume Builder',
      tagline: 'Client-Side Resume Editor & PDF Exporter',
      description: 'A modern resume builder with multiple templates, live preview, skill ratings, QR codes, JSON backup, and password-protected PDF export — all running entirely in the browser with zero backend.',
      problem: 'Online resume tools are paywalled, require accounts, and leak personal data to third-party servers.',
      solution: 'Built a fully client-side resume builder with multiple templates, live preview, JSON state export/import, and password-protected PDF generation using browser APIs.',
      challenges: 'Generating properly formatted multi-page PDFs entirely in the browser sandbox without server-side rendering.',
      lessons: 'Mastered browser LocalStorage management, client-side PDF generation, print media styling, and JSON state serialization.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'PDF Generation'],
      githubUrl: 'https://github.com/abinkr/Professional-Resume-Builder',
      liveUrl: 'https://abinkr.github.io/Professional-Resume-Builder/',
      liveLabel: 'Live Demo',
      gradient: 'from-indigo-500/20 via-slate-900 to-slate-950',
      accentColor: 'text-indigo-400',
      icon: FileText
    },
    {
      id: 'attendance',
      name: 'Attendance Tracking System',
      tagline: 'Digital Class Attendance Manager',
      description: 'A streamlined attendance management tool for educational institutions with year/section tabs, subject-faculty tracking, one-click mark present, search filters, and CSV export for records.',
      problem: 'Paper-based attendance was error-prone, time-consuming, and made generating reports difficult for faculty.',
      solution: 'Created a digital attendance system with tabbed year/section navigation, faculty-subject mapping, instant mark-present toggling, and exportable attendance records.',
      challenges: 'Designing an intuitive UI that faculty could adopt without training while handling large student lists efficiently.',
      lessons: 'Learned efficient DOM manipulation patterns, CSV generation in vanilla JS, and designing for non-technical end users.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
      githubUrl: 'https://github.com/abinkr/attendance_project',
      liveUrl: 'https://abinkr.github.io/attendance_project/',
      liveLabel: 'Live Demo',
      gradient: 'from-emerald-500/20 via-slate-900 to-slate-950',
      accentColor: 'text-emerald-400',
      icon: Users
    },
    {
      id: 'portfolio',
      name: "Abin's Digital Universe",
      tagline: 'Cinematic Interactive Portfolio Experience',
      description: 'This interactive single-page portfolio designed to engage recruiters with animated starfields, smooth scroll transitions, interactive project sandboxes, and a premium dark-mode experience.',
      problem: 'Standard resumes fail to showcase interactive development skills, system architecture thinking, or real coding craftsmanship.',
      solution: 'Crafted a custom portfolio with Framer Motion animations, canvas starfields, responsive layouts, and interactive project showcases — all optimized for performance.',
      challenges: 'Achieving sub-2-second page loads and 60 FPS transitions on low-spec hardware without heavy WebGL packages.',
      lessons: 'Mastered CSS GPU-acceleration, Framer Motion orchestration, responsive design systems, and performance optimization techniques.',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
      githubUrl: 'https://github.com/abinkr/portfolio',
      liveUrl: 'https://abinkr.github.io/portfolio/',
      liveLabel: 'Live Demo',
      gradient: 'from-[#66FF03]/20 via-slate-900 to-slate-950',
      accentColor: 'text-[#66FF03]',
      icon: Globe
    }
  ]

  const featuredProject = projects.find(p => p.featured)!
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative z-10">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#66FF03]" />
            <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Real-world applications built from concept to deployment — each solving a genuine problem with modern tech stacks.
          </p>
        </motion.div>
      </div>

      {/* Featured Project — Smart Campus */}
      <div className="max-w-6xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => setSelectedProject(featuredProject)}
          className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/80 backdrop-blur-sm hover:border-white/10 transition-all duration-500"
        >
          {/* Gradient glow behind */}
          <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Project Screenshot Area */}
            <div className="relative p-8 lg:p-10 flex flex-col justify-center min-h-[280px] lg:min-h-[360px]">
              {/* Mock browser window showing dashboard */}
              <div className="bg-slate-900/80 rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/60 border-b border-white/[0.04]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="flex-1 ml-3 bg-slate-900/60 rounded-md px-3 py-0.5">
                    <span className="text-[9px] text-slate-500 font-mono">smart-campus-student.vercel.app/dashboard</span>
                  </div>
                </div>
                {/* Dashboard mock content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-rose-400" />
                      </div>
                      <span className="text-[10px] font-bold text-white">Smart Campus</span>
                    </div>
                    <div className="flex gap-3 text-[9px] text-slate-500 font-mono">
                      <span>Dashboard</span>
                      <span>Submit Complaint</span>
                      <span>History</span>
                    </div>
                  </div>
                  <div className="bg-rose-500/5 border border-rose-500/10 rounded-lg p-3">
                    <span className="text-[8px] text-rose-400 font-mono uppercase tracking-wider">Student Dashboard</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">Welcome back, akr2647</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-800/50 rounded-lg p-2 border border-white/[0.04]">
                      <span className="text-[8px] text-slate-500 block">Total</span>
                      <span className="text-lg font-extrabold text-white">5</span>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-2 border border-white/[0.04]">
                      <span className="text-[8px] text-slate-500 block">Pending</span>
                      <span className="text-lg font-extrabold text-amber-400">4</span>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-2 border border-white/[0.04]">
                      <span className="text-[8px] text-slate-500 block">Resolved</span>
                      <span className="text-lg font-extrabold text-emerald-400">1</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {['Fire near electrical room', 'Campus Wi-Fi dead zone'].map((title, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/30 rounded-md px-2.5 py-1.5 border border-white/[0.03]">
                        <span className="text-[9px] text-slate-300">{title}</span>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${i === 0 ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-amber-400'}`}>
                          {i === 0 ? 'High' : 'Medium'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Project Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">Featured Project</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                {featuredProject.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1 font-mono">{featuredProject.tagline}</p>
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {featuredProject.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-slate-400 font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold hover:bg-rose-500/20 transition-colors">
                  <Monitor className="w-3.5 h-3.5" />
                  {featuredProject.liveLabel}
                </a>
                {featuredProject.liveUrl2 && (
                  <a href={featuredProject.liveUrl2} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-bold hover:bg-white/[0.08] transition-colors">
                    <Shield className="w-3.5 h-3.5" />
                    {featuredProject.liveLabel2}
                  </a>
                )}
                <a href={featuredProject.githubUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-medium hover:text-white hover:bg-white/[0.08] transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" />
                  Source Code
                </a>
              </div>

              {/* Read More */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(featuredProject) }}
                className="inline-flex items-center gap-1 mt-5 text-xs text-slate-500 hover:text-white transition-colors cursor-pointer group/btn"
              >
                <span>View full case study</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Grid — Other Projects */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/80 backdrop-blur-sm hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

            <div className="relative z-10 p-6 flex flex-col min-h-[340px]">
              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center`}>
                  <project.icon className={`w-5 h-5 ${project.accentColor}`} />
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-slate-500 hover:text-white hover:bg-white/[0.08] transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-lg font-heading font-extrabold text-white tracking-tight leading-tight">
                {project.name}
              </h3>
              <p className={`text-[11px] font-mono mt-1 ${project.accentColor}`}>{project.tagline}</p>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed flex-1">
                {project.description.length > 140 ? project.description.slice(0, 140) + '...' : project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mt-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[9px] text-slate-500 font-mono">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[9px] text-slate-500 font-mono">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Bottom action */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.04]">
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#66FF03] transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {project.liveLabel}
                </a>
                <span className="text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors flex items-center gap-1">
                  View details
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-slate-950/95 backdrop-blur-xl shadow-2xl"
            >
              {/* Modal header gradient */}
              <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${selectedProject.gradient} opacity-60 rounded-t-2xl`} />

              <div className="relative z-10 p-8 md:p-10">
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center`}>
                    <selectedProject.icon className={`w-5 h-5 ${selectedProject.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight">{selectedProject.name}</h3>
                    <p className={`text-xs font-mono ${selectedProject.accentColor}`}>{selectedProject.tagline}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-slate-400 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mt-6 leading-relaxed">{selectedProject.description}</p>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-2">The Problem</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-2">The Solution</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Key Challenges</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Lessons Learned</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.lessons}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-white/[0.06]">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#66FF03] text-black text-xs font-extrabold hover:bg-white transition-colors shadow-lg shadow-[#66FF03]/10">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {selectedProject.liveLabel || 'Live Demo'}
                  </a>
                  {selectedProject.liveUrl2 && (
                    <a href={selectedProject.liveUrl2} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-xs font-bold hover:bg-white/[0.12] transition-colors">
                      <Shield className="w-3.5 h-3.5" />
                      {selectedProject.liveLabel2}
                    </a>
                  )}
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-medium hover:text-white hover:bg-white/[0.1] transition-colors">
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
