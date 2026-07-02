import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Layout, Sparkles, Send, ExternalLink, X, Cpu, ArrowRight, Play, FileText, RefreshCw } from 'lucide-react'

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
  color: string
  icon: any
  planetSize: string
  orbitDuration: number
}

export function ProjectUniverse() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  // Complaint system demo state
  const [demoInput, setDemoInput] = useState('')
  const [demoStatus, setDemoStatus] = useState<'idle' | 'analyzing' | 'complete'>('idle')
  const [demoResult, setDemoResult] = useState<any>(null)
  const [activePipelineStep, setActivePipelineStep] = useState<number>(-1)

  // Resume Builder Sandbox state
  const [resumeName, setResumeName] = useState('Abin K R')
  const [resumeTitle, setResumeTitle] = useState('Full Stack Developer')
  const [resumeSkills, setResumeSkills] = useState('React, Node.js, TypeScript, Python')
  const [resumeExportStatus, setResumeExportStatus] = useState<'idle' | 'generating' | 'complete'>('idle')

  // Portfolio Diagnostics Sandbox state
  const [auditProgress, setAuditProgress] = useState(0)
  const [auditStatus, setAuditStatus] = useState<'idle' | 'running' | 'complete'>('idle')
  const [cpuUsage, setCpuUsage] = useState(12)
  const [memoryUsage, setMemoryUsage] = useState(48)

  const projects: Project[] = [
    {
      id: 'smart-campus',
      name: 'Smart Campus Classifier',
      tagline: 'AI-Driven Facilities Ticketing & Automation Engine',
      description: 'An intelligent issue classification system that parses text complaints from campus students/staff, routing them to the correct engineering department instantly.',
      problem: 'Manual triage of campus complaints resulted in delays, incorrect department assignments, and resource waste.',
      solution: 'Developed an NLP-driven classification middleware that auto-categorizes text complaints, flags urgency levels, and dispatches API notifications to technicians.',
      challenges: 'Handling noisy slang/abbreviations in student text logs and balancing classifier latency.',
      lessons: 'Understood tokenization strategies, confidence thresholds, and how to structure fallback queues for unclassified logs.',
      techStack: ['React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
      githubUrl: 'https://github.com/abinkr/smart-campus-complaints',
      liveUrl: 'https://smart-campus-student.vercel.app',
      color: 'from-universe-primary to-black',
      icon: Globe,
      planetSize: 'w-24 h-24',
      orbitDuration: 18
    },
    {
      id: 'resume-builder',
      name: 'Professional Resume Builder',
      tagline: 'Modern Client-Side Resume Builder & PDF Exporter',
      description: 'A modern, client-side resume builder application that allows you to create, customize, and export professional resumes with ease.',
      problem: 'Online resume tools are often paywalled, require account setups, and leak personal data to third parties.',
      solution: 'Built a client-side resume builder using HTML, CSS, and vanilla JS with multiple templates, live preview, JSON backup, and password-protected PDF export.',
      challenges: 'Generating clean, properly formatted multi-page PDFs directly inside the browser sandbox.',
      lessons: 'Mastered browser local storage management, JSON state export/import structures, and print styling media rules.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'PDFKit'],
      githubUrl: 'https://github.com/abinkr/Professional-Resume-Builder',
      liveUrl: 'https://abinkr.github.io/Professional-Resume-Builder/',
      color: 'from-white to-zinc-700',
      icon: FileText,
      planetSize: 'w-20 h-20',
      orbitDuration: 24
    },
    {
      id: 'portfolio',
      name: 'Abin\'s Digital Universe',
      tagline: 'Cinematic High-Performance Portfolio Experience',
      description: 'This interactive single-page portfolio designed to engage recruiters with 2.5D dashboards, canvas starfields, and live sandbox demos.',
      problem: 'Standard resumes are static, failing to showcase real interactive system flows or code architecture capabilities.',
      solution: 'Crafted a custom, responsive showcase combining Framer Motion parallax, lightweight canvas elements, and built-in interactive demo widgets.',
      challenges: 'Achieving sub-2-second page loads and 60 FPS viewport transitions on low-spec hardware without heavy WebGL packages.',
      lessons: 'Optimized rendering frames, designed customized vectors, and learned CSS GPU-acceleration techniques.',
      techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
      githubUrl: 'https://github.com/abinkr/portfolio',
      liveUrl: 'https://abinkr.github.io/portfolio/',
      color: 'from-universe-primary to-white',
      icon: Layout,
      planetSize: 'w-16 h-16',
      orbitDuration: 14
    }
  ]

  // Demo classifier presets
  const presets = [
    "AC not cooling in Seminar Hall 2",
    "Water overflowing in block C washroom",
    "Smart board projector screen won't roll down"
  ]

  const handleRunDemo = () => {
    if (!demoInput.trim()) return
    setDemoStatus('analyzing')
    setActivePipelineStep(0)
    setDemoResult(null)
  }

  // Handle pipeline step sequence
  useEffect(() => {
    if (demoStatus !== 'analyzing') return

    const timer = setInterval(() => {
      setActivePipelineStep((prev) => {
        if (prev >= 4) {
          clearInterval(timer)
          setDemoStatus('complete')
          // Calculate mock outputs
          const text = demoInput.toLowerCase()
          let category = 'GENERAL MAINTENANCE'
          let urgency = 'MEDIUM'
          let eta = '12 Hours'

          if (text.includes('ac') || text.includes('cooling') || text.includes('fan') || text.includes('electrical')) {
            category = 'ELECTRICAL & HVAC'
            urgency = 'HIGH'
            eta = '2 Hours'
          } else if (text.includes('water') || text.includes('overflow') || text.includes('leak') || text.includes('pipe') || text.includes('washroom')) {
            category = 'PLUMBING'
            urgency = 'CRITICAL'
            eta = '1 Hour'
          } else if (text.includes('projector') || text.includes('board') || text.includes('smart') || text.includes('screen') || text.includes('wifi') || text.includes('network')) {
            category = 'IT & AUDIO-VISUAL'
            urgency = 'LOW'
            eta = '4 Hours'
          }

          setDemoResult({ category, urgency, eta })
          return 4
        }
        return prev + 1
      })
    }, 900)

    return () => clearInterval(timer)
  }, [demoStatus, demoInput])

  // Portfolio Diagnostics CPU/RAM simulator
  useEffect(() => {
    if (selectedProject?.id !== 'portfolio') return
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 15) + 5)
      setMemoryUsage(Math.floor(Math.random() * 5) + 42)
    }, 1500)
    return () => clearInterval(interval)
  }, [selectedProject])

  // Lighthouse Audit simulation
  const runLighthouseAudit = () => {
    setAuditStatus('running')
    setAuditProgress(0)
  }

  useEffect(() => {
    if (auditStatus !== 'running') return
    const timer = setInterval(() => {
      setAuditProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setAuditStatus('complete')
          return 100
        }
        return prev + 10
      })
    }, 200)
    return () => clearInterval(timer)
  }, [auditStatus])

  // Resume PDF export simulation
  const runResumeExport = () => {
    setResumeExportStatus('generating')
    setTimeout(() => {
      setResumeExportStatus('complete')
    }, 2000)
  }

  // Reset demo when selected project changes
  useEffect(() => {
    setDemoInput('')
    setDemoStatus('idle')
    setDemoResult(null)
    setActivePipelineStep(-1)
    setResumeName('Abin K R')
    setResumeTitle('Full Stack Developer')
    setResumeSkills('React, Node.js, TypeScript, Python')
    setResumeExportStatus('idle')
    setAuditProgress(0)
    setAuditStatus('idle')
  }, [selectedProject])

  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Project Universe
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Explore active deployments floating in my development universe. Tap a project to enter its Command Center, run live sandboxed demos, and trace the architecture logic.
          </p>
        </div>

        {/* Orbit System Area */}
        <div className="relative h-[450px] flex items-center justify-center border border-slate-900 bg-slate-950/20 rounded-3xl overflow-hidden glass-panel">
          {/* Orbits backdrop */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-slate-800/40 pointer-events-none" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-slate-850/40 pointer-events-none" />

          {/* Central Sun: Developer Core */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-universe-primary to-universe-accent flex items-center justify-center shadow-lg shadow-universe-primary/30">
            <Sparkles className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          {/* Floating Planets */}
          {projects.map((project, index) => {
            const Icon = project.icon
            // Calculate orbital properties
            const angle = (index * (360 / projects.length) * Math.PI) / 180
            const radius = 130 + index * 40
            
            return (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                animate={{
                  x: [Math.cos(angle) * radius, Math.cos(angle + Math.PI) * radius, Math.cos(angle) * radius],
                  y: [Math.sin(angle) * radius, Math.sin(angle + Math.PI) * radius, Math.sin(angle) * radius],
                }}
                transition={{
                  repeat: Infinity,
                  duration: project.orbitDuration,
                  ease: 'linear',
                }}
                whileHover={{ scale: 1.1, cursor: 'pointer' }}
                className={`absolute z-20 ${project.planetSize} rounded-full bg-gradient-to-br ${project.color} p-0.5 shadow-lg flex flex-col items-center justify-center text-white`}
              >
                <div className="w-full h-full rounded-full bg-slate-950/90 flex flex-col items-center justify-center gap-1 hover:bg-transparent transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                  <span className="text-[9px] font-heading font-semibold text-slate-300 max-w-[80px] text-center truncate">
                    {project.name.split(' ')[0]}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Command Center Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl relative flex flex-col md:flex-row my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors z-30 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Sidebar Specifications */}
              <div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-slate-800 p-8 space-y-6">
                <div>
                  <span className="text-xs text-universe-accent font-mono uppercase tracking-wider">PROJECT COMMAND CENTER</span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">{selectedProject.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{selectedProject.tagline}</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Background Info</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">The Challenge</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Key Takeaway</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">{selectedProject.lessons}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-heading font-medium flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                    Source Code
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 rounded-xl bg-universe-primary hover:bg-white text-black font-heading font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-universe-primary/10 hover:shadow-white/10"
                  >
                    Launch Live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Main Sandbox Interactive Workspace */}
              <div className="flex-1 p-8 space-y-8 flex flex-col justify-between max-w-full overflow-hidden">
                {/* 1. SMART CAMPUS CLASSIFIER SANDBOX */}
                {selectedProject.id === 'smart-campus' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                        <Play className="w-4 h-4 text-universe-accent" />
                        <span>Live Classifier Sandbox</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        Interact directly with the system core. Write or select a ticket complaint below to see the classification algorithm categorize it live.
                      </p>

                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {presets.map((preset) => (
                            <button
                              key={preset}
                              onClick={() => setDemoInput(preset)}
                              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400 hover:text-white transition-all cursor-pointer hover:border-slate-700"
                            >
                              {preset}
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={demoInput}
                            onChange={(e) => setDemoInput(e.target.value)}
                            placeholder="Describe a campus issue... (e.g. broken faucet in classroom 302)"
                            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-universe-accent placeholder:text-slate-600"
                          />
                          <button
                            onClick={handleRunDemo}
                            disabled={demoStatus === 'analyzing'}
                            className="px-4 py-2.5 rounded-xl bg-universe-accent hover:opacity-90 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <Send className="w-3.5 h-3.5" />
                            Run
                          </button>
                        </div>
                      </div>

                      {/* Results Panel */}
                      <AnimatePresence>
                        {demoResult && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 rounded-xl border border-universe-accent/20 bg-universe-accent/5 grid grid-cols-3 gap-4"
                          >
                            <div>
                              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">CLASSIFIED DEPT</span>
                              <span className="text-xs font-bold text-universe-accent block mt-0.5">{demoResult.category}</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">URGENCY SCORE</span>
                              <span className={`text-xs font-bold block mt-0.5 ${
                                demoResult.urgency === 'CRITICAL' ? 'text-red-400' : demoResult.urgency === 'HIGH' ? 'text-amber-400' : 'text-slate-300'
                              }`}>{demoResult.urgency}</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">RESOLVE ETA</span>
                              <span className="text-xs font-bold text-white block mt-0.5">{demoResult.eta}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 2. Visual Architecture Pipeline */}
                    <div className="space-y-4 pt-4 border-t border-slate-900">
                      <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-universe-primary" />
                        <span>Pipeline Diagnostics</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        Visualizing runtime execution data flow through nodes:
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 relative">
                        {/* Node 1: User */}
                        <div className={`p-3 rounded-xl border flex flex-col items-center w-24 z-10 transition-all ${
                          activePipelineStep >= 0 ? 'bg-universe-primary/10 border-universe-primary text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
                        }`}>
                          <span className="text-[9px] font-mono font-medium">1. USER</span>
                          <span className="text-[10px] font-bold mt-1">Input Text</span>
                        </div>

                        <ArrowRight className={`hidden sm:block w-4 h-4 transition-colors ${activePipelineStep >= 1 ? 'text-universe-primary' : 'text-slate-800'}`} />

                        {/* Node 2: FE Router */}
                        <div className={`p-3 rounded-xl border flex flex-col items-center w-24 z-10 transition-all ${
                          activePipelineStep >= 1 ? 'bg-universe-primary/10 border-universe-primary text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
                        }`}>
                          <span className="text-[9px] font-mono font-medium">2. FRONTEND</span>
                          <span className="text-[10px] font-bold mt-1">Vite/Client</span>
                        </div>

                        <ArrowRight className={`hidden sm:block w-4 h-4 transition-colors ${activePipelineStep >= 2 ? 'text-universe-primary' : 'text-slate-800'}`} />

                        {/* Node 3: Express Router */}
                        <div className={`p-3 rounded-xl border flex flex-col items-center w-24 z-10 transition-all ${
                          activePipelineStep >= 2 ? 'bg-universe-primary/10 border-universe-primary text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
                        }`}>
                          <span className="text-[9px] font-mono font-medium">3. BACKEND</span>
                          <span className="text-[10px] font-bold mt-1">Node API</span>
                        </div>

                        <ArrowRight className={`hidden sm:block w-4 h-4 transition-colors ${activePipelineStep >= 3 ? 'text-universe-primary' : 'text-slate-800'}`} />

                        {/* Node 4: Database / Classifier */}
                        <div className={`p-3 rounded-xl border flex flex-col items-center w-24 z-10 transition-all ${
                          activePipelineStep >= 3 ? 'bg-universe-primary/10 border-universe-primary text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
                        }`}>
                          <span className="text-[9px] font-mono font-medium">4. ENGINE</span>
                          <span className="text-[10px] font-bold mt-1">AI Classifier</span>
                        </div>
                      </div>

                      {/* Logs terminal */}
                      <div className="p-3 bg-slate-900 border border-slate-850 rounded-xl font-mono text-[10px] text-slate-400 space-y-1 select-none">
                        <div>{activePipelineStep >= 0 ? '> Initializing data stream...' : '> Diagnostics idle.'}</div>
                        {activePipelineStep >= 1 && <div className="text-cyan-400">&gt; Stream packet routed to Gateway (200 OK)</div>}
                        {activePipelineStep >= 2 && <div className="text-purple-400">&gt; Processing NLP Tokenization (model: custom-classifier)</div>}
                        {activePipelineStep >= 3 && <div className="text-emerald-400">&gt; Forwarding departments triggers. Response generated.</div>}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. PROFESSIONAL RESUME BUILDER SANDBOX */}
                {selectedProject.id === 'resume-builder' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                        <FileText className="w-4 h-4 text-universe-accent" />
                        <span>Interactive Resume Builder Sandbox</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        Edit details on the left, and watch the resume template update instantly on the right. Simulates dynamic state rendering in React.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Editor Form */}
                        <div className="space-y-4 bg-slate-900/40 border border-slate-800/85 p-4 rounded-xl">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Profile Fields</span>
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-400 font-mono">Full Name</label>
                              <input
                                type="text"
                                value={resumeName}
                                onChange={(e) => setResumeName(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-universe-accent"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-400 font-mono">Job Title</label>
                              <input
                                type="text"
                                value={resumeTitle}
                                onChange={(e) => setResumeTitle(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-universe-accent"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-400 font-mono">Key Skills (Comma separated)</label>
                              <input
                                type="text"
                                value={resumeSkills}
                                onChange={(e) => setResumeSkills(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-universe-accent"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Live Template Preview */}
                        <div className="bg-white text-slate-900 p-5 rounded-xl shadow-inner flex flex-col justify-between min-h-[180px] max-h-[220px] overflow-hidden">
                          <div>
                            <div className="border-b border-slate-300 pb-2">
                              <h5 className="font-heading font-bold text-base text-slate-900 tracking-tight leading-none">{resumeName}</h5>
                              <p className="text-[10px] text-universe-primary font-bold uppercase tracking-wider mt-1">{resumeTitle}</p>
                            </div>
                            <div className="mt-3">
                              <p className="text-[9px] font-bold text-slate-800 uppercase tracking-wider mb-1">Key Competencies</p>
                              <div className="flex flex-wrap gap-1">
                                {resumeSkills.split(',').map((skill, idx) => (
                                  <span key={idx} className="bg-slate-100 text-slate-700 text-[8px] px-1.5 py-0.5 rounded border border-slate-200">
                                    {skill.trim()}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-[7px] text-slate-400 text-right itemprop=&quot;about&quot; font-mono border-t border-slate-100 pt-1.5 mt-2">
                            Generated by abinkr/resume-builder
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PDF Generation Console */}
                    <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-left flex-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">PDF Compilation Engine</span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {resumeExportStatus === 'idle' && "Ready to compile client-side resume structure."}
                          {resumeExportStatus === 'generating' && "Compiling and signing PDF document..."}
                          {resumeExportStatus === 'complete' && "✔ Document generated successfully! (Mock Download triggered)"}
                        </p>
                      </div>
                      <button
                        onClick={runResumeExport}
                        disabled={resumeExportStatus === 'generating'}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-universe-primary text-black font-extrabold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${resumeExportStatus === 'generating' ? 'animate-spin' : ''}`} />
                        <span>{resumeExportStatus === 'generating' ? 'Generating PDF...' : 'Compile & Export'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. PORTFOLIO DIAGNOSTICS SANDBOX */}
                {selectedProject.id === 'portfolio' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-universe-accent" />
                        <span>Portfolio System Diagnostics Console</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        Live diagnostic telemetry of the current React single page portfolio systems.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {/* CPU telemetry */}
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">GPU-Accelerated Load</span>
                            <h5 className="text-2xl font-heading font-extrabold text-white mt-1">{cpuUsage}%</h5>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mt-3 border border-slate-900">
                            <motion.div
                              animate={{ width: `${cpuUsage}%` }}
                              className="h-full bg-universe-primary"
                            />
                          </div>
                        </div>

                        {/* Memory telemetry */}
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">JS Heap Utilization</span>
                            <h5 className="text-2xl font-heading font-extrabold text-white mt-1">{memoryUsage} MB</h5>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mt-3 border border-slate-900">
                            <motion.div
                              animate={{ width: `${(memoryUsage / 100) * 100}%` }}
                              className="h-full bg-white"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Lighthouse Audit Simulator */}
                      <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/20 space-y-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Lighthouse System Benchmark</span>
                        
                        {auditStatus === 'complete' ? (
                          <div className="grid grid-cols-4 gap-2 text-center py-2">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full border-2 border-universe-primary flex items-center justify-center text-[10px] font-extrabold text-universe-primary shadow-lg shadow-universe-primary/10">100</div>
                              <span className="text-[8px] font-mono text-slate-400 mt-1">Performance</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full border-2 border-universe-primary flex items-center justify-center text-[10px] font-extrabold text-universe-primary shadow-lg shadow-universe-primary/10">100</div>
                              <span className="text-[8px] font-mono text-slate-400 mt-1">Accessibility</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full border-2 border-universe-primary flex items-center justify-center text-[10px] font-extrabold text-universe-primary shadow-lg shadow-universe-primary/10">100</div>
                              <span className="text-[8px] font-mono text-slate-400 mt-1">Best Practice</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full border-2 border-universe-primary flex items-center justify-center text-[10px] font-extrabold text-universe-primary shadow-lg shadow-universe-primary/10">100</div>
                              <span className="text-[8px] font-mono text-slate-400 mt-1">SEO</span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                              <span>{auditStatus === 'running' ? 'Auditing Core Web Vitals...' : 'Idle'}</span>
                              {auditStatus === 'running' && <span>{auditProgress}%</span>}
                            </div>
                            <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-900">
                              <div
                                style={{ width: `${auditProgress}%` }}
                                className="h-full bg-universe-primary transition-all duration-150"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benchmark Audit controls */}
                    <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-4">
                      <div className="text-left flex-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Diagnostics Status</span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {auditStatus === 'idle' && "Telemetry online. Ready to trigger system audit."}
                          {auditStatus === 'running' && "Auditing network speeds and painting cycles..."}
                          {auditStatus === 'complete' && "✔ All systems nominal. Perfect benchmark score registered."}
                        </p>
                      </div>
                      <button
                        onClick={runLighthouseAudit}
                        disabled={auditStatus === 'running'}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-universe-primary text-black font-extrabold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${auditStatus === 'running' ? 'animate-spin' : ''}`} />
                        <span>{auditStatus === 'running' ? 'Auditing...' : 'Run Audit'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
