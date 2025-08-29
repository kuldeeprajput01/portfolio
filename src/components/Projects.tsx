import React, { useState } from 'react';
import { X } from 'lucide-react';
import ProjectCard from './ProjectCard';

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

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Smart Employee Management System',
      description: 'A comprehensive full-stack application to manage employees, departments, and payroll. Features include employee CRUD operations, department-wise listing, payroll management, and an admin panel for centralized control, built with Spring MVC and MySQL.',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
      tech: ['Java', 'Spring MVC', 'Hibernate', 'JSP', 'Servlet', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/employee-management-system',
      live: 'https://your-deployed-link.com',
      glow: 'hover:shadow-orange-500'
    }
,        
    {
      id: 2,
      title: 'Online Examination System',
      description: 'A secure and efficient web-based platform for conducting online exams with features like user authentication, dynamic question papers, timer-based exams, instant result generation, and admin panel for managing exams and students.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/online-exam-system',
      live: 'https://your-deployed-link.com',
      glow: 'hover:shadow-green-500'
    },
    
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-green-500'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-cyan-500'
    },

  ];

  const displayedProjects = projects.slice(0, 3);

  return (
    <>
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my best work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full font-semibold hover:from-pink-400 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Modal for All Projects */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gray-50/80 dark:bg-slate-900/80 backdrop-blur-md p-6 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                All Projects
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;