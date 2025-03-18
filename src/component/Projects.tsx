"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const PROJECTS = [
  {
    name: "Ghost Dashboard",
    description:
      "Dashboard with authentication, email confirmation, and Google login for secure access. Features a clean dark UI with environment variable checking.",
    image:
      "https://sjc.microlink.io/bFeZa2uvYctUGYHUYygG2P_GfNUAqlGD2sjRU0eiGM2TIWLyVnruaNwipZqI5OA_HJDI6rRI-S9Coc3WSM2Pbg.jpeg",
    link: "https://ghost-site-akshay.netlify.app/",
    github: "https://github.com/Akshaybondre123/Ghost",
    tags: ["Next.js", "Authentication", "Dashboard"],
  },
  {
    name: "Task Management App",
    description:
      "Web application for adding, deleting, and filtering tasks with a clean interface. Helps users organize their work efficiently with an intuitive UI.",
    image: "https://maxm-imggenurl.web.val.run/task-management-app-screenshot",
    link: "https://task-mange-8qk6ljiww-akshay-bondres-projects.vercel.app/",
    github: "https://github.com/Akshaybondre123/Task-Mange",

    tags: ["React", "Task Management", "CRUD"],
  },
  {
    name: "Weather Information App",
    description:
      "Real-time weather app with intuitive search feature. Get accurate weather forecasts for any location with a beautiful and responsive interface.",
    image: "https://maxm-imggenurl.web.val.run/weather-app-screenshot",
    link: "https://weather-search-git-main-akshay-bondres-projects.vercel.app/",
    github: "https://github.com/Akshaybondre123/Ghost",

    tags: ["API", "Weather", "React"],
  },
  {
    name: "Nike E-commerce Website",
    description:
      "Interactive Nike shoes e-commerce platform with product browsing, filtering, and a seamless shopping experience for sneaker enthusiasts.",
    image: "https://maxm-imggenurl.web.val.run/nike-ecommerce-screenshot",
    link: "https://akshaybondre123.github.io/Ecommerce-Website/",
    github: "https://github.com/Akshaybondre123/Ecommerce-Website",

    tags: ["E-commerce", "Frontend", "UI/UX"],
  },
  {
    name: "Golf Animation Website",
    description:
      "Animated golf course with dynamic interactions and engaging visual elements that showcase creative web animation techniques.",
    image: "https://maxm-imggenurl.web.val.run/golf-animation-screenshot",
    link: "https://akshaybondre123.github.io/Frontend-Project-/",
    github: "https://github.com/Akshaybondre123/Frontend-Project-",

    tags: ["Animation", "Interactive", "CSS"],
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="projects-section py-16 bg-background">
      <motion.h2
        className="section-title text-4xl font-bold text-center mb-12 text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <div className="flex gap-2">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/80 text-white px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-auto">
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
      </div>
    </section>
  )
}

