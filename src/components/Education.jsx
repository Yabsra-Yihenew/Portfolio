const EducationItem = ({ degree, school, period, gpa }) => (
  <div className="education-item">
    <h3>{degree}</h3>
    <p className="school">{school}</p>
    <p className="period">{period}</p>
    {gpa && <p className="gpa">GPA: {gpa}</p>}
  </div>
)

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'ST Mary University, Addis Ababa',
      period: 'June 2021 - February 2025',
      gpa: '3.6'
    },
    {
      degree: 'Bachelor of Arts in Management',
      school: 'Addis Ababa University (AAU), Addis Ababa',
      period: 'June 2021 - Present',
      gpa: '3.2'
    }
  ]

  return (
    <section className="education">
      <h2>// Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
      <div className="additional-info">
        <h3>Additional Credentials</h3>
        <div className="links">
          <a href="#certificates" className="credential-link">View Certificates</a>
          <a href="#portfolio" className="credential-link">View Portfolio</a>
        </div>
      </div>
    </section>
  )
}

export default Education
