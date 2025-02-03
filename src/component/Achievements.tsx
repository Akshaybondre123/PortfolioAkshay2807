import SectionIcon from "./Sectionicon"

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        {/* <SectionIcon section="Achievements" /> */}
        <h2>Achievements</h2>
      </div>
      <div className="achievements-container">
        <div className="achievement-card">
          <span className="achievement-icon">🏅</span>
          <div className="achievement-details">
            <h3>LeetCode Problem Solver</h3>
            <p>Solved 200+ problems, demonstrating strong algorithmic skills</p>
          </div>
        </div>
        <div className="achievement-card">
          <span className="achievement-icon">🏆</span>
          <div className="achievement-details">
            <h3>Competitive Programming</h3>
            <p>Ranked in top 10% in multiple coding contests</p>
          </div>
        </div>
      </div>
    </section>
  )
}

