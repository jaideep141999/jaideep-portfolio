import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'UZVIS E-Commerce Web Application',
    description: 'A complete mobile-responsive e-commerce platform featuring dynamic product pages, cart management, and secure checkout flow.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios'],
    features: [
      'Multi-step checkout (address, payment, summary)',
      'Dynamic product pages with variant selection',
      'Google Maps integration for address selection',
      'Performance optimization with lazy loading'
    ],
    // githubUrl: 'https://github.com/username/project', // Placeholder
    // liveUrl: 'https://project-demo.com', // Placeholder
  },
  {
    title: 'MOEAP Energy Management System',
    description: 'A comprehensive dashboard for energy management with role-based access control and complex data visualization.',
    techStack: ['React', 'TypeScript', 'Redux', 'Chart.js'],
    features: [
      'Dashboards with tables, filtering, pagination',
      'Multi-step task creation forms with validation',
      'Role-based admin and user UI',
      'JWT authentication with token management'
    ],
    liveUrl: 'https://moeap.com/login',
  },
  {
    title: 'TG Bharath Citizen Request Management',
    description: 'A citizen engagement platform for tracking and managing public service requests with real-time updates.',
    techStack: ['React', 'Tailwind CSS', 'REST API'],
    features: [
      'Fully responsive UI for citizens and admins',
      'Multi-step signup with OTP validation',
      'Real-time statistics and search filters',
      'Citizen dashboard for tracking requests'
    ],
    liveUrl: 'https://tgbharath.com/user-login',
  }
];

const Projects = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of the key projects I've worked on, demonstrating my expertise in building complex web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
