import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { Code, Database, Server, Layers, BookOpen, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadein');
          
          // Animate skill bars
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('animate-skill');
            }, index * 100);
          });
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

  const technicalSkills = [
    { skill: 'Python', percentage: 85 },
    { skill: 'Java', percentage: 75 },
    { skill: 'C', percentage: 70 },
    { skill: 'HTML/CSS', percentage: 90 },
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'React.js', percentage: 75 },
    { skill: 'Node.js', percentage: 70 },
    { skill: 'MySQL', percentage: 80 },
    { skill: 'MongoDB', percentage: 75 },
    { skill: 'AWS', percentage: 70 }
  ];

  const softSkills = [
    { skill: 'Problem Solving', percentage: 90 },
    { skill: 'Communication', percentage: 85 },
    { skill: 'Teamwork', percentage: 90 },
    { skill: 'Adaptability', percentage: 85 },
    { skill: 'Self-Learning', percentage: 95 },
    { skill: 'Time Management', percentage: 80 }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Skills" 
          subtitle="What I bring to the table" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-teal-600 dark:text-teal-400" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-bar opacity-0 transition-opacity duration-500">
                  <SkillBar skill={skill.skill} percentage={skill.percentage} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-teal-600 dark:text-teal-400" />
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-bar opacity-0 transition-opacity duration-500">
                  <SkillBar skill={skill.skill} percentage={skill.percentage} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Database className="h-12 w-12 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Databases</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">MySQL, PostgreSQL, MongoDB</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Server className="h-12 w-12 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Cloud</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">AWS Services, Deployment</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Layers className="h-12 w-12 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Web Dev Tools</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">Git, GitHub, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;