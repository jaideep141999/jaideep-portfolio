import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Jaideep141999_Resume.pdf';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider mb-4 uppercase">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              G. Jaideep <br />
              <span className="text-gradient">Shankar</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Junior Frontend Developer specializing in building responsive, high-performance web applications with React.js and TypeScript.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={resumePdf}
              download="Jaideep_Shankar_Resume.pdf"
              className="px-8 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-white font-semibold hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center justify-center md:justify-start gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jaideep141999@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full relative flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Abstract Code Visualization */}
            <div className="glass-panel p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-purple-600 dark:text-purple-400">const <span className="text-blue-600 dark:text-blue-400">developer</span> = <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span></div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">name: <span className="text-green-600 dark:text-green-400">'G. Jaideep Shankar'</span>,</div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">role: <span className="text-green-600 dark:text-green-400">'Junior Frontend Developer'</span>,</div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">skills: <span className="text-yellow-600 dark:text-yellow-400">['React', 'TypeScript', 'Tailwind', 'Redux', 'Redux Toolkit']</span>,</div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">hardWorker: <span className="text-red-500 dark:text-red-400">true</span>,</div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">quickLearner: <span className="text-red-500 dark:text-red-400">true</span></div>
                <div className="text-yellow-600 dark:text-yellow-400">{'}'};</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
