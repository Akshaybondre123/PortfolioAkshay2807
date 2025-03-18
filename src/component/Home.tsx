"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/ParticleBackground"

export default function Home({ typedText }: { typedText: string }) {
  return (
    <section
      id="home"
      className="home-section relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/90"
    >
      <ParticleBackground />

      <div className="home-content relative z-10 text-center max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative inline-block">
            <Image
              src="/Profile1.png"
              alt="Akshay Bondre"
              className="rounded-full border-4 border-primary shadow-lg"
              width={150}
              height={100}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-primary/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          Hello, I&apos;m Akshay Bondre
        </motion.h1>

        <motion.div
          className="typed-text text-xl md:text-2xl mb-8 text-muted-foreground h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {typedText}
        </motion.div>

        <motion.div
  className="flex flex-col sm:flex-row justify-center items-center w-full max-w-md sm:max-w-none gap-4 sm:gap-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
>
  <motion.div className="w-full sm:w-auto flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/Akshay_Bondre_CV_1.pdf"
      className="btn download-btn bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-3 px-6 rounded-full text-lg font-semibold shadow-md text-center w-full sm:w-auto"
      download
    >
      📄 Download Resume
    </Link>
  </motion.div>

  <motion.div className="w-full sm:w-auto flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="#projects"
      className="btn explore-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors py-3 px-6 rounded-full text-lg font-semibold shadow-md text-center w-full sm:w-auto"
    >
      🔍 Explore Projects
    </Link>
  </motion.div>
</motion.div>

      </div>
    </section>
  )
}
