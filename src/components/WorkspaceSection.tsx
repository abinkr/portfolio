import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, BookOpen, Coffee, Server, Cloud, X, ArrowRight, Brain, Terminal, Shield, Zap } from 'lucide-react'

interface WorkspaceItem {
  id: string
  name: string
  icon: any
  tagline: string
  description: string
  details: string[]
  accentColor: string
  glowClass: string
}

export function WorkspaceSection() {
  const [selectedItem, setSelectedItem] = useState<WorkspaceItem | null>(null)

  const items: WorkspaceItem[] = [
    {
      id: 'laptop',
      name: 'Programming & Logic',
      icon: Laptop,
      tagline: 'Crafting performant client interfaces & system engines.',
      description: 'Writing high-quality code in TypeScript, React, and Python. Focused on responsive architectures, smooth performance, and clean interfaces.',
      details: [
        'Component Architecture & State Orchestration',
        'Custom Micro-interactions & Framer Motion workflows',
        'TypeScript Typesafety & Robust Error Boundaries',
        'Optimizing Core Web Vitals to maximize UX performance'
      ],
      accentColor: 'from-white to-zinc-400',
      glowClass: 'shadow-white/5 border-white/20'
    },
    {
      id: 'books',
      name: 'Continuous Learning',
      icon: BookOpen,
      tagline: 'Always exploring the edge of web engineering & AI.',
      description: 'Constantly researching modern system architectures, reading technical papers, and integrating AI API models into user workflows.',
      details: [
        'Applying design heuristics (Jakob Nielsen, Fitts\'s Law)',
        'Integrating Large Language Models (LLMs) into SaaS tools',
        'Studying security patterns, OAuth 2.0, and Web Cryptography',
        'Reviewing performance optimization in bundlers (Vite, webpack)'
      ],
      accentColor: 'from-universe-primary to-white',
      glowClass: 'shadow-universe-primary/20 border-universe-primary/30'
    },
    {
      id: 'coffee',
      name: 'Late-Night Development',
      icon: Coffee,
      tagline: 'Fueling creativity and focused debugging sessions.',
      description: 'Transforming complex engineering problems into clean, testable solutions during silent night hours when deep focus peak.',
      details: [
        'Dedicated profiling and memory-leak debugging',
        'Refactoring legacy code into structured patterns',
        'Designing test suites & mocking complex integrations',
        'Building side automation scripts and CLI pipelines'
      ],
      accentColor: 'from-zinc-500 to-zinc-700',
      glowClass: 'shadow-zinc-500/10 border-zinc-500/20'
    },
    {
      id: 'server',
      name: 'Scalable Backends',
      icon: Server,
      tagline: 'Building robust, secure, and fast API microservices.',
      description: 'Creating RESTful & GraphQL web services using Node.js, Express, and databases. Secure data storage, caching, and rate limiting.',
      details: [
        'REST and GraphQL API architecture',
        'MongoDB, PostgreSQL, and Supabase integration',
        'JWT Authentication & role-based access control',
        'Server caching (Redis) & performance load balancing'
      ],
      accentColor: 'from-universe-primary to-zinc-650',
      glowClass: 'shadow-universe-primary/10 border-universe-primary/20'
    },
    {
      id: 'cloud',
      name: 'Cloud & Deployments',
      icon: Cloud,
      tagline: 'Automating build pipelines and serverless scale.',
      description: 'Packaging applications in Docker containers and pushing to Vercel, AWS, or Supabase. Establishing seamless CI/CD flows.',
      details: [
        'Docker containerization and orchestration base',
        'GitHub Actions for automated lint, test, and release',
        'Serverless Functions and Edge hosting optimizations',
        'Continuous logs monitoring and uptime health checks'
      ],
      accentColor: 'from-white to-universe-primary/60',
      glowClass: 'shadow-white/5 border-white/15'
    }
  ]

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Meet Abin
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Explore my digital workspace. Hover and click on the objects in the workspace to reveal the engineering values driving my daily development.
          </p>
        </div>

        {/* Isometric Workspace Layout */}
        <div className="relative py-12 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Isometric Room Graphic */}
          <div className="relative w-full md:w-[60%] aspect-square max-w-[500px] border border-slate-800/80 bg-slate-950/40 rounded-3xl overflow-hidden glass-panel flex items-center justify-center">
            {/* Ambient Lighting Gradients */}
            <div className="absolute inset-0 bg-radial-gradient from-universe-primary/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Grid floor */}
            <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Floating Workspace Elements */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Desk/Core Node */}
              <div className="absolute w-24 h-24 rounded-full border border-universe-primary/40 bg-universe-primary/10 flex items-center justify-center animate-pulse">
                <Brain className="w-8 h-8 text-universe-primary" />
              </div>

              {/* Laptop Node */}
              <motion.button
                onClick={() => setSelectedItem(items[0])}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="absolute top-[20%] left-[20%] p-4 rounded-2xl bg-slate-900 border border-white/20 text-white shadow-lg shadow-white/5 cursor-pointer flex flex-col items-center gap-1"
              >
                <Laptop className="w-6 h-6 animate-bounce" />
                <span className="text-xs font-heading font-medium text-slate-300">Laptop</span>
              </motion.button>

              {/* Books Node */}
              <motion.button
                onClick={() => setSelectedItem(items[1])}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="absolute top-[20%] right-[20%] p-4 rounded-2xl bg-slate-900 border border-universe-primary/30 text-universe-primary shadow-lg shadow-universe-primary/5 cursor-pointer flex flex-col items-center gap-1"
              >
                <BookOpen className="w-6 h-6" />
                <span className="text-xs font-heading font-medium text-slate-300">Books</span>
              </motion.button>

              {/* Coffee Node */}
              <motion.button
                onClick={() => setSelectedItem(items[2])}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="absolute bottom-[20%] left-[20%] p-4 rounded-2xl bg-slate-900 border border-zinc-600/30 text-zinc-400 shadow-lg shadow-zinc-500/5 cursor-pointer flex flex-col items-center gap-1"
              >
                <Coffee className="w-6 h-6" />
                <span className="text-xs font-heading font-medium text-slate-300">Coffee</span>
              </motion.button>

              {/* Server Node */}
              <motion.button
                onClick={() => setSelectedItem(items[3])}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="absolute bottom-[20%] right-[20%] p-4 rounded-2xl bg-slate-900 border border-universe-primary/30 text-universe-primary shadow-lg shadow-universe-primary/5 cursor-pointer flex flex-col items-center gap-1"
              >
                <Server className="w-6 h-6" />
                <span className="text-xs font-heading font-medium text-slate-300">Server</span>
              </motion.button>

              {/* Cloud Node */}
              <motion.button
                onClick={() => setSelectedItem(items[4])}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="absolute bottom-[48%] right-[10%] p-4 rounded-2xl bg-slate-900 border border-white/20 text-white shadow-lg shadow-white/5 cursor-pointer flex flex-col items-center gap-1"
              >
                <Cloud className="w-6 h-6 animate-pulse" />
                <span className="text-xs font-heading font-medium text-slate-300">Cloud</span>
              </motion.button>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="flex-1 w-full space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 glass-panel space-y-4">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-universe-primary" />
                <span>Console Output</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As a developer, my workspace is my cockpit. I write code that bridges creative frontends with solid backend services. Hover or tap an element on the screen to deep dive into each segment of my digital ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Secure APIs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Sub-2s Loads</span>
                </div>
              </div>
            </div>

            {/* Helper Hint */}
            <div className="text-center md:text-left text-xs text-universe-accent flex items-center gap-2 justify-center md:justify-start">
              <span>Click on any workspace node to expand its specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up detail drawer */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Header Gradient */}
              <div className={`h-3 bg-gradient-to-r ${selectedItem.accentColor}`} />

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 space-y-6">
                {/* Title & Icon */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${selectedItem.accentColor} text-white`}>
                    <selectedItem.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-universe-accent font-mono uppercase tracking-wider">Workspace Node</span>
                    <h4 className="text-2xl font-heading font-bold text-white mt-0.5">{selectedItem.name}</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-universe-accent font-heading font-medium text-sm">
                    "{selectedItem.tagline}"
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Bullet details */}
                <div className="space-y-3">
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider block">Technicals & Philosophies</span>
                  <ul className="space-y-2.5">
                    {selectedItem.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-universe-accent mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
