const ExperienceItem = ({ title, company, period, achievements }) => (
  <div className="job">
    <h3>{title}</h3>
    <p className="company">{company}</p>
    <p className="period">{period}</p>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
)

const Experience = () => {
  const experiences = [
    {
      title: 'UI/UX Designer',
      company: 'iCog-Acc, Addis Ababa',
      period: 'November 2024 - Present',
      achievements: [
        'Designed user-friendly interfaces for websites and applications, ensuring accessibility and seamless user experience.',
        'Collaborated closely with developers and product teams to translate user needs into functional design solutions.'
      ]
    },
    {
      title: 'Business Development',
      company: 'iCog-Labs, Addis Ababa',
      period: 'October 2024 - March 2025',
      achievements: [
        'Conduct market research and competitive analysis to identify growth opportunities for AI-driven products',
        'Collaborate with cross-functional teams to align business goals with product development and marketing strategies.'
      ]
    },
    {
      title: 'UI Designer',
      company: 'Asset Gallery, Addis Ababa',
      period: 'July 2024 - January 2025',
      achievements: [
        'Improved website segmentation to optimize user experience and align with strategic goals.',
        'Fostered collaboration with cross-functional teams using tools like Slack and ClickUp, ensuring project coherence and timely delivery'
      ]
    },
    {
      title: 'Business Development',
      company: 'Efuye Gela, Addis Ababa',
      period: 'June 2024 - September 2024',
      achievements: [
        'Researched and analyzed user behavior to inform product design and marketing strategies for an educational app targeting parents and children.',
        'Mapped user personas and explored effective learning approaches, enhancing the app\'s relevance and usability.'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'RDX Delta, Addis Ababa',
      period: 'June 2023 - August 2023',
      achievements: [
        'Designed intuitive, cross-platform user interfaces to enhance digital accessibility and engagement.',
        'Lead a team of interns to meet project milestones efficiently, utilizing tools like Monday.com for seamless task tracking and collaboration.'
      ]
    }
  ]

  return (
    <section className="experience">
      <h2>// Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  )
}

export default Experience
