import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Calendar, FileText, ArrowUpRight, Cpu } from 'lucide-react'

interface ContactButton {
  id: string
  label: string
  icon: any
  url: string
  color: string
  borderColor: string
  svgLogo?: boolean
}

export function ContactMission() {
  const [launchingId, setLaunchingId] = useState<string | null>(null)
  const [launchMessage, setLaunchMessage] = useState('')

  const buttons: ContactButton[] = [
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      icon: null,
      url: 'https://linkedin.com',
      color: 'bg-blue-600/10 text-blue-400 hover:bg-blue-600/25',
      borderColor: 'border-blue-500/30',
      svgLogo: true
    },
    {
      id: 'github',
      label: 'GitHub Repos',
      icon: null,
      url: 'https://github.com',
      color: 'bg-slate-900/50 text-slate-300 hover:bg-slate-800/80',
      borderColor: 'border-slate-800',
      svgLogo: true
    },
    {
      id: 'resume',
      label: 'Engineering Resume',
      icon: FileText,
      url: '#',
      color: 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20',
      borderColor: 'border-amber-500/30'
    },
    {
      id: 'email',
      label: 'Direct Email',
      icon: Mail,
      url: 'mailto:abin@example.com',
      color: 'bg-rose-500/10 text-rose-400 hover:bg-rose-500/20',
      borderColor: 'border-rose-500/30'
    },
    {
      id: 'meeting',
      label: 'Schedule Meeting',
      icon: Calendar,
      url: 'https://calendly.com',
      color: 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20',
      borderColor: 'border-emerald-500/30'
    }
  ]

  const messages = [
    "Locking link coordinates...",
    "Aligning sub-space vectors...",
    "Igniting launch boosters...",
    "Portal opening: redirecting..."
  ]

  const handleLaunch = (btn: ContactButton) => {
    if (launchingId) return
    setLaunchingId(btn.id)
    
    let index = 0
    setLaunchMessage(messages[0])

    const interval = setInterval(() => {
      index++
      if (index < messages.length) {
        setLaunchMessage(messages[index])
      } else {
        clearInterval(interval)
        setLaunchingId(null)
        if (btn.url !== '#') {
          window.open(btn.url, '_blank', 'noopener,noreferrer')
        } else {
          alert("Resume link simulation triggered! Replace with actual PDF path.")
        }
      }
    }, 400)
  }

  return (
    <section id="contact" className="min-h-screen py-24 px-6 relative z-10 grid-bg flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full text-center space-y-12">
        
        {/* Mission Terminal Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-universe-accent/20 bg-universe-accent/5 text-universe-accent text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            SECURE LINK TO LAUNCH STATION
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Mission control dashboard active. Select a communications channel below to establish contact. Each action initiates standard redirect sequencing.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {buttons.map((btn) => {
            const Icon = btn.icon
            const isLinkedIn = btn.id === 'linkedin'

            return (
              <motion.button
                key={btn.id}
                onClick={() => handleLaunch(btn)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border ${btn.borderColor} ${btn.color} font-heading font-semibold text-sm flex items-center justify-between transition-all cursor-pointer glow-border shadow-md`}
              >
                <div className="flex items-center gap-3">
                  {btn.svgLogo ? (
                    isLinkedIn ? (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    )
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                  <span>{btn.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 hover:opacity-100" />
              </motion.button>
            )
          })}
        </div>

        {/* Loading / Redirect status overlay */}
        <AnimatePresence>
          {launchingId && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-md mx-auto p-4 rounded-xl border border-universe-accent/20 bg-slate-900/60 backdrop-blur-md flex items-center justify-center gap-3 font-mono text-xs text-universe-accent shadow-xl"
            >
              <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-universe-accent animate-spin" />
              <span>{launchMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
