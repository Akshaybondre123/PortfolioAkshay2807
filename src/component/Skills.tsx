"use client"
import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SKILL_ICONS = {
  HTML5: "🌐",
  CSS3: "🎨",
  JavaScript: "📜",
  "React.js": "⚛",
  "Next.js": "🔺",
  TypeScript: "🆇",
  TailwindCSS: "🌈",
  "Node.js": "🟢",
  Express: "🚂",
  MongoDB: "💾",
  "C++": "🧮",
  DSA: "🧩",
  SQL: "📊",
  AWS: "☁️",
}

export default function Skills() {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="skills" className="skills-section py-16 bg-background">
      <h2 className="section-title text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>
      <div className="skills-container px-4">
        <Slider ref={sliderRef} {...settings}>
          {Object.entries(SKILL_ICONS).map(([name, icon]) => (
            <div key={name} className="skill-card">
              <div className="skill-icon">{icon}</div>
              <div className="skill-name">{name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

