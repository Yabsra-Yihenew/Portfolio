import './App.css'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <div className="resume-container">
      <Header />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
    </div>
  )
}

export default App
