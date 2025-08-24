import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Eye, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  color: string;
  glowColor: string;
}

const Certificates: React.FC = () => {
  const [currentCert, setCurrentCert] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Full stack java Developer',
      issuer: 'Universal Informatics',
      date: '2025',
      image: '/certificates/img1.jpg',
      description: ' certification in Java Full Stack Development',
      color: 'from-yellow-500 to-orange-500',
      glowColor: 'shadow-yellow-500'
    },
    {
      id: 2,
      title: 'Internship Certificate',
      issuer: 'Ypsilon It Solutions',
      date: '2025',
      image: '/certificates/img2.jpg',
      description: ' Intern in Advanced Java programming and enterprise application development',
      color: 'from-red-500 to-pink-500',
      glowColor: 'shadow-red-500'
    },
    {
      id: 3,
      title: 'Java developer',
      issuer: 'UnizzTech Solutions',
      date: '2024',
      image: '/certificates/img3.jpg',
      description: 'Interned At UnizzTech Solutions',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500'
    },
    // {
    //   id: 4,
    //   title: 'Microsoft Azure Fundamentals',
    //   issuer: 'Microsoft',
    //   date: '2022',
    //   image: '/certificates/microsoft-azure-fundamentals.jpg',
    //   description: 'Cloud services and Microsoft Azure platform fundamentals',
    //   color: 'from-blue-600 to-indigo-600',
    //   glowColor: 'shadow-blue-600'
    // },
    // {
    //   id: 5,
    //   title: 'React Developer Certification',
    //   issuer: 'Meta (Facebook)',
    //   date: '2021',
    //   image: '/certificates/react-developer-certification.jpg',
    //   description: 'Advanced React.js development and modern JavaScript',
    //   color: 'from-cyan-500 to-teal-500',
    //   glowColor: 'shadow-cyan-500'
    // },
    // {
    //   id: 6,
    //   title: 'Docker Certified Associate',
    //   issuer: 'Docker Inc.',
    //   date: '2021',
    //   image: '/certificates/docker-certified-associate.jpg',
    //   description: 'Containerization and Docker ecosystem expertise',
    //   color: 'from-blue-400 to-blue-600',
    //   glowColor: 'shadow-blue-400'
    // },
    // {
    //   id: 7,
    //   title: 'Kubernetes Administrator',
    //   issuer: 'Cloud Native Computing Foundation',
    //   date: '2022',
    //   image: '/certificates/kubernetes-administrator.jpg',
    //   description: 'Container orchestration and Kubernetes cluster management',
    //   color: 'from-purple-500 to-indigo-500',
    //   glowColor: 'shadow-purple-500'
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCert((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCertClick = (cert: Certificate) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <>
      <section id="certificates" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
              Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className={`cert-card bg-gradient-to-br ${certificates[currentCert].color} p-12 rounded-2xl hover:scale-105 transition-all duration-500 ${certificates[currentCert].glowColor} hover:shadow-2xl cursor-pointer max-w-4xl`}
                   onClick={() => handleCertClick(certificates[currentCert])}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Award size={64} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {certificates[currentCert].title}
                  </h3>
                  <p className="text-white/90 font-semibold text-lg mb-3">
                    {certificates[currentCert].issuer}
                  </p>
                  <p className="text-white/80 text-base mb-6">
                    {certificates[currentCert].date}
                  </p>
                  <p className="text-white/90 text-lg">
                    {certificates[currentCert].description}
                  </p>
                </div>
                <div className="absolute top-6 right-6">
                  <Eye className="text-white/70" size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowAllModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              View All Certificates
            </button>
          </div>

          {/* Individual Certificate Modal */}
          {showModal && selectedCert && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
                
                <div>
                  <div className="w-full h-auto max-h-[50vh] mb-6 rounded-lg overflow-hidden border-2 border-cyan-400">
                    <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-contain" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">{selectedCert.title}</h3>
                    <p className="text-xl text-cyan-400 font-semibold mb-2">{selectedCert.issuer}</p>
                    <p className="text-gray-400 mb-6">Issued: {selectedCert.date}</p>
                    <p className="text-gray-300 text-lg mb-8">{selectedCert.description}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={selectedCert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2"
                      >
                        <ExternalLink size={20} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Certificates Modal */}
      {showAllModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                All Certificates
              </h2>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className={`cert-card bg-gradient-to-br ${cert.color} p-8 rounded-xl hover:scale-105 transition-all duration-300 ${cert.glowColor} hover:shadow-2xl cursor-pointer`}
                    onClick={() => handleCertClick(cert)}
                  >
                    <div className="text-center">
                      <img src={cert.image} alt={cert.title} className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-white/30" />
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <p className="text-white/90 font-semibold mb-2">{cert.issuer}</p>
                      <p className="text-white/80 text-sm mb-3">{cert.date}</p>
                      <p className="text-white/90 text-sm">{cert.description}</p>
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

export default Certificates;