import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Trophy, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, certificates: 0, hours: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = { projects: 7, clients: 10, certificates: 5, hours: 500 };

  const stats = [
    { 
      icon: Code, 
      label: 'Projects Completed', 
      value: counts.projects, 
      suffix: '+',
      color: 'from-orange-500 to-red-500',
      glowColor: 'shadow-orange-500'
    },
    { 
      icon: Users, 
      label: 'Collabrations with teammates', 
      value: counts.clients, 
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500'
    },
    { 
      icon: Trophy, 
      label: 'Certificates Earned', 
      value: counts.certificates, 
      suffix: '+',
      color: 'from-yellow-500 to-orange-500',
      glowColor: 'shadow-yellow-500'
    },
    { 
      icon: Clock, 
      label: 'Coding Hours', 
      value: counts.hours, 
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
      glowColor: 'shadow-purple-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.round(easeProgress * finalCounts.projects),
        clients: Math.round(easeProgress * finalCounts.clients),
        certificates: Math.round(easeProgress * finalCounts.certificates),
        hours: Math.round(easeProgress * finalCounts.hours)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Numbers that showcase my dedication and expertise
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`stat-card bg-gradient-to-br ${stat.color} p-8 rounded-2xl text-center hover:scale-110 transition-all duration-500 ${stat.glowColor} hover:shadow-2xl`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                
                <div className="text-white/90 font-semibold text-lg">
                  {stat.label}
                </div>
                
                {/* Animated progress bar */}
                <div className="mt-4 bg-white/30 dark:bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;