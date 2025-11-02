import { Briefcase, Calendar, MapPin } from 'lucide-react'

function Experience() {
  const experiences = [
    {
      title: 'Business & Data Analyst',
      company: 'Access Future',
      location: 'Remote',
      period: 'July 2024 - August 2025',
      description: [
        'Supported consulting projects with data analysis, improving prep time by 25%',
        'Cleaned and consolidated 5,000+ records, reducing reporting errors by 30%',
        'Built Power BI dashboards to track engagement and service performance',
        'Automated reports, cutting manual work by 20%',
        'Created KPIs to monitor outcomes and spot trends',
        'Assisted in strategy recommendations, enabling 10+ client improvements',
        'Ensured data quality and reporting consistency across teams',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card relative pl-8 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
            >
              <div className="absolute -left-3 top-0">
                <div className="glass-strong rounded-full p-1.5">
                  <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-1.5 mt-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
