import { ExternalLink, Github, TrendingUp, ShoppingCart, BarChart, Users, Coffee } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: 'E-commerce Sales Dashboard',
      description: 'Built an interactive Power BI dashboard to analyze sales performance, customer behavior, and product profitability. Automated reporting, improving analysis efficiency by 30% and reducing manual effort.',
      tech: ['Power BI', 'Power Query', 'DAX', 'Excel'],
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      link: '#',
      github: '#',
    },
    {
      title: 'HR Analytics Dashboard with ML-Based Attrition Prediction',
      description: 'Built an interactive HR dashboard to analyze employee performance, satisfaction, attrition, and workforce trends. Implemented a Random Forest model to predict attrition and key drivers, enabling proactive retention strategies. Automated insights and reporting, improving HR analysis efficiency by 40%.',
      tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Scikit-learn'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Blinkit Sales Analytics Dashboard',
      description: 'Built an interactive Power BI dashboard to analyze $1.2M+ in sales data and uncover performance trends across outlets. Designed KPIs for total sales, average sales ($141 per order), and top-performing outlets to support strategic decisions.',
      tech: ['Power BI', 'Power Query', 'DAX', 'Data Cleaning'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Cafe Rewards & Offers Analysis Dashboard',
      description: 'Developed an interactive Power BI dashboard analyzing 17K customers and $2M in transactions. Analyzed customer demographics, offer performance (BOGO 40%, Discount 40%, Informational 20%), and marketing channel effectiveness to identify seasonal engagement peaks.',
      tech: ['Power BI', 'DAX', 'Power Query', 'Data Analysis', 'BI'],
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-4`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 glass rounded-full text-xs"
                  >
                    {tech}
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

export default Projects
