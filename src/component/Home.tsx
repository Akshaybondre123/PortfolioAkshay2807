import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="animated-circle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        />
      ))}
    </div>
  )
}

export default function Home({ typedText }: { typedText: string }) {
  return (
    <section id="home" className="home-section flex flex-col items-center justify-center">
      <BackgroundAnimation />
      <div className="home-content text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Image
            src="/Profile1.png" // Make sure the image is in the "public" folder
            alt="Akshay Bondre"
            className="profile-image mx-auto mt-8 rounded-full"
            width={200}
            height={200}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-2"
        >
          Hello, I&apos;m Akshay Bondre
        </motion.h1>
        <motion.p
          className="typed-text text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {typedText}
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/Akshay_Bondre_CV_1.pdf" className="btn download-btn" download>
            📄 Download Resume
          </Link>
          <Link href="#projects" className="btn explore-btn">
            🔍 Explore Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
