import { motion } from "framer-motion"

const experienceData = [
  {
    title: "Web Development Internship",
    company: "Cognifyz Technologies",
    duration: "October 2023 - November 2023",
    description:
      "Focused on creating dynamic front-end websites and enhancing user interfaces. Responsibilities included developing features, fixing bugs, optimizing performance, and collaborating with cross-functional teams to deliver seamless and responsive web applications.",
  },
]

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Sinhgad Institute of Technology, Lonavala",
    duration: "2021 - 2025",
    project:
      "Worked on building the official college website under SS Mane Sir, responsible for UI/UX design, backend integration, and ensuring responsive design. Collaborated with faculty and students to create a functional and user-friendly platform.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section py-1 bg-background">
      <h2 className="section-title text-4xl font-bold text-center mb-12 text-foreground">Experience & Education</h2>
      <div className="experience-container flex flex-col md:flex-row gap-8 max-w-7exl mx-auto px-4">
        {/* Work Experience Section */}
        <motion.div
          className="experience-column flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <h3 className="column-title text-2xl font-semibold mb-6 text-foreground">Work Experience</h3>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
              variants={cardVariants}
            >
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-primary">{exp.title}</h4>
              <h5 className="text-lg mb-2 text-gray-700 dark:text-gray-300">{exp.company}</h5>
              <p className="duration text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="experience-column flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
          }}
        >
          <h3 className="column-title text-2xl font-semibold mb-6 text-foreground">Education</h3>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
              variants={cardVariants}
            >
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-primary">{edu.degree}</h4>
              <h5 className="text-lg mb-2 text-gray-700 dark:text-gray-300">{edu.institution}</h5>
              <p className="duration text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{edu.project}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

