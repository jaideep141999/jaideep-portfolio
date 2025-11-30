import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Core',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    title: 'State & Styling',
    skills: ['Redux', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap', 'SASS']
  },
  {
    title: 'Backend & Tools',
    skills: ['REST APIs', 'Axios', 'Git', 'VS Code', 'Postman']
  },
  {
    title: 'Other Technologies',
    skills: ['Core Java', 'JDBC', 'Spring Boot (Beginner)', 'MySQL']
  }
];

const Skills = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with to bring digital ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-cyan-700 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
