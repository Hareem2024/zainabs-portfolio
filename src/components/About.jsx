import { BarChart3, Database, TrendingUp, Target } from 'lucide-react'

function About() {
  const stats = [
    { icon: BarChart3, value: '4+', label: 'Projects' },
    { icon: Database, value: '15+', label: 'Datasets Analyzed' },
    { icon: TrendingUp, value: '80%', label: 'Success Rate' },
    { icon: Target, value: '5+', label: 'Happy Clients' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div className="glass-card space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">Who I Am</h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi I'm Zainab Akram, a recent Computer Science graduate from HITEC University Taxila with a strong 
              passion for turning data into meaningful insights that drive smarter decisions. I have hands-on 
              experience with tools such as Power BI, SQL, Excel, Python, Tableau, and Azure, gained through 
              academic projects and practical data analysis work.
            </p>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              My experience includes analyzing customer behavior, building interactive BI dashboards, and 
              transforming raw data into actionable insights that support business goals. I am eager to 
              contribute to a dynamic and growth-focused environment where I can apply my analytical mindset, 
              technical skills, and curiosity to create impactful, data-driven solutions.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-slate-600 dark:text-slate-300">
                  Data Collection & Cleaning - Ensuring data quality and reliability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span className="text-slate-600 dark:text-slate-300">
                  Statistical Analysis & Modeling - Applying advanced analytical techniques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                <span className="text-slate-600 dark:text-slate-300">
                  Data Visualization - Creating compelling dashboards and reports
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-600 dark:text-slate-300">
                  Business Intelligence - Translating data into actionable strategies
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-500 dark:text-blue-400" />
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
