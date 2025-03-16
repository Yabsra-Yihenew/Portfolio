import { useState, useEffect } from 'react'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const professions = [
    'Tech-Driven Problem Solver',
    'Future Business Leader',
    'UI/UX Designer',
    'Full Stack Developer'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % professions.length
      const fullText = professions[current]

      setDisplayText(prev => {
        if (isDeleting) {
          setTypingSpeed(100)
          return fullText.substring(0, prev.length - 1)
        } else {
          setTypingSpeed(150)
          return fullText.substring(0, prev.length + 1)
        }
      })

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(prev => prev + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, professions])

  return (
    <header className="header">
      <h1>Yabsra Yihenew</h1>
      <p className="title">
        <span className="typing-text">{displayText}</span>
        <span className="cursor">|</span>
      </p>
      <div className="contact-info">
        <p>📍 Addis Ababa, Ethiopia</p>
        <p>📱 +251 911365411</p>
        <p>
          <a href="https://linkedin.com/in/yabsra-yihenew-07ab96174" target="_blank" rel="noopener noreferrer" className="social-link">
            🔗 LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/yabsra-yihenew" target="_blank" rel="noopener noreferrer" className="social-link">
            💻 GitHub
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
