import { Database, Code, BarChart3, Brain, Layers, Zap } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data Management',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'ETL Processes'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'R', 'SQL', 'Excel VBA'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Regression', 'Classification', 'Clustering'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Layers,
      title: 'Tools & Platforms',
      skills: ['Jupyter Notebooks', 'Excel', 'Power BI', 'Tableau', 'Azure'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Critical Thinking', 'Project Management'],
      color: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-r ${category.color} mb-3`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
