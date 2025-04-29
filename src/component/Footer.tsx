"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa"
import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import type React from "react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        <div className="py-8">
          {/* Scroll to top button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-black rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Left Side: Name & Title */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Akshay Bondre</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Full Stack Developer | C++ DSA Enthusiast</p>
            </div>

            {/* Right Side: Social Links */}
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/Akshaybondre123" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/akshay-bondre-17b071246/" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://twitter.com/YOUR_TWITTER_HANDLE" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="mailto:akshaybondre350@gmail.com" aria-label="Email">
                <FaEnvelope className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {["Home", "About", "Projects", "Skills", "Achievements", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Akshay Bondre. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function SocialLink({ href, children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}
