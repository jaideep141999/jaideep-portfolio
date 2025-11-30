import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and the value I've delivered to organizations.
          </p>
        </motion.div>

        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Experience;
