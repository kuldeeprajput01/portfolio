import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const AllProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Spring Boot and React',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-orange-500'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-blue-500'
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
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto price tracking and portfolio management',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      tech: ['React', 'CoinGecko API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-purple-500'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Complete LMS with course creation and student tracking',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg',
      tech: ['Spring Boot', 'Angular', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      glow: 'hover:shadow-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete portfolio of my work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-center rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-colors text-white"
                  >
                    <Eye size={16} className="inline mr-2" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
