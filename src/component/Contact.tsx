"use client"
import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Text, Float, Sphere, MeshWobbleMaterial } from "@react-three/drei"

function ContactSpheres() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Email sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[-3, 0, 0]}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshWobbleMaterial color="#6366f1" factor={0.4} speed={2} />
        </Sphere>
        <Text
          position={[0, 0, 0.9]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          
        >
          Email
        </Text>
      </Float>

      {/* Phone sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[0, 0, 0]}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshWobbleMaterial color="#6366f1" factor={0.4} speed={2} />
        </Sphere>
        <Text
          position={[0, 0, 0.9]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          
        >
          Phone
        </Text>
      </Float>

      {/* Social sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[3, 0, 0]}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshWobbleMaterial color="#6366f1" factor={0.4} speed={2} />
        </Sphere>
        <Text
          position={[0, 0, 0.9]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          
        >
          Social
        </Text>
      </Float>
    </>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      // Reset form after submission
      setFormState({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error); // use the variable
      setSubmitStatus("error");
    
    
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section py-16 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900/50 min-h-screen flex items-center relative"
    >
      <div className="absolute inset-0 -z-10 h-64 top-1/4">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ContactSpheres />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 max-w-6xl z-10">
        <motion.h2
          className="section-title text-4xl font-bold text-center mb-12 text-foreground"
          style={{ opacity, y, scale }}
        >
          Contact Me
        </motion.h2>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" style={{ opacity, scale }}>
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>

            {submitStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center text-green-700 dark:text-green-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Thank you for your message! I&apos;ll get back to you soon.</span>
                </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center text-red-700 dark:text-red-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>There was an error sending your message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <motion.input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                ></motion.textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center text-black">
  <Send className="mr-2 h-4 w-4" />
  Send Message
</span>

                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>

              <div className="space-y-6">
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <motion.div
                    className="flex-shrink-0 bg-primary/10 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <FaEnvelope className="text-primary text-xl" />
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Email</h4>
                    <a
                      href="mailto:akshaybondre350@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      akshaybondre350@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <motion.div
                    className="flex-shrink-0 bg-primary/10 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <FaPhone className="text-primary text-xl" />
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Phone</h4>
                    <a
                      href="tel:+7276075884"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      +7276075884
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>

              <div className="grid grid-cols-2 gap-4">
                <SocialLink
                  href="https://github.com/Akshaybondre123"
                  icon={<FaGithub />}
                  label="GitHub"
                  color="bg-gray-900 dark:bg-gray-700 text-white"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/akshay-bondre-17b071246/"
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  color="bg-blue-600 text-white"
                />
                <SocialLink
                  href="https://twitter.com/YOUR_TWITTER_HANDLE"
                  icon={<FaTwitter />}
                  label="Twitter"
                  color="bg-sky-500 text-white"
                />
                <SocialLink
                  href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
                  icon={<FaInstagram />}
                  label="Instagram"
                  color="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
  color,
}: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${color}`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  )
  
}
