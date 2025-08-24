import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = [
    {
      year: '2022–2023',
      role: 'Frontend Developer',
      company: 'Unizz tech solutions',
      location: 'Indore, MP',
      description: 'Developed responsive web applications using Html,css and modern JavaScript frameworks',
      achievements: ['Built 10+ responsive websites', 'Improved page load speed by 40%', 'Led UI/UX redesign project'],
      icon: '🎨'
    },
    {
      year: '2024 – 2025',
      role: 'Java Backend Developer Intern',
      company: 'Ypsilon IT Solutions',
      location: 'Indore, MP',
      description: 'Worked on backend development using Java, focusing on building and optimizing APIs, database integration, and scalable architecture.',
      achievements: [
        'Developed and integrated RESTful APIs for core modules',
        'Optimized database queries to improve performance by 30%',
        'Contributed to the design of a microservices-based architecture'
      ],
      icon: '⚙️'
    }
    ,
    {
      year: '2025 – Present',
      role: 'Full Stack Developer',
     
      location: 'Remote',
      description: 'Leading end-to-end full-stack development projects, collaborating with cross-functional teams, and mentoring junior developers to deliver scalable web solutions.',
      achievements: [
        'Delivered 10+ responsive full-stack applications using modern tech stack',
        
      ],
      icon: '🚀'
    }
    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Work Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 work-illustration">
              <div className="relative">
                {/* Desk */}
                <div className="w-full h-32 bg-gradient-to-b from-amber-700 to-amber-800 rounded-lg mb-4"></div>
                
                {/* Laptop */}
                <div className="absolute top-16 left-12 w-32 h-20 bg-gray-900 rounded-lg">
                  <div className="w-full h-16 bg-gradient-to-b from-gray-800 to-gray-700 rounded-t-lg flex items-center justify-center">
                    <div className="w-24 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded"></div>
                  </div>
                </div>
                
                {/* Coffee Cup */}
                <div className="absolute top-20 right-12 w-6 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-full">
                  <div className="w-full h-2 bg-amber-900 rounded-full"></div>
                </div>
                
                {/* Clock */}
                <div className="absolute top-4 right-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-3 bg-black"></div>
                  <div className="w-3 h-1 bg-black absolute"></div>
                </div>
                
                {/* Stationery */}
                <div className="absolute top-24 right-24 space-x-1 flex">
                  <div className="w-1 h-8 bg-blue-500 rounded"></div>
                  <div className="w-1 h-8 bg-red-500 rounded"></div>
                  <div className="w-1 h-8 bg-green-500 rounded"></div>
                </div>
                
                {/* Mouse */}
                <div className="absolute top-28 left-48 w-4 h-6 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600"></div>
            
            {experience.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="mr-20 bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <div>
                      <div className="flex items-center justify-end gap-2 text-orange-400 text-sm font-semibold mb-1">
                        <span>{item.year}</span>
                        <Calendar size={16} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <div className="flex items-center justify-end gap-2 text-cyan-400 font-semibold">
                        <span>{item.company}</span>
                        <Briefcase size={16} />
                      </div>
                      <div className="flex items-center justify-end gap-1 text-gray-400 text-sm mt-1">
                        <span>{item.location}</span>
                        <MapPin size={14} />
                      </div>
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center justify-end">
                        <span>• {achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-800">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;