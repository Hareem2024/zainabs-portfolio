import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-float-slow will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-float-slow will-change-transform" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-slow will-change-transform" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
