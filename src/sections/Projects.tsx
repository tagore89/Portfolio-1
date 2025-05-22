import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Airline Reservation System',
      description: 'A comprehensive reservation portal with user and admin modules and integrated login system, providing seamless booking experience.',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      githubLink: 'https://github.com/',
    },
    {
      title: 'Bus Ticket Booking System',
      description: 'Full-stack application for online bus ticket booking with integrated payment gateway and real-time seat availability updates.',
      image: 'https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/',
      demoLink: 'https://bus-booking-phanindra.vercel.app/'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with separate modules for students, faculty, and administrators to facilitate online education.',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      githubLink: 'https://github.com/',
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="Some of my recent work" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 transition-colors"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
