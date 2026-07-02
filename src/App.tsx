import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Starfield } from './components/Starfield'
import { Navbar } from './components/Navbar'
import { WorkspaceSection } from './components/WorkspaceSection'
import { JourneyTimeline } from './components/JourneyTimeline'
import { SkillsLab } from './components/SkillsLab'
import { ProjectUniverse } from './components/ProjectUniverse'
import { Achievements } from './components/Achievements'
import { ContactMission } from './components/ContactMission'
import { Sparkles, ArrowDown } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('landing')
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Track active viewport section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Trigger when section occupies center viewport
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ['landing', 'about', 'journey', 'skills', 'projects', 'achievements', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const enterUniverse = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-bg-universe text-white overflow-x-hidden font-sans select-none selection:bg-universe-primary selection:text-white">
      {/* Starfield Background */}
      <Starfield />

      {/* Ambient glows behind sections */}
      <div className="fixed top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-universe-primary/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-universe-accent/5 blur-[150px] pointer-events-none z-0" />

      {/* Header / Navbar */}
      <Navbar 
        activeSection={activeSection} 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled} 
      />

      {/* LANDING SECTION */}
      <section 
        id="landing" 
        className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10 grid-bg"
      >
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-universe/80 to-bg-universe pointer-events-none" />

        <div className="max-w-3xl text-center space-y-8 relative z-20">
          {/* Animated Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-universe-primary/30 bg-universe-primary/10 text-universe-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Experience</span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-6xl sm:text-8xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
            >
              ABIN K R
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-lg sm:text-2xl font-heading font-medium text-universe-accent uppercase tracking-widest text-glow-accent"
            >
              Full Stack Developer
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Orchestrating intelligent, performant web experiences. Transforming technical complexity into elegant user interfaces.
          </motion.p>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="pt-6"
          >
            <button
              onClick={enterUniverse}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-universe-primary to-universe-secondary text-white font-heading font-bold text-sm tracking-wider shadow-lg shadow-universe-primary/20 hover:shadow-universe-primary/45 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 mx-auto"
            >
              <span>Enter My Universe</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MEET ABIN - WORKSPACE */}
      <WorkspaceSection />

      {/* JOURNEY TIMELINE */}
      <JourneyTimeline />

      {/* SKILLS LABORATORY */}
      <SkillsLab />

      {/* PROJECT UNIVERSE */}
      <ProjectUniverse />

      {/* ACHIEVEMENTS STATS */}
      <Achievements />

      {/* CONTACT MISSION */}
      <ContactMission />

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-8 bg-slate-950/40 text-center relative z-10 text-xs text-slate-500 font-mono">
        © 2026 ABIN K R. Built with React + TypeScript + Tailwind CSS v4. All systems operational.
      </footer>
    </div>
  )
}

export default App
