import { motion } from 'framer-motion';
import { Code, Layout, Server, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Professional <span className="text-cyan-600 dark:text-cyan-400">Summary</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am a Junior Frontend Developer with 3 years of experience specializing in building responsive and high-performance web applications using React.js, TypeScript, JavaScript, Redux, and modern UI frameworks.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              My strength lies in component-based architecture, API integration, state management, and optimizing web performance. I have successfully contributed to major government and e-commerce projects, delivering robust solutions that impact thousands of users.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">3+</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Years Experience</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">3</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: <Code className="w-6 h-6" />, title: "Frontend Development", desc: "React, TypeScript, Tailwind" },
              { icon: <Layout className="w-6 h-6" />, title: "Responsive Design", desc: "Mobile-First Approach" },
              { icon: <Zap className="w-6 h-6" />, title: "Performance", desc: "Optimization & Speed" },
              { icon: <Server className="w-6 h-6" />, title: "API Integration", desc: "RESTful Services" },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
