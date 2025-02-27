"use client"

import dynamic from "next/dynamic"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import {TimelineDemo} from "./components/time"
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

export default function Home() {
  return (
    <Head>
        <link rel="icon" href="/logo.png" />
    </Head>
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{ backgroundColor: "#fff" }}
        outerStyle={{ border: "3px solid #fff" }}
      />

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
        <About />
        <TimelineDemo/>
        <Prizes />
        {/* <CardSpotlightDemo />  */}
        <Themes />
        <Teams />
        <CB />
        <FAQ />\
      </main>
      <Footer />
    </div>
  )
}

