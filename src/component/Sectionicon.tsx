const SECTION_ICONS = {
    Home: "\u{1F3E0}",
    About: "\u{1F464}",
    Projects: "\u{1F4BC}",
    Skills: "\u{1F6E0}\uFE0F",
    Achievements: "\u{1F3C6}",
    Experience: "\u{1F4C8}",
    Contact: "\u{1F4DE}",
  }
  
  export default function SectionIcon({ section }: { section: keyof typeof SECTION_ICONS }) {
    return (
      <span className="section-icon" role="img" aria-label={`${section} icon`}>
        {SECTION_ICONS[section]}
      </span>
    )
  }
  
  