import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: 'AWS Cloud Virtual Internship',
      company: 'AICTE-Eduskills',
      duration: 'April 2024 - June 2024',
      description: [
        'Gained hands-on experience with Amazon Web Services (AWS) cloud infrastructure and services',
        'Worked extensively with EC2, S3, RDS, IAM, VPC, and AWS CLI',
        'Applied AWS Well-Architected Framework principles to design and deploy cloud solutions',
        'Completed real-world projects deploying scalable and resilient web applications'
      ],
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200'
    },
    {
      title: 'Google AI-ML Virtual Internship',
      company: 'AICTE-Eduskills',
      duration: 'January 2024 - March 2024',
      description: [
        'Learned AI/ML fundamentals and practical implementation using Google Cloud Platform',
        'Studied and applied various machine learning algorithms for classification and regression problems',
        'Developed data preprocessing pipelines and feature engineering techniques',
        'Built and deployed machine learning models for real-world applications'
      ],
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200'
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Experience" 
          subtitle="My Professional Journey" 
        />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;