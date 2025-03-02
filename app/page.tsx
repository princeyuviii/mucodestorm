"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useAnimation } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import { TimelineDemo } from "./components/time"
import Prizes from "./components/Prizes"
import Themes from "./components/Themes"
import Teams from "./components/team"
import CB from "./components/cb"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import { SparklesCore } from "./components/ui/sparkles"
// import { CardSpotlightDemo } from "./components/Prizes"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

// Create a simple scroll animation component
const ScrollAnimation = ({ children, delay = 0.2 }: { children: React.ReactNode, delay?: number }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, isVisible])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect touch devices on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Add custom scrollbar styling when component mounts
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement("style")
    
    // Define the CSS for custom scrollbar
    const css = `
      /* For Webkit browsers (Chrome, Safari, newer Edge) */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(139, 92, 246, 0.3); /* Purple with transparency */
        border-radius: 10px;
        border: 2px solid rgba(0, 0, 0, 0.9); /* Add border to match the dark background */
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(139, 92, 246, 0.5); /* Darker purple on hover */
      }
      
      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
      }
      
      /* For component-specific scrollbars */
      .custom-scrollbar ::-webkit-scrollbar {
        width: 8px;
      }
      
      .custom-scrollbar ::-webkit-scrollbar-thumb {
        background: rgba(139, 92, 246, 0.3);
        border-radius: 8px;
      }
    `
    
    // Set the CSS text content
    styleEl.textContent = css
    
    // Append the style element to the document head
    document.head.appendChild(styleEl)
    
    // Clean up function to remove the style element when component unmounts
    return () => {
      document.head.removeChild(styleEl)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{ backgroundColor: "#fff" }}
          outerStyle={{ border: "3px solid #fff" }}
        />
      )}
      {/* Sparkles moved outside to prevent blocking interactions */}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={40}
        className="absolute inset-0 w-full h-full pointer-events-none" 
        particleColor="#FFFFFF"
        speed={0.2}
      />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <TimelineDemo />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <Prizes />
        </ScrollAnimation>
        {/* <CardSpotlightDemo />  */}
        <ScrollAnimation delay={0.3}>
          <Themes />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <Teams />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <CB />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <FAQ />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  )
}
