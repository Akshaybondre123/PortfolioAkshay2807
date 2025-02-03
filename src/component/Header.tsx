"use client"
import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import DarkModeToggle from "./DarkModeToggle"

const SECTION_ICONS = {
  Home: "\u{1F3E0}",
  About: "\u{1F464}",
  Projects: "\u{1F4BC}",
  Skills: "\u{1F6E0}\uFE0F",
  Achievements: "\u{1F3C6}",
  Experience: "\u{1F4C8}",
  Contact: "\u{1F4DE}",
}

function SectionIcon({ section }: { section: keyof typeof SECTION_ICONS }) {
  return (
    <span className="section-icon" role="img" aria-label={`${section} icon`}>
      {SECTION_ICONS[section]}
    </span>
  )
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="nav-container fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed top-4 left-4 z-50">
        <DarkModeToggle />
      </div>
      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""} md:hidden fixed top-4 right-4 z-50`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav
        className={`main-nav ${isMobileMenuOpen ? "mobile-open" : "hidden"} md:flex items-center justify-center py-4`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {Object.keys(SECTION_ICONS).map((section) => (
            <li key={section} className={activeSection === section.toLowerCase() ? "active" : ""}>
              <Link
                href={`#${section.toLowerCase()}`}
                onClick={() => handleNavClick(section.toLowerCase())}
                className="nav-link text-base flex items-center"
              >
                <SectionIcon section={section as keyof typeof SECTION_ICONS} />
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />
            <motion.nav
              className="mobile-nav fixed top-0 left-0 h-screen w-full bg-background z-40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center space-y-6">
                {Object.keys(SECTION_ICONS).map((section) => (
                  <motion.li
                    key={section}
                    className={activeSection === section.toLowerCase() ? "active" : ""}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * Object.keys(SECTION_ICONS).indexOf(section) }}
                  >
                    <Link
                      href={`#${section.toLowerCase()}`}
                      onClick={() => handleNavClick(section.toLowerCase())}
                      className="nav-link text-lg flex items-center"
                    >
                      <SectionIcon section={section as keyof typeof SECTION_ICONS} />
                      {section}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

