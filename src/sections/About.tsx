import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { BookOpen, Code, LineChart } from 'lucide-react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Data Science & Big Data Analytics at Koneru Lakshmaiah College of Engineering, Vijayawada, expected to graduate in 2026.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My academic journey has equipped me with a strong foundation in computer science principles and a specialized focus on data science, giving me the versatility to work across different domains of technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm particularly interested in Web Development, Data Engineering, and UI/UX design, and I enjoy creating solutions that combine aesthetic appeal with technical functionality.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <Code className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Building responsive, user-friendly web applications</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <LineChart className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="font-bold mb-2">Data Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Creating efficient data pipelines and analytics solutions</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Always expanding my knowledge in emerging technologies</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  AWS Certified Cloud Practitioner
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  Salesforce AI Associate
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-xl">
                <img 
                  src="/phanindra.jpg" 
                  alt="Phanindra Tagore" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <div className="bg-teal-500 text-white p-2 rounded-full">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;