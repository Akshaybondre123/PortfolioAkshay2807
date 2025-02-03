import Image from "next/image"
import SectionIcon from "./Sectionicon"

const PROJECTS = [
  {
    name: "Weather Information App",
    description: "Real-time weather app with intuitive search feature",
    image: "https://maxm-imggenurl.web.val.run/weather-app-screenshot",
    link: "https://weather-search-git-main-akshay-bondres-projects.vercel.app/",
  },
  {
    name: "Nike E-commerce Website",
    description: "Interactive Nike shoes e-commerce shopping platform",
    image: "https://maxm-imggenurl.web.val.run/nike-ecommerce-screenshot",
    link: "https://github.com/Akshaybondre123/Ecommerce-Website",
  },
  {
    name: "Golf Animation Website",
    description: "Animated golf course with dynamic interactions",
    image: "https://maxm-imggenurl.web.val.run/golf-animation-screenshot",
    link: "https://akshaybondre123.github.io/Frontend-Project-/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        {/* <SectionIcon section="Projects" /> */}
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.name} className="project-card">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              className="project-image"
              width={300}
              height={200}
            />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

