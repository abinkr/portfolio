import { useState, useEffect } from 'react'
import { Cpu, Menu, X, Volume2, VolumeX } from 'lucide-react'

interface NavbarProps {
  activeSection: string
  soundEnabled: boolean
  setSoundEnabled: (val: boolean) => void
}

export function Navbar({ activeSection, soundEnabled, setSoundEnabled }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Stats' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-universe-primary via-universe-secondary to-universe-accent z-100 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick('landing')}
          className="flex items-center gap-2 font-heading font-semibold text-white tracking-wide cursor-pointer hover:opacity-85 transition-opacity"
        >
          <Cpu className="w-5 h-5 text-universe-accent animate-pulse" />
          <span>ABIN.UNIVERSE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-heading text-sm font-medium tracking-wider transition-all relative py-1 cursor-pointer ${
                activeSection === link.id
                  ? 'text-universe-accent font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-universe-accent rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Volume & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
            title={soundEnabled ? "Mute audio" : "Enable audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-universe-accent" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400"
          >
            <X className="w-6 h-6" />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-heading text-2xl font-semibold tracking-wider transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-universe-accent'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
