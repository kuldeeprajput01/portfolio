import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const projects = [
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
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-green-500'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tech: ['React Native', 'Weather API', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-cyan-500'
    },

  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my best work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ${project.glow} hover:shadow-2xl`}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 bg-slate-700 text-center rounded-lg hover:bg-slate-600 transition-colors text-white"
                    >
                      <Github size={16} className="inline mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 text-center rounded-lg transition-colors text-white ${
                        project.live.includes('linkedin.com') 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                      }`}
                    >
                      {project.live.includes('linkedin.com') ? (
                        <>
                          <svg className="inline w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </>
                      ) : (
                        <>
                          <Eye size={16} className="inline mr-2" />
                          Live
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                All Projects
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`project-card bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ${project.glow} hover:shadow-2xl`}
                  >
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-4 bg-slate-700 text-center rounded-lg hover:bg-slate-600 transition-colors text-white"
                        >
                          <Github size={16} className="inline mr-2" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 py-2 px-4 text-center rounded-lg transition-colors text-white ${
                            project.live.includes('linkedin.com') 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                          }`}
                        >
                          {project.live.includes('linkedin.com') ? (
                            <>
                              <svg className="inline w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              LinkedIn
                            </>
                          ) : (
                            <>
                              <Eye size={16} className="inline mr-2" />
                              Live
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
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