"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import SectionIcon from "./Sectionicon"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill out all fields before submitting.")
      return
    }

    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <SectionIcon section="Contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container max-w-6xl mx-auto px-4">
        <motion.form
          className="contact-form w-full max-w-2xl mx-auto mb-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-md shadow-sm border border-gray-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-md shadow-sm border border-gray-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            value={formState.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-md shadow-sm border border-gray-300 h-32"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="contact-info flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="mailto:akshaybondre350@gmail.com"
            className="contact-method flex items-center p-3 rounded-md shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-blue-600 mr-3 text-xl" />
            <span>akshaybondre350@gmail.com</span>
          </motion.a>
          <motion.a
            href="tel:+917276075884"
            className="contact-method flex items-center p-3 rounded-md shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone className="text-blue-600 mr-3 text-xl" />
            <span>+917276075884</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="social-links flex justify-center mt-8 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Akshaybondre123"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-2xl text-gray-800 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/akshay-bondre-17b071246/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-2xl text-blue-600" />
          </motion.a>
          <motion.a
            href="https://twitter.com/YOUR_TWITTER_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter className="text-2xl text-blue-400" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full shadow-sm border border-gray-300 hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-2xl text-pink-600" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
