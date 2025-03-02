"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Themes", href: "#themes" },
    // { name: "Sponsors", href: "#sponsors" },
    { name: "Teams", href: "#teams" },
    { name: "FAQ", href: "#faq" },
  ]

  const textVariants = {
    normal: { color: "#ffffff" },
    hover: { 
      color: "#4f46e5",
      textShadow: "0 0 8px #4f46e5, 0 0 12px #4f46e5",
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-white ml-0 relative group"
          onMouseEnter={() => setHoveredItem("logo")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img 
            src="/mu.png" 
            alt="MU Codathon Logo" 
            className={`h-10 w-10 transition-all duration-300 ${hoveredItem === "logo" ? "rotate-12 scale-110" : ""}`} 
          />
          <span className={`text-2xl font-bold transition-all duration-300 ${hoveredItem === "logo" ? "text-indigo-400" : "text-white"}`}>
            MU CodeStorm
            {hoveredItem === "logo" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 animate-pulse" />
            )}
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              initial="normal"
              whileHover="hover"
              animate={hoveredItem === item.name ? "hover" : "normal"}
              variants={textVariants}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <Link href={item.href} className="py-2 px-1 inline-block relative overflow-hidden">
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              {/* Rectangle element removed */}
            </motion.div>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <img src="cb.png" alt="" className="hidden md:block w-400 h-12"/>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.15)" }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="block py-2 px-4 text-white transition duration-300"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className={`transition-all duration-300 ${hoveredItem === item.name ? "text-indigo-400 pl-2" : "text-white"}`}>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
