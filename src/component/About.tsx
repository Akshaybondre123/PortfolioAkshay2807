import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="about-section py-16 bg-background">
      <h2 className="section-title text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
      <motion.div
        className="about-content grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <motion.div
            className="about-icon bg-primary text-white dark:bg-primary dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            👨‍💻
          </motion.div>
          <div className="about-text">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">Full Stack Developer</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm Akshay Bondre, a passionate Full Stack Developer with a strong foundation in C++, Data Structures and
              Algorithms (DSA), and web technologies. I am dedicated to building efficient, scalable, and engaging web
              applications.
            </p>
          </div>
        </div>
        <div className="about-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <motion.div
            className="about-icon bg-primary text-white dark:bg-primary dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🚀
          </motion.div>
          <div className="about-text">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">Modern Web Specialist</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I specialize in building modern web applications using React.js, JavaScript, TypeScript, and Next.js, with
              a keen eye for creating responsive and engaging user interfaces. My interest in web development drives me
              to invest significant time and effort in creating websites and solving complex problems.
            </p>
          </div>
        </div>
        <div className="about-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <motion.div
            className="about-icon bg-primary text-white dark:bg-primary dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            💡
          </motion.div>
          <div className="about-text">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">Problem Solver</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I am constantly exploring innovative ideas to address real-world challenges. For example, I worked on a
              concept for a Tatkal ticket booking application to optimize speed and performance during high-demand
              railway booking times. Unlike existing solutions, my approach focuses on robust infrastructure to handle
              high traffic efficiently during Tatkal hours.
            </p>
          </div>
        </div>
        <div className="about-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <motion.div
            className="about-icon bg-primary text-white dark:bg-primary dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            💻
          </motion.div>
          <div className="about-text">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">Dedicated & Motivated</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I have strong knowledge in Data Structures and Algorithms using C++, and I continually strive to improve
              my skills. I am highly motivated to achieve my goals and give my 100% to every task I take on. My
              dedication to excellence and hard work drives my growth and success every single day.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

