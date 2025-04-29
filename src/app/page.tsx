"use client"

import { useState, useEffect } from "react"
import Header from "../component/Header"
import SimpleSideNav from "../component/SimpleSideNav"
import Home from "../component/Home"
import About from "../component/About"
import Skills from "../component/Skills"
import Projects from "../component/Projects"
import Achievements from "../component/Achievements"
import Experience from "../component/Experience"
import Contact from "../component/Contact"
import Footer from "../component/Footer"
import Loading from "../component/Loading"
import DarkModeToggle from "../component/DarkModeToggle"

export default function Page() {
  const [typedText, setTypedText] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  const fullText = "NextJs Developer | C++ DSA Enthusiast"

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(typing)
      }
    }, 50)

    return () => clearInterval(typing)
  }, [])

  useEffect(() => {
    // Show loading screen for 10 seconds with progress
    const startTime = Date.now()
    const duration = 10000 // 10 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100)
      setLoadingProgress(progress)

      if (progress < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        setIsLoading(false)
      }
    }

    requestAnimationFrame(updateProgress)

    // Ensure loading screen disappears after 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Used to fix hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (isLoading) {
    return <Loading progress={loadingProgress} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Keep the original header for mobile */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Add our new side navigation */}
      <SimpleSideNav />

      {/* Fixed position for dark mode toggle on desktop */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
        <DarkModeToggle />
      </div>

      <Home typedText={typedText} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
