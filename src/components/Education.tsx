import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      year: '2020–2022',
      degree: 'Higher Secondary',
      school: 'Master Mind Convent School ,Sarangpur',
      description: 'Completed secondary education with focus on Science and Mathematics',
      icon: '🎓'
    },
    {
      year: '2022–2025',
      degree: 'Bachelor of Computer Application',
      school: 'Renaissance University ,Indore',
      description: 'Graduated with honors, specialized in Software Engineering and Data Structures',
      icon: '💻'
    },
    {
      year: '2025–Present',
      degree: 'Master of Computer Application',
      school: 'Medicaps University ,Indore',
      description: 'Currently pursuing advanced studies in Computer Science',
      icon: '🚀'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic path to becoming a skilled developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>
            
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-100 dark:border-slate-900">
                  {index + 1}
                </div>
                
                <div className="ml-20 bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl dark:shadow-none dark:hover:shadow-2xl dark:hover:shadow-orange-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold mb-1">
                        <Calendar size={16} />
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                      <p className="text-cyan-400 font-semibold">{item.school}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Study Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 study-illustration">
              <div className="relative">
                {/* Desk */}
                <div className="w-full h-32 bg-gradient-to-b from-amber-700 to-amber-800 rounded-lg mb-4"></div>
                
                {/* Laptop */}
                <div className="absolute top-16 left-8 w-24 h-16 bg-gray-800 rounded-lg">
                  <div className="w-full h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg"></div>
                </div>
                
                {/* Books */}
                <div className="absolute top-20 right-8 space-y-1">
                  <div className="w-12 h-2 bg-red-500 rounded"></div>
                  <div className="w-12 h-2 bg-blue-500 rounded"></div>
                  <div className="w-12 h-2 bg-green-500 rounded"></div>
                </div>
                
                {/* Lamp */}
                <div className="absolute -top-4 right-16">
                  <div className="w-1 h-12 bg-gray-600"></div>
                  <div className="w-8 h-6 bg-yellow-400 rounded-full -mt-2 -ml-3 opacity-60"></div>
                </div>
                
                {/* Chair */}
                <div className="absolute -bottom-8 left-12 w-16 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg"></div>
                
                {/* Backpack */}
                <div className="absolute top-8 left-40 w-8 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;