import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 glass-strong rounded-full p-3 transition-all duration-300 hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-indigo-600" />
      )}
    </button>
  )
}

export default ThemeToggle
