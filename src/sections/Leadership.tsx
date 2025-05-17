import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Users, BarChart, Briefcase } from 'lucide-react';

const Leadership: React.FC = () => {
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

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Leadership & Volunteering" 
          subtitle="Making a difference" 
        />
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-teal-600 text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Director</h3>
              <p className="text-xl mb-2">Focus-CSE Dept. Student Body</p>
              <p className="text-lg">KL University</p>
              <div className="mt-6 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                <span>Engaged 300+ students</span>
              </div>
              <div className="mt-3 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                <span>Collaborated with 70+ faculty</span>
              </div>
              <div className="mt-3 flex items-center">
                <BarChart className="h-6 w-6 mr-2" />
                <span>Resolved 1500+ student issues</span>
              </div>
            </div>
            
            <div className="md:col-span-2 p-8">
              <h3 className="text-2xl font-bold mb-4">Key Accomplishments</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Student Advocacy</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Led initiatives to address student concerns and improve campus experiences,
                      serving as a bridge between students and administration.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Event Management</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Organized technical workshops, coding competitions, and guest lectures that enhanced
                      learning experiences beyond the classroom.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Team Leadership</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Led a team of student representatives, developing leadership and delegation skills
                      while fostering a collaborative environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Community Building</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Facilitated connections between students, alumni, and industry professionals,
                      creating networking opportunities and mentorship programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;