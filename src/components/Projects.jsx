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
      title: 'ALEM HABESHA',
      description: 'A traditional Ethiopian cloth shopping website built with HTML, CSS, and JavaScript. Features a modern, responsive design with easy navigation and product showcase.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/Alemhabesha.png',
      link: 'https://drive.google.com/file/d/1qxFHzqI0nbZ6Z75Z7cWK5CNvukhh-3xf/view?usp=sharing'
    },
    {
      title: 'TASK SYNC',
      description: 'A comprehensive classroom management system similar to Google Classroom. Features include assignment management, student tracking, and real-time updates.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: '/images/TaskSync.png',
      link: 'https://drive.google.com/file/d/1rTwvGtK8xMsoGlVtrwdvd0BVvjjrK0ol/view?usp=sharing'
    },
    {
      title: 'Weather App',
      description: 'A real-time weather application that fetches current weather data using API integration. Features include temperature, humidity, and weather conditions display.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: '/images/WeatherApp.png',
      link: 'https://drive.google.com/file/d/1PXzf09fGOBJjDW6_8bHhywqz-f0FRAF3/view?usp=sharing'
    },
    {
      title: 'LeBete',
      description: 'A modern e-commerce platform for home groceries. Features include product catalog, shopping cart, and secure checkout system.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/Lebete.png',
      link: 'https://drive.google.com/file/d/1r9cQrDEzku1y4DK5XNSYpWRYLdMhjV2x/view?usp=sharing'
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
