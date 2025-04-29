"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Code, Award, LineChart, Phone } from "lucide-react"

const NAV_ITEMS = [
  { name: "Home", icon: <Home size={20} />, id: "home" },
  { name: "About", icon: <User size={20} />, id: "about" },
  { name: "Projects", icon: <Briefcase size={20} />, id: "projects" },
  { name: "Skills", icon: <Code size={20} />, id: "skills" },
  { name: "Achievements", icon: <Award size={20} />, id: "achievements" },
  { name: "Experience", icon: <LineChart size={20} />, id: "experience" },
  { name: "Contact", icon: <Phone size={20} />, id: "contact" },
]

export default function SimpleSideNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!isDesktop) return null

  // Function to scroll to section instead of using href
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full py-6 px-3 shadow-lg border border-gray-100/50 dark:border-gray-700/50">
        <ul className="flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.name} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative block p-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary dark:text-primary"
                      : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1"
                  }`}
                  aria-label={item.name}
                >
                  <div className="relative z-10">{item.icon}</div>
                  {isActive && <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full" />}
                </button>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-x-2 group-hover:translate-x-0">
                  <div className="bg-white dark:bg-gray-800 text-primary dark:text-primary px-3 py-1 rounded-md shadow-md text-sm font-medium whitespace-nowrap border border-gray-100 dark:border-gray-700">
                    {item.name}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
