import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Award, Check } from 'lucide-react';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadein');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Mar 2024',
      description: 'Foundational certification validating cloud fluency and basic AWS knowledge.',
      skills: [
        'Cloud concepts',
        'AWS services',
        'Security and compliance',
        'AWS billing and pricing'
      ],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=200'
    },
    {
      name: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: 'Feb 2024',
      description: 'Certification demonstrating ability to apply AI solutions within Salesforce platform.',
      skills: [
        'AI principles',
        'Einstein features',
        'Predictive modeling',
        'AI implementation'
      ],
      image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=200'
    }
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional credentials" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-32 bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: `url(${cert.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <Award className="h-16 w-16 text-white" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 mb-4 text-sm">
                  {cert.date}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                
                <h4 className="font-bold mb-2">Skills Covered:</h4>
                <ul className="space-y-2">
                  {cert.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;