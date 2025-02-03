"use client"

import { useState, useEffect } from "react"
import Header from "../component/Header"
import Home from "../component/Home"
import About from "../component/About"
import Skills from "../component/Skills"
import Projects from "../component/Projects"
import Achievements from "../component/Achievements"
import Experience from "../component/Experience"
import Contact from "../component/Contact"
import Loading from "../component/Loading"
import DarkModeToggle from "../component/DarkModeToggle"

export default function Page() {
  const [typedText, setTypedText] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  const fullText = "Full Stack  Developer | C++ DSA Enthusiast"

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typing)
      }
    }, 50)

    return () => clearInterval(typing)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Used to fix hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home typedText={typedText} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </div>
  )
}

