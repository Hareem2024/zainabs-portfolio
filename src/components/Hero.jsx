import { ChevronDown, Github, Linkedin, Mail, FileText, TrendingUp, BarChart3, Database, Sparkles, PieChart, LineChart } from 'lucide-react'

function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const quickStats = [
    { icon: Database, value: '4+', label: 'Projects' },
    { icon: BarChart3, value: '2+', label: 'Years Experience' },
    { icon: TrendingUp, value: '85%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mt-4 md:mt-0">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Available for Projects</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Transforming
                  </span>
                  <br />
                  <span className="text-slate-900 dark:text-slate-100">Data Into</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
                    Actionable Insights
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Expert Data Analyst specializing in statistical analysis, machine learning, and data visualization to drive business success.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="glass-card text-center p-4">
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-blue-500 dark:text-blue-400" />
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Get In Touch</span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
                <a
                  href="#projects"
                  className="flex-1 px-6 py-3.5 glass-card rounded-xl font-semibold hover:scale-105 transition-all duration-300 text-center"
                >
                  View My Work
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#resume"
                  className="glass-card p-3 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="Resume"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            {/* Data visualization icons */}
            <div className="glass-strong rounded-3xl p-8 space-y-6">
              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
                  <BarChart3 className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Analytics</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <PieChart className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Insights</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <TrendingUp className="w-8 h-8 text-pink-500 dark:text-pink-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Growth</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <Database className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Data</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <LineChart className="w-8 h-8 text-cyan-500 dark:text-cyan-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Reports</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
                  <Sparkles className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-2" />
                  <span className="text-xs font-medium text-center text-slate-800 dark:text-slate-200">Solutions</span>
                </div>
              </div>

              {/* Progress bars mockup */}
              <div className="space-y-3 pt-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Data Analysis</span>
                    <span className="text-slate-600 dark:text-slate-400">95%</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Visualization</span>
                    <span className="text-slate-600 dark:text-slate-400">90%</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Machine Learning</span>
                    <span className="text-slate-600 dark:text-slate-400">85%</span>
                  </div>
                  <div className="h-2 glass rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </div>
      </div>
    </section>
  )
}

export default Hero
