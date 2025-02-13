"use client"
import { useEffect, useRef, useState } from "react"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
  className,
  particleType,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
  className?: string
  particleType?: "circle" | "square" | "line" | "image"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [particles, setParticles] = useState<any[]>([])
  //const [animationId, setAnimationId] = useState<number | null>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    if (particleType === "image") {
      const img = new Image()
      img.src = "/sparkle.png"
      img.onload = () => {
        setImage(img)
      }
    }
  }, [particleType])

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      setContext(ctx)

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    if (context) {
      const particleCount = Math.floor(
        ((window.innerWidth * window.innerHeight) / 1080 / 720) * (particleDensity || 100),
      )
      const newParticles = []

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const size = Math.random() * (maxSize! - minSize!) + minSize!
        const weight = Math.random() * 2 - 0.5
        const directionX = Math.random() * weight
        const directionY = Math.random() * weight

        newParticles.push({
          x,
          y,
          size,
          directionX,
          directionY,
        })
      }

      setParticles(newParticles)
    }
  }, [context, minSize, maxSize, particleDensity])

  useEffect(() => {
    if (context && particles.length > 0) {
      let animationId: number
      const animate = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        particles.forEach((particle) => {
          particle.x += particle.directionX * (speed || 0.2)
          particle.y += particle.directionY * (speed || 0.2)

          if (particle.x < 0 || particle.x > window.innerWidth) {
            particle.directionX *= -1
          }

          if (particle.y < 0 || particle.y > window.innerHeight) {
            particle.directionY *= -1
          }

          switch (particleType) {
            case "circle":
              context.beginPath()
              context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
              context.fillStyle = particleColor || "#ffffff"
              context.fill()
              break
            case "square":
              context.beginPath()
              context.rect(particle.x, particle.y, particle.size, particle.size)
              context.fillStyle = particleColor || "#ffffff"
              context.fill()
              break
            case "line":
              context.beginPath()
              context.moveTo(particle.x, particle.y)
              context.lineTo(particle.x + particle.size, particle.y + particle.size)
              context.strokeStyle = particleColor || "#ffffff"
              context.stroke()
              break
            case "image":
              if (image) {
                context.drawImage(image, particle.x, particle.y, particle.size, particle.size)
              }
              break
            default:
              context.beginPath()
              context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
              context.fillStyle = particleColor || "#ffffff"
              context.fill()
          }
        })

        animationId = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }
    }
  }, [context, particles, speed, particleColor, particleType, image])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background: background || "transparent",
      }}
    />
  )
}

export const Sparkles = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleType,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleType?: "circle" | "square" | "line" | "image"
}) => {
  const [density, setDensity] = useState(100)
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)
  const scaleXRange = useTransform(scaleX, [0, 1], [0, 1])
  const scaleYRange = useTransform(scaleY, [0, 1], [0, 1])

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight
      if (aspectRatio < 1) {
        setDensity(100 * aspectRatio)
        animate(scaleX, aspectRatio, { duration: 0 })
        animate(scaleY, 1, { duration: 0 })
      } else {
        setDensity(100)
        animate(scaleX, 1, { duration: 0 })
        animate(scaleY, 1 / aspectRatio, { duration: 0 })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [scaleX, scaleY])

  return (
    <motion.div
      style={{
        scaleX: scaleXRange,
        scaleY: scaleYRange,
        width: "100%",
        height: "100%",
      }}
    >
      <SparklesCore
        id={id}
        background={background}
        minSize={minSize}
        maxSize={maxSize}
        speed={speed}
        particleColor={particleColor}
        className={className}
        particleDensity={density}
        particleType={particleType}
      />
    </motion.div>
  )
}

