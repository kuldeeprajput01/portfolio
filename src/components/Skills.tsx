import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Java', color: 'from-orange-500 to-red-500', glow: 'shadow-orange-500' },
    { name: 'Spring Boot', color: 'from-green-500 to-emerald-500', glow: 'shadow-green-500' },
    { name: 'React.js', color: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500' },
    { name: 'MySQL', color: 'from-blue-600 to-indigo-600', glow: 'shadow-blue-600' },
    { name: 'Node.js', color: 'from-green-600 to-lime-600', glow: 'shadow-green-600' },
    { name: 'Python', color: 'from-yellow-500 to-orange-500', glow: 'shadow-yellow-500' },
    { name: 'Docker', color: 'from-blue-400 to-cyan-400', glow: 'shadow-blue-400' },
    { name: 'AWS', color: 'from-yellow-600 to-orange-600', glow: 'shadow-yellow-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="skill-slider">
            <div className="skill-track">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card bg-gradient-to-br ${skill.color} p-6 rounded-xl hover:scale-110 transition-all duration-300 hover:${skill.glow} hover:shadow-2xl`}
                >
                  <h3 className="text-white font-bold text-xl text-center">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;