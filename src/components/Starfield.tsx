import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  baseSpeedX: number
  baseSpeedY: number
  depth: number
  color: string
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    const count = 100
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const colors = [
      'rgba(255, 255, 255, 0.8)',
      'rgba(99, 102, 241, 0.6)', // Primary
      'rgba(139, 92, 246, 0.6)', // Secondary
      'rgba(6, 180, 212, 0.6)',   // Accent
    ]

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          baseSpeedX: (Math.random() - 0.5) * 0.15,
          baseSpeedY: (Math.random() - 0.5) * 0.15,
          depth: Math.random() * 25 + 5, // Depth for parallax calculations
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX - window.innerWidth / 2
      mouse.targetY = e.clientY - window.innerHeight / 2
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    handleResize()

    const animate = () => {
      // Ease mouse coordinates for smooth lag-effect
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Add base speed drift
        star.x += star.baseSpeedX
        star.y += star.baseSpeedY

        // Loop stars around boundaries
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Calculate positions with mouse parallax
        const renderX = star.x - mouse.x / star.depth
        const renderY = star.y - mouse.y / star.depth

        // Draw star
        ctx.beginPath()
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        
        // Add subtle glow to larger stars
        if (star.size > 1.2) {
          ctx.shadowBlur = 4
          ctx.shadowColor = star.color
        } else {
          ctx.shadowBlur = 0
        }
        
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
