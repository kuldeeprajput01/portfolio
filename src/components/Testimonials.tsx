import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      content: 'Kuldeep delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills are outstanding.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      content: 'Working with Kuldeep was a game-changer for our project. He brought innovative solutions and delivered ahead of schedule.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      company: 'DesignStudio',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      content: 'Kuldeep\'s ability to translate design concepts into functional, beautiful applications is remarkable. Highly recommended!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Williams',
      role: 'Entrepreneur',
      company: 'InnovateNow',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
      content: 'The quality of code and the speed of delivery exceeded our expectations. Kuldeep is a true professional.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've worked with
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 testimonial-card hover:bg-slate-800/70 transition-all duration-500">
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <Quote size={48} className="text-cyan-400 mx-auto opacity-50" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                "{current.content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-cyan-400"
              />
              <div className="text-left">
                <h4 className="text-xl font-bold text-white">{current.name}</h4>
                <p className="text-cyan-400 font-semibold">{current.role}</p>
                <p className="text-gray-400 text-sm">{current.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;