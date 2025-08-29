import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  glow: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className={`project-card flex flex-col bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-none ${project.glow} dark:hover:shadow-2xl`}
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;