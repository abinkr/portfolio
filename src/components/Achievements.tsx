import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, Trophy, Award, GitCommit, GraduationCap, CheckCircle } from 'lucide-react'

interface StatItemProps {
  label: string
  targetValue: number
  prefix?: string
  suffix?: string
  icon: any
  description: string
  color: string
}

function CountUpStat({ label, targetValue, prefix = '', suffix = '', icon: Icon, description, color }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = targetValue
    if (start === end) {
      setCount(end)
      return
    }
    
    // Choose duration based on total value
    const duration = 2000 // 2 seconds
    const stepTime = Math.max(Math.floor(duration / end), 15)
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100)
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, targetValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-slate-900 bg-slate-950/40 glass-panel flex flex-col justify-between hover:border-universe-accent/30 glow-border transition-all duration-300"
    >
      <div className="flex items-center justify-between w-full">
        <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <Trophy className="w-4 h-4 text-slate-700" />
      </div>

      <div className="mt-6 space-y-2">
        <div className="font-heading text-4xl font-extrabold text-white tracking-tight">
          {prefix}{count}{suffix}
        </div>
        <div className="font-heading text-sm font-semibold text-slate-200">
          {label}
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="min-h-screen py-24 px-6 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            System Achievements
          </h2>
          <p className="text-universe-muted max-w-xl mx-auto text-sm md:text-base">
            Quantifiable indicators of my technical journey. These live counters track my software output, commit frequencies, and development philosophy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CountUpStat
            label="Projects Built & Deployed"
            targetValue={5}
            suffix="+"
            icon={Rocket}
            description="Production products and sandboxed web software platforms fully shipped."
            color="text-emerald-400"
          />

          <CountUpStat
            label="Technologies Mastered"
            targetValue={15}
            suffix="+"
            icon={GraduationCap}
            description="Frameworks, databases, languages, and container models configured."
            color="text-indigo-400"
          />

          <CountUpStat
            label="Git Commits Logged"
            targetValue={1500}
            suffix="+"
            icon={GitCommit}
            description="Version control pushes documenting constant deployment increments."
            color="text-rose-400"
          />
        </div>

        {/* Textual Achievements Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-slate-900 bg-slate-950/20 glass-panel flex items-start gap-4"
          >
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-white text-sm">Deployment Ready</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every application is packaged using Docker environments or hosted serverless on Vercel and AWS, establishing smooth operational resilience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-slate-900 bg-slate-950/20 glass-panel flex items-start gap-4"
          >
            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-white text-sm">Continuous Optimization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing clean layouts, responsive breakpoints, accessible WCAG 2.2 tags, and aggressive code splitting to guarantee top-tier lighthouse ranks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
