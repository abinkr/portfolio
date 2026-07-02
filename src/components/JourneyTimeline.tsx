import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Code2, Globe, Sparkles } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  subtitle: string
  description: string
  icon: any
  color: string
  borderColor: string
  bgColor: string
}

export function JourneyTimeline() {
  const events: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Initiation into Software Development',
      subtitle: 'The spark of programming',
      description: 'Discovered python, shell scripting, and core algorithmic thinking. Built CLI automation tools and fell in love with crafting solutions.',
      icon: Code2,
      color: 'text-universe-primary',
      borderColor: 'border-universe-primary/30',
      bgColor: 'bg-universe-primary/5'
    },
    {
      year: '2024',
      title: 'Full Stack Web Engineering',
      subtitle: 'Building the modern web',
      description: 'Mastered JavaScript, TypeScript, React, Node.js, and databases. Constructed full web applications with authentication, responsive layouts, and REST APIs.',
      icon: GraduationCap,
      color: 'text-white',
      borderColor: 'border-white/30',
      bgColor: 'bg-white/5'
    },
    {
      year: '2025',
      title: 'AI Systems Integration',
      subtitle: 'Intelligent software design',
      description: 'Pivoted into LLM API integration, natural language classifiers, semantic search, and agentic workflows. Built smart widgets and automated data pipelines.',
      icon: Sparkles,
      color: 'text-universe-primary',
      borderColor: 'border-universe-primary/30',
      bgColor: 'bg-universe-primary/5'
    },
    {
      year: '2026',
      title: 'Scale & Production Deployments',
      subtitle: 'Continuous delivery',
      description: 'Focused on high-performance optimization, Tailwind CSS v4, Framer Motion aesthetics, serverless infrastructure, and Docker deployments for clients.',
      icon: Globe,
      color: 'text-white',
      borderColor: 'border-white/30',
      bgColor: 'bg-white/5'
    },
    {
      year: 'Future',
      title: 'Next Frontiers',
      subtitle: 'Always learning',
      description: 'Researching advanced agentic architecture, decentralized storage systems, Edge computing, and immersive 3D interfaces to craft the web of tomorrow.',
      icon: Rocket,
      color: 'text-universe-primary',
      borderColor: 'border-universe-primary/30',
      bgColor: 'bg-universe-primary/5'
    }
  ]

  return (
    <section id="journey" className="min-h-screen py-24 px-6 relative z-10 grid-bg">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Journey Timeline
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Tracing my growth from writing my first program to orchestrating production-ready, intelligent, full-stack applications.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-1/2 space-y-12 py-8">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0
            const Icon = event.icon

            return (
              <div key={event.year} className="relative w-full">
                {/* Connector Node */}
                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-20">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className={`w-4 h-4 rounded-full bg-slate-950 border-2 ${event.borderColor} flex items-center justify-center`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-universe-accent" />
                  </motion.div>
                </div>

                {/* Card Container */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -50 : 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                  className={`w-[calc(100%-32px)] ml-8 md:w-[calc(50%-32px)] md:ml-0 ${
                    isLeft ? 'md:mr-auto text-left md:text-right' : 'md:ml-auto text-left'
                  }`}
                >
                  <div className={`p-6 rounded-2xl border ${event.borderColor} ${event.bgColor} glass-panel space-y-4 glow-border transition-all duration-300`}>
                    {/* Header */}
                    <div className={`flex items-center gap-3 justify-start ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`font-mono text-xl font-bold ${event.color}`}>
                        {event.year}
                      </span>
                      <div className={`p-2 rounded-xl bg-slate-900 border ${event.borderColor} ${event.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-heading font-bold text-white">{event.title}</h4>
                      <h5 className="text-xs font-mono font-medium text-universe-accent uppercase tracking-wider">{event.subtitle}</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
