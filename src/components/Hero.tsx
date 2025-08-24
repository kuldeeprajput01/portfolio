import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import profileImage from './profile.jpg';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    'Full Stack Java Developer',
    'Web Enthusiast', 
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndex];
      let index = 0;
      
      const typing = setInterval(() => {
        setDisplayText(currentText.slice(0, index + 1));
        index++;
        
        if (index >= currentText.length) {
          clearInterval(typing);
          setTimeout(() => {
            const erasing = setInterval(() => {
              setDisplayText(currentText.slice(0, index - 1));
              index--;
              
              if (index <= 0) {
                clearInterval(erasing);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    typeText();
  }, [currentIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kuldeeprajput01', color: 'hover:text-orange-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kuldeeprajput2025/', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/__kuldeep__._._?igsh=bXBtM3NmdGUzOXFu&utm_source=qr', color: 'hover:text-pink-400' }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Galaxy Background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="floating-symbols">
          <span className="symbol">{'{'}</span>
          <span className="symbol">{'}'}</span>
          <span className="symbol">&lt;&gt;</span>
          <span className="symbol">;</span>
          <span className="symbol">{'</'}</span>
          <span className="symbol">/&gt;</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left Side - Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-cyan-400 p-1 bg-slate-800/50">
                  <img
                    src={profileImage}
                    alt="Kuldeep Singh Rajput"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Kuldeep Singh Rajput
                </h1>
              </div>

              {/* Typing Animation */}
              <div className="mb-8 h-16">
                <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400">
                  I am a <span className="typing-text">{displayText}</span>
                  <span className="cursor-blink">|</span>
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl lg:max-w-none leading-relaxed">
  Crafting clean, scalable solutions and seamless user experiences with modern technologies.
</p>


              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-8 mb-12">
                {socialLinks.map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-slate-800/50 backdrop-blur-sm text-2xl text-gray-300 ${color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 text-center">
                  View My Projects
                </a>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;