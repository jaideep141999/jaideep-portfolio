import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Apartment Management System (AMS) – Admin Panel',
    description: 'Developing a full-featured admin panel for apartment and society management with real-time dashboards and automated billing.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS'],
    features: [
      'JWT authentication and persistent sessions using Redux Persist',
      'Role-based workflows for residents, billing, complaints, amenities',
      'Real-time dashboards for occupancy and financial insights',
      'Automated bill generation and payment tracking',
      'Multi-step system setup flows for society configuration'
    ],
    // Duration: Dec 2025 – Present
  },
  {
    title: 'UZVIS Web Application (E-Commerce Platform)',
    description: 'Full-scale e-commerce frontend application with dynamic product pages and a multi-step checkout flow.',
    techStack: ['React', 'TypeScript', 'Vite', 'Axios', 'Google Maps API'],
    features: [
      'Mobile-responsive UI using reusable, component-based architecture',
      'Multi-step checkout flow (address, payment, order summary)',
      'Google Maps API integration for address selection',
      'Backend API migration support (PHP to Java)',
      'Performance optimization with lazy loading and memoization'
    ],
    // Duration: Nov 2022 – Feb 2025
  },
  {
    title: 'MOEAP Energy Management System',
    description: 'A secure, role-based energy and task management system with multi-level dashboards.',
    techStack: ['React', 'TypeScript', 'JWT', 'Role-Based Routing'],
    features: [
      'Multi-level dashboards with tables, filters, sorting, and pagination',
      'JWT-based authentication and role-based UI authorization',
      'Task and complaint management workflows',
      'Performance improvement using reusable components'
    ],
    liveUrl: 'https://moeap.com/login', // Duration: Mar 2025 – May 2025
  },
  {
    title: 'TG Bharath – Citizen Request Management',
    description: 'Citizen service portal for managing public service requests with advanced filters and real-time statistics.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'JWT'],
    features: [
      'Citizen dashboards and multi-step signup with OTP validation',
      'Admin panel with advanced filters, search, and real-time statistics',
      'Role-based access control (User, Admin, Management Admin, Super Admin)',
      'Fully responsive UI across all devices'
    ],
    liveUrl: 'https://tgbharath.com/user-login', // Duration: Jul 2025 – Oct 2025
  },
  {
    title: 'Citizen Connect – CRM Web Application',
    description: 'A CRM platform focused on citizen engagement and service management with integrated AI Assistant UI.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    features: [
      'Grievance and request management with status tracking',
      'Secure authentication (login, signup, forgot password)',
      'Centralized dashboards with notifications and quick actions',
      'Integrated community features (events, polls, announcements)',
      'AI Assistant UI for enhanced service navigation'
    ],
    // Duration: Oct 2022 – Nov 2025
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
