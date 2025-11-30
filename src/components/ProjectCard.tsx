import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  features,
  githubUrl,
  liveUrl,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-cyan-500/10 rounded-lg">
            <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div className="flex space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View Live Site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wider">Key Features</h4>
          <ul className="space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                <span className="mr-2 text-cyan-500 mt-1.5">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 rounded-full border border-cyan-200 dark:border-cyan-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
