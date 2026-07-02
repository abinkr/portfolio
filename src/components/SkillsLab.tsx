import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, ShieldCheck, Cpu, Code2, Database, Terminal, GitBranch, Layers, X } from 'lucide-react'

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'languages'
  icon: any
  confidence: string
  experience: string
  projects: string[]
  diagnosticCode: string
  glowColor: string
  borderColor: string
}

export function SkillsLab() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  const skills: Skill[] = [
    {
      name: 'React',
      category: 'frontend',
      icon: Cpu,
      confidence: '95% (Stable)',
      experience: '2+ Years',
      projects: ['Smart Campus', 'Portfolio UI', 'AI Chat Assistant'],
      diagnosticCode: 'const [state, dispatch] = useReducer(reducer, init);',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    },
    {
      name: 'TypeScript',
      category: 'languages',
      icon: Code2,
      confidence: '90% (Compiled)',
      experience: '2 Years',
      projects: ['Enterprise API Gateway', 'Smart Campus'],
      diagnosticCode: 'type Diagnostics<T> = { [P in keyof T]: T[P] };',
      glowColor: 'shadow-white/10 text-white',
      borderColor: 'border-white/20'
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: Layers,
      confidence: '85% (Server Optimized)',
      experience: '1.5 Years',
      projects: ['SaaS Dashboard', 'E-commerce Landing'],
      diagnosticCode: 'export async function generateMetadata({ params }) {}',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: Activity,
      confidence: '95% (Render Ready)',
      experience: '2+ Years',
      projects: ['Portfolio UI', 'SaaS Dashboard', 'Smart Campus'],
      diagnosticCode: '@import "tailwindcss"; @theme { --color-universe-primary: #66ff03; }',
      glowColor: 'shadow-white/10 text-white',
      borderColor: 'border-white/20'
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: Terminal,
      confidence: '90% (Multi-threaded)',
      experience: '2 Years',
      projects: ['Complaint Processing Core', 'Smart Campus API'],
      diagnosticCode: 'const cluster = require("cluster"); if (cluster.isMaster) {}',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    },
    {
      name: 'Express',
      category: 'backend',
      icon: Layers,
      confidence: '90% (Low Latency)',
      experience: '2 Years',
      projects: ['Campus API Gateway', 'Auth Service'],
      diagnosticCode: 'app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));',
      glowColor: 'shadow-white/10 text-white',
      borderColor: 'border-white/20'
    },
    {
      name: 'MongoDB',
      category: 'backend',
      icon: Database,
      confidence: '85% (Indexed)',
      experience: '1.5 Years',
      projects: ['User Database Store', 'Smart Campus DB'],
      diagnosticCode: 'db.complaints.createIndex({ campusId: 1, priority: -1 });',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    },
    {
      name: 'Supabase',
      category: 'backend',
      icon: Database,
      confidence: '90% (Realtime Synced)',
      experience: '1 Year',
      projects: ['AI Chat Database', 'Authentication Core'],
      diagnosticCode: 'const { data, error } = await supabase.from("chat").select();',
      glowColor: 'shadow-white/10 text-white',
      borderColor: 'border-white/20'
    },
    {
      name: 'Docker',
      category: 'devops',
      icon: ShieldCheck,
      confidence: '80% (Containerized)',
      experience: '1 Year',
      projects: ['Production API Gateway', 'Dev Environment'],
      diagnosticCode: 'FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nCMD ["npm", "start"]',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    },
    {
      name: 'Git',
      category: 'devops',
      icon: GitBranch,
      confidence: '95% (Synced)',
      experience: '3 Years',
      projects: ['All Repositories', 'CI/CD Pipelines'],
      diagnosticCode: 'git commit -m "feat: implement smart classifier sandbox"',
      glowColor: 'shadow-white/10 text-white',
      borderColor: 'border-white/20'
    },
    {
      name: 'Python',
      category: 'languages',
      icon: Code2,
      confidence: '85% (Inference Ready)',
      experience: '2 Years',
      projects: ['AI Complaint Classifier', 'Scraping Tools'],
      diagnosticCode: 'model = pipeline("text-classification", model="custom-bert")',
      glowColor: 'shadow-universe-primary/10 text-universe-primary',
      borderColor: 'border-universe-primary/20'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Modules' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend/DB' },
    { id: 'devops', label: 'Devops' },
    { id: 'languages', label: 'Languages' }
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  )

  return (
    <section id="skills" className="min-h-screen py-24 px-6 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Skills Laboratory
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Diagnostics terminal of technical competencies. Click on a module to load its database metrics, confidence score, and sample codebase snippets.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-universe-primary border-universe-primary text-black font-bold shadow-lg shadow-universe-primary/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Board Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.button
                layout
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                whileHover={{ scale: 1.03, translateY: -2 }}
                className={`p-5 rounded-2xl border bg-slate-950/40 glass-panel text-left flex flex-col justify-between gap-4 cursor-pointer hover:border-universe-accent/50 glow-border transition-all duration-300 ${skill.glowColor}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {skill.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white">{skill.name}</h4>
                  <span className="text-[10px] font-mono text-universe-accent mt-1 block">
                    Confidence: {skill.confidence.split(' ')[0]}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Diagnostics Terminal Overlay Modal */}
      <AnimatePresence>
        {activeSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Terminal header */}
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2">lab-diagnostics://{activeSkill.name.toLowerCase()}</span>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Diagnostics Panel Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Experience Runtime</span>
                    <p className="text-base font-bold text-white">{activeSkill.experience}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">System Confidence</span>
                    <p className="text-base font-bold text-universe-accent">{activeSkill.confidence}</p>
                  </div>
                </div>

                {/* Projects linkage */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Production Linkage</span>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-3 py-1 rounded-full text-xs border border-slate-800 bg-slate-900/30 text-slate-300"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Compiler diagnostics display */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Source Diagnostics</span>
                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/80 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre">
                    {activeSkill.diagnosticCode}
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
