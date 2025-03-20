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
          <a href="https://docs.google.com/document/d/1DJOS7tAX1joSkoacXoQAoi8PbnJjE6j1s8uElR3wZXI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="credential-link">View Certificates</a>
          <a href="https://docs.google.com/document/d/1WHJDwh8EmCM0l5VWPSRBTcZuFSW3oere1Pxwh1eSW6Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="credential-link">View Portfolio</a>
          <a href="/documents/resume.pdf" download className="credential-link">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Education
