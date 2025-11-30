import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Uzvi Services',
    period: 'Nov 2022 – Present',
    description: [
      'Delivered full e-commerce frontend with React and TypeScript.',
      'Built UI for multiple government service platforms used by thousands.',
      'Improved performance and optimized legacy components.',
      'Collaborated with backend teams to integrate REST APIs.',
      'Implemented responsive designs ensuring cross-browser compatibility.'
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="relative container mx-auto px-4 max-w-4xl">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 -ml-0.5"></div>
      
      {experiences.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-slate-900 -ml-2 z-10"></div>
          
          {/* Empty space for the other side */}
          <div className="hidden md:block w-[calc(50%-2rem)]"></div>
          
          {/* Content */}
          <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
            <div className="glass-card p-6 rounded-xl relative">
              {/* Arrow for desktop */}
              <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-800 rotate-45 border-l border-b border-slate-200 dark:border-slate-700/30 ${
                index % 2 === 0 
                  ? '-left-2 border-r-0 border-t-0' 
                  : '-right-2 border-l-0 border-b-0'
              }`}></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  {exp.role}
                </h3>
                <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm flex items-center gap-1 mt-2 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-4 font-medium">{exp.company}</h4>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                    <span className="mr-2 text-cyan-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
