import './App.css'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CV from './components/CV'
import Contact from './components/Contact'

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="home-container content-container">
      <div className={`text-content ${isLoaded ? 'fade-in' : ''}`}>
        <h2 className="greeting">Bonjour,</h2>
        <h1 className="name">Je suis Vignes</h1>
        <h1 className="name">Ibrahim</h1>
        <p className="title">développeur web</p>
        <p className="description">Passionné par le développement d'applications web modernes et créatives. En tant que développeur full stack, je maîtrise à la fois les technologies front-end et back-end pour créer des expériences utilisateur complètes et performantes.</p>
      </div>
      <div className={`code-icon desktop-icon ${isLoaded ? 'fade-in' : ''}`}>
        &lt;/&gt;
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
