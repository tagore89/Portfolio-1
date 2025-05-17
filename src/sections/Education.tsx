import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering (DS & BDA)',
      institution: 'Koneru Lakshmaiah College of Engineering',
      location: 'Vijayawada',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.96',
      description: 'Specializing in Data Science & Big Data Analytics, with coursework in Machine Learning, Data Structures, Algorithms, Web Development, and Database Management.'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Sri Chaitanya Educational Institute',
      location: 'Vijayawada',
      duration: '2020 - 2022',
      grade: 'Percentage: 63%',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.'
    },
    {
      degree: 'Secondary School',
      institution: 'Nalanda Vidyaniketan',
      location: 'Vijayawada',
      duration: '2020',
      grade: 'Percentage: 61%',
      description: 'Completed secondary education with a well-rounded curriculum including sciences, mathematics, and computer applications.'
    }
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Education" subtitle="My Academic Journey" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-teal-500 dark:bg-teal-400 w-4 h-4 rounded-full z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 p-1">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.institution}</p>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{edu.grade}</span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;