"use client"
import { useState, useCallback } from "react"
import Link from "next/link"
import DarkModeToggle from "./DarkModeToggle"
import { Home, User, Briefcase, Code, Award, LineChart, Phone } from "lucide-react"

const SECTION_ICONS = {
  Home: <Home className="w-5 h-5" />,
  About: <User className="w-5 h-5" />,
  Projects: <Briefcase className="w-5 h-5" />,
  Skills: <Code className="w-5 h-5" />,
  Achievements: <Award className="w-5 h-5" />,
  Experience: <LineChart className="w-5 h-5" />,
  Contact: <Phone className="w-5 h-5" />,
}

export default function Header({
  activeSection,
  setActiveSection,
}: {
  activeSection: string
  setActiveSection: (section: string) => void
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleNavClick = useCallback(
    (section: string) => {
      setActiveSection(section)
      setIsMobileMenuOpen(false)
    },
    [setActiveSection],
  )

  return (
    <div className="lg:hidden">
      {" "}
      {/* Hide on desktop */}
      {/* Mobile Navigation Toggle Button */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""} fixed top-4 right-4 z-50`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      {/* Dark Mode Toggle for mobile */}
      <div className="fixed top-4 left-4 z-50">
        <DarkModeToggle />
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMobileMenu} />
          <nav className="mobile-nav fixed top-0 left-0 h-screen w-full bg-background z-40 flex items-center justify-center">
            <ul className="flex flex-col items-center space-y-6">
              {Object.entries(SECTION_ICONS).map(([section, icon]) => (
                <li key={section} className={activeSection === section.toLowerCase() ? "active" : ""}>
                  <Link
                    href={`#${section.toLowerCase()}`}
                    onClick={() => handleNavClick(section.toLowerCase())}
                    className="nav-link text-lg flex items-center gap-2"
                  >
                    <span className="text-primary">{icon}</span>
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}
