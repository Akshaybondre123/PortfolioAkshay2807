"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text } from "@react-three/drei"
import type * as THREE from "three"

const PROJECTS = [
  {
    name: "Servi-Fi-Tech Official Website",
    description:
      "Official website for Servi-Fi-Tech, designed with Next.js and React.js. Features cutting-edge 3D animations, integrated AI chatbot support, and a sleek, modern interface. Built for performance, interactivity, and seamless user experience.",
    image: "/Servi-Fi.png",
    link: "/Servi-Fi.png",
    github: "https://github.com/Akshaybondre123/Servi-fi-tech",
    tags: ["Next.js", "React.js", "3D Animation", "AI Chatbot", "Official Website"],
  },
  {
    name: "Task Management App",
    description:
      "Web application for adding, deleting, and filtering tasks with a clean interface. Helps users organize their work efficiently with an intuitive UI.",
    image: "https://maxm-imggenurl.web.val.run/task-management-app-screenshot",
    link: "https://task-mange-8qk6ljiww-akshay-bondres-projects.vercel.app/",
    tags: ["React", "Task Management", "CRUD"],
  },
  {
    name: "Weather Information App",
    description:
      "Real-time weather app with intuitive search feature. Get accurate weather forecasts for any location with a beautiful and responsive interface.",
    image: "https://maxm-imggenurl.web.val.run/weather-app-screenshot",
    link: "https://weather-search-git-main-akshay-bondres-projects.vercel.app/",
    tags: ["API", "Weather", "React"],
  },
]

function FloatingLaptop({ scrollProgress }: { scrollProgress: number }) {
  const laptopRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2 + clock.getElapsedTime() * 0.1
      laptopRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1
      laptopRef.current.rotation.x = scrollProgress * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={laptopRef} position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3, 0.1, 2]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
        <group position={[0, 0.6, -0.9]} rotation={[Math.PI / 6, 0, 0]}>
          <mesh>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.06, 0]}>
            <planeGeometry args={[2.8, 1.8]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>
          <Text position={[0, 0.1, 0.1]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
            Projects
          </Text>
        </group>
      </group>
    </Float>
  )
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollY)
    return () => unsubscribe()
  }, [scrollYProgress])

  // Base animations
  const yValue = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scaleValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Individual rotateY transforms for each project
  const rotateY1 = useTransform(scrollYProgress, [0, 1], [0, -10])
  const rotateY2 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotateY3 = useTransform(scrollYProgress, [0, 1], [0, -10])
  
  // Array of rotateY values
  const rotateYValues = [rotateY1, rotateY2, rotateY3]

  return (
    <section id="projects" ref={sectionRef} className="projects-section py-16 bg-background min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingLaptop scrollProgress={scrollY} />
          <Environment preset="city" />
        </Canvas>
      </div>

      <motion.h2
        className="section-title text-4xl font-bold text-center mb-12 text-foreground relative z-10"
        style={{ opacity: opacityValue, y: yValue, scale: scaleValue }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
              style={{ rotateY: rotateYValues[index] }}
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

        <motion.div className="flex justify-center mt-12" style={{ opacity: opacityValue, scale: scaleValue }}>
          <motion.a
            href="/projects"
            className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium bg-white text-black px-2 py-1 rounded">
              View More Projects
            </span>
            <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}