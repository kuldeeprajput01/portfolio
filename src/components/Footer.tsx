import React from 'react';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kuldeeprajput01', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kuldeeprajput2025/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__kuldeep__._._?igsh=bXBtM3NmdGUzOXFu&utm_source=qr', label: 'Instagram' },
    { icon: Mail, href: 'mailto:kuldeeprajput2025new@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
              &lt;Kuldeep Singh Rajput/&gt;
            </h3>
            <p className="text-gray-300 mb-6">
              Full Stack Java Developer passionate about creating innovative solutions 
              and building amazing user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 text-gray-400 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Indore, India</p>
              <p>kuldeeprajput2025new@gmail.com</p>
              <p>+91 9301394812
                
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2025 Kuldeep Singh Rajput.
          </p>
          
          <p className="text-gray-300 flex items-center">
            Made with <Heart size={16} className="text-red-400 mx-2 animate-pulse" /> by Kuldeep
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;