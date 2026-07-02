import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Bot, Layout, Sparkles, Send, ExternalLink, X, Cpu, ArrowRight, Play } from 'lucide-react'

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

  const projects: Project[] = [
    {
      id: 'smart-campus',
      name: 'Smart Campus Classifier',
      tagline: 'AI-Driven Facilities Ticketing & Automation Engine',
      description: 'An intelligent issue classification system that parses text complaints from campus students/staff, routing them to the correct engineering department instantly.',
      problem: 'Manual triage of campus complaints resulted in delays, incorrect department assignments, and resource waste.',
      solution: 'Developed an NLP-driven classification middleware that auto-categorizes text inputs, flags urgency levels, and dispatches API notifications to technicians.',
      challenges: 'Handling noisy slang/abbreviations in student text logs and balancing classifier latency.',
      lessons: 'Understood tokenization strategies, confidence thresholds, and how to structure fallback queues for unclassified logs.',
      techStack: ['React', 'Node.js', 'Express', 'Python', 'Supabase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      color: 'from-cyan-500 to-blue-600',
      icon: Globe,
      planetSize: 'w-24 h-24',
      orbitDuration: 18
    },
    {
      id: 'ai-assistant',
      name: 'Sentinel Chat Core',
      tagline: 'Context-Aware AI Assistant & Coding Copilot',
      description: 'A custom chatbot interface integrated with semantic search embeddings to serve documentation answers and terminal diagnostic codes.',
      problem: 'Developer teams wasted significant hours context-switching to read static API reference documents.',
      solution: 'Built a vector-search-assisted chatbot using markdown chunking and RAG pipelines to return instant diagnostic snippets.',
      challenges: 'Mitigating hallucinations in complex technical code blocks and optimizing response streaming.',
      lessons: 'Gained hands-on expertise in chunking strategies, vector search metrics, and stream buffer orchestration in Node.',
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'Python', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      color: 'from-purple-500 to-pink-600',
      icon: Bot,
      planetSize: 'w-20 h-20',
      orbitDuration: 24
    },
    {
      id: 'portfolio',
      name: 'Abin\'s Digital Universe',
      tagline: 'Cinematic High-Performance Portfolio Experience',
      description: 'This interactive single-page portfolio designed to engage recruiters with 2.5D dashboards, canvas starfields, and live sandbox demos.',
      problem: 'Standard resumes are static, fails to showcase real interactive system flows or code architecture capabilities.',
      solution: 'Crafted a custom, responsive showcase combining Framer Motion parallax, lightweight canvas elements, and built-in interactive demo widgets.',
      challenges: 'Achieving sub-2-second page loads and 60 FPS viewport transitions on low-spec hardware without heavy WebGL packages.',
      lessons: 'Optimized rendering frames, designed customized vectors, and learned CSS GPU-acceleration techniques.',
      techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      color: 'from-amber-400 to-rose-500',
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

  // Reset demo when selected project changes
  useEffect(() => {
    setDemoInput('')
    setDemoStatus('idle')
    setDemoResult(null)
    setActivePipelineStep(-1)
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
                    className="flex-1 px-4 py-2 rounded-xl bg-universe-primary hover:bg-universe-primary/80 text-white text-xs font-heading font-medium flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-universe-primary/10"
                  >
                    Launch Live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Main Sandbox Interactive Workspace */}
              <div className="flex-1 p-8 space-y-8 flex flex-col justify-between max-w-full overflow-hidden">
                {/* 1. Live Sandbox Demo */}
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
