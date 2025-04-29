"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, Search } from "lucide-react"

// Expanded project list with 12 projects
const ALL_PROJECTS = [
    {
        name: "Servi-Fi-Tech Official Website",
        description:
          "Official website for Servi-Fi-Tech featuring 3D animations, an AI chatbot, and a modern UI built using Next.js and React.js.",
        image: "/Servi-Fi.png",
        link: "https://servi-fi-tech-9xvy-git-main-akshay-bondres-projects.vercel.app/",
        github: "https://github.com/Akshaybondre123/Servi-fi-tech",
        tags: ["Next.js", "React.js", "3D Animation", "AI Chatbot", "Official Website"],
        featured: false,
      },
  {
    name: "Ghost Dashboard",
    description:
      "Dashboard with authentication, email confirmation, and Google login for secure access. Features a clean dark UI with environment variable checking.",
    image:
      "/Ghost.png",
    link: "#",
    github: "https://github.com/Akshaybondre123/Ghost",
    tags: ["Next.js", "Authentication", "Dashboard"],
    featured: true,
  },
  {
    name: "Task Management App",
    description:
      "Web application for adding, deleting, and filtering tasks with a clean interface. Helps users organize their work efficiently with an intuitive UI.",
    image: "https://maxm-imggenurl.web.val.run/task-management-app-screenshot",
    link: "https://task-mange-8qk6ljiww-akshay-bondres-projects.vercel.app/",
    tags: ["React", "Task Management", "CRUD"],
    featured: true,
  },
  {
    name: "Weather Information App",
    description:
      "Real-time weather app with intuitive search feature. Get accurate weather forecasts for any location with a beautiful and responsive interface.",
    image: "https://maxm-imggenurl.web.val.run/weather-app-screenshot",
    link: "https://weather-search-git-main-akshay-bondres-projects.vercel.app/",
    tags: ["API", "Weather", "React"],
    featured: true,
  },
  {
    name: "Nike E-commerce Website",
    description:
      "Interactive Nike shoes e-commerce platform with product browsing, filtering, and a seamless shopping experience for sneaker enthusiasts.",
    image: "https://maxm-imggenurl.web.val.run/nike-ecommerce-screenshot",
    link: "https://akshaybondre123.github.io/Ecommerce-Website/#nav",
    tags: ["E-commerce", "Frontend", "UI/UX"],
    featured: true,
  },
  {
    name: "Golf Animation Website",
    description:
      "Animated golf course with dynamic interactions and engaging visual elements that showcase creative web animation techniques.",
    image: "https://maxm-imggenurl.web.val.run/golf-animation-screenshot",
    link: "https://akshaybondre123.github.io/Frontend-Project-/",
    tags: ["Animation", "Interactive", "CSS"],
    featured: true,
  },
  {
    name: "Node.js Chat App",
    description:
      "A real-time chat application built with Node.js and Socket.io that allows users to chat instantly with others in a smooth, responsive UI.",
    image: "/ChatApp.png",
    link: "#",
    github: "https://github.com/Akshaybondre123/nodejs-chat-app",
    tags: ["Node.js", "Socket.io", "Chat", "Real-time"],
    featured: false,
  },
  {
    name: "Discord Colored Text Generator",
    description:
      "Generate ANSI-colored Discord messages with custom formatting like red, green, bold, underline, and preview the result before copying.",
    image: "/Discord.png",
    link: "#",
    github: "https://github.com/Akshaybondre123/discord-colored-text-generator",
    tags: ["JavaScript", "Discord", "ANSI Codes", "Formatting"],
    featured: false,
  },
  {
    name: "C++ Job Dispatcher System",
    description:
      "A multi-process job dispatcher in C++ using pipes and the `select` system call to assign jobs to specialized worker processes based on type.",
    image: "/Job.jpg",
    link: "#",
    github: "https://github.com/Akshaybondre123/cpp-job-dispatcher",
    tags: ["C++", "IPC", "Processes", "Concurrency", "Systems Programming"],
    featured: false,
  },
  {
    name: "Dynamic Admin Dashboard (JSON-based)",
    description:
      "A dashboard builder where users can add or remove widgets dynamically by category, using a JSON-driven structure and a customizable UI.",
    image: "/AdminD.png",
    link: "#",
    github: "https://github.com/Akshaybondre123/dynamic-dashboard-json",
    tags: ["React", "Dashboard", "JSON", "UI/UX"],
    featured: false,
  },
  
  {
    name: "Tatkal Ticket Application",
    description:
      "An optimized Tatkal ticket booking app designed to reduce latency and improve success rates, with features like autofill, real-time captcha handling, and secure authentication.",
    image: "/Ticket.jpg",
    link: "#",
    github: "https://github.com/Akshaybondre123/tatkal-ticket-app",
    tags: ["Automation", "Booking", "Security", "Real-time"],
    featured: false,
  },
]

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesFilter = filter ? project.tags.includes(filter) : true
    const matchesSearch = searchTerm
      ? project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true
    return matchesFilter && matchesSearch
  })

  const uniqueTags = Array.from(new Set(ALL_PROJECTS.flatMap((project) => project.tags)))

  const goBack = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button onClick={goBack} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-lg">Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold">All Projects</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-6">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === null
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === tag
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                    width={400}
                    height={225}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/80 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">{project.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                  {project.link && project.link !== "#" &&  (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <ExternalLink size={16} />
    <span>View Live</span>
  </motion.a>
)}

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-gray-800 text-white dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Akshay Bondre. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
