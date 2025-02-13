"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link?: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-slate-800 dark:bg-slate-800/[0.8] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              WebkitMaskImage: `radial-gradient(240px at center, white, transparent)`,
              maskImage: `radial-gradient(240px at center, white, transparent)`,
            }}
            animate={{
              backgroundPosition: hoveredIndex === idx ? "50% 50%" : "0% 0%",
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <div className="relative z-10 p-5">
            <h4 className="font-bold text-lg mb-2 text-zinc-100">{item.title}</h4>
            <p className="text-sm text-zinc-300 mb-4">{item.description}</p>
            {item.link && (
              <a href={item.link} className="text-sm text-indigo-400 hover:text-indigo-300">
                Learn more →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

