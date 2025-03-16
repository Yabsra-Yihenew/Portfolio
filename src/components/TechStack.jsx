const TechStack = () => {
  const skills = {
    'Technical Skills': {
      Frontend: ['HTML5', 'CSS', 'JavaScript', 'React'],
      Backend: ['PHP (Laravel)', 'MySQL'],
      Programming: ['Python', 'C#', 'C++'],
      'UI/UX': ['Figma', 'Design Theory', 'Typography']
    },
    'Business Skills': {
      Marketing: ['Digital Marketing', 'Social Media Strategy', 'Branding']
    },
    'Soft Skills': {
      Personal: ['Adaptability', 'Problem Solving', 'Creativity', 'Critical Thinking', 'Team Work', 'Communication']
    }
  }

  return (
    <section className="tech-stack">
      <h2>// Skills</h2>
      <div className="skill-categories">
        {Object.entries(skills).map(([mainCategory, subcategories]) => (
          Object.entries(subcategories).map(([subCategory, items]) => (
            <div key={subCategory} className="skill-category">
              <h3>{subCategory}</h3>
              <div className="skill-tags-container">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))
        ))}
      </div>
    </section>
  )
}

export default TechStack
