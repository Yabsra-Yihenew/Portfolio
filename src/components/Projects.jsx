const ProjectCard = ({ title, description, tech, image, link }) => (
  <div className="project-card">
    <div className="project-preview">
      <img src={image} alt={title} />
      <div className="project-overlay">
        <a href={link} target="_blank" rel="noopener noreferrer" className="view-project">
          View Project
        </a>
      </div>
    </div>
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index} className="tech-tag">{item}</span>
        ))}
      </div>
    </div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Features smooth animations and a dark theme.',
      tech: ['React', 'CSS', 'JavaScript'],
      image: '/project1.jpg',
      link: '#'
    },
    {
      title: 'E-Learning Platform',
      description: 'Educational platform designed for interactive learning. Includes user authentication and progress tracking.',
      tech: ['Laravel', 'MySQL', 'React'],
      image: '/project2.jpg',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team features.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/project3.jpg',
      link: '#'
    }
  ]

  return (
    <section className="projects">
      <h2>// Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
